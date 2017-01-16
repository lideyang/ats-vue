/**
 * Created by Lidy on 2017/1/13.
 */
import {JOBS_LIST} from "../constants/api";
import Api, {createAction} from "../utils/api";

const metaCreator = ({processIds}) =>({jobsIds: processIds.split(',')});

export default {
    addJob: createAction('addJob'),
    showAddJobFrom:createAction('showAddJobFrom'),
    hideAddJobFrom:createAction('hideAddJobFrom'),
    getJobsList: createAction(JOBS_LIST, Api.getJobs),
    allCheckListTrigger: createAction('allCheckListTrigger', event)
}
