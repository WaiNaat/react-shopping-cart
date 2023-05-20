"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[314],{"./src/components/Header/Header.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Header_stories}});var _templateObject,_templateObject2,Header_styled_templateObject,Header_styled_templateObject2,_templateObject3,_Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),assets=__webpack_require__("./src/assets/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Colors=__webpack_require__("./src/constants/Colors.ts"),CartButton_styled_CartButton=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n\n  text-align: center;\n\n  font-family: 'Noto Sans KR';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 12px;\n\n  color: ",";\n\n  @media screen and (max-width: 480px) {\n    & > p {\n      display: none;\n    }\n\n    & > div {\n      width: 40px;\n      height: 40px;\n    }\n  }\n"])),Colors.Z.FONT_WHITE),CartLengthDiv=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 28px;\n  height: 28px;\n\n  border-radius: 50%;\n  background-color: ",";\n  text-align: center;\n\n  font-size: 16px;\n"])),Colors.Z.PRIMARY_COLOR_HIGHLIGHT),cartState=__webpack_require__("./src/recoil/cartState.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartButton_CartButton=function CartButton(){var cartLength=(0,es.sJ)(cartState.Au);return(0,jsx_runtime.jsxs)(CartButton_styled_CartButton,{children:[(0,jsx_runtime.jsx)("p",{children:"장바구니"}),(0,jsx_runtime.jsx)(CartLengthDiv,{children:cartLength})]})},Header_styled_Header=styled_components_browser_esm.ZP.header(Header_styled_templateObject||(Header_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: sticky;\n  top: 0;\n  z-index: 1;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 100%;\n  height: 80px;\n\n  padding: 10px 100px;\n\n  background-color: ",";\n  color: ",";\n\n  @media screen and (max-width: 650px) {\n    padding: 10px 50px;\n  }\n"])),Colors.Z.PRIMARY_COLOR_DARK,Colors.Z.FONT_WHITE),TitleDiv=styled_components_browser_esm.ZP.div(Header_styled_templateObject2||(Header_styled_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  column-gap: 28px;\n"]))),TitleHeading=styled_components_browser_esm.ZP.h1(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n\n  width: 145px;\n  height: 57px;\n\n  text-align: center;\n\n  font-family: 'Noto Sans KR';\n  font-style: normal;\n  font-weight: 900;\n  font-size: 40px;\n\n  line-height: 58px;\n\n  @media screen and (max-width: 450px) {\n    font-size: 1.5rem;\n  }\n"]))),Header_stories={title:"Header",component:function Header(){return(0,jsx_runtime.jsxs)(Header_styled_Header,{children:[(0,jsx_runtime.jsx)(dist.rU,{to:"/",children:(0,jsx_runtime.jsxs)(TitleDiv,{children:[(0,jsx_runtime.jsx)(assets.us,{}),(0,jsx_runtime.jsx)(TitleHeading,{children:"SHOP"})]})}),(0,jsx_runtime.jsx)(dist.rU,{to:"/cart",children:(0,jsx_runtime.jsx)(CartButton_CartButton,{})})]})},tags:["autodocs"],decorators:[function(Story){return(0,jsx_runtime.jsx)(es.Wh,{children:(0,jsx_runtime.jsx)(Story,{})})}],parameters:{docs:{description:{component:"페이지 헤더 컴포넌트"}}}},Default={};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/assets/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$L:function(){return ForwardRef},us:function(){return logo_ForwardRef},y5:function(){return trashBin_ForwardRef}});var _path,react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgCart(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({width:25,height:22,viewBox:"0 0 25 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M2.27577 17.3525L0.00422287 4.9775C-0.00124931 4.9227 -0.00124931 4.8673 0.00422287 4.8125C0.00422287 4.63017 0.0640526 4.4553 0.170551 4.32637C0.27705 4.19744 0.421495 4.125 0.572107 4.125H18.7785L19.5849 0.488128C19.6204 0.346605 19.6925 0.222681 19.7907 0.134749C19.8889 0.0468165 20.008 -0.000436457 20.1301 3.03821e-06H24.4233C24.5739 3.03821e-06 24.7184 0.0724359 24.8249 0.201367C24.9314 0.330298 24.9912 0.505167 24.9912 0.687503C24.9912 0.869839 24.9314 1.04471 24.8249 1.17364C24.7184 1.30257 24.5739 1.375 24.4233 1.375H20.5617L17.0408 17.3869C17.017 17.4827 16.9763 17.5712 16.9213 17.646C16.8664 17.7208 16.7986 17.7802 16.7228 17.82C16.9348 18.2525 17.0448 18.7471 17.0408 19.25C17.0408 19.9793 16.8015 20.6788 16.3755 21.1945C15.9495 21.7103 15.3717 22 14.7693 22C14.1668 22 13.589 21.7103 13.163 21.1945C12.737 20.6788 12.4977 19.9793 12.4977 19.25C12.5001 18.7664 12.6079 18.2921 12.8101 17.875H6.50652C6.70869 18.2921 6.81642 18.7664 6.81886 19.25C6.81886 19.9793 6.57953 20.6788 6.15353 21.1945C5.72754 21.7103 5.14976 22 4.54731 22C3.94486 22 3.36708 21.7103 2.94109 21.1945C2.51509 20.6788 2.27577 19.9793 2.27577 19.25C2.27757 18.7421 2.3955 18.2448 2.6165 17.8131C2.53394 17.7739 2.46011 17.7118 2.40094 17.6318C2.34177 17.5518 2.2989 17.4562 2.27577 17.3525ZM4.60978 5.5H1.28197L1.78738 8.25H4.85965L4.60978 5.5ZM18.4776 5.5H14.7125L14.4626 8.25H17.8699L18.4776 5.5ZM16.9556 12.375L17.5633 9.625H14.332L14.0764 12.375H16.9556ZM16.649 13.75H13.9515L13.7016 16.5H16.0356L16.649 13.75ZM14.7693 20.625C14.9939 20.625 15.2135 20.5444 15.4003 20.3933C15.587 20.2422 15.7326 20.0274 15.8186 19.7762C15.9045 19.5249 15.927 19.2485 15.8832 18.9818C15.8394 18.715 15.7312 18.47 15.5724 18.2777C15.4135 18.0854 15.2112 17.9545 14.9908 17.9014C14.7705 17.8484 14.5422 17.8756 14.3346 17.9797C14.1271 18.0837 13.9497 18.26 13.8249 18.4861C13.7001 18.7122 13.6335 18.9781 13.6335 19.25C13.6335 19.6147 13.7531 19.9644 13.9661 20.2223C14.1791 20.4801 14.468 20.625 14.7693 20.625ZM10.2262 16.5H12.5602L12.8101 13.75H10.2262V16.5ZM10.2262 12.375H12.935L13.1905 9.625H10.2262V12.375ZM10.2262 8.25H13.3155L13.5653 5.5H10.2262V8.25ZM6.75639 16.5H9.0904V13.75H6.50652L6.75639 16.5ZM6.3759 12.375H9.0904V9.625H6.12603L6.3759 12.375ZM5.99542 8.25H9.0904V5.5H5.75123L5.99542 8.25ZM4.54731 20.625C4.77195 20.625 4.99154 20.5444 5.17831 20.3933C5.36509 20.2422 5.51066 20.0274 5.59663 19.7762C5.68259 19.5249 5.70508 19.2485 5.66126 18.9818C5.61744 18.715 5.50926 18.47 5.35042 18.2777C5.19158 18.0854 4.98921 17.9545 4.76889 17.9014C4.54857 17.8484 4.32021 17.8756 4.11267 17.9797C3.90513 18.0837 3.72775 18.26 3.60295 18.4861C3.47815 18.7122 3.41154 18.9781 3.41154 19.25C3.41154 19.6147 3.5312 19.9644 3.7442 20.2223C3.9572 20.4801 4.24609 20.625 4.54731 20.625ZM3.29796 16.5H5.61494L5.36507 13.75H2.79254L3.29796 16.5ZM5.23445 12.375L4.9789 9.625H2.03157L2.53699 12.375H5.23445Z",fill:"#AAAAAA"})))}var logo_path,ForwardRef=react.forwardRef(SvgCart),logo_excluded=(__webpack_require__.p,["title","titleId"]);function logo_extends(){return logo_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},logo_extends.apply(this,arguments)}function logo_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function logo_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgLogo(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=logo_objectWithoutProperties(_ref,logo_excluded);return react.createElement("svg",logo_extends({width:51,height:44,viewBox:"0 0 51 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,logo_path||(logo_path=react.createElement("path",{d:"M46.2746 34.705L50.8177 9.95501C50.8287 9.8454 50.8287 9.73461 50.8177 9.62501C50.8177 9.26033 50.6981 8.9106 50.4851 8.65273C50.2721 8.39487 49.9832 8.25001 49.682 8.25001H13.2691L11.6563 0.976256C11.5855 0.69321 11.4411 0.445361 11.2447 0.269497C11.0483 0.093633 10.8103 -0.000872914 10.566 6.07642e-06H1.97952C1.6783 6.07642e-06 1.38941 0.144872 1.17641 0.402734C0.963411 0.660597 0.84375 1.01033 0.84375 1.37501C0.84375 1.73968 0.963411 2.08942 1.17641 2.34728C1.38941 2.60514 1.6783 2.75001 1.97952 2.75001H9.70277L16.7446 34.7738C16.7921 34.9655 16.8736 35.1423 16.9835 35.292C17.0934 35.4416 17.2289 35.5604 17.3806 35.64C16.9566 36.505 16.7366 37.4942 16.7446 38.5C16.7446 39.9587 17.2232 41.3576 18.0752 42.3891C18.9272 43.4205 20.0827 44 21.2877 44C22.4926 44 23.6481 43.4205 24.5001 42.3891C25.3521 41.3576 25.8307 39.9587 25.8307 38.5C25.8259 37.5328 25.6104 36.5842 25.2061 35.75H37.8131C37.4088 36.5842 37.1933 37.5328 37.1885 38.5C37.1885 39.9587 37.6671 41.3576 38.5191 42.3891C39.3711 43.4205 40.5266 44 41.7316 44C42.9365 44 44.092 43.4205 44.944 42.3891C45.796 41.3576 46.2746 39.9587 46.2746 38.5C46.271 37.4843 46.0352 36.4896 45.5932 35.6263C45.7583 35.5478 45.9059 35.4236 46.0243 35.2636C46.1426 35.1036 46.2284 34.9123 46.2746 34.705ZM41.6066 11H48.2622L47.2514 16.5H41.1069L41.6066 11ZM13.8711 11H21.4012L21.901 16.5H15.0863L13.8711 11ZM16.9149 24.75L15.6997 19.25H22.1622L22.6733 24.75H16.9149ZM17.5282 27.5H22.9232L23.4229 33H18.7549L17.5282 27.5ZM21.2877 41.25C20.8384 41.25 20.3992 41.0887 20.0256 40.7865C19.6521 40.4844 19.3609 40.0549 19.189 39.5524C19.0171 39.0499 18.9721 38.497 19.0598 37.9635C19.1474 37.4301 19.3637 36.9401 19.6814 36.5555C19.9991 36.1709 20.4039 35.909 20.8445 35.8028C21.2851 35.6967 21.7419 35.7512 22.1569 35.9593C22.572 36.1675 22.9268 36.52 23.1764 36.9722C23.426 37.4244 23.5592 37.9561 23.5592 38.5C23.5592 39.2294 23.3199 39.9288 22.8939 40.4445C22.4679 40.9603 21.8901 41.25 21.2877 41.25ZM30.3738 33H25.7058L25.2061 27.5H30.3738V33ZM30.3738 24.75H24.9562L24.4451 19.25H30.3738V24.75ZM30.3738 16.5H24.1952L23.6955 11H30.3738V16.5ZM37.3134 33H32.6454V27.5H37.8131L37.3134 33ZM38.0744 24.75H32.6454V19.25H38.5741L38.0744 24.75ZM38.8353 16.5H32.6454V11H39.3237L38.8353 16.5ZM41.7316 41.25C41.2823 41.25 40.8431 41.0887 40.4695 40.7865C40.096 40.4844 39.8048 40.0549 39.6329 39.5524C39.461 39.0499 39.416 38.497 39.5037 37.9635C39.5913 37.4301 39.8076 36.9401 40.1253 36.5555C40.443 36.1709 40.8478 35.909 41.2884 35.8028C41.729 35.6967 42.1858 35.7512 42.6008 35.9593C43.0159 36.1675 43.3707 36.52 43.6203 36.9722C43.8699 37.4244 44.0031 37.9561 44.0031 38.5C44.0031 39.2294 43.7638 39.9288 43.3378 40.4445C42.9118 40.9603 42.334 41.25 41.7316 41.25ZM44.2303 33H39.5963L40.096 27.5H45.2411L44.2303 33ZM40.3573 24.75L40.8684 19.25H46.763L45.7522 24.75H40.3573Z",fill:"white"})))}var trashBin_path,_defs,logo_ForwardRef=react.forwardRef(SvgLogo),trashBin_excluded=(__webpack_require__.p,["title","titleId"]);function trashBin_extends(){return trashBin_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},trashBin_extends.apply(this,arguments)}function trashBin_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function trashBin_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgTrashBin(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=trashBin_objectWithoutProperties(_ref,trashBin_excluded);return react.createElement("svg",trashBin_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,trashBin_path||(trashBin_path=react.createElement("path",{d:"M0 0H24V24H0V0Z",fill:"url(#pattern0)"})),_defs||(_defs=react.createElement("defs",null,react.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},react.createElement("use",{xlinkHref:"#image0_2_205",transform:"scale(0.025)"})),react.createElement("image",{id:"image0_2_205",width:40,height:40,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURbu7u////729vbu7u7y8vLy8vLy8vEdwTLy8vLy8vLy8vL+/v7u7u7y8vLu7u7u7u729vbu7u7+/v7u7u7u7u7u7u7u7u7y8vL6+vru7u7y8vL29vbu7u7u7u7y8vLy8vLu7u7u7u6hNFAIAAAAhdFJOU4ABRsRoNnsAf4N6JJOSfL2+fTBxzPxXvzN4b1Z1zcCC+y6w4fIAAACdSURBVDjL7dTJDsIgFEBROvponedZ7///pKYmDS3QIBuN8W7K4iSEqWoUmIqA9bZSnapT7YKrDVb3ow33OFta8ABr3Z1aX+BsQQXWwm6wsKA4oIapAaVpDjvpdYXZa9RAAnoPSkBxRxgAXXvY39/vgc+DFPP7h78LP3HNxAfFhCVkylMGZQvT4deftjAZD7lJYrzrIvdNnRfxP/vhHjYnSVqiKRrnAAAAAElFTkSuQmCC"}))))}var trashBin_ForwardRef=react.forwardRef(SvgTrashBin);__webpack_require__.p},"./src/constants/Colors.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={FONT_WHITE:"#ffffff",PRIMARY_COLOR_HIGHLIGHT:"#04c09e",STEPPER_BORDER:"#dddddd",PRIMARY_COLOR_DARK:"#333333",PRODUCT_ITEM_BOTTOM_BORDER:"#cccccc",CART_LIST_COUNT_BORDER:"#aaaaaa",DELETE_SELECTED_BUTTON:"#bbbbbb"}},"./src/recoil/cartState.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Au:function(){return cartLengthSelector},Il:function(){return productCountSelector}});var _get,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_cartToggleState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/recoil/cartToggleState.ts"),cartStateListSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"cartStateListSelector",get:(_get=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__.Z)().mark((function _callee(){var data;return(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("/cart-items",{method:"GET"});case 2:return data=_context.sent,_context.abrupt("return",data.json());case 4:case"end":return _context.stop()}}),_callee)}))),function get(){return _get.apply(this,arguments)})}),cartState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"cartState",default:cartStateListSelector}),cartLengthSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"cartLengthSelector",get:function get(_ref){var _get2=_ref.get;return Object.keys(_get2(cartState)).length}}),productCountSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.CG)({key:"productCountSelector",get:function get(productId){return function(_ref2){var product=(0,_ref2.get)(cartState).find((function(_ref3){return _ref3.id===productId}));return product?product.quantity:0}},set:function set(productId){return function(_ref4,newCount){var get=_ref4.get,set=_ref4.set,newCart=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(get(cartState));if(0===newCount||newCount instanceof recoil__WEBPACK_IMPORTED_MODULE_0__.nY)newCart=newCart.filter((function(_ref5){return _ref5.id!==productId}));else{var productIndex=newCart.findIndex((function(_ref6){return _ref6.id===productId}));if(-1===productIndex)return;newCart[productIndex]=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},newCart[productIndex]),{},{quantity:newCount})}set(cartState,newCart)}}}),productPriceSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.CG)({key:"productPriceSelector",get:function get(productId){return function(_ref7){var product=(0,_ref7.get)(cartState).find((function(_ref8){return _ref8.id===productId}));return product?product.quantity*product.product.price:0}}});(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"totalPriceSelector",get:function get(_ref9){var _get3=_ref9.get,toggledProducts=Object.entries(_get3(_cartToggleState__WEBPACK_IMPORTED_MODULE_1__.ZP)).filter((function(_ref10){var _ref11=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref10,2);_ref11[0];return _ref11[1]})).map((function(_ref12){return(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref12,1)[0]}));return _get3(cartState).reduce((function(sum,_ref14){var id=_ref14.id;return toggledProducts.includes(id.toString())?sum+_get3(productPriceSelector(id)):sum}),0)}});__webpack_exports__.ZP=cartState},"./src/recoil/cartToggleState.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{eE:function(){return productToggleSelector}});var _localStorage$getItem,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),KEY="LOCAL_CART_TOGGLES",cartToggleState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"cartToggleState",default:JSON.parse(null!==(_localStorage$getItem=localStorage.getItem(KEY))&&void 0!==_localStorage$getItem?_localStorage$getItem:"{}"),effects:[function(_ref){return(0,_ref.onSet)((function(newState){return localStorage.setItem(KEY,JSON.stringify(newState))}))}]}),productToggleSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.CG)({key:"productToggleSelector",get:function get(productId){return function(_ref2){var _get$productId;return null!==(_get$productId=(0,_ref2.get)(cartToggleState)[productId])&&void 0!==_get$productId?_get$productId:0}},set:function set(productId){return function(_ref3,isToggled){var get=_ref3.get,set=_ref3.set,newToggleState=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},get(cartToggleState));if(isToggled instanceof recoil__WEBPACK_IMPORTED_MODULE_0__.nY)delete newToggleState[productId];else{if(newToggleState[productId]===isToggled)return;newToggleState[productId]=isToggled}set(cartToggleState,newToggleState)}}}),toggledProductsSelector=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"toggledProductSelector",get:function get(_ref4){var toggleState=(0,_ref4.get)(cartToggleState);return Object.keys(toggleState).filter((function(id){return toggleState[Number(id)]})).map(Number)}});(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"allCheckedStatusSelector",get:function get(_ref5){var _get2=_ref5.get;return _get2(toggledProductsSelector).length===Object.keys(_get2(cartToggleState)).length}});__webpack_exports__.ZP=cartToggleState}}]);