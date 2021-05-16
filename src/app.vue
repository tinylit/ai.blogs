<template>
  <div>
    <el-header>
      <el-menu mode="horizontal" :default-active="activeIndex">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank"
            >订单管理</a
          ></el-menu-item
        >
      </el-menu>
    </el-header>
    <el-main></el-main>
    <el-footer></el-footer>
    <el-button type="primary">{{ txt }}</el-button>
    <router-link to="/SayHi">测试</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data: function () {
    return {
      txt: "测试",
      activeIndex: '1'
    };
  },
};
</script>
<style>
div {
  color: red;
}
</style>