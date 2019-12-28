// import darkmode from "./main";
import darkmode from "./main";
import hljs from 'highlight.js';
import './static/css/style.css'
import '../node_modules/highlight.js/styles/github.css'

; (() => {
  document.addEventListener('DOMContentLoaded', () => {
    // hljs
    hljs.initHighlightingOnLoad()

    // darkmode control
    const dark = new darkmode()
    let flag = true
    document.getElementById('switch').addEventListener('click', () => {
      flag ? dark.turnOn() : dark.turnOff()
      flag = !flag
    })
  })
})()



