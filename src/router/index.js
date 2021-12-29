import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HowUse from "../views/HowUse.vue"
import Customer from "../views/Customer.vue"
import Service from "../views/Service"
import Terms from "../views/terms"
import NotFound from "../views/notFound"
import Caution from "../views/Caution"
import CautionSecond from "../views/Caution_second"
import Study from "../views/study"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/howUse",
    name: "howUse",
    component: HowUse,
  },
  {
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    path: "/customer",
    name: "customer",
    component: Customer,
  },
  {
    path: "/caution/:type",
    name: "caution",
    component: Caution,
  },
  {
    path: "/caution_second",
    name: "caution_second",
    component: CautionSecond,
  },
  {
    path: "/terms/:type",
    name: "terms",
    component: Terms,
  },
  {
    path:"/study",
    name:"study",
    component: Study
  },

  {
    path:'*',
    redirect: '/404',
  },
  {
    path:'/404',
    component:NotFound,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return {x:0, y:0}
  }
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location){
  return originalPush.call(this, location).catch(err => {
    if(err.name !== 'NavigationDuplicated') throw err;
  })
}

export default router;
