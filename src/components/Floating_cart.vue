<template>
  <router-link to="/cart" class="floating_cart shadow-lg text-decoration-none">
      <div class="item rounded-top">
        <b>Item: {{getallitemlength.length}}</b>
      </div>      
      <div class="price rounded-bottom">
        <b>Price: {{totalprice}} ৳</b>
      </div>
  </router-link >
</template>

<script>
export default {
  computed: {
    totalprice() {
      return this.$store.getters.Totalprice
    },
    getallitemlength(){
      return this.$store.getters.AllCartItems
    }
  
  },

}
</script>

<style scoped>
.floating_cart{  
  width: auto;
  height: 10vh;
  text-align: center;    
  position: fixed;
  right: 10px;
  top:30%;
    
  
  
}
.item{
  background-color: rgb(250, 250, 250);
  color: rgb(61, 179, 139);
  padding-left: 5px;
  padding-right: 5px;
  padding-top:3px;
  padding-bottom: 3px;
}
.price{
  background-color: rgb(235, 219, 219);
  color: rgb(27, 24, 5);
  padding-left: 5px;
  padding-right: 5px;
  padding-top:3px;
  padding-bottom: 3px;
}



</style>