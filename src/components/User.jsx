import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function BioCard() {
  return (
    <div className="max-w-sm mx-auto bg-[black] text-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center p-4">
        <img
          src="https://mui.com/static/images/avatar/1.jpg"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        <div className="mt-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full">
            PRO
          </span>
        </div>
        <h2 className="text-lg font-bold mt-2">Amr Samir</h2>
        <p className="text-center mt-2">
          Hello, this is my bio and I am a PRO member. I am a developer and I
          love to code.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="#" aria-label="Facebook">
            <FaFacebook
              className="text-gray-400 hover:text-blue-600"
              size={24}
            />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter
              className="text-gray-400 hover:text-blue-400"
              size={24}
            />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram
              className="text-gray-400 hover:text-pink-500"
              size={24}
            />
          </a>
        </div>
        <div className="flex flex-col items-center p-4 bg-[#171a1c] w-[100%] my-[10px] rounded-lg shadow-md">
          <div className="flex space-x-2 w-full">
            <button className="w-full bg-black text-white font-medium py-2 rounded transition duration-300 hover:bg-gray-800">
              Message
            </button>
            <button className="w-full bg-black text-white font-medium py-2 rounded transition duration-300 hover:bg-gray-800">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
