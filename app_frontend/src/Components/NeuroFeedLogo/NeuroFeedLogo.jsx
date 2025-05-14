import React from 'react'

function NeuroFeedLogo() {
  return (
      <svg
          width="160"
          height="50"
          viewBox="0 0 160 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          {/* Brain-like symbol */}
          <circle cx="15" cy="25" r="10" fill="#f66435" />
          <circle cx="25" cy="20" r="8" fill="#4b4453" />
          <circle cx="25" cy="30" r="8" fill="#4b4453" />
          <circle cx="35" cy="25" r="6" fill="#f66435" />

          {/* Text part */}
          <text
              x="50"
              y="32"
              fill="#f66435"
              fontSize="18"
              fontWeight="bold"
          >
              NeuroFeed
          </text>
      </svg>
  );
}

export default NeuroFeedLogo