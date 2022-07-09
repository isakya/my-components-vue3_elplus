<template>
  <div>
    <choose-icon title="选择图标" v-model:visible="visible">
      选择图标
    </choose-icon>
  </div>
</template>

<script setup lang="ts">
import ChooseIcon from '../../components/chooseIcon/src/index.vue'
import { reactive, toRefs, ref } from "vue"
let visible = ref<boolean>(false)


</script>

<style lang="scss" scoped>
</style>