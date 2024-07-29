function customRenderer(reactElement, rootContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    /*
    //tareeka 1 for props:
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    */
   //tareeka 2 for props:
   //*
   for(const prop in reactElement.props){
    if(prop === 'children'){
        continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
   }
   //*/
   rootContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google on new tab'
}

const rootContainer = document.getElementById('root');

customRenderer(reactElement, rootContainer);