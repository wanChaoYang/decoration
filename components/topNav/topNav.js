/**
 * 共有组件顶部返回按钮使用
 * 使用头部默认文字居中显示（小程序默认自带在安卓和ios系统上会呈现不一样的表现）
 * 在引入使用是必须先将引入页面的json文件进行替换，将以下代码替换为你的引入页面json即可
 * {
  "usingComponents": {
    "topNav": "/components/topNav/topNav"
  },
  "navigationStyle": "custom"
  }
  在wxml页面中使用
 * <topNav title='我的活动' bind:isback='isback' fontcolor='#000'  bgcolor='#fff'></topNav>
 * 其中绑定事件可选项：
 * bind:isback='isback' 默认：返回上一层页面wx.navigateBack 没有必要参数属性
 * bind:isRanch='isRanch' 关闭所有前置页面层级关系，触发事件wx.reLaunch 需配置ranchUrl属性，示例：
 *          <topNav title='我的活动' bind:isRanch='isRanch' ranchUrl='pages/index/index' fontcolor='#000'  bgcolor='#fff'></topNav>
 * bind:isNavergeter='isNavergeter' 指定跳转页面，触发时间wx.navigateTo 需配置vaUrl属性,示例：
 *          <topNav title='我的活动' bind:isNavergeter='isNavergeter' vaUrl='pages/index/index' fontcolor='#000'  bgcolor='#fff'></topNav>
 * 
 * 其他组件传递参数属性：
 * 
 * title：标题文字
 * ISapp：来源是否为app，如果是，拒绝返回
 * fontcolor：标题文字颜色
 * bgcolor：背景颜色
 * iconColor：只可为true否false，对应白色/黑色返回icon，
 * 
 * 
 * 
 * **/ 
const app = getApp()
Component({
  options: {
    multipleSlote: true
  },
  properties: {
    title: {
      type: String,
      value: '这是标题'
    },
    isBack: {
      type: Boolean,
      value: true
    },
    isRanch: {
      type: Boolean,
      value: false
    },
    ISapp: {
      type: Boolean,
      value: false
    },
    ranchUrl: {
      type: String,
      value: '#'
    },
    vaUrl: {
      type: String,
      value: '#'
    },
    fontcolor: {
      type: String,
      value: '#000'
    },
    iconColor: {
      type: Boolean,
      value: false
    },
    bgcolor: {
      type: String,
      value: '#fff'
    },
    isNavergeter: {
      type: Boolean,
      value: false
    }
  },
  data: {
    app: getApp()
  },
  methods: {
    isback() {
      if (!this.data.ISapp) {
        wx.navigateBack({
          delta: 1
        })
      }
    },
    isRanch() {
      let _this = this;
      wx.reLaunch({
        url: _this.data.ranchUrl
      })
    },
    isNavergeter() {
      let _this = this;
      wx.navigateTo({
        url: _this.data.vaUrl,
      })
    }
  }
})