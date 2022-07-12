// 列表的每一项
export interface ListItem {
  // 头像
  avatar?: string,
  // 标题
  title?: string,
  // 描述
  desc?: string,
  // 事件
  time?: string,
  // 标签名称
  tag?: string, 
  // 标签样式类型
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
}

// 列表
export interface ListOptions {
  title: string,
  content: ListItem[]
}

// 操作
export interface ActionOptions {
  text: string,
  icon?: string
}