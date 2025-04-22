'use client';
import { useEffect, useState } from "react";
import { db } from "../app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image"; 

interface Student {
  id: string;
  name: string;
  regNumber: number;
  linkedIn: string;
  github: string;
  leetcode: string;
  imageUrl: string;
}

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]); 

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        setStudents(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Student)));
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
            <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "25px", fontWeight: "bold", }}>Student List</h1>

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
              <Image
                src={student.imageUrl}
                alt={`${student.name}'s Image`}
                width={100}
                height={100}
                style={{
                  margin: "0 31% 10px",
                  objectFit: "cover",
                }}
              />
            )}

                    <h2 style={{ margin: "0 30% 10px", color: "#007bff" }}>{student.name}</h2>
                    <p style={{ margin: "0 15% 10px", color: "#555" }}>Registration Number: {student.regNumber}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" , margin:"0 35%"}}>
                    <a href={student.linkedIn} target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href={student.github} target="_blank" rel="noopener noreferrer">
                <Image src="/github-icon.png" alt="GitHub" width={24} height={24} />
              </a>
              <a href={student.leetcode} target="_blank" rel="noopener noreferrer">
                <Image src="/leetcode-icon.png" alt="LeetCode" width={24} height={24} />
              </a>
              </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default StudentList;