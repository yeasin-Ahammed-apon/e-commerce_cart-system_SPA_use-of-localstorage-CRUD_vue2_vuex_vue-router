<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Shop</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">    
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>                  
        </li>
        <li class="nav-item">
              <router-link to="/cart" type="button" class="btn btn-light shadow position-relative">
                      Cart
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                       {{totalcartitem}}
                            <span class="visually-hidden">Cart</span>
                      </span>
              </router-link>                      
        </li>                
      </ul>
        
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="work nicely with db" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">search </button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      cart:[],
    };
  },
  computed: {
    totalcartitem: function ()  {
      
      return this.$store.getters.AllCartItems.length
    },
  
  },
  

}
</script>

<style scoped>
.navanava{
  padding: 0%;
  margin: 0%;
}

</style>