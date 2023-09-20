import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream,buyCake } from '../redux'

function ItemContainer(props) {
  return (
    <div>
        <h2>Number of items - {props.item}</h2>
        <button onClick={props.buyItem}>buy item</button>
    </div>
  )
}
const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake?state.cake.numOfCakes:state.icecream.numOfIcecreams
  return{
    item:itemState
  }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
const dispatchedfunction = ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIcecream())
  return{
    buyItem:dispatchedfunction
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)