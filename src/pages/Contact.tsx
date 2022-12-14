import { CButton } from "@coreui/react";
import React from "react";

function Contact() {
  return (
    <main className="row mx-auto my-8">
      <section>
        <h1 className="text-4xl text-center">How can we help you?</h1>
        <form
          action="POST"
          className="my-8 flex flex-wrap gap-6 items-center justify-center"
        >
          <div className="flex flex-col w-5/12">
            <label htmlFor="">Full Name</label>
            <input type="text" className="input input-bordered input-primary w-full max-w-md bg-blue-100 border-2" />
          </div>
          <div className="flex flex-col w-5/12">
            <label htmlFor="">Email</label>
            <input type="email" className="input input-bordered input-primary w-full max-w-md bg-blue-100 border-2" />
          </div>
          <div className="flex flex-col w-5/12">
            <label htmlFor="">Phone Number</label>
            <input
              type="tel" /* JS intl. tel input https://www.twilio.com/blog/international-phone-number-input-html-javascript   */
              className="input input-bordered input-primary w-full max-w-md bg-blue-100 border-2"
            />
          </div>
          <div className="flex flex-col w-5/12">
            <label htmlFor="">Subject</label>
            <select name="Subject" className="input input-bordered input-primary w-full max-w-md bg-blue-100 border-2">
              <option value="hello">Hello</option>
              <option value="world">World</option>
            </select>
          </div>
          <div className="flex flex-col w-5/12">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols={30} rows={10} className='mb-8 textarea textarea-primary bg-blue-100 border-2'></textarea>
            <button className="btn btn-primary w-32 mx-auto">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
