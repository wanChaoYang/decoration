// components/singlePro/singlePro.js
/**
 * 用法注解：
 * 
 * <singlePro
  bind:ToHref='ToHref'
  imageUrl='/components/compUseImg/comeback.png'
  productName='保利锦江里110平米港式风格效 果图案例'
  productTitle='三居室 | 112㎡'
  seeNum='54556'
  hrefLink='/pages/index/index'>

</singlePro>
以上为所有属性
 * 
 * 如果绑定ToHref事件，需要传入hrefLink跳转路径，触发navigateTo，跳转到hrefLink指定的页面
 * imageUrl 当前显示图片
 * productName 产品说明 超过两行自动转为...
 * productTitle 产品标题
 * seeNum 查看人数
 * 
 * 如果要实现瀑布流布局，在循环的父类元素加入属性 column-count: 2;
 * 
*/
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loadState:{
      type:Boolean,
      value:false
    },
    defaultImg:{
      type:String,
      value:'/components/compUseImg/unLoad.png'
    },
    imageUrl:{
      type:String,
      value:''
    },
    productName: {
      type: String,
      value: ''
    },
    productTitle: {
      type: String,
      value: '#'
    },
    seeNum: {
      type: Number,
      value: 0
    },
    hrefLink:{
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
    ToHref(){
      if (this.data.hrefLink!=''){
        wx.navigateTo({
          url: this.data.hrefLink,
        })
      }
    },
    imageLoad(e){
      this.setData({
        loadState:true
      })
    }
  }
})
