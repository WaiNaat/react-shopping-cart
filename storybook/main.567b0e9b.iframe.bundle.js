(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[179],{"./.storybook/preview.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return _storybook_preview}});var _templateObject,regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-styling/dist/index.mjs")),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),esm=__webpack_require__("./node_modules/styled-reset/lib/esm/index.js"),src_GlobalStyles=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").vJ)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)([" \n  ",'\n\t* {\n\t\t\tbox-sizing: border-box;\n\t}\n\n  li {\n    list-style: none;\n  }\n\n\tbody {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tfont-family: "Roboto", sans-serif;\n  } \n\n\t#root {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n  a {\n      text-decoration: none;\n      color: inherit;\n  }\n\n  input, textarea { \n    -moz-user-select: auto;\n    -webkit-user-select: auto;\n    -ms-user-select: auto;\n    user-select: auto;\n  }\n\n  input:focus {\n    outline: none;\n  }\n\n  button {\n    border: none;\n    background: none;\n    padding: 0;\n    cursor: pointer;\n  }\n'])),esm.ZP),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),lib=__webpack_require__("./node_modules/msw/lib/index.js"),products=__webpack_require__("./src/mocks/data/products.json"),getList=function getList(){var storageData=localStorage.getItem("MSW_CART");return storageData?JSON.parse(storageData):[]},storage_Cart={getList:getList,setItem:function setItem(productId,quantity){var cart=getList(),productIndexAtCart=cart.findIndex((function(_ref){return _ref.id===productId})),productInfo=products.find((function(_ref2){return _ref2.id===productId}));if(productInfo){productIndexAtCart<0?cart.push({id:productId,quantity:quantity,product:productInfo}):cart[productIndexAtCart].quantity=quantity;var newCart=cart.filter((function(item){return item.quantity>0})).sort((function(one,another){return one.id-another.id}));localStorage.setItem("MSW_CART",JSON.stringify(newCart))}}},handlers=function makeHandlers(failProbability){if(failProbability<0||failProbability>1)throw new Error("failProbability must be between 0 and 1.");return[lib.rest.get("/products",(function(req,res,ctx){return Math.random()<failProbability?res(ctx.delay(2222),ctx.status(500)):res(ctx.delay(2222),ctx.status(200),ctx.set("Content-Type","application/json"),ctx.json(products))})),lib.rest.get("/cart-items",(function(req,res,ctx){return Math.random()<failProbability?res(ctx.status(500)):res(ctx.status(200),ctx.set("Content-Type","application/json"),ctx.json(storage_Cart.getList()))})),lib.rest.post("/cart-items",function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(req,res,ctx){var _yield$req$json,productId;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,req.json();case 2:if(_yield$req$json=_context.sent,productId=_yield$req$json.productId,!(Math.random()<failProbability)){_context.next=6;break}return _context.abrupt("return",res(ctx.status(500)));case 6:return storage_Cart.setItem(productId,1),_context.abrupt("return",res(ctx.status(201),ctx.set("Content-Location","/cart-items/".concat(productId))));case 8:case"end":return _context.stop()}}),_callee)})));return function(_x,_x2,_x3){return _ref.apply(this,arguments)}}()),lib.rest.patch("/cart-items/:productId",function(){var _ref2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(req,res,ctx){var productId,_yield$req$json2,quantity;return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return productId=req.params.productId,_context2.next=3,req.json();case 3:if(_yield$req$json2=_context2.sent,quantity=_yield$req$json2.quantity,!(Math.random()<failProbability)){_context2.next=7;break}return _context2.abrupt("return",res(ctx.delay(1e3),ctx.status(500)));case 7:return storage_Cart.setItem(Number(productId),quantity),_context2.abrupt("return",res(ctx.status(200)));case 9:case"end":return _context2.stop()}}),_callee2)})));return function(_x4,_x5,_x6){return _ref2.apply(this,arguments)}}()),lib.rest.delete("/cart-items/:productId",function(){var _ref3=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee3(req,res,ctx){var productId;return(0,regeneratorRuntime.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(productId=req.params.productId,!(Math.random()<failProbability)){_context3.next=3;break}return _context3.abrupt("return",res(ctx.status(500)));case 3:return storage_Cart.setItem(Number(productId),0),_context3.abrupt("return",res(ctx.status(204)));case 5:case"end":return _context3.stop()}}),_callee3)})));return function(_x7,_x8,_x9){return _ref3.apply(this,arguments)}}())]},worker=lib.setupWorker.apply(void 0,(0,toConsumableArray.Z)(handlers(0))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if("/react-shopping-cart/storybook"!==window.location.pathname){_context.next=3;break}return window.location.pathname+="/",_context.abrupt("return");case 3:return _context.next=5,worker.start({serviceWorker:{url:"".concat(".","/mockServiceWorker.js")}});case 5:case"end":return _context.stop()}}),_callee)})))();var _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[(0,dist.RX)({GlobalStyles:src_GlobalStyles}),function(Story){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(react_router_dom_dist.VK,{children:(0,jsx_runtime.jsx)(Story,{})})})}]}},"./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":function(module){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/Header/Header.stories":["./src/components/Header/Header.stories.tsx",45,314],"./components/Header/Header.stories.tsx":["./src/components/Header/Header.stories.tsx",45,314],"./components/commons/Checkbox/Checkbox.stories":["./src/components/commons/Checkbox/Checkbox.stories.tsx",998],"./components/commons/Checkbox/Checkbox.stories.tsx":["./src/components/commons/Checkbox/Checkbox.stories.tsx",998],"./components/commons/LoadingSpinner/LoadingSpinner.stories":["./src/components/commons/LoadingSpinner/LoadingSpinner.stories.tsx",15],"./components/commons/LoadingSpinner/LoadingSpinner.stories.tsx":["./src/components/commons/LoadingSpinner/LoadingSpinner.stories.tsx",15],"./components/commons/SquareImage/SquareImage.stories":["./src/components/commons/SquareImage/SquareImage.stories.tsx",192],"./components/commons/SquareImage/SquareImage.stories.tsx":["./src/components/commons/SquareImage/SquareImage.stories.tsx",192],"./components/commons/Stepper/Stepper.stories":["./src/components/commons/Stepper/Stepper.stories.tsx",490],"./components/commons/Stepper/Stepper.stories.tsx":["./src/components/commons/Stepper/Stepper.stories.tsx",490],"./components/pages/CartPage/CartItem/CartItem.stories":["./src/components/pages/CartPage/CartItem/CartItem.stories.tsx",45,894,859],"./components/pages/CartPage/CartItem/CartItem.stories.tsx":["./src/components/pages/CartPage/CartItem/CartItem.stories.tsx",45,894,859],"./components/pages/LoadingPage/LoadingPage.stories":["./src/components/pages/LoadingPage/LoadingPage.stories.tsx",423],"./components/pages/LoadingPage/LoadingPage.stories.tsx":["./src/components/pages/LoadingPage/LoadingPage.stories.tsx",423],"./components/pages/ProductsPage/ProductItem/ProductItem.stories":["./src/components/pages/ProductsPage/ProductItem/ProductItem.stories.tsx",45,894,614],"./components/pages/ProductsPage/ProductItem/ProductItem.stories.tsx":["./src/components/pages/ProductsPage/ProductItem/ProductItem.stories.tsx",45,894,614],"./components/pages/ProductsPage/ProductList/ProductList.stories":["./src/components/pages/ProductsPage/ProductList/ProductList.stories.tsx",45,894,970],"./components/pages/ProductsPage/ProductList/ProductList.stories.tsx":["./src/components/pages/ProductsPage/ProductList/ProductList.stories.tsx",45,894,970],"./components/pages/ProductsPage/ProductStepper/ProductStepper.stories":["./src/components/pages/ProductsPage/ProductStepper/ProductStepper.stories.tsx",45,85,910,894,535],"./components/pages/ProductsPage/ProductStepper/ProductStepper.stories.tsx":["./src/components/pages/ProductsPage/ProductStepper/ProductStepper.stories.tsx",45,85,910,894,535]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function(){return Object.keys(map)},webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__;const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const{SERVER_CHANNEL_URL:SERVER_CHANNEL_URL}=dist.global,channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),SERVER_CHANNEL_URL){const serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({url:SERVER_CHANNEL_URL});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-styling/dist/preview.mjs"),__webpack_require__("./.storybook/preview.tsx")])})},"@storybook/channels":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":function(module){"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"./src/mocks/data/products.json":function(module){"use strict";module.exports=JSON.parse('[{"id":1,"name":"지빠귀","price":10000,"imageUrl":"https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},{"id":2,"name":"참새","price":2147483647,"imageUrl":"https://images.unsplash.com/photo-1606071548917-78ed9809141f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"},{"id":3,"name":"앵무새","price":8000,"imageUrl":"https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"},{"id":4,"name":"펠리컨","price":10000,"imageUrl":"https://plus.unsplash.com/premium_photo-1669258888073-b6b1eda108ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},{"id":5,"name":"왕부리새","price":20000,"imageUrl":"https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&q=80"},{"id":6,"name":"플라밍고","price":25000,"imageUrl":"https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"},{"id":7,"name":"올빼미","price":15000,"imageUrl":"https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"},{"id":8,"name":"물총새","price":18000,"imageUrl":"https://images.unsplash.com/photo-1601544829024-bc7f4c2213c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=471&q=80"},{"id":9,"name":"부엉이","price":980000,"imageUrl":"https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"},{"id":10,"name":"카나리아","price":22000,"imageUrl":"https://images.unsplash.com/photo-1586861256152-6c7e7ce3895d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{"id":11,"name":"동물계 척삭동물문 조강 비둘기목 비둘기과 비둘기","price":5000,"imageUrl":"https://images.unsplash.com/photo-1507126882445-434b04530d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{"id":12,"name":"공작","price":10000,"imageUrl":"https://images.unsplash.com/photo-1536514900905-0d5511b9d489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}]')}},function(__webpack_require__){__webpack_require__.O(0,[811],(function(){return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);