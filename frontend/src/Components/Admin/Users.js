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
                label: 'ID',
                field: 'id',
                sort: 'asc'
            },
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc'
            },
            {
                label: 'Role',
                field: 'role',
                sort: 'asc'
            },
            {
                label: 'Image',
                field: 'image',
                sort: 'asc'
            },
            {
                label: 'Actions',
                field: 'actions',
            },
        ],
        rows: []
    };

    users.forEach(user => {
        const avatarURL = user.avatar;
        data.rows.push({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: avatarURL && (
                <img src={avatarURL} alt="User Avatar" style={{ width: '100px', height: 'auto' }} />
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
                        />
                    </Fragment>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default AdminUsers