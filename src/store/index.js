import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({  
  state: {    
    items:
      [
      {id:1,name:"apple1",price:2,img:"https://via.placeholder.com/600/771796",details:"this is some details about the data...........1................"},
      {id:2,name:"apple2",price:2,img:"https://via.placeholder.com/600/772796",details:"this is some details about the data...........2................"},
      {id:3,name:"apple3",price:2,img:"https://via.placeholder.com/600/773796",details:"this is some details about the data...........3................"},
      {id:4,name:"apple4",price:2,img:"https://via.placeholder.com/600/774796",details:"this is some details about the data...........4................"},
      {id:5,name:"apple5",price:2,img:"https://via.placeholder.com/600/775796",details:"this is some details about the data...........5................"},
      {id:6,name:"apple6",price:2,img:"https://via.placeholder.com/600/776796",details:"this is some details about the data...........6................"},
      {id:7,name:"apple7",price:2,img:"https://via.placeholder.com/600/777796",details:"this is some details about the data...........7................"},
      {id:8,name:"apple8",price:2,img:"https://via.placeholder.com/600/778796",details:"this is some details about the data...........8................"},
      {id:9,name:"apple9",price:2,img:"https://via.placeholder.com/600/779796",details:"this is some details about the data...........9................"},
      {id:10,name:"apple10",price:2,img:"https://via.placeholder.com/600/77106",details:"this is some details about the data...........10................"},
      {id:11,name:"apple11",price:2,img:"https://via.placeholder.com/600/77117116",details:"this is some details about the data...........11................"},
      ],
    cart:[],   
    total:0 
  },
  getters:{
    AllItems(state){return state.items},
    AllCartItems(state){return state.cart},
    Totalprice(state){      
      state.total = 0      
      state.cart.forEach(i => {
        state.total += i.price*i.quantity        
      });
      return state.total
    }
  },
  mutations: {
    getAllItems(state,payload){state.items = payload},
    getdatafromlocalstorage(state,payload){state.cart = payload},
    addtocart(state,payload){             
      //  if the item already exist or not      
      var x = state.cart.some(i => i.id == payload.id )
      if (x == true) {  
          // console.log('exist')
          state.cart.filter(i => {
            if (i.id === payload.id) {
              if (i.quantity >= 10) {
                console.log("can not add more then 10 piece of a item")              
              }else{                
                i.quantity++
              }                        
            }
          })
          state.cart.push()          
        } else {
          payload.quantity = 1
          state.cart.push(payload)          
        }      
        localStorage.cart = JSON.stringify(state.cart )         
      },
      Inc(state,payload){
        state.cart.filter(i => {
          if (i.id === payload) {
            if (i.quantity >= 10) {
              console.log("can not add more then 10 piece of a item")              
            }else{                
              i.quantity++
            }                        
          }
        })
        localStorage.cart = JSON.stringify(state.cart ) 
        state.cart.push()
      },
      Dec(state,payload){
        state.cart.filter(i => {
          if (i.id === payload) {
            if (i.quantity <= 1) {
              console.log("can not add less then 0 piece of a item")              
            }else{                
              i.quantity--
            }                        
          }
        })
        localStorage.cart = JSON.stringify(state.cart ) 
        state.cart.push()
      },
    deletefromcart(state,payload){
      state.cart.splice(payload,1)
      localStorage.cart = JSON.stringify(state.cart ) 
    }
  }  
})
