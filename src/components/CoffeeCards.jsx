import PropTypes from "prop-types";
import { FaCartArrowDown, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCards = ({ coffees, setCoffees }) => {

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
                fetch(`http://localhost:5000/coffee/${id}`, {
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
                            const remaining = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remaining)
                        }
                    })


            }
        });
    }


    return (
        <div className="bg-cards4 bg-no-repeat bg-auto bg-left-top my-[120px] text-center">
            <p className="text-xl">--- Sip & Savor ---</p>
            <h2 className="text-5xl text-[#331A15] font-semibold my-6">Our Popular Products</h2>
            <Link to="/add_coffee" className="btn bg-[#E3B577] text-white hover:text-black text-xl font-normal">Add Coffee <FaCartArrowDown></FaCartArrowDown></Link>
            <div className="bg-cards5 bg-no-repeat bg-auto bg-right-bottom my-12">
                <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        coffees.map(coffee =>
                            <div key={coffee._id} className="flex flex-col gap-4 md:flex-row justify-between items-center bg-[#f8f5eeac] rounded-xl p-8">
                                <div><img src={coffee.photo} alt="" /></div>

                                <div>
                                    <p className="text-gray-500 text-xl"><span className="text-black">Name: </span>{coffee.name}</p>
                                    <p className="text-gray-500 text-xl"><span className="text-black">Chef: </span>{coffee.chef}</p>
                                    <p className="text-gray-500 text-xl"><span className="text-black">Price: </span>{coffee.price} Taka</p>
                                </div>
                                <div className="flex flex-row md:flex-col gap-4">
                                    <button className="btn bg-[#D2B48C] hover:bg-[#D2B48C] text-white text-lg"><FaEye></FaEye></button>
                                    <Link to={`/update_coffee/${coffee._id}`} className="btn bg-[#3C393B] hover:bg-[#3C393B] text-white text-lg"><FaEdit></FaEdit></Link>
                                    <button onClick={() => handleDelete(coffee._id)} className="btn bg-[#EA4744] hover:bg-[#EA4744] text-white text-lg"><FaTrash></FaTrash></button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

CoffeeCards.propTypes = {
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}

export default CoffeeCards;