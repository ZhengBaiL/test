// pages/home/home.js
const $http= require('../../utils/http');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],//轮播图
    opera:[],//国剧
    variety:[],//综艺
    AmericanTV:[]//美剧
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 进入页面请求列表
    this.getList()
  },
  getList() {
    // 数据显示前加载框提示信息
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    // 多条数据请求
    return Promise.allSettled([
      $http({
        url:'https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=0&count=8'
      }),
      $http({
        url:'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?start=0&count=8'
      }),
      $http({
        url:'https://m.douban.com/rexxar/api/v2/subject_collection/tv_american/items?start=0&count=8'
      })
    ]).then(res => {
      // 取到数据后取消加载框
      wx.hideLoading();
      let partOne = res[0];
      let partTwo = res[1];
      let partThree = res[2];
      // 国产剧数据处理
      if(partOne.status == "fulfilled") {
        var opera = partOne.value.data.subject_collection_items;
      }
      this.setData({
        opera
      })
      // 综艺数据处理
      if(partTwo.status == "fulfilled") {
       var variety = partTwo.value.data.subject_collection_items;
      }
      this.setData({
        variety
      })
      console.log(variety,'variety')
      // 美剧数据处理
      if(partThree.status == "fulfilled") {
        var AmericanTV = partThree.value.data.subject_collection_items;
       }
       this.setData({
         AmericanTV
       })
       console.log(AmericanTV,'AmericanTV')
    
      // 轮播图数据处理
      var swiperList = [];
      for(var i=2;i<6;i++) {
        swiperList.push(opera[i].photos[0])
      }
      this.setData({
        swiperList
      })
    })
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
    this.getList().then(()=> {
      wx.stopPullDownRefresh();
    })
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