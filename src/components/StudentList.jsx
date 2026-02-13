import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        setStudents(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      flexDirection: "column",
      minHeight: "100vh",
    }}>
      <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "25px", fontWeight: "bold" }}>Student List</h1>

      <ul style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        listStyleType: "none",
        padding: 0,
        width: "100%",
        maxWidth: "1200px",
      }}>
        {students.map(student => (
          <li key={student.id}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}>
            {student.imageUrl && (
              <img
                src={student.imageUrl}
                alt={`${student.name}'s Image`}
                style={{
                  margin: "0 31% 10px",
                  objectFit: "cover",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
            )}

            <h2 style={{ margin: "0 30% 10px", color: "#007bff" }}>{student.name}</h2>
            <p style={{ margin: "0 15% 10px", color: "#555" }}>Registration Number: {student.regNumber}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "0 35%" }}>
              <a href={student.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-icon.png" alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
              </a>
              <a href={student.github} target="_blank" rel="noopener noreferrer">
                <img src="/github-icon.png" alt="GitHub" style={{ width: "24px", height: "24px" }} />
              </a>
              <a href={student.leetcode} target="_blank" rel="noopener noreferrer">
                <img src="/leetcode-icon.png" alt="LeetCode" style={{ width: "24px", height: "24px" }} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
