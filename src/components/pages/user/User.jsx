import React from 'react';
import "./User.css"
import {
  PersonOutlineOutlined,
  MailOutlineOutlined,
  PinDropOutlined,
  EventOutlined,
  PhoneAndroidOutlined,
  CloudUploadOutlined
} from '@material-ui/icons'

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <button className="userAddBtn">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              alt="" className="userShowImg"/>
           <div className="userShowTitle">
             <h3 className="userShowTopUsername">Samartseva Alena</h3>
             <span className="userShowTopTitle">Software Engineer</span>
           </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowBottomTitle">Account Details</span>
            <div className="userShowInfo">
              <PersonOutlineOutlined className="userShowIcon"/>
              <span className="userShowInfoContent">alena555</span>
            </div>
            <div className="userShowInfo">
              <EventOutlined className="userShowIcon"/>
              <span className="userShowInfoContent">10.12.1999</span>
            </div>
            <span className="userShowBottomTitle">Contact</span>
            <div className="userShowInfo">
              <PhoneAndroidOutlined className="userShowIcon"/>
              <span className="userShowInfoContent">+1 928 374 191</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineOutlined className="userShowIcon"/>
              <span className="userShowInfoContent">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <PinDropOutlined className="userShowIcon"/>
              <span className="userShowInfoContent">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="alena555"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="alena555"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="fullname">Full name</label>
                <input type="text" placeholder="Alena Samartseva"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Email</label>
                <input type="email" placeholder="email"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="phone">Phone</label>
                <input type="tel" placeholder="+971 5858 30 841"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="alena555"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Address</label>
                <input type="text" placeholder="New York | USA"/>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" className="userUploadImg"/>
                <label htmlFor="userUpdateUploadLabel">
                  <span className="userUploadBtn">
                    <CloudUploadOutlined className="userUploadIcon"/>
                      Upload photo
                  </span>
                   </label>
                <input type="file" id="userUpdateUploadLabel" style={{display: "none"}}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;