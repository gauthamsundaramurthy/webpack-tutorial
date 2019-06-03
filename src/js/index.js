import _ from 'lodash';
import printMe from './print.js';
import '../css/styles.scss';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component()
document.body.appendChild(element);

// Webpack Dev Server do a page reload when it detects a change 
// HMR avoids page reload and update the content

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element)
        element = component()
        document.body.appendChild(element)
    })
}

/* if page reload */

if (window.performance) {
    console.info("window.performance works fine on this browser");
}

if (performance.navigation.type == 1) {
    console.info( "This page is reloaded" );
} else {
    console.info( "This page is not reloaded");
}