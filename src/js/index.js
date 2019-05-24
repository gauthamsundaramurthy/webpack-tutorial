
/* 
* below webpackChunkName: "lodash" -->  sets the name of the chunk 
* for more info, https://webpack.js.org/api/module-methods#import-
*/

function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        const element = document.createElement('div');
        element.innerHTML = _.join(['Demo of ','Dynamic Import !!!'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
    document.body.appendChild(component);
})