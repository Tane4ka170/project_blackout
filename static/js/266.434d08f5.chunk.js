"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{756:function(n,e,t){t(2791);e.Z=t.p+"static/media/Sprite.2377869f6a2c2a8fc2a38386d04f0816.svg"},9266:function(n,e,t){t.r(e),t.d(e,{default:function(){return Re}});var r,i,o,a,d,c,l,s,p,x,h,g,m,u,f,b,y,w,v,Z,j,k,_,F,A,z,C,P,E,S,D,N,$,T,I,M,q,Q,O,B,H,V,R,X,U,W,Y,L,G=t(2791),K=t(4805),J=t(9434),nn=t(4217),en=t(7067),tn=t(9439),rn=t(7689),on=t(1134),an=(t(8639),t(8007)),dn=an.Ry().shape({category:an.nK().required("Category is required"),sum:an.Rx().required("Sum is required"),comment:an.Z_().min(3,"Too short").max(48,"Too long")}),cn=t(4695),ln=t(6378),sn=function(n,e,t,r,i){var o=n;if(o.type=e,o.category=t,o.time=n.time.slice(0,5),""===n.date){var a=new Date,d=a.getFullYear(),c=(a.getMonth()+1).toString().padStart(2,"0"),l=a.getDate().toString().padStart(2,"0"),s="".concat(d,"-").concat(c,"-").concat(l);o.date=s}else if(n.date){var p=n.date.getFullYear(),x=n.date.getMonth()+1,h=n.date.getDate(),g="".concat(p,"-").concat(x.toString().padStart(2,"0"),"-").concat(h.toString().padStart(2,"0"));o.date=g}if(""===n.time||"00:00"===n.time){var m=new Date,u=m.getHours().toString().padStart(2,"0"),f=m.getMinutes().toString().padStart(2,"0"),b="".concat(u,":").concat(f);o.time=b}r((0,ln.cQ)(o,i)),i()},pn=function(n){switch(n){case"expenses":default:return"expenses";case"incomes":return"incomes"}},xn=t(168),hn=t(5867),gn=hn.ZP.div(r||(r=(0,xn.Z)(["\n  display: flex;\n  flex-direction: row;\n\n  gap: 20px;\n"]))),mn=hn.ZP.div(i||(i=(0,xn.Z)(["\n  display: flex;\n  gap: 8px;\n\n  align-items: center;\n"]))),un=hn.ZP.label(o||(o=(0,xn.Z)(["\n  color: #FAFAFA;\n\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n\n  display: inline-block;\n\n  @media only screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),fn=hn.ZP.input(a||(a=(0,xn.Z)(["\n  appearance: none;\n  border-radius: 10px;\n  width: 19px;\n  height: 19px;\n  outline: 2px solid rgba(250, 250, 250, 0.20);\n\n  transition: border 350ms, outline 350ms, background-color 350ms ease-in-out;\n\n  &:checked {\n    border: 3px solid #171719;\n    outline: 2px solid #4DC274;\n    background-color: #4DC274;\n  }\n"]))),bn=t(3329),yn=function(n){var e=n.control,t=(0,G.useState)(),r=(0,tn.Z)(t,2),i=r[0],o=r[1],a=(0,rn.UO)().transactionsType,d=(0,rn.s0)();(0,G.useEffect)((function(){o(pn(a)),d("/transactions/".concat(pn(a)))}),[d,a]);var c=function(n){d("/transactions/".concat(n))};return(0,bn.jsxs)(gn,{children:[(0,bn.jsx)(on.Qr,{name:"type",control:e,defaultValue:"incomes",render:function(){return(0,bn.jsxs)(mn,{children:[(0,bn.jsx)(fn,{id:"income",type:"radio",value:"incomes",onChange:function(){c("incomes")},checked:"incomes"===i}),(0,bn.jsx)(un,{htmlFor:"income",children:"Income"})]})}}),(0,bn.jsx)(on.Qr,{name:"type",control:e,defaultValue:"",render:function(){return(0,bn.jsxs)(mn,{children:[(0,bn.jsx)(fn,{id:"expense",type:"radio",value:"expenses",onChange:function(){c("expenses")},checked:"expenses"===i}),(0,bn.jsx)(un,{htmlFor:"expense",children:"Expense"})]})}})]})},wn=t(1413),vn=t(9513),Zn=t.n(vn),jn=hn.ZP.svg(d||(d=(0,xn.Z)(["\nposition: absolute;\nwidth: 20px;\nheight: 20px;\nbottom: 13px;\nright: 14px;\nstroke: #FAFAFA;\nfill: #171719;\n\n  @media only screen and (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n    bottom: 14px;\n    right: 18px;\n  }\n"]))),kn=hn.ZP.div(c||(c=(0,xn.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 14px;\n\n  @media only screen and (min-width: 768px) {\n    gap: 20px;\n    height: 75px;\n  }\n"]))),_n=hn.ZP.label(l||(l=(0,xn.Z)(["\n  color: #FAFAFA;\n  \n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  display: inline-block;\n\n  @media only screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n  "]))),Fn=(0,hn.ZP)(Zn())(s||(s=(0,xn.Z)(["\n  width: 140px;\n  height: 42px;\n  padding: 12px 35px 12px 12px;\n      \n  border: 1px solid rgba(250, 250, 250, 0.20);\n  border-radius: 12px;\n  \n  background-color: transparent;\n  color: rgba(250, 250, 250, 0.40);\n  \n  outline: none;\n  box-sizing: border-box;\n  \n  transition: border-color 250ms ease-in-out;\n  \n  &:focus {\n    border-color: #0EF387;\n  }\n\n  @media only screen and (min-width: 768px ) {\n    width: 232px;\n    height: 48px;\n    padding: 12px 45px 12px 12px;\n  }\n  "]))),An=hn.ZP.input(p||(p=(0,xn.Z)(["\n  width: 140px;\n  height: 42px;\n  padding: 12px 35px 12px 12px;\n  \n  border: 1px solid rgba(250, 250, 250, 0.20);\n  border-radius: 12px;\n  \n  background-color: transparent;\n  color: rgba(250, 250, 250, 0.40);\n  \n  outline: none;\n  box-sizing: border-box;\n  \n  transition: border-color 250ms ease-in-out;\n  \n  &:focus {\n    border-color: #0EF387;\n  }\n  \n  &[type='time']::-webkit-calendar-picker-indicator {\n    display: none;\n  }\n\n    @media only screen and (min-width: 768px) {\n    width: 232px;\n    height: 48px;\n    padding: 12px 45px 12px 12px;\n  }\n  "]))),zn=hn.ZP.div(x||(x=(0,xn.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n\n    position: relative;\n    width: 140px;\n  \n    @media only screen and (min-width: 768px) {\n    gap: 8px;\n    width: 235px;\n  }\n  \n    /* date-picker */\n\n    .react-datepicker-wrapper {\n      position: absolute;\n      bottom: 0;\n    }\n  \n    .react-datepicker {\n      width: 222px;\n  \n      padding: 0 14px;\n      padding-bottom: 14px;\n      box-sizing: border-box;\n  \n      border: none;\n      background-color: #0EF387;\n    }\n  \n    \n    .react-datepicker__month-container {\n      width: 194px;\n      box-sizing: border-box;\n    }\n    \n    .react-datepicker__month {\n      margin: 0;\n    }\n    \n    .react-datepicker__navigation {\n      overflow: visible;\n    }\n    \n    .react-datepicker__header {\n      background-color: #0EF387;\n      /* width: 222px; */\n      padding: 14px 0;\n      \n      box-sizing: border-box;\n      margin-bottom: 39px;\n      border-color: rgba(12, 13, 13, 0.50);\n    }\n    \n    .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {\n      color: #0C0D0D;\n      font-size: 16px;\n      font-weight: 400;\n      letter-spacing: -0.32px;\n    }\n  \n    .react-datepicker__navigation, .react-datepicker__navigation--next {\n      width: 4px;\n      height: 8px;\n      border-color: #0C0D0D;\n    }\n    \n    \n    .react-datepicker__navigation--next {\n      right: 14px;\n      top: 19px;\n    }\n    \n    .react-datepicker__navigation--previous {\n      left: 14px;\n      top: 19px;\n    }\n    \n    .react-datepicker__day-names {\n      display: flex;\n      gap: 11px;\n      \n      position: absolute;\n      top: 55px;\n      \n      color: rgba(12, 13, 13, 0.50);\n    }\n    \n    .react-datepicker__week {\n      display: flex;\n      gap: 12px;\n      \n      justify-content: center;\n    }\n    \n    .react-datepicker__month {\n      display: flex;\n      flex-direction: column;\n      gap: 11px;\n    }\n    \n    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {\n      width: 18px;\n      max-height: 20px;\n      margin: 0;\n      \n      color: inherit;\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: -0.02em;\n      transition: transform 250ms ease-in-out;\n  \n      &:hover {\n        background-color: #0EF387;\n        transform: scale(2);\n      }\n    }\n  \n    .react-datepicker__day-name:hover {\n      transform: scale(1);\n      /* pointer-events: ; */\n    }\n  \n    /* selected day */\n    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {\n      background-color: #0EF387;\n      border-radius: 0;\n      border-bottom: 2px solid #0C0D0D;\n    }\n  \n    /* actual day */\n    .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {\n      background-color: #0EF387;\n      border-bottom: 2px solid #0C0D0D;\n      border-radius: 0;\n    }\n  \n    /* nav arrow */\n    .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {\n      border-color: #0C0D0D;\n      width: 6px;\n      height: 6px;\n    }\n    \n    \n    /* from input to form arrow */\n    .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {\n      border-top-color: #0EF387;\n    }\n    \n    .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\n      border-bottom-color: #0EF387;\n    }\n    \n    "]))),Cn=t(756),Pn=function(n){var e=n.control;return(0,bn.jsxs)(kn,{children:[(0,bn.jsx)(on.Qr,{name:"date",control:e,render:function(n){var e=n.field;return(0,bn.jsxs)(zn,{children:[(0,bn.jsxs)(_n,{htmlFor:"date",children:["Date",(0,bn.jsx)(jn,{width:16,height:16,children:(0,bn.jsx)("use",{href:Cn.Z+"#icon-calendar"})})]}),(0,bn.jsx)(Fn,{id:"date",selected:e.value,onChange:function(n){return e.onChange(n)},dateFormat:"dd/MM/yyyy",placeholderText:"dd/mm/yyyy"})]})}}),(0,bn.jsx)(on.Qr,{name:"time",control:e,render:function(n){var e=n.field;return(0,bn.jsxs)(zn,{children:[(0,bn.jsxs)(_n,{htmlFor:"time",children:["Time",(0,bn.jsx)(jn,{children:(0,bn.jsx)("use",{href:Cn.Z+"#icon-clock"})})]}),(0,bn.jsx)(An,(0,wn.Z)({id:"time",type:"time",step:1},e))]})}})]})},En=t(8547),Sn=t(4097),Dn=t(9085),Nn=t(2140),$n=function(n){return n.categories.categories},Tn=hn.ZP.div(h||(h=(0,xn.Z)(["\n  @media (max-width: 767px) {\n    max-width: 335px;\n    max-height: 400px;\n  }\n\n  width: 500px;\n  max-height: 461px;\n  border-radius: 30px;\n  border: 1px solid rgba(250, 250, 250, 0.1);\n  background: #171719;\n  padding: 40px 0;\n  position: relative;\n"]))),In=hn.ZP.h2(g||(g=(0,xn.Z)(["\n  text-transform: capitalize;\n  @media (max-width: 767px) {\n    font-size: 24px;\n    margin-left: 20px;\n  }\n\n  color: #fafafa;\n  font-size: 28px;\n  font-style: normal;\n  line-height: normal;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  margin-bottom: 20px;\n  margin-left: 40px;\n"]))),Mn=hn.ZP.p(m||(m=(0,xn.Z)(["\n  @media (max-width: 767px) {\n    font-size: 12px;\n    margin-left: 20px;\n  }\n\n  color: rgba(250, 250, 250, 0.4);\n  font-size: 12px;\n  font-style: normal;\n  line-height: normal;\n  margin-bottom: 10px;\n  margin-left: 40px;\n"]))),qn=hn.ZP.ul(u||(u=(0,xn.Z)(["\n  max-height: 150px;\n  overflow-y: auto;\n  margin-bottom: 28px;\n\n  &::-webkit-scrollbar {\n    height: 131px;\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #444446;\n    border-radius: 12px;\n  }\n"]))),Qn=hn.ZP.p(f||(f=(0,xn.Z)(["\n  color: rgba(250, 250, 250, 0.4);\n  font-size: 16px;\n  font-style: normal;\n  line-height: normal;\n  text-align: center;\n"]))),On=hn.ZP.form(b||(b=(0,xn.Z)(["\n  @media (max-width: 767px) {\n    margin: 0px 20px;\n  }\n\n  margin: 0px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 420px;\n  position: relative;\n  margin-bottom: 10px;\n"]))),Bn=hn.ZP.input(y||(y=(0,xn.Z)(["\n  @media (max-width: 767px) {\n    font-size: 14px;\n    padding-left: 14px;\n  }\n\n  box-sizing: border-box;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 18px;\n  border-radius: 12px;\n  background: #171719;\n  color: rgba(250, 250, 250, 0.4);\n  font-size: 16px;\n  font-style: normal;\n  line-height: 1.5;\n  border: 1px solid rgba(250, 250, 250, 0.2);\n\n  &:focus {\n    border: 1px solid #0ef387;\n    ","\n  }\n  &:focus:not(.focus-visible) {\n    outline: none;\n  }\n"])),(function(n){return n.$error&&(0,hn.iv)(w||(w=(0,xn.Z)(["\n        border: 1px solid red;\n      "])))})),Hn=hn.ZP.p(v||(v=(0,xn.Z)(["\n  @media (max-width: 767px) {\n    font-size: 14px;\n  }\n\n  color: #0ef387;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.02em;\n  ","\n"])),(function(n){return n.$error&&(0,hn.iv)(Z||(Z=(0,xn.Z)(["\n      color: #e74a3b;\n    "])))})),Vn=hn.ZP.button(j||(j=(0,xn.Z)(["\n  @media (max-width: 767px) {\n    font-size: 14px;\n  }\n\n  position: absolute;\n  right: 0%;\n  bottom: 0%;\n  border-radius: 12px;\n  background: #0ef387;\n  padding: 15px 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #0c0d0d;\n  font-size: 16px;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.02em;\n\n  ","\n\n  &:hover,\n  &:focus {\n    background: #0ebb69;\n\n    ","\n  }\n"])),(function(n){return n.$error&&(0,hn.iv)(k||(k=(0,xn.Z)(["\n      background-color: #e74a3b;\n    "])))}),(function(n){return n.$error&&(0,hn.iv)(_||(_=(0,xn.Z)(["\n        background-color: #b83326;\n      "])))})),Rn=hn.ZP.button(F||(F=(0,xn.Z)(["\n  @media (max-width: 767px) {\n    font-size: 14px;\n  }\n\n  position: absolute;\n  right: 0%;\n  bottom: 75%;\n  display: flex;\n  background: transparent;\n  justify-content: center;\n  align-items: center;\n  color: #e74a3b;\n  font-size: 16px;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.02em;\n\n  &::before {\n    opacity: 0;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    bottom: 0;\n    background-color: #e74a3b;\n    transition: opacity 0.3s;\n  }\n\n  &:hover,\n  &:focus {\n    &::before {\n      opacity: 1;\n    }\n  }\n"]))),Xn=hn.ZP.p(A||(A=(0,xn.Z)(["\n  color: #e74a3b;\n  position: absolute;\n  top: 114%;\n  left: 30%;\n  font-size: 12px;\n  font-style: normal;\n  line-height: normal;\n\n  @media (min-width: 768px) {\n    left: 34%;\n    font-size: 14px;\n  }\n"]))),Un=t(1262),Wn=function(n){var e=n.isEditing,t=n.currentCategory,r=n.handleSubmit,i=n.errors,o=n.onCancel,a=n.submit,d=n.register;return(0,bn.jsxs)(Un.d,{$variant:"categoryForm",children:[(0,bn.jsxs)(On,{action:"",onSubmit:r(a),children:[(0,bn.jsx)(Hn,{$error:null===i||void 0===i?void 0:i.categoryName,children:e?"Edit category":"New category"}),(0,G.createElement)(Bn,(0,wn.Z)((0,wn.Z)({type:"text",placeholder:"Enter the text"},d("categoryName")),{},{autoFocus:null!==t,key:null===t||void 0===t?void 0:t._id,$error:null===i||void 0===i?void 0:i.categoryName})),(0,bn.jsx)(Vn,{$error:null===i||void 0===i?void 0:i.categoryName,children:e?"Edit":"Add"}),e&&(0,bn.jsx)(Rn,{onClick:o,children:"Cancel"})]}),(null===i||void 0===i?void 0:i.categoryName)&&(0,bn.jsx)(Xn,{children:i.categoryName.message})]})},Yn=hn.ZP.li(z||(z=(0,xn.Z)(["\n  @media (max-width: 767px) {\n    padding-left: 20px;\n  }\n\n  position: relative;\n  padding: 12px 0px;\n  padding-left: 40px;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n\n  p {\n    @media (max-width: 767px) {\n      font-size: 14px;\n    }\n\n    color: #fafafa;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    /* margin-right: 40px; */\n  }\n\n  div {\n    opacity: 0;\n    position: absolute;\n    transition: opacity 0.3s ease;\n    top: 50%;\n    left: 80%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 14px;\n    transition: opacity 0.3s ease;\n  }\n\n  &:hover div {\n    opacity: 1;\n  }\n\n  button {\n    background-color: rgba(0, 0, 0, 0);\n    padding: 0;\n    @keyframes wiggle {\n      0% {\n        transform: translateX(0);\n      }\n      25% {\n        transform: rotateZ(10deg);\n      }\n      50% {\n        transform: translateX(0);\n      }\n      75% {\n        transform: rotateZ(-10deg);\n      }\n      100% {\n        transform: translateX(0);\n      }\n    }\n    &:hover {\n      animation: wiggle 0.5s ease infinite;\n    }\n  }\n"]))),Ln=t(1176),Gn=function(n){var e=n.setCategoryId,t=n.closeModal,r=n.chooseCategories,i=n._id,o=n.categoryName,a=n.deleteCategory,d=n.editCategory;return(0,bn.jsxs)(Yn,{children:[(0,bn.jsx)("p",{children:o}),(0,bn.jsxs)("div",{children:[(0,bn.jsx)(Ln.Z,{}),(0,bn.jsx)("button",{onClick:function(){var n;n=i,r(o),e(n),t()},children:(0,bn.jsx)("svg",{width:16,height:16,children:(0,bn.jsx)("use",{xlinkHref:"#icon-check"})})}),(0,bn.jsx)("button",{onClick:d,children:(0,bn.jsx)("svg",{width:16,height:16,children:(0,bn.jsx)("use",{xlinkHref:"#icon-edit-2"})})}),(0,bn.jsx)("button",{type:"button",onClick:function(){return a(i)},children:(0,bn.jsx)("svg",{width:16,height:16,children:(0,bn.jsx)("use",{xlinkHref:"#icon-trash-2"})})})]})]})},Kn=an.Ry().shape({categoryName:an.Z_().trim().max(16,"Max length must be 16 symbols").required("Enter name for category")}),Jn=function(n){var e,t,r=n.type,i=n.chooseCategories,o=n.closeModal,a=n.setCategoryId,d=(0,J.v9)($n),c=(0,J.v9)(nn.Qb),l=(0,J.I0)(),s=(0,G.useState)(null),p=(0,tn.Z)(s,2),x=p[0],h=p[1],g=(0,G.useState)(!1),m=(0,tn.Z)(g,2),u=m[0],f=m[1],b=(0,G.useState)([]),y=(0,tn.Z)(b,2),w=y[0],v=y[1],Z=(0,G.useRef)(),j=(0,on.cI)({resolver:(0,cn.X)(Kn)}),k=j.register,_=j.handleSubmit,F=j.reset,A=j.formState.errors;(0,G.useEffect)((function(){c&&l((0,Nn.vu)()).unwrap().catch((function(n){Dn.Am.error("Oops, something went wrong")}))}),[l,c,r]),(0,G.useEffect)((function(){d[r]&&v(d[r])}),[d,r]);return(0,bn.jsxs)(Tn,{children:[(0,bn.jsx)(In,{children:r}),(0,bn.jsx)(Mn,{children:"All categories"}),(0,bn.jsx)(qn,{ref:Z,children:null!==(e=d[r])&&void 0!==e&&e.length?null===(t=d[r])||void 0===t?void 0:t.map((function(n){return(0,bn.jsx)(Gn,(0,wn.Z)((0,wn.Z)({setCategoryId:a,closeModal:o,chooseCategories:i},n),{},{deleteCategory:function(){return e=n._id,x&&x._id===e&&(F({categoryName:""}),h(null),f(!1)),void l((0,Nn.GY)(e)).unwrap().catch((function(n){Dn.Am.error("Oops, something went wrong")}));var e},editCategory:function(){return function(n){h(n),F({categoryName:n.categoryName}),f(!0)}(n)}}),n._id)})):(0,bn.jsx)(Qn,{children:"There are no categories yet\ud83d\ude2d"})}),(0,bn.jsx)(Wn,{isEditing:u,currentCategory:x,handleSubmit:_,submit:function(n){var e=n.categoryName,t={type:r,categoryName:e};w.find((function(n){return n.categoryName===e}))?Dn.Am.warning("Category with this name already exists"):(x?(l((0,Nn.Sr)({id:x._id,categoryName:e})).unwrap().catch((function(n){Dn.Am.error("Oops, something went wrong")})),F({categoryName:""}),f(!1)):l((0,Nn.mb)(t)).unwrap().then((function(){Z.current&&(Z.current.scrollTop=Z.current.scrollHeight)})).catch((function(n){Dn.Am.error("Oops, something went wrong")})),F(),h(null))},register:k,errors:A,onCancel:function(){F({categoryName:""}),h(null),f(!1)}})]})},ne=hn.ZP.div(C||(C=(0,xn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  @media only screen and (min-width: 768px) {\n    gap: 8px;\n  }\n"]))),ee=hn.ZP.label(P||(P=(0,xn.Z)(["\n  color: #FAFAFA;\n  \n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  \n  display: inline-block;\n\n  @media only screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),te=hn.ZP.input(E||(E=(0,xn.Z)(["\n  height: 42px;\n  padding: 12px 14px;\n\n  border: 1px solid rgba(250, 250, 250, 0.20);\n  border-radius: 12px;\n\n  background-color: transparent;\n  color: rgba(250, 250, 250, 0.40);\n\n  outline: none;\n  box-sizing: border-box;\n\n  transition: border-color 250ms ease-in-out;\n  \n  &:focus {\n    border-color: #0EF387;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 12px 18px;\n    height: 48px;\n  }\n"]))),re=function(n){var e=n.control,t=n.setValue,r=n.setCategoryId,i=(0,Sn.d)(),o=i.isOpened,a=i.openModal,d=i.closeModal,c=(0,rn.UO)().transactionsType,l=function(n){r(n.id),t("category",n)};return(0,bn.jsx)(on.Qr,{name:"category",control:e,render:function(n){var e=n.field;return(0,bn.jsxs)(ne,{children:[(0,bn.jsx)(ee,{htmlFor:"category",children:"Category"}),(0,bn.jsx)(te,(0,wn.Z)((0,wn.Z)({id:"category",type:"textarea",placeholder:"Different"},e),{},{value:e.value,onClick:function(n){a(),n.target.blur()}})),o?(0,bn.jsx)(En.Z,{children:(0,bn.jsx)(Jn,{type:c,chooseCategories:l,closeModal:d,setCategoryId:r}),closeModal:d}):null]})}})},ie=t(4746),oe=hn.ZP.div(S||(S=(0,xn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  @media only screen and (min-width: 768px) {\n    gap: 8px;\n  }\n"]))),ae=hn.ZP.label(D||(D=(0,xn.Z)(["\n  color: #FAFAFA;\n  \n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  \n  display: inline-block;\n"]))),de=hn.ZP.input(N||(N=(0,xn.Z)(["\n  /* width: 140px; */\n  height: 42px;\n  padding: 12px 14px;\n\n  border: 1px solid rgba(250, 250, 250, 0.20);\n  border-radius: 12px;\n\n  background-color: transparent;\n  color: rgba(250, 250, 250, 0.40);\n\n  outline: none;\n  box-sizing: border-box;\n\n  transition: border-color 250ms ease-in-out;\n\n  &:focus {\n    border-color: #0EF387;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 12px 18px;\n    height: 48px;\n  }\n\n  /* removing time selector window */\n  appearance: none;\n\n  -moz-appearance: textfield;\n  &[type='number']::-webkit-inner-spin-button,\n  &[type='number']::-webkit-outer-spin-button {\n    display: none;\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]))),ce=hn.ZP.p($||($=(0,xn.Z)(["\nposition: absolute;\nright: 14px;\nbottom: 12px;\n\nfont-size: 14px;\nline-height: 1.2;\ncolor: #FAFAFA66;\ntext-transform: uppercase;\n\n@media only screen and (min-width: 768px) {\n  font-size: 16px;\n  right: 18px;\n  bottom: 14px;\n  }\n"]))),le=function(n){var e=n.control,t=(0,J.v9)(ie.zT);return(0,bn.jsx)(on.Qr,{name:"sum",control:e,render:function(n){var e=n.field;return(0,bn.jsxs)(oe,{children:[(0,bn.jsxs)(ae,{htmlFor:"sum",children:["Sum",(0,bn.jsx)(ce,{children:t})]}),(0,bn.jsx)(de,(0,wn.Z)({id:"sum",type:"number",placeholder:"Enter the sum"},e))]})}})},se=hn.ZP.div(T||(T=(0,xn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n\n  @media only screen and (min-width: 768px) {\n    gap: 8px;\n  }\n"]))),pe=hn.ZP.label(I||(I=(0,xn.Z)(["\n  color: #FAFAFA;\n  \n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  \n  display: inline-block;\n\n  @media only screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),xe=hn.ZP.textarea(M||(M=(0,xn.Z)(["\n  padding: 12px 14px;\n  resize: none;\n\n  border: 1px solid rgba(250, 250, 250, 0.20);\n  border-radius: 12px;\n\n  background-color: transparent;\n  color: rgba(250, 250, 250, 0.40);\n\n  outline: none;\n  box-sizing: border-box;\n\n  transition: border-color 250ms ease-in-out;\n\n  &:focus {\n    border-color: #0EF387;\n  }\n  \n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #444446;\n    border-radius: 12px;\n\n    height: 15px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 12px 18px;\n  }\n\n"]))),he=function(n){var e=n.control;return(0,bn.jsx)(on.Qr,{name:"comment",control:e,render:function(n){var e=n.field;return(0,bn.jsxs)(se,{children:[(0,bn.jsx)(pe,{htmlFor:"comment",children:"Comment"}),(0,bn.jsx)(xe,(0,wn.Z)({id:"comment",type:"textarea",rows:"4",placeholder:"Enter the text"},e))]})}})},ge=hn.ZP.form(q||(q=(0,xn.Z)(["\n  width: 335px;\n\n  border-radius: 30px;\n  background-color: #171719;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding: 28px 20px;\n\n  margin-bottom: 40px;\n\n  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {\n    width: 704px;\n    padding: 40px 109px;\n  }\n  @media only screen and (min-width: 1440px) {\n    width: 566px;\n    padding: 40px;\n    height: 600px;\n\n    margin-bottom: 0;\n\n  }\n\n"]))),me=hn.ZP.button(Q||(Q=(0,xn.Z)(["\ntext-align: center;\ncolor: #0C0D0D;\nfont-size: 16px;\nfont-weight: 400;\nletter-spacing: -0.02em;\n\nmargin-right: auto;\npadding: 14px 44px;\nborder-radius: 40px;\nborder: none;\n\nbackground-color: #0EF387;\ntransition: background-color 250ms ease-in-out;\n\n\n&:hover {\n  background-color: #0EBB69;\n}\n"]))),ue=hn.ZP.div(O||(O=(0,xn.Z)(["\nposition: relative;\n"]))),fe=hn.ZP.p(B||(B=(0,xn.Z)(["\nposition: absolute;\nleft: 18px;\n\nmargin: 0;\n\nfont-size: 10px;\nfont-weight: 400;\ncolor: #E74A3B;\n"]))),be=function(){var n=(0,J.I0)(),e=(0,rn.UO)().transactionsType,t=(0,G.useState)(""),r=(0,tn.Z)(t,2),i=r[0],o=r[1],a=(0,on.cI)({defaultValues:{type:"",date:"",time:"00:00:00",category:"",sum:"",comment:""},resolver:(0,cn.X)(dn)}),d=a.control,c=a.setValue,l=a.handleSubmit,s=a.reset,p=a.formState.errors;return(0,bn.jsxs)(ge,{autoComplete:"off",onSubmit:l((function(t){return sn(t,pn(e),i,n,s)})),children:[(0,bn.jsx)(yn,{control:d}),(0,bn.jsx)(Pn,{control:d}),(0,bn.jsxs)(ue,{children:[(0,bn.jsx)(re,{control:d,setValue:c,setCategoryId:o}),p.category&&(0,bn.jsx)(fe,{children:p.category.message})]}),(0,bn.jsxs)(ue,{children:[(0,bn.jsx)(le,{control:d}),p.sum&&(0,bn.jsx)(fe,{children:"Sum is required"})]}),(0,bn.jsxs)(ue,{children:[(0,bn.jsx)(he,{control:d}),p.comment&&(0,bn.jsx)(fe,{children:p.comment.message})]}),(0,bn.jsx)(me,{type:"submit",children:"Add"})]})},ye=t(3433),we=t(3623),ve=t(5967),Ze=hn.ZP.div(H||(H=(0,xn.Z)(["\n  width: 335px;\n  height: 471px;\n  padding: 28px 22px 0 21px;\n  border-radius: 30px;\n  background: #171719;\n  color: rgba(250, 250, 250, 0.5);\n\n  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {\n    width: 704px;\n    height: 302px;\n    display: flex;\n    flex-direction: column;\n    gap: 37px;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    width: 630px;\n    height: 302px;\n    display: flex;\n    flex-direction: column;\n    gap: 37px;\n    padding: 40px 40px 0 40px;\n  }\n"]))),je=(hn.ZP.p(V||(V=(0,xn.Z)(["\n  margin-bottom: 55px;\n\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n\n  @media only screen and (min-width: 768px) {\n    color: rgba(250, 250, 250, 0.5);\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"]))),hn.ZP.div(R||(R=(0,xn.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {\n    flex-direction: row;\n  }\n  @media only screen and (min-width: 1440px) {\n    flex-direction: row;\n    gap: 40px;\n  }\n"])))),ke=hn.ZP.div(X||(X=(0,xn.Z)(["\n  width: 292px;\n  height: 142px;\n"]))),_e=hn.ZP.div(U||(U=(0,xn.Z)(["\n  width: 292px;\n  max-height: 126px;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n  scrollbar-color: #444446 #0c0d0d;\n\n  & ::-webkit-scrollbar-thumb {\n    width: 6px;\n    height: 64px;\n    border-radius: 12px;\n    background-color: #0c0d0d;\n  }\n  & ::-webkit-scrollbar-track {\n    width: 6px;\n    height: 126px;\n    border-radius: 12px;\n    background-color: #444446;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    width: 217px;\n  }\n"]))),Fe=hn.ZP.ul(W||(W=(0,xn.Z)(["\n  width: 230px;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 14px;\n  list-style-type: none;\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),Ae=hn.ZP.li(Y||(Y=(0,xn.Z)(["\n  width: 269px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 8px;\n\n  & ::before {\n    content: '\u2022';\n    color: ",";\n    font-size: 30px;\n    position: absolute;\n    top: -10px;\n    left: -10px;\n  }\n\n  & p {\n    color: rgba(250, 250, 250, 0.5);\n    font-family: Suisse Intl;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n\n  & p:last-child {\n    margin-right: 20px;\n    margin-left: auto;\n    color: #fafafa;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n  }\n\n  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {\n    width: 269px;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    width: 191px;\n  }\n"])),(function(n){return n.color||"black"})),ze=hn.ZP.p(L||(L=(0,xn.Z)(["\n  font-size: 16px;\n  margin-top: 140px;\n  text-align: center;\n\n  @media only screen and (min-width: 768px) {\n    font-size: 18px;\n    margin-top: 40px;\n  }\n"]))),Ce=t(8418);ve.kL.register(ve.qi,ve.u,ve.De);var Pe,Ee,Se,De,Ne,$e,Te,Ie=function(){var n=(0,G.useRef)(null),e=(0,J.v9)(Ce.Bt),t=(0,G.useState)(null),r=(0,tn.Z)(t,2),i=r[0],o=r[1],a=(0,G.useState)(null),d=(0,tn.Z)(a,2),c=d[0],l=d[1],s=(0,G.useMemo)((function(){return["#007E7E","#00FF00","#57FF57","#008A8A","#009A9A","#00C5C5","#006666","#00B2B2","#00DADA","#005C5C","#007272","#00E5E5","#004040","#00A5A5","#00F0F0","#003434","#009292","#00CDCD","#002E2E","#00FFFF","#001919","#00D5D5","#006262","#003D3D","#00AAAA","#002323","#00BFBF","#00ECEC","#004747","#00F5F5","#000A0A","#00CACA","#005353","#00F2F2","#008080","#001E1E","#00F7F7","#000505","#00A9A9","#009090","#000000"]}),[]),p=(0,G.useState)({labels:[],datasets:[{label:"",data:[0],backgroundColor:s,borderWidth:1}]}),x=(0,tn.Z)(p,2),h=x[0],g=x[1];return(0,G.useEffect)((function(){if(e){var n={};e.forEach((function(e){var t,r=null===(t=e.category)||void 0===t?void 0:t.categoryName;r&&(n[r]?n[r]+=e.sum:n[r]=e.sum)}));var t=e.reduce((function(n,e){return n+e.sum}),0),r=Object.keys(n).map((function(e){return{category:{categoryName:e},sum:n[e],percentage:(n[e]/t*100).toFixed(2)}}));l(r)}}),[e]),(0,G.useEffect)((function(){if(c){var n=c.reduce((function(n,e){var t,r=null===(t=e.category)||void 0===t?void 0:t.categoryName;return r&&(n[r]=(n[r]||0)+e.sum),n}),{}),e=(0,ye.Z)(c).sort((function(n,e){return n.category.categoryName>e.category.categoryName?1:-1})),t=Object.values(n);g((function(n){var e;return{labels:[],datasets:[{data:t,backgroundColor:[].concat((0,ye.Z)((null===(e=n.datasets[0])||void 0===e?void 0:e.backgroundColor)||[]),[s]),borderWidth:0}]}}));var r=e.reduce((function(n,e){return n+e.sum}),0);o(r)}}),[s,c]),(0,bn.jsxs)(Ze,{children:[(0,bn.jsx)("h2",{children:"Expenses categories"}),!(null!==c&&void 0!==c&&c.length)&&(0,bn.jsx)(ze,{children:'Add at least 1 transaction to see "doughnut" statistics here\ud83d\udcca'}),(0,bn.jsxs)(je,{children:[(0,bn.jsx)(ke,{children:(0,bn.jsx)(we.$I,{data:h,options:(0,wn.Z)((0,wn.Z)({},{hoverOffset:[20],rotation:[-90],circumference:[180],maintainAspectRatio:!1,width:[280],height:[140]}),{},{onHover:function(e,t){return function(e){if(e.length>0){var t=e[0].index;if(n.current){var r=n.current.querySelector('[data-id="'.concat(t,'"]'));r&&r.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}}(t)}})})}),(0,bn.jsx)(_e,{ref:n,children:(0,bn.jsx)(Fe,{children:null===c||void 0===c?void 0:c.map((function(n,e){var t,r;return(0,bn.jsxs)(Ae,{"data-id":e,color:null===(t=h.datasets[0])||void 0===t?void 0:t.backgroundColor[e],children:[(0,bn.jsx)("p",{children:null===(r=n.category)||void 0===r?void 0:r.categoryName}),(0,bn.jsx)("p",{children:"".concat((n.sum/i*100).toFixed(2),"%")})]},e)}))})})]})]})},Me=hn.ZP.section(Pe||(Pe=(0,xn.Z)(["\n  width: 375px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 80px;\n  margin-right: auto;\n  margin-left: auto;\n\n  margin-top: 66px;\n\n  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n    padding-bottom: 80px;\n    margin-top: 59px;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    width: 1440px;\n    padding-left: 100px;\n    padding-right: 100px;\n    padding-bottom: 50px;\n\n    display: flex;\n    gap: 44px;\n    margin-top: 59px;\n  }\n"]))),qe=hn.ZP.div(Ee||(Ee=(0,xn.Z)(["\n  width: 335px;\n  margin-bottom: 40px;\n\n  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {\n    width: 500px;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    width: 630px;\n  }\n"]))),Qe=hn.ZP.h1(Se||(Se=(0,xn.Z)(["\n  margin-bottom: 20px;\n\n  color: #fafafa;\n  font-weight: 400;\n  font-size: 32px;\n  letter-spacing: -0.02em;\n  line-height: normal;\n\n  @media only screen and (min-width: 768px) {\n    margin-bottom: 15px;\n\n    font-size: 38px;\n  }\n"]))),Oe=hn.ZP.p(De||(De=(0,xn.Z)(["\n  color: rgba(250, 250, 250, 0.4);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.02em;\n\n  @media only screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n  @media only screen and (min-width: 1440px) {\n    width: 570px;\n  }\n"]))),Be=hn.ZP.ul(Ne||(Ne=(0,xn.Z)(["\n  width: 335px;\n  padding: 0;\n\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n\n  list-style: none;\n\n  margin-bottom: 40px;\n\n  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {\n    width: 701px;\n\n    flex-direction: row;\n\n    gap: 0;\n    justify-content: space-between;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    width: 630px;\n\n    gap: 24px;\n    flex-direction: row;\n  }\n"]))),He=hn.ZP.main($e||($e=(0,xn.Z)(["\n  width: 630px;\n  width: 335px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n\n  @media only screen and (min-width: 1440px) {\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n\n    gap: 0px;\n  }\n"]))),Ve=hn.ZP.div(Te||(Te=(0,xn.Z)(["\n  width: 630px;\n"]))),Re=function(){var n=(0,K.useMediaQuery)({query:"(max-width: 1439.98px"}),e=(0,K.useMediaQuery)({query:"(min-width: 1440px)"}),t=(0,J.v9)(nn.Qb),r=(0,J.I0)();return(0,G.useEffect)((function(){t&&r((0,ln.c1)({type:"expenses",date:""}))}),[r,t]),t?(0,bn.jsxs)(Me,{children:[n&&(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)(Un.d,{$variant:"mainTransactionsHeaderNotDesktop",children:(0,bn.jsxs)(qe,{children:[(0,bn.jsx)(Qe,{children:"Expense log"}),(0,bn.jsx)(Oe,{children:"Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips."})]})}),(0,bn.jsx)(Un.d,{$variant:"mainTransactionsListNotDesktop",children:(0,bn.jsxs)(Be,{children:[(0,bn.jsx)("li",{children:(0,bn.jsx)(en.u,{})}),(0,bn.jsx)("li",{children:(0,bn.jsx)(en.m,{})})]})}),(0,bn.jsx)(Un.d,{$variant:"operationForm",children:(0,bn.jsx)(be,{})}),(0,bn.jsx)(Un.d,{$variant:"doughnut",children:(0,bn.jsx)(He,{children:(0,bn.jsx)(Ie,{})})})]}),e&&(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)(Un.d,{$variant:"mainTransactionsInfoDesktop",children:(0,bn.jsxs)(Ve,{children:[(0,bn.jsxs)(qe,{children:[(0,bn.jsx)(Qe,{children:"Expense log"}),(0,bn.jsx)(Oe,{children:"Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips."})]}),(0,bn.jsxs)(Be,{children:[(0,bn.jsx)("li",{children:(0,bn.jsx)(en.u,{})}),(0,bn.jsx)("li",{children:(0,bn.jsx)(en.m,{})})]}),(0,bn.jsx)(He,{children:(0,bn.jsx)(Ie,{})})]})}),(0,bn.jsx)(Un.d,{$variant:"operationForm",children:(0,bn.jsx)(be,{})})]})]}):(0,bn.jsx)(rn.Fg,{to:"/login"})}},8418:function(n,e,t){t.d(e,{Bt:function(){return r}});var r=function(n){return n.transaction.transactions}},7067:function(n,e,t){t.d(e,{m:function(){return Z},u:function(){return k}});t(2791);var r=t(9434),i=t(4746),o=t(756);var a,d,c,l,s,p,x=function(n){switch(n){case"uah":default:return"\u20b4";case"usd":return"$";case"eur":return"\u20ac"}},h=t(168),g=t(5867),m=g.ZP.div(a||(a=(0,h.Z)(["\n  background-color: #171719;\n  border-radius: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  display: flex;\n  gap: 12px;\n  justify-content: left;\n  align-items: center;\n\n  @media only screen and (min-width: 768px) {\n    padding-top: 32px;\n    padding-bottom: 32px;\n    padding-left: 23px;\n    padding-right: 23px;\n    border-radius: 30px;\n\n    gap: 22px;\n  }\n  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {\n    width: 340px;\n  }\n  @media only screen and (min-width: 1440px) {\n    width: 303px;\n    height: 121px;\n  }\n"]))),u=g.ZP.div(d||(d=(0,h.Z)(["\n  background-color: #0EF387;\n  border-radius: 10px;\n\n  width: 36px;\n  height: 36px;\n\n  position: relative;\n\n  @media only screen and (min-width: 768px) {\n    width: 43px;\n    height: 43px;\n\n    border-radius: 13px;\n  }\n"]))),f=g.ZP.svg(c||(c=(0,h.Z)(["\n  position: absolute;\n  top: 9px;\n  left: 9px;\n\n  @media only screen and (min-width: 768px) {\n    top: 13px;\n    left: 13px;\n  }\n"]))),b=g.ZP.div(l||(l=(0,h.Z)(["\n  height: 41px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  /* gap: 4px; */\n\n  @media only screen and (min-width: 768px) {\n    gap: 15px;\n  }\n"]))),y=g.ZP.p(s||(s=(0,h.Z)(["\n  color: rgba(250, 250, 250, 0.50);\n  text-transform: capitalize;\n\n  font-size: 12px;\n  font-weight: 400;\n\n  margin: 0;\n\n    @media only screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),w=g.ZP.p(p||(p=(0,h.Z)(["\n  color: #FAFAFA;\n\n  font-size: 18px;\n  font-weight: 700;\n\n  margin: 0;\n\n  @media only screen and (min-width: 768px) {\n    font-size: 24px;\n  }\n"]))),v=t(3329),Z=function(){var n,e=(0,r.v9)(i.dy),t=null===e||void 0===e||null===(n=e.transactionsTotal)||void 0===n?void 0:n.expenses,a=x(e.currency);return(0,v.jsxs)(m,{children:[(0,v.jsx)(u,{children:(0,v.jsx)(f,{width:18,height:18,children:(0,v.jsx)("use",{href:o.Z+"#icon-Arrow-DWN"})})}),(0,v.jsxs)(b,{children:[(0,v.jsx)(y,{children:"Total expense"}),(0,v.jsx)(w,{children:"".concat(a).concat(function(){var n=null===t||void 0===t?void 0:t.toString();return(null===n||void 0===n?void 0:n.length)<4?n:null===n||void 0===n?void 0:n.replace(/(\d)(?=(\d{3})+$)/g,"$1.")}())})]})]})},j=t(4217),k=function(){var n,e=(0,r.v9)(i.dy),t=(0,r.v9)(j.Qb),a=null===e||void 0===e||null===(n=e.transactionsTotal)||void 0===n?void 0:n.incomes,d=x(e.currency),c={backgroundColor:t?"#171719":"#FAFAFA"},l={color:t?"#FAFAFA80":"#11101C80"},s={color:t?"#FAFAFA":"#11101C"};return(0,v.jsxs)(m,{style:c,children:[(0,v.jsx)(u,{children:(0,v.jsx)(f,{width:18,height:18,children:(0,v.jsx)("use",{href:o.Z+"#icon-Arrow-UP"})})}),(0,v.jsxs)(b,{children:[(0,v.jsx)(y,{style:l,children:"Total income"}),(0,v.jsx)(w,{style:s,children:t?"".concat(d).concat(function(){var n,e=null===(n=a)||void 0===n?void 0:n.toString();return(null===e||void 0===e?void 0:e.length)<4?e:null===e||void 0===e?void 0:e.replace(/(\d)(?=(\d{3})+$)/g,"$1.")}()):t?"".concat(d).concat(a):(a="12.000","".concat(d="$").concat(a))})]})]})}}}]);
//# sourceMappingURL=266.434d08f5.chunk.js.map