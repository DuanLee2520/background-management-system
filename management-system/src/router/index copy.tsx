
//组件形式路由的写法 ，也是老版本的写法，


import App from "@/App";    // @设置为了表示src目录
import Home from "../views/Home";//.. 在文件路径中表示当前目录的父级目录，用于导航到上一级目录中的文件或目录。
import About from "../views/About";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";


const baseRouter_Old = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default baseRouter_Old;