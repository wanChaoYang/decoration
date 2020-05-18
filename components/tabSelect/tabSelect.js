// components/tabSelect/tabSelect.js
Component({
  /**
   * 组件的属性列表
   * tabList：[//数组列表
      {
        id:0,
        text:"全部"
      },
      {
        id:1,
        text:"装修风格",
        status:false
      },
    ]
   */
  properties: {
    tabList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    TabCur:0,
    scrollLeft:0
  },

  /**
   * 组件的方法列表
   * changTab tab点击事件
   */
  methods: {
    changTab(event){
      var data=event.currentTarget.dataset.item
      this.setData({
        TabCur:data.id,
        scrollLeft: (event.currentTarget.dataset.item.id-1)*60
      })
      this.triggerEvent("event",{data},{})
    }
  }
})
