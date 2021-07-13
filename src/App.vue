<template>
  <div id="app">         
    <navbar class="sticky-top"  style="z-index:100;"/>                
    <router-view/>                
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue"

export default {
   mounted() {      
      if (localStorage.getItem('cart')===null) {
        localStorage.setItem('cart','[]')        
      }  
      var x = JSON.parse(localStorage.cart) 
      this.$store.commit('getdatafromlocalstorage', x);
               
    },
  components: {
    Navbar,
    },
      
    
    
}
</script>
<style >
.row{
  padding: 0%;
  margin: 0%;
  padding-left: 0%;
  padding-right: 0%;
}

 

</style>
