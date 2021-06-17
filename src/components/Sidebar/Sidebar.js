import React from 'react';
import {
  Apps,
  Timeline,
  Receipt,
  PeopleAlt,
  LibraryBooks,
  LocalAtm,
  BarChart,
  MailOutline,
  Message,
  DynamicFeed,
  Report,
  WorkOutline
} from '@material-ui/icons';

import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarListMenu">
            <li className="sideBarListItem active">
              <Apps className="sidebarIcon"/>
              Home
            </li>
            <li className="sideBarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sideBarListItem">
              <Receipt className="sidebarIcon"/>
              Receipt
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarListMenu">
            <li className="sideBarListItem">
              <PeopleAlt className="sidebarIcon"/>
              Users
            </li>
            <li className="sideBarListItem">
              <LibraryBooks className="sidebarIcon"/>
              Products
            </li>
            <li className="sideBarListItem">
              <LocalAtm className="sidebarIcon"/>
              Transactions
            </li>
            <li className="sideBarListItem">
              <BarChart className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarListMenu">
            <li className="sideBarListItem">
              <MailOutline className="sidebarIcon"/>
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeed className="sidebarIcon"/>
              Feedback
            </li>
            <li className="sideBarListItem">
              <Message className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarListMenu">
            <li className="sideBarListItem">
              <WorkOutline className="sidebarIcon"/>
              Manage
            </li>
            <li className="sideBarListItem">
                   <Timeline className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sideBarListItem">
              <Report className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;