import React from "react";

const Contact = () => {
  return (
    <section
  id="contact"
  className="flex flex-col md:flex-row h-full items-center justify-center py-20 px-6 md:px-10 gap-12"
>
  {/* Contact Content */}
  <div className="w-full md:w-[40%] flex flex-col text-start items-start justify-start mb-10 md:mb-20 px-10 md:px-20">
    <h2 className="text-4xl md:text-5xl text-white font-semibold">Contact Us</h2>
    <p className="text-white text-sm md:text-lg mt-4">
      Have a
      <span className="text-purple-300"> Project in mind? <br /></span>
      We’d love to hear from you! Reach out to us, and let's turn your
      <span className="text-purple-300"> Ideas into Reality.</span>
    </p>
    <h3 className="text-xl md:text-2xl text-white font-semibold pt-8 pb-4">
      Alternate Contact:
    </h3>
    <p className="text-purple-300 text-sm md:text-lg">
      Email: <span className="text-white">Karankendreg@gmail.com</span>
    </p>
    <p className="text-purple-300 text-sm md:text-lg mt-2">
      Whatsapp: <span className="text-white">+918767443431</span>
    </p>
  </div>

  {/* Contact Form */}
  <div className="w-full md:w-[30%] p-6 md:p-8  rounded-lg shadow-lg">
    <form>
      <h2 className="text-3xl text-white font-semibold mb-6 ">Send Message</h2>

      {/* Full Name */}
      <div className="relative mb-6">
        <input
          type="text"
          className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
          placeholder="Enter Full Name"
          required
        />
      </div>

      {/* Email */}
      <div className="relative mb-6">
        <input
          type="email"
          className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
          placeholder="Enter Email"
          required
        />
      </div>

      {/* Message */}
      <div className="relative mb-6">
        <textarea
          className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
          placeholder="Type Your Message..."
          rows="4"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <input
          type="submit"
          value="Send"
          className="bg-purple-500 text-white py-3 px-8 cursor-pointer hover:bg-purple-600 transition rounded-full w-full md:w-auto"
        />
      </div>
    </form>
  </div>
</section>

  );
};

export default Contact;
