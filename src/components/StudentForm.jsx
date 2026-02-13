import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const StudentForm = () => {
  const [student, setStudent] = useState({ name: "", regNumber: "", linkedIn: "", github: "", leetcode: "" });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
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
      <div style={{ padding: "4vh", backgroundColor: "#f5f5f5", minHeight: "100vh", width: "100%" }}>
        <h1 style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "3vh",
          fontSize: "28px",
          fontWeight: "600"
        }}>
          Kindly fill all the details of the form
        </h1>

        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
          padding: "40px",
          background: 'linear-gradient(15deg,rgba(17, 243, 217, 0) 0%,rgba(223, 100, 6, 0.92) 40%,rgba(181, 96, 10, 0.95) 100%)',
        }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Name"
              required
              style={{
                width: "90%",
                padding: "14px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px"
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
                width: "90%",
                padding: "14px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px"
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
                width: "90%",
                padding: "14px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px"
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
                width: "90%",
                padding: "14px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px"
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
                width: "90%",
                padding: "14px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px"
              }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              required
              style={{
                width: "90%",
                padding: "14px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                backgroundColor: "white",
                color: "black",
                fontSize: "16px"
              }}
            />

            <button type="submit"
              style={{
                width: "90%",
                padding: "14px",
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
      </div>
    </div>
  );
};

export default StudentForm;
