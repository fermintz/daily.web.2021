import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HowUse from "../views/HowUse.vue"
import Customer from "../views/Customer.vue"
import Service from "../views/Service"
import Test from "../views/Test"
import Terms from "../views/review_terms"


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
    path: "/terms/:type",
    name: "terms",
    component: Terms,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return {x:0, y:0}
  }
});

export default router;
