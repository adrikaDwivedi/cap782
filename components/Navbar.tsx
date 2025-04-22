import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div style={{
      
      display: "flex",
      alignItems: "center",
      padding: "10px 20px",
      background: "radial-gradient(circle at center, #f07f19, #c75e15,rgba(0, 0, 0, 0.9))",
      position: "sticky"
      }}>
        
          {/* Logo */}
          <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "15px",
              // background: "#ffffff",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0)",
              margin: "0 20px"
          }}>
            <Image
              src="/logo1.png"
              alt="Logo"
              width={300}
              height={100}
              priority
              style={{
                borderRadius: "12px",
                padding: "8px",
                background: "linear-gradient(145deg, #fff, #e6e6e6)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                transition: "transform 0.3s ease-in-out",
              }}
              
            />
          </div>
          
          {/* Title */}
          
          <h1
  style={{
    fontSize: "3rem",
    color: "white",
    margin: "40px 0px 20px 80px",
    padding: "20px 30px",
    borderRadius: "16px",
    display: "inline-block",
    backgroundColor: "rgba(255, 255, 255, 0.05)", // subtle glassy effect
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)", // lifted shadow
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)", // inner text depth
    backdropFilter: "blur(4px)",
  }}
>
  Lovely Professional University

  <p
    style={{
      fontSize: "1rem",
      color: "white",
      marginLeft: "50vh",
      marginTop: "10px",
      textShadow: "1px 1px 6px rgba(0, 0, 0, 0.5)",
    }}
  >
    India&apos;s best private university
  </p>
</h1>


          
        </div>
        
      </div>
    
  );
};

export default Navbar;
