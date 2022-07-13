export interface TableOptions {
  // 表头名称
  label: string,
  // 表格数据字段名
  prop: string,
  // 表格单元格宽度
  width?: string | number,
  // 表格单元格对齐方式
  align?: 'left' | 'center' | 'right',
  // 自定义列表模板名称
  slot?: string,
  // 是否代表操作项
  action?: boolean,
  // 是否是可编辑的单元格
  editable?:  boolean
}