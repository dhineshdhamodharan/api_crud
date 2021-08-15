import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Users(){
    const [userList,setUserList]=useState([])
    const [isLoading,setLoading]=useState(true)

    useEffect(async() => {
        try{
            let user=await axios.get("https://60f1550c38ecdf0017b0fbac.mockapi.io/user");
            console.log(user.data)
            setUserList([...user.data])
            setLoading(false);
        }
        catch(error){
            console.log("Error");
            setLoading(false);
        }
    }, [])

     let handleDelete=async(id)=>{
         let confirm=window.confirm("Are you sure to delete the user?")
         if(confirm){
             try {
                 await axios.delete(`https://60f1550c38ecdf0017b0fbac.mockapi.io/user/${id}`)
                 let rowIndex=userList.findIndex(obj=>obj.id==id);
                 userList.splice(rowIndex,1)
                 setUserList([...userList])
                 
             } catch (error) {
                 
             }
         }
      
    } 
    
    return(
        <>
       
        <h1 class="h3 mb-2 text-gray-800">Users</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                            <Link to="/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create user</Link>
        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Register Number</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Register Number</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            isLoading ? <h3>Loading...</h3> :
                                            userList.map((user)=>{
                                                return <tr>
                                             <td>{user.id}</td>       
                                            <td>{user.userName}</td>
                                            <td>{user.position}</td>
                                            <td>{user.office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.registernumber}</td>
                                            <td>{user.salary}</td>
                                            <td>
                                                <Link to={`/users/edit/${user.id}`}className="btn btn-sm btn-primary">Edit</Link>
                                                <button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </>
    )
}
export default Users;