import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.css'
import { faBox, faMoneyBill, faSwatchbook, faTruck } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    

    return (
        <div className='flex justify-center items-center gap-12 w-11/12 mx-auto mt-12'>
            <div className="mobile rounded text-white pt-20 ps-20">
            <p className='text-2xl'>Holiday Deals</p>
            <h2 className='text-5xl font-medium leading-tight py-4'>Up to<br/>30% off</h2>
            <p className='text-2xl'>Selected Smartphone Brands</p>
            <button className='px-8 py-4 bg-white rounded-full text-black text-xl mt-8'>Shop now</button>
            </div>

            <div className="headphone  rounded text-white pt-20 ps-20">
            <p className='text-2xl'>Just In</p>
            <h2 className='text-6xl font-medium leading-tight py-4'>Take Your <br /> Sound <br /> Anywhere</h2>
            <p className='text-2xl'>Top Headphone Brands</p>
            <button className='px-8 py-4 bg-white rounded-full text-black text-xl mt-8'>Shop now</button>
            </div>
        </div>
    );
};

export default Services;