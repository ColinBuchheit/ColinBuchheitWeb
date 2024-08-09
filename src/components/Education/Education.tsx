import React from 'react';
import './Education.css';

const Education: React.FC = () => (
  <div className="education">
    <h1>Education</h1>
    <ul>
      <li><strong>University of Missouri – Columbia, Missouri</strong>
        <ul>
          <li>BS in Information Technology, College of Engineering</li>
          <li>Anticipated Graduation: May 2025</li>
          <li>GPA: 3.65, Major GPA: 3.9</li>
          <li>High Dean's List</li>
          <li>Clubs: Mizzou Computing Association, Mizzou Space Program, Astronomy Club</li>
        </ul>
      </li>
      <li><strong>St. Louis Community College – St. Louis, Missouri</strong>
        <ul>
          <li>Associate Degree</li>
          <li>January 2022 to Summer 2023</li>
          <li>Utilized the A+ program to complete the general education requirements for the University of Missouri Information Technology transfer student.</li>
          <li>Member of Phi Theta Kappa (Honors Fraternity for students with a minimum 3.5 GPA)</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Education;
