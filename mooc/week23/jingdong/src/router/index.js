import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/Home"),
    },
    {
        path: "/shop/:id",
        name: "Shop",
        component: () =>
            import(/* webpackChunkName: "shop" */ "../views/shop/Shop"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/register/Register"),
        // 访问Register页面前才会执行这个函数
        beforeEnter: (to, from, next) => {
            const { isLogin } = localStorage;
            isLogin ? next({ name: "Home" }) : next();
        },
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/login/Login"),
        // 访问Login页面前才会执行这个函数
        beforeEnter: (to, from, next) => {
            // const isLogin = localStorage.isLogin;
            const { isLogin } = localStorage;
            isLogin ? next({ name: "Home" }) : next();
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 没登陆不能访问别的页面的设置：
router.beforeEach((to, from, next) => {
    // to即将跳转的页面
    // const isLogin = localStorage.isLogin;
    const { isLogin } = localStorage;
    isLogin || to.name === "Login" || to.name === "Register"
        ? next()
        : next({ name: "Login" });
});
export default router;
