// components/bannerTop/bannerTop.js
Component({
  /**
   * 组件的属性列表
   * bannerType='brows 显示浏览人数 door 显示住房户型'
   * bannerImg='https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg' 图片地址
   * villageName='中原新城一号'  小区名字
   * decStyle='简约' 装修风格
   * doorModel='三居室' 户型
   * doorModelNum='89'  户型大小
   * dete='2020-05-20' 日期
   * numberOf='526' 浏览人数
   * 
   */
  properties: {
    bannerImg:{
      type:String,
      value:''
    },
    villageName:{
      type:String,
      value:""
    },
    decStyle:{
      type:String,
      value:""
    },
    doorModel:{
      type:String,
      value:''
    },
    doorModelNum:{
      type:String,
      value:''
    },
    dete:{
      type:String,
      value:''
    },
    numberOf:{
      type:String,
      value:''
    },
    bannerType:{
      type:String,
      value:''
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
    backPre(){
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
