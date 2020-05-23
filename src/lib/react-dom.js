import React from './react';

function setAttribute(node,attrs) {
    if(!attrs)return;

    for(let key in attrs){
        if(key.startsWith('on')){
            node[key.toLocaleLowerCase()]=attrs[key];
        }else if(key==='style'){
            Object.assign(node.style,attrs[key]);
        }else{
            node[key]=attrs[key];
        }
    }
    
}

function render(vdom,container){
   let node=createDomfromVdom(vdom)
    container.appendChild(node)
}

function createDomfromVdom(vdom){
    let node
    if(typeof vdom==='string'){
        node=document.createTextNode(vdom)
        return node
    }
    if(typeof vdom==='object'){
        if(typeof vdom.tag==='function'){
            // let component=new vdom.tag(vdom.attrs)
            let component=getComponent(vdom.tag,vdom.attrs)
            // 获取该对象的虚拟Dom
            let vnode=component.render()
            node=createDomfromVdom(vnode)
            component.$root=node
        }else{
            node=document.createElement(vdom.tag)
            setAttribute(node,vdom.attrs);
            vdom.children.forEach(childVdom=>render(childVdom,node))
        }

    }
    return node
}

function getComponent(constructor,attrs){
    if(constructor.prototype instanceof React.Component){
        return new constructor(attrs)
    }else{
        let App=class extends React.Component{}
        App.prototype.render=function(){
            return new constructor(attrs)

        }
        return new App(attrs)
    }
}

function renderComponent(component){
    let vdom=component.render()
    let node=createDomfromVdom(vdom)
    if(component.$root){
        component.$root.parentNode.replaceChild(node,component.$root)
    }
    console.log('render');
}

const ReactDOM={
    render(vdom,container){
        container.innerHtml=''
        render(vdom,container)
    },
    renderComponent
}

export default ReactDOM