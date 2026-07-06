"use client";

import { useState } from "react";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  message?: string;
}

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

function FormField({
  id,
  name,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
  error,
}: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-xs font-bold font-accent uppercase text-text-secondary">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`bg-surface border px-4 py-3 rounded-sm text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-150 ${error ? "border-red-500 focus:border-red-500" : "border-border-custom/50 focus:border-accent"
          }`}
      />
      {error && <span id={errorId} className="text-[11px] text-red-500 font-medium">{error}</span>}
    </div>
  );
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
  const [submitError, setSubmitError] = useState<string | null>(null);

  const hasErrors = Object.values(errors).some((e) => e);

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

    if (submitError) setSubmitError(null);

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitError(null);

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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
          from_name: "Olympic Windows Web Portal",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          subject: `New B2B Consultation: ${formData.service}`,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          service: "design",
          message: "",
        });
      } else {
        setSubmitError(result.message || "Failed to submit inquiry. Please verify your details and try again.");
      }
    } catch (error) {
      console.error("Form submission failed", error);
      setSubmitError("A connection error occurred. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
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
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-xs font-semibold flex items-center space-x-2 shadow-sm"
                role="alert"
              >
                <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
                <span>{submitError}</span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                id="name"
                name="name"
                label="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajay Damodar"
                error={errors.name}
              />
              <FormField
                id="companyName"
                name="companyName"
                label="Company Name"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. RJK Group"
                error={errors.companyName}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rajesh@rjk.com"
                error={errors.email}
              />
              <FormField
                id="phone"
                name="phone"
                label="Phone Number"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +919900011223"
                error={errors.phone}
              />
            </div>

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
                <option value="design">Design &amp; Optimization Consultation</option>
                <option value="manufacturing">Manufacturing (Windows &amp; Doors)</option>
                <option value="facades">Facade &amp; Curtain Walls</option>
                <option value="fins">Aluminum Architectural Fins</option>
                <option value="amc">AMC &amp; Gasket Inspection</option>
              </select>
            </div>

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
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`bg-surface border px-4 py-3 rounded-sm text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent/30 resize-none transition-all duration-150 ${errors.message ? "border-red-500 focus:border-red-500" : "border-border-custom/50 focus:border-accent"
                  }`}
              />
              {errors.message && <span id="message-error" className="text-[11px] text-red-500 font-medium">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || hasErrors}
              className={`w-full bg-accent hover:bg-accent-light text-white font-accent font-semibold py-4 rounded-sm transition-colors duration-200 text-sm uppercase tracking-wider disabled:opacity-50 flex items-center justify-center space-x-2 ${hasErrors ? "cursor-not-allowed" : ""}`}
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
