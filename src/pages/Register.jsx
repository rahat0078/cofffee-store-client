import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import login from '../assets/more/9.png'

const Register = () => {

    const { createUser } = useContext(AuthContext)



    const handleRegister = e => {
        e.preventDefault()



        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                // save to database 

                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, email, createdAt }


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("User create to database", data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Added successfully',
                                icon: 'success',
                                confirmButtonText: 'Done'
                            })
                        }
                    })

            })
            .catch((err) => {
                const errMessage = err.message;
                console.log(errMessage);
            });


    }

    return (
        <div className="py-16 flex justify-center items-center" style={{backgroundImage: `url(${login})`}}>
            <div className="card w-full max-w-lg  shrink-0 shadow-2xl border my-12">
                <h3 className="text-center mt-6 text-4xl font-semibold text-[#E3B577]">Register Now !</h3>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name='password' placeholder="Enter Password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button to="/auth/login" className="btn bg-[#E3B577] border-none rounded-none hover:bg-[#e9b775d6] font-normal text-lg">Register</button>
                    </div>
                    <p>or</p>
                    <div>
                        <p className="flex items-center gap-4 border p-3 bg-white w-full justify-center rounded-lg cursor-pointer">
                            <FaGoogle></FaGoogle>
                            <span className="text-xl font-semibold">Register With Google</span>
                        </p>
                    </div>
                    <p className="pt-2 flex justify-end">Don&apos;t have an account?  <span><Link to="/login" className="text-blue-500">Login </Link></span> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;