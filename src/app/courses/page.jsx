"use client"
import { Courses } from "@/components/assects/constant";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <section className="courses">
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            }}
          >
            Our Courses
          </h2>
          <div className="courses">
            {Courses.map((course, index) => (
              <div className="card" key={index}>
                <div className="thumbnail">
                  <img src={course.image} alt="course" />
                </div>
                <div className="content">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <button className="btn" onClick={()=> router.push(`/courses/${course.link}`)}>Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default page;
