import cup1 from '../assets/cups/Rectangle 9.png';
import cup2 from '../assets/cups/Rectangle 10.png';
import cup3 from '../assets/cups/Rectangle 11.png';
import cup4 from '../assets/cups/Rectangle 12.png';
import cup5 from '../assets/cups/Rectangle 13.png';
import cup6 from '../assets/cups/Rectangle 14.png';
import cup7 from '../assets/cups/Rectangle 15.png';
import cup8 from '../assets/cups/Rectangle 16.png';

const ShowMore = () => {
    return (
        <div className="text-center mb-[120px]">
             <p className="text-xl">Follow Us Now</p>
             <h2 className="text-5xl text-[#331A15] font-semibold my-6">Follow on Instagram</h2>
             <div className="w-3/4 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <img className='w-full' src={cup1} alt="" />
                <img className='w-full' src={cup2} alt="" />
                <img className='w-full' src={cup3} alt="" />
                <img className='w-full' src={cup4} alt="" />
                <img className='w-full' src={cup5} alt="" />
                <img className='w-full' src={cup6} alt="" />
                <img className='w-full' src={cup7} alt="" />
                <img className='w-full' src={cup8} alt="" />
             </div>
        </div>
    );
};

export default ShowMore;