<template>
  <el-divider>
    默认趋势
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额"></trend>
    </div>
    <div>
      <trend text="销售额" type="down"></trend>
    </div>
  </div>
  <el-divider>
    自定义颜色
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" upIconColor="blue"></trend>
    </div>
    <div>
      <trend text="销售额" type="down" downIconColor="#000"></trend>
    </div>
  </div>
  <el-divider>
    插槽传入自定义内容
  </el-divider>
  <trend>
    <span>销售额<el-icon-starfilled></el-icon-starfilled></span>
  </trend>
  <el-divider>
    颜色翻转(只有默认颜色生效)
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" reverseColor></trend>
    </div>
    <div>
      <trend type="down" reverseColor text="销售额"></trend>
    </div>
  </div>
  <el-divider>
    自定义图标
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" icon="carettop"></trend>
    </div>
    <div>
      <trend type="down" text="销售额" icon="CaretBottom"></trend>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"

</script>

<style lang="scss" scoped>
.flex {
  display: flex;

  div {
    margin-right: 10px;
  }
}
</style>