import '../css/listLoading.scss'
import $ from 'jquery'
import LoadingImg from '$static/loading.gif'
class Loading {
  constructor () {
    this.instance = null
  }

  appendLoading (isShow) {
    isShow ? this.showLoading() : this.hiddenLoading()
  }

  showLoading () {
    $('body').append(`<div id="listLoading"><img src="${LoadingImg}" class="loading-img" alt="加载中"/></div>`)
  }

  hiddenLoading () {
    $('#listLoading').remove()
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new Loading()
    }
    return this.instance
  }
}
const loading = Loading.getInstance()
export default loading
