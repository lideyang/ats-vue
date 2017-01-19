import {SHOW_PAGE_LOADING, HIDE_PAGE_LOADING, GET_CURRENT_USER, SET_HEADER_Z_INDEX} from "../constants/actions";

const state = {
    pageLoading: false,
    currentUser: 'anonymous',
    headerDOM: {
        zIndex: 101
    }
};
const mutations = {

    [SHOW_PAGE_LOADING](state){
        state.pageLoading = true;
    },

    [HIDE_PAGE_LOADING](state){
        state.pageLoading = false;
    },

    [GET_CURRENT_USER](state){
        var user = window.config && window.config.currentUser;
        user && ( state.currentUser = user);
    },
    [SET_HEADER_Z_INDEX](state, {payload}){
        console.log(payload);
        state.headerDOM.zIndex = payload
    }

};

export default{
    state,
    mutations
}
