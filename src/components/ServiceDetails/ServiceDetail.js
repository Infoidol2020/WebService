import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { hitsubServiceAPI } from '../../Redux/SubService'


const ServiceDetail = (props) => {

    console.log('detailpage',props)

    useEffect (() => {
        props.hitsubServiceAPI(sessionStorage.getItem('service_id'))
    },[])

    return (
        <div style={{background:'yellow'}}>
            
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
