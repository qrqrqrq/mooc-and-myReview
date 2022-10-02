<template>
    <div class="cart">
        <div class="check">
            <div class="check__icon">
                <img
                    src="http://www.dell-lee.com/imgs/vue3/basket.png"
                    class="check__icon__img"
                />
                <div class="check__icon__tag">1</div>
            </div>
            <div class="check__info">
                总计：<span class="check__info__price">&yen;127</span>
            </div>
            <div class="check__btn">去结算</div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../style/variable.scss";
.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
.check {
    display: flex;
    box-sizing: border-box;
    height: 0.49rem;
    line-height: 0.49rem;
    border-top: 0.01rem solid $content-bgColor;
    &__icon {
        position: relative;
        width: 0.84rem;
        &__img {
            display: block;
            margin: 0.12rem auto;
            width: 0.28rem;
            height: 0.26rem;
        }
        &__tag {
            position: absolute;
            right: 0.2rem;
            top: 0.04rem;
            width: 0.2rem;
            height: 0.2rem;
            line-height: 0.2rem;
            background-color: $hightlight-fontColor;
            border-radius: 50%;
            text-align: center;
            font-size: 0.12rem;
            color: #fff;
            transform: scale(0.5);
        }
    }
    &__info {
        flex: 1;
        color: $content-font-color;
        font-size: 0.12rem;
        &__price {
            color: $hightlight-fontColor;
            font-size: 0.18rem;
        }
    }
    &__btn {
        width: 0.98rem;
        font-size: 0.14rem;
        color: #fff;
        text-align: center;
        background-color: #4fb0f9;
    }
}
</style>