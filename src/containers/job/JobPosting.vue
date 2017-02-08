<template>
    <div class="page-content">
        <div class="panel">
            <!--搜索条件-->
            <el-form :inline="true" :model="formInline" label-width="70px" class="jobs-search-form">
                <el-row>
                    <el-col :span="14">
                        <el-form-item label="职位状态">
                            <el-select v-model="searchCriteria.jobStatus" placeholder="请选择职位状态" @change="handleSearchSubmit">
                                <el-option
                                    v-for="item in selectOpt.jobStatus"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="招聘专员">
                            <el-select v-model="searchCriteria.recruiter" placeholder="选择人员" @change="handleSearchSubmit">
                                <el-option
                                    v-for="item in selectOpt.recruiter"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="职位">
                            <el-input v-model="searchCriteria.jobName" placeholder="请输入内容" @blur="handleSearchSubmit"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" class="more">
                        <el-form-item class="more-search-btn" label="" label-width="0px">
                            <i class="vertical-middle iconfont icon-shaixuan"></i><span class="vertical-middle" @click="showMoreSearchLayer">更多筛选</span>
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
        <div class="panel tools-list">
            <el-row>
                <el-col :span="1">
                    <el-checkbox :indeterminate="jobsList.isIndeterminate" v-model="jobsList.allChecked" @change="allCheckListTrigger"></el-checkbox>
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
                    <el-popover
                        ref="popoverSetting"
                        placement="left"
                        width="400"
                        trigger="click">
                        <div class="check-column-popover">
                            <el-checkbox v-for="column in jobsList.column" v-model="column.isShow">{{column.name}}</el-checkbox>
                        </div>
                    </el-popover>
                    <el-button class="icon" v-show="jobsList.listView==='table'" :type="jobsList.listView==='table'?'primary':'default'" data-type="table" v-popover:popoverSetting>
                        <i class="iconfont icon-setting"></i></el-button>
                </el-col>
            </el-row>
        </div>
        <!--搜索列表-->
        <posting-list :jobsList="jobsList" :allChecked="jobsList.allChecked"></posting-list>
        <!--发布职位灯箱-->
        <add-job-dialog :addJob="addJob" :selectOpt="selectOpt"/>
        <!--职位详情灯箱-->
        <job-info-dialog :jobInfo="jobInfo" />
        <!--筛选侧边栏-->
        <search-criteria :searchCriteria="searchCriteria" />
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapActions, mapState} from 'vuex'
    import {
        Form, FormItem, Select, Option, Input, Row, Col, Checkbox, Button, Dialog, Radio, RadioGroup, RadioButton,
        OptionGroup, Tooltip, Popover, CheckboxGroup
    } from 'element-ui'
    import PostingList from '../../components/job/PostingList'
    import AddJobDialog from '../../components/job/AddJobDialog'
    import JobInfoDialog from '../../components/job/JobInfoDialog'
    import SearchCriteria from '../../components/job/SearchCriteria'
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
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    export default {

        name: 'JobPosting',
        components: {
            PostingList,
            AddJobDialog,
            JobInfoDialog,
            SearchCriteria
        },
        data() {
            return {
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
                searchCriteria: ({jobs}) => jobs.searchCriteria,
                addJob: ({jobs}) => jobs.addJob,
                jobInfo: ({jobs}) => jobs.jobInfo,
                selectOpt: ({jobs}) => jobs.selectOpt
            })
        },
        methods: {
            handleSearchSubmit(event){
                this.refreshPage(this.searchCriteria);
            },
            handleMoreSearch(event){

            },
            refreshPage(otherParams = {}){
                console.log(this.searchCriteria);
                otherParams = {...otherParams, ...{status: '5'}};
                this.showPageLoading();
                this.getJobsList(otherParams).then(() =>{
                    this.hidePageLoading();
                });
            },
            ...mapActions(["showPageLoading", "hidePageLoading", "getJobsList", 'allCheckListTrigger',
                'showAddJobFrom', 'changeJobListView', 'changeJobTableViewColumn','showMoreSearchLayer'
            ])
        },
    };
</script>


