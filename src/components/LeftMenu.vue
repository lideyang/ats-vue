<template>
    <div class="p-layout-sider">
        <el-menu default-active="2" class="left-menu" @open="handleOpen" @close="handleClose">
        <el-menu-item class="active" index="1"><i class="iconfont icon-jobs"></i>职位</el-menu-item>
        <el-submenu index="2">
            <template slot="title"><i class="iconfont icon-users"></i>候选人</template>
            <el-menu-item-group>
                <template slot="title">候选人</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">人才库</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title"></template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title"><i class="iconfont icon-box"></i>人才库</template>
            <el-menu-item-group>
                <template slot="title">候选人</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">人才库</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title"></template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title"><i class="iconfont icon-setting"></i>系统管理</template>
            <el-menu-item-group>
                <template slot="title">候选人</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">人才库</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title"></template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
    </div>
</template>
<style>

</style>
<script>
    import Vue from 'vue'
    import {Row, Col, Menu, MenuItem, Submenu,MenuItemGroup} from 'element-ui'
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Menu.name, Menu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(Submenu.name, Submenu)
    Vue.component(MenuItemGroup.name, MenuItemGroup)
    export default {
        name: "LeftMenu",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
