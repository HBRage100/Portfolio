import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    //here we make an empty array for all input use in html form with the same name
    formName: "",
    formNumber: "",
    formEmail: "",
    formMessage: "",
  });

  const [errors, setErrors] = useState({}); // this will show us errors msg

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, // ... dots to get allinput value in object
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.formName.trim() === "") {
      newErrors.formName = "Name is required";
    }

    if (formData.formNumber.trim() === "") {
      newErrors.formNumber = "Phone number is required";
    } else if (!/^\d{12}$/.test(formData.formNumber)) {
      newErrors.formNumber = "Phone number must be 12 digits";
    }

    if (formData.formEmail.trim() === "") {
      newErrors.formEmail = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.formEmail)
    ) {
      newErrors.formEmail = "Invalid email address";
    }

    if (formData.formMessage.trim() === "") {
      newErrors.formMessage = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // this wil stop browser default function like auto post on refresh
    // alert("ok"); // just to check my control
    if (validateForm()) {
    }
  };
  return (
    <>
      <section
        id="contact"
        className="bg-[#260638] w-full text-white lg:px-40 md:px-10 px-4 h-auto max-sm:pb-4 flex flex-wrap lg:pt-32 md:pt-20 pt-20"
      >
        {/* 1st Div */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
            Contact
          </h1>
          <form action="post" className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="formName" className="pt-2">
              NAME
            </label>
            <input
              type="text"
              className={
                errors.formName
                  ? "p-4 lg:w-2/3 w-full border-[1px] border-red-600 bg-transparent rounded-md"
                  : "p-4 lg:w-2/3 w-full border-[1px] border-purple-600 bg-transparent rounded-md"
              }
              placeholder="Enter your name"
              id="formName"
              name="formName"
              value={formData.formName}
              onChange={handleChange}
            />
            {errors.formName && (
              <span className="text-red-600">{errors.formName}</span>
            )}

            <label htmlFor="formNumber" className="pt-2">
              Phone
            </label>
            <input
              type="text"
              className={
                errors.formNumber
                  ? "p-4 lg:w-2/3 w-full border-[1px] border-red-600 bg-transparent rounded-md"
                  : "p-4 lg:w-2/3 w-full border-[1px] border-purple-600 bg-transparent rounded-md"
              }
              placeholder="Enter your number"
              id="formNumber"
              name="formNumber"
              value={formData.formNumber}
              onChange={handleChange}
            />
            {errors.formNumber && (
              <span className="text-red-600">{errors.formNumber}</span>
            )}

            <label htmlFor="formEmail" className="pt-2">
              Email
            </label>
            <input
              type="text"
              className={
                errors.formEmail
                  ? "p-4 lg:w-2/3 w-full border-[1px] border-red-600 bg-transparent rounded-md"
                  : "p-4 lg:w-2/3 w-full border-[1px] border-purple-600 bg-transparent rounded-md"
              }
              placeholder="Enter your email"
              id="formEmail"
              name="formEmail"
              value={formData.formEmail}
              onChange={handleChange}
            />
            {errors.formEmail && (
              <span className="text-red-600">{errors.formEmail}</span>
            )}

            <label htmlFor="formMessage" className="pt-2">
              MESSAGE
            </label>
            <textarea
              name="formMessage"
              id="formMessage"
              cols="30"
              rows="10"
              placeholder="Enter your message"
              className={
                errors.formMessage
                  ? "p-4 lg:w-2/3 w-full border-[1px] border-red-600 bg-transparent rounded-md h-40"
                  : "p-4 lg:w-2/3 w-full border-[1px] border-purple-600 bg-transparent rounded-md h-40"
              }
              value={formData.formMessage}
              onChange={handleChange}
            />
            {errors.formMessage && (
              <span className="text-red-600">{errors.formMessage}</span>
            )}

            <button className="mt-4 lg:w-2/3 w-full border-2 border-purple-600 bg-purple-600 py-4 rounded-md text-lg font-semibold">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
