//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODg4MTIwNjg0OCIsInNjb3BlcyI6WyJST0xFXzdjMDEwOWQwLTQyOTYtNDZjZC1iMzYwLTFkZWEwY2UwNWQwMCJdLCJpZCI6IjAwMDAwMTkxIiwic2ltcGxlTmFtZSI6Iuael-mSn-WNgeWFqyIsInVzZXJuYW1lIjoiMTg4ODEyMDY4NDgiLCJ1c2VySW5mbyI6eyJpZCI6IjAwMDAwMTkxIiwibmlja05hbWUiOiLmnpfpkp_ljYHlhasiLCJzZXgiOiJNQU4iLCJjZWxscGhvbmUiOiIxODg4MTIwNjg0OCIsInNvdXJjZSI6IlNNQUxMX1BST0NFRCIsImRldmljZUluZm8iOm51bGwsImhlYWRJbWFnZSI6Imh0dHA6Ly8yMjIuMjExLjg3LjEyOjk3MjEvaGVhZEltYWdlcy8xY2NkZjIxNDFlYTA0OTg3OGM1OWM4MjMyNjJjM2FkZC5wbmciLCJ0b2tlbktleSI6IlNNQUxMX1BST18wMDAwMDE5MSIsInRva2VuVXVpZCI6ImZhMTY4ZjczLTgwNDktNDBmOS05OTVhLTUxZWE4MDUzOWY1OSIsInRhZyI6IlNNQUxMX1BST0NFRCIsInVzZXJuYW1lIjoi5p6X6ZKf5Y2B5YWrIiwiYWNjb3VudCI6IjE4ODgxMjA2ODQ4IiwidGVuYW50SWQiOiJkZWZhdWx0In0sInRhZyI6IlNNQUxMX1BST0NFRCIsImlzcyI6Inh0b25lIiwiaWF0IjoxNTg5NDI4MDQzLCJleHAiOjE1ODk0ODgwNDN9.dmR9_gJUEw90JAzVZ535-bNSmxn8SO5ukYByHNx8d548Ku2zaRYgMoIwetaiFqLrN0WO1eNa7kTCqDO4OSDpLA'
    app.httpPost('/api/reRecords/sign/date', { data: { consumerId: "00000191" }},token).then(res=>{
      console.log(res)
    })

    app.httpGet('/file/get/agreement', {},token).then(res=>{
        console.log(res)
      })
  },
  
})
