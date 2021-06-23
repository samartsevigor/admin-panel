import React, {useState} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import "./UsersList.css"
import {DeleteOutline} from "@material-ui/icons";
import {rowsUsers} from "../../../dummy";
import {Link} from "react-router-dom";

const UsersList = () => {
  const [data, setData] = useState(rowsUsers)

  const handleDelete = (id) => {
    setData(data.filter(el => el.id !== id))
  }

  const columns = [
    {field: 'id', headerName: 'Id', width: 100},
    {
      field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className="usersListUser">
            <img src={params.row.avatar} alt="Avatar" className="usersListImg"/>
            {params.row.username}
          </div>
        )
      }
    },
    {field: 'email', headerName: 'Email', width: 130},
    {field: 'status', headerName: 'Status', width: 130},
    {field: 'transaction', headerName: 'Transaction volume', width: 130},
    {
      field: 'action', headerName: 'Action', width: 130, renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="usersListEdit">Edit</button>
            </Link>
            <DeleteOutline className="usersListDelete" onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      }
    },

  ];

  return (
    <div className="usersList">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection/>
    </div>
  );
};

export default UsersList;