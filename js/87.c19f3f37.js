"use strict";(self["webpackChunkcli"]=self["webpackChunkcli"]||[]).push([[87],{1087:function(s,e,t){t.r(e),t.d(e,{default:function(){return w}});var i=t(6252),r=t(3577);const u={class:"container"},a={key:0,class:"main__users"},n={key:1,class:"Loading"};function l(s,e,t,l,c,d){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",u,[d.users?((0,i.wg)(),(0,i.iD)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.users,(s=>((0,i.wg)(),(0,i.iD)("div",{class:"main__users-item users",key:s.id},[(0,i.Wm)(o,{to:/about/+s.id,class:"adress"},{default:(0,i.w5)((()=>[(0,i.Uk)("Адресс")])),_:2},1032,["to"]),(0,i._)("p",null,"Name: "+(0,r.zw)(s.name),1),(0,i._)("p",null,"Email: "+(0,r.zw)(s.email),1),(0,i._)("p",null,"City: "+(0,r.zw)(s.address.city),1)])))),128))])):((0,i.wg)(),(0,i.iD)("div",n," Идет загрузка... "))])}var c={created(){this.getUsers()},computed:{users(){return this.$store.state.user}},methods:{getUsers(){this.$store.dispatch("getUsers")}}},d=t(3744);const o=(0,d.Z)(c,[["render",l]]);var w=o}}]);
//# sourceMappingURL=87.c19f3f37.js.map