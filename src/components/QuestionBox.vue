<template>
  <div>
    <b-jumbotron>
      <template slot="lead">{{ currentquestion.question | fixEscapeCodes}}</template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click.prevent="selectAnswer(index)"
          :class="answerClass(index)"
        >{{ answer | fixEscapeCodes}}</b-list-group-item>
      </b-list-group>

      <b-button
        variant="success"
        @click="submitAnswer"
        :disabled="selectedIndex === null || answered"
      >Submit
      </b-button>

      <b-button @click="nextQuestion" variant="primary" :disabled="!answered">Next question</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    currentquestion: Object,
    nextQuestion: Function,
    increment: Function
  },

  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: null,
      answered: false
    };
  },

  methods: {
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;

      this.increment(isCorrect);
    },

    selectAnswer(index) {
      if (!this.answered){
        this.selectedIndex = index;
      }
    },

    shuffleAnswers() {
      let answers = [
        ...this.currentquestion.incorrect_answers,
        this.currentquestion.correct_answer
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentquestion.correct_answer
      );
      console.log(this.shuffledAnswers);
    },

    answerClass(index) {
      let answeredClass = "";

      if (!this.answered && this.selectedIndex === index) {
        answeredClass = "selected";
      } else if (this.answered && this.correctIndex === index) {
        answeredClass = "correct";
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answeredClass = "incorrect";
      }
      return answeredClass;
    }
  },

  filters: {
    fixEscapeCodes(value){
      return value.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&def;/g, '°');
    }
  },

  watch: {
    currentquestion() {
      this.selectedIndex = null;
      this.answered = false;
      this.shuffleAnswers();
    }
  },

  computed: {
    answers() {
      let answers = [...this.currentquestion.incorrect_answers];
      answers.push(this.currentquestion.correct_answer);
      return answers;
    }
  },

  mounted() {
    this.shuffleAnswers();
  }
};
</script>

<style .scoped>
.list-group {
  margin-bottom: 15px !important;
}

.list-group-item:hover {
  background-color: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: lightblue !important;
}

.correct {
  background-color: lightgreen !important;
}

.incorrect {
  background-color: LightCoral !important;
}

.disabled {
  cursor: not-allowed !important;
}

.question-box-container{
  margin-top: 20px;
}
</style>