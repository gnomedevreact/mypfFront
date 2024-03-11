const Home = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
          stroke={isActive ? "#ffffff" : "#a3a3a3"}
          strokeWidth="1.5"
        ></path>
        <path
          d="M15 18H9"
          stroke={isActive ? "#ffffff" : "#a3a3a3"}
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
};

const Portfolio = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M22 10.32C22 9.25914 21.5786 8.24172 20.8284 7.49158C20.0783 6.74143 19.0609 6.32001 18 6.32001H6C4.93913 6.32001 3.92178 6.74143 3.17163 7.49158C2.42149 8.24172 2 9.25914 2 10.32"
          stroke={isActive ? "#ffffff" : "#a3a3a3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 10.32C15.91 16.32 8.09 16.32 2 10.32"
          stroke={isActive ? "#ffffff" : "#a3a3a3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.9999 10.32L20.9999 18.32C20.8507 19.4088 20.3192 20.4089 19.5002 21.1417C18.6813 21.8745 17.6285 22.2922 16.5299 22.32H7.38989C6.29132 22.2922 5.23847 21.8745 4.41956 21.1417C3.60064 20.4089 3.0691 19.4088 2.91992 18.32L1.91992 10.32"
          stroke={isActive ? "#ffffff" : "#a3a3a3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.00977 6.03998C8.00977 4.97911 8.43119 3.96169 9.18134 3.21155C9.93148 2.4614 10.9489 2.03998 12.0098 2.03998C13.0706 2.03998 14.0881 2.4614 14.8382 3.21155C15.5883 3.96169 16.0098 4.97911 16.0098 6.03998"
          stroke={isActive ? "#ffffff" : "#a3a3a3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

const About = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={isActive ? "#ffffff" : "#a3a3a3"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
          fill={isActive ? "#ffffff" : "#a3a3a3"}
        ></path>
      </g>
    </svg>
  );
};

const Mail = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      viewBox="0 -4 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={isActive ? "#ffffff" : "#a3a3a3"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>mail</title> <desc>Created with Sketch Beta.</desc>
        <defs> </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Icon-Set"
            transform="translate(-412.000000, -259.000000)"
            fill={isActive ? "#ffffff" : "#a3a3a3"}
          >
            <path
              d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z"
              id="mail"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

const Geo = () => {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#800080">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      </g>
    </svg>
  );
};

export const Svg = {
  Home,
  Mail,
  About,
  Portfolio,
  Geo,
};
