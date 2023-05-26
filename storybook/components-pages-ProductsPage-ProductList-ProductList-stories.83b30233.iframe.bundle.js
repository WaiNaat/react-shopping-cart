"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[970],{"./src/components/pages/ProductsPage/ProductList/ProductList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ProductList_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),ProductList_styled_ProductList=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.ul(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 40px 28px;\n\n  height: 100%;\n\n  @media screen and (max-width: 1250px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media screen and (max-width: 950px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media screen and (max-width: 650px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),ProductItem=__webpack_require__("./src/components/pages/ProductsPage/ProductItem/ProductItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductList=function ProductList(props){var listFetcher=props.listFetcher;return(0,jsx_runtime.jsx)(ProductList_styled_ProductList,{children:listFetcher.read().map((function(data){return(0,jsx_runtime.jsx)(ProductItem.Z,{product:(0,objectSpread2.Z)({},data)},data.id)}))})},ProductList_ProductList=ProductList;try{ProductList.displayName="ProductList",ProductList.__docgenInfo={description:"",displayName:"ProductList",props:{listFetcher:{defaultValue:null,description:"",name:"listFetcher",required:!0,type:{name:"DataFetcher<Product[]>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/ProductsPage/ProductList/ProductList.tsx#ProductList"]={docgenInfo:ProductList.__docgenInfo,name:"ProductList",path:"src/components/pages/ProductsPage/ProductList/ProductList.tsx#ProductList"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,products=__webpack_require__("./src/mocks/data/products.json"),ProductList_stories={title:"ProductList",component:ProductList_ProductList,tags:["autodocs"],decorators:[function(Story){return(0,jsx_runtime.jsx)(es.Wh,{children:(0,jsx_runtime.jsx)(Story,{})})}],parameters:{docs:{description:{component:"상품 목록 컴포넌트"}}}},Default={args:{listFetcher:{read:function read(){return products}}}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    listFetcher: mockFetcher\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/commons/SquareImage/SquareImage.styled.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return SquareImage}});var _templateObject,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),sizePixelMap={s:"25px",m:"50px",l:"147px",xl:"282px"},SquareImage=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.img(_templateObject||(_templateObject=(0,C_Users_Q_Documents_GitHub_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  width: ",";\n  height: ",";\n"])),(function(props){return sizePixelMap[props.size]}),(function(props){return sizePixelMap[props.size]}))},"./src/components/commons/SquareImage/SquareImage.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _SquareImage_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/commons/SquareImage/SquareImage.styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SquareImage=function SquareImage(props){var src=props.src,alt=props.alt,size=props.size;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SquareImage_styled__WEBPACK_IMPORTED_MODULE_0__.E,{size:size,src:src,alt:alt,loading:"lazy"})};__webpack_exports__.Z=SquareImage;try{SquareImage.displayName="SquareImage",SquareImage.__docgenInfo={description:"",displayName:"SquareImage",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/commons/SquareImage/SquareImage.tsx#SquareImage"]={docgenInfo:SquareImage.__docgenInfo,name:"SquareImage",path:"src/components/commons/SquareImage/SquareImage.tsx#SquareImage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/pages/ProductsPage/ProductItem/ProductItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ProductItem_ProductItem}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Colors=__webpack_require__("./src/constants/Colors.ts"),ProductItem_styled_ProductItem=styled_components_browser_esm.ZP.li(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 282px;\n  height: 100%;\n"]))),ProductDetailDiv=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 8px 0;\n  width: 100%;\n"]))),NameParagraph=styled_components_browser_esm.ZP.p(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  max-width: 186px;\n  height: 25.02px;\n\n  font-family: 'Noto Sans KR';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  color: ",";\n"])),Colors.Z.PRIMARY_COLOR_DARK),PriceParagraph=styled_components_browser_esm.ZP.p(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  max-width: 186px;\n  height: 32.72px;\n\n  font-family: 'Noto Sans KR';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 27px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  letter-spacing: 0.5px;\n\n  color: ",";\n"])),Colors.Z.PRIMARY_COLOR_DARK),SquareImage=__webpack_require__("./src/components/commons/SquareImage/SquareImage.tsx"),ProductStepper=__webpack_require__("./src/components/pages/ProductsPage/ProductStepper/ProductStepper.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductItem=function ProductItem(props){var thisProduct=props.product,id=thisProduct.id,name=thisProduct.name,price=thisProduct.price,imageUrl=thisProduct.imageUrl;return(0,jsx_runtime.jsxs)(ProductItem_styled_ProductItem,{children:[(0,jsx_runtime.jsx)(SquareImage.Z,{src:imageUrl,alt:name,size:"xl"}),(0,jsx_runtime.jsxs)(ProductDetailDiv,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(NameParagraph,{children:name}),(0,jsx_runtime.jsxs)(PriceParagraph,{children:[price.toLocaleString("ko-KR")," 원"]})]}),(0,jsx_runtime.jsx)(ProductStepper.Z,{productId:id,product:thisProduct})]})]})},ProductItem_ProductItem=ProductItem;try{ProductItem.displayName="ProductItem",ProductItem.__docgenInfo={description:"",displayName:"ProductItem",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/ProductsPage/ProductItem/ProductItem.tsx#ProductItem"]={docgenInfo:ProductItem.__docgenInfo,name:"ProductItem",path:"src/components/pages/ProductsPage/ProductItem/ProductItem.tsx#ProductItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/pages/ProductsPage/ProductStepper/ProductStepper.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ProductStepper_ProductStepper}});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),ProductStepper_styled_ProductStepper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),assets=__webpack_require__("./src/assets/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StepperEntryButton=function StepperEntryButton(props){var onClick=props.onClick;return(0,jsx_runtime.jsx)("button",{type:"button",onClick:onClick,"aria-label":"장바구니에 상품 추가하기",children:(0,jsx_runtime.jsx)(assets.$L,{})})},StepperEntryButton_StepperEntryButton=StepperEntryButton;try{StepperEntryButton.displayName="StepperEntryButton",StepperEntryButton.__docgenInfo={description:"",displayName:"StepperEntryButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/ProductsPage/StepperEntryButton/StepperEntryButton.tsx#StepperEntryButton"]={docgenInfo:StepperEntryButton.__docgenInfo,name:"StepperEntryButton",path:"src/components/pages/ProductsPage/StepperEntryButton/StepperEntryButton.tsx#StepperEntryButton"})}catch(__react_docgen_typescript_loader_error){}var Stepper=__webpack_require__("./src/components/commons/Stepper/Stepper.tsx"),useStepper=__webpack_require__("./src/hooks/useStepper.ts"),StepperSettings=__webpack_require__("./src/constants/StepperSettings.ts"),cartState=__webpack_require__("./src/recoil/cartState.ts"),useCartUpdateApi=__webpack_require__("./src/hooks/useCartUpdateApi.ts"),usePreviousValue=__webpack_require__("./src/hooks/usePreviousValue.ts"),cartToggleState=__webpack_require__("./src/recoil/cartToggleState.ts"),useToggleSetter=function useToggleSetterEffect(productId,value){var prevValue=(0,usePreviousValue.Z)(value),toggleSetter=(0,es.Zl)((0,cartToggleState.eE)(productId)),deleteToggleInfo=(0,es.rb)((0,cartToggleState.eE)(productId));(0,react.useEffect)((function(){prevValue!==value&&(0===prevValue&&value>0?toggleSetter(!0):0===value&&deleteToggleInfo())}),[productId,value])},useCartStateUpdateEffect=__webpack_require__("./src/hooks/useCartStateUpdateEffect.ts"),MIN=StepperSettings.Z.MIN,MAX=StepperSettings.Z.MAX,STEP=StepperSettings.Z.STEP,ProductStepper=function ProductStepper(props){var productId=props.productId,product=props.product,defaultValue=(0,es.sJ)((0,cartState.Il)(productId)),_useStepper=(0,useStepper.Z)(MIN,MAX,STEP,defaultValue),value=_useStepper.value,increaseValue=_useStepper.increaseValue,decreaseValue=_useStepper.decreaseValue,setValue=_useStepper.setValue;return(0,useCartUpdateApi.Z)(productId,value,setValue),useToggleSetter(productId,value),(0,useCartStateUpdateEffect.Z)(productId,value,product),(0,jsx_runtime.jsx)(ProductStepper_styled_ProductStepper,{children:value?(0,jsx_runtime.jsx)(Stepper.Z,{value:value,increaseValue:increaseValue,decreaseValue:decreaseValue,setValue:setValue}):(0,jsx_runtime.jsx)(StepperEntryButton_StepperEntryButton,{onClick:increaseValue})})},ProductStepper_ProductStepper=react.memo(ProductStepper);try{ProductStepper.displayName="ProductStepper",ProductStepper.__docgenInfo={description:"",displayName:"ProductStepper",props:{productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/ProductsPage/ProductStepper/ProductStepper.tsx#ProductStepper"]={docgenInfo:ProductStepper.__docgenInfo,name:"ProductStepper",path:"src/components/pages/ProductsPage/ProductStepper/ProductStepper.tsx#ProductStepper"})}catch(__react_docgen_typescript_loader_error){}}}]);