
function plusStr(str) {
  var s = str// 要展示的字符串
  console.log(str)
  if(str==null){
    s="无"
  }else{
    if (str.length > 13) {
      s = str.substring(0, 13) + '...'
    }
  }
  
  return s
}

export default {
  plusStr
}
