/**
 * Created by Lidy on 2017/1/13.
 */
import {JOBS_LIST} from "../constants/api";

const state = {
    jobsList: {
        items: [],
        allChecked: false,
        pageSize: 10,
        pageNo: 1,
        totalCount: 0
    },
    addJob: {
        dialogAddJobsVisible: false,
        formLabelWidth: '80px',
        addForm: {
            jobName: 'web前端开发',
            obj: '兼职',
            sort: '社会招聘',
            jobNum: 1,
            money:0,
            area: [{
                label: '热门城市',
                options: [{
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Beijing',
                    label: '北京'
                }]
            }, {
                label: '城市名',
                options: [{
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }, {
                    value: 'Dalian',
                    label: '大连'
                }]
            }]
        }
    }
};
const mutations = {
    addJob(state){

    },
    showAddJobFrom(state){
        state.addJob.dialogAddJobsVisible = true;
    },
    hideAddJobFrom(state){
        state.addJob.dialogAddJobsVisible = false;
    },
    [JOBS_LIST](state, {payload}){
        console.log(payload);
        state.jobsList.items = payload;
        //state.jobsList.pageNo = payload.pageNo;
    },
    allCheckListTrigger (state, {payload}) {
        console.log(payload);
        state.jobsList.allChecked = !state.jobsList.allChecked
    }
};

export default{
    state,
    mutations
}
