"use strict";(self.webpackChunksonicacts=self.webpackChunksonicacts||[]).push([[3677],{44226:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),u=a(23724),r=a(97132),s=a(68547),i=a(78862),o=a(62031),d=a(84686),c=a(49425),f=a(41798),p=a(52285),g=function(){var e=(0,r.useIntl)().formatMessage;(0,s.useFocusWhenNavigate)();var t=(0,d.useNotifyAT)().notifyStatus,a=(0,s.useNotification)(),l=e({id:"app.components.ListPluginsPage.title",defaultMessage:"Plugins"}),g=function(){t(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:l}))},m=(0,u.useQuery)("list-plugins",(function(){return(0,p.fetchPlugins)(g)}),{onError:function(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),h=m.status,v=m.data;return"success"!==h&&"error"!==h?n.default.createElement(i.Layout,null,n.default.createElement(o.Main,{"aria-busy":!0},n.default.createElement(s.LoadingIndicatorPage,null))):n.default.createElement(i.Layout,null,n.default.createElement(o.Main,null,n.default.createElement(i.HeaderLayout,{title:l,subtitle:e({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),n.default.createElement(i.ContentLayout,null,n.default.createElement(f.Table,{colCount:2,rowCount:(null===v||void 0===v?void 0:v.plugins.length)+1},n.default.createElement(f.Thead,null,n.default.createElement(f.Tr,null,n.default.createElement(f.Th,null,n.default.createElement(c.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"Settings.roles.list.header.name",defaultMessage:"Name"}))),n.default.createElement(f.Th,null,n.default.createElement(c.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"Settings.roles.list.header.description",defaultMessage:"description"}))))),n.default.createElement(f.Tbody,null,v.plugins.map((function(e){var t=e.name,a=e.displayName,l=e.description;return n.default.createElement(f.Tr,{key:t},n.default.createElement(f.Td,null,n.default.createElement(c.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},a)),n.default.createElement(f.Td,null,n.default.createElement(c.Typography,{textColor:"neutral800"},l)))})))))))};t.default=g},3505:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),u=a(68547),r=a(15482),s=a(97132),i=l(a(46114)),o=l(a(44226)),d=function(){var e=(0,(0,s.useIntl)().formatMessage)({id:"app.components.ListPluginsPage.title",defaultMessage:"Plugins"});return n.default.createElement(u.CheckPagePermissions,{permissions:i.default.marketplace.main},n.default.createElement(r.Helmet,{title:e}),n.default.createElement(o.default,null))};t.default=d},52285:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPlugins=void 0;var n=l(a(87757)),u=l(a(48926)),r=a(53777),s=function(){var e=(0,u.default)(n.default.mark((function e(t){var a,l;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.axiosInstance.get("/admin/plugins");case 2:return a=e.sent,l=a.data,t(),e.abrupt("return",l);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.fetchPlugins=s}}]);