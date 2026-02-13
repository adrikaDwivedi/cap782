import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Body.module.css';

const Body = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRecruiterClick = () => {
    navigate('/StudentList');
  };

  const handleStudentClick = () => {
    navigate('/StudentForm');
  };

  return (
    <div className={styles.mainCont}
      style={{
        flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
      }}
    >
      <div className={styles.leftH}>
        <div
          style={{
            width: isMobile ? '100%' : '50%',
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
                backgroundColor: "rgba(224, 93, 11, 0.71)",
                borderRadius: "10px",
                padding: "15px",
              }}
            >
              <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>School Of Computer Applications (SCA)</p>
              <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Welcomes you to digital dashboard</p>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Batch 2025 MCA LPU</p>
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
          color: 'white',
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? '3rem' : '100px',
            fontWeight: '700',
            color: '#f06406',
            marginBottom: '40px',
            textAlign: 'center',
            padding: '15px 20px',
            borderRadius: '8px',
            textShadow: '2px 2px 4px rgb(8, 4, 0)',
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
            flexDirection: isMobile ? 'column' : 'row',
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
                backgroundColor: '#f57c00',
                color: 'black',
                padding: '18px 36px',
                fontSize: '22px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)',
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
                backgroundColor: '#f57c00',
                color: 'black',
                padding: '18px 36px',
                fontSize: '22px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)',
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
  );
};

export default Body;
