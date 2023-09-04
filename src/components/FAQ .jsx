import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is a portfolio website?',
      answer: 'A portfolio website is a platform where you can showcase your work, skills, and achievements. It serves as a way to present your professional or creative projects to potential clients, employers, or collaborators.',
    },
    {
      question: 'Why should I have a portfolio website?',
      answer: 'Having a portfolio website provides a centralized and professional platform to showcase your work. It allows you to demonstrate your skills, build credibility, and make a strong impression on potential clients or employers. A portfolio website also provides a way for others to easily discover and learn more about you and your work.',
    },
    {
      question: 'What should I include in my portfolio website?',
      answer: 'Your portfolio website should include a selection of your best work or projects, a brief introduction or bio about yourself, information about your skills and expertise, contact information, and any relevant accomplishments or testimonials. You may also consider adding an about page, a blog, or additional sections that highlight specific aspects of your work.',
    },
    {
      question: 'How can I make my portfolio website stand out?',
      answer: 'To make your portfolio website stand out, focus on presenting your work in a visually appealing and organized manner. Use high-quality images or videos, provide detailed descriptions of your projects, and showcase your unique style or approach. Pay attention to the overall design and user experience of your website. Additionally, consider optimizing your website for search engines and sharing it on relevant platforms to increase visibility.',
    },
    {
      question: 'Do I need to have coding skills to create a portfolio website?',
      answer: 'No, you don\'t necessarily need coding skills to create a portfolio website. There are various website builders and platforms available that offer user-friendly interfaces and templates to help you build a portfolio website without coding. However, having some basic knowledge of HTML, CSS, and JavaScript can give you more flexibility and customization options.',
    },
    // Add more question-answer pairs as needed
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="mx-20 ">
            <h1 className="text-center mb-2 text-2xl font-semibold text-white">FAQs</h1>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex justify-between items-center w-full p-4 bg-red-500 text-left"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-bold text-white">{faq.question}</span>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                index === openIndex ? 'rotate-180' : 'rotate-0'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {index === openIndex && (
            <div className="p-4 bg-gray-200 text-black">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;