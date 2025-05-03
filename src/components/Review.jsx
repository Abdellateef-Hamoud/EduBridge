import React from "react";
import SectionHeader from "../components/SectionHeader";
import { ratingData } from "../../data";
import ReviewCard from "./ReviewCard"; 

export default function Review() {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title={"Each and every client is important"}
          description={
            "Discover what our students are saying in the Reviews section! Real feedback from learners who have experienced and benefited from our courses"
          }
        />
      <div className="ratings">
        {ratingData.map((review) => {
          const { id, stars, img, job, description, name } = review;
          return (
            <ReviewCard
              key={id}
              stars={stars}
              img={img}
              job={job}
              description={description}
              name={name}
            />
          );
        })}
      </div>


      </div>


    </section>
  );
}