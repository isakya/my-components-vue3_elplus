<template>
  <my-progress isAnimation :percentage="60" />
  <my-progress isAnimation type="circle" :percentage="60" />
  <my-progress :text-inside="true" isAnimation :stroke-width="22" :percentage="80" status="warning" />
</template>

<script setup lang="ts">
import { toRefs, ref } from "vue"

</script>

<style lang="scss" scoped>
svg {
  width: 126px;
  height: 126px;
}
</style>