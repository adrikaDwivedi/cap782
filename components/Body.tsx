"use client";
import React from 'react';
import styles from './Body.module.css';
import { useRouter } from 'next/navigation';
// import Image from 'next/image';

const Body = () => {

  const router = useRouter();

  const handleRecruiterClick = () => {
    router.push('/StudentList');
  };

  const handleStudentClick = () => {
    router.push('/StudentForm');
  };

  return (
    <div className={styles.mainCont}>
      <div className={styles.leftH}>
        {/* <Image/> */}
        <div
  style={{
    border: "2px solid white",
    borderTopLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    boxShadow: "10px 14px 4px rgba(0.8, 0.8, 0.8, 0.8)",
    margin: "222px 20px 20px 20px",
    padding: "20px 20px 20px 20px",
  }}
>
  <div
    style={{
      margin: "20px 20px 20px 20px",
      padding: "20px 20px 20px 20px",
    }}
  >
    <div
      style={{
        backgroundColor: "rgba(224, 93, 11, 0.71)", // Soft yellow with transparency
        borderRadius: "10px", // Optional: Adds rounded corners to the background
        padding: "15px", // Optional: Adds some padding around the text
      }}
    >
      <p style={{fontSize: "1.5rem" , fontWeight: "bold"}}>School Of Computer Applications (SCA)</p>
      <p style={{fontSize: "1.4rem" , fontWeight: "bold"}}>Welcomes you to digital dashboard</p>
      <p style={{fontSize: "1.2rem" , fontWeight: "bold"}}>Batch 2025 MCA&apos; LPU</p>
    </div>
  </div>
</div>

      </div>
      <div className={styles.verticalDivider}></div>

      {/* Right Section */}
      <div
  style={{
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    //background: 'linear-gradient(135deg,rgba(243, 107, 17, 0.92) 0%, #ff6f00 40%, #000000 100%)',
 // smooth orange-black gradient
    color: 'white',
  }}
>

       <h1
  style={{
    fontSize: '100px',
    fontWeight: '700',
    color: '#f06406', // white text
  //  backgroundColor: '#f06406', // soft brown with some transparency
    marginBottom: '40px',
    textAlign: 'center',
    padding: '15px 20px',
    borderRadius: '8px', // optional for rounded corners
    textShadow: '2px 2px 4px rgb(8, 4, 0)', // inner text depth
  }}
>
  Continue as
</h1>

        {/* Buttons side by side */}
        <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  }}
>
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  }}
>
  {/* Recruiter */}
  <div style={{ textAlign: 'center' }}>
    <p style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px', color: 'white' }}>
      Recruiter
    </p>
    <button
      onClick={handleRecruiterClick}
      style={{
        backgroundColor: '#f4a300',
        color: 'black',
        padding: '18px 36px',
        fontSize: '22px',
        fontWeight: 'bold',
        border: 'none', // removed border
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)', // upgraded shadow
        animation: "glowing 20s linear infinite",
        filter: "drop-shadow(12px 10px 5px #f57c00)",
        top: "-3px",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#fff176';
        e.currentTarget.style.color = 'transparent';
        e.currentTarget.style.textShadow = '0 0 1.5px black';
        e.currentTarget.style.transform = 'scale(1.07)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#f4a300';
        e.currentTarget.style.color = 'black';
        e.currentTarget.style.textShadow = 'none';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      Recruiter
    </button>
  </div>

  {/* Student */}
  <div style={{ textAlign: 'center' }}>
    <p style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px', color: 'white' }}>
      Student
    </p>
    <button
      onClick={handleStudentClick}
      style={{
        backgroundColor:  ' #f57c00',
        color: 'black',
        padding: '18px 36px',
        fontSize: '22px',
        fontWeight: 'bold',
        border: 'none', // removed border
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)', // upgraded shadow
        animation: "glowing 20s linear infinite",
        filter: "drop-shadow(12px 10px 5px #f57c00)",
        top: "-5px",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#fff176';
        e.currentTarget.style.color = 'transparent';
        e.currentTarget.style.textShadow = '0 0 1.5px black';
        e.currentTarget.style.transform = 'scale(1.07)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#f57c00';
        e.currentTarget.style.color = 'black';
        e.currentTarget.style.textShadow = 'none';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      Student
    </button>
  </div>
</div>

</div>
</div>
    </div>
  );
}

export default Body;
