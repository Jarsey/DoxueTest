import schoolList from './appendList.js'
import $ from 'jquery'
const registerLoadMore = () => {
  const documentElement = document.documentElement
  const documentBody = document.body
  // 获取滚动条当前的位置
  function getScrollTop () {
    var scrollTop = 0
    var elementScrollTop = documentElement.scrollTop
    var bodyScrollTop = documentBody.scrollTop
    if (documentElement && elementScrollTop) {
      scrollTop = elementScrollTop
    } else if (documentBody) {
      scrollTop = bodyScrollTop
    }
    return scrollTop
  }
  // 获取当前可视范围的高度
  function getClientHeight () {
    var elementClientHeight = documentElement.clientHeight
    var bodyClientHeight = documentBody.clientHeight
    var clientHeight = bodyClientHeight && elementClientHeight ? Math.min(bodyClientHeight, elementClientHeight) : Math.max(bodyClientHeight, elementClientHeight)
    return clientHeight
  }

  // 获取文档完整的高度
  function getScrollHeight () {
    return Math.max(documentBody.scrollHeight, documentElement.scrollHeight)
  }

  // 滚动事件触发
  $(window).unbind('scroll').bind('scroll', () => {
    console.log('schoolList.listLength < schoolList.totalCount', schoolList.listLength < schoolList.totalCount)
    console.log('schoolList.listLength', schoolList.listLength)
    console.log('schoolList.totalCount', schoolList.totalCount)
    if (getScrollTop() + getClientHeight() >= getScrollHeight() && schoolList.listLength < schoolList.totalCount) {
      schoolList.getListData()
    }
  })
}
export default registerLoadMore
