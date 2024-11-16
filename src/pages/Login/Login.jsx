import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {

    const { Login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate();
    
      const onSubmit = (data) => {
        Login(data.email, data.password)
        navigate("/");
      }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                  <span className="text-red-500">Password must have at lest 6 chracters</span>
                )}
              </div>
             
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <p className="my-4 text-sm font-light">New Here? <Link to="/register" className="text-primary">Register</Link></p>
            </form>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;