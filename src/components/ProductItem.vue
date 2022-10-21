
<script setup>
import {computed, onMounted, ref, shallowRef} from "vue"
import {useStore} from 'vuex'
const props = defineProps({
  src: String,
  name: String,
  description: String,
  price: Number,
  color: String
});
const store = useStore()
// const count = computed(() => store.state.count)
const items = computed(()=> store.state.product_items)

const emit = defineEmits({
    onAddToCart: ({ name, description, src, price }) => {
      return true
    }})

const is_added_to_cart = shallowRef(false)

function add_to_cart(){
    is_added_to_cart.value = true;
    emit('onAddToCart', props)
    // console.log()
    // console.log("In item ", props.name)
    
}


function remove_from_cart(){
    is_added_to_cart.value = false;
}
</script>

<template>
   <div class="shop-item">
        <div class="shop-item-image" :style="{'background-color': color}"><img
               :src="src"/>
        </div>
        <div class="shop-item-name">{{name}}</div>
        <div class="shop-item-description">{{description}}</div>
        <div class="shop-item-bottom">
            <div class="shop-item-price">${{price}}</div>
            <div v-if="is_added_to_cart" class="shop-item-button inactive">
                <div class="shop-item-button-cover">
                    <div class="shop-item-button-cover-check-icon"></div>
                </div>
            </div>
            <div v-else class="shop-item-button" @click="add_to_cart()">
                <p>ADD TO CART</p>
            </div>
            
        </div>
    </div>
</template>

<style scoped>

</style>
