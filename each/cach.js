// each/cach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [
      { id: 1, name: "lala1", age: 18 },
      { id: 2, name: "aaa2", age: 19 },
      { id: 3, name: "aaa3", age: 19 },
      { id: 4, name: "aaa4", age: 19 },
      { id: 5, name: "aaa5", age: 19 },
    ]
  },
  addItemHandle() {
    const students = [{ id: Math.random(), name: 'zjamg' + Math.random(), age: 18 }].concat(this.data.students)

    this.setData({ students })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})