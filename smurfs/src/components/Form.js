import React, {useState} from "react";
import {connect} from "react-redux";
import {addSmurf} from "../actions/actions";
import styled from 'styled-components'

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }

    const handleChanges = (e) => {
        let name = e.target.name;

        setNewSmurf({ ...newSmurf, [name] : e.target.value})
    }

    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="name" onChange={handleChanges}></input>
                <input name="age" type="number" placeholder="age" onChange={handleChanges}></input>
                <input name="height" type="number" placeholder="height" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>Build A Smurf</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(Form) 