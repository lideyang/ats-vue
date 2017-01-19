<template>
    <el-dialog title="发布职位" v-model="addJob.dialogAddJobsVisible" class="dialog-add-job" size="large">
        <el-form :model="form">
            <el-row>
                <el-col :span="17">
                    <div class="left">
                        <el-form-item class="title" label="基本信息" :label-width="addJob.formLabelWidth">
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
                                    v-for="group in selectOpt.area"
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
                        <el-form-item class="describe" label="职位描述" :label-width="addJob.formLabelWidth">
                            <el-input
                                type="textarea" resize="none"
                                :autosize="{ minRows: 2, maxRows: 6}"
                                placeholder="请输入职位描述"
                                v-model="textarea">
                            </el-input>
                        </el-form-item>
                        <el-form-item class="title" label="招聘需求" :label-width="addJob.formLabelWidth">
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
                    <el-form-item class="title" label="内部管理" label-width="100px">
                    </el-form-item>
                    <el-form-item label="接收简历邮箱" label-width="100px">
                        <el-select placeholder="选择人员">
                            <el-option label="研发类" value="lidy"></el-option>
                            <el-option label="产品类" value="lidy2"></el-option>
                            <el-option label="设计类" value=""></el-option>
                        </el-select>
                        <el-tooltip class="item" effect="dark" content="提示文字" placement="top">
                            <i class="iconfont icon-gantanhao"></i>
                        </el-tooltip>
                    </el-form-item>
                    <el-form-item label="生效日期" label-width="100px">
                        <el-select placeholder="选择日期">
                            <el-option label="研发类" value="lidy"></el-option>
                            <el-option label="产品类" value="lidy2"></el-option>
                            <el-option label="设计类" value=""></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="期望到岗日期" label-width="100px">
                        <el-select placeholder="选择日期">
                            <el-option label="研发类" value="lidy"></el-option>
                            <el-option label="产品类" value="lidy2"></el-option>
                            <el-option label="设计类" value=""></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="select-multiple" label="标记" label-width="100px">
                        <el-select v-model="signSelectModel" ref="signSelect" placeholder="选择标记" multiple>
                            <el-option
                                v-for="item in selectOpt.sign"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-tooltip class="item" effect="dark" content="提示文字" placement="top">
                            <i class="iconfont icon-gantanhao"></i>
                        </el-tooltip>
                    </el-form-item>
                    <el-form-item class="select-multiple" label="招聘专员" label-width="100px">
                        <el-select v-model="recruiterSelectModel" ref="personSelect" placeholder="选择招聘人员" multiple>
                            <el-option
                                v-for="item in selectOpt.recruiter"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-tooltip class="item" effect="dark" content="提示文字" placement="top">
                            <i class="iconfont icon-gantanhao"></i>
                        </el-tooltip>
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
            <el-row>
                <el-col :span="16" class="text-left job-status">
                    <el-tooltip class="item" effect="dark" content="所有人可见" placement="top-start">
                        <el-button :type="addJob.addForm.jobStatus=='公开'?'primary':'default'" @click="changeJobStatus">
                            <i class="iconfont icon-zhengyan"></i>公开
                        </el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="不显示在招聘门户" placement="top-start">
                        <el-button :type="addJob.addForm.jobStatus=='对内'?'primary':'default'" @click="changeJobStatus">
                            <i class="iconfont icon-zhengyan"></i>对内
                        </el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="仅流程参与人员可见" placement="top-start">
                        <el-button :type="addJob.addForm.jobStatus=='保密'?'primary':'default'" @click="changeJobStatus">
                            <i class="iconfont icon-biyan"></i>保密
                        </el-button>
                    </el-tooltip>
                </el-col>
                <el-col :span="8">
                    <el-button @click="hideAddJobFrom">取 消</el-button>
                    <el-button type="primary" @click="hideAddJobFrom">发 布</el-button>
                </el-col>
            </el-row>
        </div>
    </el-dialog>
</template>

<script>
    import Vue from 'vue'
    import {mapActions, mapState} from 'vuex'
    import {
        Form, FormItem, Select, Option, Input, Row, Col, Checkbox, Button, Dialog, Radio, RadioGroup, RadioButton,
        OptionGroup, Tooltip
    } from 'element-ui'
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
    export default{
        name: 'AddJobDialog',
        data(){
            return {
                signSelectModel: [],
                recruiterSelectModel: [],
                radio3: '保密'
            }
        },
        computed: {
            ...mapState({
                addJob: ({jobs})=>jobs.addJob,
                selectOpt: ({jobs})=>jobs.selectOpt
            })
        },
        components: {},
        methods: {
            signSelectOnChange(value){
                console.log(value);
            },
            handleChangeJobStatus(e){

            },
            ...mapActions(['hideAddJobFrom','changeJobStatus'])
        }
    }
</script>
