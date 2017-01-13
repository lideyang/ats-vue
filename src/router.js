import Vue from "vue"
import VueRouter from "vue-router"
import Job from "./containers/job/JobPosting"

Vue.use(VueRouter);

const Router = new VueRouter({
    routes: [
        {path: '/', redirect: '/Job/JobPosting'},
        {path: '/Job/JobPosting', component: Job}
    ]
});

export default Router;
