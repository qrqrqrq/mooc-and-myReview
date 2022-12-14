<template>
    <div class="content">
        <div class="category">
            <div
                :class="{
                    category__item: true,
                    'category__item--active': currentTab === item.tab,
                }"
                v-for="item in categories"
                :key="item.name"
                @click="() => handleTabClick(item.tab)"
            >
                {{ item.name }}
            </div>
        </div>
        <div class="product">
            <div class="product__item" v-for="item in list" :key="item._id">
                <img class="product__item__img" :src="item.imgUrl" alt="" />
                <div class="product__item__detail">
                    <h4 class="product__item__title">
                        {{ item.name }}
                    </h4>
                    <p class="product__item__sales">月售{{ item.sales }}件</p>
                    <p class="product__item__price">
                        <span class="product__item__yen">&yen;</span
                        >{{ item.price }}
                        <span class="product__item__origin"
                            >&yen;{{ item.oldPrice }}</span
                        >
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus">-</span>
                    {{ cartList?.[shopId]?.[item._id]?.count || 0 }}
                    <span
                        class="product__number__plus"
                        @click="
                            () => {
                                addItemToCart(shopId, item._id, item);
                            }
                        "
                        >+</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, ref, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { get } from "../../utils/request";

const categories = [
    { name: "全部商品", tab: "all" },
    { name: "秒杀", tab: "seckill" },
    { name: "新鲜水果", tab: "fruit" },
];

// Tab 切换相关的逻辑
const useTabEffect = () => {
    const currentTab = ref(categories[0].tab);
    const handleTabClick = (tab) => {
        currentTab.value = tab;
    };
    return { currentTab, handleTabClick };
};

// 列表内容相关的逻辑
const useCurrentListEffect = (currentTab, shopId) => {
    const content = reactive({ list: [] });

    const getContentData = async () => {
        const result = await get(`/api/shop/${shopId}/products`, {
            tab: currentTab.value,
        });
        if (result?.errno === 0 && result?.data?.length) {
            content.list = result.data;
        }
    };

    watchEffect(() => {
        getContentData();
    });

    const { list } = toRefs(content);
    return { list };
};
// 购物车相关逻辑
const useCartEffect = () => {
    const store = useStore();
    const { cartList } = toRefs(store.state);
    const addItemToCart = (shopId, productId, productInfo) => {
        store.commit("addItemToCart", { shopId, productId, productInfo });
    };
    return { cartList, addItemToCart };
};

export default {
    name: "Content",
    setup() {
        const route = useRoute();
        const shopId = route.params.id;
        const { currentTab, handleTabClick } = useTabEffect();
        const { list } = useCurrentListEffect(currentTab, shopId);
        const { cartList, addItemToCart } = useCartEffect();
        return {
            categories,
            currentTab,
            handleTabClick,
            list,
            cartList,
            shopId,
            addItemToCart,
        };
    },
};
</script>
<style lang="scss" scoped>
@import "../../style/variable.scss";
@import "../../style/mixins.scss";
.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: 0.5rem;
}
.category {
    overflow-y: scroll;
    height: 100%;
    width: 0.76rem;
    background: $search-bgColor;
    &__item {
        line-height: 0.4rem;
        text-align: center;
        font-size: 14px;
        color: #333;
        &--active {
            background: $bgColor;
        }
    }
}
.product {
    overflow-y: scroll;
    flex: 1;
    &__item {
        position: relative;
        display: flex;
        padding: 0.12rem 0;
        margin: 0 0.16rem;
        border-bottom: 0.01rem solid $content-bgColor;
        &__detail {
            overflow: hidden;
        }
        &__img {
            width: 0.68rem;
            height: 0.68rem;
            margin-right: 0.16rem;
        }
        &__title {
            margin: 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            color: $content-font-color;
            @include ellipsis;
        }
        &__sales {
            margin: 0.06rem 0;
            font-size: 0.12rem;
            color: $content-font-color;
        }
        &__price {
            margin: 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            color: $hightlight-fontColor;
        }
        &__yen {
            font-size: 0.12rem;
        }
        &__origin {
            margin-left: 0.06rem;
            line-height: 0.2rem;
            font-size: 0.12rem;
            color: $light-fontColor;
            text-decoration: line-through;
        }
        .product__number {
            position: absolute;
            right: 0;
            bottom: 0.12rem;
            &__minus,
            &__plus {
                display: inline-block;
                width: 0.2rem;
                height: 0.2rem;
                line-height: 0.16rem;
                border-radius: 50%;
                font-size: 0.2rem;
                text-align: center;
            }
            &__minus {
                border: 0.01rem solid $medium-fontColor;
                color: $medium-fontColor;
                margin-right: 0.05rem;
            }
            &__plus {
                background: $btn-bgColor;
                color: $bgColor;
                margin-left: 0.05rem;
            }
        }
    }
}
</style>