import Image from "next/image";
import React from "react";
import Button from "./Button";
import Hero from "../assets/iphone14.png";

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>

      <div className="relative hidden h-[650px] w-[550px] transition-all duration-500 md:inline lg:h-[800px] lg:w-[600px]">
        <Image
                  alt="Iphone"
                  src={Hero}
                  fill
                  style={{ objectFit:"contain"}} />
      </div>
    </section>
  );
}

export default Landing;
