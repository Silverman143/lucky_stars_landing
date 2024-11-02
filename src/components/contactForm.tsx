import { TFunction } from "i18next";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  t: TFunction<"translation", undefined>;
}

const ContactForm: React.FC<Props> = ({ t, ...props }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Типизация для события изменения
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Типизация для события отправки формы
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full h-auto" {...props}>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("form_name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("form_email")}*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("form_email")}
            className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("form_message")}*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("form_message")}
            className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold text-white bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          {t("form_button")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
