<template>
  <div id="list-two">
    <p>ProductListTwo</p>
    <ul>
      <li class="item" v-for="product in saleProducts" :key="product.id">
        <div class="picture">{{product.name}}</div>
        <div class="price">￥{{product.price}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    productList () {
      return this.$store.state.productList;
    },
    saleProducts () {
      return this.$store.getters.saleProducts;
    }
  }
}
</script>

<style scoped>
#list-two {
    padding: 50px;
    background-color: #FFF8B1;
    font-size: 24px;
}

#list-two ul {
    padding: 0;
    margin: 0;
    width: 30%;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
}

.item {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
}

.price {
    background-color: salmon;
    width: 70px;
    align-self: center;
    height: 20px;
    box-shadow: 2px 2px 2px slategray;
    font-size: 14px;
}

.picture {
    width: 100px;
    height: 80px;
    padding: 10px;
    background-color: rgb(223, 160, 23);
    margin-bottom: 10px;
    color: white;
    line-height: 80px;
    border-radius: 10%;
    font-size: 14px;
}
</style>

