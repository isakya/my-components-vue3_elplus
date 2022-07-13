export interface City {
  // 城市编码
  id: number,
  // 拼音
  spell: string,
  // 城市名
  name: string
}

export interface Province {
  name: string,
  data: string[],
  id?: string
}