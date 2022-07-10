export interface City {
  id: number,
  // 拼音
  spell: string,
  name: string
}

export interface Province {
  name: string,
  data: string[],
  id?: string
}