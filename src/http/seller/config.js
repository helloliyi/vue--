// 该文件是发请求需要的原材料
export default {
  name: 'seller',
  api:{
    getnavs:{
      url:"/getIndexData",
      method:"get",
      corsUrl: "/4001",
    },
  }
}
