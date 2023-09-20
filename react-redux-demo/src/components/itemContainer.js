import React from 'react'
import { connect } from 'react-redux'

function ItemContainer(props) {
  return (
    <div>
        <h2>Number of items - {props.item}</h2>
    </div>
  )
}
const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake?state.cake.numOfCakes:state.icecream.numOfIcecreams
  return{
    item:itemState
  }
}


export default connect(mapStateToProps)(ItemContainer)