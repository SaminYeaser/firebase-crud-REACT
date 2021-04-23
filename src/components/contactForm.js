import react, {useEffect, useState} from 'react'
const ContactForm = (props) => {
    const initialVlaues = {
        fullName:'',
        mobile:'',
        email:'',
        address:''
    }
    var [values,setValues] = useState(initialVlaues)

    // for store the data in form input

    const handleInputChange = (e)=>{
        var { name, value }=e.target
        setValues({
            ...values,
            [name]: value 
        })
    }

    //stroing the whole form in firebase

    const handleFormSubmit =(e)=>{
        e.preventDefault()
        props.addOrEdit(values)
    }

    return ( 
        <div>
            <form autoComplete="off" action="" onSubmit={handleFormSubmit}>

                {/* fullname section */}

                <div className='form-group input-group'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i className='fas fa-user'></i>
                        </div>
                    </div>
                    <input className='form-control' placeholder='Full Name' name='fullName' value={values.fullName} onChange={handleInputChange} type="text"/>
                </div>

                {/* full row for email and phone */}

                <div className='form-row'>
                    <div className='form-group input-group col-md-6'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text'>
                                <i className='fas fa-mobile-alt'></i>
                            </div>
                        </div>
                        <input className='form-control' placeholder='Mobile' name='mobile' value={values.mobile} onChange={handleInputChange} type="text"/>
                    </div>

                    {/* for email section */}

                    <div className='form-group input-group col-md-6'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text'>
                                <i className='fas fa-envelop'></i>
                            </div>
                        </div>
                        <input className='form-control' placeholder='Email' name='email' value={values.email} onChange={handleInputChange} type="text"/>
                    </div>
                </div>

                 {/* for address section */}

                 <div className='form-group'>
                        <textarea className='form-control' placeholder='Address' name="address" id="" cols="30" rows="10" value={values.address} onChange={handleInputChange}></textarea>
                    </div>

                    {/* for button */}

                    <div className='form-group'>
                        <input type="submit" value='Save' className='btn btn-primary btn-block'/>
                    </div>
            </form>
        </div>
     );
}
 
export default ContactForm;