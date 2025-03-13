"use client"
import { Courses } from "@/components/assects/constant";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div style={{ backgroundColor: "white" }}>
      <section className="hero">
        <div className="container1">
          <div className="text">
            <div className="content">
              <h1>
                Welcome to{" "}
                <span
                  style={{
                    color: "purple",
                    fontWeight: "bolder",
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  }}
                >
                  Digital Coding School
                </span>
              </h1>
              <div className="description">
                Not sure which course to choose? I’ve got you covered. Browse
                courses and discover the best fit for you – it’s free! Digital
                Coding School is my way of teaching essential coding skills and
                techniques that took me years to master, all in a fraction of
                the time.
              </div>
              <div className="buttons">
                <button className="btn1"  onClick={() => router.push('/courses')}>
                  Free Courses
                </button>
                <button className="btn2" onClick={() => router.push('/blogs')}>
                  Explore Blogs
                </button>
              </div>
            </div>
          </div>
          <div className="image">
            <div className="background">
              <img
                src="https://mr-udit.github.io/images/hero-side-image.webp"
                alt="side image"
              />
            </div>
          </div>
        </div>
      </section>
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
            Recommended Courses
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
                  <button className="btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
