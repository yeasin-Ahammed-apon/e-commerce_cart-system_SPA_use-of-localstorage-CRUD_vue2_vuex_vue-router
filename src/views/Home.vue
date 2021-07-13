<template>
<div class="parents" >  
  <div class="row mt-3">    
        <div class="col-12 col-sm-8" >          
          <div class="container">
          <div v-if="load==false">
            <loader/>
          </div>
            <div class="row" v-else>
            <div v-for="(i,index) in items" :key="index" class="card border shadow col-12 col-sm-4" >
              <img :src="i.img" class="card-img-top" :alt="i.name +'.jpg'">
              <div class="card-body">
                <h5 class="card-title">{{i.name}}</h5>
                <p class="card-text text-truncate ">
                  {{i.details}} <br>
                  Price : <span class="btn btn-dark pe-none">{{i.price}}</span>
                </p>
                <router-link :to="{ name: 'View', params: { id: i.id }}" class="btn btn-success">View</router-link><br>
                <div class="row">
                      <span class="btn btn-primary mt-1 col-8" @click="addtocart(i)">
                        Add to cart
                      </span>            
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      <div class="col-12 col-sm-4 mt-5 ">
        <floating-cart class="sticky-top floating "/>  
        <sidecart class="sticky-top side-cart"  />
      </div>
    </div>  
</div>
</template>
<script>
import Sidecart from "../components/Side_cart.vue"
import Loader from "../components/Loader.vue"
import FloatingCart from "../components/Floating_cart.vue"

export default {  
  components: { 
    Sidecart,
    Loader,
    FloatingCart
     },
 data() {
   return { 
     load:false
     ,
   };
 },
 mounted() {
   this.items = this.$store.getters.AllItems
   setInterval(() => {     
     this.load = true    
   }, 1000);
 },
 methods: {
   addtocart(payload) {        
     this.$store.commit('addtocart', payload);     
   },
 }, 
}
</script>
<style scoped>
.loader{
    height: 100vh;        
    bottom: 50%;    
}
.m-1 {
    margin: 10px;
}
.parents{
  
}

</style>
