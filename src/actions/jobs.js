/**
 * Created by Lidy on 2017/1/13.
 */
import * as TYPE from "../constants/api";
import API, {createAction} from "../utils/api";

const metaCreator = ({processIds}) => ({jobsIds: processIds.split(',')});

export default {
    addJob: createAction(TYPE.JOB_ADD),//添加职位
    showAddJobFrom: createAction(TYPE.JOB_SHOW_ADD_FROM),//显示添加职位灯箱
    hideAddJobFrom: createAction(TYPE.JOB_HIDE_ADD_FROM),//隐藏添加职位灯箱
    getJobsList: createAction(TYPE.JOBS_LIST, API.getJobs),//获取职位列表返回promise
    allCheckListTrigger: createAction(TYPE.JOB_ALL_CHECK_TRIGGER, event),//全选列表
    allCheckListCities: createAction(TYPE.JOB_ALL_CHECK_CITIES, event),//不完全全选列表
    changeJobStatus: createAction(TYPE.JOB_CHANGE_STATUS, event), //改变职位的状态
    showJobInfoFrom: createAction(TYPE.JOB_INFO_SHOW, Number),//显示职位详情
    hideJobInfoFrom: createAction(TYPE.JOB_INFO_HIDE),//隐藏职位详情
    changeJobListView: createAction(TYPE.JOB_CHANGE_LIST_VIEW, event), //改变职位列表试图列表或者表格
    showMoreSearchLayer: createAction(TYPE.MORE_SEARCH_SHOW, event), //显示更多筛选条件
    hideMoreSearchLayer: createAction(TYPE.MORE_SEARCH_HIDE, event) //隐藏更多筛选条件
}
