// 可配置的表单

import {CSSProperties} from 'vue'
import{RuleItem} from './rule'
import { ValidateFieldsError } from 'async-validator'
interface Callback {
  (isValid?: boolean, invalidFields?: ValidateFieldsError): void,
}

// 表单每一项的配置选项
export interface FormOptions {
  // 表单项显示的元素 el-plus 上的所有Form表单组件
  type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'checkbox-picker' | 'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button' | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' | 'transfer' | 'upload' | 'editor',
  // 当前表单项的值
  value?: any,
  // 表单项的label
  label?: string,
  // 表单项的标识
  prop?: string,
  // 表单项的验证规则
  rules?: RuleItem[],
  // 表单项的占位符
  placeholder?: string
  // 表单元素特有的属性
  attrs?: {
      // css样式
  style?: CSSProperties
    clearable?: boolean,
    showPassword?: boolean,
    disabled?: boolean, 
  },
  // 表单项的子元素 如单选框组
  children?: FormOptions[],
  // 处理上传组件的属性和方法
  uploadAttrs?: {
    // 上传的地址，必填
    action: string,
    // 设置上传的请求头部
    headers?: object,
    // 设置上传的请求方法
    method?:'post' | 'put' | 'path',
    // 是否支持多选文件
    multiple?: boolean,
    // 上传时附带的额外参数
    data?: any,
    // 上传的文件字段名
    name?: string
    // 是否支持发送cookie凭证信息
    withCredentials?: boolean,
    // 是否显示已上传文件
    showFileList?: boolean,
    // 是否启用拖拽上传
    drag?: boolean,
    // 接受上传的文件类型（thumbnail-mode模式下此参数无效）
    accept?: string,
    // 是否显示缩略图
    thumbnailMode?: boolean,
    // 上传文件列表，如：[{name: 'food.jpg', url:'https://xxx.cdn.com/xxx.jpg'}]
    fileList?: any[],
    // 文件列表的类型
    listType?: 'text' | 'picture' | 'picture-card'
    // 是否自动上传文件
    autoUpload?: boolean,
    // 是否禁用
    disabled?: boolean,
    // 允许上传的最大数量
    limit?: number,
  }
}

export interface ValidateFieldCallback {
  (message?: string, invalidFields?: ValidateFieldsError): void,
}

// 这些是在element源码上扒下来的
export interface FormInstance {
  registerLabelWidth(width: number, oldWidth: number): void,
  deregisterLabelWidth(width: number): void,
  autoLabelWidth: string | undefined,
  emit: (evt: string, ...args: any[]) => void,
  labelSuffix: string,
  inline?: boolean,
  model?: Record<string, unknown>,
  size?: string,
  showMessage?: boolean,
  labelPosition?: string,
  labelWidth?: string,
  rules?: Record<string, unknown>,
  statusIcon?: boolean,
  hideRequiredAsterisk?: boolean,
  disabled?: boolean,
  validate: (callback?: Callback) => Promise<boolean>,
  resetFields: () => void,
  clearValidate: (props?: string | string[]) => void,
  validateField: (props: string | string[], cb: ValidateFieldCallback) => void,
}