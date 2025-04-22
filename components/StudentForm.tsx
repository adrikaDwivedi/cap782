"use client";             
import { useState } from "react";             
import { db } from "../app/firebaseConfig";             
import { collection, addDoc } from "firebase/firestore";        
import { storage } from "../app/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";     
      
const StudentForm = () => {
  const [student, setStudent] = useState({ name: "", regNumber: "", linkedIn: "" , github:"" , leetcode:""});
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  

    if (!student.name || !student.regNumber || !student.linkedIn || !student.github || !student.leetcode) {
      alert("Please fill in all fields");
      return;
    }
    if (!student.regNumber.trim() || isNaN(Number(student.regNumber))) {
      alert("Registration Number must be a valid number.");
      return;
    }
    if (!/^https?:\/\/.+/.test(student.linkedIn)) {
      alert("LinkedIn URL must start with http:// or https://");
      return;
    }

    if (!image) {
      alert("Please upload an image");
      return;
    }
  
    try {
      const imageRef = ref(storage, `student-images/${image.name}-${Date.now()}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
  
      const studentWithImage = { ...student, imageUrl };
  
      await addDoc(collection(db, "students"), studentWithImage);
  
      alert("Student added successfully!");
      setStudent({ name: "", regNumber: "", linkedIn: "", github: "", leetcode: "" });
      setImage(null);
    } catch (error) {
      console.error("Error adding student: ", error);
      alert("Failed to add student. Please try again.");
    }
  };
  

  return (
    
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "white",
    }}>

    <form onSubmit={handleSubmit} 
    style={{    
      marginTop: "150px",
       maxWidth:"500px",
       margin: "150px",
       padding: "20px",
       border: "1px solid #ccc",
       borderRadius: "5px",
       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
       backgroundColor: "#ba5624",
       }}>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
        type="text"
        name="regNumber"
        value={student.regNumber}
        onChange={handleChange}
        placeholder="Registration Number"
        required
        pattern="^\d+$" 
          title="Registration Number must be a valid number"

        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
        type="url"
        name="linkedIn"
        value={student.linkedIn}
        onChange={handleChange}
        placeholder="LinkedIn Profile Link"
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
            
        <input
        type="url"
        name="github"
        value={student.github}
        onChange={handleChange}
        placeholder="Github Profile Link"
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
            <input
        type="url"
        name="leetcode"
        value={student.leetcode}
        onChange={handleChange}
        placeholder="Leetcode Profile Link"
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
  type="file"
  accept="image/*"
  onChange={(e) => setImage(e.target.files?.[0] || null)}
  required
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "white",
    color: "black",
  }}
/>

      <button type="submit"
      style={{
        width: "100%",
        padding: "12px",
        backgroundColor: "#BAC095",
        color: "black",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.7s",
        fontWeight: "bold",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#D4DE95")} 
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#414833")} 
      >Submit</button>
    </form>
    </div>
  );
};

export default StudentForm;