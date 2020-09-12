import {Get} from './inst.js'
// 获取新闻列表
export function getNewsList({catalog = 1, pageIndex = 1, pageSize = 10}) {
  return Get('/news_list', {
      catalog,
      pageIndex,
      pageSize
  })
}
// 根据id获取新闻详情
export function getNewDeatil(id) {
  return Get('/news_detail', {id})
}


