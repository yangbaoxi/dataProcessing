import { checkNode } from './utils/check'
import store from './store'
import { methods } from './store'
import './utils/currentStyle'
class Drag {
  constructor (el, options) {
    this.initData(el, options) && this.init()
  }

  /**
   * 检查和初始化传入参数
   */
  initData (el, options) {
    this.el = checkNode(el)
    if (!this.el) return

    this.el.style.MozUserSelect = 'none' // 兼容火狐
    this.el.style.userSelect = 'none'
    this.el.style.cursor = 'default'

    options = this.checkOptions(options)
    this.options = options
    this.data = options.data
    this.mouseDownPosition = {left: -1, top: -1}
    this.mouseDragging = false
    this.mark = null
    this.position = { left: 0, top: 0}
    return true
  }

  // 初始化
  init () {
    this.addEventListenerPC()
    this.addEventListenerMobile()
  }

  /**
   * 事件监听
   */
  addEventListenerPC () {
    let dom = this.el
    // 监听当前节点的鼠标点击事件
    function onMouseDowm (e) {
      let {pageX, pageY} = e
      this.mouseDownPosition = {left: pageX, top: pageY}
      dom.onmousemove = this.onElMousemove.bind(this)
      dom.onmouseup = this.onElMouseUp.bind(this)
      document.addEventListener('mouseup', this.onElMouseUp.bind(this))
    }
    dom.addEventListener('mousedown', onMouseDowm.bind(this))
  }

  addEventListenerMobile () {
    // 兼容移动端
    this.el.addEventListener('touchmove', this.onElTouchMove.bind(this))
    this.el.addEventListener('touchend', this.onElTouchEnd.bind(this))
  }

  /**
   * 监听拖动开始
   */
  onElMousemove (e) {
    let {pageX, pageY} = e
    let {left, top} = this.mouseDownPosition
    const EMIT_LENGTH = 3
    if (Math.abs(pageX - left) < EMIT_LENGTH && Math.abs(pageY - top) < EMIT_LENGTH) return
    if (this.mouseDragging) return
    this.mouseDragging = true

    store.onDragStart(this.data, this.el)
    this.position = this.el.getBoundingClientRect()
    // 创建蒙层
    this.mark = document.createElement('div')
    this.mark.className = 'x-drag-mark'
    this.setMarkStyle()
    this.mark.onmousemove = this.onMarkMouseMove.bind(this)
    this.mark.onmouseup = this.onMarkMouseUp.bind(this)
    this.mark.onmouseleave = this.onMarkMouseUp.bind(this)
    store.markNode = this.mark
    document.body.appendChild(this.mark)
    // 创建复制元素
    store.draggedNode = this.el.cloneNode(true)
    this.setCloneNodeStyle()
    this.mark.appendChild(store.draggedNode)

    // 创建状态icon
    store.stateIcon = document.createElement('i')
    store.stateIcon.className = 'x-state-icon'
    this.setIconStyle()
    this.mark.appendChild(store.stateIcon)

    this.emit('onDragStart', {
      el: this.el,
      data: this.data,
      methods,
    })
  }

  /**
   * 监听拖动结束
   */
  onElMouseUp () {
    this.mouseDragging = false
    this.el.onmousemove = null
    this.el.onmouseup = null
    this.mark && (this.mark.onmousemove = null)
    this.mark && (this.mark.onmouseup = null)
    methods.hideStateIcon()
    methods.removeDragedNode()
    document.removeEventListener('mouseup', this.onElMouseUp.bind(this))
  }

  /**
   * 监听蒙层鼠标移动
   */
  onMarkMouseMove (e) {
    if (!store.draggedNode) return
    let {pageX, pageY} = e.touches && e.touches[0] || e
    let translateX = pageX - this.mouseDownPosition.left
    let translateY = pageY - this.mouseDownPosition.top
    store.draggedNode.style.transform = `translate(${translateX}px,${translateY}px)`
    store.onDragOver(pageX, pageY)
  }

  /**
   * 监听蒙层鼠标放开
   */
  onMarkMouseUp () {
    document.removeEventListener('mouseup', this.onElMouseUp.bind(this))
    this.mouseDragging = false
    this.mark.onmousemove = null
    this.el.onmousemove = null
    this.mouseDownPosition = {left: -1, top: -1}

    this.emit('onDragEnd', {
      el: this.el,
      data: this.data,
      target: store.targets[store.targetIndex],
      methods,
    })
    store.onDragEnd()
  }


  onElTouchMove (e) {
    e.preventDefault()
    store.isMobile = true
    if (this.mouseDownPosition.left === -1) {
      let {pageX, pageY} = e.touches[0]
      this.mouseDownPosition.left = pageX
      this.mouseDownPosition.top = pageY
    }
    this.onElMousemove()
    this.onMarkMouseMove(e)
  }

  onElTouchEnd (e) {
    this.onMarkMouseUp()
  }

  /**
   * 检查并且初始化options
   */
  checkOptions (options) {
    options = options || {}
    let baseOptions = {
      data: '这里可以放需要丢给目标的内容',
      el: this.el,
      removeanimationtype: 1,
    }
    for (let option in baseOptions) {
      !options[option] && (options[option] = baseOptions[option])
    }
    return options
  }

  /**
   * 设置蒙层样式
   */
  setMarkStyle () {
    let markStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '10',
    }
    for (let style in markStyle) {
      this.mark.style[style] = markStyle[style]
    }
  }

  /**
   * 设置克隆节点样式
   */
  setCloneNodeStyle () {
    let dom = store.draggedNode
    let style = dom.style
    let { left, top } = this.position
    let { width, height } = this.el.getBoundingClientRect()
    style.position = 'absolute'
    style.left = left + 'px'
    style.top = top + 'px'
    style.width = width +　'px'
    style.height = height + 'px'
    style.textAlign = this.el.currentStyle.textAlign
    style.transform = 'translate(0,0)'
    style.zIndex = 1000
    style.margin = 0
  }

  /**
   * 设置状态icon样式
   */
  setIconStyle () {
    let style = store.stateIcon.style
    style.display = 'none'
    style.position = 'absolute'
    style.width = '20px'
    style.height = '20px'
    style.zIndex = '10001'
  }

  /**
   * 发布事件
   */
  emit () {
    let args = Array.from(arguments)
    let functionName = args.shift()
    typeof this.options[functionName] === 'function' && this.options[functionName](...args)
  }
}

module.exports = Drag
