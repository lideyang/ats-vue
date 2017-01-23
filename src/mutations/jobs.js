/**
 * Created by Lidy on 2017/1/13.
 */
import {
    JOBS_LIST, JOB_ADD, JOB_HIDE_ADD_FROM, JOB_SHOW_ADD_FROM, JOB_ALL_CHECK_TRIGGER, JOB_CHANGE_STATUS, JOB_INFO_SHOW,
    JOB_INFO_HIDE, JOB_CHANGE_LIST_VIEW
} from "../constants/api";

const state = {
    jobsList: {
        items: [],
        column: {
            "Name": {
                "name": "职位名称",
                "EN": "Name",
                "isShow": true
            },
            "Code": {
                "name": "职位编码",
                "EN": "Code",
                "isShow": true
            },
            "PublishUserName": {
                "name": "发布者",
                "EN": "PublishUserName",
                "isShow": true
            },
            "RecruiterName": {
                "name": "招聘专员",
                "EN": "RecruiterName",
                "isShow": true
            },
            "ReceiveEmail": {
                "name": "接收简历邮箱",
                "EN": "ReceiveEmail",
                "isShow": true
            },
            "DeptName": {
                "name": "部门",
                "EN": "DeptName",
                "isShow": false
            },
            "Number": {
                "name": "需求人数",
                "EN": "Number",
                "isShow": true
            },
            "StartDate": {
                "name": "开始时间",
                "EN": "StartDate",
                "isShow": true
            },
            "EndDate": {
                "name": "结束时间",
                "EN": "EndDate",
                "isShow": true
            }
        },
        listView: 'list',
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
            money: 0,
            jobStatus: '公开'
        }
    },
    jobInfo: {
        dialogJobInfoVisible: false,
        data: {}
    },
    selectOpt: {
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
        }],
        sign: [
            {
                value: '1',
                label: '无敌'
            }, {
                value: '2',
                label: '寂寞'
            }, {
                value: '3',
                label: '巅峰'
            }, {
                value: '4',
                label: '空虚'
            }
        ],
        recruiter: [
            {
                value: '1',
                label: '孙大炮'
            }, {
                value: '2',
                label: '马家军'
            }, {
                value: '3',
                label: '杀马特'
            }, {
                value: '4',
                label: '吊炸天'
            }, {
                value: '5',
                label: 'EXO'
            }
        ]
    }
};
const mutations = {
    [JOB_ADD](state){

    },
    [JOB_SHOW_ADD_FROM](state, {payload}){
        state.addJob.dialogAddJobsVisible = true;
    },
    [JOB_HIDE_ADD_FROM](state, {payload}){
        state.addJob.dialogAddJobsVisible = false;
    },
    [JOBS_LIST](state, {payload}){
        payload.forEach(function(item){
            item.checked = false;
            // item.StartDate && eval(item.StartDate)
            // item.EndDate && eval(item.EndDate)
        })
        state.jobsList.items = payload;
        //state.jobsList.pageNo = payload.pageNo;
    },
    [JOB_ALL_CHECK_TRIGGER] (state, {payload}) {
        let isChecked = state.jobsList.allChecked = !state.jobsList.allChecked;
        state.jobsList.items.forEach(function(item){
            item.checked = isChecked;
        })
    },
    [JOB_CHANGE_STATUS](state, {payload}){
        state.addJob.addForm.jobStatus = payload.currentTarget.innerText
    },
    [JOB_INFO_SHOW](state, {payload}){
        console.log(payload);
        let data = state.jobsList.items.filter(job=>job.Id === payload);
        if(data.length){
            state.jobInfo.data = data[0];
        }
        state.jobInfo.dialogJobInfoVisible = true;
    },
    [JOB_INFO_HIDE](state){
        state.jobInfo.dialogJobInfoVisible = false;
    },
    [JOB_CHANGE_LIST_VIEW](state, {payload}){
        state.jobsList.listView = payload.currentTarget.getAttribute('data-type');
    }
};
const getters = {
    doneJobInfo: (state, jobId) =>{
        console.log(jobId);
        return state.jobsList.items.filter(job=>job.Id === jobId)
    }
}
export default{
    state,
    mutations,
    getters
}
