import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const AddProducts = () => {


    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const {user} = useAuth();
    
  
    const onSubmit = (data) => {
        const title = data.title;
        const price = parseFloat(data.price);
        const description = data.description;
        const category = data.category;
        const sellerEmail = user.email;
        const stock = parseInt(data.stock);
        const brand = data.brand;
        const image = data.image;

        const product = {
            title,price,description,category,sellerEmail,stock,brand, image
        };
        const token = localStorage.getItem("access-token");
        axios.post("http://localhost:5000/add-products", product, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        .then(res=>console.log(res))

    };


    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-12">Add Products</h1>
            <div>
            <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:flex gap-8 w-full">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Title"
                  className="w-full p-2 border border-black rounded-md"
                  required
                  {...register("title", { require: true })}
                />
                {errors.title && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <input
                  type="text"
                  placeholder="Product brand"
                  className="w-full p-2 border border-black rounded-md"
                  required
                  {...register("brand", { require: true })}
                />
                {errors.brand && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              </div>
              <div className="lg:flex gap-8 w-full">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">price</span>
                </label>
                <input
                  type="number"
                  placeholder="Product price"
                  className="w-full p-2 border border-black rounded-md"
                  required
                  {...register("price", { require: true })}
                />
                {errors.price && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Stock</span>
                </label>
                <input
                  type="number"
                  placeholder="Product stock"
                  className="w-full p-2 border border-black rounded-md"
                  required
                  {...register("stock", { require: true })}
                />
                {errors.stock && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Category"
                  className="w-full p-2 border border-black rounded-md"
                  required
                  {...register("category", { require: true })}
                />
                {errors.category && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            
              
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Product image"
                  className="w-full p-2 border border-black rounded-md"
                  required
                  {...register("imageURL", { require: true })}
                />
                {errors.imageURL && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Product description"
                  className="w-full p-2 border border-black rounded-md"
                  required
                  {...register("description", { require: true })}
                />
                {errors.description && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </form>
            </div>
        </div>
    );
};

export default AddProducts;