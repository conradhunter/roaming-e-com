import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";

function Accordion() {
  return (
    <CAccordion className='flex flex-col items-center w-full'>
      <CAccordionItem itemKey={1} className='w-2/3'>
        <CAccordionHeader>What is our mission?</CAccordionHeader>
        <CAccordionBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad fuga
          dolorum voluptatum suscipit, saepe veniam perferendis, possimus
          impedit laudantium, in neque temporibus similique cum.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2} className='w-2/3'>
        <CAccordionHeader>Can I buy Roaming products in person?</CAccordionHeader>
        <CAccordionBody>
          No. Roaming items can only be purchased on this website (For now).
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3} className='w-2/3'>
        <CAccordionHeader>Can I be sponsored?</CAccordionHeader>
        <CAccordionBody>
          Yes. Email a video promo of yourself to admin@roaming.com you will here back in 3-5 business days.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={4} className='w-2/3'>
        <CAccordionHeader>How do I know what size to order?</CAccordionHeader>
        <CAccordionBody>
          See our <Link className="underline" to='/sizing-guide'>sizing guide</Link> to ensure you get your right fit.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={5} className='w-2/3'>
        <CAccordionHeader>What is your return/refund policy?</CAccordionHeader>
        <CAccordionBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad fuga
          dolorum voluptatum suscipit, saepe veniam perferendis, possimus
          impedit laudantium, in neque temporibus similique cum.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={6} className='w-2/3'>
        <CAccordionHeader>Is Roaming hiring?</CAccordionHeader>
        <CAccordionBody>
          Yes. Email your résumé and cover letter to careers@roaming.com
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  );
}

export default Accordion;
