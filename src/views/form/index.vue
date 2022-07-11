<template>
  <my-form @on-change="handleChange" @before-upload="handleBeforeUpload" @on-preview="handlePreview"
    @on-remove="handleRemove" @before-remove="beforeRemove" @on-exceed="handleExceed" @on-success="handleSuccess"
    label-width="100px" :options="options">
    <template #uploadArea>
      <el-button size="small" type="primary">上传</el-button>
    </template>
    <template #uploadTip>
      <div style="color: #ccc; font-size:12px;">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
    <!-- 作用域插槽，用于获取子组件的数据或方法 -->
    <template #action="scope">
      <el-button type="primary" @click="submitForm(scope)">提交</el-button>
      <el-button @click="resetForm(scope)">重置</el-button>
    </template>
  </my-form>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance } from "element-plus";
import { reactive, toRefs, ref } from "vue"
import { FormOptions } from "../../components/form/src/types/types";

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
        trigger: 'blur'
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
        trigger: 'blur'
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
        trigger: 'blur'
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
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: true,
      limit: 3
    },
    // rules: [
    //   {
    //     required: true,
    //     message: '图片不能为空',
    //     trigger: 'blur'
    //   }
    // ],
  }
]

interface Scope {
  form: FormInstance,
  model: any
}

let submitForm = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model);
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误，请检查')
    }
  })
}
let resetForm = (scope: Scope) => {
  scope.form.resetFields()
}


const handleRemove = (val: any) => {
  console.log('handleRemove')
  console.log(val.file, val.fileList)
}
const handlePreview = (file: any) => {
  console.log('handlePreview')
  console.log(file)
}
const beforeRemove = (val: any) => {
  console.log('beforeRemove')
  ElMessage.warning(
    `The limit is 3, you selected ${val.file.length} files this time, add up to ${val.file.length + val.fileList.length
    } totally`
  )
}
const handleExceed = (val: any) => {
  console.log('handleExceed')
  ElMessage.warning(
    `The limit is 3, you selected ${val.file.length} files this time, add up to ${val.file.length + val.fileList.length
    } totally`
  )
}

let handleSuccess = (val: any) => {
  console.log('handleSuccess')
  console.log(val);
}

let handleChange = (val: any) => {
  console.log('handleChange')
  console.log(val);
}
let handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload')
  console.log(val);
}
</script>

<style lang="scss" scoped>
</style>