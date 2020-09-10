import '../../static/reset.css'
import '../css/index.scss'
import '../css/master.scss'

import schoolList from './appendList'
import registerLoadMore from './loadMore'
// 初始化数据并渲染
schoolList.getListData()

// 监听下拉事件
registerLoadMore()
