//app.js
var httpRequestUrl = 'http://192.168.4.235:8885' //地址栏
App({
  data: {
    userInfo: {},
    httpRequestUrl: httpRequestUrl,
  },
  onLaunch: function () {
    //新版本更替无需重启
    this.getMenuRect()
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启，自动
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
  },
  getMenuRect() {
    let menuRect = wx.getMenuButtonBoundingClientRect();
    this.data.menuHeight = menuRect.height
    this.data.menuTop = menuRect.top
  },
  //post请求封装
  /**
   * 用法:
   * app.httpPost('url', {},app.data.token).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
   * 
   * 
   * */ 
  httpPost(url, data, token) {
    var headers = { 'Content-type': 'application/json' }
    if (token && token != '') {
      if (!token.token) {
        headers = { 'X-Authorization': 'Bearer ' + token }
      } else {
        headers = { 'X-Authorization': 'Bearer ' + token.token, token: token.jkcToken }
      }
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: httpRequestUrl + url,
        method: 'post',
        data: data,
        header: headers,
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  },
  //get请求封装
  /**
   * 用法:
   * app.httpGet('url', {},app.data.token).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
   * 
   * 
   * */
  httpGet(url, data, token) {
    var headers = { 'Content-type': 'application/json' }
    if (token && token != '') {
      if (!token.token) {
        headers = { 'X-Authorization': 'Bearer ' + token }
      } else {
        headers = { 'X-Authorization': 'Bearer ' + token.token, token: token.jkcToken }
      }
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: httpRequestUrl + url,
        method: 'get',
        data: data,
        header: headers,
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  },

})