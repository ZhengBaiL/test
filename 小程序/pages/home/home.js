// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    week:"二",
    obj:{
      name:"小郑",
      age: 18
    },
    arr:[
      {
        name:"小红",
        age: 10
      },
      {
        name:"小黄",
        age: 20
      },
      {
        name:"小蓝",
        age: 30
      },
    ],
    
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  getMain:function() {

    console.log("你好",wx.getStorageSync('name'))
  },
  getAA:function() {
    console.log("11")
  },
  getBB:function() {
    console.log("22")
  },
  getCC:function(event) {
    console.log(event)
  },
  getToDetail:function() {
    console.log("点")
    wx.navigateTo({
      url: '/pages/detail/detail?id=90&name=画画',
    })
    // wx.redirectTo({
    //   url: '/pages/detail/detail',
    // })
    // wx.switchTab({
    //   url: '/pages/my/my',
    // })
    // wx.reLaunch({
    //   url: '/pages/my/my',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setStorageSync('name', "笑笑")
    setTimeout(()=>{
      // 原生小程序中
      // this.setData({})
      // obj.age = 29;
      this.setData({
        obj:{
          name:"小郑",
          age: 29
        }
      })
      wx.showToast({
        title: '更新成功',
      })
    },4000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("开启下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})