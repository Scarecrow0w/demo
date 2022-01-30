import{o as s,c as o,t as C,r as I,n as f,a as $,b as i,d as h,F as g,e as w,w as A,f as k,g as X,h as r,i as t,j as q,k as K,l as G}from"./vendor.e97c525f.js";const J=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function e(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(l){if(l.ep)return;l.ep=!0;const n=e(l);fetch(l.href,n)}};J();var u=(c,a)=>{const e=c.__vccOpts||c;for(const[d,l]of a)e[d]=l;return e};const Q={name:"codeBadge",props:["code"]},R={class:"text-sm font-medium text-grey-500"};function U(c,a,e,d,l,n){return s(),o("span",R," \u0410\u0440\u0442\u0438\u043A\u0443\u043B: "+C(e.code),1)}var Y=u(Q,[["render",U]]);const ee={name:"Image",props:["type","src"],data(){return{scaleClass:"bg-cover",centerClass:"bg-contain"}},computed:{computedClass(){switch(this.type){case"scale":return this.scaleClass;case"center":return this.centerClass}}}};function te(c,a,e,d,l,n){return s(),o("div",{class:f([n.computedClass,"flex flex-1 w-full h-full bg-center bg-no-repeat"]),style:$({backgroundImage:"url("+e.src+")"})},[I(c.$slots,"default")],6)}var se=u(ee,[["render",te]]);const ie={name:"saleBadge",props:["text","size"],data(){return{baseClass:"",lgClass:"text-2xl"}},computed:{computedClass(){switch(this.size){case"base":return this.baseClass;case"lg":return this.lgClass}}}};function ne(c,a,e,d,l,n){return s(),o("span",{class:f([n.computedClass,"inline-flex items-center justify-center px-2 py-1 font-bold text-white rounded bg-primary-600"])},C(e.text),3)}var le=u(ie,[["render",ne]]);const oe={name:"Share",props:{size:String,color:{type:String,default:"#2A2425"}}},ce={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re=["fill"],ae={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de=["fill"];function ue(c,a,e,d,l,n){return s(),o(g,null,[e.size==="sm"?(s(),o("svg",ce,[i("path",{d:"M2.61527 10.6154C1.16912 10.6154 -0.000113487 9.44615 -0.000113487 8C-0.000113487 6.55385 1.16912 5.38462 2.61527 5.38462C3.35373 5.38462 4.01527 5.69231 4.49219 6.18462L9.33835 3.36923C9.26143 3.13846 9.23066 2.87692 9.23066 2.61538C9.23066 1.16923 10.3999 0 11.846 0C13.2922 0 14.4614 1.16923 14.4614 2.61538C14.4614 4.06154 13.2922 5.23077 11.846 5.23077C11.1076 5.23077 10.446 4.92308 9.96912 4.43077L5.12296 7.26154C5.1845 7.49231 5.23066 7.73846 5.23066 8C5.23066 8.26154 5.1845 8.50769 5.12296 8.75385L9.96912 11.5692C10.446 11.0769 11.1076 10.7692 11.846 10.7692C13.2922 10.7692 14.4614 11.9385 14.4614 13.3846C14.4614 14.8308 13.2922 16 11.846 16C10.3999 16 9.23066 14.8308 9.23066 13.3846C9.23066 13.1231 9.27681 12.8769 9.33835 12.6308L4.49219 9.8C4.01527 10.3077 3.35373 10.6154 2.61527 10.6154ZM2.61527 6.61539C1.84604 6.61539 1.23066 7.23077 1.23066 8C1.23066 8.76923 1.84604 9.38462 2.61527 9.38462C3.3845 9.38462 3.99989 8.76923 3.99989 8C3.99989 7.23077 3.3845 6.61539 2.61527 6.61539ZM11.846 4C12.6153 4 13.2307 3.38462 13.2307 2.61538C13.2307 1.84615 12.6153 1.23077 11.846 1.23077C11.0768 1.23077 10.4614 1.84615 10.4614 2.61538C10.4614 3.38462 11.0768 4 11.846 4ZM11.846 14.7692C12.6153 14.7692 13.2307 14.1538 13.2307 13.3846C13.2307 12.6154 12.6153 12 11.846 12C11.0768 12 10.4614 12.6154 10.4614 13.3846C10.4614 14.1538 11.0768 14.7692 11.846 14.7692Z",fill:e.color},null,8,re)])):h("",!0),e.size==="base"?(s(),o("svg",ae,[i("path",{d:"M3.92266 15.9231C1.75344 15.9231 -0.000411987 14.1692 -0.000411987 12C-0.000411987 9.83077 1.75344 8.07692 3.92266 8.07692C5.03036 8.07692 6.02266 8.53846 6.73805 9.27692L14.0073 5.05385C13.8919 4.70769 13.8457 4.31538 13.8457 3.92308C13.8457 1.75385 15.5996 0 17.7688 0C19.938 0 21.6919 1.75385 21.6919 3.92308C21.6919 6.09231 19.938 7.84615 17.7688 7.84615C16.6611 7.84615 15.6688 7.38462 14.9534 6.64615L7.6842 10.8923C7.77651 11.2385 7.84574 11.6077 7.84574 12C7.84574 12.3923 7.77651 12.7615 7.6842 13.1308L14.9534 17.3538C15.6688 16.6154 16.6611 16.1538 17.7688 16.1538C19.938 16.1538 21.6919 17.9077 21.6919 20.0769C21.6919 22.2462 19.938 24 17.7688 24C15.5996 24 13.8457 22.2462 13.8457 20.0769C13.8457 19.6846 13.915 19.3154 14.0073 18.9462L6.73805 14.7C6.02266 15.4615 5.03036 15.9231 3.92266 15.9231ZM3.92266 9.92308C2.76882 9.92308 1.84574 10.8462 1.84574 12C1.84574 13.1538 2.76882 14.0769 3.92266 14.0769C5.07651 14.0769 5.99959 13.1538 5.99959 12C5.99959 10.8462 5.07651 9.92308 3.92266 9.92308ZM17.7688 6C18.9227 6 19.8457 5.07692 19.8457 3.92308C19.8457 2.76923 18.9227 1.84615 17.7688 1.84615C16.615 1.84615 15.6919 2.76923 15.6919 3.92308C15.6919 5.07692 16.615 6 17.7688 6ZM17.7688 22.1538C18.9227 22.1538 19.8457 21.2308 19.8457 20.0769C19.8457 18.9231 18.9227 18 17.7688 18C16.615 18 15.6919 18.9231 15.6919 20.0769C15.6919 21.2308 16.615 22.1538 17.7688 22.1538Z",fill:e.color},null,8,de)])):h("",!0)],64)}var H=u(oe,[["render",ue]]);const me={name:"Heading",props:["tag","title","size"],data(){return{fiveXlClass:"text-grey-800 font-bold text-4xl leading-10 tracking-[0.37px]",fourXlClass:"text-grey-800 font-bold text-3xl leading-9 tracking-[0.2px]",threeXlClass:"text-grey-800 font-bold text-2xl leading-7 tracking-[-0.4px]",twoXlClass:"text-grey-800 font-bold text-xl leading-7 tracking-[-0.1px]",lgClass:"text-grey-800 font-bold text-lg leading-6",baseClass:"text-grey-800 font-bold leading-6 tracking-[-0.37px]",smClass:"text-grey-500 font-medium leading-6 tracking-[-0.37px]"}},computed:{computedClass(){switch(this.size){case"5xl":return this.fiveXlClass;case"4xl":return this.fourXlClass;case"3xl":return this.threeXlClass;case"2xl":return this.twoXlClass;case"lg":return this.lgClass;case"base":return this.baseClass;case"sm":return this.smClass}}}};function he(c,a,e,d,l,n){return s(),w(X(e.tag),{class:f(n.computedClass)},{default:A(()=>[k(C(e.title),1)]),_:1},8,["class"])}var Z=u(me,[["render",he]]);const _e={name:"Star",props:{size:String,color:{type:String,default:"#2A2425"}}},xe={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},fe=["fill"],Ce={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge=["fill"];function pe(c,a,e,d,l,n){return s(),o(g,null,[e.size==="sm"?(s(),o("svg",xe,[i("path",{d:"M7.61394 0.822498C7.76744 0.495478 8.23256 0.495478 8.38606 0.822497L10.0854 4.44286C10.3271 4.95784 10.8096 5.31843 11.372 5.40435L15.1796 5.9861C15.5227 6.03853 15.6628 6.45706 15.4204 6.70551L12.6012 9.59492C12.2231 9.98246 12.0514 10.5265 12.1386 11.0609L12.8029 15.1332C12.8602 15.4846 12.4872 15.7473 12.1757 15.5751L8.82529 13.7231C8.31172 13.4392 7.68828 13.4392 7.17471 13.7231L3.82435 15.5751C3.51278 15.7473 3.1398 15.4846 3.19712 15.1332L3.8614 11.0609C3.94856 10.5265 3.77687 9.98246 3.39876 9.59492L0.579606 6.70551C0.337195 6.45706 0.477307 6.03853 0.820444 5.9861L4.62804 5.40435C5.1904 5.31843 5.67292 4.95784 5.91463 4.44287L7.61394 0.822498Z",fill:e.color},null,8,fe)])):h("",!0),e.size==="base"?(s(),o("svg",Ce,[i("path",{d:"M11.6139 0.822497C11.7674 0.495477 12.2326 0.495478 12.3861 0.822497L15.3214 7.0763C15.5632 7.59128 16.0457 7.95187 16.608 8.03779L23.1796 9.04183C23.5227 9.09426 23.6628 9.51278 23.4204 9.76124L18.6012 14.7005C18.2231 15.088 18.0514 15.6321 18.1386 16.1664L19.275 23.1332C19.3323 23.4846 18.9594 23.7473 18.6478 23.5751L12.8253 20.3565C12.3117 20.0726 11.6883 20.0726 11.1747 20.3565L5.35221 23.5751C5.04064 23.7473 4.66767 23.4846 4.72498 23.1332L5.8614 16.1664C5.94856 15.6321 5.77687 15.088 5.39876 14.7005L0.579606 9.76124C0.337195 9.51278 0.477307 9.09426 0.820444 9.04183L7.39198 8.03779C7.95433 7.95187 8.43685 7.59128 8.67856 7.0763L11.6139 0.822497Z",fill:e.color},null,8,ge)])):h("",!0)],64)}var T=u(_e,[["render",pe]]);const we={name:"Link",props:{link:Object,size:String},data(){return{baseClass:"text-base-link",smClass:"text-sm"}},computed:{computedClass(){switch(this.size){case"base":return this.baseClass;case"sm":return this.smClass}}}},be=["href"];function ve(c,a,e,d,l,n){return s(),o("a",{href:e.link.url,class:f([n.computedClass,"text-blue-400 border-b border-blue-50 whitespace-nowrap hover:text-blue-600"])},C(e.link.name),11,be)}var V=u(we,[["render",ve]]);const ye={name:"Description",props:["size","text"]},ze={key:0,class:"mb-4 font-medium text-grey-500"};function Ae(c,a,e,d,l,n){return s(),o(g,null,[e.size==="sm"?(s(),o("h5",ze," \u041E \u0442\u043E\u0432\u0430\u0440\u0435 ")):h("",!0),i("p",{class:f([this.size==="xs"?"text-sm":"","font-medium text-grey-800"])},C(e.text),3)],64)}var Le=u(ye,[["render",Ae]]);const ke={name:"Button",props:["text","type","size"],data(){return{smClass:"text-sm-bold py-[6px]",baseClass:"text-base-bold py-3"}},computed:{computedClass(){switch(this.size){case"sm":return this.smClass;case"base":return this.baseClass}}}};function Se(c,a,e,d,l,n){return e.type==="primary"?(s(),o("button",{key:0,class:f([n.computedClass,"w-full min-w-[64px] disabled:bg-grey-200 disabled:text-grey-600 flex hover:bg-primary-900 justify-center items-center rounded-lg bg-primary-400 text-white px-4"])},C(e.text),3)):e.type==="outline"?(s(),o("button",{key:1,class:f([n.computedClass,"w-full border border-grey-400 hover:border-grey-600 disabled:border-0 min-w-[64px] disabled:bg-grey-200 disabled:text-grey-600 flex justify-center items-center rounded-lg bg-white text-grey-800 px-4"])},C(e.text),3)):h("",!0)}var P=u(ke,[["render",Se]]);const Me={name:"Border",props:{size:String,color:{type:String,default:"#F1F0EF"}},data(){return{baseClass:"h-[1px]",lgClass:"h-[2px]"}},computed:{computedClass(){switch(this.size){case"base":return this.baseClass;case"lg":return this.lgClass}}}};function He(c,a,e,d,l,n){return s(),o("hr",{class:f(["border-0",n.computedClass]),style:$({backgroundImage:e.color})},null,6)}var Te=u(Me,[["render",He]]);const Ee={name:"Info",props:{size:String,color:{type:String,default:"#2A2425"}}},Be={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$e=i("circle",{cx:"8",cy:"8",r:"8",fill:"white"},null,-1),Ze=["fill"],Ve={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Pe=i("circle",{cx:"12",cy:"12",r:"12",fill:"white"},null,-1),je=["fill"];function De(c,a,e,d,l,n){return s(),o(g,null,[e.size==="sm"?(s(),o("svg",Be,[$e,i("path",{d:"M8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 -3.13323e-07 8 -6.99382e-07C3.584 -1.08544e-06 1.08544e-06 3.584 6.99382e-07 8C3.13323e-07 12.416 3.584 16 8 16ZM7.2 4L8.8 4L8.8 5.6L7.2 5.6L7.2 4ZM7.2 7.2L8.8 7.2L8.8 12L7.2 12L7.2 7.2Z",fill:e.color},null,8,Ze)])):h("",!0),e.size==="base"?(s(),o("svg",Ve,[Pe,i("path",{d:"M12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 3.34471e-06 12 2.76562e-06C5.376 2.18654e-06 3.53551e-06 5.376 2.95642e-06 12C2.37733e-06 18.624 5.376 24 12 24ZM10.8 6L13.2 6L13.2 8.4L10.8 8.4L10.8 6ZM10.8 10.8L13.2 10.8L13.2 18L10.8 18L10.8 10.8Z",fill:e.color},null,8,je)])):h("",!0)],64)}var Fe=u(Ee,[["render",De]]);const Oe={name:"Heart",props:{size:String,color:{type:String,default:"#2A2425"}}},We={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne=["fill"],Ie={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Xe=["fill"];function qe(c,a,e,d,l,n){return s(),o(g,null,[e.size==="sm"?(s(),o("svg",We,[i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.3688 1.00001C10.4037 1 9.78159 1.11498 9.06844 1.46405C8.8044 1.59329 8.55669 1.74893 8.32665 1.93051C8.10546 1.75911 7.86765 1.61061 7.61454 1.48542C6.88755 1.12585 6.23352 1 5.30303 1C2.81096 1 1 3.06484 1 5.74658C1 7.77183 2.12922 9.72819 4.23256 11.6199C5.3366 12.6129 6.74621 13.5955 7.75573 14.1183L8.33333 14.4174L8.91093 14.1183C9.92045 13.5955 11.3301 12.6129 12.4341 11.6199C14.5374 9.72819 15.6667 7.77183 15.6667 5.74658C15.6667 3.09323 13.8386 1.01024 11.3688 1.00001ZM14.3333 5.74658C14.3333 7.33327 13.3908 8.96621 11.5425 10.6286C10.5348 11.5349 9.23931 12.4406 8.33333 12.9158C7.42736 12.4406 6.13188 11.5349 5.12418 10.6286C3.27588 8.96621 2.33333 7.33327 2.33333 5.74658C2.33333 3.76515 3.58909 2.33333 5.30303 2.33333C6.04285 2.33333 6.49875 2.42106 7.02342 2.68056C7.33334 2.83385 7.60725 3.03625 7.84435 3.28918L8.33489 3.81247L8.82097 3.28503C9.0634 3.02197 9.34134 2.81496 9.65462 2.66162C10.1639 2.41233 10.5913 2.33333 11.3661 2.33334C13.0588 2.34035 14.3333 3.79264 14.3333 5.74658Z",fill:e.color},null,8,Ne)])):h("",!0),e.size==="base"?(s(),o("svg",Ie,[i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.5532 2.00002C15.1056 2 14.1724 2.17246 13.1027 2.69607C12.7066 2.88993 12.335 3.12339 11.99 3.39576C11.6582 3.13866 11.3015 2.91592 10.9218 2.72813C9.83132 2.18878 8.85028 2 7.45455 2C3.71644 2 1 5.09727 1 9.11988C1 12.1578 2.69383 15.0923 5.84884 17.9299C7.50489 19.4193 9.61932 20.8933 11.1336 21.6775L12 22.1261L12.8664 21.6775C14.3807 20.8933 16.4951 19.4193 18.1512 17.9299C21.3062 15.0923 23 12.1578 23 9.11988C23 5.13984 20.2579 2.01536 16.5532 2.00002ZM21.0003 9.1202C21.0003 11.5002 19.5865 13.9496 16.814 16.4432C15.3025 17.8027 13.3593 19.1613 12.0003 19.874C10.6414 19.1613 8.69814 17.8027 7.1866 16.4432C4.41415 13.9496 3.00033 11.5002 3.00033 9.1202C3.00033 6.14804 4.88397 4.00033 7.45487 4.00033C8.56461 4.00033 9.24845 4.13191 10.0355 4.52117C10.5003 4.75109 10.9112 5.0547 11.2669 5.4341L12.0027 6.21903L12.7318 5.42787C13.0954 5.03328 13.5123 4.72276 13.9822 4.49275C14.7462 4.11882 15.3873 4.00033 16.5494 4.00033C19.0885 4.01086 21.0003 6.18929 21.0003 9.1202Z",fill:e.color},null,8,Xe)])):h("",!0)],64)}var j=u(Oe,[["render",qe]]);const Ke={name:"List",props:{size:String,color:{type:String,default:"#2A2425"}}},Ge={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je=["fill"],Qe={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re=["fill"];function Ue(c,a,e,d,l,n){return s(),o(g,null,[e.size==="sm"?(s(),o("svg",Ge,[i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.6875 10.875C4.0672 10.875 4.375 11.1828 4.375 11.5625C4.375 11.9422 4.0672 12.25 3.6875 12.25C3.3078 12.25 3 11.9422 3 11.5625C3 11.1828 3.3078 10.875 3.6875 10.875ZM13.3125 10.875C13.6922 10.875 14 11.1828 14 11.5625C14 11.9422 13.6922 12.25 13.3125 12.25H6.4375C6.0578 12.25 5.75 11.9422 5.75 11.5625C5.75 11.1828 6.0578 10.875 6.4375 10.875H13.3125ZM3.6875 7.4375C4.0672 7.4375 4.375 7.7453 4.375 8.125C4.375 8.5047 4.0672 8.8125 3.6875 8.8125C3.3078 8.8125 3 8.5047 3 8.125C3 7.7453 3.3078 7.4375 3.6875 7.4375ZM13.3125 7.4375C13.6922 7.4375 14 7.7453 14 8.125C14 8.5047 13.6922 8.8125 13.3125 8.8125H6.4375C6.0578 8.8125 5.75 8.5047 5.75 8.125C5.75 7.7453 6.0578 7.4375 6.4375 7.4375H13.3125ZM3.6875 4C4.0672 4 4.375 4.3078 4.375 4.6875C4.375 5.0672 4.0672 5.375 3.6875 5.375C3.3078 5.375 3 5.0672 3 4.6875C3 4.3078 3.3078 4 3.6875 4ZM13.3125 4C13.6922 4 14 4.3078 14 4.6875C14 5.0672 13.6922 5.375 13.3125 5.375H6.4375C6.0578 5.375 5.75 5.0672 5.75 4.6875C5.75 4.3078 6.0578 4 6.4375 4H13.3125Z",fill:e.color},null,8,Je)])):h("",!0),e.size==="base"?(s(),o("svg",Qe,[i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.53125 16.3125C6.10079 16.3125 6.5625 16.7742 6.5625 17.3438C6.5625 17.9133 6.10079 18.375 5.53125 18.375C4.96171 18.375 4.5 17.9133 4.5 17.3438C4.5 16.7742 4.96171 16.3125 5.53125 16.3125ZM19.9688 16.3125C20.5383 16.3125 21 16.7742 21 17.3438C21 17.9133 20.5383 18.375 19.9688 18.375H9.65625C9.08671 18.375 8.625 17.9133 8.625 17.3438C8.625 16.7742 9.08671 16.3125 9.65625 16.3125H19.9688ZM5.53125 11.1562C6.10079 11.1562 6.5625 11.618 6.5625 12.1875C6.5625 12.757 6.10079 13.2188 5.53125 13.2188C4.96171 13.2188 4.5 12.757 4.5 12.1875C4.5 11.618 4.96171 11.1562 5.53125 11.1562ZM19.9688 11.1562C20.5383 11.1562 21 11.618 21 12.1875C21 12.757 20.5383 13.2188 19.9688 13.2188H9.65625C9.08671 13.2188 8.625 12.757 8.625 12.1875C8.625 11.618 9.08671 11.1562 9.65625 11.1562H19.9688ZM5.53125 6C6.10079 6 6.5625 6.46171 6.5625 7.03125C6.5625 7.60079 6.10079 8.0625 5.53125 8.0625C4.96171 8.0625 4.5 7.60079 4.5 7.03125C4.5 6.46171 4.96171 6 5.53125 6ZM19.9688 6C20.5383 6 21 6.46171 21 7.03125C21 7.60079 20.5383 8.0625 19.9688 8.0625H9.65625C9.08671 8.0625 8.625 7.60079 8.625 7.03125C8.625 6.46171 9.08671 6 9.65625 6H19.9688Z",fill:e.color},null,8,Re)])):h("",!0)],64)}var D=u(Ke,[["render",Ue]]);const Ye={name:"Search",props:{size:String,color:{type:String,default:"#2A2425"}}},et={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},tt=["fill"],st={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},it=["fill"];function nt(c,a,e,d,l,n){return s(),o(g,null,[e.size==="sm"?(s(),o("svg",et,[i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.68323 11.3665C3.54447 11.3665 1 8.82199 1 5.68323C1 2.54447 3.54447 0 6.68323 0C9.82199 0 12.3665 2.54447 12.3665 5.68323C12.3665 6.99656 11.921 8.20584 11.1729 9.16822L15 12.9953L13.9953 14L10.1682 10.1729C9.20584 10.921 7.99656 11.3665 6.68323 11.3665ZM10.945 5.68259C10.945 8.03666 9.03666 9.94501 6.68259 9.94501C4.32852 9.94501 2.42017 8.03666 2.42017 5.68259C2.42017 3.32852 4.32852 1.42017 6.68259 1.42017C9.03666 1.42017 10.945 3.32852 10.945 5.68259Z",fill:e.color},null,8,tt)])):h("",!0),e.size==="base"?(s(),o("svg",st,[i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.0248 17.0496C5.3167 17.0496 1.5 13.2329 1.5 8.52481C1.5 3.81669 5.3167 0 10.0248 0C14.733 0 18.5497 3.81669 18.5497 8.52481C18.5497 10.4948 17.8815 12.3087 16.7593 13.7523L22.4997 19.4927L20.9927 20.9997L15.2523 15.2593C13.8088 16.3814 11.9948 17.0496 10.0248 17.0496ZM16.4174 8.52373C16.4174 12.0548 13.5549 14.9173 10.0238 14.9173C6.49265 14.9173 3.63013 12.0548 3.63013 8.52373C3.63013 4.99263 6.49265 2.13012 10.0238 2.13012C13.5549 2.13012 16.4174 4.99263 16.4174 8.52373Z",fill:e.color},null,8,it)])):h("",!0)],64)}var F=u(Ye,[["render",nt]]);const lt={name:"Action",props:["size","icon","text"],components:{Info:Fe,Heart:j,List:D,Search:F,Share:H,Star:T}};function ot(c,a,e,d,l,n){const m=r("Info"),_=r("Heart"),x=r("List"),p=r("Search"),b=r("Share"),y=r("Star");return s(),o("span",{class:f([e.size==="sm"?"text-sm":"","inline-flex items-center gap-2 font-medium cursor-pointer text-grey-800"])},[e.icon==="info"?(s(),w(m,{key:0,color:"#C2C0BF",size:e.size},null,8,["size"])):e.icon==="heart"?(s(),w(_,{key:1,color:"#C2C0BF",size:e.size},null,8,["size"])):e.icon==="list"?(s(),w(x,{key:2,color:"#C2C0BF",size:e.size},null,8,["size"])):e.icon==="search"?(s(),w(p,{key:3,color:"#C2C0BF",size:e.size},null,8,["size"])):e.icon==="share"?(s(),w(b,{key:4,color:"#C2C0BF",size:e.size},null,8,["size"])):e.icon==="star"?(s(),w(y,{key:5,color:"#C2C0BF",size:e.size},null,8,["size"])):h("",!0),k(" "+C(e.text),1)],2)}var E=u(lt,[["render",ot]]);const ct={name:"expertBadge",props:["text","size"],data(){return{smClass:"font-semibold px-3 py-2 leading-4 text-[12px]",lgClass:"font-bold leading-6 w-10 h-10"}},computed:{computedClass(){switch(this.size){case"sm":return this.smClass;case"lg":return this.lgClass}}}};function rt(c,a,e,d,l,n){return s(),o("span",{class:f([n.computedClass,"inline-flex items-center justify-center rounded-full hover:bg-primary-100 text-grey-800 bg-primary-50"])},C(e.text),3)}var at=u(ct,[["render",rt]]);const dt={name:"Price",props:{price:Object,size:String,type:String},data(){return{baseClass:{currentPriceClass:"",previousPriceClass:"text-grey-600"},smClass:{currentPriceClass:"",previousPriceClass:"text-grey-500"}}},computed:{currentPriceClass(){let c="";switch(this.type){case"price":c+="text-grey-800 ";break;case"sale":c+="text-primary-500 ";break}switch(this.size){case"base":c+=this.baseClass.currentPriceClass;break;case"lg":c+=this.smClass.currentPriceClass;break}return c},previousPriceClass(){switch(this.size){case"base":return this.baseClass.previousPriceClass;case"lg":return this.smClass.previousPriceClass}}}};function ut(c,a,e,d,l,n){const m=r("strike");return s(),o("span",{class:f([n.currentPriceClass,"text-4xl font-bold"])},[k(C(e.price.current)+" \u20BD ",1),e.type==="sale"&&e.price.previous?(s(),w(m,{key:0,class:f([n.previousPriceClass,"text-lg font-bold"])},{default:A(()=>[k(C(e.price.previous)+" \u20BD ",1)]),_:1},8,["class"])):h("",!0)],2)}var O=u(dt,[["render",ut]]);const mt={name:"OfferBox",props:{priceAtom:Object},components:{PriceAtom:O,ButtonAtom:P,ActionBagde:E}},ht={class:"flex rounded-[20px] flex-col p-6 shadow-xs"},_t={class:"mt-[26px] flex justify-between items-center"};function xt(c,a,e,d,l,n){const m=r("PriceAtom"),_=r("ButtonAtom"),x=r("ActionBagde");return s(),o("div",ht,[t(m,{type:e.priceAtom.type,size:"lg",price:e.priceAtom.price},null,8,["type","price"]),t(_,{class:"mt-7",text:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443",type:"primary",size:"base"}),t(_,{class:"mt-2",text:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043E\u043A",type:"outline",size:"base"}),i("div",_t,[t(x,{icon:"heart",size:"sm",color:"#A3A2A1",text:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"}),t(x,{icon:"search",size:"sm",color:"#A3A2A1",text:"\u041D\u0430\u0439\u0442\u0438 \u043F\u043E\u0445\u043E\u0436\u0435\u0435"})])])}var ft=u(mt,[["render",xt]]);const Ct={name:"Name",props:{heading:String,linkAtom:Object,listAtom:Object,size:String,starColor:String},components:{HeadingAtom:Z,LinkAtom:V,ListAtom:D,StarAtom:T},data(){return{}},computed:{headingSize(){switch(this.size){case"base":return"3xl";case"sm":return"2xl";case"xs":return"lg"}},starSize(){switch(this.size){case"base":return"base";case"sm":return"sm";case"xs":return"sm"}},linkSize(){switch(this.size){case"base":return"base";case"sm":return"base";case"xs":return"sm"}}}},gt={class:"flex flex-col gap-2"},pt={class:"flex gap-2"},wt={class:"flex gap-1"},bt={key:0,class:"flex gap-[6px]"};function vt(c,a,e,d,l,n){const m=r("HeadingAtom"),_=r("StarAtom"),x=r("LinkAtom"),p=r("ListAtom");return s(),o("div",gt,[t(m,{tag:"h3",size:n.headingSize,title:e.heading},null,8,["size","title"]),i("div",pt,[i("div",wt,[(s(),o(g,null,q(5,b=>t(_,{key:b,size:n.starSize,color:e.starColor},null,8,["size","color"])),64))]),t(x,{link:e.linkAtom.link,size:n.linkSize},null,8,["link","size"]),e.size==="xs"?(s(),o("div",bt,[t(p,{class:"ml-[19px]",size:"sm",color:"#496B9B"}),t(x,{link:e.linkAtom.listLink,size:n.linkSize},null,8,["link","size"])])):h("",!0)])])}var yt=u(Ct,[["render",vt]]);const zt={name:"Media",components:{HeartAtom:j,SearchAtom:F,ShareAtom:H,ActionBadge:E},data(){return{base:!1,sm:!1}},methods:{handleView(){window.innerWidth>=320&&window.innerWidth<=359?(this.sm=!0,this.base=!1):window.innerWidth>=360&&window.innerWidth<=1023?(this.base=!0,this.sm=!1):(this.base=!1,this.sm=!1)}},created(){this.handleView(),window.addEventListener("resize",this.handleView)},destroyed(){window.removeEventListener("resize",this.handleView)}},At={key:0,class:"flex py-[13px] justify-between border-t border-grey-200"},Lt={key:1,class:"flex justify-around py-4 border-t border-grey-200"};function kt(c,a,e,d,l,n){const m=r("ActionBadge"),_=r("HeartAtom"),x=r("SearchAtom"),p=r("ShareAtom");return l.base?(s(),o("div",At,[t(m,{size:"sm",icon:"heart",text:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"}),t(m,{size:"sm",icon:"search",text:"\u041F\u043E\u0445\u043E\u0436\u0435\u0435"}),t(m,{size:"sm",icon:"share",text:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"})])):l.sm?(s(),o("div",Lt,[t(_,{size:"sm",color:"#C2C0BF"}),t(x,{size:"sm",color:"#C2C0BF"}),t(p,{size:"sm",color:"#C2C0BF"})])):h("",!0)}var St=u(zt,[["render",kt]]);const Mt={name:"ProductDetail",props:{saleText:String,imageSrc:String,code:String,h2Title:String,h3Title:String,ratingLink:Object,descriptionText:String,buttonText:String,actionText:String,expertText:Object,offerPrice:Object},components:{CodeAtom:Y,ImageAtom:se,SaleAtom:le,ShareAtom:H,HeadingAtom:Z,StarAtom:T,LinkAtom:V,DescriptionMolecule:Le,ButtonAtom:P,BorderAtom:Te,ActionAtom:E,ExpertAtom:at,OfferBoxMolecule:ft,NameMolecule:yt,PriceAtom:O,MediaMolecule:St},data(){return{base:!1,sm:!1,xs:!1,imageType:String}},methods:{handleView(){window.innerWidth>=320&&window.innerWidth<=1023?(this.xs=!0,this.sm=!1,this.base=!1):window.innerWidth>=1024&&window.innerWidth<=1199?(this.sm=!0,this.base=!1,this.xs=!1):window.innerWidth>=1200?(this.base=!0,this.sm=!1,this.xs=!1):(this.base=!1,this.sm=!1,this.xs=!1),window.innerWidth>=633&&window.innerWidth<=1023?this.imageType="center":window.innerWidth>=320&&window.innerWidth<=632&&(this.imageType="center")}},created(){this.handleView(),window.addEventListener("resize",this.handleView)},destroyed(){window.removeEventListener("resize",this.handleView)}},Ht={key:0,class:"flex flex-col pb-10 gap-9"},Tt={class:"flex items-center justify-end gap-4"},Et={href:"#"},Bt={class:"flex gap-6"},$t={class:"flex flex-1 gap-8"},Zt={class:"w-5/12 h-[600px]"},Vt={class:"mt-1 ml-auto mr-1"},Pt={class:"flex flex-col flex-1"},jt={class:"flex mt-2"},Dt={class:"mt-8"},Ft={class:"mt-3 w-[120px]"},Ot={class:"flex flex-col max-w-[336px] min-w-[316px] flex-1"},Wt={key:1,class:"flex flex-col pb-10 gap-9"},Nt={class:"flex items-center justify-end gap-4"},It={href:"#"},Xt={class:"flex"},qt={class:"flex flex-1 min-w-[612px]"},Kt={class:"w-full h-[600px]"},Gt={class:"mt-1 ml-auto mr-1"},Jt=i("div",{class:"min-w-[40px] max-w-[80px] flex flex-1"},null,-1),Qt={class:"flex flex-col max-w-[384px] min-w-[316px] flex-1"},Rt={class:"flex flex-col flex-1"},Ut={class:"flex mt-[10px]"},Yt={class:"mt-8"},e1={class:"mt-3 w-[120px]"},t1={key:2,class:"flex flex-col gap-3"},s1={class:"w-full px-4 justify-center items-center flex flex-col h-full min-w-[288px] min-h-[288px] max-w-[991px] max-h-[600px]"},i1={class:"mt-auto"},n1={class:"flex flex-col flex-1 gap-2 pb-10 bg-grey-100"},l1={class:"flex flex-col flex-1 px-4 bg-white rounded-lg"},o1={class:"flex mt-[6px] flex-col"},c1={class:"flex flex-col flex-1 px-4 py-6 bg-white rounded-lg"},r1={class:"mt-4"},a1={class:"mt-3 w-[120px]"};function d1(c,a,e,d,l,n){const m=r("CodeAtom"),_=r("ShareAtom"),x=r("SaleAtom"),p=r("ImageAtom"),b=r("NameMolecule"),y=r("DescriptionMolecule"),z=r("ButtonAtom"),v=r("BorderAtom"),S=r("ActionAtom"),L=r("HeadingAtom"),M=r("ExpertAtom"),B=r("OfferBoxMolecule"),W=r("PriceAtom"),N=r("MediaMolecule");return s(),o(g,null,[l.base?(s(),o("div",Ht,[i("div",Tt,[t(m,{code:e.code},null,8,["code"]),i("a",Et,[t(_,{size:"sm",color:"#AFACA9"})])]),i("div",Bt,[i("div",$t,[i("div",Zt,[t(p,{class:"flex",src:e.imageSrc,type:"center"},{default:A(()=>[i("div",Vt,[t(x,{size:"lg",text:e.saleText},null,8,["text"])])]),_:1},8,["src"])]),i("div",Pt,[i("div",jt,[t(b,{heading:e.h2Title,linkAtom:e.ratingLink,size:"base",starColor:"#FF9635"},null,8,["heading","linkAtom"])]),i("div",Dt,[t(y,{size:"base",text:e.descriptionText},null,8,["text"])]),i("div",Ft,[t(z,{type:"outline",size:"sm",text:e.buttonText},null,8,["text"])]),t(v,{class:"mt-5",size:"lg",color:"linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)"}),t(S,{class:"mt-5",size:"base",icon:"info",text:e.actionText},null,8,["text"]),t(v,{class:"mt-5",size:"lg",color:"linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)"}),t(L,{class:"mt-5",tag:"h3",title:e.h3Title,size:"sm"},null,8,["title"]),t(M,{class:"mt-4",size:"lg",text:e.expertText.lg},null,8,["text"])])]),i("div",Ot,[t(B,{priceAtom:e.offerPrice},null,8,["priceAtom"])])])])):h("",!0),l.sm?(s(),o("div",Wt,[i("div",Nt,[t(m,{code:e.code},null,8,["code"]),i("a",It,[t(_,{size:"sm",color:"#AFACA9"})])]),i("div",Xt,[i("div",qt,[i("div",Kt,[t(p,{class:"flex",src:e.imageSrc,type:"center"},{default:A(()=>[i("div",Gt,[t(x,{size:"lg",text:e.saleText},null,8,["text"])])]),_:1},8,["src"])])]),Jt,i("div",Qt,[i("div",Rt,[i("div",Ut,[t(b,{heading:e.h2Title,linkAtom:e.ratingLink,size:"sm",starColor:"#FF9635"},null,8,["heading","linkAtom"])]),t(B,{class:"mt-[34px]",priceAtom:e.offerPrice},null,8,["priceAtom"]),i("div",Yt,[t(y,{size:"sm",text:e.descriptionText},null,8,["text"])]),i("div",e1,[t(z,{type:"outline",size:"sm",text:e.buttonText},null,8,["text"])]),t(v,{class:"mt-5",size:"lg",color:"linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)"}),t(S,{class:"mt-5",size:"base",icon:"info",text:e.actionText},null,8,["text"]),t(v,{class:"mt-5",size:"lg",color:"linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)"}),t(L,{class:"mt-5",tag:"h3",title:e.h3Title,size:"sm"},null,8,["title"]),t(M,{class:"mt-4",size:"lg",text:e.expertText.lg},null,8,["text"])])])])])):h("",!0),l.xs?(s(),o("div",t1,[i("div",s1,[t(p,{src:e.imageSrc,type:l.imageType},{default:A(()=>[i("div",i1,[t(x,{size:"base",text:e.saleText},null,8,["text"])])]),_:1},8,["src","type"])]),i("div",n1,[i("div",l1,[i("div",o1,[t(b,{heading:e.h2Title,linkAtom:e.ratingLink,size:"xs",starColor:"#FF9635"},null,8,["heading","linkAtom"]),t(W,{class:"mt-[18px]",type:e.offerPrice.type,price:e.offerPrice.price,size:"base"},null,8,["type","price"]),t(m,{class:"mt-6 ml-auto",code:e.code},null,8,["code"]),t(z,{class:"mt-3",size:"base",type:"primary",text:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"}),t(z,{class:"mt-2",size:"base",type:"outline",text:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043E\u043A"}),t(N,{class:"mt-6"})])]),i("div",c1,[t(L,{size:"2xl",tag:"h3",title:"\u041E \u0442\u043E\u0432\u0430\u0440\u0435"}),i("div",r1,[t(y,{size:"xs",text:e.descriptionText},null,8,["text"])]),i("div",a1,[t(z,{type:"outline",size:"sm",text:e.buttonText},null,8,["text"])]),t(v,{class:"mt-5",size:"base",color:"linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)"}),t(S,{class:"mt-5",size:"sm",icon:"info",text:e.actionText},null,8,["text"]),t(v,{class:"mt-5",size:"base",color:"linear-gradient(270deg, rgba(238, 235, 234, 0) 0%, #EEECEA 20.31%)"}),t(L,{class:"mt-5",tag:"h3",title:e.h3Title,size:"sm"},null,8,["title"]),i("div",null,[t(M,{class:"mt-3",size:"sm",text:e.expertText.sm},null,8,["text"])])])])])):h("",!0)],64)}var u1=u(Mt,[["render",d1]]);const m1={name:"Header"},h1={class:"flex h-[152px] xs:h-14 items-center justify-center w-full bg-grey-100"},_1=K('<svg width="163" height="29" viewBox="0 0 163 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.953125 29H9.23438V18.1016H19.1562V29H27.4375V0.816406H19.1562V11.5391H9.23438V0.816406H0.953125V29Z" fill="#E4E3E2"></path><path d="M31.3438 29H51.2266V22.4375H39.625V17.9648H50.5039V11.8711H39.625V7.37891H51.2266V0.816406H31.3438V29Z" fill="#E4E3E2"></path><path d="M53.7266 29H62.4375L63.9023 23.3945H72.3398L73.8047 29H82.5156L73.3164 0.816406H62.9258L53.7266 29ZM68.043 7.53516H68.1992L70.8164 17.5547H65.4258L68.043 7.53516Z" fill="#E4E3E2"></path><path d="M85.0547 29H97.1055C105.641 29 110.68 23.7266 110.68 14.7031V14.6641C110.68 5.66016 105.641 0.816406 97.1055 0.816406H85.0547V29ZM93.3359 22.418V7.39844H95.9336C99.8789 7.39844 102.242 9.9375 102.242 14.6641V14.7031C102.242 19.8984 100.074 22.418 95.9336 22.418H93.3359Z" fill="#E4E3E2"></path><path d="M113.922 29H133.805V22.4375H122.203V17.9648H133.082V11.8711H122.203V7.37891H133.805V0.816406H113.922V29Z" fill="#E4E3E2"></path><path d="M137.672 29H145.953V19.7422H148.668L153.121 29H162.379L157.027 18.5117C159.762 17.1836 161.559 14.0195 161.559 10.5039V10.4648C161.559 4.21484 157.613 0.816406 150.367 0.816406H137.672V29ZM145.953 13.9023V6.92969H149.41C151.598 6.92969 153.121 8.35547 153.121 10.4062V10.4453C153.121 12.5156 151.637 13.9023 149.41 13.9023H145.953Z" fill="#E4E3E2"></path></svg>',1),x1=[_1];function f1(c,a,e,d,l,n){return s(),o("header",h1,x1)}var C1=u(m1,[["render",f1]]);const g1={name:"ProductCard",props:{productDetail:Object},components:{Header:C1,ProductDetail:u1}},p1={class:"mt-10 sm:px-7 base:px-7 max-w-[1472px] mx-auto"};function w1(c,a,e,d,l,n){const m=r("Header"),_=r("ProductDetail");return s(),o(g,null,[t(m),i("div",p1,[t(_,{descriptionText:e.productDetail.descriptionText,ratingLink:e.productDetail.ratingLink,h2Title:e.productDetail.h2Title,h3Title:e.productDetail.h3Title,code:e.productDetail.code,imageSrc:e.productDetail.imageSrc,saleText:e.productDetail.saleText,buttonText:e.productDetail.buttonText,actionText:e.productDetail.actionText,expertText:e.productDetail.expertText,offerPrice:e.productDetail.offerPrice},null,8,["descriptionText","ratingLink","h2Title","h3Title","code","imageSrc","saleText","buttonText","actionText","expertText","offerPrice"])])],64)}var b1=u(g1,[["render",w1]]);const v1={setup(c){return(a,e)=>(s(),w(b1,{productDetail:{descriptionText:"\u0411\u0435\u043B\u043E\u0435 \u0441\u0443\u0445\u043E\u0435 \u0432\u0438\u043D\u043E, \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u0438\u0437 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0430 \u0441\u043E\u0440\u0442\u0430 \u041C\u0435\u043B\u043E\u043D\u044C \u0434\u0435 \u0411\u0443\u0440\u0433\u043E\u043D\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u043E\u0438\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u043D\u0430 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043D\u0438\u043A\u0430\u0445 \u0432 \u0430\u043F\u0435\u043B\u043B\u0430\u0441\u044C\u043E\u043D\u0435 \u041C\u044E\u0441\u043A\u0430\u0434\u0435 \u0421\u0435\u0432\u0440 \u044D \u041C\u0435\u043D. \u0421\u0431\u043E\u0440 \u0443\u0440\u043E\u0436\u0430\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0438 \u044F\u0433\u043E\u0434\u0430\u043C\u0438 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0437\u0440\u0435\u043B\u043E\u0441\u0442\u0438.",ratingLink:{link:{url:"#",name:"23 \u043E\u0442\u0437\u044B\u0432\u0430"},listLink:{url:"#",name:"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}},h2Title:"Chateau de la Turmeliere, Muscadet Sevre et Maine Sur Lie AOP, 2020",h3Title:"\u0422\u0438\u043F \u0432\u0438\u043D\u0430",code:"123456",imageSrc:"./bottle.png",saleText:"-24%",buttonText:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",actionText:"\u041A\u0443\u043F\u0438\u043B\u0438 86 \u0440\u0430\u0437 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438",expertText:{lg:"98",sm:"Wine 98"},offerPrice:{type:"sale",price:{previous:"2 990",current:"1 890"}}}},null,8,["productDetail"]))}};G(v1).mount("#app");