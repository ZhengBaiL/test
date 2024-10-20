const $http = (options) => 
  new Promise((resolve,reject) => {
    // 微信请求方法
    wx.request({
      // 解构
      ...options,
      // 成功
      success:(result)=> {
        resolve(result)
      },
      // 失败
      fail:(err) => {
        console.log(err);
        reject(new Error("请求异常，请重试..."))
      }
    })
  })

// 抛出方法
module.exports = $http;