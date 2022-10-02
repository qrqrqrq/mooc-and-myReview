<template>
    <div class="wrapper">
        <div class="search">
            <div class="search__back iconfont" @click="handleBackClick">
                &#xe662;
            </div>
            <div class="search__content">
                <span class="search__content__icon iconfont">&#xe7b3;</span>
                <input
                    class="search__content__input"
                    placeholder="请输入商品名称搜索"
                />
            </div>
        </div>
        <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
        <Content />
        <Cart />
    </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request";
import ShopInfo from "../../component/ShopInfo";
import Content from "../shop/Content";
import Cart from "../shop/Cart";

// 获取当前商铺信息
const useShopInfoEffect = () => {
    const route = useRoute();
    const data = reactive({
        item: {},
    });
    const getItemData = async () => {
        const result = await get(`/api/shop/${route.params.id}`);
        if (result?.errno === 0 && result?.data) {
            data.item = result.data;
        }
    };
    const { item } = toRefs(data);
    return { item, getItemData };
};
// 点击回退逻辑
const useBackRouterEffect = () => {
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };
    return handleBackClick;
};
export default {
    name: "Shop",
    components: { ShopInfo, Content, Cart },
    setup() {
        const { item, getItemData } = useShopInfoEffect();
        const handleBackClick = useBackRouterEffect();

        getItemData();

        return { item, handleBackClick };
    },
};
</script>
<style lang="scss" scoped>
@import "../../style/variable.scss";
.wrapper {
    padding: 0 0.18rem;
}
.search {
    display: flex;
    margin: 0.14rem 0 0.04rem 0;
    line-height: 0.32rem;
    &__back {
        width: 0.3rem;
        font-size: 0.4rem;
        color: #b6b6b6;
        margin-right: 0.1rem;
    }
    &__content {
        display: flex;
        flex: 1;
        background: $search-bgColor;
        border-radius: 0.16rem;
        &__icon {
            width: 0.44rem;
            text-align: center;
            color: $search-font-color;
        }
        &__input {
            display: block;
            width: 100%;
            padding-right: 0.2rem;
            border: none;
            outline: none;
            background: none;
            color: $content-font-color;
            &::placeholder {
                color: $content-font-color;
                font-size: 0.14rem;
            }
        }
    }
}
</style>