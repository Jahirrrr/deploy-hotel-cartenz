(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"49c2":function(t,e,a){"use strict";a("5319");const i={data(){return{thumbStyle:{right:"1px",backgroundColor:"grey",width:"2.8px",opacity:.3}}},methods:{isValidEmail(t){const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return e.test(t)||"Invalid email"},randomDate(t,e){return new Date(t.getTime()+Math.random()*(e.getTime()-t.getTime()))},hasWhiteSpacesOnly(t){return t.replace(/\s/g,"").length||"field is empty"},notify(t,e){this.$q.notify({message:t,position:"bottom",color:e,icon:"announcement",timeout:"1500"})},confirm(){this.$q.dialog({title:"Confirm",message:"Are you sure you want to proceed. This can't be undone?",cancel:!0,persistent:!0}).onOk((()=>{this.proceedDelete()})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}};e["a"]=i},5219:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"pages-bg",attrs:{view:"lHh lpR fFf"}},[a("q-header",{staticClass:"bg-white",attrs:{bordered:""}},[a("q-toolbar",[a("q-separator",{staticClass:"tool-bar-separator",attrs:{vertical:"",color:"grey-2"}}),a("q-btn",{attrs:{flat:"",round:"",icon:"menu",color:"grey-14"},on:{click:function(e){t.drawer=!t.drawer}}}),a("q-toolbar-title",[a("Search",{attrs:{filter:t.filter}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",mini:t.miniState,width:250,breakpoint:768,side:"left"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",[[a("p",{staticClass:"text-h6 text-center text-primary q-mt-sm sidebar-heading"},[t._v("Hotel Dashboard")])],a("q-separator"),a("div",[a("span",{staticClass:"flex justify-center items-center q-ma-sm"},[a("q-avatar",{attrs:{color:"primary","text-color":"white"}},[a("img",{attrs:{src:t.user.avatar}})]),t.miniState?t._e():a("div",{staticClass:"profile-details q-ml-lg"},[a("p",[t._v(t._s(t.user.name)+" !")])])],1)])],2),a("q-scroll-area",{staticStyle:{height:"calc(100% - 30%)"},attrs:{"thumb-style":this.thumbStyle}},[a("EssentialLinks")],1),a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"absolute-bottom-left full-width",attrs:{clickable:""},on:{click:t.getClientWidth}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"eva-npm",color:"accent",size:"sm"}})],1),a("q-item-section",{staticClass:"text-subtitle1"},[t._v("Toggle sidebar")])],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],r=a("c106"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-list",t._l(t.links,(function(e){return a("div",{key:e.to},[e.expansionLinks?a("q-expansion-item",{attrs:{icon:e.icon,label:e.name,to:e.to,"header-style":{fontSize:"16px"},"content-inset-level":.9}},t._l(e.expansionLinks,(function(e){return a("div",{key:e.index},[a("q-item",{attrs:{to:e.itemTo,exact:"",clickable:"",dense:""}},[a("div",{staticClass:"flex items-center justify-center"},[a("q-icon",{staticClass:"q-mr-xs q-my-sm",attrs:{"keep-color":"",size:"xs",name:"radio_button_unchecked",val:"orange",color:e.color}}),a("span",{staticClass:"text-black"},[t._v(t._s(e.item))])],1)])],1)})),0):a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:e.to,clickable:"",exact:""}},[a("div",{staticClass:"flex items-center justify-center"},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon,size:"sm"}})],1),a("q-item-section",{staticClass:"text-subtitle1"},[a("span",[t._v(t._s(e.name))])])],1)])],1)})),0)],1)},o=[],c={name:"EssentiaLinkLogin",data(){return{links:[{to:"/",name:"Login",icon:"dashboard"}]}}},l=c,m=a("2877"),d=a("1c1c"),u=a("66e5"),p=a("4074"),h=a("0016"),b=a("3b73"),f=a("714f"),v=a("eebe"),q=a.n(v),g=Object(m["a"])(l,n,o,!1,null,"1cadfb80",null),x=g.exports;q()(g,"components",{QList:d["a"],QItem:u["a"],QItemSection:p["a"],QIcon:h["a"],QExpansionItem:b["a"]}),q()(g,"directives",{Ripple:f["a"]});var w=a("49c2"),y={components:{EssentialLinks:x,Search:r["a"]},mixins:[w["a"]],props:{filter:{type:String}},data(){return{drawer:!1,miniState:!1,search:"Global Search",user:{id:1,name:"Not Login yet",avatar:"https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg",email:"xxxxxxxx"}}},methods:{getClientWidth(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;t<770?this.drawer=!1:this.miniState=!this.miniState}}},k=y,C=(a("e90f"),a("4d5a")),_=a("e359"),Q=a("65c6"),S=a("eb85"),I=a("9c40"),L=a("6ac5"),E=a("9404"),T=a("cb32"),$=a("4983"),z=a("09e3"),j=Object(m["a"])(k,i,s,!1,null,"2b6e9427",null);e["default"]=j.exports;q()(j,"components",{QLayout:C["a"],QHeader:_["a"],QToolbar:Q["a"],QSeparator:S["a"],QBtn:I["a"],QToolbarTitle:L["a"],QDrawer:E["a"],QAvatar:T["a"],QScrollArea:$["a"],QList:d["a"],QItem:u["a"],QItemSection:p["a"],QIcon:h["a"],QPageContainer:z["a"]}),q()(j,"directives",{Ripple:f["a"]})},c106:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("q-input",{staticClass:"q-ma-xs q-ml-xs-xs bg-white col-xs-9 col-sm-10 col-md-10 col-lg-11",attrs:{placeholder:t.currentRouteName,filled:"",dense:"",debounce:"300"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filterItem,callback:function(e){t.filterItem=e},expression:"filterItem"}}),a("q-space"),t.$q.screen.lt.md?a("div",[a("q-icon",{staticClass:"q-pa-sm q-mr-xs",attrs:{name:"eva-bell-outline",size:"md",color:"black"}},[a("q-badge",{staticClass:"absolute-top-right",attrs:{rounded:"",floating:"",color:"red"}})],1)],1):a("div",[a("q-icon",{staticClass:"q-pa-sm q-mr-lg",attrs:{name:"eva-bell-outline",size:"md",color:"black"}},[a("q-badge",{staticClass:"absolute-top-right",attrs:{rounded:"",floating:"",color:"red"}})],1)],1)],1)},s=[],r={name:"Search",data(){return{filterItem:""}},watch:{filterItem(t){"Hotels"===this.$route.name&&this.$store.dispatch("FILTER_HOTELS",t)}},computed:{currentRouteName(){const t=this.$route.name;return"Dashboard"===t||"Hotels"===t?"Search......":""}}},n=r,o=a("2877"),c=a("27f9"),l=a("0016"),m=a("2c91"),d=a("58a81"),u=a("eebe"),p=a.n(u),h=Object(o["a"])(n,i,s,!1,null,"15fbf864",null);e["a"]=h.exports;p()(h,"components",{QInput:c["a"],QIcon:l["a"],QSpace:m["a"],QBadge:d["a"]})},cc82:function(t,e,a){},e90f:function(t,e,a){"use strict";a("cc82")}}]);