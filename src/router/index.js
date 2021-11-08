import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HowUse from "../views/HowUse.vue"
import Customer from "../views/Customer.vue"
import Service from "../views/Service"


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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
