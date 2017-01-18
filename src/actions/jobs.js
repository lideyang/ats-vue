/**
 * Created by Lidy on 2017/1/13.
 */
import {
    JOBS_LIST, JOB_ADD, JOB_HIDE_ADD_FROM, JOB_SHOW_ADD_FROM, JOB_ALL_CHECK_TRIGGER, JOB_CHANGE_STATUS
} from "../constants/api";
import Api, {createAction} from "../utils/api";

const metaCreator = ({processIds}) =>({jobsIds: processIds.split(',')});

export default {
    addJob: createAction(JOB_ADD),
    showAddJobFrom: createAction(JOB_SHOW_ADD_FROM),
    hideAddJobFrom: createAction(JOB_HIDE_ADD_FROM),
    getJobsList: createAction(JOBS_LIST, Api.getJobs),
    allCheckListTrigger: createAction(JOB_ALL_CHECK_TRIGGER, event),
    changeJobStatus: createAction(JOB_CHANGE_STATUS, event)
}
