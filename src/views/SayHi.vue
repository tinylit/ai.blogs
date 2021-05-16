<template>
  <div>
    我来自SayHi.vue
    <el-button type="success" @click="get">测试接口</el-button>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "SayHi",
  data() {
    return {
      msg: "登录",
    };
  },
  methods: {
    get: function () {
      api
        .get("https://www.baidu.com/")
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    },
  },
};
</script>