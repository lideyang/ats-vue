<template>
    <div>
        <div class="jobs-list">
            <!--列表视图-->
            <ul v-if="jobsList.listView==='list'">
                <li v-for="item in jobsList.items">
                    <el-row>
                        <el-col :span="1" class="all-check">
                            <el-checkbox v-model="item.checked" name="check"></el-checkbox>
                        </el-col>
                        <el-col :span="19" class="info">
                            <div>
                                <h3 class="inline-block" @click="showJobInfoFrom(item.Id)">{{item.Name}}</h3>
                                <span class="text-secondary">( 本科    3-5年经验    10k-18k)</span><i class="iconfont icon-zhengyan"></i>
                            </div>
                            <p class="msg">
                                <i class="iconfont icon-home"></i><span>研发部</span>
                                <i class="iconfont icon-dingwei"></i><span>{{item.Description}} 南山区</span>
                                <i class="iconfont icon-user"></i><span>{{item.PublishUserName}}</span>
                                <span class="text-muted">由<span class="text-primary">lidy</span>发布于<span class="text-primary">2016-08-21</span></span>
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
                                            <i v-if="item.Status==2" class="iconfont icon-right"></i>
                                            <i v-if="item.Status==3" class="iconfont icon-gantanhao"></i>
                                            <span v-if="item.Status==2" class="text-success">已完成</span>
                                            <span v-if="item.Status==3" class="text-danger">即将过期</span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="4">
                            <div class="tags text-right">
                                <span class="tag">智</span>
                                <span class="tag">51</span>
                                <span class="tag">英</span>
                            </div>
                        </el-col>
                    </el-row>
                </li>
            </ul>
            <!--表格视图-->
            <el-table v-if="jobsList.listView==='table'" :data="jobsList.items" stripe>
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column v-for="column in jobsList.column" v-if="column.isShow" :prop="column.EN" :label="column.name">
                </el-table-column>
            </el-table>
        </div>
        <!--分页查询-->
        <el-pagination class="text-right"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="1"
                       :page-sizes="[10, 20, 50, 100]"
                       :page-size="20"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400">
        </el-pagination>
    </div>
</template>
<style>

</style>
<script>
    import Vue from 'vue'
    import {mapActions, mapState} from 'vuex'
    import {
        Form, FormItem, Select, Option, Input, Row, Col, Checkbox, Button, Pagination, Table, TableColumn
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
    Vue.component(Pagination.name, Pagination)
    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
    export default{
        name: 'PostingList',
        props: {
            items: Array,

            pageNo: {
                type: Number,
                default: 1
            },
            allChecked: {
                type: Boolean,
                default: false
            },
            pageSize: {
                type: Number,
                default: 10
            },
            total: {
                type: Number,
                default: 0
            },
            mode: {
                type: String,
                default: "multiple"
            }
        },
        data(){
            return {
                checkboxModel: true
            }
        },
        computed: {
            ...mapState({
                jobsList: ({jobs}) => jobs.jobsList,
                selectOpt: ({jobs})=>jobs.selectOpt
            })
        },
        methods: {

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            },
            doneJobInfo(jobId) {
                return this.$store.getters.doneJobInfo(jobId)
            },
            filterTableView(column){
                if(column.EN === 'StartDate' || column.EN === 'EndDate'){
                  return eval(column)
                }
            },
            ...mapActions(['showJobInfoFrom'])
        },
        components: {}
    }
</script>
