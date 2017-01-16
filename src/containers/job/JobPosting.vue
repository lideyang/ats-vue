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
                    <el-button class="icon"><i class="iconfont icon-liebiao"></i></el-button>
                    <el-button class="icon"><i class="iconfont icon-wangge"></i></el-button>
                </el-col>
            </el-row>
        </div>
        <!--搜索列表-->
        <posting-list :items="jobsList.items" :allChecked="jobsList.allChecked"></posting-list>
        <!--发布职位灯箱-->
        <el-dialog title="发布职位" v-model="addJob.dialogAddJobsVisible" class="dialog-add-job" size="large">
            <el-form :model="form">
                <el-row>
                    <el-col :span="17">
                        <div class="left">
                            <el-form-item label="基本信息" :label-width="addJob.formLabelWidth">
                            </el-form-item>
                            <el-form-item label="职位名称" :label-width="addJob.formLabelWidth">
                                <el-input v-model="addJob.addForm.jobName" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="招聘对象" :label-width="addJob.formLabelWidth">
                                <el-radio-group v-model="addJob.addForm.obj">
                                    <el-radio-button label="全职"></el-radio-button>
                                    <el-radio-button label="兼职"></el-radio-button>
                                    <el-radio-button label="实习生"></el-radio-button>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="招聘类别" :label-width="addJob.formLabelWidth">
                                <el-radio-group v-model="addJob.addForm.sort">
                                    <el-radio-button label="社会招聘"></el-radio-button>
                                    <el-radio-button label="内部招聘"></el-radio-button>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="职能类别" :label-width="addJob.formLabelWidth">
                                <el-select placeholder="选择人员">
                                    <el-option label="研发类" value="lidy"></el-option>
                                    <el-option label="产品类" value="lidy2"></el-option>
                                    <el-option label="设计类" value=""></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="工作地区" :label-width="addJob.formLabelWidth">
                                <el-select v-model="value7" placeholder="请选择">
                                    <el-option-group
                                        v-for="group in addJob.addForm.area"
                                        :label="group.label">
                                        <el-option
                                            v-for="item in group.options"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-option-group>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="所属行业" :label-width="addJob.formLabelWidth">
                                <el-select placeholder="选择人员">
                                    <el-option label="IT/互联网" value="1"></el-option>
                                    <el-option label="房地产" value="2"></el-option>
                                    <el-option label="金融" value="3"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="职位描述" :label-width="addJob.formLabelWidth">
                                <el-input
                                    type="textarea" resize="none"
                                    :autosize="{ minRows: 2, maxRows: 6}"
                                    placeholder="请输入职位描述"
                                    v-model="textarea">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="招聘需求" :label-width="addJob.formLabelWidth">
                            </el-form-item>
                            <el-form-item label="招聘人数" :label-width="addJob.formLabelWidth">
                                <el-input v-model="addJob.addForm.jobNum" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="提供月薪" :label-width="addJob.formLabelWidth">
                                <el-input v-model="addJob.addForm.money" auto-complete="off" class="input-split"></el-input>
                                -
                                <el-input v-model="addJob.addForm.money" auto-complete="off" class="input-split"></el-input>
                            </el-form-item>
                            <el-form-item label="学历" :label-width="addJob.formLabelWidth">
                                <el-select placeholder="请选择  (选填)">
                                    <el-option label="研发类" value="lidy"></el-option>
                                    <el-option label="产品类" value="lidy2"></el-option>
                                    <el-option label="设计类" value=""></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="工作年限" :label-width="addJob.formLabelWidth">
                                <el-select placeholder="请选择  (选填)">
                                    <el-option label="研发类" value="lidy"></el-option>
                                    <el-option label="产品类" value="lidy2"></el-option>
                                    <el-option label="设计类" value=""></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="内部管理" label-width="100px">
                        </el-form-item>
                        <el-form-item label="接收简历邮箱" label-width="100px">
                            <el-select placeholder="选择人员">
                                <el-option label="研发类" value="lidy"></el-option>
                                <el-option label="产品类" value="lidy2"></el-option>
                                <el-option label="设计类" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="生效日期" label-width="100px">
                            <el-select placeholder="选择人员">
                                <el-option label="研发类" value="lidy"></el-option>
                                <el-option label="产品类" value="lidy2"></el-option>
                                <el-option label="设计类" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="期望到岗日期" label-width="100px">
                            <el-select placeholder="选择人员">
                                <el-option label="研发类" value="lidy"></el-option>
                                <el-option label="产品类" value="lidy2"></el-option>
                                <el-option label="设计类" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="标记" label-width="100px">
                            <el-select placeholder="选择人员">
                                <el-option label="研发类" value="lidy"></el-option>
                                <el-option label="产品类" value="lidy2"></el-option>
                                <el-option label="设计类" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="招聘专员" label-width="100px">
                            <el-select placeholder="选择人员">
                                <el-option label="研发类" value="lidy"></el-option>
                                <el-option label="产品类" value="lidy2"></el-option>
                                <el-option label="设计类" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="招聘协同专员" label-width="100px">
                            <el-select placeholder="选择人员">
                                <el-option label="研发类" value="lidy"></el-option>
                                <el-option label="产品类" value="lidy2"></el-option>
                                <el-option label="设计类" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="面试评估模板" label-width="100px">
                            <el-select placeholder="选择人员">
                                <el-option label="研发类" value="lidy"></el-option>
                                <el-option label="产品类" value="lidy2"></el-option>
                                <el-option label="设计类" value=""></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="hideAddJobFrom">取 消</el-button>
                <el-button type="primary" @click="hideAddJobFrom">发 布</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapActions, mapState} from 'vuex'
    import {
        Form, FormItem, Select, Option, Input, Row, Col, Checkbox, Button, Dialog, Radio, RadioGroup, RadioButton,
        OptionGroup
    } from 'element-ui'
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
    Vue.component(Dialog.name, Dialog)
    Vue.component(Radio.name, Radio)
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(OptionGroup.name, OptionGroup)
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
                jobsList: ({jobs}) => jobs.jobsList,
                addJob: ({jobs})=>jobs.addJob
            })
        },
        methods: {
            refreshPage(otherParams = {}){
                otherParams = {...otherParams, ...{status: this.status}};
                this.showPageLoading();
                this.getJobsList(otherParams).then(()=>{
                    this.hidePageLoading();
                });
            },
            ...mapActions(["showPageLoading", "hidePageLoading", "getJobsList", 'allCheckListTrigger', 'showAddJobFrom', 'hideAddJobFrom'])
        },
    };
</script>


