import React, {useEffect} from "react"
import Smurf from "./Smurf"
import {connect} from "react-redux"
import { fetchSmurfs } from "../actions/actions"

const SmurfList = (props) => {

    useEffect(() => {
        props.fetchSmurfs()
        console.log(props.smurfs)
    }, [])

    return (
        <div className="smurfList">
            {props.smurfs.map((smurf, index) => {
                return <Smurf smurf={smurf} key={index}/>
            })}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList) 