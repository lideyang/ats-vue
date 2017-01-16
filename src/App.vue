<template>
    <div class='page-wrapper'>
        <header-nav></header-nav>
        <div class="p-layout-body">
            <left-menu></left-menu>
            <div class="p-layout-panel">
                <router-view class="p-layout-content"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Row, Col } from 'element-ui'
    import {mapState, mapActions} from 'vuex'
    import HeaderNav from './components/HeaderNav'
    import LeftMenu from './components/LeftMenu'
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    export default {

        name: 'App',

        data(){
            return {
                logoutURL: `${window.config.context}/logout`,
            }
        },

        beforeMount(){
            this.getCurrentUser();
        },

        components: {
            HeaderNav,
            LeftMenu
        },

        methods: mapActions(['getCurrentUser']),

        computed: mapState({
            pageLoading: ({root}) => root.pageLoading,
            currentUser: ({root}) => root.currentUser
        })
    };


</script>


<style lang="sass">
    @import "./layouts/sass/index.scss";
    @import "./layouts/fonts/iconfont.css";
    @import "./app.scss";
</style>


