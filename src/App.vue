<template>
  <div id="app">
    <header class="header">shopping-list</header>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <footer class="footer">Copyright &copy; 2018 胜仔</footer>
  </div>
</template>

<script>
import productListOne from './components/productListOne.vue'
import productListTwo from './components/productListTwo.vue'

export default {
  name: 'app',
  components: {
    productListOne,
    productListTwo
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

.header {
  background-color: #f9fafa;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  font-size: 48px;
  line-height: 100px;
  color: black;
  box-shadow: 2px 2px 2px #c3c7ca;
  z-index: 999;
}

.footer {
  width: 100%;
  height: 100px;
  background: black;
  font-size: 28px;
  line-height: 100px;
}
</style>
