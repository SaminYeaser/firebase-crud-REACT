import React,{ useState, useEffect } from 'react'
import ContactForm from './contactForm'
import firebaseDB from '../firebase'
const Contact = () => {

    

    const addOrEdit = (obj)=>{
        firebaseDB.child('contacts').push(obj, (err)=>{
            if(err){
                console.log(err)
            }
        })
    }

    return ( 
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-5'>
                    <ContactForm addOrEdit={addOrEdit}/>
                </div>
                <div className='col-md-7'>
                    <table className='table table-borderless table-stripped'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default Contact;
