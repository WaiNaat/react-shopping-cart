"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[490],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./src/components/commons/Stepper/Stepper.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Stepper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/commons/Stepper/Stepper.tsx"),_hooks_useStepper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useStepper.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Stepper",component:_Stepper__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"]};__webpack_exports__.default=meta;var Wrapper=function Wrapper(){var _useStepper=(0,_hooks_useStepper__WEBPACK_IMPORTED_MODULE_1__.Z)(0,99,1,0),value=_useStepper.value,increaseValue=_useStepper.increaseValue,decreaseValue=_useStepper.decreaseValue,setValue=_useStepper.setValue;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Stepper__WEBPACK_IMPORTED_MODULE_0__.Z,{value:value,increaseValue:increaseValue,decreaseValue:decreaseValue,setValue:setValue})},Default={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Wrapper,{})}};Default.parameters=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Default.parameters),{},{docs:(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"{\n  render: () => <Wrapper />\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/commons/Stepper/Stepper.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Stepper_Stepper}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Colors=__webpack_require__("./src/constants/Colors.ts"),StepperDiv=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: grid;\n  grid-template:\n    'a a b' 20px\n    'a a c' 20px\n    /32px 32px 32px;\n"]))),Input=styled_components_browser_esm.ZP.input(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  grid-area: a;\n\n  border: 1px solid ",";\n  text-align: center;\n"])),Colors.Z.STEPPER_BORDER),Button=styled_components_browser_esm.ZP.button(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  border: 1px solid ",";\n  color: ",";\n\n  font-size: xx-small;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),Colors.Z.STEPPER_BORDER,Colors.Z.PRIMARY_COLOR_DARK,Colors.Z.STEPPER_BORDER),UpButton=(0,styled_components_browser_esm.ZP)(Button)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  grid-area: b;\n"]))),DownButton=(0,styled_components_browser_esm.ZP)(Button)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  grid-area: c;\n"]))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Stepper=function Stepper(props){var value=props.value,increaseValue=props.increaseValue,decreaseValue=props.decreaseValue,setValue=props.setValue;return(0,jsx_runtime.jsxs)(StepperDiv,{children:[(0,jsx_runtime.jsx)(Input,{type:"text",role:"textbox",inputMode:"numeric",value:value,onChange:function onChange(_ref){var inputValue=_ref.target.value;return setValue(Number(inputValue))},"aria-label":"상품 개수 입력"}),(0,jsx_runtime.jsx)(UpButton,{type:"button",onClick:increaseValue,"aria-label":"상품 1개 추가",children:"▲"}),(0,jsx_runtime.jsx)(DownButton,{type:"button",onClick:decreaseValue,"aria-label":"상품 1개 삭제",children:"▼"})]})},Stepper_Stepper=Stepper;try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},increaseValue:{defaultValue:null,description:"",name:"increaseValue",required:!0,type:{name:"() => void"}},decreaseValue:{defaultValue:null,description:"",name:"decreaseValue",required:!0,type:{name:"() => void"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!0,type:{name:"(value: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/commons/Stepper/Stepper.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"src/components/commons/Stepper/Stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/Colors.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={FONT_WHITE:"#ffffff",PRIMARY_COLOR_HIGHLIGHT:"#04c09e",STEPPER_BORDER:"#dddddd",PRIMARY_COLOR_DARK:"#333333",PRODUCT_ITEM_BOTTOM_BORDER:"#cccccc",CART_LIST_COUNT_BORDER:"#aaaaaa",DELETE_SELECTED_BUTTON:"#bbbbbb"}},"./src/hooks/useStepper.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useStepper(){var min=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,max=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,step=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,defaultValue=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),_useState2=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return{value:value,increaseValue:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setValue((function(prev){return Math.min(prev+step,max)}))}),[step,max,setValue]),decreaseValue:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setValue((function(prev){return Math.max(prev-step,min)}))}),[step,min,setValue]),setValue:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(newValue){Number.isNaN(newValue)||newValue<min||newValue>max||setValue(Math.round(newValue/step)*step)}),[step,max,min,setValue])}}}}]);