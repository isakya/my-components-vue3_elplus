<template>
  <div class="flex">
    <div>
      <trend text="营业额"></trend>
    </div>
    <div>
      <trend text="销售额" type="down"></trend>
    </div>
  </div>
  <br />
  <div class="flex">
    <div>
      <trend text="营业额" upIconColor="blue"></trend>
    </div>
    <div>
      <trend text="销售额" type="down" downIconColor="#000"></trend>
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