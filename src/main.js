import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redApple'
 Vue.use(VueRouter)
 Vue.use(Vuex)
  let store =new Vuex.Store({
  	 state:{
  	 	 totalPrice:0
  	 },
  	 mutations:{
  	 	 increment(state,price){
           state.totalPrice+=price
  	 	 },
  	 	 decrement(state,price){
           state.totalPrice-=price 
  	 	 }
  	 },
  	 actions:{
  	 	 increase(context,price){
  	 	 	 context.commit('increment',price)
  	 	 }
  	 	 
  	 }
  })
let router=new VueRouter({
	 routes:[
	  {
	  	path:'/apple',
	  component:Apple,
	  children:[
        {
        	path:'red',
	        component:RedApple,
        }
	  ]
	},
      {path:'/banana',component:Banana}
	 ]
})
/*var VueRouter=require('vue-router')*/
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
