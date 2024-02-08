import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contact</h1>
      <form action="https://getform.io/f/b5ea2a6b-976a-457b-9188-0fc7a8788e14" method="POST" encType="multioart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2" >
          <div className=" flex flex-col" >
            <label className=" uppercase text-sm py-2" for="name" >Name</label>
            <input className=" flex border-2 rounded-md p-3 border-gray-300" type="text" name="name" id="name" autoComplete="off"/>
          </div>
          <div className=" flex flex-col">
            <label className=" uppercase text-sm py-2" for="phone">Phone Number</label>
            <input className=" flex border-2 rounded-md p-3 border-gray-300" type="text" name="phone" id="phone"autoComplete="off"/>
          </div>
          <div className=" flex flex-col col-span-2">
            <label className=" uppercase text-sm py-2" for="email">Email</label>
            <input className=" flex border-2 rounded-md p-3 border-gray-300" type="email" name="nemailame" id="email"autoComplete="off"/>
          </div>
          <div className=" flex flex-col col-span-2">
            <label className=" uppercase text-sm py-2" for="subject">Subject</label>
            <input className=" flex border-2 rounded-md p-3 border-gray-300" type="text" name="subject" id="subject"/>
          </div>
          <div className=" flex flex-col col-span-2">
            <label className=" uppercase text-sm py-2" for="message">Message</label>
            <textarea className=" flex border-2 rounded-md p-3 border-gray-300" rows='10' name="message" id="message"/>
          </div>
          <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg col-span-2" >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
