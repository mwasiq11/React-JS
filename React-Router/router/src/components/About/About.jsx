import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1cce5b27852743.5636bd1c7c151.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React Development is carried out by Passionate Developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Web design is the process of creating visually appealing and user-friendly websites. It involves a blend of aesthetics, functionality, and usability to ensure that users have a smooth and engaging experience. Good web design includes thoughtful layout, color schemes, typography, and navigation, all tailored to the target audience.
                      </p>
                      <p className="mt-4 text-gray-600">
                      It also considers responsiveness, making sure the site works well on devices of all sizes. A well-designed website not only looks professional but also helps build trust and credibility with users. In today’s digital world, effective web design is essential for businesses, brands, and individuals looking to make a strong online presence.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}

