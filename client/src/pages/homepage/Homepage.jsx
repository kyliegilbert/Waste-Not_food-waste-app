
import React from 'react';
import "./homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="slider">
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/dqw6fjffy/image/upload/v1659781855/zero_waste_phnqr7.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dqw6fjffy/image/upload/v1659784093/zero_waste_cceiot.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dqw6fjffy/image/upload/v1659781829/food-waste-maters_gjuypz.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </>
  );
}
