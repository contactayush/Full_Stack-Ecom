import React from "react";
import Faqsconainer from "./faqsconainer";

const Faqs = () => {
  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "To place an order, navigate to our website, browse the products, and click on the 'Add to Cart' button. Follow the on-screen instructions to complete your purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, and other secure payment methods. You can choose your preferred payment option during the checkout process.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website or the courier's website.",
    },
  ];
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Faqsconainer ques={faq.question} ans={faq.answer} />
        </div>
      ))}
    </div>
  );
};

export default Faqs;
