// import "./comp1.scss"   这种是全局引入，会影响其他组件
import style from "./comp1.module.scss"  // 用style对象来接收
function comp1(){
    return(
        <div className={style.box}>
            <p>this is component 1</p>
        </div>
    )
}

export default comp1