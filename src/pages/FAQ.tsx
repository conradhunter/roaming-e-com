import React from "react";
import Accordion from "../components/Accordion";

function FAQ() {
  return (
    <main className="row mx-auto">
      <h1 className="my-12 text-4xl text-center">
        Frequently asked questions.
      </h1>
      <section className="flex w-full mb-12">
        <Accordion />
      </section>
    </main>
  );
}

export default FAQ;
