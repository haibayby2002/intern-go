<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import ProductItem from './components/ProductItem.vue'
// import CartItem from './components/CartItem.vue'
import Cart from './components/Cart.vue'
import Product from './components/Product.vue'

function insert_to_cart(name, description, src, price){
    console.log(name, description)
}
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <body><noscript><strong>We're sorry but Golden Sneaker doesn't work properly without JavaScript enabled. Please enable
            it to continue.</strong></noscript>
      <div class="main-content">
        <Product/>
        <Cart @on_item_add_to_cart="insert_to_cart(name, description, src, price)"/>
      </div>
    </body>
    
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
