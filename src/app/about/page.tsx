import React from "react";
import Image from "next/image";
import CloudImage from "../../../public/cloud-hosting.png";

const AboutPage = () => {
  return (
    <section className="fix-height countainer m-auto">
      <h1 className="text-3xl font-bold text-gray-800 p-5"> About Page</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ipsam
        nulla id libero sint laudantium quam ab autem accusantium consectetur
        nesciunt in earum, deleniti rem, aspernatur recusandae sit dolorum
        numquam.
      </p>
      <div>
        <Image src={CloudImage} alt="cloud" width={500} height={500} />
      </div>
    </section>
  );
};

export default AboutPage;
