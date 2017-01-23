/**
 * Created by Lidy on 2017/1/13.
 */
import {
    JOBS_LIST, JOB_ADD, JOB_HIDE_ADD_FROM, JOB_SHOW_ADD_FROM, JOB_ALL_CHECK_TRIGGER, JOB_CHANGE_STATUS, JOB_INFO_SHOW,
    JOB_INFO_HIDE,JOB_CHANGE_LIST_VIEW
} from "../constants/api";
import Api, {createAction} from "../utils/api";

const metaCreator = ({processIds}) =>({jobsIds: processIds.split(',')});

export default {
    addJob: createAction(JOB_ADD),//添加职位
    showAddJobFrom: createAction(JOB_SHOW_ADD_FROM),//显示添加职位灯箱
    hideAddJobFrom: createAction(JOB_HIDE_ADD_FROM),//隐藏添加职位灯箱
    getJobsList: createAction(JOBS_LIST, Api.getJobs),//获取职位列表返回promise
    allCheckListTrigger: createAction(JOB_ALL_CHECK_TRIGGER, event),//全选列表
    changeJobStatus: createAction(JOB_CHANGE_STATUS, event), //改变职位的状态
    showJobInfoFrom: createAction(JOB_INFO_SHOW, Number),//显示职位详情
    hideJobInfoFrom: createAction(JOB_INFO_HIDE),//隐藏职位详情
    changeJobListView: createAction(JOB_CHANGE_LIST_VIEW, event), //改变职位列表试图列表或者表格
}
