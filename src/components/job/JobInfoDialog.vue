<template>
    <el-dialog :title="jobInfo.data.Name" v-model="jobInfo.dialogJobInfoVisible" @open="showDialogJobInfo" @close="hideDialogJobInfo" class="dialog-info-job" size="full">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="职位状况" name="first">
                <div class="panel">
                    <el-row>
                        <el-col :span="20">
                            <div>
                                <h3 class="inline-block">{{jobInfo.data.Name}}</h3>
                                <span class="text-secondary">( 本科    3-5年经验    10k-18k)</span>
                            </div>
                            <p class="msg">
                                <i class="iconfont icon-home"></i><span>研发部</span>
                                <i class="iconfont icon-dingwei"></i><span>{{jobInfo.data.Description}} 南山区</span>
                                <i class="iconfont icon-user"></i><span>{{jobInfo.data.PublishUserName}}</span>
                                <span class="text-muted">由<span class="text-primary">lidy</span>发布于<span class="text-primary">2016-08-21</span></span>
                            </p>
                        </el-col>
                        <el-col :span="4">
                            <i class="iconfont icon-zhengyan"></i>
                        </el-col>
                    </el-row>
                </div>
                <div class="panel">
                    <el-row>
                        <el-col :span="20">
                            <p class="msg">
                                <span class="text-muted">由<span class="text-primary">lidy</span>发布于<span class="text-primary">2016-08-21</span></span><span>目前完成招聘量 0%</span>
                            </p>
                            <el-row class="process">
                                <el-col :span="4">
                                    <div class="step">
                                        <div class="inner">
                                            <i class="icon-yuan"></i>
                                            <span class="text-secondary">初筛 (30人)</span>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="step">
                                        <div class="inner">
                                            <i class="icon-yuan"></i>
                                            <span class="text-secondary">面试 (20人)</span>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="step">
                                        <div class="inner">
                                            <i class="icon-yuan"></i>
                                            <span class="text-secondary">拟定聘用 (10人)</span>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="step">
                                        <div class="inner">
                                            <i class="icon-yuan"></i>
                                            <span class="text-secondary">聘用 (4人)</span>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="step last">
                                        <div class="inner">
                                            <i class="icon-yuan"></i>
                                            <span class="text-secondary">入职 (6人)/ 需求人数 (6人)</span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="4">
                            <el-button>发布中</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="panel progress">
                    <el-row>
                        <el-col :span="2">
                            智联招聘
                        </el-col>
                        <el-col :span="12">
                            <el-progress :percentage="75"></el-progress>
                        </el-col>
                        <el-col :span="8" class="text-right">
                            <el-button>分发</el-button>
                            <el-button type="primary">刷新</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2">
                            51job
                        </el-col>
                        <el-col :span="12">
                            <el-progress :percentage="55"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2">
                            中华英才网
                        </el-col>
                        <el-col :span="12">
                            <el-progress :percentage="45"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2">
                            拉勾网
                        </el-col>
                        <el-col :span="12">
                            <el-progress :percentage="25"></el-progress>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="职位设置" name="second">
                职位设置
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script>
    import Vue from 'vue'
    import {mapActions, mapState} from 'vuex'
    import {
        Form, FormItem, Select, Option, Input, Row, Col, Checkbox, Button, Dialog, Radio, RadioGroup, RadioButton,
        OptionGroup, Tooltip, Tabs, TabPane,Progress
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
    Vue.component(Tabs.name, Tabs)
    Vue.component(TabPane.name, TabPane)
    Vue.component(Progress.name, Progress)
    export default{
        data() {
            return {
                activeName: 'first'
            };
        },
        computed: {
            ...mapState({
                jobInfo: ({jobs})=>jobs.jobInfo,
            })
        },
        methods: {
            signSelectOnChange(value){
                console.log(value);
            },
            handleChangeJobStatus(e){

            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            showDialogJobInfo(){
                this.setHeaderZIndex(99);
            },
            hideDialogJobInfo(){
                this.setHeaderZIndex(101);
            },
            ...mapActions(['hideJobInfoFrom', 'setHeaderZIndex'])
        }
    }
</script>
