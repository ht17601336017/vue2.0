<template>
  <div>
     {{hello}}
     <button @click="emitMyEvent">emit</button>
     {{numberToDo}}
     <slot>no slot</slot>
  </div>
</template>

<script>
    export default {
    props:{'number-to-do':String},
      methods:{
         emitMyEvent(){
           this.$emit('myEvent',this.hello)
         }
      },
       data(){
         return {
            hello:"i am component a"
         }
       }
    };
</script>

<style >
 
</style>
