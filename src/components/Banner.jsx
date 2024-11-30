import icon1 from '../assets/icons/1.png';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';
import banner from '../assets/more/3.png';

const Banner = () => {
    return (
        <div>
            <div className='bg-center bg-no-repeat bg-cover text-white flex justify-between' style={{backgroundImage: `url(${banner})`}}>
                <div></div>
                <div className="py-[196px]">
                    <h2 className="text-5xl font-normal">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="w-3/5 font-normal text-xl text-gray-300 py-5">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn bg-[#E3B577] border-[#E3B577] hover:border hover:border-white hover:bg-transparent hover:text-white rounded-none font-normal text-lg">Learn More</button>
                </div>
            </div>
            <div className="bg-[#ECEAE3] py-14">
                <div className='w-3/4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10'>
                    <div className='space-y-4'>
                        <div>
                            <img src={icon1} alt="" />
                        </div>
                        <h5 className='text-4xl text-[#331A15]'>Awesome Aroma</h5>
                        <p className='text-xl text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>

                    <div className='space-y-4'>
                        <div>
                            <img src={icon2} alt="" />
                        </div>
                        <h5 className='text-4xl text-[#331A15]'>High Quality</h5>
                        <p className='text-xl text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <img src={icon3} alt="" />
                        </div>
                        <h5 className='text-4xl text-[#331A15]'>Pure Grades</h5>
                        <p className='text-xl text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <img src={icon4} alt="" />
                        </div>
                        <h5 className='text-4xl text-[#331A15]'>Proper Roasting</h5>
                        <p className='text-xl text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;