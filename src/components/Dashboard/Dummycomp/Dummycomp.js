import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import './Dummycomp.css'

const Dummycomp = () => {
    return (
        <div>
            <div className="Dummy-block">
                <p className="block-para">Let's talk with us about bussiness & IT Solution</p>
                <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin ">
                    <button><MailOutlineIcon/>&nbsp;&nbsp;Get in Touch</button></a>
                <a href="#footer-container"><button><CallIcon/>&nbsp;&nbsp;Contact Us</button></a>
            </div>
        </div>
    )
}

export default Dummycomp
