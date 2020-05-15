// components/cardList/cardList.js
/**
 * userName="小瓶盖"
 * VillageName="保利锦江里110平米港式风湿效果图案列"
 * userImg="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
 * VillageImg="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userName:{
      type:String,
      value:""
    },
    userImg:{
      type:String,
      value:""
    },
    VillageName:{
      type:String,
      value:""
    },
    VillageImg:{
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
    styleDetails(){
      this.triggerEvent("event", { "index": 323 }, {})
    }
  }
})
