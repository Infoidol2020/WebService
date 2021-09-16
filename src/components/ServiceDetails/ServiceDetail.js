import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { hitsubServiceAPI } from '../../Redux/SubService'
import NavBar from '../Dashboard/Navbar/NavBar'
import Banner from './Banner/Banner'
import ServiceOverView from './ServiceOverview/ServiceOverview'


const ServiceDetail = (props) => {

    console.log('detailpage',props)

    useEffect (() => {
        props.hitsubServiceAPI(sessionStorage.getItem('service_id'))
    },[])

    return (
        <div>
            <NavBar/>
            <Banner {...props}/>
            <ServiceOverView {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
    return{
    SubService:state
    }
    }
    const mapDispatchToProps = dispatch => {
    return {
        hitsubServiceAPI : (service_id) => dispatch(hitsubServiceAPI(service_id))
    }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail)
