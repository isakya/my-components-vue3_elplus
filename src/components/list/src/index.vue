<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="300px">
          <div class="container" @click="clickItem(item1, index1)" v-for="(item1, index1) in item.content"
            :key="index1">
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{ item1.tag }}</el-tag>
              </div>
              <div v-if="item1.desc" class="time">{{ item1.desc }}</div>
              <div class="time" v-if="item1.time">{{ item1.time }}</div>
            </div>
          </div>
        </el-scrollbar>
        <div class="actions">
          <div class="a-item" @click="clickAction(action, i)" :class="{ 'border': i !== actions.length }"
            v-for="(action, i) in actions" :key="i">
            <div class="a-icon" v-if="action.icon">
              <component :is="`el-icon-${toLine(action.icon)}`"></component>
            </div>
            <div class="a-text">{{ action.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { ListOptions, ActionOptions, ListItem } from './types'
import { toLine } from '../../../utils'
let props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})

let emits = defineEmits(['clickItem', 'clickAction'])

// 点击了列表项触发
let clickItem = (item: ListItem, index: number) => {
  emits('clickItem', { item, index })
}
// 点击了操作项触发
let clickAction = (item: ActionOptions, index: number) => {
  emits('clickAction', { item, index })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    background-color: #e6f6ff;
  }


  .avatar {
    flex: 1;
  }

  .content {
    flex: 3;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }

}

.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;

  .a-item {
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>