<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <couponmodal :status="couponstatus" @couponhandler="couponstatus = false" />
    <main>
      <div class="row">
        <div
          id="carouselExampleControls"
          class="carousel slide mt-sm-3 mb-sm-4"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" style="position:relative">
              <router-link to="product/t-shirt/longsleeve">
                <img src="@/assets/img/carousel-img.jpg" class="d-block w-100" alt="..." />
              </router-link>
            </div>
            <div class="carousel-item">
              <router-link to="product/outer">
                <img src="@/assets/img/carousel-img2.jpg" class="d-block w-100" alt="..." />
              </router-link>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            style="width:8%"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            style="width:8%"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <section>
        <div class="row py-4 justify-content-center" style="background-color:#f7f7f7;">
          <div class="col-md-6 text-center">
            <h4 class="hq-title">HIGH QUALITY ASSURANCE</h4>
            <div class="seperator"></div>
            <span class="hq-text">每一件商品都經過嚴格篩選</span>
            <span class="hq-text">－力求時尚兼具好品質－</span>
          </div>
        </div>
      </section>
      <section id="fusion" ref="section">
        <div class="row pt-4">
          <div class="col-sm-4 px-sm-0">
            <div class="fusion-wrapper">
              <router-link
                to="/product/t-shirt"
                class="fusion-img"
                style="background-image:url('https://upload.cc/i1/2020/02/20/J9tyvf.jpg')"
              >
                <div class="fusion-text">
                  <i class="fas fa-angle-double-down fa-sm d-lg-none d-block arrow"></i>
                  <span>熱銷上衣</span>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-sm-4 px-sm-0">
            <div class="fusion-wrapper">
              <router-link
                to="/product/outer"
                class="fusion-img"
                style="background-image:url('https://upload.cc/i1/2020/02/20/pvRUS2.jpg')"
              >
                <div class="fusion-text">
                  <i class="fas fa-angle-double-down fa-sm d-lg-none d-block arrow"></i>
                  <span>精選外套</span>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-sm-4 px-sm-0">
            <div class="fusion-wrapper">
              <router-link
                to="/product/pants"
                class="fusion-img"
                style="background-image:url('https://upload.cc/i1/2020/02/20/qlsUwk.jpg')"
              >
                <div class="fusion-text">
                  <i class="fas fa-angle-double-down fa-sm d-lg-none d-block arrow"></i>
                  <span>經典褲款</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row shopnow-container">
          <div class="col-md-6 pb-4 py-md-4 px-0 shop-right">
            <div class="shop-text text-center">
              <h4 class="font-weight-bold">質感韓系時尚</h4>
              <p>안녕하세요 !</p>
              <p>我們希望創造一個優質空間，</p>
              <p>讓每個前來的你們，都能穿出屬於自己的韓系獨特風格。</p>
              <router-link class="shop-btn" to="/product/shirts">SHOP NOW</router-link>
            </div>
          </div>
          <div class="col-md-6 py-4 px-0 shop-left">
            <div class="shop-img">
              <router-link to="/product/outer">
                <div class="img-cover"></div>
                <img src="@/assets/img/banner-2.jpg" alt />
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="e-paper">
            <img
              src="https://upload.cc/i1/2020/02/29/NyiO3P.jpg"
              class="img-responsive main-bg"
              alt
            />
            <div class="e-paper-inner">
              <p class="e-paper-text">輸入MAIL訂閱最新電子報以及獲得最新優惠資訊 !</p>
              <input
                type="email"
                class="e-paper-input"
                placeholder="E-mail address"
                v-model="epaper"
                v-validate="'required'"
                name="email"
              />
              <input type="submit" class="e-paper-submit" value="訂 閱" @click="subscribe" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import $ from "jquery";
import Couponmodal from "../components/CouponModal";

export default {
  components: {
    Couponmodal
  },
  data() {
    return {
      isLoading: false,
      couponstatus: false,
      epaper: ""
    };
  },
  methods: {
    subscribe() {
      const vm = this;
      vm.$validator.validate().then(valid => {
        if (valid) {
          window.alert("電子報申請成功 !");
          vm.epaper = "";
        } else {
          window.alert("請輸入正確電子信箱格式 !");
          vm.epaper = "";
        }
      });
    },
    scrollHandler() {
      const fusion = document.querySelector("#fusion");
      const fusionTxt = document.querySelectorAll(".fusion-text");
      let windowTop = window.scrollY;
      let windowBtm = windowTop + window.innerHeight;
      if (fusion.offsetTop + fusion.offsetHeight / 2 < windowBtm) {
        fusionTxt.forEach(txt => {
          txt.classList.add("slideIn");
        });
      }
    }
  },
  mounted() {
    $(".carousel").carousel({
      interval: 2500
    });
    window.setTimeout(()=>{
      const vm = this;
      vm.couponstatus = true;
    }, 2500);
    window.addEventListener("scroll", this.scrollHandler);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
};
</script>