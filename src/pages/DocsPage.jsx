import { motion } from "framer-motion";
import React, { useState } from "react";
import docs from "../Constant/docs"; // Import the docs file

const DocsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter docs based on search term
  const filteredDocs = docs.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Variants for staggered animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }, // Staggered effect
    }),
    hover: { scale: 1.05 }, // Scale effect on hover
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">
      <motion.h1
        className="text-5xl font-bold text-center mb-4 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Programming Language Documentation
      </motion.h1>
      <motion.p
        className="text-center mb-6 text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore the official documentation for various programming languages.
        Use the search bar below to filter them.
      </motion.p>
      <div className="flex justify-center mb-8">
        <motion.input
          type="text"
          placeholder="Search documentation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc, index) => (
            <motion.div
              key={doc.title}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg p-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index} // Pass the index for staggered animation
            >
              <h2 className="text-3xl font-semibold mb-2">{doc.title}</h2>
              <p className="mb-4">
                Click the button below to visit the official documentation.
              </p>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-500 transition duration-300"
              >
                View Documentation
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl">No documentation found.</h2>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DocsPage;
