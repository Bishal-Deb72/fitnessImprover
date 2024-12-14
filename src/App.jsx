import React from 'react';

const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-black to-gray-800 relative">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-60"
        style={{ backgroundImage: 'url("https://path_to_your_bloody_image.jpg")' }}
      ></div>

      {/* Main Container */}
      <div className="flex justify-between items-center w-full h-full relative px-10">
        {/* Left Side Static and Animated Text */}
        <div className="text-white w-1/2">
          <h1 className="text-6xl font-bold mb-6">Fitness Tracker</h1>
          <div className="text-lg">
            <div className="text-3xl animate-pulse">Reach Your Fitness Goals!</div>
            <div className="overflow-hidden w-full text-xl animate-marquee mt-4">
              <p className="animate-marquee-text">Track your progress, stay healthy, and achieve your dream body.</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/3 bg-white bg-opacity-80 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Personal Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="age" className="block text-gray-700">Age</label>
              <input type="number" id="age" name="age" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="gender" className="block text-gray-700">Gender</label>
              <select id="gender" name="gender" className="w-full p-2 border border-gray-300 rounded-md">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="weight" className="block text-gray-700">Weight (kg)</label>
              <input type="number" id="weight" name="weight" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="height" className="block text-gray-700">Height (cm)</label>
              <input type="number" id="height" name="height" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="weight-loss" className="block text-gray-700">How much weight do you want to lose per week?</label>
              <input type="number" id="weight-loss" name="weight-loss" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-full">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Marquee Animation CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-marquee-text {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
