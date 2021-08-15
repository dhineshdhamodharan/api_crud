import React, { useEffect } from 'react'
import react, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios";
function Edituser(props) {
    
  const history=useHistory()
  const [userName,setuserName]=useState("");
  const [position,setPosition]=useState("");
  const [office,setOffice]=useState("");
  const [age,setAge]=useState("");
  const [registernumber,setregisterNumber]=useState("");
  const [salary,setSalary]=useState("");
  const [isLoading,setLoading]=useState(false)


    useEffect(async()=>{
      try {
        let userData =await axios.get(`https://60f1550c38ecdf0017b0fbac.mockapi.io/user/${props.match.params.id}`);
        console.log(userData);
        setuserName(userData.data.userName);
        setPosition(userData.data.position);
        setOffice(userData.data.office);
        setAge(userData.data.age);
        setregisterNumber(userData.data.registernumber);
        setSalary(userData.data.salary);
      } catch (error) {
        console.log("error");
      }
    }, [])

    let handleSubmit=async(e)=>
    {
      e.preventDefault();
      try {
        setLoading(true);
        await axios.put(`https://60f1550c38ecdf0017b0fbac.mockapi.io/user/${props.match.params.id}`,{userName,position,office,age,registernumber,salary}) 
        setLoading(false);
        history.push("/users")
      } catch (error) {
        console.log("Error");
        setLoading(false);
        
      }
    }

    return (
        <div>
             <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Edit user</h1>
                    </div>
              <div className="container">
                  <form onSubmit={handleSubmit}>
                      <div className="row">
                          <div className="col-lg-6">
                            <label>Username</label>
                          <input type="text" value={userName} onChange={(e)=>{setuserName(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Position</label>
                          <input type="text" value={position} onChange={(e)=>{setPosition(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Office</label>
                          <input type="text" value={office} onChange={(e)=>{setOffice(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Age</label>
                          <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Register Number</label>
                          <input type="text" value={registernumber} onChange={(e)=>{setregisterNumber(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Salary</label>
                          <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-12 mt-3">     
                          <input type="submit" value="Update" className="btn btn-primary" disabled={isLoading}/>
                          </div>
                      </div>
                  </form>
                  </div>      
        </div>
    )
}
export default Edituser
