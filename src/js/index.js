
/* 
* below webpackChunkName: "lodash" -->  sets the name of the chunk 
* for more info, https://webpack.js.org/api/module-methods#import-
*/
import "@babel/polyfill";

async function getComponent() {
    // const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    // const element = document.createElement('div');
    // element.innerHTML = _.join(['Demo of ','Dynamic Import !!!'], ' ');
    // return element;

   const element = document.createElement('div');
   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

   element.innerHTML = _.join(['Async version of ', 'Dynamic Import !!!'], ' ');

   return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
})
