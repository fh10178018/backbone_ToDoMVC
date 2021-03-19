// 注:时间戳转时间（ios手机NaN）
function getTime(nS) {
  var date = new Date(parseInt(nS) * 1000);
  var year = date.getFullYear();
  var mon = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minu = date.getMinutes();
  var sec = date.getSeconds();

  return year + '/' + mon + '/' + day + ' ' + hours + ':' + minu + ':' + sec;
}

module.exports = getTime