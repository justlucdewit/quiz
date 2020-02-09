<template>
    <div>
        <b-jumbotron>
            Congratulations, you have finished the quiz.<br>
            you did a quiz about <b>{{ catagory }}</b> on the <b>{{ difficulty }}</b> difficulty<br><br>

            you got {{ numOfCorrect }} questions correct out of {{ numOfQuestions }}

            <div v-if="numOfCorrect < 5">sorry, maybe you should practise more 😔</div>
            <div v-if="numOfCorrect >= 5 && numOfCorrect < 9">WOW goodjob 👍</div>
            <div v-if="numOfCorrect >= 9">damn, you are bigbrain 🧠</div>
        </b-jumbotron>
    </div>
</template>

<script>
    export default{
        props: {
            catagory:String,
            difficulty:String,
            numOfQuestions:Number,
            numOfCorrect:Number
        }
    }
</script>

<style>

</style>