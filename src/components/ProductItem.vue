
<script setup>
import {computed, onMounted, ref, shallowRef} from "vue"
import {useStore} from 'vuex'
const props = defineProps({
  id: Number,
  src: String,
  name: String,
  description: String,
  price: Number,
  color: String
});
const store = useStore()
// const count = computed(() => store.state.count)
// const items = computed(()=> store.state.product_items)




const item_added_to_cart = shallowRef(computed(() => store.getters.items_added_to_cart))
const is_added_to_cart = computed(()=> item_added_to_cart.value.includes(props.id))
function add_to_cart(){
    store.commit('add_item_to_cart', props.id)
    
    // console.log(item_added_to_cart.value)
    // console.log(is_added_to_cart.value)
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
.shop-item {
    padding: 40px 0
}

.shop-item:first-child {
    padding-top: 0
}

.shop-item-image {
    border-radius: 30px;
    height: 380px;
    display: flex;
    align-items: center;
    overflow: hidden
}

.shop-item-image img {
    display: block;
    width: 100%;
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, .2));
    transform: rotate(-24deg);
    margin-left: -16px
}

@media only screen and (max-width:320px) {
    .shop-item-image {
        height: 240px
    }
}

.shop-item-name {
    font-size: 20px;
    font-weight: 700;
    margin: 26px 0 20px;
    line-height: 1.5
}

.shop-item-description {
    font-size: 13px;
    color: #777;
    line-height: 1.8;
    margin-bottom: 20px
}

.shop-item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.shop-item-price {
    font-size: 18px;
    font-weight: 700
}

.shop-item-button {
    cursor: pointer;
    background-color: #f6c90e;
    font-weight: 700;
    font-size: 14px;
    box-sizing: border-box;
    width: auto;
    height: 46px;
    min-width: 46px;
    padding: 16px 20px;
    border-radius: 100px;
    transition: all .25s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden
}

.shop-item-button:hover {
    background-color: #f8d43f;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, .15)
}

.shop-item-button.inactive {
    width: 46px;
    pointer-events: none;
    cursor: default
}

.shop-item-button-cover {
    width: 16px;
    height: 16px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center
}

.shop-item-button-cover-check-icon {
    width: 100%;
    height: 100%;
    transform: translate(-100%, -73%) rotate(-45deg);
    position: absolute;
    left: 50%;
    top: 50%
}

.shop-item-button-cover-check-icon:after,
.shop-item-button-cover-check-icon:before {
    content: "";
    display: block;
    background-color: #303841;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 10px
}

.shop-item-button-cover-check-icon:before {
    width: 3px;
    height: 50%
}

.shop-item-button-cover-check-icon:after {
    width: 100%;
    height: 3px
}

@media only screen and (max-width:480px) {
    .shop-item {
        padding: 20px 0
    }
}
</style>
