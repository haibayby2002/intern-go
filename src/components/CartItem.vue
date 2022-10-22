
<script setup>
import { shallowRef } from "@vue/reactivity";
import {useStore} from 'vuex'
const props = defineProps({
  src: String,
  name: String,
  price: Number,
  id: Number,
  color: String
})

const store = useStore()
const quantity = shallowRef(1)
function increase_quantity(){
    quantity.value++;
    store.commit('update_quantity', {'id': props.id, 'quantity': quantity.value})
}

function decrease_quantity(){
    quantity.value--;
    if(quantity.value == 0){
        store.commit('remove_item_from_cart', props.id)
    }
    else {
        store.commit('update_quantity', {'id': props.id, 'quantity': quantity.value})
    }
}

function remove_cart_item(){
    store.commit('remove_item_from_cart', props.id)
}
</script>

<template>
   <div class="cart-item">
        <div class="cart-item-left">
            <div class="cart-item-image" :style="{'background-color': color}">
                <div class="cart-item-image-block"><img
                        :src="src">
                </div>
            </div>
        </div>
        <div class="cart-item-right">
            <div class="cart-item-name">{{name}}</div>
            <div class="cart-item-price">{{price}}</div>
            <div class="cart-item-actions">
                <div class="cart-item-count">
                    <div class="cart-item-count-button" @click="decrease_quantity">-</div>
                    <div class="cart-item-count-number">{{quantity}}</div>
                    <div class="cart-item-count-button" @click="increase_quantity">+</div>
                </div>
                <div class="cart-item-remove" @click="remove_cart_item"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
                    class="cart-item-remove-icon">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-item {
    display: flex;
    padding: 20px 0
}

.cart-item-left {
    flex: 0
}

.cart-item-right {
    flex: 1
}

.cart-item-name {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 10px
}

.cart-item-price {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px
}

.cart-item-actions,
.cart-item-count {
    display: flex;
    align-items: center;
    justify-content: flex-start
}

.cart-item-count {
    flex: 1
}

.cart-item-count-number {
    font-size: 14px;
    margin: 0 8px;
    width: 20px;
    text-align: center
}

.cart-item-count-button {
    cursor: pointer;
    width: 28px;
    height: 28px;
    line-height: 28px;
    border-radius: 100%;
    background-color: #eee;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.cart-item-count-button:hover {
    background-color: #ddd
}

.cart-item-remove {
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: all .25s ease;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6c90e;
    transition: .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.cart-item-remove:hover {
    background-color: #f8d43f;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, .15)
}

.cart-item-remove img {
    width: 16px;
    height: 16px
}

.cart-item-image {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background-color: #eee;
    margin-right: 34px
}

.cart-item-image-block img {
    display: block;
    width: 140%;
    transform: rotate(-28deg) translateY(-40px);
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, .2))
}
</style>
