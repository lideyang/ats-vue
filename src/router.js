import Vue from "vue"
import VueRouter from "vue-router"
import Job from "./containers/job/JobPosting"
import ToolBox from "./containers/job/ToolBox"

Vue.use(VueRouter);

const Router = new VueRouter({
    routes: [
        {path: '/', redirect: '/Job/JobPosting'},
        {path: '/Job/JobPosting', component: Job},
        {path: '/Job/ToolBox', component: ToolBox}
    ]
});

export default Router;
