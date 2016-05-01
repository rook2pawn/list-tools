var isIn = function(item,list,equality) {
  for (var i = 0; i < list.length; i++) {
    if (equality(item,list[i]))
      return true
  }
  return false
}
var unique = function(list,equality) {
  var ol = []
  list.forEach(function(item) {
    if (!isIn(item,ol,equality))
      ol.push(item)
  })
  return ol
}
var intersection = function(listA, listB, equality) {
  var intersected = []
  for (var i = 0; i < listA.length; i++) {
    var a = listA[i]
    for (var j = 0; j < listB.length; j++) {
      var b = listB[j]
      if (equality(a,b)) {
        intersected.push(b)
        break;
      }
    }
  }
  return unique(intersected,equality)
}
exports.isIn = isIn
exports.unique = unique
exports.intersection = intersection
