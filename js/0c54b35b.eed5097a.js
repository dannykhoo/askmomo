(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0c54b35b"],{8041:function(t,e,i){"use strict";var n=i("af78"),s=i.n(n);s.a},8712:function(t,e,i){t.exports=i.p+"media/r4.c7b4d3d6.mp3"},"8b24":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"text-white style1"},[t.typeStarted?n("div",[n("neon-effect",{attrs:{option:t.optNeon}})],1):t._e(),n("vue-particles",{attrs:{color:"#dedede",clickMode:"repulse",particlesNumber:150}}),n("div",{staticClass:"column justify-center",staticStyle:{height:"450px"}},[n("div",{staticClass:"row justify-center"},[n("h5",{staticClass:"col-12 text-center test"},[t._v(" "+t._s(t.data.Answer)+"\n      ")])])]),n("div",{staticClass:"column justify-center",staticStyle:{height:"150px"}},[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col-10"},[n("q-input",{attrs:{dark:"",outlined:"",readonly:t.inputLocked,dense:"",type:"textarea",rows:"2"},on:{input:t.onInput,focus:t.onFocus},model:{value:t.data.Petition,callback:function(e){t.$set(t.data,"Petition",e)},expression:"data.Petition"}})],1),n("div",{staticClass:"col-2"},[n("q-btn",{attrs:{label:"Ask","no-caps":"",icon:"notifications",outline:"",disable:t.inputLocked},on:{click:t.onSubmit}})],1)])]),n("audio",{ref:"myAudio",attrs:{src:i("8712"),id:"myAudio",loop:"loop",autoplay:"autoplay"}})],1)},s=[],o=(i("0967"),{name:"PageIndex",components:{},data:function(){return{optNeon:{len:20,count:50,rate:20,dieChance:.05,sparkChance:.1,sparkDist:10,sparkSize:2,contentLight:60,shadowToTimePropMult:6,bgColorArr:[10,110,10]},firstTouch:!1,typeDelay:1e3,typeAnswer:"",typeAnswerIndex:0,typeFakeMode:!1,typeStarted:!1,inputLocked:!1,typePreset:["m","o","m","o"," ","p","l","e","a","s","e"," ","a","n","s","w","e","r"," ","t","h","e"," ","f","o","l","l","o","w","i","n","g"," ","q","u","e","s","t","i","o","n"],lbPetition:"",data:{Petition:"",Answer:""}}},methods:{startNow:function(){if(this.typeAnswerIndex<=this.typeAnswer.length){this.typeStarted=!0;var t=this,e=t.getRandomInt(20,500);setTimeout((function(){t.data.Answer=t.typeAnswer.slice(0,t.typeAnswerIndex),t.typeAnswerIndex++,t.startNow()}),e)}else{console.log("end");var i=this,n=i.getRandomInt(3e3,6e3);i.inputLocked=!1,i.typeFakeMode=!1,i.data.Petition="",i.typeAnswer="",setTimeout((function(){i.typeStarted=!1,i.data.Answer=""}),n)}},onFocus:function(){this.firstTouch||(this.$refs.myAudio.play(),this.firstTouch=!1)},onInput:function(t){var e=this.data.Petition.indexOf("/");if(e>-1)console.log("FakeMode TURN OFF"),this.data.Petition=this.data.Petition.substr(0,i),this.typeFakeMode=!1,this.typeAnswer="";else{var i=this.data.Petition.indexOf(".");i>-1?this.typeFakeMode?(console.log("FakeMode TURN OFF"),this.data.Petition=this.data.Petition.substr(0,i),this.typeFakeMode=!1,this.data.Petition.length<=this.typePreset.length&&(this.data.Petition=this.data.Petition+this.typePreset[this.data.Petition.length])):(console.log("FakeMode TURN ON"),this.typeFakeMode=!0,this.data.Petition=this.data.Petition.substr(0,i),this.data.Petition.length<=this.typePreset.length&&(this.data.Petition=this.data.Petition+this.typePreset[this.data.Petition.length])):this.typeFakeMode&&(this.typeAnswer=this.typeAnswer+this.data.Petition.substr(this.data.Petition.length-1,this.data.Petition.length),console.log("Fake Progress",t.length),this.data.Petition=this.data.Petition.substr(0,this.data.Petition.length-1),this.data.Petition.length<=this.typePreset.length&&(this.data.Petition=this.data.Petition+this.typePreset[this.data.Petition.length]))}},onSubmit:function(){var t=this.data.Petition.indexOf("please"),e=this.data.Petition.indexOf("momo"),i=this.data.Petition.indexOf("answer"),n=this.data.Petition.indexOf("tell");if(t>-1&&e>-1&&i>-1||t>-1&&e>-1&&n>-1){var s=this;this.inputLocked=!0,""==this.typeAnswer.trim()&&(this.typeAnswer="I will not answer this question");var o=s.getRandomInt(3e3,5e3);setTimeout((function(){s.typeAnswerIndex=0,s.startNow()}),o)}else console.log("i will not answer")},getRandomInt:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}},mounted:function(){setTimeout((function(){}),3e3),console.log("isDesktop",this.$q.platform.is.desktop)}}),a=o,d=(i("8041"),i("2877")),r=i("9989"),l=i("27f9"),h=i("9c40"),c=Object(d["a"])(a,n,s,!1,null,null,null);e["default"]=c.exports;c.options.components=Object.assign({QPage:r["a"],QInput:l["a"],QBtn:h["a"]},c.options.components)},af78:function(t,e,i){}}]);