<template>
    <div class="page-content">
        <div class="panel">
            <!--搜索条件-->
            <el-form :inline="true" :model="formInline" label-width="70px" class="jobs-search-form">
                <el-row>
                    <el-col :span="14">
                        <el-form-item label="职位状态">
                            <el-select v-model="jobSelectModel" placeholder="请选择职位状态">
                                <el-option
                                    v-for="item in jobSelectOptions"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="招聘专员">
                            <el-select placeholder="选择人员">
                                <el-option label="lidy" value="lidy"></el-option>
                                <el-option label="lidy2" value="lidy2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="职位">
                            <el-input v-model="input" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" class="more">
                        <el-form-item label="" label-width="0px">
                            <i class="vertical-middle iconfont icon-shaixuan"></i><span class="vertical-middle">更多筛选</span>
                        </el-form-item>
                        <el-form-item label="" label-width="0px">
                            <i class="vertical-middle iconfont icon-sort"></i><span class="vertical-middle">排序</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" class="text-right">
                        <el-button class="vertical-middle radius" type="primary" icon="plus">发布职位</el-button>
                        <i class="vertical-middle iconfont icon-gongju"></i>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!--搜索工具-->
        <div class="panel">
            <el-row>
                <el-col :span="1">
                    <el-checkbox v-model="allChecked"></el-checkbox>
                </el-col>
                <el-col :span="18">
                    <el-button>分发</el-button>
                    <el-button>刷新</el-button>
                    <el-button>招聘暂停</el-button>
                    <el-button>招聘完成</el-button>
                    <el-button>重新发布</el-button>
                </el-col>
                <el-col :span="5" class="text-right">
                    <el-button>导出</el-button>
                    <el-button class="icon"><i class="iconfont icon-liebiao"></i></el-button>
                    <el-button class="icon"><i class="iconfont icon-wangge"></i></el-button>
                </el-col>
            </el-row>
        </div>
        <!--搜索列表-->
        <posting-list :items="jobs.items"></posting-list>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapActions, mapState} from 'vuex'
    import {Form, FormItem, Select, Option, Input, Row, Col, Checkbox, Button} from 'element-ui'
    import PostingList from '../../components/job/PostingList'
    Vue.component(Form.name, Form)
    Vue.component(FormItem.name, FormItem)
    Vue.component(Select.name, Select)
    Vue.component(Option.name, Option)
    Vue.component(Input.name, Input)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Button.name, Button)
    export default {

        name: 'JobPosting',
        components: {
            PostingList
        },
        data() {
            return {
                jobSelectOptions: [{
                    value: '1',
                    label: '发布中'
                }, {
                    value: '2',
                    label: '已发布'
                }, {
                    value: '3',
                    label: '已完成'
                }, {
                    value: '4',
                    label: '未完成'
                }, {
                    value: '5',
                    label: '已入职'
                }],
                jobSelectModel: []
            }
        },
        beforeMount(){
            this.refreshPage();
        },
        computed: {
            ...mapState({
                jobs: ({jobs}) => jobs.jobsList
            })
        },
        methods: {
            refreshPage(otherParams = {}){
                otherParams = {...otherParams, ...{status: this.status}};
                this.showPageLoading();
                this.getJobs(otherParams).then(()=>{
                    this.hidePageLoading();
                });
            },
            ...mapActions(["showPageLoading", "hidePageLoading", "getJobs"])
        },
    };
</script>


