import React from './lib/react';
import ReactDOM from './lib/react-dom';

// function clickMe() {
//     console.log('clickMe');
    
// }
// const styleObj={
//     color:'brown',
//     fontSize:'30px'
// }
// // jsx换行就加个括号
// let div =(<h1 className="hello" id="header" onClick={clickMe} style={styleObj}>
// <span>hello</span>
// <span>react</span>
// </h1> )

// console.log(div)
// 函数组件

function Menu(props){
    return <h2>hello 函数组件 {props.title}</h2>
}

// class组件

// class Menu extends React.Component{
//     render(){
//         return(
//           <h2>hello react {this.props.title}</h2>  
//         );
//     }
// }

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'xiaozhan'
        }
    }
    handleClick(){
        this.setState({
            title:'qianduan'
        })
    }
    render(){
        return(
            <div>
                <Menu  title={this.state.title}/>
                <h1>{this.state.title}</h1>
                <p>{this.props.id}</p>
                <span onClick={this.handleClick.bind(this)}>hello class组件</span>
            </div>
        );
    }
}

ReactDOM.render(
    <App id="app"></App>,
    document.body
)