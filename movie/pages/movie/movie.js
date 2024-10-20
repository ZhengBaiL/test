// pages/movie/movie.js
const { default: Toast } = require("@vant/weapp/toast/toast")
const axios = require("axios-miniprogram").default;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],//电影列表
    count: 10//请求条数
  },
  // 跳转详情页
  goToEvaluate: function(event) {
    wx.navigateTo({
      url: `/pages/evaluate/evaluate?movieId=${event.target.dataset.movieid}`,
    })
    console.log(event.target.dataset.movieid,'event.target.dataset.movieid')
  },
  // 获取数据方法
  getList:function() {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    });
    // 请求列表页面
    axios.get('http://localhost:4000/movie/list',{
      start: this.data.movieList.length,
      count: this.data.count
    }).then(res => {
      this.setData({
        movieList:[...this.data.movieList,...res.data.subject_collection_items]
      })
    }).finally(()=> {
      setInterval(()=> {
        Toast.clear();
      },500)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList();
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 上拉加载事件请求列表接口
    this.getList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})