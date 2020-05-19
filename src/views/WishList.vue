<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <h2 class="py-3 h5 text-center">
      <span style="border-bottom:2px solid; padding-bottom:5px">我的願望清單</span>
    </h2>
    <div class="row">
      <div
        class="wishlist-info mx-auto text-center"
        v-if="wishlist.length < 1"
        style="height:50vh; display:flex; flex-direction:column; justify-content:center;"
      >
        <i
          class="fas fa-heart"
          style="font-size:65px; display:block; color: rgba(149, 149, 149, 0.2);"
        ></i>
        <span class="my-2">尚無收藏的商品唷 !</span>
        <a class="btn btn-dark rounded-0 text-white my-2" @click="$router.back()">返回上一頁</a>
      </div>
      <productcard
        v-for="item in filterWish"
        :carddata="item"
        :key="item.id"
        :heart="wishlist"
        @cardhandler="clickWishList"
      ></productcard>
    </div>
  </div>
</template>
<script>
import Productcard from "../components/ProductCard";

export default {
  components: {
    Productcard
  },
  data() {
    return {
      products: [],
      wishlist: [],
      isLoading: false
    };
  },
  methods: {
    clickWishList(id) {
      const vm = this;
      if (vm.wishlist.includes(id)) {
        vm.wishlist.splice(vm.wishlist.indexOf(id), 1);
        localStorage.setItem("wishlist", JSON.stringify(vm.wishlist));
      } else {
        vm.wishlist.push(id);
        localStorage.setItem("wishlist", JSON.stringify(vm.wishlist));
      }
    }
  },
  computed: {
    filterWish() {
      return this.products.filter(item => {
        return this.wishlist.indexOf(item.id) !== -1;
      });
    }
  },
  created() {
    const vm = this;
    const url = `${process.env.VUE_APP_SERVERPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
    vm.isLoading = true;
    vm.$http.get(url).then(response => {
      vm.products = response.data.products;
      vm.isLoading = false;
    });
  },
  mounted() {
    if (localStorage.wishlist) {
      this.wishlist = JSON.parse(localStorage.wishlist) || [];
    }
  }
};
</script>