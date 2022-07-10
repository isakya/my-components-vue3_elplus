<template>
  <!-- v-model:visible="visible" 不生效 -->
  <el-popover placement="bottom-start" :width="430" trigger="hover">
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ 'rolate': visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col offset="1" :span="15">
          <el-select size="middle" v-model="selectValue" filterable placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
      </el-row>
      <div class="city">
        <!-- <div v-for="(value, key) in cities">{{ key }}</div> -->
        <div class="city-item" v-for="(item, index) in Object.keys(cities)">{{ item }}</div>
      </div>
      <el-scrollbar max-height="300px">
        <template v-for="(value, key) in cities" :key="key">
          <el-row style="margin-bottom:10px">
            <el-col :span="2">{{ key }}:</el-col>
            <el-col :span="22" class="city-name">
              <div class="city-name-item" v-for="item in value" :key="item.id">
                <div>{{ item.name }}</div>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import city from '../lib/city'
import { reactive, toRefs, ref } from "vue"




// let props = defineProps({

// })
let result = ref<string>('请选择')
let visible = ref<boolean>(false)
let radioValue = ref<string>('按城市')
let selectValue = ref<string>('')
let cities = ref(city.cities)


const options = ref([
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
])
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}

.rolate {
  transform: rotate(180deg);
}

svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  // 加上动画效果
  transition: all 0.25s linear;
}

.container {
  padding: 6px;
}

.city {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;

  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #eee;
    margin-bottom: 8px;
  }
}

.city-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &-item {
    margin-right: 6px;
    margin-bottom: 6px;
  }
}
</style>