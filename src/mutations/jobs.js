/**
 * Created by Lidy on 2017/1/13.
 */
import * as TYPE from "../constants/api";
import {formatTime} from '../utils/tools'
const state = {
    jobsList: {
        items: [],
        column: [],
        listView: 'list',
        allChecked: false,
        isIndeterminate: false,
        pageSize: 10,
        pageNo: 1,
        totalCount: 0
    },
    searchCriteria: {
        isShow: false,
        jobStatus: '',
        jobName: '',
        recruiter: ''
    },
    addJob: {
        dialogAddJobsVisible: false,
        formLabelWidth: '80px',
        addForm: {}
    },
    jobInfo: {
        dialogJobInfoVisible: false,
        data: {}
    },
    selectOpt: {}
};
const mutations = {
    [TYPE.JOB_ADD](state){

    },
    [TYPE.JOB_SHOW_ADD_FROM](state, {payload}){
        state.addJob.dialogAddJobsVisible = true;
    },
    [TYPE.JOB_HIDE_ADD_FROM](state, {payload}){
        state.addJob.dialogAddJobsVisible = false;
    },
    [TYPE.JOBS_LIST](state, {payload}){
        console.log(payload.List);
        payload.List.forEach(function(item){
            item.checked = false;
            item.StartDate = formatTime(item.StartDate);
            item.EndDate = formatTime(item.EndDate);
        })
        state.jobsList.items = payload.List;
        state.jobsList.column = payload.Column;
        state.addJob.addForm = payload.AddForm;
        state.selectOpt = payload.SelectOpt;
    },
    [TYPE.JOB_ALL_CHECK_TRIGGER] (state, {payload}) {
        let isChecked = state.jobsList.allChecked;
        state.jobsList.isIndeterminate = false;
        state.jobsList.items.forEach(function(item){
            item.checked = isChecked;
        })
    },
    [TYPE.JOB_ALL_CHECK_CITIES] (state, {payload}) {
        let checkedCount = 0;
        state.jobsList.items.forEach(function(item){
            if(item.checked === true){
                checkedCount++;
            }
        })
        state.jobsList.allChecked = checkedCount === state.jobsList.items.length;//全部选中
        state.jobsList.isIndeterminate = checkedCount > 0 && checkedCount < state.jobsList.items.length //部分选中为true
    },
    [TYPE.JOB_CHANGE_STATUS](state, {payload}){
        state.addJob.addForm.jobStatus = payload.currentTarget.innerText
    },
    [TYPE.JOB_INFO_SHOW](state, {payload}){
        console.log(payload);
        let data = getters.doneJobInfo(state, payload);
        if(data.length){
            state.jobInfo.data = data[0];
        }
        state.jobInfo.dialogJobInfoVisible = true;
    },
    [TYPE.JOB_INFO_HIDE](state){
        state.jobInfo.dialogJobInfoVisible = false;
    },
    [TYPE.JOB_CHANGE_LIST_VIEW](state, {payload}){
        state.jobsList.listView = payload.currentTarget.getAttribute('data-type');
    },
    [TYPE.JOB_CHANGE_Table_VIEW_COLUMN](state, payload){
        console.log(payload);
    },
    [TYPE.MORE_SEARCH_SHOW](state, {payload}){
        state.searchCriteria.isShow = true;
    },
    [TYPE.MORE_SEARCH_HIDE](state){
        state.searchCriteria.isShow = false;
    },
};
const getters = {
    doneJobInfo: (state, jobId) =>{
        return state.jobsList.items.filter(job => job.Id === jobId)
    }
}
export default{
    state,
    mutations,
    getters
}
