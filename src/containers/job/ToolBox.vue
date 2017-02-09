<template>
    <div class="page-content">
        <div class="panel">
            <!--工具箱banner-->
            <el-form :inline="true" :model="formInline" label-width="70px" class="jobs-search-form">
                <el-row>
                    <el-col :span="20">
                        <el-form-item label="工具箱">
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" class="text-right">
                        <a href="/#/Job/JobPosting" target="_self"><i class="vertical-middle iconfont icon-fanhui"></i></a>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!--工具箱菜単-->
        <div class="panel toolBox-list">
            <el-row>
                <el-col :span="12">
                    <div class="tool-item">
                        <a href="#" class="item">
                            <i class="vertical-middle iconfont icon-weibiaoti"></i>
                            <div>
                                <h3>发布职位模板</h3>
                                <div class="tool-text">
                                    根据公司需要，设置发布模板所需要填写的字段<br/>
                                    由于企业规模、管理模式不同，所需要的职位信息也不同<br/>
                                    提前设置好企业所需要的职位信息，有助于日后管理。
                                </div>
                            </div>
                        </a>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="tool-item">
                        <a href="#" class="item">
                            <i class="vertical-middle iconfont icon-question"></i>
                            <div>
                                <h3>发布职位模板</h3>
                                <div class="tool-text">
                                    为职位设置合适的问卷，包含了问答题、判断题、多选题…<br/>
                                    候选人将在投递职位时，自动接收到问题，并自行填写。<br/>
                                    这样，HR可以方便地对候选人进行初步的评估。
                                </div>
                            </div>
                        </a>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="tool-item">
                        <a href="#" class="item">
                            <i class="vertical-middle iconfont icon-feiji"></i>
                            <div>
                                <h3>发布职位模板</h3>
                                <div class="tool-text">
                                    在这里，你可以方便地看到历次分发到招聘网站的记录。<br/>
                                    合理的利用数据追溯来指导分发行为，<br/>
                                    有助于进行科学的招聘。
                                </div>
                            </div>
                        </a>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="tool-item">
                        <a href="#" class="item">
                            <i class="vertical-middle iconfont icon-refresh"></i>
                            <div>
                                <h3>发布职位模板</h3>
                                <div class="tool-text">
                                    刷新在招聘网站发布的职位，以提高关注度<br/>
                                    科学合理地进行刷新，<br/>
                                    有助于为职位获取更多优质候选人。
                                </div>
                            </div>
                        </a>
                    </div>
                </el-col>
            </el-row>
        </div>
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


