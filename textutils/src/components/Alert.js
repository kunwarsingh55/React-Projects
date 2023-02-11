import React from 'react'
export default function Alert(props) {
    return (
        <div className='container m-3' style={{height:'60px'}}>
    {props.message && <div class="alert alert-warning alert-dismissible fade show " role="alert">
            <strong>Holy guacamole!</strong> {props.message}
        </div>}
        </div>
    );
}