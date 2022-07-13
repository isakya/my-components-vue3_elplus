// 列表的每一项
export interface ListItem {
  // 头像
  avatar?: string,
  // 标题
  title?: string,
  // 描述
  desc?: string,
  // 时间
  time?: string,
  // 标签名称
  tag?: string, 
  // 标签样式类型
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
}

// 列表
export interface ListOptions {
  // tab的标题
  title: string,
  // 列表的内容
  content: ListItem[]
}

// 操作
export interface ActionOptions {
  // 操作标题
  text: string,
  // 图标
  icon?: string
}