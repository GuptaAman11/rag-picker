import { useState } from 'react';
import React  from 'react';
import './userprofile.css';

const Userprofile = () => {
    const [userprofiledetail, setuserprofiledetail] = useState("");
    const handleOnChange = (e)=>{
        setuserprofiledetail({
            ...userprofiledetail,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault();
    }
    console.log(userprofiledetail);
    return (
        <div className="u-container">
           <div className="u-sub-container">
            <div className="u-main-content">
                <header className='u-header'>
                    <div>
                        <h1>Profile</h1>
                    </div>
                    <div>
                        <button className="u-btn-login">Login</button>
                        <button className="u-btn-create-account">Create account</button>
                    </div>
                </header>
                <div className="u-profile-content">
                    <div className="u-profile-picture-section">
                        <h2>Profile Picture</h2>
                        <p>Upload a picture to make your profile stand out and let people recognize your comments and contributions easily!</p>
                        <div className="u-profile-picture">
                            <img src="https://via.placeholder.com/80" alt="Profile Picture" />
                        </div>
                        <p>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 4 MB</p>
                    </div>
                    <div className="u-account-information-section ">
                       
                        <h2>Account Information</h2>
                        <p>Edit your personal information and address.</p>
                        <form className='u-form' onSubmit={handleOnSubmit}>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" defaultValue="Jitu" onChange={handleOnChange}/>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" defaultValue="Chauhan" onChange={handleOnChange}/>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" defaultValue="+1 4XX XXX XXXX" onChange={handleOnChange} />
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" id="birthday" name="birthday" onChange={handleOnChange}/>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Userprofile;
