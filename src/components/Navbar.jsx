import React from "react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "flex-start",
          padding: isMobile ? "15px 10px" : "20px 40px",
          background:
            "radial-gradient(circle at center, #f07f19, #c75e15, rgba(0,0,0,0.9))",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "10px" : "30px",
          flexWrap: "wrap",
        }}
      >
        {/* LOGO LEFT */}
        <img
          src="/logo1.png"
          alt="Logo"
          style={{
            width: isMobile ? "140px" : "260px",
            height: isMobile ? "50px" : "100px",
            borderRadius: "12px",
            padding: "8px",
            background: "linear-gradient(145deg, #fff, #e6e6e6)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
          }}
        />

        {/* TITLE */}
        <div
          style={{
            color: "white",
            padding: isMobile ? "12px 18px" : "20px 35px",
            borderRadius: "16px",
            backgroundColor: "rgba(255,255,255,0.05)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            backdropFilter: "blur(4px)",
            textAlign: isMobile ? "center" : "left",
            marginLeft: "150px"
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "22px" : "46px",
              margin: "0",
            }}
          >
            Lovely Professional University
          </h1>

          <p
            style={{
              fontSize: isMobile ? "12px" : "18px",
              marginTop: "6px",
              marginBottom: "0",
            }}
          >
            India's best private university
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;