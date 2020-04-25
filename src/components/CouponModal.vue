<template>
  <div>
    <transition name="fade">
      <div class="bg-cover" v-if="status" @click="closeCoupon">
        <div class="coupon-container" v-if="status">
          <div class="layer-1"></div>
          <div class="layer-2"></div>
          <div class="coupon-inner">
            <div class="dismiss-btn" @click="closeCoupon">+</div>
            <div class="coupon-head">
              <span class="d-block">hello!</span>
            </div>
            <div class="coupon-bd" style="font-size:13px">
              <p style="font-size:20px;">歡慶HaSeiYo盛大開幕</p>
              <p>
                結帳輸入優惠碼
                <span style="font-size:20px">NEWOPEN20</span>
              </p>
              <p class="mb-0">
                即享
                <span style="font-size:22px">9</span>折限時優惠
              </p>
              <span style=" display:block; text-align:right;">haseiyo.com</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeCoupon() {
      this.$emit("couponhandler");
    }
  }
};
</script>

<style lang="scss" scoped>
.layer-1 {
  position: absolute;
  z-index: -10;
  width: 300px;
  height: 200px;
  border-radius: 2px;
  background-color: rgba(136, 84, 84, 0.8);
  transform: translateY(-15px) translateX(-10px);
  transition: all 0.2s linear;
}
.layer-2 {
  position: absolute;
  z-index: -10;
  width: 300px;
  height: 200px;
  border-radius: 2px;
  background-color: rgba(87, 56, 56, 0.8);
  transform: translateY(15px) translateX(10px);
  transition: all 0.1s linear;
}

.bg-cover {
  width: 100%;
  height: 100%;
  background: rgba(40, 40, 40, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  .coupon-container {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: rgba(130, 108, 101, 0.9);

    box-shadow: 0 2px 3px 0 rgba(40, 40, 40, 0.5);
    border-radius: 2px;
    &:hover > .layer-1 {
      transform: translateY(15px) translateX(10px);
    }
    &:hover > .layer-2 {
      transform: translateY(-15px) translateX(-10px);
    }
    &:hover .coupon-head {
      opacity: 0.6;
    }
    .coupon-inner {
      width: 100%;
      height: 100%;
      border-radius: 1px;

      .dismiss-btn {
        position: absolute;
        z-index: 150;
        top: -10px;
        right: 5px;
        font-size: 2rem;
        transform: rotate(45deg);
        cursor: pointer;
        &:hover {
          color: #ccc;
        }
      }
      .coupon-head {
        font-size: 46px;
        color: #f5f6fa;
        text-align: center;
        margin-top: -30px;
      }
      .coupon-bd {
        margin-top: 10px;
        text-align: center;
        color: #fff;
      }
    }
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
</style>