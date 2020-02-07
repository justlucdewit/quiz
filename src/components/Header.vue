<template>
  <div>
    <b-nav tabs>
      <!--project name-->
      <b-nav-item disabled>
        <b>Quiz app</b><br>
        catagory: {{ cat }}<br>
        difficulty: {{ dif }}
      </b-nav-item>
      
      <!--correct counter-->
      <b-nav-item disabled>Counter: {{ correct }}/{{ total }}</b-nav-item>
    </b-nav>
    <span class="menu-buttons">
        
        <!--catagory selector-->
        <div>
          <b-dropdown text="catagory" class="m-md-2" variant="success">
            <b-dropdown-item @click="setCatagory('All')">All</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-for="catagory in catagories" :key="catagory" @click="setCatagory(catagory)">{{ catagory }}</b-dropdown-item>
          </b-dropdown>
        </div>

        <!--difficulty selector-->
        <div>
          <b-dropdown text="difficulty" class="m-md-2" variant="success">
            <b-dropdown-item v-for="difficulty in dificulties" :key="difficulty" @click="setDificulty(difficulty)">{{ difficulty }}</b-dropdown-item>
          </b-dropdown>
        </div>

        <!--restart quiz button-->
      
        <b-button variant="danger" class="restart-button" @click="restartQuiz">Restart quiz</b-button>
      </span>
  </div>
</template>

<script>
export default {
  props: {
    correct: Number, 
    total: Number,
    restartQuiz: Function,
    setCatagory: Function,
    setDificulty: Function,
    cat: String,
    dif: String
  },

  data(){
    return{
      catagories: ["General Knowledge", "Books", "Films", "Music", "Musicals/Theatre", "Television", "Video games", "Board games", "Science & Nature", "Computers", "Math", "Mythology", "Sports", "Geography", "History", "Politics", "Art", "Celebrities", "Animals", "Vehicles", "Comics", "Gadgets", "Anime/Manga", "Cartoons/Animations"],
      dificulties: ["mixed", "easy", "medium", "hard"]
    }
  }
};
</script>

<style>
  .dropdown-menu.show{
    max-height: 200px;
    overflow-y: scroll;
  }

  .nav{
    padding-bottom: 10px;
    align-items: center;
    justify-content: center;
  }

  .menu-buttons{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn{
    height: 50px;
  }

  .restart-button{
    justify-self: start;
  }

  @media only screen and (max-width: 600px) {
    .nav{
      justify-content: center;
    }
  }
</style>
