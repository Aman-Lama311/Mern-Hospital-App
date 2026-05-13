import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin@123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setAToken, backendUrl } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("submit-btn")?.click();
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(backendUrl + "/api/admin/login", {
        email,
        password,
      });
      if (data.success) {
        localStorage.setItem("aToken", data.token);
        setAToken(data.token);
        toast.success(data.message);
        navigate("/admin-dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center "
    >
      <div className="flex flex-col gap-3 items-start m-auto p-8 min-w-[340px] sm:min-w-96 border border-gray-200 rounded-xl text-zinc-700 text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-[#5F6FFF]">Admin </span>Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onKeyDown={handleKeyDown}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              onKeyDown={handleKeyDown}
              className="border border-[#DADADA] rounded w-full p-2 mt-1 pr-10"
              type={showPassword ? "text" : "password"}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button
          id="submit-btn"
          disabled={loading}
          className="bg-[#5F6FFF] w-full text-white py-2 mt-2 rounded-md text-sm cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};
export default Login;
