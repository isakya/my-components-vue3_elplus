<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province" style="margin: 0 10px;" placeholder="请选择城市" v-model="city">
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>

</template>

<script setup lang="ts">
import allAreas from './lib/pca-code.json'
import { ref, watch } from "vue"

// 下拉框选择省份的值
let province = ref<string>('')
// 下拉框选择城市的值
let city = ref<string>('')
// 下拉框选择区域的值
let area = ref<string>('')

// 所有的省市区数据
let areas = ref(allAreas)



// 城市下拉框所有的值
let selectCity = ref<any[]>([])

// 区域下拉框所有的值
let selectArea = ref<any[]>([])

// 监听选择省份
watch(() => province.value, val => {
  if (val) {
    let cities = areas.value.find(item => item.code === province.value)!.children
    selectCity.value = cities
  }
  city.value = ''
  area.value = ''
})

// 监听选择城市
watch(() => city.value, val => {
  if (val) {
    let area = selectCity.value.find(item => item.code === city.value)!.children
    selectArea.value = area
    area.value = ''
  }
})

</script>

<style lang="scss" scoped>
</style>