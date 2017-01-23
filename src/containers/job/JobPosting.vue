<template>
    <div class="page-content">
        <div class="panel">
            <!--搜索条件-->
            <el-form :inline="true" :model="formInline" label-width="70px" class="jobs-search-form">
                <el-row>
                    <el-col :span="14">
                        <el-form-item label="职位状态">
                            <el-select v-model="jobStatusSelectModel" placeholder="请选择职位状态">
                                <el-option
                                    v-for="item in jobSelectOptions"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="招聘专员">
                            <el-select v-model="recruiterSelectModel" placeholder="选择人员">
                                <el-option
                                    v-for="item in selectOpt.recruiter"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
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
                        <el-button class="vertical-middle radius" type="primary" icon="plus" @click="showAddJobFrom">
                            发布职位
                        </el-button>
                        <i class="vertical-middle iconfont icon-gongju"></i>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!--搜索工具-->
        <div class="panel">
            <el-row>
                <el-col :span="1">
                    <el-checkbox @change="allCheckListTrigger"></el-checkbox>
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
                    <el-button class="icon" :type="jobsList.listView==='list'?'primary':'default'" data-type="list" @click="changeJobListView">
                        <i class="iconfont icon-liebiao"></i></el-button>
                    <el-button class="icon" :type="jobsList.listView==='table'?'primary':'default'" data-type="table" @click="changeJobListView">
                        <i class="iconfont icon-wangge"></i></el-button>
                    <el-button class="icon" v-if="jobsList.listView==='table'" :type="jobsList.listView==='table'?'primary':'default'" data-type="table" @click="changeJobListView" v-popover:popoverSetting>
                        <i class="iconfont icon-setting"></i></el-button>
                    <el-popover
                        ref="popoverSetting"
                        placement="right"
                        width="400"
                        trigger="click">
                        <el-table :data="gridData">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox label="复选框 A"></el-checkbox>
                                <el-checkbox label="复选框 B"></el-checkbox>
                                <el-checkbox label="复选框 C"></el-checkbox>
                                <el-checkbox label="禁用" disabled></el-checkbox>
                                <el-checkbox label="选中且禁用" disabled></el-checkbox>
                            </el-checkbox-group>
                        </el-table>
                    </el-popover>
                </el-col>
            </el-row>
        </div>
        <!--搜索列表-->
        <posting-list :items="jobsList.items" :allChecked="jobsList.allChecked"></posting-list>
        <!--发布职位灯箱-->
        <add-job-dialog/>
        <!--职位详情灯箱-->
        <job-info-dialog/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapActions, mapState} from 'vuex'
    import {
        Form, FormItem, Select, Option, Input, Row, Col, Checkbox, Button, Dialog, Radio, RadioGroup, RadioButton,
        OptionGroup, Tooltip, Popover
    } from 'element-ui'
    import PostingList from '../../components/job/PostingList'
    import AddJobDialog from '../../components/job/AddJobDialog'
    import JobInfoDialog from '../../components/job/JobInfoDialog'
    Vue.component(Form.name, Form)
    Vue.component(FormItem.name, FormItem)
    Vue.component(Select.name, Select)
    Vue.component(Option.name, Option)
    Vue.component(Input.name, Input)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Button.name, Button)
    Vue.component(Dialog.name, Dialog)
    Vue.component(Radio.name, Radio)
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(OptionGroup.name, OptionGroup)
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(Popover.name, Popover)
    export default {

        name: 'JobPosting',
        components: {
            PostingList,
            AddJobDialog,
            JobInfoDialog
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
                jobStatusSelectModel: '',
                recruiterSelectModel: ''
            }
        },
        beforeMount(){
            this.refreshPage();
        },
        computed: {
            ...mapState({
                jobsList: ({jobs}) => jobs.jobsList,
                addJob: ({jobs})=>jobs.addJob,
                jobInfo: ({jobs})=>jobs.jobInfo,
                selectOpt: ({jobs})=>jobs.selectOpt
            })
        },
        methods: {
            refreshPage(otherParams = {}){
                otherParams = {...otherParams, ...{status: '5'}};
                this.showPageLoading();
                this.getJobsList(otherParams).then(()=>{
                    this.hidePageLoading();
                });
            },
            ...mapActions(["showPageLoading", "hidePageLoading", "getJobsList", 'allCheckListTrigger', 'showAddJobFrom', 'changeJobListView'])
        },
    };
</script>


