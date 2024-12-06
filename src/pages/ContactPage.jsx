import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    message: "",
  });

  const form = useRef(); // Use the ref to access the form

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_n17rmf7"; // Replace with your Service ID
    const templateID = "template_yhxibka"; // Replace with your Template ID

    // Send the form data via EmailJS
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: "OTWuq16WTObLyUpO8", // Replace with your User Public Key
      })
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log("Error sending email:", error);
          alert("There was an error sending your message. Please try again.");
        }
      );

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      message: "",
    });
  };

  return (
    <section className="bg-gradient-to-b from-[--bg] to-gray-800 text-white py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Talk</h2>
          <p className="text-lg text-gray-300 mb-8 sm:px-16">
            Ready to unlock the power of your data? I’m here to help! Contact me
            for a free consultation and let’s explore together how we can
            optimize your customer retention.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[--form-bg] to-gray-900 p-8 rounded-lg shadow-md border-[0.7px] border-green-900">
          <form
            ref={form} // Reference to the form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName" // Name should match with the placeholder in the template
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="companyName"
              >
                Company name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter Company name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className=" bg-[#13D28A] text-black font-medium px-6 py-3 rounded-lg transition-all"
              >
                Schedule a FREE 15-minute consultation call
              </button>
            </div>
          </form>

          <p className="text-gray-400 mt-6">
            <a
              href="https://app.hubspot.com/signup-hubspot/marketing?"
              className="underline text-green-600 hover:text-green-500 transition-all"
            >
              Create your own free forms
            </a>{" "}
            to generate leads from your website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
