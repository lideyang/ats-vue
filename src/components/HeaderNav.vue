<template>
    <div class="p-layout-topbar">
        <header class="page-header">
            <el-row>
                <el-col :span="4">
                    <div class="logo">
                        <i class="iconfont icon-menu"></i>
                        <span class="title">雇得易新版</span>
                    </div>
                </el-col>
                <el-col :span="20">
                    <el-menu theme="" default-active="1" class="pull-right user-menu" mode="horizontal" @select="handleSelect">
                        <el-submenu index="1">
                            <template slot="title">
                                <el-badge :value="12" class="item">
                                    <el-button size="small">消息</el-button>
                                </el-badge>
                            </template>
                            <el-menu-item class="active" index="1-0">消息中心</el-menu-item>
                            <el-menu-item index="1-1"><a href="/Account/UserContacts" target="_blank">动态消息(2)</a>
                            </el-menu-item>
                            <el-menu-item index="1-1"><a href="/Account/UserContacts" target="_blank">提醒消息(3)</a>
                            </el-menu-item>
                            <el-menu-item index="1-1"><a href="/Account/UserContacts" target="_blank">进展报告(1)</a>
                            </el-menu-item>
                            <el-menu-item index="1-1"><a href="/Account/UserContacts" target="_blank">系统消息(5)</a>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu class="user-msg-list" index="2">
                            <template slot="title">
                                <img src="../layouts/images/default_photo.jpg" class="headerUserAvatar"/>lidy
                            </template>
                            <el-menu-item class="active" index="2-0">
                                <p>您当前使用的帐号： </p>
                                <p>lidy.li@hirede.com</p>
                                <p>账号过期时间：2017/1/28</p>
                            </el-menu-item>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3"><a href="/Account/UserContacts" target="_blank">通讯录</a></el-menu-item>
                        <el-menu-item index="4"><a href="在线客服" target="_blank">在线客服</a></el-menu-item>
                        <el-menu-item index="5"><a href="#" target="_blank">招聘门户</a></el-menu-item>
                        <el-menu-item index="6">
                            <a href="http://selfhelp.hirede.com/pages/viewpage.action?pageId=819350" target="_blank">帮助</a>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <a href="http://192.168.1.228:8300/Application/Index" target="_blank">应用市场</a></el-menu-item>
                        <el-menu-item index="8">
                            <a href="http://www.hirede.com/SiteHelp/AddNewQuestion" target="_blank">反馈</a></el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </header>
    </div>
</template>
<style>

</style>
<script>
    import Vue from 'vue'
    import {Row, Col, Menu, MenuItem, Submenu, Button, Badge} from 'element-ui'
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Menu.name, Menu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(Submenu.name, Submenu)
    Vue.component(Button.name, Button)
    Vue.component(Badge.name, Badge)
    export default {
        name: "HeaderNav",
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
