import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, backendUrl, token, loadUserProfileData } =
    useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  // Local state for editable fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState({ line1: "", line2: "" });

  // Initialize local state when Edit is clicked
  const handleEdit = () => {
    setName(userData.name || "");
    setPhone(userData.phone || "");
    setDob(userData.dob || "");
    setGender(userData.gender || "");
    setAddress(userData.address || { line1: "", line2: "" });
    setIsEdit(true);
  };

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("address", JSON.stringify(address));
      formData.append("gender", gender);
      formData.append("dob", dob);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  console.log("Sending to backend:", {
    name,
    phone,
    address,
    gender,
    dob,
  });

  return (
    userData && (
      <div className="px-4 md:px-[10%] mt-10 my-10">
        <div className="max-w-lg flex flex-col gap-2 text-sm">
          <img className="w-36 rounded" src={userData.image} alt="" />

          {isEdit ? (
            <input
              className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <p className="font-medium text-3xl text-neutral-800 mt-4">
              {userData.name}
            </p>
          )}

          <hr className="bg-zinc-400 h-[1px] border-none" />

          <div>
            <p className="text-neutral-700 underline mt-3">
              CONTACT INFORMATION
            </p>
            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
              <p className="font-medium">Email id:</p>
              <p className="text-blue-500">{userData.email}</p>

              <p className="font-medium">Phone:</p>
              {isEdit ? (
                <input
                  className="bg-gray-100 max-w-52"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <p className="text-blue-400">{userData.phone}</p>
              )}

              <p className="font-medium">Address:</p>
              {isEdit ? (
                <div className="flex flex-col gap-1">
                  <input
                    className="bg-gray-50"
                    type="text"
                    value={address.line1}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        line1: e.target.value,
                      }))
                    }
                  />
                  <input
                    className="bg-gray-50"
                    type="text"
                    value={address.line2}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        line2: e.target.value,
                      }))
                    }
                  />
                </div>
              ) : (
                <p className="text-gray-500">
                  {userData.address?.line1}
                  <br />
                  {userData.address?.line2}
                </p>
              )}
            </div>
          </div>

          <div>
            <p className="text-neutral-700 underline mt-3">BASIC INFORMATION</p>
            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700">
              <p className="font-medium">Gender:</p>
              {isEdit ? (
                <select
                  className="max-w-20 bg-gray-100"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-gray-400">{userData.gender}</p>
              )}

              <p className="font-medium">Birthday:</p>
              {isEdit ? (
                <input
                  className="max-w-28 bg-gray-100"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              ) : (
                <p className="text-gray-400">{userData.dob}</p>
              )}
            </div>
          </div>

          <div className="mt-10">
            {isEdit ? (
              <button
                className="border px-8 py-2 rounded-full hover:bg-[#14A2F3] hover:text-white transition-all"
                onClick={updateUserProfileData}
              >
                Save Information
              </button>
            ) : (
              <button
                className="border px-8 py-2 rounded-full hover:bg-[#14A2F3] hover:text-white transition-all"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfile;
