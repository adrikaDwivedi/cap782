import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        setStudents(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div
      className="container-fluid py-4"
      style={{ backgroundColor: "white", minHeight: "100vh" }}
    >
      <h1 className="text-center mb-5 fw-bold" style={{ color: "#333" }}>
        Student List
      </h1>

      <ul
        className="row g-4 justify-content-center"
        style={{
          listStyleType: "none",
          padding: 0,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {students.map((student) => (
          <li
            key={student.id}
            className="col-12 col-md-6 col-lg-4 d-flex"
          >
            <div
              className="w-100 text-center"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {student.imageUrl && (
                <img
                  src={student.imageUrl}
                  alt={`${student.name}'s Image`}
                  className="d-block mx-auto mb-3"
                  style={{
                    objectFit: "cover",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              )}

              <h5 className="text-primary fw-bold mb-2">
                {student.name}
              </h5>

              <p className="text-muted mb-3">
                Registration Number: {student.regNumber}
              </p>

              {/* ICONS */}
              <div className="d-flex justify-content-center align-items-center gap-3 flex-nowrap">
                <a href={student.linkedIn} target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin-icon.png" alt="LinkedIn" width="24" />
                </a>

                <a href={student.github} target="_blank" rel="noopener noreferrer">
                  <img src="/github-icon.png" alt="GitHub" width="24" />
                </a>

                <a href={student.leetcode} target="_blank" rel="noopener noreferrer">
                  <img src="/leetcode-icon.png" alt="LeetCode" width="24" />
                </a>

                {(student.cvUrl || student.cv) && (
                  <a
                    href={student.cvUrl || student.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/pdf-icon.svg" alt="CV" width="24" />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;