import {Get} from './inst.js'
// 获取新闻列表
export function getNewsList(catalog = 1, page = 1, pageSize = 10) {
  return Get('/news_list/api/oo',{params: {
      catalog,
      page,
      pageSize
    }
  })
}