import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import login from '../assets/more/9.png'

const Users = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== id)
                            setUsers(remaining)
                        }
                    })


            }
        });
    }


    return (
        <div className=" container mx-auto min-h-[calc(100vh-300px)] flex justify-center items-center" style={{backgroundImage: `url(${login})`}}>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-xl">Name</th>
                            <th className="text-xl">Email</th>
                            <th className="text-xl">Created</th>
                            <th className="text-xl">Last SignIn</th>
                            <th className="text-xl">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={user._id} className="hover">
                                    <td className="text-xl">{user.name}</td>
                                    <td className="text-xl">{user.email}</td>
                                    <td className="text-xl">{user.createdAt}</td>
                                    <td className="text-xl">{user.lastSignInTime}</td>
                                    <td>
                                        <button className="btn bg-[#3C393B] hover:bg-[#3C393B] text-white text-sm"><FaEdit></FaEdit></button>
                                        <button onClick={() => handleDelete(user._id)} className="btn bg-[#EA4744] hover:bg-[#EA4744] text-white text-sm ml-4"><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;