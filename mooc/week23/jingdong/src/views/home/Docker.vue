<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
      :key="item.icon"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      { icon: "&#xe71b;", text: "首页" },
      { icon: "&#xe765;", text: "购物车" },
      { icon: "&#xe60c;", text: "订单" },
      { icon: "&#xe679;", text: "我的" },
    ];
    return { dockerList };
  },
};
</script>
<style lang="scss" scoped>
// scoped:样式只对本组件生效
@import "../../style/variable.scss";
.docker {
  display: flex;
  position: absolute;
  padding: 0 0.18rem;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-font-color;
  // background-color: pink;

  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    font-size: 0.2rem;
    // 将20px通过缩放变成10px
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>