<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row pt-2 pt-md-3">
      <div class="col-12">
        <h2 class="productTitle">{{ productTitle }}</h2>
        <div class="searchResult mb-4" v-if="currentPath.name === 'Search' ">
          <strong>共找到{{productType.length}}項＂{{currentPath.params.keyword}}＂相關商品</strong>
        </div>
        <div class="toolBox">
          <div class="changeView">
            <a href="#" class="oneCol" @click.prevent="grid ='col-12'">
              <i class="fas fa-square fa-lg"></i>
            </a>
            <a href="#" class="twoCol-mobile" @click.prevent="grid ='col-6'">
              <i class="fas fa-th-large fa-lg"></i>
            </a>
            <a href="#" class="twoCol-desktop" @click.prevent="grid ='col-lg-6'">
              <i class="fas fa-th-large fa-lg"></i>
            </a>
            <a href="#" class="fourCol" @click.prevent="grid ='col-lg-3'">
              <i class="fas fa-th fa-lg"></i>
            </a>
          </div>
          <div class="sorting">
            <select id="sortby" v-model="sortby">
              <option :value="''">商品排序</option>
              <option :value="'priceAsc'">價格由低至高</option>
              <option :value="'priceDesc'">價格由高至低</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div
        class="noRelatedItem mx-auto text-center"
        v-if="!productType.length && !isLoading"
        style="height:50vh; display:flex; flex-direction:column; justify-content:center;"
      >
        <i
          class="fa fa-frown"
          style="font-size:65px; display:block; color: rgba(149, 149, 149, 0.1);"
        ></i>
        <div class="my-2">查無與＂{{currentPath.params.keyword}}＂相關的結果</div>
        <a
          class="btn btn-dark rounded-0 mx-auto text-white my-2"
          style="width:120px"
          @click="$router.back()"
        >返回上一頁</a>
      </div>
      <productcard
        :carddata="item"
        v-for="item in sortItem"
        :heart="wishlist"
        :key="item.id"
        @cardhandler="clickWishList"
        :view="grid"
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
      productType: [],
      currentPath: "",
      isLoading: false,
      wishlist: [],
      sortby: "",
      grid: ""
    };
  },
  methods: {
    getdata() {
      const vm = this;
      let categoryPath = vm.currentPath.params.category;
      let subtypePath = vm.currentPath.params.subtype;

      if (vm.currentPath.name === "Search") {
        let keyword = vm.currentPath.params.keyword;
        vm.productType = vm.products.filter(item => {
          return item.title.indexOf(keyword) !== -1;
        });
      } else if (categoryPath && subtypePath) {
        vm.productType = vm.products.filter(item => {
          return item.category.includes(subtypePath);
        });
      } else {
        vm.productType = vm.products.filter(item => {
          return (
            item.category === categoryPath ||
            item.category.includes(categoryPath)
          );
        });
      }
    },
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
    productTitle() {
      let path = this.currentPath.path;
      switch (path) {
        case "/product/shirts":
          return "襯衫";

        case "/product/outer":
          return "外套";

        case "/product/pants":
          return "長褲";

        case "/product/t-shirt":
          return "全系列上衣";

        case "/product/t-shirt/longsleeve":
          return "長袖上衣";

        case "/product/t-shirt/shortsleeve":
          return "短袖上衣";
        default:
          return " ";
      }
    },
    sortItem() {
      if (this.sortby === "priceDesc") {
        return this.productType.slice(0).sort((a, b) => {
          return b.price - a.price;
        });
      } else if (this.sortby === "priceAsc") {
        return this.productType.slice(0).sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        return this.productType;
      }
    }
  },
  created() {
    const vm = this;
    vm.currentPath = vm.$route;
    const url = `${process.env.VUE_APP_SERVERPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
    vm.isLoading = true;
    vm.$http.get(url).then(response => {
      vm.products = response.data.products;
      vm.getdata();
      vm.isLoading = false;
    });
  },
  mounted() {
    const vm = this;
    if (localStorage.wishlist) {
      vm.wishlist = JSON.parse(localStorage.wishlist) || [];
    }
  },
  watch: {
    $route() {
      this.currentPath = this.$route;
      this.getdata();
    }
  }
};
</script>