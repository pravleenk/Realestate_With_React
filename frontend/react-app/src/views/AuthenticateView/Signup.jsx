import React, { useEffect, useState } from "react";
import Label from "../../components/label/Label";
import InputField from "../../components/inputfield/InputField";
import AddButton from "../../components/buttons/AddButton";
import Required from "../../components/mandatory/Required";
import axios from "axios";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [role, setRole] = useState("Renter");

  const handleSubmit = async () => {
    alert(`${firstname} ${lastname} ${username} ${password} ${role}`);
    try {
      const res = await axios.post("http://localhost:9000/register", {
        firstname,
        lastname,
        username,
        password,
        role,
      });
      console.log("res from backend", res);
    } catch (err) {
      console.log("error in backend", err);
    }
  };

  const hadleShow = () => {
    setType("text");
  };
  const handleHide = () => {
    setType("password");
  };

  useEffect(() => {
    const getFirstname = () => {
      console.log("render");
    };
    getFirstname();
  }, [firstname]);

  console.log("firstname", firstname);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Signup
        </h2>

        <div>
          <div>
            <Label title="firstname" className="block text-gray-700" />
            <InputField
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="firtsname"
              value={firstname}
              placeholder={`enter firstname ${firstname}`}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <Label title="Lastname" className="block text-gray-700" />
            <InputField
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name={lastname}
              value={lastname}
              placeholder="enter lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <Label title="Username" className="block text-gray-700" />
            <InputField
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name={username}
              value={username}
              placeholder="enter username or email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <Label title="Password" className="block text-gray-700" />
            <InputField
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type={type}
              name={password}
              value={password}
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <AddButton
              className="absolute top-6 right-4 p-2"
              name={type == "text" ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              onClick={type == "text" ? () => handleHide() : () => hadleShow()}
              disabledStatus={password ? false : true}
            />
          </div>
          <AddButton
            name="Submit"
            className=" mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => handleSubmit()}
            disabledStatus={
              firstname && lastname && username && password ? false : true
            }
          />
          <div className=" mt-2">
          <Link to="/" className=" hover:text-blue-500 transition-colors duration-200 ">
            Go to Login page
            
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}