"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    service: "design",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    if (!value.trim() && name !== "companyName") {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address.";
      }
    }

    if (name === "phone") {
      const phoneRegex = /^\+?[0-9\s\-()]{10,15}$/;
      if (!phoneRegex.test(value.replace(/\s+/g, ""))) {
        return "Please enter a valid phone number (10-15 digits).";
      }
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error dynamically as the user types
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending data to Formspree/API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      companyName: "",
      name: "",
      email: "",
      phone: "",
      service: "design",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="bg-surface-alt border border-border-custom/40 p-8 md:p-10 rounded-sm min-h-[500px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-12 text-center space-y-4"
          >
            <CheckCircle className="h-16 w-16 text-accent" />
            <h3 className="text-2xl font-bold text-primary font-accent">Consultation Requested</h3>
            <p className="text-sm text-text-secondary max-w-sm">
              Thank you for submitting your details. Our design engineers will review your inquiry and get in touch shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-xs font-bold font-accent uppercase text-text-secondary">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`bg-surface border px-4 py-3 rounded-sm text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-150 ${
                    errors.name ? "border-red-500 focus:border-red-500" : "border-border-custom/50 focus:border-accent"
                  }`}
                />
                {errors.name && <span className="text-[11px] text-red-500 font-medium">{errors.name}</span>}
              </div>

              {/* Company Name */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="companyName" className="text-xs font-bold font-accent uppercase text-text-secondary">
                  Company Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Developers"
                  className={`bg-surface border px-4 py-3 rounded-sm text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-150 ${
                    errors.companyName ? "border-red-500 focus:border-red-500" : "border-border-custom/50 focus:border-accent"
                  }`}
                />
                {errors.companyName && <span className="text-[11px] text-red-500 font-medium">{errors.companyName}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs font-bold font-accent uppercase text-text-secondary">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@acme.com"
                  className={`bg-surface border px-4 py-3 rounded-sm text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-150 ${
                    errors.email ? "border-red-500 focus:border-red-500" : "border-border-custom/50 focus:border-accent"
                  }`}
                />
                {errors.email && <span className="text-[11px] text-red-500 font-medium">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-xs font-bold font-accent uppercase text-text-secondary">
                  Phone Number <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98200 00000"
                  className={`bg-surface border px-4 py-3 rounded-sm text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-150 ${
                    errors.phone ? "border-red-500 focus:border-red-500" : "border-border-custom/50 focus:border-accent"
                  }`}
                />
                {errors.phone && <span className="text-[11px] text-red-500 font-medium">{errors.phone}</span>}
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="service" className="text-xs font-bold font-accent uppercase text-text-secondary">
                Services Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="bg-surface border border-border-custom/50 px-4 py-3 rounded-sm text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 h-[46px] transition-all duration-150"
              >
                <option value="design">Design & Optimization Consultation</option>
                <option value="manufacturing">Manufacturing (Windows & Doors)</option>
                <option value="facades">Facade & Curtain Walls</option>
                <option value="fins">Aluminum Architectural Fins</option>
                <option value="amc">AMC & Gasket Inspection</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-xs font-bold font-accent uppercase text-text-secondary">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your design, quantity, or project requirements..."
                className={`bg-surface border px-4 py-3 rounded-sm text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent/30 resize-none transition-all duration-150 ${
                  errors.message ? "border-red-500 focus:border-red-500" : "border-border-custom/50 focus:border-accent"
                }`}
              />
              {errors.message && <span className="text-[11px] text-red-500 font-medium">{errors.message}</span>}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent-light text-white font-accent font-semibold py-4 rounded-sm transition-colors duration-200 text-sm uppercase tracking-wider disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <span>Request Technical Consultation</span>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
