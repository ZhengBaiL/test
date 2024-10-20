// pages/evaluate/evaluate.js
const axios = require("axios-miniprogram").default;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[],//影片信息
    value: '',//评价
    star: ""//评分值
  },
  // 提交按钮事件
  submitBtn:function() {
    // 提交按钮提示框
    wx.showLoading({
      title: '正在提交...',
    })
    // 延时器
    setTimeout(()=>{
      // 取消提示
      wx.hideLoading();
      // 跳转页面
      wx.switchTab({
        url: '/pages/movie/movie',
      });
    },1000)
  },
  //评价事件
  onChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
  },
  // 评分事件
  onChangeStar(event) {
    // 更新评分值
    this.setData({
      star: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 进入页面数据加载前的提示框
    wx.showLoading({
      title: '加载中...',
    })
    // 请求详情页面接口
    axios.get("http://localhost:4000/movie/detail",{
      // 请求参数
      mid: options.movieId
    }).then(res => {
      this.setData({
        detailList: res.data,
        star: res.data.rating.value
      })
    }).finally(() => {
      setTimeout(()=>{
        wx.hideLoading()
      },500)
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