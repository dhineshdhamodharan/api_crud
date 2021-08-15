import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Product(props){

    const [productList,setProductList]=useState([])
    const [isLoading,setLoading]=useState(true)

    useEffect(async() => {
        try{
            let product=await axios.get("https://60f1550c38ecdf0017b0fbac.mockapi.io/Product");
            console.log(product.data)
            setProductList([...product.data])
            setLoading(false);
            console.log(product.data);
        }
        catch(error){
            console.log("Error");
            setLoading(false);
        }
    }, [])

    let handleDelete= async(id)=>{
        let confirm=window.confirm("Are you sure want to delete the product?")
        if(confirm){
            try{
                await axios.delete(`https://60f1550c38ecdf0017b0fbac.mockapi.io/Product/${id}`)
                let rowIndex=productList.findIndex(obj =>  obj.id==id)
                productList.splice(rowIndex,1);
                setProductList([...productList])
            }catch(error){
                console.log("Error");
            }
        }
    }
    
    return(
        <>
       
        <h1 class="h3 mb-2 text-gray-800">Products</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                            <Link to="/create-product" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
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
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Manufacture date</th>
                                            <th>Expiry date</th>
                                            <th>Product type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Manufacture date</th>
                                            <th>Expiry date</th>
                                            <th>Product type</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            isLoading ? <h3>Loading...</h3> :
                                            productList.map((product)=>{
                                                return <tr>
                                             <td>{product.id}</td>       
                                            <td>{product.productName}</td>
                                            <td>{product.price}</td>
                                            <td>{product.manufactureDate}</td>
                                            <td>{product.expirDate}</td>
                                            <td>{product.productType}</td>
                                            <td>
                                                <Link to={`/products/edit/${product.id}`}className="btn btn-sm btn-primary">Edit</Link>
                                                <button onClick={()=>handleDelete(product.id)} className="btn btn-sm btn-danger">Delete</button>
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
export default Product;