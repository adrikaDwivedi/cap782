import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    regNumber: "",
    linkedIn: "",
    github: "",
    leetcode: "",
  });

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [cv, setCv] = useState(null);
  const [cvName, setCvName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !student.name ||
      !student.regNumber ||
      !student.linkedIn ||
      !student.github ||
      !student.leetcode
    ) {
      alert("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!student.regNumber.trim() || isNaN(Number(student.regNumber))) {
      alert("Registration Number must be a valid number.");
      setLoading(false);
      return;
    }

    if (!/^https?:\/\/.+/.test(student.linkedIn)) {
      alert("LinkedIn URL must start with http:// or https://");
      setLoading(false);
      return;
    }

    if (!image) {
      alert("Please upload an image");
      setLoading(false);
      return;
    }

    try {
      const compressedImage = await imageCompression(image, {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      });

      const imageRef = ref(
        storage,
        `student-images/${image.name}-${Date.now()}`
      );

      const cvRef = cv
        ? ref(storage, `student-cvs/${cv.name}-${Date.now()}`)
        : null;

      const uploads = [uploadBytes(imageRef, compressedImage)];
      if (cv) uploads.push(uploadBytes(cvRef, cv));

      await Promise.all(uploads);

      const imageUrl = await getDownloadURL(imageRef);
      const cvUrl = cv ? await getDownloadURL(cvRef) : null;

      await addDoc(collection(db, "students"), {
        ...student,
        imageUrl,
        cvUrl,
      });

      alert("Student added successfully!");

      setStudent({
        name: "",
        regNumber: "",
        linkedIn: "",
        github: "",
        leetcode: "",
      });

      setImage(null);
      setCv(null);
      setCvName("");
    } catch (error) {
      console.error("Error adding student: ", error);
      alert("Failed to add student.");
    }

    setLoading(false);
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">

          {/* CARD */}
          <div
            className="p-4"
            style={{
              borderRadius: "20px",
              background:
                "linear-gradient(180deg,#ff7b00 0%,#ff9a3c 100%)",
              boxShadow: "0 0 25px rgba(255,123,0,0.5)",
            }}
          >
            <h2 className="text-center text-white fw-bold mb-4">
              ✨ Student Registration
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
                placeholder="Name"
                className="form-control mb-3 shadow-sm"
              />

              <input
                type="text"
                name="regNumber"
                value={student.regNumber}
                onChange={handleChange}
                placeholder="Registration Number"
                className="form-control mb-3 shadow-sm"
              />

              <input
                type="url"
                name="linkedIn"
                value={student.linkedIn}
                onChange={handleChange}
                placeholder="LinkedIn Profile Link"
                className="form-control mb-3 shadow-sm"
              />

              <input
                type="url"
                name="github"
                value={student.github}
                onChange={handleChange}
                placeholder="Github Profile Link"
                className="form-control mb-3 shadow-sm"
              />

              <input
                type="url"
                name="leetcode"
                value={student.leetcode}
                onChange={handleChange}
                placeholder="Leetcode Profile Link"
                className="form-control mb-3 shadow-sm"
              />

              {/* FILE INPUTS */}
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                  <label className="fw-semibold text-white mb-1">
                   Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setImage(file);
                      setImageName(file ? file.name : "");
                    }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="fw-semibold text-white mb-1">
                   Upload CV
                   </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    className="form-control"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setCv(file);
                      setCvName(file ? file.name : "");
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn w-100 fw-bold shadow-lg"
                style={{ fontSize: "18px" , borderColor: '#fff'}}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;