// components/footerFixed/footerFixed.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    iconName:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickLike(){
      this.setData({
        iconName:!this.data.iconName
      })
    },
    textInput(e){
     
      this.triggerEvent("event",e.detail.value,{})
    },
    shareLink(){
      this.triggerEvent("event",{},{})
    }

  }
})
