// components/cardListSmall/cardListSmall.js
Component({
  /**
   * 组件的属性列表
   * cardImg="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
   * area="万象城"
   * doorModel="三居室"
   * doorModelNum="111"
   */
  properties: {
      cardImg:{
        type:String,
        value:""
      },
      area:{
        type:String,
        value:""
      },
      doorModel:{
        type:String,
        value:""
      },
      doorModelNum:{
        type:String,
        value:""
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
    appointmentVisit(){
      this.triggerEvent("event",{},{})
    }
  }
})
