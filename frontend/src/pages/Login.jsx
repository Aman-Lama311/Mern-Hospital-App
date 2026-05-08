import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { backendUrl, token, setToken } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          password,
          email,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success(`Welcome, ${data.name}!`);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          password,
          email,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success(`Welcome back, ${data.name}!`);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-baseline p-8 min-w-[340px] sm:min-w-96 border border-gray-200 rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an
          appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <div className="relative">
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1 pr-10"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/4 text-zinc-400 hover:text-zinc-600"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#14A2F3] text-white w-full py-2 rounded-md"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-[#14A2F3] cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-[#14A2F3] cursor-pointer underline"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
