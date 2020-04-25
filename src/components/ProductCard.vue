<template>
  <div class="col-sm-6 col-lg-3 mb-3" :class="view">
    <div class="card border-0 shadow-0 mb-3">
      <div class="wishlist-icon">
        <a href="#" @click.prevent="collection(carddata.id)">
          <i :class="heartStatus"></i>
        </a>
      </div>
      <a href="#" class="card-img-wrapper" @click.prevent="goDetail(carddata.id)">
        <div class="soldout-msg" v-if="!carddata.is_enabled">SOLD OUT</div>
        <img class="card-image" :style="soldout" :src="carddata.imageUrl" />
      </a>
      <div class="card-body p-0">
        <h5 class="card-title">
          <a
            href="#"
            class="text-dark text-decoration-none"
            @click.prevent="goDetail(carddata.id)"
          >{{ carddata.title }}</a>
        </h5>
        <div class="price">
          <div v-if="!carddata.price">NT.{{ carddata.origin_price | currency}}</div>
          <del v-if="carddata.price">NT.{{ carddata.origin_price | currency}}</del>
          <div class="text-danger" v-if="carddata.price">NT{{ carddata.price | currency}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["carddata", "heart", "view"],
  data() {
    return {};
  },
  methods: {
    goDetail(id) {
      const vm = this;
      if (vm.carddata.is_enabled) {
        vm.$router.push(`/productdetail/${id}`);
      } else {
        return;
      }
    },
    collection(id) {
      const vm = this;
      vm.$emit("cardhandler", id);
    }
  },
  computed: {
    heartStatus() {
      if (this.heart.includes(this.carddata.id)) {
        return "fas fa-heart fa-lg";
      } else {
        return "far fa-heart fa-lg";
      }
    },
    soldout() {
      if (this.carddata.is_enabled === 0) {
        return "opacity:0.7";
      } else {
        return "";
      }
    }
  }
};
</script>