import React from 'react';
import "./WidgetLg.css"

const WidgetLg = () => {
  const TransactionStatus = ({status}) => {
    return <span className={`widgetLgStatus ${status}`}>{status}</span>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgRow">
          <th className="widgetLgHead">Customer</th>
          <th className="widgetLgHead">Date</th>
          <th className="widgetLgHead">Amount</th>
          <th className="widgetLgHead">Status</th>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgCol">
            <div className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1611858358306-2996b419650c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                alt="" className="widgetLgImg"/>
              <span className="widgetLgName">Elena Samartseva</span>
            </div>
          </td>
          <td className="widgetLgCol">
            <span className="widgetLgDate">2 Jun 2021</span>
          </td>
          <td className="widgetLgCol">
            <span className="widgetLgAmount">$122.00</span>
          </td>
          <td className="widgetLgCol">
            <TransactionStatus status="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgCol">
            <div className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1611858358306-2996b419650c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                alt="" className="widgetLgImg"/>
              <span className="widgetLgName">Elena Samartseva</span>
            </div>
          </td>
          <td className="widgetLgCol">
            <span className="widgetLgDate">2 Jun 2021</span>
          </td>
          <td className="widgetLgCol">
            <span className="widgetLgAmount">$122.00</span>
          </td>
          <td className="widgetLgCol">
            <TransactionStatus status="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgCol">
            <div className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1611858358306-2996b419650c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                alt="" className="widgetLgImg"/>
              <span className="widgetLgName">Elena Samartseva</span>
            </div>
          </td>
          <td className="widgetLgCol">
            <span className="widgetLgDate">2 Jun 2021</span>
          </td>
          <td className="widgetLgCol">
            <span className="widgetLgAmount">$122.00</span>
          </td>
          <td className="widgetLgCol">
            <TransactionStatus status="Pending"/>
          </td>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgCol">
            <div className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1611858358306-2996b419650c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                alt="" className="widgetLgImg"/>
              <span className="widgetLgName">Elena Samartseva</span>
            </div>
          </td>
          <td className="widgetLgCol">
            <span className="widgetLgDate">2 Jun 2021</span>
          </td>
          <td className="widgetLgCol">
            <span className="widgetLgAmount">$122.00</span>
          </td>
          <td className="widgetLgCol">
            <TransactionStatus status="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;