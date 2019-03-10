// push/push.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datapush:[
      { id: 1, name: "张三", age: "18" },
      { id: 2, name: "张三", age: "18" },
      { id: 3, name: "张三", age: "18" },
    ]
  },
  btnbutton(){
    // const datapush = [{ id: Math.ceil(Math.random()), name: "李四" + Math.ceil(Math.random()), age: 20 }].concat(this.data.datapush)
    
    const datas = this.data.datapush.push({ id: Math.ceil(Math.random()), name: "李四" + Math.ceil(Math.random()), age: 20 })
    console.log(this.data.datapush)
    this.setData({ datas})
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