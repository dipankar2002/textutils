import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
      {props.alert &&  <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.ty}</strong> - {props.alert.mes}
      </div>}
    </div>
  )
}
