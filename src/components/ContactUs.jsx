import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaPhoneVolume} from 'react-icons/fa'
import {AiTwotoneMail} from 'react-icons/ai'

export default function ContactUs() {

    const contacts =[{
        icon :<FaMapMarkerAlt/>,
        h1:'Address',
        p: 'Jl. Gunung Kawi RT 01 RW 05, Kec.Besuki, Kab.Situbondo'
    },{
        icon : <FaPhoneVolume/>,
        h1:'Phone',
        p : '507-475-60045-6024'
    },{
        icon:<AiTwotoneMail/>,
        h1 : 'Email',
        p:'auro@gmail.com'
    }]
    return (
        <div className="main-container-contact-us py-4">
            <div className=" text-center">
                <h1 className="py-2 title ">Contact <span style={{color:"rgb(153, 113, 113)"}}>Us</span></h1>
            </div>

            <div className="container-contact-us">
                <div className="c-info-contact">
                    {
                        contacts.map((contact,i)=>(
                            <div key={i} className="info-contact">
                                <div className='contact-icon me-2'>
                                    {contact.icon}
                                </div>
                                <div className='text-contact'>
                                    <div className='fs-4'>{contact.h1}</div>
                                    <div>{contact.p}</div>
                                </div>
                            </div>
                        ))
                    }



                </div>

                <div className="c-send-message">
                    <div className='group-inp'>
                        <input placeholder='Fullname' className='inp-msg'/>
                    </div>
                    <div className='group-inp'>
                        <input placeholder='Email' className='inp-msg'/>
                    </div>
                    <div className='group-inp'>
                        <textarea placeholder='Message' className='inp-msg'>

                        </textarea>
                    </div>
                    <button className='btn btn-dark btn-send-msg'>Send Mesage</button>
                </div>
            </div>
        </div>
    )
}
