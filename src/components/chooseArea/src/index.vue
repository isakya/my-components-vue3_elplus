<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province">
      <el-option value="1">1</el-option>
    </el-select>
    <el-select style="margin: 0 10px;" placeholder="请选择城市" v-model="city">
      <el-option value="1">2</el-option>
    </el-select>
    <el-select placeholder="请选择区域" v-model="area">
      <el-option value="1">3</el-option>
    </el-select>
  </div>

</template>

<script setup lang="ts">
import allAreas from './lib/pca-code.json'
import { ref } from "vue"

console.log(allAreas)
let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')


</script>

<style lang="scss" scoped>
</style>