import react, {useEffect, useState} from 'react'
const ContactForm = () => {
    const initialVlaues = {
        fullName:'',
        mobile:'',
        email:'',
        address:''
    }
    var [values,setValues] = useState(initialVlaues)
    return ( 
        <div>
            <form autoComplete="off" action="">
                <div className='form-group input-group'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i className='fas fa-user'></i>
                        </div>
                    </div>
                    <input className='form-control' placeholder='Full Name' name='fullName' value={values.fullName} type="text"/>
                </div>
                <div className='form-row'>
                <div className='form-group input-group col-md-6'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i className='fas fa-mobile-alt'></i>
                        </div>
                    </div>
                    <input className='form-control' placeholder='Mobile' name='mobile' value={values.mobile} type="text"/>
                </div>
                <div className='form-group input-group col-md-6'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i className='fas fa-envelop'></i>
                        </div>
                    </div>
                    <input className='form-control' placeholder='Email' name='email' value={values.email} type="text"/>
                </div>
                </div>
            </form>
        </div>
     );
}
 
export default ContactForm;