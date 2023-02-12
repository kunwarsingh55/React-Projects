import React, { Component } from 'react';
import loading from './homer.gif'; 

export default class Spinner extends Component {
    render() {
        return (
            <>
            <div className='col text-center'>
            <img src = {loading} height="100"></img>
            <div>Loading...</div>
            </div>
            </>
            
        )
    }
}