import { connect } from 'react-redux'
import React ,{ useEffect }from 'react'
import { fetchUsers } from '../redux/user/userActions'

function UserContainerNew({userData,fetchUsers}) {
  useEffect(()=>{
    fetchUsers()
  },[])
  return userData.loading?(
    
    <div>loading</div>
  ):userData.error?(
    
    <div>{userData.error}</div>
  ):(
    <div>
      <h2>User</h2>
      <div>
        {userData && userData.users &&userData.users.map((user)=><p>{user.name}</p>)}
      </div>
    </div>
  )
}
const mapStateToProps = state =>{
  return{
    userData:state.user
  }
}

const mapDispatchToprops = dispatch =>{
  return{
    fetchUsers:()=>dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToprops)(UserContainerNew)