<template>
  <div id="list-one">
    <p>ProductListOne</p>
    <button class="btn" @click="reducePriceAsync(4)">商品降价</button>
    <ul>
      <li class="item" v-for="product in saleProducts" :key="product.id">
        <div class="picture">{{product.name}}</div>
        <div class="price">￥{{product.price}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      
    }
  },
  computed: {
    // productList () {
    //   return this.$store.state.productList;
    // },
    // saleProducts () {
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters([
      "saleProducts"
    ])
  },
  methods: {
    // reducePriceAsync (amount) {
    // //   return this.$store.commit('reducePrice', 4);
    //   return this.$store.dispatch("reducePriceAsync", amount);
    // }
    ...mapActions([
      "reducePriceAsync"
    ])
  }
}
</script>

<style scoped>
#list-one {
    position: relative;
    padding: 50px;
    font-size: 24px;
    background-color: #D1E4FF;
}

#list-one ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

.item {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
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
    border-radius: 10%;
    background-color: rgba(255, 255, 255, 0.7);
    align-self: center;
    margin-bottom: 10px;
    color: #860ce8;
    line-height: 80px;
    font-size: 14px;
}

.btn {
    padding: 10px;
    position: absolute;
    top: 10%;
    right: 10%;
}
</style>

