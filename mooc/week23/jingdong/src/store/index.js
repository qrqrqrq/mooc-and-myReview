import { createStore } from "vuex";

export default createStore({
    state: {
        cartList: {
            // 第一层级是商铺的id
            // 第二层是商品id
            // 第二层内容是商品内容以及购物数量
            1: {
                
            },
            2: {},
        },
    },
    getters: {},
    mutations: {
        addItemToCart(state, payload) {
            const { shopId, productId, productInfo } = payload;
            console.log(shopId, productId, productInfo);
        },
    },
    actions: {},
    modules: {},
});
