<template>
  <header>
    <div class="container">
      <div class="row justify-content-between">
        <nav class="index-nav">
          <button class="btn nav-bars" @click="btnstatus = !btnstatus">
            <i :class="navbtn"></i>
          </button>
          <router-link class="nav-logo p-0" to="/">
            <img src="@/assets/haseiyo.png" class="logo" alt />
          </router-link>
          <ul class="navbar-list px-1" :class="{'show' : btnstatus}">
            <li class="nav-item">
              <router-link to="/" class="nav-link">首頁</router-link>
            </li>
            <li class="nav-item">
              <a href="javascript:;" class="nav-link" data-toggle="togglemenu">
                上身
                <i class="fas fa-caret-down fa-xs"></i>
              </a>
              <div class="sub-menu">
                <div class="menu-inner">
                  <ul>
                    <li>
                      <router-link to="/product/t-shirt" href="#">全部上衣</router-link>
                    </li>
                    <li>
                      <router-link to="/product/t-shirt/longsleeve" href="#">長袖上衣</router-link>
                    </li>
                    <li>
                      <router-link to="/product/t-shirt/shortsleeve" href="#">短袖上衣</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/product/shirts" class="nav-link">襯衫</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product/outer" class="nav-link">外套</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product/pants" class="nav-link">長褲</router-link>
            </li>
          </ul>
          <div class="cover" :class="{'show' : btnstatus}" @click="btnstatus = false"></div>
        </nav>
        <shoppingBag />
      </div>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
import ShoppingBag from "./ShoppingBag";

export default {
  components: {
    ShoppingBag
  },
  data() {
    return {
      btnstatus: false
    };
  },
  watch: {
    $route() {
      this.btnstatus = false;
    }
  },
  computed: {
    navbtn() {
      if (this.btnstatus) {
        return "fa fa-times";
      } else {
        return "fas fa-bars";
      }
    }
  },
  mounted() {
    const $sub = $(".sub-menu");
    $("a[data-toggle='togglemenu']")
      .click(() => {
        $sub.slideToggle("fast");
      })
      .blur(() => {
        $sub.slideUp();
      });
  }
};
</script>