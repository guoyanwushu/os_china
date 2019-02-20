import Vue from 'vue'
/* 时间转换 将今天的和昨天的分开来*/
Vue.filter('timeTrans', (value)=> {
  value = value.replace(/-/g,'/')
  let now = new Date()
  let target = new Date(value)
  let descStr = ''
  const days = now.getDate() - target.getDate()
  switch (days) {
    case 0: descStr = `${now.getHours() - target.getHours()}小时前`;break;
    case 1: descStr = '1天前';break;
    case 2: descStr = '2天前';break;
    default: descStr = value.substring(6)
  }
  return descStr
})