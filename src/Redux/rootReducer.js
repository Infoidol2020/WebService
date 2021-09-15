import { combineReducers } from "redux"
import ServicesReducers from "./Service/ServicesReducers"
import TeamMemberReducer from "./TeamMember/TeamMemberReducers"
import IndustriesReducer from "./ProjectIndustries/ProjectIndustriesReducers"

const rootReducer = combineReducers({
    ServicesReducers:ServicesReducers,
    TeamMemberReducers:TeamMemberReducer,
    Industries: IndustriesReducer
})
export default rootReducer
