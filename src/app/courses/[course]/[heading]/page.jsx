import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = async ({ params }) => {
  // console.log(params)
  const { heading, course } = await params;
  return (
    <div>
      <Header />
      <div className="container">
        <div className="container">
          <div className="video">
            <video src="/videos/1.mp4" title={heading} width={400} controls>
              {heading}
            </video>
          </div>
          <div className="heading">
            <h1>{heading}</h1>
          </div>
        </div>
        <div className="container">
            this is a container
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
