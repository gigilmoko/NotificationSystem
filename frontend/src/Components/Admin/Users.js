import { Fragment, useState, useEffect } from "react";
import Sidebar from '../Layout/AdminSidebar'
import Header from '../Layout/header'
import axios from 'axios'
import { getToken } from "../../utils/helpers";
import { MDBDataTable } from 'mdbreact'

const AdminUsers = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')


    const getUsers = async () => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${getToken()}`
            }
        }
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/admin/users`, config)
        console.log(data)
        setUsers(data.users)
    } catch (error) {
        setError(error.response.data.message)
        }
    }

    useEffect(() => {
        getUsers()
        // if (error) {
        //     toast.error(error, {
        //         position: toast.POSITION.BOTTOM_RIGHT
        //     });
        // }

        // if (deleteError) {
        //     toast.error(deleteError, {
        //         position: toast.POSITION.BOTTOM_RIGHT
        //     });
        // }

        // if (isDeleted) {
        //     toast.success('User deleted successfully', {
        //         position: toast.POSITION.BOTTOM_RIGHT
        //     })
        //     navigate('/admin/users');
        //     setIsDeleted(false)
        //     setDeleteError('')

        // }
    }, [])

    //   const deleteUser = async (id) => {
//     try {
//         const config = {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': `Bearer ${getToken()}`
//             }
//         }
//         const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/admin/user/${id}`, config)

//         setIsDeleted(data.success)
//         setLoading(false)
//     } catch (error) {
//         setDeleteError(error.response.data.message)

//     }
//   } 

const userList = () => {
    const data = {
        columns: [
            {
                label: <span style={{ color: '#F5E8C7' }}>ID</span>,
                field: 'id',
                sort: 'asc'
            },
            {
                label: <span style={{ color: '#F5E8C7' }}>Name</span>,
                field: 'name',
                sort: 'asc',
            },
            {
                label: <span style={{ color: '#F5E8C7' }}>Email</span>,
                field: 'email',
                sort: 'asc'
            },
            {
                label: <span style={{ color: '#F5E8C7' }}>Role</span>,
                field: 'role',
                sort: 'asc'
            },
            {
                label: <span style={{ color: '#F5E8C7' }}>Image</span>,
                field: 'image',
                sort: 'asc'
            },
            {
                label: <span style={{ color: '#F5E8C7' }}>Actions</span>,
                field: 'actions',
            },
        ],
        rows: []
    };

    users.forEach(user => {
        const avatarURL = user.avatar;
        data.rows.push({
            id: <span style={{ color: '#F5E8C7' }}>{user._id}</span>,
            name: <span style={{ color: '#F5E8C7' }}>{user.name}</span>,
            email: <span style={{ color: '#F5E8C7' }}>{user.email}</span>,
            role: <span style={{ color: '#F5E8C7' }}>{user.role}</span>,
            image: avatarURL && (
                <img src={avatarURL} alt="User Avatar" style={{ width: '75px', height: '75px' }} />
            ),
        });
    });

    return data;
};


    return (
        <Fragment>
            <div class = "custom-container" style = {{ backgroundColor: '#001F3F', height: '100%', width: '100%', overflow: 'hidden'}}>
                <div className="row">
                <div className="col-12 col-md-2">
                <div className="sidebar pe-4 pb-3">
                <Sidebar />
                </div>
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <br></br>
                        <h1 className="my-6">User Lists</h1>
                        <MDBDataTable
                            data={userList()}
                            className="px-3"
                            bordered
                            striped
                            hover
                            style={{ backgroundColor: '#323C50 ' }}
                        />
                    </Fragment>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default AdminUsers