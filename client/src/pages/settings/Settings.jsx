import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingPP">
                        <img
                            className=""
                            src=""
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Ky dep trai"/>
                    <label>Email</label>
                    <input type="email" placeholder="email@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>

        </div>
    )
}
