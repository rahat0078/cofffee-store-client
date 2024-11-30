import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()

    const { name, _id } = coffee

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);

        const name = formData.get('name');
        const chef = formData.get('chef');
        const supplier = formData.get('supplier');
        const taste = formData.get('taste');
        const category = formData.get('category');
        const price = formData.get('price');
        const photo = formData.get('photo');

        const updatedCoffee = { name, chef, supplier, taste, category, price, photo }

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })

        form.reset()
    }


    return (
        <div className="bg-addCoffee bg-no-repeat bg-center bg-cover min-h-[calc(100vh-335px)] flex flex-col items-center justify-center">
            <div className="w-3/4 mx-auto my-[50px]"><button className="btn bg-transparent hover:bg-[#F4F3F0]"> <Link to="/" className="flex items-center gap-2"><FaArrowLeft></FaArrowLeft> Back To Home</Link></button></div>
            <div className="bg-[#F4F3F0] w-3/4 mx-auto text-center mb-[120px] rounded-lg">
                <div>
                    <h3 className="font-bold text-5xl mt-[70px] mb-4">Update Existing Coffee Details: {name}</h3>
                    <p className="text-gray-500 text-xl mb-8 w-2/5 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdateCoffee} className="grid gridco2 mx-[112px] my-12 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name"  placeholder="Enter coffee name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="chef"  placeholder="Enter coffee chef" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier"  placeholder="Enter coffee supplier" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste"  placeholder="Enter coffee taste" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category"  placeholder="Enter coffee category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price"  placeholder="Enter coffee price" className="input input-bordered" />
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo"  placeholder="Enter photo URL" className="input input-bordered" />
                    </div>
                    <div className="col-span-2">
                        <input type="submit" value="Update Coffee Details" className="btn bg-[#D2B48C] hover:bg-[#D2B48C] w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;