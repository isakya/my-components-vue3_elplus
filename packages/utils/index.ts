// 把驼峰转换成横杠链接
// 改造成 el-icon-xxx 名字
export const toLine = (value: string) => {
  // 把大小写字母分组，转成横杠连接，再转成小写字母
  return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
} 