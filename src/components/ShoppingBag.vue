<template>
  <div class="toolbar">
    <dialogmodal :modalshow="modalstatus" @closehandler="modalstatus = false" />
    <div class="cart-outer">
      <div class="search">
        <a href="#" class="btn submit" @click.prevent="goSearch">
          <i class="fa fa-search"></i>
        </a>
        <input
          type="text"
          class="search-input"
          v-model.trim="keyword"
          @keyup.enter="goSearch"
          placeholder="找尋什麼商品呢 ?"
        />
      </div>
      <ul class="cart-inner d-flex">
        <li class="pb-0 home">
          <router-link
            to="/"
            class="btn icon-btn shadow-none"
            :class="{'activeNav' : pathName === 'landingpage' }"
          >
            <i class="fas fa-home fa-lg"></i>
            <div class="cart-text">首頁</div>
          </router-link>
        </li>
        <li class="pb-0">
          <a
            href="javascript:;"
            class="searchToggle btn icon-btn shadow-none"
            :class="{'activeNav' : pathName === 'Search' }"
          >
            <i class="fa fa-search fa-lg"></i>
            <div class="cart-text">搜尋商品</div>
          </a>
        </li>
        <li class="pb-0 wishlist">
          <router-link
            to="/wishlist"
            class="btn icon-btn shadow-none"
            :class="{'activeNav' : pathName === 'WishList' }"
          >
            <i class="far fa-heart fa-lg"></i>
            <div class="cart-text">我的收藏</div>
          </router-link>
        </li>

        <li class="pb-0 cart">
          <a
            href="#"
            class="btn icon-btn shadow-none"
            :class="{'activeNav' : pathName === 'CartPage' }"
            @click.prevent="goCart"
          >
            <i class="fa fa-shopping-cart fa-lg">
              <span v-if="cartCounter">{{ cartCounter }}</span>
            </i>
            <div class="cart-text">購物車</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Dialogmodal from "./DialogModal";

export default {
  components: {
    Dialogmodal
  },
  data() {
    return {
      cartCounter: "",
      keyword: "",
      modalstatus: false,
      pathName: ""
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_SERVERPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http.get(url).then(response => {
        vm.cartCounter = response.data.data.carts.length;
      });
    },
    delCartItem(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_SERVERPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.$http.delete(url).then(() => {
        vm.getCart();
      });
    },
    goCart() {
      const vm = this;
      if (vm.$route.path !== "/myshoppingcart/cart") {
        vm.$router.push("/myshoppingcart/cart");
      }
    },
    goSearch() {
      const vm = this;
      if (vm.keyword === "") {
        vm.modalstatus = true;
        return;
      } else {
        const keyword = vm.keyword;
        vm.keyword = "";
        $(".search").hide();
        vm.$router.push(`/search/keyword/${keyword}`);
      }
    }
  },
  created() {
    const vm = this;
    vm.$bus.$on("updateBag", () => {
      vm.getCart();
    });
    vm.getCart();
    vm.pathName = vm.$route.name;
  },
  mounted() {
    $(".searchToggle").click(() => {
      $(".search").fadeToggle("fast");
    });
  },
  watch: {
    $route() {
      this.keyword = "";
      $(".search").hide();
      this.pathName = this.$route.name;
    }
  }
};
</script>