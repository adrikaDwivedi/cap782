import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Body.module.css';

const Body = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRecruiterClick = () => navigate('/StudentList');
  const handleStudentClick = () => navigate('/StudentForm');

  return (
    <div
      className={styles.mainCont}
      style={{
        flexDirection: isMobile ? 'column' : 'row',
        padding: isMobile ? '20px' : '0',
      }}
    >
      {/* LEFT SECTION */}
      <div className={styles.leftH} style={{ width: isMobile ? '100%' : '50%' }}>
        <div
          style={{
            width: '100%',
            border: "2px solid white",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            boxShadow: "10px 14px 20px rgba(0,0,0,0.4)",
            margin: isMobile ? "40px 0" : "200px 20px",
            padding: "20px",
          }}
        >
          <div style={{ padding: "20px" }}>
            <div
              style={{
                backgroundColor: "rgba(224, 93, 11, 0.75)",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: isMobile ? "1.2rem" : "1.5rem", fontWeight: "bold" }}>
                School Of Computer Applications (SCA)
              </p>
              <p style={{ fontSize: isMobile ? "1.1rem" : "1.4rem", fontWeight: "bold" }}>
                Welcomes you to digital dashboard
              </p>
              <p style={{ fontSize: isMobile ? "1rem" : "1.2rem", fontWeight: "bold" }}>
                Batch 2025 MCA LPU
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider hide on mobile */}
      {!isMobile && <div className={styles.verticalDivider}></div>}

      {/* RIGHT SECTION */}
      <div
        style={{
          flex: 1,
          padding: isMobile ? '20px' : '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? '2.5rem' : '80px',
            fontWeight: '700',
            color: '#f06406',
            marginBottom: '40px',
            textShadow: '2px 2px 6px rgb(8,4,0)',
          }}
        >
          Continue as
        </h1>

        {/* BUTTONS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '20px' : '40px',
            flexDirection: isMobile ? 'column' : 'row',
            width: isMobile ? '100%' : 'auto',
          }}
        >
          {/* Recruiter */}
          <div style={{ textAlign: 'center' }}>
            
            <button
              onClick={handleRecruiterClick}
              style={{
                backgroundColor: '#f57c00',
                color: 'black',
                padding: '16px 30px',
                fontSize: '20px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
                width: isMobile ? '100%' : 'auto',
              }}
            >
              Recruiter
            </button>
          </div>

          {/* Student */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleStudentClick}
              style={{
                backgroundColor: '#f57c00',
                color: 'black',
                padding: '16px 30px',
                fontSize: '20px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
                width: isMobile ? '100%' : 'auto',
              }}
            >
              Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;