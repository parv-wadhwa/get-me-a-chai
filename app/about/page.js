import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 md:px-10 lg:px-20 py-10">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          About Get Me A Chai ☕
        </h1>
        <p className="text-gray-400 text-sm md:text-lg lg:text-xl">
          A platform where creators connect with their audience and receive
          support through simple and secure payments.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
            Get Me A Chai is built to empower creators by giving them a simple
            way to receive support from their audience. Whether you are a
            developer, artist, or content creator, this platform helps you turn
            appreciation into meaningful support.
          </p>
        </div>

        <div className="bg-slate-800 p-6 md:p-10 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Why This Platform?
          </h3>
          <ul className="text-gray-400 space-y-2 text-sm md:text-base">
            <li>✔ Easy payment integration with Razorpay</li>
            <li>✔ Secure and fast transactions</li>
            <li>✔ Creator-focused experience</li>
            <li>✔ Clean and responsive UI</li>
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center text-2xl md:text-4xl font-semibold mb-10">
          Features 
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Payments 💳
            </h3>
            <p className="text-gray-400 text-sm">
              Seamless Razorpay integration for secure payments.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Dashboard 📊
            </h3>
            <p className="text-gray-400 text-sm">
              Track your supporters and earnings in one place.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Community ❤️
            </h3>
            <p className="text-gray-400 text-sm">
              Build stronger connections with your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Get Me A Chai",
}
