import { Grid, Typography } from "@mui/material";
import { connect } from 'react-redux';
import { getAllUsers } from "../../Store/Actions/LoginAction";
import { useEffect, useState } from 'react';
import { VerifiedUser } from "@mui/icons-material";
import DashboardSection from "./DashboardSection";
let arr = [1,2,3,4,5,6,7];

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers : () => dispatch(getAllUsers()),
    }
}

const mapStateToProps = (state) => {
    return {
        allUsers: state.Login.allUsers,
        currentUserDetails: state.Login.currentUserDetails,
        isLoading: state?.Loader?.showLoader
    }
}

const AdminDashboard =(props)=>{
    const [loader, setLoader] = useState(false);
    const[users, setUsers] = useState(null);


    useEffect(() => {
        setLoader(true)
        console.log("user is ",props.currentUserDetails);
        if(props.currentUserDetails&&props.currentUserDetails.roles&&props.currentUserDetails.roles.includes("admin")){
            props.getUsers();
            // setUsers(userResult);
            // console.log("users ",userResult);
        }
        setLoader(false);
        },[]);
        
    
return(
    <div id="adminDashboard" className="dashboard-main">
         <DashboardSection title="User Details" selector={false} content={
              <Grid container style={{display: "flex",  alignItems:'center'}}>
              {props.allUsers!==null&&props.allUsers.map((user)=>
                  <Grid item container md={3} style={{display: "flex", flexDirection:"row", padding:16, margin: 4,border:'1px solid', borderColor:'rgb(3, 72, 48)', borderRadius:4}}>
                      <Grid item container md={2} style={{display: "flex", flexDirection:"column" }}>
                      <VerifiedUser/>
                      </Grid>
                      <Grid item container md={10}>
                      <Grid item container md={12} style={{display: "flex", flexDirection:"column", }}>
                  <Grid item>
                      <Typography>{"Name: "+user.firstName + " " + user.lastName}</Typography>
                  </Grid>
                  
                      
                  </Grid>
                  <Grid item container md={12} style={{display: "flex", flexDirection:"column"}}>
                  <Grid item>
                      <Typography>{"Email: "+user.email}</Typography>
                  </Grid>
                  
                      
                  </Grid>
                          </Grid>
                 
                  </Grid>
              
              )}
              </Grid> }/>
      
        
    
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);