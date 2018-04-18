<template>
  <div id="app">
     <img src="./assets/logo.png">
     <router-link to="/apple" tag="li">Go to apple</router-link>
     <router-link to="/banana">go to banana</router-link>
     <router-view></router-view>
     {{totalPrice}}
     <apple></apple>
     <banana></banana>
  </div>
</template>
<script>
import Apple from './components/apple.vue'
import Banana from './components/banana.vue'
export default {
  name: 'app',
  components:{
  Apple,Banana
  },
  computed:{
     totalPrice(){
        return this.$store.state.totalPrice
     }
  },
  methods:{
   child(p){
      console.log('myEvent'+p)
   },
   toggles(){
      if(this.currentView==='com-a'){
         this.currentView='com-b'
      } else{
      this.currentView='com-a'
      }
   }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:true,
      currentView:'com-a',
  
    }
  }
}
</script>

<style>

</style>
