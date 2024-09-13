import axios from "axios";
import React, { useEffect, useState } from "react";
export default function UserProfile() {
  const [imageName, setImageName] = useState("");
  const handleChange = async (e) => {
    if(imageName!=""){
      const res=await axios.get(`http://localhost:9000/user/api/profile/delete/${imageName}`);
    }
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const res = await axios.post(
      "http://localhost:9000/user/api/upload/durgesh@gmail.com",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setImageName(res.data.image);
  };

const getSpecificUserDetails=async()=>{
  const res=await axios.get("http://localhost:9000/user/api/user/durgesh@gmail.com");
  if(res.data.status==1){
    setImageName(res.data.user.image);
  }
}

useEffect(()=>{
     getSpecificUserDetails();
},[]);

  return (
    <div>
      UserProfile
      <h1>upload an image</h1>
      <label>Profile pic</label>
      <input type="file" onChange={(e) => handleChange(e)} />
      <br></br>
      <br />
      {imageName != "" && (
        <img
          src={`http://localhost:9000/user/api/download/${imageName}`}
          alt="image not found"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}
