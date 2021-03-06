// pages/wholeSeries-B/wholeSeries-B.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    app:getApp(),
    chooseState:1,
    clientHeight:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
        clientHeight: res.windowHeight
      });
  }})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  chooseIt(e){
    this.setData({
      chooseState: e.currentTarget.dataset.it
    })
  },
  changeSwipper(e){
    console.log(e)
    this.setData({
      chooseState: e.detail.current+1
    })
  }
})