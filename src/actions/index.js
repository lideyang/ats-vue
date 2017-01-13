import rootActions from "./root";
import tasksActions from "./tasks";
import approvalsActions from "./approvals";
import usersActions from "./users";
import jobsActions from "./jobs";

export default {
    ...rootActions,
    ...jobsActions
}
