"use strict";(self.webpackChunksonicacts=self.webpackChunksonicacts||[]).push([[4263],{22282:(S,E,e)=>{e.r(E),e.d(E,{default:()=>ie});var t=e(67294),a=e(95489),n=e(49656),f=e(96486),l=e(87751),i=e(87462),o=e(15861),P=e(64687),d=e.n(P),r=e(97132),h=e(45697),D=e.n(h),Z=e(78718),B=e.n(Z),z=e(27361),_=e.n(z),F=e(57557),A=e.n(F),$=e(23724),C=e(80831),s=e(28702),R=e(41363),N=e(38683);const H=async T=>{const{get:U}=(0,a.getFetchClient)(),{data:M}=await U(`/admin/users/${T}`);return M.data},Y=async(T,U)=>{const{put:M}=(0,a.getFetchClient)(),{data:I}=await M(`/admin/users/${T}`,U);return I.data},Q=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var j=e(17405),V=e(81288),J=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),G=["email","firstname","lastname","username","isActive","roles"],O=function(U){var M=U.canUpdate,I=(0,r.useIntl)(),c=I.formatMessage,k=(0,n.useRouteMatch)("/settings/users/:id"),K=k.params.id,de=(0,n.useHistory)(),ce=de.push,ue=(0,a.useAppInfos)(),me=ue.setUserDisplayName,w=(0,a.useNotification)(),ee=(0,a.useOverlayBlocker)(),Ee=ee.lockApp,ge=ee.unlockApp;(0,a.useFocusWhenNavigate)();var te=(0,$.useQuery)(["user",K],function(){return H(K)},{retry:!1,onError:function(u){var m=u.response.status;m===403&&(w({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),ce("/")),console.log(u.response.status)}}),pe=te.status,v=te.data,fe=function(){var g=(0,o.Z)(d().mark(function u(m,y){var x,b,L,q,ne;return d().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return Ee(),p.prev=1,p.next=4,Y(K,A()(m,"confirmPassword"));case 4:x=p.sent,w({type:"success",message:c({id:"notification.success.saved",defaultMessage:"Saved"})}),b=a.auth.getUserInfo(),K.toString()===b.id.toString()&&(a.auth.setUserInfo(x),L=_()(m,"username")||(0,N.Pp)(m.firstname,m.lastname),me(L)),y.setValues(B()(m,G)),p.next=17;break;case 11:p.prev=11,p.t0=p.catch(1),q=(0,N.Iz)(p.t0.response.data),ne=Object.keys(q).reduce(function(re,oe){return re[oe]=q[oe].id,re},{}),y.setErrors(ne),w({type:"warning",message:_()(p.t0,"response.data.error.message","notification.error")});case 17:ge();case 18:case"end":return p.stop()}},u,null,[[1,11]])}));return function(m,y){return g.apply(this,arguments)}}(),ae=pe!=="success",Me=ae?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},X=Object.keys(B()(v,G)).reduce(function(g,u){return u==="roles"?(g[u]=(v?.roles||[]).map(function(m){var y=m.id;return y}),g):(g[u]=v?.[u],g)},{}),ve=X.username||(0,N.Pp)(X.firstname,X.lastname),se=c(Me,{name:ve});return ae?t.createElement(s.Main,{"aria-busy":"true"},t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(s.HeaderLayout,{primaryAction:t.createElement(s.Button,{disabled:!0,startIcon:t.createElement(R.Check,null),type:"button",size:"L"},c({id:"global.save",defaultMessage:"Save"})),title:se,navigationAction:t.createElement(a.Link,{startIcon:t.createElement(R.ArrowLeft,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},c({id:"global.back",defaultMessage:"Back"}))}),t.createElement(s.ContentLayout,null,t.createElement(a.LoadingIndicatorPage,null))):t.createElement(s.Main,null,t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(C.Formik,{onSubmit:fe,initialValues:X,validateOnChange:!1,validationSchema:j.YM},function(g){var u=g.errors,m=g.values,y=g.handleChange,x=g.isSubmitting;return t.createElement(a.Form,null,t.createElement(s.HeaderLayout,{primaryAction:t.createElement(s.Button,{disabled:x||!M,startIcon:t.createElement(R.Check,null),loading:x,type:"submit",size:"L"},c({id:"global.save",defaultMessage:"Save"})),title:se,navigationAction:t.createElement(a.Link,{startIcon:t.createElement(R.ArrowLeft,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},c({id:"global.back",defaultMessage:"Back"}))}),t.createElement(s.ContentLayout,null,v?.registrationToken&&t.createElement(s.Box,{paddingBottom:6},t.createElement(J,{registrationToken:v.registrationToken})),t.createElement(s.Stack,{spacing:7},t.createElement(s.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(s.Stack,{spacing:4},t.createElement(s.Typography,{variant:"delta",as:"h2"},c({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(s.Grid,{gap:5},Q.map(function(b){return b.map(function(L){return t.createElement(s.GridItem,(0,i.Z)({key:L.name},L.size),t.createElement(a.GenericInput,(0,i.Z)({},L,{disabled:!M,error:u[L.name],onChange:y,value:m[L.name]||""})))})})))),t.createElement(s.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(s.Stack,{spacing:4},t.createElement(s.Typography,{variant:"delta",as:"h2"},c({id:"global.roles",defaultMessage:"User's role"})),t.createElement(s.Grid,{gap:5},t.createElement(s.GridItem,{col:6,xs:12},t.createElement(V.Z,{disabled:!M,error:u.roles,onChange:y,value:m.roles}))))))))}))};O.propTypes={canUpdate:D().bool.isRequired};const le=O,ie=()=>{const T=(0,a.useNotification)(),U=(0,t.useMemo)(()=>({read:l.Z.settings.users.read,update:l.Z.settings.users.update}),[]),{isLoading:M,allowedActions:{canRead:I,canUpdate:c}}=(0,a.useRBAC)(U),{state:k}=(0,n.useLocation)(),K=(0,f.get)(k,"from","/");return(0,t.useEffect)(()=>{M||!I&&!c&&T({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[M,I,c,T]),M?t.createElement(a.LoadingIndicatorPage,null):!I&&!c?t.createElement(n.Redirect,{to:K}):t.createElement(le,{canUpdate:c})}},82464:(S,E,e)=>{e.d(E,{Z:()=>B});var t=e(67294),a=e(45697),n=e.n(a),f=e(28702),l=e.n(f),i=e(95489),o=e.n(i),P=e(41363),d=e.n(P),r=e(74855),h=e.n(r),D=e(97132);const Z=({children:z,target:_})=>{const F=(0,i.useNotification)(),{formatMessage:A}=(0,D.useIntl)(),$=()=>{F({type:"info",message:{id:"notification.link-copied"}})},C=A({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(i.ContentBox,{endAction:t.createElement(r.CopyToClipboard,{onCopy:$,text:_},t.createElement(f.IconButton,{label:C,noBorder:!0,icon:t.createElement(P.Duplicate,null)})),title:_,titleEllipsis:!0,subtitle:z,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};Z.propTypes={children:n().oneOfType([n().element,n().string]).isRequired,target:n().string.isRequired};const B=Z},31605:(S,E,e)=>{e.d(E,{Z:()=>P});var t=e(67294),a=e(97132),n=e(45697),f=e.n(n),l=e(63871),i=e(82464);const o=({registrationToken:d})=>{const{formatMessage:r}=(0,a.useIntl)(),h=`${window.location.origin}${l.Z}auth/register?registrationToken=${d}`;return t.createElement(i.Z,{target:h},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:f().string};const P=o},81288:(S,E,e)=>{e.d(E,{Z:()=>$});var t=e(67294),a=e(45697),n=e.n(a),f=e(97132),l=e(28702),i=e.n(l),o=e(23724),P=e.n(o),d=e(71893),r=e(41363),h=e.n(r),D=e(95489),Z=e.n(D);const B=(0,d.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,z=d.default.div`
  animation: ${B} 2s infinite linear;
`,_=()=>t.createElement(z,null,t.createElement(r.Loader,null)),F=async()=>{const{get:C}=(0,D.getFetchClient)(),{data:s}=await C("/admin/roles");return s.data},A=({disabled:C,error:s,onChange:R,value:N})=>{const{status:H,data:Y}=(0,o.useQuery)(["roles"],F,{staleTime:5e4}),{formatMessage:W}=(0,f.useIntl)(),Q=s?W({id:s,defaultMessage:s}):"",j=W({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),V=W({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),J=W({id:"app.components.Select.placeholder",defaultMessage:"Select"}),G=H==="loading"?t.createElement(_,null):void 0;return t.createElement(l.Select,{id:"roles",disabled:C,error:Q,hint:V,label:j,name:"roles",onChange:O=>{R({target:{name:"roles",value:O}})},placeholder:J,multi:!0,startIcon:G,value:N,withTags:!0,required:!0},(Y||[]).map(O=>t.createElement(l.Option,{key:O.id,value:O.id},W({id:`global.${O.code}`,defaultMessage:O.name}))))};A.defaultProps={disabled:!1,error:void 0},A.propTypes={disabled:n().bool,error:n().string,onChange:n().func.isRequired,value:n().array.isRequired};const $=A},17405:(S,E,e)=>{e.d(E,{YM:()=>d,Rw:()=>l});var t=e(53209),a=e(95489);const n={firstname:t.Z_().trim().required(a.translatedErrors.required),lastname:t.Z_(),email:t.Z_().email(a.translatedErrors.email).lowercase().required(a.translatedErrors.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.translatedErrors.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(r,h)=>r?h.required(a.translatedErrors.required):h)},l={...n,currentPassword:t.Z_().when(["password","confirmPassword"],(r,h,D)=>r||h?D.required(a.translatedErrors.required):D),preferedLanguage:t.Z_().nullable()},o={roles:t.IX().min(1,a.translatedErrors.required).required(a.translatedErrors.required)},d=t.Ry().shape({...n,isActive:t.Xg(),...o})},12201:(S,E,e)=>{e.d(E,{Z:()=>P});var t=e(67294),a=e(97132),n=e(45697),f=e.n(n),l=e(63871),i=e(82464);const o=({registrationToken:d})=>{const{formatMessage:r}=(0,a.useIntl)();return d?t.createElement(i.Z,{target:`${window.location.origin}${l.Z}auth/register?registrationToken=${d}`},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(i.Z,{target:`${window.location.origin}${l.Z}auth/login`},r({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:f().string};const P=o}}]);
