"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      if (response.ok) {
        setSubmitMessage('Email sent successfully!');
        setFormData(defaultFormState);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: { ...formData.name, value: e.target.value },
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: { ...formData.email, value: e.target.value },
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Your Message
        </label>
        <textarea
          id="message"
          value={formData.message.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: { ...formData.message, value: e.target.value },
            })
          }
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>

      <div>
        You can contact me via email at <a href="mailto:hello@alfiewebdev.com" className="underline text-yellow-600 hover:text-yellow-700">hello@alfiewebdev.com</a>
      </div>

      {submitMessage && (
        <p className={`text-sm ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {submitMessage}
        </p>
      )}
    </form>
  );
};
