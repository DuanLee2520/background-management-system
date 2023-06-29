import React from 'react'
import ReactDOM from 'react-dom/client'
import "rest-css"// 样式初始化
//正确的样式引入顺序： 初始化放在最前，然后是UI框架样式，然后是全局，然后是特殊组件样式
import "@/assets/style/globle.scss"
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router'
 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
