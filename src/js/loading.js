import '../css/listLoading.scss'
import $ from 'jquery'
import LoadingImg from '$static/loading.gif'
class Loading {
  switchLoadingShow (isShow) {
    isShow ? this.showLoading() : this.hideLoading()
  }

  showLoading () {
    $('body').after(`<div class="listLoading"><img src="${LoadingImg}" class="loading-img" alt="加载中"/></div>`)
  }

  hideLoading () {
    $('.listLoading').remove()
  }
}
export default Loading
