import { Tutorials } from "@/components/assects/constant";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <section>
        <h1 style={{textAlign:"center",fontSize:"40px",fontFamily:"Algerian"}}>Tutorials</h1>
        <div className="tutorial">
          {Tutorials.map((Tutorial, key) => (
            <div className="tutorial-card" key={key}>              <div className="image">
                <img src={Tutorial.image} alt={Tutorial.name} width={80} />
              </div>
              <div className="heading">
                <h2>{Tutorial.name}</h2>
              </div>
              <div className="button">
                <button>Lean now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
