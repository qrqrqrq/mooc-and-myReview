// 常量
import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED } from "./constants";
// 默认参数
const DEFAULTS = {
    methos: HTTP_GET,
    // 请求头携带数据
    params: null,
    // params: {
    //     username: "alex",
    //     age: 18,
    // },

    // 请求体携带数据
    data: null,
    // data: {
    //    username: "alex",
    //     age: 18,
    // }

    // data:FormData数据

    contentType: CONTENT_TYPE_FORM_URLENCODED,
    responseType: "",
    timeoutIime: 0,
    witnCredentials: false,

    // 方法：
    success() {},
    httpCoseError() {},
    error() {},
    abort() {},
    timeout() {},
};
export default DEFAULTS;
