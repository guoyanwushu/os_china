var count = 5;
function  Get() {
  return new Promise(function(resolve,reject) {
    resolve(realGet())
  })
}
function realGet() {
  return new Promise(function (resolve, reject) {
    var a = Math.ceil(Math.random()*10);
    console.log(`a----------------------：${a}`)
    if (a%2==0) {
      console.log("请求成功!!!!!!!")
      resolve('success'+a)
    } else if (count>0) {
      count--
      console.log("请求失败, 正在尝试重连")
      resolve(realGet())
    } else {
      reject("error")
    }
  })
}
Get().then(function (res) { console.log(`成功操作:${res}`)}, function (err) { console.log("最终请求失败!")})
realGet().then(function () {
  resolve("2222")
}, function () {
  realGet()
})