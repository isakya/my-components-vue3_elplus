<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <modalForm v-model:visible="visible" title="编辑用户">
      <template #footer>
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="visible = false">确认</el-button>
      </template>
    </modalForm>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
let visible = ref<boolean>(false)
let open = () => {
  visible.value = true
}

</script>

<style lang="scss" scoped>
</style>