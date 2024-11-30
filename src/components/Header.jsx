import { NavLink } from 'react-router-dom';
import logo from '../assets/more/logo1.png';

const Header = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "btn bg-[#E3B577] border-none rounded-none hover:bg-[#e9b775d6] font-normal text-lg" : "btn rounded-none bg-transparent text-white font-normal text-lg hover:bg-[#E3B577] hover:border-[#E3B577]"
        }>Home</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) =>
            isActive ? "btn bg-[#E3B577] border-none rounded-none hover:bg-[#e9b775d6] font-normal text-lg" : "btn rounded-none bg-transparent text-white font-normal text-lg hover:bg-[#E3B577] hover:border-[#E3B577]"
        }>Login</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) =>
            isActive ? "btn bg-[#E3B577] border-none rounded-none hover:bg-[#e9b775d6] font-normal text-lg" : "btn rounded-none bg-transparent text-white font-normal text-lg hover:bg-[#E3B577] hover:border-[#E3B577]"
        }>Register</NavLink></li>
        <li><NavLink to="/users" className={({ isActive }) =>
            isActive ? "btn bg-[#E3B577] border-none rounded-none hover:bg-[#e9b775d6] font-normal text-lg" : "btn rounded-none bg-transparent text-white font-normal text-lg hover:bg-[#E3B577] hover:border-[#E3B577]"
        }>Users</NavLink></li>
    </>
    return (
        <div className="bg-header text-white">
            <div className='navbar justify-between container mx-auto'>
                <div className="py-2">
                    <img src={logo} alt="" className='w-[65px]' />
                    <h2 className='text-5xl'>Espresso Emporium</h2>
                </div>
                <div>
                    <ul className="flex px-1 gap-4">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;