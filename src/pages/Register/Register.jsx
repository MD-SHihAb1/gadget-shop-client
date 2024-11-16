import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../Home/GoogleLogin/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { CreateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {

    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending"
    const wishlist = []
    const UserData = {
      email: email,
      role: role,
      status: status,
      wishlist: wishlist
    }

    CreateUser(data.email, data.password).then(() =>  {
      axios.post("http://localhost:5000/users", UserData).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Registration Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/");
        }
        
      });
    });
    console.log(UserData);
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email", { require: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password", { require: true, minLength: 6 })}
                />
                {errors.password?.type === "require" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must have at lest 6 chracters
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    require: true,
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Password not match";
                      }
                    },
                  })}
                  required
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">Both Password must Match</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select className="select select-bordered w-full max-w-xs"
                {...register("role", { require: true })}
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>

                {errors.role && (
                  <span className="text-red-500">You must Select Role</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <div className="mt-6">
                  <GoogleLogin></GoogleLogin>
                </div>
              </div>
              <p className="my-4 text-sm font-light">
                Already have an Account?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
