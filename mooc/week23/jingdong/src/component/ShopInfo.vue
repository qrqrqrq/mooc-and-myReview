<template>
  <div class="shop">
    <img :src="item.imgUrl" class="shop__img" />
    <div
      :class="{
        shop__content: true,
        'shop__content--bordered': hideBorder ? false : true,
      }"
    >
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售：{{ item.sales }}</span>
        <span class="shop__content__tag">起送¥{{ item.expressLimit }}</span>
        <span class="shop__content__tag">基础运费¥{{ item.expressPrice }}</span>
      </div>
      <p class="shop__content__hightlight">
        {{ item.slogan }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: ["item", "hideBorder"],
};
</script>
<style lang="scss" scoped>
@import "../style/variable.scss";
@import "../style/mixins.scss";

.shop {
  display: flex;
  padding-top: 0.08rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    padding-top: 0.08rem;
    &--bordered {
      border-bottom: 1px solid $content-bgColor;
    }

    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-font-color;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-font-color;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__hightlight {
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
      margin: 0.1rem 0 0 0;
    }
  }
}
</style>