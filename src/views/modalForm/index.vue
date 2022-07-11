<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <modalForm :isScroll="true" :on-change="handleChange" :on-success="handleSuccess" :options="options"
      v-model:visible="visible" title="编辑用户">
      <template #footer="{ form }">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm(form)">确认</el-button>
      </template>
      <!-- 上传文件 -->
      <template #uploadArea>
        <el-button size="small" type="primary">上传</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size:12px; margin-left:10px;">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </modalForm>
  </div>
</template>

<script setup lang="ts">
import { FormOptions } from "../../components/form/src/types/types";
import { reactive, toRefs, ref } from "vue"
import { ElMessage } from "element-plus";
let visible = ref<boolean>(false)
let open = () => {
  visible.value = true
}
let options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '用户名不可为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间'
      }
    ]
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '密码不可为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '未知',
        value: 'not'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://www.fastmock.site/mock/d3a3f89bb4f7a78cde5517e167d4e750/api/upload',
      multiple: true,
      limit: 3,
      method: 'post',
    },
    rules: [
      {
        required: true,
        message: '图片不能为空',
        trigger: 'blur'
      }
    ],
  },
  {
    type: 'editor',
    value: '',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]

// 点击确认
let confirm = (form: any) => {
  let validate = form.validate()
  let model = form.getFormData
  // 表单验证
  validate((valid: any) => {
    if (valid) {
      ElMessage.success('验证成功')
      console.log(model());

    } else {
      ElMessage.error('验证失败')
    }
  })
}

// 点击取消
let cancel = () => {

}

// 上传事件测试
let handleSuccess = (val: any) => {
  console.log('handleSuccess')
  console.log(val);
}

let handleChange = (val: any) => {
  console.log('handleChange')
  console.log(val);
}

</script>

<style lang="scss" scoped>
</style>