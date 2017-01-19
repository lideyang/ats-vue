if(__DEV__){
    window.config && (window.config = {
        context: 'http://localhost:2618/api',
        currentUser: 'lidy'
    });
}

const getApi = (url) => `${window.config.context}/${url}`;

export const CODE_SUCCESS = 200;

//翻译action
export const JOBS_LIST = getApi('Job/QueryJobManagerPaging');
export const JOB_ADD = 'job/add';
export const JOB_SHOW_ADD_FROM = 'job/showAddJobFrom';
export const JOB_HIDE_ADD_FROM = 'job/hideAddJobFrom';
export const JOB_ALL_CHECK_TRIGGER = 'job/allCheckListTrigger';
export const JOB_CHANGE_STATUS = 'job/changeStatus';
export const JOB_INFO_SHOW = 'job/showJobInfo';
export const JOB_INFO_HIDE = 'job/hideJobInfo';




