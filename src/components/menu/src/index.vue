<template>
  <el-menu class="el-menu-vertical-demo" :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item, index) in data">
      <el-menu-item :key="index" v-if="!item.children || !item.children.length" :index="item.index">
        <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu :key="index" v-if="item.children && item.children.length > 0" :index="item.index">
        <template #title>
          <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="item1, index1 in item.children" :key="index1" :index="item1.index">
          <component v-if="item1.icon" :is="`el-icon-${toLine(item1.icon)}`"></component>
          <span>{{ item1.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { MenuItem } from './types'
import { toLine } from '../../../utils'
import { reactive, toRefs, ref, PropType } from "vue"

let props = defineProps({
  // 导航菜单的数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  // 默认选中菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

svg {
  margin-right: 10px;
}
</style>