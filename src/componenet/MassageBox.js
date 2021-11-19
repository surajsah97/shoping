import React, { Children } from 'react'

export const MassageBox = (props) => {
    console.log(props,Children);
    return (
        <div className={`alert alert-${props.variant||'info'}`}>
            {props.children}
        </div>
    )
}
