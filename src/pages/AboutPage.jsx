import React from "react";
import bgNumbersGif from "../assets/bg numbers.gif";
import normalProgrammerGif from "../assets/normal-programer.gif";

const AboutPage = () => {
  return (
    <div
      style={{
        boxShadow: "2px 1px 23px #9cb4d847",
      }}
      className="max-w-6xl mx-auto p-6 bg-[#36394473] box-[2px 1px 23px #9cb4d847] from-indigo-800 to-blue-600 text-white"
    >
      <h1 className="text-4xl font-bold mb-6 text-center">
        Discover the Realm of Code
      </h1>
      <p className="mb-6 text-lg">
        Welcome to the Realm of Code, a magical land where creativity meets
        technology! Here, wizards of all skill levels embark on epic quests to
        unlock the secrets of programming and web development.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Your Quest Awaits</h2>
      <p className="mb-4 text-lg">
        Are you ready to join fellow adventurers on a journey of discovery? Our
        enchanted hub offers a variety of paths tailored for aspiring sorcerers
        and seasoned coders alike.
      </p>

      {/* GIF Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-opacity-60 backdrop-blur-md rounded-lg overflow-hidden">
          <img
            src={normalProgrammerGif}
            alt="Coding Journey 1"
            className="rounded-lg"
          />
        </div>
        <div className="bg-opacity-60 backdrop-blur-md rounded-lg overflow-hidden">
          {/* <img src={graphicGif} alt="Coding Journey 2" className="rounded-lg" /> */}
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Choose Your Path</h2>
      <p className="mb-4 text-lg">
        In this magical realm, you have the freedom to choose your path. Each
        journey offers unique challenges and rewards:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          🧙‍♂️ Frontend Enchantment: Craft visually stunning user interfaces.
        </li>
        <li>🧙‍♂️ Backend Sorcery: Master the art of server-side magic.</li>
        <li>🧙‍♂️ Full-Stack Wizardry: Become a master of both realms!</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Featured Spells (Courses)</h2>
      <p className="mb-4 text-lg">
        Our spells are designed to equip you with the skills to navigate the
        digital landscape:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          📜 The Art of HTML: Lay the foundation of your digital creations.
        </li>
        <li>📜 CSS Sorcery: Add style and charm to your web pages.</li>
        <li>
          📜 JavaScript Incantations: Bring your creations to life with
          interactivity.
        </li>
      </ul>

      {/* Last GIF Section */}
      <div className="flex justify-center mb-6">
        <div className="bg-opacity-60 backdrop-blur-md rounded-lg overflow-hidden">
          <img
            src={bgNumbersGif}
            alt="Coding Journey 3"
            className="rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Join Our Guild</h2>
      <p className="text-lg mb-4">
        Become a member of our vibrant guild, where you can collaborate with
        fellow adventurers, share your triumphs, and seek guidance. Together,
        we’ll face challenges and celebrate victories in our quest for
        knowledge!
      </p>
      <p className="text-lg">
        The journey awaits, brave coder! Embrace the magic of learning and let’s
        build a future filled with possibilities!
      </p>
    </div>
  );
};

export default AboutPage;
