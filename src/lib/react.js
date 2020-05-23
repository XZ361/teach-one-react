import ReactDOM from './react-dom.js'

function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
}

class Component{
    constructor(props){
        // 属性
        this.props=props
        // 状态
        this.state={}
    }

    setState(newState){
        // 修改状态时，可以将新的的状态添加到状态集合中
        Object.assign(this.state,newState)
        ReactDOM.renderComponent(this)
    }
}

const React = {
        createElement,
        Component
}

export default React