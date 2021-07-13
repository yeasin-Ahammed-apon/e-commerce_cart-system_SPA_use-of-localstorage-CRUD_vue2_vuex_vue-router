<template>
  <div >  
    <div class="row mt-1">    
        <div class="col-12 col-sm-8" >
        <div class="container">
          <div v-for="(i,index) in item" :key="index" class="card cardsizing">
            <img :src="i.img" class="card-img-top" alt="wow">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary" @click="addtocart(i)">Add to cart</a>
            </div>
          </div>
        </div>
        </div>
        <div class="col-12 col-sm-4 ">
          <div class="row">
            <floating-cart class=" sticky-top floating "/>    
            <sidecart class="sticky-top side-cart" />
          </div>
        </div>
    </div>  
      
  </div>
</template>

<script>
import Sidecart from "../components/Side_cart.vue"
import FloatingCart from '../components/Floating_cart'
export default {
  components: { 
    Sidecart ,
    FloatingCart,
    },
    data() {
      return {
        item:[],        
      };
    },
    mounted() {
      var k = this.$store.getters.AllItems
      this.item = k.filter(i => i.id == this.$route.params.id)      
    },  
     methods: {
        addtocart(payload) {        
        this.$store.commit('addtocart', payload);     
   },
 },          
}
</script>

<style>
 @media only screen and (max-width: 600px) {
  .side-cart{
  display: none;
  }
  
}
@media only screen and (min-width: 600px) {
  .cardsizing{
    width: 45%;
    margin: 0 auto;
  }
  .floating_cart{
    display: none;
  }
}

</style>