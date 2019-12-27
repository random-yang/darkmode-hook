const styles = {
  init: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '0',
    left: '0',
    mixBlendMode: 'difference',
    zIndex: '10',
    pointerEvents: 'none',
    transition: 'visibility 300ms ease-in-out, opacity 300ms ease-in-out',
  },
  normal: {
    visibility: "hidden",
    opacity: '0'
  },
  dark: {
    visibility: "visible",
    opacity: '1'
  },
}

export default class DarkmodeHook {
  constructor() {
    this.maskDOMNode = document.createElement('div') // mask遮罩
    this.imgs = document.getElementsByTagName('img') // 整个页面的图片
    this.maskDOMNodeID = `${Math.floor(Math.random() * 100000)}` // 随机生成的 mask id
    this.init()
  }
  _installStyle(styles) {
    for (let key in styles) {
      this.maskDOMNode.style[key] = styles[key]
    }
  }

  _invertImages() {
    const invertImg = img => img.style.filter = img.style.filter !== "invert(100%)" ? "invert(100%)" : ""
    Array.prototype.forEach.call(this.imgs, invertImg)
  }
  
  init() {
    // 设置遮罩的 id
    this.maskDOMNode.id = this.maskDOMNodeID

    // fix chrome bug
    if (!document.documentElement.style.background) {
      document.documentElement.style.background = '#ffffff'
    }
    if (!document.body.style.background) {
      document.body.style.background = '#ffffff'
    }

    // mask 插入 body
    document.body.appendChild(this.maskDOMNode)

    // mask 样式初始化
    this._installStyle(styles.init)
    this._installStyle(styles.normal)
  }

  turnOn() {
    this._installStyle(styles.dark)
    // invert the images color
    // so that they can render with the right color
    this._invertImages()
  }

  turnOff() {
    this._installStyle(styles.normal)
    this._invertImages()
  }

  destroy() {
    const mask = document.getElementById(this.maskDOMNodeID)
    if (mask) {
      const parent = mask.parentElement
      parent.removeChild(mask)
    }
  }
}

window && (window['DarkmodeHook'] = DarkmodeHook) // mount on the global