/**
 * Created by Lidy on 2017/1/13.
 */
import {JOBS_LIST} from "../constants/api";

const state = {
    jobsList: {
        items: [],
        pageSize: 10,
        pageNo: 1,
        totalCount: 0
    }
};
const mutations = {

    [JOBS_LIST](state, {payload}){
        console.log(payload);
        state.jobsList.items = payload;
        //state.jobsList.pageNo = payload.pageNo;
    }
};

export default{
    state,
    mutations
}
