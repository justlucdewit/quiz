<template>
  <div id="app">
    <!--header with a score counter and project name-->
    <Header 
      :correct="numCorrect" 
      :total="numTotal"
      :restartQuiz="restartQuiz"
      :setCatagory="setCatagory"
      :setDificulty="setDificulty"
      :cat="selectedCatagory"
      :dif="selectedDificulty"
    />

    <!--question area-->
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <QuestionBox
            v-if="questions.length && questionIndex < 10"
            :currentquestion="questions[questionIndex]"
            :nextQuestion="nextQuestion"
            :increment="incrementCorrectAnswers"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "app",
  components: {
    Header,
    QuestionBox
  },

  data() {
    return {
      questions: [],
      questionIndex: 0,
      numCorrect: 0,
      numTotal: 0,
      selectedCatagory: "All",
      selectedDificulty: "mixed"
    };
  },

  methods: {
    nextQuestion() {
      this.questionIndex++;
    },

    incrementCorrectAnswers(bool) {
      this.numTotal++;
      if (bool) {
        this.numCorrect++;
      }
    },

    setCatagory(cat){
      this.selectedCatagory = cat;
    },

    setDificulty(cat){
      console.log("set new cat")
      this.selectedDificulty = cat;
    },

    getCatagoryNumber(cat){
      switch(cat){
        case 'General Knowledge': return 9;
        case 'Books': return 10;
        case 'Films': return 11;
        case 'Music': return 12;
        case 'Musicals/Theatre': return 13;
        case 'Television': return 14;
        case 'Video games': return 15;
        case 'Board games': return 16;
        case 'Science & Nature': return 17;
        case 'Computers': return 18;
        case 'Math': return 19;
        case 'Mythology': return 20;
        case 'Sports': return 21;
        case 'Geography': return 22;
        case 'History': return 23;
        case 'Politics': return 24;
        case 'Art': return 25;
        case 'Celebrities': return 26;
        case 'Animals': return 27;
        case 'Vehicles': return 28;
        case 'Comics': return 29;
        case 'Gadgets': return 30;
        case 'Anime/Manga': return 31;
        case 'Cartoons/Animations': return 32;
      }
      return 0;
    },

    getNewQuestions(){
      let url = `https://opentdb.com/api.php?amount=10`;

      if (this.selectedDificulty !== "mixed"){
        url = url + `&difficulty=${this.selectedDificulty}`;
      }

      if (this.selectedCatagory !== "All"){
        url = url + `&category=${this.getCatagoryNumber(this.selectedCatagory)}`;
      }

      console.log(url);
      fetch(url, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = jsonData.results;
      });
    },

    restartQuiz(){
      this.getNewQuestions();
      this.numTotal = 0;
      this.numCorrect = 0;
      this.questionIndex = 0;
    }
  },

  mounted: function() {
    this.getNewQuestions();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
