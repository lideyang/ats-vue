<template>
    <el-dialog v-model="jobInfo.dialogJobInfoVisible" @open="showDialogJobInfo" class="dialog-add-job" size="full">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="职位状况" name="first">
                用户管理
            </el-tab-pane>
            <el-tab-pane label="职位设置" name="second">
                配置管理
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script>
    import Vue from 'vue'
    import {mapActions, mapState} from 'vuex'
    import {
        Form, FormItem, Select, Option, Input, Row, Col, Checkbox, Button, Dialog, Radio, RadioGroup, RadioButton,
        OptionGroup, Tooltip, Tabs, TabPane
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

            },
            ...mapActions(['hideJobInfoFrom', 'setHeaderZIndex'])
        }
    }
</script>
