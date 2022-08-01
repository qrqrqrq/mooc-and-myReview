<template>
    <div>
        <input v-model="inputValue" />
        <button class="button" @click="handleAddItem">提交</button>

        <!-- <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul> -->
        <ul>
            <list-item v-for="(item, index) in list" :key="index" :msg="item" />
        </ul>
    </div>
</template>

<script>
    import { ref, reactive } from "vue";
    import ListItem from "./components/ListItem.vue";
    export default {
        name: "App",
        components: {
            ListItem,
        },
        setup() {
            const list = reactive([]);
            const inputValue = ref("");
            const handleAddItem = () => {
                list.push(inputValue.value);
                inputValue.value = "";
            };
            return { handleAddItem, list, inputValue };
        },
    };
</script>

<style>
    .button {
        margin-left: 20px;
        color: red;
    }
</style>
