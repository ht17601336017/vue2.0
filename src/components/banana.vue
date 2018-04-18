<template>
 <div class="hello">
     <h1>{{msg}}</h1>
     <button @click="getRote">get param</button>
     <router-link to="/apple">go to apple red</router-link>
     <router-view></router-view>
     <button @click="addOne">add one</button>
     <button @click="minOne">min one</button>
 </div>
     
</template>
<script>
    export default {
       data(){
         return {
            msg:"i am apple",
            price:15
         }
       },
       methods:{
         getRote(){
            console.log(this.$route.params)
         },
         addOne(){
            this.$store.commit('increment',this.price)
         },
         minOne(){
            this.$store.commit('decrement',this.price)
         }
       }
    };
</script>

<style >
 
</style>
