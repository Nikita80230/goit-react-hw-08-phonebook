import React from 'react';

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <h1>Welcome to Phonebook App</h1>

      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        version="1"
        viewBox="0 0 48 48"
        enable-background="new 0 0 48 48"
        height="64"
        width="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF7043"
          d="M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"
        ></path>
        <path
          fill="#BF360C"
          d="M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"
        ></path>
        <g fill="#AB300B">
          <circle cx="26" cy="20" r="4"></circle>
          <path d="M33,30c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V30z"></path>
        </g>
      </svg>
    </div>
  );
};

export default HomePage;
