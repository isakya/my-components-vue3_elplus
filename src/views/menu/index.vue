<template>
  <div style="width:200px">
    <my-menu :data="data1" defaultActive="2" :router="true" active-text-color="red"></my-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document'
      }
    ]

  }
]

</script>

<style lang="scss" scoped>
</style>