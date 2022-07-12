<template>
  <my-calendar @eventClick="eventClick" @dateClick="dateClick" :events="events"></my-calendar>
</template>

<script setup lang="ts">
import { EventClickArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";
import { ref } from "vue"
import { EventItem } from "../../components/calendar/src/types";
let events = ref<EventItem[]>([
  {
    title: '吃饭',
    start: '2022-07-22 08:00',
    end: '2022-07-22 12:00',
    // 可拖动
    editable: true
  },
  {
    title: '敲代码',
    start: '2022-08-22 12:00',
    end: '2022-08-22 22:00',
    editable: true
  },
  {
    title: '睡觉',
    start: '2022-09-23 22:00',
    end: '2022-09-23 6:00',
    editable: true
  }
])

let dateClick = (info: DateClickArg) => {
  console.log(info.dateStr + ' 12:00');

  events.value.push({
    title: '打豆豆',
    start: info.dateStr + ' 12:00',
    end: info.dateStr + ' 18:00',
    editable: true
  })
  console.log(info);
}
let eventClick = (info: EventClickArg) => {
  console.log(info);
}
</script>

<style lang="scss" scoped>
</style>