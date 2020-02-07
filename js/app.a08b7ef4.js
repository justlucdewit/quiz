(function(e){function t(t){for(var r,o,c=t[0],a=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==s[a]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/quiz/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("3243"),s=n.n(r);s.a},"1f42":function(e,t,n){},3243:function(e,t,n){},5059:function(e,t,n){"use strict";var r=n("7741"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("f8c4"),n("b1ef"),n("4183"),n("228f");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{correct:e.numCorrect,total:e.numTotal,restartQuiz:e.restartQuiz,setCatagory:e.setCatagory,setDificulty:e.setDificulty,cat:e.selectedCatagory,dif:e.selectedDificulty}}),n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[e.questions.length?n("QuestionBox",{attrs:{currentquestion:e.questions[e.questionIndex],nextQuestion:e.nextQuestion,increment:e.incrementCorrectAnswers}}):e._e()],1)],1)],1)],1)},i=[],o=(n("c185"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",{attrs:{tabs:""}},[n("b-nav-item",{attrs:{disabled:""}},[n("b",[e._v("Quiz app")]),n("br"),e._v(" catagory: "+e._s(e.cat)),n("br"),e._v(" difficulty: "+e._s(e.dif)+" ")]),n("b-nav-item",{attrs:{disabled:""}},[e._v("Counter: "+e._s(e.correct)+"/"+e._s(e.total))])],1),n("span",{staticClass:"menu-buttons"},[n("div",[n("b-dropdown",{staticClass:"m-md-2",attrs:{text:"catagory",variant:"success"}},[n("b-dropdown-item",{on:{click:function(t){return e.setCatagory("All")}}},[e._v("All")]),n("b-dropdown-divider"),e._l(e.catagories,(function(t){return n("b-dropdown-item",{key:t,on:{click:function(n){return e.setCatagory(t)}}},[e._v(e._s(t))])}))],2)],1),n("div",[n("b-dropdown",{staticClass:"m-md-2",attrs:{text:"difficulty",variant:"success"}},e._l(e.dificulties,(function(t){return n("b-dropdown-item",{key:t,on:{click:function(n){return e.setDificulty(t)}}},[e._v(e._s(t))])})),1)],1),n("b-button",{staticClass:"restart-button",attrs:{variant:"danger"},on:{click:e.restartQuiz}},[e._v("Restart quiz")])],1)],1)}),c=[],a=(n("2e90"),{props:{correct:Number,total:Number,restartQuiz:Function,setCatagory:Function,setDificulty:Function,cat:String,dif:String},data:function(){return{catagories:["General Knowledge","Books","Films","Music","Musicals/Theatre","Television","Video games","Board games","Science & Nature","Computers","Math","Mythology","Sports","Geography","History","Politics","Art","Celebrities","Animals","Vehicles","Comics","Gadgets","Anime/Manga","Cartoons/Animations"],dificulties:["mixed","easy","medium","hard"]}}}),u=a,l=(n("8baf"),n("a0ef")),d=Object(l["a"])(u,o,c,!1,null,null,null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",[n("template",{slot:"lead"},[e._v(e._s(e._f("fixEscapeCodes")(e.currentquestion.question)))]),n("hr",{staticClass:"my-4"}),n("b-list-group",e._l(e.shuffledAnswers,(function(t,r){return n("b-list-group-item",{key:r,class:e.answerClass(r),on:{click:function(t){return t.preventDefault(),e.selectAnswer(r)}}},[e._v(e._s(e._f("fixEscapeCodes")(t)))])})),1),n("b-button",{attrs:{variant:"success",disabled:null===e.selectedIndex||e.answered},on:{click:e.submitAnswer}},[e._v("Submit ")]),n("b-button",{attrs:{variant:"primary",disabled:!e.answered},on:{click:e.nextQuestion}},[e._v("Next question")])],2)],1)},p=[],m=(n("2ea4"),n("fa84"),n("ba85"),n("34b3"),n("a771")),b=n("2ef0"),g=n.n(b),y={props:{currentquestion:Object,nextQuestion:Function,increment:Function},data:function(){return{selectedIndex:null,correctIndex:null,shuffledAnswers:null,answered:!1}},methods:{submitAnswer:function(){var e=!1;this.selectedIndex===this.correctIndex&&(e=!0),this.answered=!0,this.increment(e)},selectAnswer:function(e){this.answered||(this.selectedIndex=e)},shuffleAnswers:function(){var e=[].concat(Object(m["a"])(this.currentquestion.incorrect_answers),[this.currentquestion.correct_answer]);this.shuffledAnswers=g.a.shuffle(e),this.correctIndex=this.shuffledAnswers.indexOf(this.currentquestion.correct_answer),console.log(this.shuffledAnswers)},answerClass:function(e){var t="";return this.answered||this.selectedIndex!==e?this.answered&&this.correctIndex===e?t="correct":this.answered&&this.selectedIndex===e&&this.correctIndex!==e&&(t="incorrect"):t="selected",t}},filters:{fixEscapeCodes:function(e){return e.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&def;/g,"°")}},watch:{currentquestion:function(){this.selectedIndex=null,this.answered=!1,this.shuffleAnswers()}},computed:{answers:function(){var e=Object(m["a"])(this.currentquestion.incorrect_answers);return e.push(this.currentquestion.correct_answer),e}},mounted:function(){this.shuffleAnswers()}},v=y,w=(n("5059"),Object(l["a"])(v,h,p,!1,null,null,null)),x=w.exports,_={name:"app",components:{Header:f,QuestionBox:x},data:function(){return{questions:[],questionIndex:0,numCorrect:0,numTotal:0,selectedCatagory:"All",selectedDificulty:"mixed"}},methods:{nextQuestion:function(){this.questionIndex++},incrementCorrectAnswers:function(e){this.numTotal++,e&&this.numCorrect++},setCatagory:function(e){this.selectedCatagory=e},setDificulty:function(e){console.log("set new cat"),this.selectedDificulty=e},getCatagoryNumber:function(e){switch(e){case"General Knowledge":return 9;case"Books":return 10;case"Films":return 11;case"Music":return 12;case"Musicals/Theatre":return 13;case"Television":return 14;case"Video games":return 15;case"Board games":return 16;case"Science & Nature":return 17;case"Computers":return 18;case"Math":return 19;case"Mythology":return 20;case"Sports":return 21;case"Geography":return 22;case"History":return 23;case"Politics":return 24;case"Art":return 25;case"Celebrities":return 26;case"Animals":return 27;case"Vehicles":return 28;case"Comics":return 29;case"Gadgets":return 30;case"Anime/Manga":return 31;case"Cartoons/Animations":return 32}return 0},getNewQuestions:function(){var e=this,t="https://opentdb.com/api.php?amount=10";"mixed"!==this.selectedDificulty&&(t+="&difficulty=".concat(this.selectedDificulty)),"All"!==this.selectedCatagory&&(t+="&category=".concat(this.getCatagoryNumber(this.selectedCatagory))),console.log(t),fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.questions=t.results}))},restartQuiz:function(){this.getNewQuestions(),this.numTotal=0,this.numCorrect=0,this.questionIndex=0}},mounted:function(){this.getNewQuestions()}},C=_,A=(n("034f"),Object(l["a"])(C,s,i,!1,null,null,null)),q=A.exports,O=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(O["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(q)}}).$mount("#app")},7741:function(e,t,n){},"8baf":function(e,t,n){"use strict";var r=n("1f42"),s=n.n(r);s.a}});
//# sourceMappingURL=app.a08b7ef4.js.map