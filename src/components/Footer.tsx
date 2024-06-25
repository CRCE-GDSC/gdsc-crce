import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-base-content gap-2 p-11">
        <div className="mr-2 py-3">
          <h2 className="mb-4 text-3xl font-semibold uppercase text-white">
            GDSC Community
          </h2>
          <p className="text-normal text-gray-400">
            Helping students to bridge the gap between theory and practice. By
            joining a GDSC, students grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and
            their community.
          </p>

          <div className="py-3">
            <div className="flex flex-row" id="foot">
              <a
                className="p-3"
                href="https://www.instagram.com/gdsc_crce/"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 -50 448 512"
                  className="text-white"
                  height="35"
                  width="35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                className="p-3"
                href="https://www.linkedin.com/company/gdsc-crce/mycompany/"
                target="_blank"
              >
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>Linkedin</title>
                  <g
                    id="Icon/Social/linkedin-color"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"
                      id="Shape"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto my-4 mb-10 w-1/2 border-b border-gray-500"></div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-3">
            <div className="pb-3 text-lg font-semibold uppercase text-white">
              Useful Links
            </div>
            <div className="grid">
              <div className="pb-4 text-gray-600 ease-in-out hover:translate-x-1 hover:underline">
                {' '}
                <a href="/">Home </a>
              </div>
              <div className="pb-4 text-gray-600 ease-in-out hover:translate-x-1 hover:underline">
                {' '}
                <a href="#events">Events</a>
              </div>
              <div className="pb-4 text-gray-600 ease-in-out hover:translate-x-1 hover:underline">
                {' '}
                <a href="#team">Our Team</a>
              </div>
              <div className="pb-4 text-gray-600 ease-in-out hover:translate-x-1 hover:underline">
                <a href="https://developers.google.com/community-guidelines">
                  Community Guidelines
                </a>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="pb-3 text-lg font-semibold uppercase text-white">
              Contact Us
            </div>
            <div className="mb-2 pb-2 text-gray-500">
              Fr. Conceicao Rodrigues College Of Engineering Bandra (W),
              Mumbai-400051 Maharashtra, India
            </div>
            <div className="grid grid-cols-1">
              <span className="text-gray-500">
                <strong className="text-gray-500">Phone : </strong>+91
                9769406063
              </span>
              <span className="text-gray-500">
                <strong className="text-gray-500">Email : </strong>
                crcegdsc@gmail.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
