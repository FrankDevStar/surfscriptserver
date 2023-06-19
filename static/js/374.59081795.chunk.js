"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[374],{4374:function(e,t,o){o.d(t,{Z:function(){return ee}});var n=o(3366),r=o(7462),a=o(7313),l=o(3061),i=o(1921),s=o(3362),p=o(782),u=o(2780),c=o(9265);function d(e){return"undefined"!==typeof e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function g(e,t){for(let o=0;o<e.length;o+=1)if(t(e[o]))return o;return-1}const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{ignoreAccents:t=!0,ignoreCase:o=!0,limit:n,matchFrom:r="any",stringify:a,trim:l=!1}=e;return(e,i)=>{let{inputValue:s,getOptionLabel:p}=i,u=l?s.trim():s;o&&(u=u.toLowerCase()),t&&(u=d(u));const c=u?e.filter((e=>{let n=(a||p)(e);return o&&(n=n.toLowerCase()),t&&(n=d(n)),"start"===r?0===n.indexOf(u):n.indexOf(u)>-1})):e;return"number"===typeof n?c.slice(0,n):c}}(),h=e=>{var t;return null!==e.current&&(null==(t=e.current.parentElement)?void 0:t.contains(document.activeElement))};function m(e){const{unstable_isActiveElementInListbox:t=h,unstable_classNamePrefix:o="Mui",autoComplete:n=!1,autoHighlight:l=!1,autoSelect:i=!1,blurOnSelect:d=!1,clearOnBlur:m=!e.freeSolo,clearOnEscape:b=!1,componentName:v="useAutocomplete",defaultValue:x=(e.multiple?[]:null),disableClearable:y=!1,disableCloseOnSelect:Z=!1,disabled:O,disabledItemsFocusable:I=!1,disableListWrap:S=!1,filterOptions:P=f,filterSelectedOptions:$=!1,freeSolo:C=!1,getOptionDisabled:k,getOptionLabel:w=(e=>{var t;return null!=(t=e.label)?t:e}),groupBy:L,handleHomeEndKeys:A=!e.freeSolo,id:R,includeInputInList:T=!1,inputValue:N,isOptionEqualToValue:M=((e,t)=>e===t),multiple:D=!1,onChange:z,onClose:E,onHighlightChange:F,onInputChange:j,onOpen:H,open:W,openOnFocus:V=!1,options:B,readOnly:q=!1,selectOnFocus:G=!e.freeSolo,value:_}=e,K=(0,s.Z)(R);let U=w;U=e=>{const t=w(e);return"string"!==typeof t?String(t):t};const J=a.useRef(!1),Q=a.useRef(!0),X=a.useRef(null),Y=a.useRef(null),[ee,te]=a.useState(null),[oe,ne]=a.useState(-1),re=l?0:-1,ae=a.useRef(re),[le,ie]=(0,p.Z)({controlled:_,default:x,name:v}),[se,pe]=(0,p.Z)({controlled:N,default:"",name:v,state:"inputValue"}),[ue,ce]=a.useState(!1),de=a.useCallback(((e,t)=>{if(!(D?le.length<t.length:null!==t)&&!m)return;let o;if(D)o="";else if(null==t)o="";else{const e=U(t);o="string"===typeof e?e:""}se!==o&&(pe(o),j&&j(e,o,"reset"))}),[U,se,D,j,pe,m,le]),ge=a.useRef();a.useEffect((()=>{const e=le!==ge.current;ge.current=le,ue&&!e||C&&!e||de(null,le)}),[le,de,ue,ge,C]);const[fe,he]=(0,p.Z)({controlled:W,default:!1,name:v,state:"open"}),[me,be]=a.useState(!0),ve=!D&&null!=le&&se===U(le),xe=fe&&!q,ye=xe?P(B.filter((e=>!$||!(D?le:[le]).some((t=>null!==t&&M(e,t))))),{inputValue:ve&&me?"":se,getOptionLabel:U}):[],Ze=fe&&ye.length>0&&!q;const Oe=(0,u.Z)((e=>{-1===e?X.current.focus():ee.querySelector(`[data-tag-index="${e}"]`).focus()}));a.useEffect((()=>{D&&oe>le.length-1&&(ne(-1),Oe(-1))}),[le,D,oe,Oe]);const Ie=(0,u.Z)((e=>{let{event:t,index:n,reason:r="auto"}=e;if(ae.current=n,-1===n?X.current.removeAttribute("aria-activedescendant"):X.current.setAttribute("aria-activedescendant",`${K}-option-${n}`),F&&F(t,-1===n?null:ye[n],r),!Y.current)return;const a=Y.current.querySelector(`[role="option"].${o}-focused`);a&&(a.classList.remove(`${o}-focused`),a.classList.remove(`${o}-focusVisible`));const l=Y.current.parentElement.querySelector('[role="listbox"]');if(!l)return;if(-1===n)return void(l.scrollTop=0);const i=Y.current.querySelector(`[data-option-index="${n}"]`);if(i&&(i.classList.add(`${o}-focused`),"keyboard"===r&&i.classList.add(`${o}-focusVisible`),l.scrollHeight>l.clientHeight&&"mouse"!==r)){const e=i,t=l.clientHeight+l.scrollTop,o=e.offsetTop+e.offsetHeight;o>t?l.scrollTop=o-l.clientHeight:e.offsetTop-e.offsetHeight*(L?1.3:0)<l.scrollTop&&(l.scrollTop=e.offsetTop-e.offsetHeight*(L?1.3:0))}})),Se=(0,u.Z)((e=>{let{event:t,diff:o,direction:r="next",reason:a="auto"}=e;if(!xe)return;const l=function(e,t){if(!Y.current||-1===e)return-1;let o=e;for(;;){if("next"===t&&o===ye.length||"previous"===t&&-1===o)return-1;const e=Y.current.querySelector(`[data-option-index="${o}"]`),n=!I&&(!e||e.disabled||"true"===e.getAttribute("aria-disabled"));if(!(e&&!e.hasAttribute("tabindex")||n))return o;o+="next"===t?1:-1}}((()=>{const e=ye.length-1;if("reset"===o)return re;if("start"===o)return 0;if("end"===o)return e;const t=ae.current+o;return t<0?-1===t&&T?-1:S&&-1!==ae.current||Math.abs(o)>1?0:e:t>e?t===e+1&&T?-1:S||Math.abs(o)>1?e:0:t})(),r);if(Ie({index:l,reason:a,event:t}),n&&"reset"!==o)if(-1===l)X.current.value=se;else{const e=U(ye[l]);X.current.value=e;0===e.toLowerCase().indexOf(se.toLowerCase())&&se.length>0&&X.current.setSelectionRange(se.length,e.length)}})),Pe=a.useCallback((()=>{if(!xe)return;const e=D?le[0]:le;if(0!==ye.length&&null!=e){if(Y.current)if(null==e)ae.current>=ye.length-1?Ie({index:ye.length-1}):Ie({index:ae.current});else{const t=ye[ae.current];if(D&&t&&-1!==g(le,(e=>M(t,e))))return;const o=g(ye,(t=>M(t,e)));-1===o?Se({diff:"reset"}):Ie({index:o})}}else Se({diff:"reset"})}),[ye.length,!D&&le,$,Se,Ie,xe,se,D]),$e=(0,u.Z)((e=>{(0,c.Z)(Y,e),e&&Pe()}));a.useEffect((()=>{Pe()}),[Pe]);const Ce=e=>{fe||(he(!0),be(!0),H&&H(e))},ke=(e,t)=>{fe&&(he(!1),E&&E(e,t))},we=(e,t,o,n)=>{if(D){if(le.length===t.length&&le.every(((e,o)=>e===t[o])))return}else if(le===t)return;z&&z(e,t,o,n),ie(t)},Le=a.useRef(!1),Ae=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"selectOption",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"options",r=o,a=t;if(D){a=Array.isArray(le)?le.slice():[];const e=g(a,(e=>M(t,e)));-1===e?a.push(t):"freeSolo"!==n&&(a.splice(e,1),r="removeOption")}de(e,a),we(e,a,r,{option:t}),Z||e&&(e.ctrlKey||e.metaKey)||ke(e,r),(!0===d||"touch"===d&&Le.current||"mouse"===d&&!Le.current)&&X.current.blur()};const Re=(e,t)=>{if(!D)return;""===se&&ke(e,"toggleInput");let o=oe;-1===oe?""===se&&"previous"===t&&(o=le.length-1):(o+="next"===t?1:-1,o<0&&(o=0),o===le.length&&(o=-1)),o=function(e,t){if(-1===e)return-1;let o=e;for(;;){if("next"===t&&o===le.length||"previous"===t&&-1===o)return-1;const e=ee.querySelector(`[data-tag-index="${o}"]`);if(e&&e.hasAttribute("tabindex")&&!e.disabled&&"true"!==e.getAttribute("aria-disabled"))return o;o+="next"===t?1:-1}}(o,t),ne(o),Oe(o)},Te=e=>{J.current=!0,pe(""),j&&j(e,"","clear"),we(e,D?[]:null,"clear")},Ne=e=>t=>{if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==oe&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(ne(-1),Oe(-1)),229!==t.which))switch(t.key){case"Home":xe&&A&&(t.preventDefault(),Se({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":xe&&A&&(t.preventDefault(),Se({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),Se({diff:-5,direction:"previous",reason:"keyboard",event:t}),Ce(t);break;case"PageDown":t.preventDefault(),Se({diff:5,direction:"next",reason:"keyboard",event:t}),Ce(t);break;case"ArrowDown":t.preventDefault(),Se({diff:1,direction:"next",reason:"keyboard",event:t}),Ce(t);break;case"ArrowUp":t.preventDefault(),Se({diff:-1,direction:"previous",reason:"keyboard",event:t}),Ce(t);break;case"ArrowLeft":Re(t,"previous");break;case"ArrowRight":Re(t,"next");break;case"Enter":if(-1!==ae.current&&xe){const e=ye[ae.current],o=!!k&&k(e);if(t.preventDefault(),o)return;Ae(t,e,"selectOption"),n&&X.current.setSelectionRange(X.current.value.length,X.current.value.length)}else C&&""!==se&&!1===ve&&(D&&t.preventDefault(),Ae(t,se,"createOption","freeSolo"));break;case"Escape":xe?(t.preventDefault(),t.stopPropagation(),ke(t,"escape")):b&&(""!==se||D&&le.length>0)&&(t.preventDefault(),t.stopPropagation(),Te(t));break;case"Backspace":if(D&&!q&&""===se&&le.length>0){const e=-1===oe?le.length-1:oe,o=le.slice();o.splice(e,1),we(t,o,"removeOption",{option:le[e]})}break;case"Delete":if(D&&!q&&""===se&&le.length>0&&-1!==oe){const e=oe,o=le.slice();o.splice(e,1),we(t,o,"removeOption",{option:le[e]})}}},Me=e=>{ce(!0),V&&!J.current&&Ce(e)},De=e=>{t(Y)?X.current.focus():(ce(!1),Q.current=!0,J.current=!1,i&&-1!==ae.current&&xe?Ae(e,ye[ae.current],"blur"):i&&C&&""!==se?Ae(e,se,"blur","freeSolo"):m&&de(e,le),ke(e,"blur"))},ze=e=>{const t=e.target.value;se!==t&&(pe(t),be(!1),j&&j(e,t,"input")),""===t?y||D||we(e,null,"clear"):Ce(e)},Ee=e=>{Ie({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},Fe=()=>{Le.current=!0},je=e=>{const t=Number(e.currentTarget.getAttribute("data-option-index"));Ae(e,ye[t],"selectOption"),Le.current=!1},He=e=>t=>{const o=le.slice();o.splice(e,1),we(t,o,"removeOption",{option:le[e]})},We=e=>{fe?ke(e,"toggleInput"):Ce(e)},Ve=e=>{e.target.getAttribute("id")!==K&&e.preventDefault()},Be=()=>{X.current.focus(),G&&Q.current&&X.current.selectionEnd-X.current.selectionStart===0&&X.current.select(),Q.current=!1},qe=e=>{""!==se&&fe||We(e)};let Ge=C&&se.length>0;Ge=Ge||(D?le.length>0:null!==le);let _e=ye;if(L){new Map;_e=ye.reduce(((e,t,o)=>{const n=L(t);return e.length>0&&e[e.length-1].group===n?e[e.length-1].options.push(t):e.push({key:o,index:o,group:n,options:[t]}),e}),[])}return O&&ue&&De(),{getRootProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.Z)({"aria-owns":Ze?`${K}-listbox`:null},e,{onKeyDown:Ne(e),onMouseDown:Ve,onClick:Be})},getInputLabelProps:()=>({id:`${K}-label`,htmlFor:K}),getInputProps:()=>({id:K,value:se,onBlur:De,onFocus:Me,onChange:ze,onMouseDown:qe,"aria-activedescendant":xe?"":null,"aria-autocomplete":n?"both":"list","aria-controls":Ze?`${K}-listbox`:void 0,"aria-expanded":Ze,autoComplete:"off",ref:X,autoCapitalize:"none",spellCheck:"false",role:"combobox"}),getClearProps:()=>({tabIndex:-1,onClick:Te}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:We}),getTagProps:e=>{let{index:t}=e;return(0,r.Z)({key:t,"data-tag-index":t,tabIndex:-1},!q&&{onDelete:He(t)})},getListboxProps:()=>({role:"listbox",id:`${K}-listbox`,"aria-labelledby":`${K}-label`,ref:$e,onMouseDown:e=>{e.preventDefault()}}),getOptionProps:e=>{let{index:t,option:o}=e;const n=(D?le:[le]).some((e=>null!=e&&M(o,e))),r=!!k&&k(o);return{key:U(o),tabIndex:-1,role:"option",id:`${K}-option-${t}`,onMouseOver:Ee,onClick:je,onTouchStart:Fe,"data-option-index":t,"aria-disabled":r,"aria-selected":n}},id:K,inputValue:se,value:le,dirty:Ge,popupOpen:xe,focused:ue||-1!==oe,anchorEl:ee,setAnchorEl:te,focusedTag:oe,groupedOptions:_e}}var b=o(7551),v=o(4887),x=o(7592),y=o(7342),Z=o(1615),O=o(7430),I=o(2298);function S(e){return(0,I.Z)("MuiListSubheader",e)}(0,O.Z)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var P=o(6417);const $=["className","color","component","disableGutters","disableSticky","inset"],C=(0,x.ZP)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"default"!==o.color&&t[`color${(0,Z.Z)(o.color)}`],!o.disableGutters&&t.gutters,o.inset&&t.inset,!o.disableSticky&&t.sticky]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.Z)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(t.vars||t).palette.text.secondary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(14)},"primary"===o.color&&{color:(t.vars||t).palette.primary.main},"inherit"===o.color&&{color:"inherit"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.inset&&{paddingLeft:72},!o.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(t.vars||t).palette.background.paper})}));var k=a.forwardRef((function(e,t){const o=(0,y.Z)({props:e,name:"MuiListSubheader"}),{className:a,color:s="default",component:p="li",disableGutters:u=!1,disableSticky:c=!1,inset:d=!1}=o,g=(0,n.Z)(o,$),f=(0,r.Z)({},o,{color:s,component:p,disableGutters:u,disableSticky:c,inset:d}),h=(e=>{const{classes:t,color:o,disableGutters:n,inset:r,disableSticky:a}=e,l={root:["root","default"!==o&&`color${(0,Z.Z)(o)}`,!n&&"gutters",r&&"inset",!a&&"sticky"]};return(0,i.Z)(l,S,t)})(f);return(0,P.jsx)(C,(0,r.Z)({as:p,className:(0,l.Z)(h.root,a),ref:t,ownerState:f},g))})),w=o(501),L=o(7131),A=o(6212),R=o(9783),T=o(7569),N=o(708),M=o(3201),D=(0,o(1171).Z)((0,P.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),z=o(6613);function E(e){return(0,I.Z)("MuiAutocomplete",e)}var F,j,H=(0,O.Z)("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);const W=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],V=(0,x.ZP)("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{fullWidth:n,hasClearIcon:r,hasPopupIcon:a,inputFocused:l,size:i}=o;return[{[`& .${H.tag}`]:t.tag},{[`& .${H.tag}`]:t[`tagSize${(0,Z.Z)(i)}`]},{[`& .${H.inputRoot}`]:t.inputRoot},{[`& .${H.input}`]:t.input},{[`& .${H.input}`]:l&&t.inputFocused},t.root,n&&t.fullWidth,a&&t.hasPopupIcon,r&&t.hasClearIcon]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({[`&.${H.focused} .${H.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${H.clearIndicator}`]:{visibility:"visible"}}},t.fullWidth&&{width:"100%"},{[`& .${H.tag}`]:(0,r.Z)({margin:3,maxWidth:"calc(100% - 6px)"},"small"===t.size&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${H.inputRoot}`]:{flexWrap:"wrap",[`.${H.hasPopupIcon}&, .${H.hasClearIcon}&`]:{paddingRight:30},[`.${H.hasPopupIcon}.${H.hasClearIcon}&`]:{paddingRight:56},[`& .${H.input}`]:{width:0,minWidth:30}},[`& .${R.Z.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${R.Z.root}.${T.Z.sizeSmall}`]:{[`& .${R.Z.input}`]:{padding:"2px 4px 3px 0"}},[`& .${N.Z.root}`]:{padding:9,[`.${H.hasPopupIcon}&, .${H.hasClearIcon}&`]:{paddingRight:39},[`.${H.hasPopupIcon}.${H.hasClearIcon}&`]:{paddingRight:65},[`& .${H.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${H.endAdornment}`]:{right:9}},[`& .${N.Z.root}.${T.Z.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${H.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${M.Z.root}`]:{paddingTop:19,paddingLeft:8,[`.${H.hasPopupIcon}&, .${H.hasClearIcon}&`]:{paddingRight:39},[`.${H.hasPopupIcon}.${H.hasClearIcon}&`]:{paddingRight:65},[`& .${M.Z.input}`]:{padding:"7px 4px"},[`& .${H.endAdornment}`]:{right:9}},[`& .${M.Z.root}.${T.Z.sizeSmall}`]:{paddingBottom:1,[`& .${M.Z.input}`]:{padding:"2.5px 4px"}},[`& .${T.Z.hiddenLabel}`]:{paddingTop:8},[`& .${H.input}`]:(0,r.Z)({flexGrow:1,textOverflow:"ellipsis",opacity:0},t.inputFocused&&{opacity:1})})})),B=(0,x.ZP)("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,t)=>t.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),q=(0,x.ZP)(L.Z,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,t)=>t.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),G=(0,x.ZP)(L.Z,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:(e,t)=>{let{ownerState:o}=e;return(0,r.Z)({},t.popupIndicator,o.popupOpen&&t.popupIndicatorOpen)}})((e=>{let{ownerState:t}=e;return(0,r.Z)({padding:2,marginRight:-2},t.popupOpen&&{transform:"rotate(180deg)"})})),_=(0,x.ZP)(v.Z,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${H.option}`]:t.option},t.popper,o.disablePortal&&t.popperDisablePortal]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.Z)({zIndex:(t.vars||t).zIndex.modal},o.disablePortal&&{position:"absolute"})})),K=(0,x.ZP)(w.Z,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,t)=>t.paper})((e=>{let{theme:t}=e;return(0,r.Z)({},t.typography.body1,{overflow:"auto"})})),U=(0,x.ZP)("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,t)=>t.loading})((e=>{let{theme:t}=e;return{color:(t.vars||t).palette.text.secondary,padding:"14px 16px"}})),J=(0,x.ZP)("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,t)=>t.noOptions})((e=>{let{theme:t}=e;return{color:(t.vars||t).palette.text.secondary,padding:"14px 16px"}})),Q=(0,x.ZP)("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,t)=>t.listbox})((e=>{let{theme:t}=e;return{listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${H.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[t.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${H.focused}`]:{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${H.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,b.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${H.focused}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,b.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${H.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,b.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}}}}})),X=(0,x.ZP)(k,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,t)=>t.groupLabel})((e=>{let{theme:t}=e;return{backgroundColor:(t.vars||t).palette.background.paper,top:-8}})),Y=(0,x.ZP)("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,t)=>t.groupUl})({padding:0,[`& .${H.option}`]:{paddingLeft:24}});var ee=a.forwardRef((function(e,t){var o,s,p,u;const c=(0,y.Z)({props:e,name:"MuiAutocomplete"}),{autoComplete:d=!1,autoHighlight:g=!1,autoSelect:f=!1,blurOnSelect:h=!1,ChipProps:b,className:x,clearIcon:O=F||(F=(0,P.jsx)(D,{fontSize:"small"})),clearOnBlur:I=!c.freeSolo,clearOnEscape:S=!1,clearText:$="Clear",closeText:C="Close",componentsProps:k={},defaultValue:L=(c.multiple?[]:null),disableClearable:R=!1,disableCloseOnSelect:T=!1,disabled:N=!1,disabledItemsFocusable:M=!1,disableListWrap:H=!1,disablePortal:ee=!1,filterSelectedOptions:te=!1,forcePopupIcon:oe="auto",freeSolo:ne=!1,fullWidth:re=!1,getLimitTagsText:ae=(e=>`+${e}`),getOptionLabel:le=(e=>{var t;return null!=(t=e.label)?t:e}),groupBy:ie,handleHomeEndKeys:se=!c.freeSolo,includeInputInList:pe=!1,limitTags:ue=-1,ListboxComponent:ce="ul",ListboxProps:de,loading:ge=!1,loadingText:fe="Loading\u2026",multiple:he=!1,noOptionsText:me="No options",openOnFocus:be=!1,openText:ve="Open",PaperComponent:xe=w.Z,PopperComponent:ye=v.Z,popupIcon:Ze=j||(j=(0,P.jsx)(z.Z,{})),readOnly:Oe=!1,renderGroup:Ie,renderInput:Se,renderOption:Pe,renderTags:$e,selectOnFocus:Ce=!c.freeSolo,size:ke="medium",slotProps:we={}}=c,Le=(0,n.Z)(c,W),{getRootProps:Ae,getInputProps:Re,getInputLabelProps:Te,getPopupIndicatorProps:Ne,getClearProps:Me,getTagProps:De,getListboxProps:ze,getOptionProps:Ee,value:Fe,dirty:je,id:He,popupOpen:We,focused:Ve,focusedTag:Be,anchorEl:qe,setAnchorEl:Ge,inputValue:_e,groupedOptions:Ke}=m((0,r.Z)({},c,{componentName:"Autocomplete"})),Ue=!R&&!N&&je&&!Oe,Je=(!ne||!0===oe)&&!1!==oe,Qe=(0,r.Z)({},c,{disablePortal:ee,focused:Ve,fullWidth:re,hasClearIcon:Ue,hasPopupIcon:Je,inputFocused:-1===Be,popupOpen:We,size:ke}),Xe=(e=>{const{classes:t,disablePortal:o,focused:n,fullWidth:r,hasClearIcon:a,hasPopupIcon:l,inputFocused:s,popupOpen:p,size:u}=e,c={root:["root",n&&"focused",r&&"fullWidth",a&&"hasClearIcon",l&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",s&&"inputFocused"],tag:["tag",`tagSize${(0,Z.Z)(u)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",p&&"popupIndicatorOpen"],popper:["popper",o&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return(0,i.Z)(c,E,t)})(Qe);let Ye;if(he&&Fe.length>0){const e=e=>(0,r.Z)({className:Xe.tag,disabled:N},De(e));Ye=$e?$e(Fe,e,Qe):Fe.map(((t,o)=>(0,P.jsx)(A.Z,(0,r.Z)({label:le(t),size:ke},e({index:o}),b))))}if(ue>-1&&Array.isArray(Ye)){const e=Ye.length-ue;!Ve&&e>0&&(Ye=Ye.splice(0,ue),Ye.push((0,P.jsx)("span",{className:Xe.tag,children:ae(e)},Ye.length)))}const et=Ie||(e=>(0,P.jsxs)("li",{children:[(0,P.jsx)(X,{className:Xe.groupLabel,ownerState:Qe,component:"div",children:e.group}),(0,P.jsx)(Y,{className:Xe.groupUl,ownerState:Qe,children:e.children})]},e.key)),tt=Pe||((e,t)=>(0,P.jsx)("li",(0,r.Z)({},e,{children:le(t)}))),ot=(e,t)=>{const o=Ee({option:e,index:t});return tt((0,r.Z)({},o,{className:Xe.option}),e,{selected:o["aria-selected"],index:t,inputValue:_e})},nt=null!=(o=we.clearIndicator)?o:k.clearIndicator,rt=null!=(s=we.paper)?s:k.paper,at=null!=(p=we.popper)?p:k.popper,lt=null!=(u=we.popupIndicator)?u:k.popupIndicator;return(0,P.jsxs)(a.Fragment,{children:[(0,P.jsx)(V,(0,r.Z)({ref:t,className:(0,l.Z)(Xe.root,x),ownerState:Qe},Ae(Le),{children:Se({id:He,disabled:N,fullWidth:!0,size:"small"===ke?"small":void 0,InputLabelProps:Te(),InputProps:(0,r.Z)({ref:Ge,className:Xe.inputRoot,startAdornment:Ye},(Ue||Je)&&{endAdornment:(0,P.jsxs)(B,{className:Xe.endAdornment,ownerState:Qe,children:[Ue?(0,P.jsx)(q,(0,r.Z)({},Me(),{"aria-label":$,title:$,ownerState:Qe},nt,{className:(0,l.Z)(Xe.clearIndicator,null==nt?void 0:nt.className),children:O})):null,Je?(0,P.jsx)(G,(0,r.Z)({},Ne(),{disabled:N,"aria-label":We?C:ve,title:We?C:ve,ownerState:Qe},lt,{className:(0,l.Z)(Xe.popupIndicator,null==lt?void 0:lt.className),children:Ze})):null]})}),inputProps:(0,r.Z)({className:Xe.input,disabled:N,readOnly:Oe},Re())})})),qe?(0,P.jsx)(_,(0,r.Z)({as:ye,disablePortal:ee,style:{width:qe?qe.clientWidth:null},ownerState:Qe,role:"presentation",anchorEl:qe,open:We},at,{className:(0,l.Z)(Xe.popper,null==at?void 0:at.className),children:(0,P.jsxs)(K,(0,r.Z)({ownerState:Qe,as:xe},rt,{className:(0,l.Z)(Xe.paper,null==rt?void 0:rt.className),children:[ge&&0===Ke.length?(0,P.jsx)(U,{className:Xe.loading,ownerState:Qe,children:fe}):null,0!==Ke.length||ne||ge?null:(0,P.jsx)(J,{className:Xe.noOptions,ownerState:Qe,role:"presentation",onMouseDown:e=>{e.preventDefault()},children:me}),Ke.length>0?(0,P.jsx)(Q,(0,r.Z)({as:ce,className:Xe.listbox,ownerState:Qe},ze(),de,{children:Ke.map(((e,t)=>ie?et({key:e.key,group:e.group,children:e.options.map(((t,o)=>ot(t,e.index+o)))}):ot(e,t)))})):null]}))})):null]})}))}}]);