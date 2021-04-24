import React,{ useState, useEffect } from 'react'
import ContactForm from './contactForm'
import firebaseDB from '../firebase'
const Contact = () => {

    var [contactObject, setContactObject] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(()=>{
        firebaseDB.child('contacts').on('value', snapshot=>{
            if(snapshot.val() != null){
                setContactObject({
                    ...snapshot.val()
                })
            }
        })
    },[])

    //adding data in firebase

    const addOrEdit = (obj)=>{
        firebaseDB.child('contacts').push(obj, (err)=>{
            if(err){
                console.log(err)
            }
        })
    }

    return ( 
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-5'>
                    <ContactForm {...({addOrEdit,currentId,contactObject})}/>
                </div>
                <div className='col-md-7'>
                    <table className='table table-borderless table-stripped'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                {/* <th>Address</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObject).map((i)=>{
                                    return <tr key={i}>
                                        <td>{contactObject[i].fullName}</td>
                                        <td>{contactObject[i].mobile}</td>
                                        <td>{contactObject[i].email}</td>
                                        {/* <td>{contactObject[i].address}</td> */}
                                        <td>
                                            <a className='btn btn-primary' 
                                            onClick={()=>{setCurrentId(i)}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className='btn btn-danger'>
                                                <i className="fas fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default Contact;
