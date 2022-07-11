<template>
  <my-progress isAnimation :percentage="60" />
  <br />
  <my-progress :text-inside="true" isAnimation :stroke-width="22" :percentage="80" status="warning" />
  <br />
  <my-progress isAnimation type="circle" :percentage="60" />

</template>

<script setup lang="ts">
import { toRefs, ref } from "vue"

</script>

<style lang="scss" scoped>
</style>