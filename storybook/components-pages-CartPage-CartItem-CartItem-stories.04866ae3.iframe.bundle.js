"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[859],{"./src/components/pages/CartPage/CartItem/CartItem.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CartItem_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),SquareImage_styled=__webpack_require__("./src/components/commons/SquareImage/SquareImage.styled.ts"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),cartToggleState=__webpack_require__("./src/recoil/cartToggleState.ts"),Checkbox=__webpack_require__("./src/components/commons/Checkbox/Checkbox.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartCheckbox=function CartCheckbox(props){var productId=props.productId,productName=props.productName,_useRecoilState=(0,es.FV)((0,cartToggleState.eE)(productId)),_useRecoilState2=(0,slicedToArray.Z)(_useRecoilState,2),isToggled=_useRecoilState2[0],setIsToggled=_useRecoilState2[1];return(0,jsx_runtime.jsx)(Checkbox.Z,{label:"".concat(productName," 상품 선택하기"),checked:isToggled,onChange:function onChange(){return setIsToggled((function(prev){return!prev}))}})},CartCheckbox_CartCheckbox=CartCheckbox;try{CartCheckbox.displayName="CartCheckbox",CartCheckbox.__docgenInfo={description:"",displayName:"CartCheckbox",props:{productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/CartPage/CartCheckbox/CartCheckbox.tsx#CartCheckbox"]={docgenInfo:CartCheckbox.__docgenInfo,name:"CartCheckbox",path:"src/components/pages/CartPage/CartCheckbox/CartCheckbox.tsx#CartCheckbox"})}catch(__react_docgen_typescript_loader_error){}var regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),assets=__webpack_require__("./src/assets/index.ts"),cartState=__webpack_require__("./src/recoil/cartState.ts"),CartDeleteButton=function CartDeleteButton(props){var productId=props.productId,productName=props.productName,updateProductQuantity=(0,es.Zl)((0,cartState.Il)(productId)),deleteToggled=(0,es.rb)((0,cartToggleState.eE)(productId)),deleteProduct=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,fetch("/cart-items/".concat(productId),{method:"DELETE"});case 3:if(204!==_context.sent.status){_context.next=9;break}updateProductQuantity(0),deleteToggled(),_context.next=10;break;case 9:throw new Error("상품 삭제에 실패하였습니다.");case 10:_context.next=15;break;case 12:_context.prev=12,_context.t0=_context.catch(0),alert("".concat(productName," 상품 삭제에 실패하였습니다."));case 15:case"end":return _context.stop()}}),_callee,null,[[0,12]])})));return function deleteProduct(){return _ref.apply(this,arguments)}}();return(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"장바구니에서 ".concat(productName," 삭제하기"),onClick:deleteProduct,children:(0,jsx_runtime.jsx)(assets.y5,{"aria-hidden":!0})})},CartDeleteButton_CartDeleteButton=CartDeleteButton;try{CartDeleteButton.displayName="CartDeleteButton",CartDeleteButton.__docgenInfo={description:"",displayName:"CartDeleteButton",props:{productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/CartPage/CartDeleteButton/CartDeleteButton.tsx#CartDeleteButton"]={docgenInfo:CartDeleteButton.__docgenInfo,name:"CartDeleteButton",path:"src/components/pages/CartPage/CartDeleteButton/CartDeleteButton.tsx#CartDeleteButton"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),Stepper=__webpack_require__("./src/components/commons/Stepper/Stepper.tsx"),useStepper=__webpack_require__("./src/hooks/useStepper.ts"),StepperSettings=__webpack_require__("./src/constants/StepperSettings.ts"),useCartUpdateApi=__webpack_require__("./src/hooks/useCartUpdateApi.ts"),useCartStateUpdateEffect=__webpack_require__("./src/hooks/useCartStateUpdateEffect.ts"),MIN=StepperSettings.Z.MIN,MAX=StepperSettings.Z.MAX,STEP=StepperSettings.Z.STEP,CartStepper=function CartStepper(props){var defaultValue=props.defaultValue,productId=props.productId,_useStepper=(0,useStepper.Z)(MIN+1,MAX,STEP,defaultValue),value=_useStepper.value,increaseValue=_useStepper.increaseValue,decreaseValue=_useStepper.decreaseValue,setValue=_useStepper.setValue;return(0,useCartUpdateApi.Z)(productId,value,setValue),(0,useCartStateUpdateEffect.Z)(productId,value),(0,jsx_runtime.jsx)(Stepper.Z,{value:value,increaseValue:increaseValue,decreaseValue:decreaseValue,setValue:setValue})},CartStepper_CartStepper=(0,react.memo)(CartStepper);try{CartStepper.displayName="CartStepper",CartStepper.__docgenInfo={description:"",displayName:"CartStepper",props:{productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/CartPage/CartStepper/CartStepper.tsx#CartStepper"]={docgenInfo:CartStepper.__docgenInfo,name:"CartStepper",path:"src/components/pages/CartPage/CartStepper/CartStepper.tsx#CartStepper"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,_templateObject2,_templateObject3,_Default$parameters,_Default$parameters2,_Default$parameters2$,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Colors=__webpack_require__("./src/constants/Colors.ts"),CartItemLi=styled_components_browser_esm.ZP.li(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 25px 0;\n  margin: 0;\n  max-width: 735px;\n  border-bottom: 1.5px solid ",";\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  letter-spacing: 0.5px;\n\n  &:last-of-type {\n    border: none;\n  }\n"])),Colors.Z.PRODUCT_ITEM_BOTTOM_BORDER),NameDiv=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n\n  column-gap: 15px;\n  width: calc(100% - 100px);\n\n  & > p {\n    max-width: 400px;\n\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"]))),CountDiv=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),CartItem_CartItem=function CartSingleItem(props){var id=props.id,quantity=props.quantity,name=props.name,imageUrl=props.imageUrl,price=props.price;return(0,jsx_runtime.jsxs)(CartItemLi,{children:[(0,jsx_runtime.jsxs)(NameDiv,{children:[(0,jsx_runtime.jsx)(CartCheckbox_CartCheckbox,{productId:id,productName:name}),(0,jsx_runtime.jsx)(SquareImage_styled.E,{size:"l",src:imageUrl,alt:""}),(0,jsx_runtime.jsx)("p",{children:name})]}),(0,jsx_runtime.jsxs)(CountDiv,{children:[(0,jsx_runtime.jsx)(CartDeleteButton_CartDeleteButton,{productId:id,productName:name}),(0,jsx_runtime.jsx)(CartStepper_CartStepper,{productId:id,defaultValue:quantity}),(0,jsx_runtime.jsxs)("p",{children:[price.toLocaleString("ko-KR"),"원"]})]})]})};try{CartItem.displayName="CartItem",CartItem.__docgenInfo={description:"",displayName:"CartItem",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/CartPage/CartItem/CartItem.tsx#CartItem"]={docgenInfo:CartItem.__docgenInfo,name:"CartItem",path:"src/components/pages/CartPage/CartItem/CartItem.tsx#CartItem"})}catch(__react_docgen_typescript_loader_error){}var CartItem_stories={title:"CartItem",component:CartItem_CartItem,tags:["autodocs"],decorators:[function(Story){return(0,jsx_runtime.jsx)(es.Wh,{children:(0,jsx_runtime.jsx)(Story,{})})}],parameters:{docs:{description:{component:"장바구니 상품 1개 컴포넌트"}}}},Default={args:{id:1,name:"새참",price:1234567,imageUrl:"https://images.unsplash.com/photo-1507477338202-487281e6c27e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",quantity:1}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    id: 1,\n    name: '새참',\n    price: 1234567,\n    imageUrl: 'https://images.unsplash.com/photo-1507477338202-487281e6c27e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',\n    quantity: 1\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/commons/Checkbox/Checkbox.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Checkbox_Checkbox}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Colors=__webpack_require__("./src/constants/Colors.ts"),CheckboxInput=styled_components_browser_esm.ZP.input(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: none;\n"]))),CheckboxLabel=styled_components_browser_esm.ZP.label(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n\n  width: 28px;\n  height: 28px;\n\n  border: 1px solid ",";\n  border-radius: 2px;\n  cursor: pointer;\n\n  ",":checked ~ & {\n    background-color: ",";\n  }\n"])),Colors.Z.PRIMARY_COLOR_HIGHLIGHT,CheckboxInput,Colors.Z.PRIMARY_COLOR_DARK),CheckSignDiv=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  box-sizing: border-box;\n\n  width: 18px;\n  height: 10px;\n\n  margin: 6px auto auto 4px;\n\n  background: none;\n  border: none;\n\n  transform: rotate(-45deg);\n\n  ",":checked ~ "," > & {\n    border-left: 3px solid ",";\n    border-bottom: 3px solid ",";\n  }\n"])),CheckboxInput,CheckboxLabel,Colors.Z.FONT_WHITE,Colors.Z.FONT_WHITE),LabelTextSpan=styled_components_browser_esm.ZP.span(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: inline-block;\n  clip: rect(1px, 1px, 1px, 1px);\n\n  border: 0;\n  width: 1px;\n  height: 1px;\n\n  overflow: hidden;\n\n  &::selection {\n    color: ",";\n  }\n"])),Colors.Z.PRIMARY_COLOR_DARK),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Checkbox=function Checkbox(props){var defaultChecked=props.defaultChecked,onClick=props.onClick,label=props.label,checked=props.checked,onChange=props.onChange,id=(0,react.useId)();return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(CheckboxInput,{type:"checkbox",id:id,defaultChecked:defaultChecked,onClick:onClick,checked:checked,onChange:onChange}),(0,jsx_runtime.jsxs)(CheckboxLabel,{htmlFor:id,children:[(0,jsx_runtime.jsx)(CheckSignDiv,{"aria-hidden":!0}),(0,jsx_runtime.jsx)(LabelTextSpan,{children:label})]})]})},Checkbox_Checkbox=Checkbox;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/commons/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/commons/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/commons/SquareImage/SquareImage.styled.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return SquareImage}});var _templateObject,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),sizePixelMap={s:"25px",m:"50px",l:"147px",xl:"282px"},SquareImage=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.img(_templateObject||(_templateObject=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  width: ",";\n  height: ",";\n"])),(function(props){return sizePixelMap[props.size]}),(function(props){return sizePixelMap[props.size]}))}}]);