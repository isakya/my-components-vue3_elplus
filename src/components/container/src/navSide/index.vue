<template>
  <el-menu default-active="2" :collapse="collapse" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <el-icon>
        <component is="el-icon-menu"></component>
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <component is="el-icon-menu"></component>
      </el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <component is="el-icon-menu"></component>
      </el-icon>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
defineProps<{
  collapse: boolean
}>()
</script>

<style lang="scss" scoped>
// 如果菜单没有收缩就定为宽度200
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>