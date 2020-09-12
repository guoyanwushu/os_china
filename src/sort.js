var a = new Promise((resolve, reject) => {
  resolve("hello")
})
var b = new Promise((resolve, reject) => {
  reject("你瞅啥")
})
a.then(function (data) {return b}).then(function (data) { console.log(data)}).catch(function (data) {console.log(data)})



function promA() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(promB())
    }, 1000)
  })
}
function promB() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      var a = Math.ceil(Math.random()*10);
      if (a%2==0) {
        resolve("偶数")
      } else {
        reject("奇数")
      }
    }, 1000)
  })
}
var d = Promise.all([promA(), promB()]).then( function (result) {
  console.log(result)
})