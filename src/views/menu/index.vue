<template>
  <div class="container">
    <div style="width:200px; height:70vh;">
      <el-divider>二级菜单</el-divider>
      <br />
      <my-menu name="a" index="b" icon="c" children="d" :data="data1" defaultActive="2" :router="true"
        active-text-color="red"></my-menu>
    </div>
    <div style="width:300px; height:70vh">
      <el-divider>多级菜单</el-divider>
      <br />
      <infinite-menu name="a" index="b" icon="c" children="d" :data="data3" defaultActive="2" active-text-color="red">
      </infinite-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'document'
      }
    ]
  }
]

let data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document'
              },
            ]
          },
        ]
      }
    ]
  }
]

// 测试自定义键名
let data3 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document'
              },
            ]
          },
        ]
      },
    ]
  },
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