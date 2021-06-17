import React from 'react';
import {Notifications, Public, Settings} from '@material-ui/icons';
import './Topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">
     <div className="topbarWrapper">
       <div className="topLeft">
        <span className="logo">
          Samartsev
        </span>
       </div>
       <div className="topRight">
         <div className="topbarIconContainer">
           <Notifications />
           <span className="topbarIconBadge">2</span>
         </div>
         <div className="topbarIconContainer">
           <Public />
           <span className="topbarIconBadge">2</span>
         </div>
         <div className="topbarIconContainer">
           <Settings />
           <span className="topbarIconBadge">2</span>
         </div>
         <img src="https://i.ibb.co/f1VLV6B/igor.png" alt="" className="topbarAvatar"/>
       </div>
     </div>
    </div>
  );
};

export default Topbar;