/**
 * Created by Lidy on 2017/1/13.
 */
import {JOBS_LIST} from "../constants/api";
import Api, {createAction} from "../utils/api";

const metaCreator = ({processIds}) =>({taskIds: processIds.split(',')});

export default {

    getJobs: createAction(JOBS_LIST, Api.getJobs),

}
