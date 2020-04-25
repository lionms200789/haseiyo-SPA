<template>
  <div class="message-alert">
    <div class="alert alert-dismissible" v-for="(item, i) in messages" :key="i">
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="removeMessage(i)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  methods: {
    updateMessage(message) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        timestamp
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(times) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === times) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    }
  },
  created() {
    this.$bus.$on("alertMsg", message => {
      this.updateMessage(message);
    });
  }
};
</script>

<style lang="scss" scoped>
.message-alert {
  position: fixed;
  width: 220px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1100;
  .alert {
    border-radius: 0;
    background: #343a40;
    color: #fff;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    .close {
      padding-top: 0.35rem;
      padding-bottom: 0.35rem;
    }
  }
}
</style>