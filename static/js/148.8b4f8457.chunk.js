"use strict";(self.webpackChunkboard_games=self.webpackChunkboard_games||[]).push([[148],{8729:function(e,a,s){s.d(a,{Z:function(){return c}});var n=s(3504),r="BreadCrumps_list__ewpz3",t="BreadCrumps_link__NN-Lo",i=s(184),c=function(e){var a=e.links,s=e.text;return(0,i.jsx)("nav",{children:(0,i.jsxs)("ul",{className:r,children:[(0,i.jsxs)("li",{className:t,children:[(0,i.jsx)(n.rU,{to:"/board-games",children:"Main"}),(0,i.jsx)("span",{children:">"})]}),a&&a.map((function(e){return e.path?(0,i.jsxs)("li",{className:t,children:[(0,i.jsx)(n.rU,{to:e.path,children:e.name}),(0,i.jsx)("span",{children:">"})]},e.path):(0,i.jsx)("li",{className:t,children:(0,i.jsx)("span",{children:e.name})},e.name)})),s&&(0,i.jsx)("li",{className:t,children:(0,i.jsx)("span",{children:s})})]})})}},2469:function(e,a,s){s.d(a,{Z:function(){return D}});var n=s(4942),r=s(885),t=s(3504),i=s(2791),c=s(1694),l=s.n(c),o=s(2591),d=s(9911),u=s(1573),_=s(6e3),m=s(7828),x="CardModal_wrapper__iCw4u",p="CardModal_title__VyYms",g="CardModal_btn__Mr3qA",h=s(184),j=function(){return(0,h.jsxs)("section",{onClick:function(e){return e.stopPropagation()},className:x,children:[(0,h.jsx)("div",{className:p,children:"Ask a question"}),(0,h.jsx)(m.Z,{label:"Your name",type:"text"}),(0,h.jsx)(m.Z,{label:"Your phone number",type:"text"}),(0,h.jsx)(m.Z,{label:"Your question",type:"textarea"}),(0,h.jsx)("div",{className:g,children:(0,h.jsx)(_.Z,{text:"Leave a question"})})]})},f="CardInProductPage_bottomWrapper__M4Cuk",v="CardInProductPage_modal__hOvPc",C="CardInProductPage_label__VPiwz",y="CardInProductPage_text__oXVbC",N="CardInProductPage_btnBottom__jtZdC",Z=s(1934),b=function(){var e=(0,i.useState)(!1),a=(0,r.Z)(e,2),s=a[0],n=a[1],t=(0,i.useState)(!1),c=(0,r.Z)(t,2),o=c[0],d=c[1],u=(0,i.useState)(!1),_=(0,r.Z)(u,2),m=_[0],x=_[1];function p(){n(!s)}return(0,i.useEffect)((function(){s?document.body.classList.add("lock"):document.body.classList.remove("lock")}),[s]),(0,h.jsxs)("article",{className:f,children:[s&&(0,h.jsxs)("div",{className:v,onClick:p,children:[(0,h.jsx)("span",{className:"closeBtn",children:"\xd7"}),(0,h.jsx)(j,{})]}),(0,h.jsxs)("div",{className:l()(C,"asideCategoryTitle",{asideCategoryTitle_active:o}),onClick:function(){d(!o)},children:[(0,h.jsx)("span",{children:"Shipping"}),(0,h.jsx)(Z.Z,{id:"arrowSpoiler"})]}),o&&(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("p",{children:"Pickup from the store: today"}),(0,h.jsx)("p",{children:"Pickup from 761 locations: 1-3 days"}),(0,h.jsx)("p",{children:"Courier delivery: 1-3 days"}),(0,h.jsx)("p",{children:"Mail delivery: from 3 days"})]}),(0,h.jsxs)("div",{className:l()(C,"asideCategoryTitle",{asideCategoryTitle_active:m}),onClick:function(){x(!m)},children:[(0,h.jsx)("span",{children:"Payment"}),(0,h.jsx)(Z.Z,{id:"arrowSpoiler"})]}),m&&(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("p",{children:"You accept the terms of the Public offer and give consent to the processing of personal data"}),(0,h.jsx)("p",{children:"Courier delivery: 1-3 days"}),(0,h.jsx)("p",{children:"Mail delivery: from 3 days"}),(0,h.jsx)("p",{children:"Pickup from the store: today"}),(0,h.jsx)("p",{children:"Pickup from 761 locations: 1-3 days"})]}),(0,h.jsx)("button",{className:N,onClick:p,children:"Ask a question"})]})},P="Card_card__7JrJj",k="Card_discount__AFuli",S="Card_mainImg__xtE7R",w="Card_mainImg_active__Zqcjm",R="Card_info__c+zyp",T="Card_people__skOie",A="Card_timer__Cmc1s",I="Card_age__k779z",F="Card_name__alfnp",M="Card_price__zJ9iH",U="Card_price_active__wCu4h",L="Card_oldPrice__bUxd-",E="Card_newPrice__A96jn",O="Card_btn__1oXQ0",W="Card_btn_active__LOIoQ",q="Card_quantity__ARTRl",B="Card_btnFast__iIiMq",Q="Card_btnFast_active__r2-AE",D=function(e){var a=e._id,s=e.img,c=e.discount,_=e.people,m=e.timer,x=e.age,p=e.name,g=e.price,j=e.isProductPage,f=(0,d.Z)(),v=(0,i.useState)(0),C=(0,r.Z)(v,2),y=C[0],N=C[1],D=(0,u.Z)((function(e){return e.cartPage.addedItems}));function X(){f((0,o._7)({id:a,newPrice:g.new,oldPrice:g.old||g.new}))}return(0,i.useEffect)((function(){if(D.length){var e=D.find((function(e){return e[a]}));e&&N(e[a])}}),[D]),(0,h.jsxs)("article",{className:P,children:[!j&&c&&(0,h.jsxs)("div",{className:k,children:["-",c,"%"]}),(0,h.jsx)(t.rU,{to:"/board-games/product/".concat(a),className:l()(S,(0,n.Z)({},w,j)),children:(0,h.jsx)("img",{src:s.original,alt:p})}),(0,h.jsxs)("div",{className:R,children:[(0,h.jsxs)("span",{className:T,children:[(0,h.jsx)("img",{src:"https://i.ibb.co/fpmn2Bj/people.png",alt:"peopleIcon"}),_[0],"-",_[1]]}),0!==m[0]&&(0,h.jsxs)("span",{className:A,children:[(0,h.jsx)(Z.Z,{id:"cardTimer"}),m[0],"-",m[1]]}),(0,h.jsxs)("span",{className:I,children:[x,"+"]})]}),!j&&(0,h.jsx)(t.rU,{to:"/board-games/product/".concat(a),className:F,children:p}),(0,h.jsxs)("div",{className:l()(M,(0,n.Z)({},U,j)),children:[g.old&&(0,h.jsxs)("span",{className:L,children:[g.old,"$"]}),(0,h.jsxs)("span",{className:E,children:[g.new,"$"]})]}),(0,h.jsxs)("button",{className:l()(O,(0,n.Z)({},W,j)),onClick:X,children:[(0,h.jsx)("span",{children:"To cart"}),(0,h.jsxs)("span",{className:q,children:[!!y&&(0,h.jsx)("span",{children:y}),(0,h.jsx)(Z.Z,{id:"cardPeople"})]})]}),(0,h.jsx)(t.rU,{onClick:X,to:"/board-games/order",className:l()(B,(0,n.Z)({},Q,j)),children:"Buy in 1 click"}),j&&(0,h.jsx)(b,{})]})}},1969:function(e,a,s){s.d(a,{Z:function(){return g}});var n=s(1573),r=s(4942),t=s(885),i=s(2791),c=s(1694),l=s.n(c),o="Question_wrapper__qfwwN",d="Question_top__a6aGK",u="Question_top_active__doI00",_="Question_text__1WXRX",m=s(1934),x=s(184),p=function(e){var a=e.title,s=e.text,n=e.isActive,c=(0,i.useState)(n),p=(0,t.Z)(c,2),g=p[0],h=p[1];return(0,x.jsxs)("section",{className:o,children:[(0,x.jsxs)("div",{onClick:function(){h(!g)},className:l()(d,(0,r.Z)({},u,g)),children:[(0,x.jsx)("span",{children:a}),(0,x.jsx)(m.Z,{id:"arrowSpoiler"})]}),g&&(0,x.jsx)("div",{className:_,children:s})]})},g=function(){var e=(0,n.Z)((function(e){return e.products.questions}));return(0,x.jsx)("article",{children:e.map((function(e){return(0,x.jsx)(p,{text:e.text,title:e.title,isActive:1===e.id},e.id)}))})}},148:function(e,a,s){s.r(a),s.d(a,{default:function(){return me}});var n=s(2791),r=s(5563),t=s(1625),i=s(7575),c=s(9911),l=s(1573),o=s(6871),d=s(1694),u=s.n(d),_="AgeFilter_checkboxes__LgN3e",m=s(1934),x=s(184),p=function(){var e=(0,c.Z)(),a=(0,l.Z)((function(e){return e.filterCategory})),s=a.ageItems,n=a.selectedAge,r=a.isSpoilerActive;function i(a){e((0,t.VS)(a.target.value))}return(0,x.jsxs)("section",{className:"asideCategoryWrapper",children:[(0,x.jsxs)("div",{onClick:function(){e((0,t.tv)())},className:u()("asideCategoryTitle",{asideCategoryTitle_active:r.ageFilter}),children:[(0,x.jsx)("span",{children:"Ages"}),(0,x.jsx)(m.Z,{id:"arrowSpoiler"})]}),r.ageFilter&&(0,x.jsx)("div",{className:_,children:s.map((function(e){return(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{onChange:i,value:e.value,type:"radio",name:"age",className:"checkboxInput",checked:n===e.value}),(0,x.jsxs)("span",{children:[""!==e.value&&"from"," ",e.name," ",""!==e.value&&"years"]})]},e.value)}))})]})},g=s(3504),h=s(1413),j=s(885),f={subCategory:"ItemSubCategories_subCategory__kpnaO",link:"ItemSubCategories_link__+fcWj"},v=function(e){var a=e.name,s=e.path,r=e.subCategories,t=(0,n.useState)(!1),i=(0,j.Z)(t,2),c=i[0],l=i[1],d=(0,o.UO)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(g.rU,{to:s,className:u()("asideCategoryTitle","asideCategoryTitle_inner","linkUrl",{asideCategoryTitle_active:c,linkUrl_active:d["*"]===s}),onClick:function(){l(!c)},children:[(0,x.jsx)("span",{className:f.subTitle,children:a}),(0,x.jsx)(m.Z,{id:"arrowSpoiler"})]}),c&&r&&r.map((function(e){return(0,x.jsx)(g.rU,{to:e.path,className:u()(f.link,"linkUrl",{linkUrl_active:d["*"]===e.path}),children:e.name},e.path)}))]})},C="SubCategories_wrapper__gLp0g",y=function(){var e=(0,o.UO)(),a=(0,l.Z)((function(e){return e.filterCategory.categories}));return(0,x.jsx)("section",{className:C,children:a.map((function(a){return a.subCategories?(0,x.jsx)(v,(0,h.Z)({},a),a.path):(0,x.jsx)(g.rU,{to:a.path,className:u()("asideCategoryTitle","asideCategoryTitle_inner","linkUrl",{linkUrl_active:a.path===e["*"]}),children:a.name},a.path)}))})},N=function(){var e=(0,c.Z)(),a=(0,l.Z)((function(e){return e.filterCategory.isSpoilerActive})).categoriesFilter,s=(0,o.UO)();return(0,n.useEffect)((function(){s["*"]?s["*"].includes("/")?(e((0,t.PR)(s["*"].split("/")[0])),e((0,t.ds)(s["*"].split("/")[1]))):(e((0,t.PR)(s["*"])),e((0,t.ds)(""))):(e((0,t.PR)("")),e((0,t.ds)("")))}),[s]),(0,x.jsxs)("section",{className:"asideCategoryWrapper",children:[(0,x.jsxs)(g.rU,{to:"/board-games/catalog",className:u()("asideCategoryTitle",{asideCategoryTitle_active:a}),onClick:function(){e((0,t.L4)(!a))},children:[(0,x.jsx)("span",{className:u()("linkUrl",{linkUrl_active:!s["*"]}),children:"All categories"}),(0,x.jsx)(m.Z,{id:"arrowSpoiler"})]}),a&&(0,x.jsx)(y,{})]})},Z=s(3598),b="RangeSlider_slider__O7Xsv",P="RangeSlider_progress__6aaZ1",k="RangeSlider_rangeInputs__+VYE7",S=function(e){var a=e.range,s=e.valueRange,r=e.setFromRange,t=e.setToRange,i=(0,n.useRef)(null);(0,n.useEffect)((function(){i.current&&(i.current.style.left=+s.from/(a.minMaxRange[1]-1)*100-(a.minMaxRange[1]<10?20:0)+"%",i.current.style.right=100-+s.to/(a.minMaxRange[1]-1)*100+(a.minMaxRange[1]<10?20:0)+"%")}),[s]);return(0,x.jsxs)("div",{draggable:!1,className:b,children:[(0,x.jsx)("div",{draggable:!1,ref:i,className:P}),(0,x.jsxs)("div",{draggable:!1,className:k,children:[(0,x.jsx)("input",{type:"range",min:a.minMaxRange[0],max:a.minMaxRange[1],step:a.step,value:""===s.from?0:s.from,onChange:function(e){+e.target.value<=+s.to-a.valueGap&&r(e)},name:"minRange",draggable:!1}),(0,x.jsx)("input",{type:"range",min:a.minMaxRange[0],max:a.minMaxRange[1],step:a.step,value:""===s.to?0:s.to,onChange:function(e){+e.target.value>=+s.from+a.valueGap&&t(e)},name:"maxRange",draggable:!1})]})]})},w="PriceFilter_pricesFlex__o+dy9",R="PriceFilter_priceLabel__D3Zt-",T="PriceFilter_checkboxLabel__LtLK4",A=function(){var e=(0,c.Z)(),a=(0,l.Z)((function(e){return e.filterCategory})),s=a.price,r=a.isOnlyStocked,i=a.isSpoilerActive,o=(0,n.useState)({from:s.from,to:s.to}),d=(0,j.Z)(o,2),_=d[0],p=d[1],g=(0,Z.Z)(_.from),f=(0,Z.Z)(_.to);function v(e){p((0,h.Z)((0,h.Z)({},_),{},{from:e.target.value}))}function C(e){p((0,h.Z)((0,h.Z)({},_),{},{to:e.target.value}))}return(0,n.useEffect)((function(){p({from:s.from,to:s.to})}),[s]),(0,n.useEffect)((function(){e((0,t.BJ)(g)),e((0,t.Dj)(f))}),[g,f]),(0,x.jsxs)("section",{className:"asideCategoryWrapper",children:[(0,x.jsxs)("div",{onClick:function(){e((0,t.T9)())},className:u()("asideCategoryTitle",{asideCategoryTitle_active:i.priceFilter}),children:[(0,x.jsx)("span",{children:"Price"}),(0,x.jsx)(m.Z,{id:"arrowSpoiler"})]}),i.priceFilter&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:w,children:[(0,x.jsxs)("label",{className:R,children:[(0,x.jsx)("span",{children:"From"}),(0,x.jsx)("input",{onChange:v,value:_.from,type:"number",name:"fromPrice"})]}),(0,x.jsxs)("label",{className:R,children:[(0,x.jsx)("span",{children:"To"}),(0,x.jsx)("input",{onChange:C,value:_.to,type:"number",name:"toPrice"})]})]}),(0,x.jsx)(S,{setFromRange:v,setToRange:C,range:s,valueRange:_}),(0,x.jsxs)("label",{className:T,children:[(0,x.jsx)("input",{className:"checkboxInput",onChange:function(){e((0,t.D3)())},checked:r,type:"checkbox"}),(0,x.jsx)("span",{children:"Only with a discount"})]})]})]})},I="PlayersQuantity_wrapperRange__OKSBE",F="PlayersQuantity_flexPlayers__Xd3Pa",M="PlayersQuantity_flexPlayer__tu4Nu",U="PlayersQuantity_quantity__SvpDZ",L=function(){var e=(0,c.Z)(),a=(0,l.Z)((function(e){return e.filterCategory})),s=a.players,r=a.isSpoilerActive,i=(0,n.useState)({from:s.from,to:s.to}),o=(0,j.Z)(i,2),d=o[0],_=o[1],p=(0,Z.Z)(d.from),g=(0,Z.Z)(d.to);return(0,n.useEffect)((function(){_({from:s.from,to:s.to})}),[s]),(0,n.useEffect)((function(){e((0,t.yJ)(p)),e((0,t._i)(g))}),[p,g]),(0,x.jsxs)("section",{className:"asideCategoryWrapper",children:[(0,x.jsxs)("div",{onClick:function(){e((0,t.sB)())},className:u()("asideCategoryTitle",{asideCategoryTitle_active:r.playersFilter}),children:[(0,x.jsx)("span",{children:"Number of players"}),(0,x.jsx)(m.Z,{id:"arrowSpoiler"})]}),r.playersFilter&&(0,x.jsxs)("div",{className:I,children:[(0,x.jsxs)("div",{className:F,children:[(0,x.jsxs)("div",{className:M,children:[(0,x.jsx)("span",{children:"From "}),(0,x.jsx)("div",{className:U,children:s.from})]}),(0,x.jsxs)("div",{className:M,children:[(0,x.jsx)("span",{children:"To "}),(0,x.jsx)("div",{className:U,children:s.to})]})]}),(0,x.jsx)(S,{range:s,valueRange:d,setFromRange:function(e){_((0,h.Z)((0,h.Z)({},d),{},{from:e.target.value}))},setToRange:function(e){_((0,h.Z)((0,h.Z)({},d),{},{to:e.target.value}))}})]})]})},E="AsideCategory_wrapper__RxoiL",O="AsideCategory_btn__gb47r",W=function(e){var a=e.resetSort,s=(0,c.Z)(),n=(0,o.s0)();return(0,x.jsxs)("section",{className:E,children:[(0,x.jsx)(N,{}),(0,x.jsx)(A,{}),(0,x.jsx)(p,{}),(0,x.jsx)(L,{}),(0,x.jsx)("input",{className:O,type:"button",value:"Reset filter",onClick:function(){s((0,t.sx)()),a(),n("/board-games/catalog")}})]})},q=s(2469),B=s(206),Q="Products_flex__LsMs5",D="Products_item__CTtVW",X="Products_notFoundItem__nwpjz",Y=function(){var e=(0,l.Z)((function(e){return e.products})).catalogItems;return(0,l.Z)((function(e){return e.filterCategory})).isLoadingProducts?(0,x.jsx)(B.Z,{}):e.length?(0,x.jsx)("section",{className:Q,children:e.map((function(e){return(0,x.jsx)("div",{className:D,children:(0,x.jsx)(q.Z,(0,h.Z)({},e))},e._id)}))}):(0,x.jsx)("div",{className:X,children:(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"No products found"}),"Try changing",(0,x.jsx)("br",{}),"filtering or category"]})})},z="Top_wrapper__x75EI",V="Top_title__P0kRA",J="Top_text__Fyyw6",K=function(){return(0,x.jsxs)("section",{className:z,children:[(0,x.jsx)("img",{src:"https://i.ibb.co/5RC6khb/bg1.jpg",alt:"bg1"}),(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h4",{className:V,children:"October tournament Warhammer 40000"}),(0,x.jsx)("div",{className:J,children:"Do you have a team and are you ready to Warhammer 40000 tournament?"})]})]})},G=s(4942),H="Pagination_wrapper__l3Izt",$="Pagination_arrowLeft__RsMq7",ee="Pagination_pagesNumber__67tgn",ae="Pagination_pageNumber__m79yg",se="Pagination_pageNumber_active__m8dWX",ne="Pagination_arrowRight__-A0aq",re=function(e){var a=e.topHeight,s=(0,c.Z)(),r=(0,l.Z)((function(e){return e.filterCategory})),i=r.pageLimit,o=r.page,d=(0,l.Z)((function(e){return e.products})).count,_=(0,n.useState)([]),p=(0,j.Z)(_,2),g=p[0],h=p[1];function f(e){s((0,t.YA)(e)),window.scrollTo(0,a)}return(0,n.useEffect)((function(){!function(){for(var e=[],a=1;a<=Math.ceil(d/i);a++)e.push(a);h(e)}(),s((0,t.YA)(1))}),[d]),d?(0,x.jsxs)("section",{className:H,children:[(0,x.jsx)("button",{className:$,onClick:function(){return o>1&&f(o-1)},children:(0,x.jsx)(m.Z,{id:"arrowSpoiler"})}),(0,x.jsx)("div",{className:ee,children:g.filter((function(e){return e<o+4&&e>o-4})).map((function(e){return(0,x.jsx)("button",{onClick:function(){return f(e)},className:u()(ae,(0,G.Z)({},se,e===o)),children:e},e)}))}),(0,x.jsx)("button",{className:ne,onClick:function(){return o<g.length&&f(o+1)},children:(0,x.jsx)(m.Z,{id:"arrowSpoiler"})})]}):(0,x.jsx)("h1",{children:"No Pagination"})},te=s(8729),ie=s(1969),ce="CatalogPage_flex__T7XaK",le="CatalogPage_title__25TW9",oe="CatalogPage_content__W0YeK",de="CatalogPage_aside__+7nN8",ue="CatalogPage_products__CrTMW",_e="CatalogPage_questionsWrapper__sDwZ6",me=function(){var e=(0,c.Z)(),a=(0,n.useRef)(null),s=(0,n.useRef)(null),o=(0,l.Z)((function(e){return e.filterCategory})),d=o.isOnlyStocked,u=o.price,_=o.selectedAge,p=o.players,g=o.category,h=o.subCategory,j=o.sortPrice,f=o.page,v=o.pageLimit;return(0,n.useEffect)((function(){e((0,t.DI)(!0)),(0,r.XS)({isOnlyStocked:d,price:u,selectedAge:_,players:p,category:g,subCategory:h,sortPrice:j,page:f,pageLimit:v}).then((function(a){e((0,i.eh)(+a.data.count)),e((0,i.O$)(a.data.products))})).catch((function(e){console.log(e.message)})).finally((function(){e((0,t.DI)(!1))}))}),[d,u,_,p,g,h,j,f,v]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(K,{}),(0,x.jsxs)("div",{className:"container",ref:a,children:[(0,x.jsx)(te.Z,{text:"Catalog"}),(0,x.jsxs)("div",{className:ce,children:[(0,x.jsx)("h2",{className:le,children:"All categories"}),(0,x.jsxs)("div",{className:"select",children:[(0,x.jsxs)("select",{defaultValue:"",onChange:function(a){e((0,t.SI)(a.target.value))},ref:s,children:[(0,x.jsx)("option",{value:"",children:"Disable Sort"}),(0,x.jsx)("option",{value:"-1",children:"By decreasing price"}),(0,x.jsx)("option",{value:"1",children:"Price ascending"})]}),(0,x.jsx)(m.Z,{id:"arrowSpoiler"})]})]}),(0,x.jsxs)("div",{className:oe,children:[(0,x.jsx)("aside",{className:de,children:(0,x.jsx)(W,{resetSort:function(){s.current&&(s.current.selectedIndex=0)}})}),(0,x.jsx)("div",{className:ue,children:(0,x.jsx)(Y,{})})]}),(0,x.jsx)(re,{topHeight:a.current?a.current.offsetTop-30:0}),(0,x.jsx)("div",{className:_e,children:(0,x.jsx)(ie.Z,{})})]})]})}}}]);
//# sourceMappingURL=148.8b4f8457.chunk.js.map