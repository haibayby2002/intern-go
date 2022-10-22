import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { shoes } from "./data/shoes.json";


// import './assets/main.css'
const store = createStore({
    state () {
      return {
        product_items: shoes,
        cart_items: [],
      }
    },
    mutations: {
      add_item_to_cart(state, item_id){
        let item = store.state.product_items.filter((x) => x.id == item_id)
        delete item.description
        item = item[0]
        item['quantity'] = 1
        store.state.cart_items.push(item)
      },
      remove_item_from_cart(state, item_id){
        // Delete
        store.state.cart_items = store.state.cart_items.filter((x) => x.id != item_id)
        // Update status
        let index = store.state.product_items.findIndex((x) => x.id == item_id)
        
      },
      update_quantity(state, obj){
        let index = store.state.cart_items.findIndex((x) => x.id == obj['id'])
        // console.log(obj['quantity'])
        let new_quantity = obj['quantity']
        store.state.cart_items[index]['quantity'] = new_quantity
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