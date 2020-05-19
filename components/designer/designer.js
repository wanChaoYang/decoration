// components/designer/designer.js
Component({
  /**
   * 组件的属性列表
   * desImg='https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg' 头像地址
   * desName='小瓶盖' 设计师称呼
   * desLevel='首席设计师' 设计师级别
   * desCase='18' 设计师案例数量
   * desYear='15' 设计师年限
   * btnText='找他设计'  按钮内容
   * describe='' 是否显示设计师描述
   */
  properties: {
    desImg:{
      type:String,
      value:''
    },
    desName:{
      type:String,
      value:''
    },
    desLevel:{
      type:String,
      value:''
    },
    desCase:{
      type:String,
      value:''
    },
    desYear:{
      type:String,
      value:''
    },
    btnText:{
      type:String,
      value:''
    },
    describe:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    LookingForDes(){
      this.triggerEvent('event',{},{})
    }
  }
})
