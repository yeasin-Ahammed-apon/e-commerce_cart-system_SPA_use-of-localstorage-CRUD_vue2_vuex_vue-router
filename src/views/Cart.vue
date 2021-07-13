<template>
<div >        
    <li class="list-group-item text-center" >Cart</li>
    <div v-if="cart_len.length == 0 ">
      <li class="list-group-item text-center bg-light"  >0 item added</li>
    </div>
    <div v-else>
      <li class="list-group-item text-center" >
      Total Price: {{totalPrice}}
      </li>
      <table class="table border-1 bg-light">
      <thead>    
      </thead>
      <tbody>
        <tr v-for="(i,index) in cart" :key="index">
          <td>{{i.name}} </td>
          <td>{{i.price * i.quantity}} tk </td>
          <td>
            <button class="btn btn-dark" @click="inc(i.id)">
              +
            </button>
             {{i.quantity}}
             <button class="btn btn-dark" @click="dec(i.id)">
              -
            </button>
          </td>         
          <td>
            <span @click="deletefromcart(index)" class="btn btn-danger ms-5" >
              <i class="fas fa-trash-alt"></i>
            </span>
          </td>
        </tr>    
      </tbody>
    </table>
    
    </div>    
</div>
</template>

<script>
export default {
  data() {
    return {
      cart_len:[],
      cart:[],
      tPrice:0,
      currentPath:[]
    };
  },
  mounted() {
    this.cart = this.getallcartitems
    this.cart_len = this.$store.getters.AllCartItems
  },
  updated() {      
    this.cart = this.getallcartitems
    this.cart_len = this.$store.getters.AllCartItems
  },
  methods: {
    deletefromcart(payload){this.$store.commit('deletefromcart', payload)},
    inc(payload){this.$store.commit('Inc', payload)},
    dec(payload){this.$store.commit('Dec', payload)},
  },
  computed: {
    totalPrice() {return  this.$store.getters.Totalprice;},
    getallcartitems() {return this.$store.getters.AllCartItems}  
  },  
}
</script>
<style >
.sidecart{
  top:10%;
  height: calc(80vh);
  overflow-y: scroll;
}

</style>

