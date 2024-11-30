import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import login from '../assets/more/9.png'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {loginUser} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email, password)
        .then(result => {
            console.log(result.user);

            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const LoginInfo = {email, lastSignInTime}

            fetch('http://localhost:5000/users', {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(LoginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('sign in info updated in db',data);
            })


        })
        .catch(err => {
            console.log(err.message);
        })

    }

    return (
        <div className="py-16 flex justify-center items-center" style={{backgroundImage: `url(${login})`}}>
            <div className="card w-full max-w-lg  shrink-0 shadow-2xl border my-12">
                <h3 className="text-center mt-6 text-4xl font-bold text-[#E3B577]">Login</h3>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password' placeholder="Enter Password" className="input input-bordered" required />
                        <p
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 bottom-12'>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye></FaEye>
                            }
                        </p>
                        <label className="label">
                            <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button to="/auth/login" className="btn bg-[#E3B577] border-none rounded-none hover:bg-[#e9b775d6] font-normal text-lg">Login</button>
                    </div>
                    <p>or</p>
                    <div>
                        <p  className="flex items-center gap-4 border p-3 bg-white w-full justify-center rounded-lg cursor-pointer">
                            <FaGoogle></FaGoogle>
                            <span className="text-xl font-bold ">Login With Google</span>
                        </p>
                    </div>
                    <p className="pt-2 flex justify-end">Don&apos;t have an account?<Link  to="/register" className="text-blue-500">SignUp </Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;