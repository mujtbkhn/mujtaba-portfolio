// components/Footer.tsx

import Image from "next/image";
import React from "react";
import signature from "../../public/hand.png";
const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container px-4 mx-auto text-center">
        <div className="flex justify-center">
        <Image src={signature} alt=" " />
        </div>
        <p className="text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Mujtaba Khan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
