<template>
  <div class="container">
    <div style="width:200px; height:70vh;">
      <el-divider>二级菜单</el-divider>
      <br />
      <my-menu :data="data1" defaultActive="2" :router="true" active-text-color="red"></my-menu>
    </div>
    <div style="width:300px; height:70vh">
      <el-divider>多级菜单</el-divider>
      <br />
      <infinite-menu :data="data2" defaultActive="2" active-text-color="red"></infinite-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
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

let data2 = [
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
        icon: 'document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'document'
              },
            ]
          },
        ]
      }
    ]
  }
]

</script>

<style lang="scss" scoped>
.container {
  background-color: #eee;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
</style>