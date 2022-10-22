import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { shoes } from "./data/shoes.json";
import { VueCookieNext } from 'vue-cookie-next'

// import './assets/main.css'
const store = createStore({
    state () {
      return {
        product_items: shoes,
        cart_items: [],
        // cart_items: VueCookieNext.keys().map((value, index)=>{
        //   console.log(value)
        //   let item_id = parseInt(value)
        //   let item_quantity = VueCookieNext.getCookie(value)
        //   let item = store.state.product_items.filter((x) => x.id == value)[0]
        //   return {
        //     'id' : item_id, 
        //     'quantity':item_quantity,
        //     'name':item.name,
        //     'image':item.image,
        //     'color': item.color,
        //     'price' : item.price
        //   }
        // })
      }
    },
    mutations: {
      add_item_to_cart(state, item_id){
        let item = store.state.product_items.filter((x) => x.id == item_id)
        delete item.description
        item = item[0]
        item['quantity'] = 1
        store.state.cart_items.push(item)
        VueCookieNext.setCookie(item_id, item['quantity'])  // cookie writting
        
      },
      remove_item_from_cart(state, item_id){
        // Delete
        store.state.cart_items = store.state.cart_items.filter((x) => x.id != item_id)
        // Update status
        let index = store.state.product_items.findIndex((x) => x.id == item_id)
        VueCookieNext.removeCookie(item_id) // cookie removing
        
      },
      update_quantity(state, obj){
        let index = store.state.cart_items.findIndex((x) => x.id == obj['id'])
        // console.log(obj['quantity'])
        let new_quantity = obj['quantity']
        store.state.cart_items[index]['quantity'] = new_quantity
        VueCookieNext.setCookie(obj['id'], new_quantity)
        console.log(VueCookieNext.getCookie(obj['id']))
      }
    },
    getters:{
      get_total() {
        if (store.state.cart_items.length == 0) {
          return 0
        }
        return store.state.cart_items.reduce((res,acc)=>res + acc.price * acc.quantity,0)
      },
      items_added_to_cart() {
        // console.log(store.state.cart_items.map((x) => (x.id)))
        return store.state.cart_items.map((x) => (x.id))
      }
      
    }
  })


const app = createApp(App)

app.use(store)
app.mount('#app')
