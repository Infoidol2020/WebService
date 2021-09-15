import { combineReducers } from "redux"
import ServicesReducers from "./Service/ServicesReducers"
import TeamMemberReducer from "./TeamMember/TeamMemberReducers"
import IndustriesReducer from "./ProjectIndustries/ProjectIndustriesReducers"
import SubServiceReducers from "./SubService/SubServiceReducers"

const rootReducer = combineReducers({
    ServicesReducers:ServicesReducers,
    TeamMemberReducers:TeamMemberReducer,
    Industries: IndustriesReducer,
    SubService:SubServiceReducers,
})
export default rootReducer
