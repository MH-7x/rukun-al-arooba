"use client";

import CTA from "@/components/base/CTA";
import Link from "next/link";
import React, { useState, useRef } from "react";

type Reason = "sell" | "buy" | "general";

export default function ContactForm() {
  const [reason, setReason] = useState<Reason>("general");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [preferredService, setPreferredService] = useState<{
    pickup: boolean;
    delivery: boolean;
  }>({ pickup: true, delivery: false });
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | { id: string; name: string }>(
    null
  );
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  // simple validators
  function validate() {
    const e: Record<string, string> = {};
    if (!name || name.trim().length < 2)
      e.name = "Please enter your full name.";
    const digits = phone.replace(/[^0-9+]/g, "");
    if (!digits || digits.length < 7)
      e.phone = "Please enter a valid phone number (WhatsApp preferred).";
    if (!reason) e.reason = "Please select a reason for contact.";
    if (!city) e.city = "Please select a city.";
    if ((reason === "sell" || reason === "buy") && !category)
      e.category = "Select a furniture category.";
    if (files.length > 3) e.files = "You can upload up to 3 images.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files;
    if (!selected) return;
    const list = Array.from(selected).slice(0, 3);
    setFiles(list);
    // clear file input value so same file can be re-picked if removed
    e.currentTarget.value = "";
  }

  function removeFile(index: number) {
    setFiles((s) => s.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      if (liveRegionRef.current)
        liveRegionRef.current.textContent =
          "Form contains errors. Please check the highlighted fields.";
      return;
    }

    setLoading(true);
    setErrors({});

    // Build form data
    const payload = new FormData();
    payload.append("reason", reason);
    payload.append("name", name);
    payload.append("phone", phone);
    payload.append("email", email);
    payload.append("city", city);
    payload.append("area", area);
    payload.append("category", category);
    payload.append("condition", condition);
    payload.append("preferredService", JSON.stringify(preferredService));
    payload.append("message", message);
    files.forEach((f, _) => payload.append(`files`, f, f.name));

    try {
      // Replace this fetch with your actual API endpoint
      // For demo, we simulate a small delay and success response
      const data = payload.forEach((value, key) => console.log(key, value));
      console.log(data);

      await new Promise((r) => setTimeout(r, 800));
      const id = `RF-${Date.now().toString().slice(-6)}`;
      setSuccess({ id, name });
      if (liveRegionRef.current)
        liveRegionRef.current.textContent = `Thanks ${name}. We received your request (ref ${id}). We'll contact you on WhatsApp or phone.`;

      // Reset form lightly (keep city to help repeated submissions)
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setFiles([]);
      setCategory("");
      setCondition("");
    } catch (_) {
      setErrors({
        submit: "Failed to send. Please try again or contact via WhatsApp.",
      });
      if (liveRegionRef.current)
        liveRegionRef.current.textContent =
          "Failed to send the form. Please try again.";
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="">
      <CTA
        title="Contact Us"
        headerUse
        desc={
          <>
            <p>
              Sell, buy or ask about used furniture — we&lsquo;ll reply on
              WhatsApp fast.
            </p>
          </>
        }
      />
      <div className="md:w-11/12 mx-auto  grid grid-cols-1 lg:grid-cols-12 items-start gap-6 mt-16 ">
        {/* Left contact card */}
        <aside className="lg:col-span-4 bg-white p-4 rounded-2xl shadow-sm border">
          <h2 className="font-medium text-lg">Our Info</h2>
          <p className="text-sm text-gray-600 mt-2">
            Rukun Al Arooba — Used Furniture Buyers & Sellers
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+971500000000" className="text-primary underline">
                +971 50 000 0000
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a href="#" className="text-primary underline">
                Message us on WhatsApp
              </a>
            </li>
            <li>
              <strong>Store Location:</strong> Al Estiqlal Street, Bu Shaghara,
              Hay Al Qasimiah
            </li>
            <li>
              <strong>Locations We Serve:</strong> Dubai, Sharjah, Ajman, RAK,
              Abu Dhabi, Al Ain, mussafah, muweilah
            </li>
            <li>
              <strong>Hours:</strong> Mon–Sat 9:00 AM – 11:00 PM
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="font-medium">Quick Links</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>
                <Link
                  href="/used-furniture-buyers-in-dubai#types-of-furniture-we-buy"
                  className="underline"
                >
                  furniture we buy
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="underline">
                  How we work
                </Link>
              </li>
              <li>
                <a href="#" className="underline">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right form card */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl shadow-sm border">
          <form onSubmit={handleSubmit} noValidate>
            <fieldset className="mb-4">
              <legend className="sr-only">Reason for contact</legend>
              <div
                className="flex gap-3"
                role="radiogroup"
                aria-label="Reason for contact"
              >
                <label
                  className={`px-3 py-2 rounded-lg border ${
                    reason === "sell"
                      ? "border-primary bg-primary/10"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    className="sr-only"
                    type="radio"
                    name="reason"
                    value="sell"
                    checked={reason === "sell"}
                    onChange={() => setReason("sell")}
                  />
                  Sell
                </label>
                <label
                  className={`px-3 py-2 rounded-lg border ${
                    reason === "buy"
                      ? "border-primary bg-primary/10"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    className="sr-only"
                    type="radio"
                    name="reason"
                    value="buy"
                    checked={reason === "buy"}
                    onChange={() => setReason("buy")}
                  />
                  Buy
                </label>
                <label
                  className={`px-3 py-2 rounded-lg border ${
                    reason === "general"
                      ? "border-primary bg-primary/10"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    className="sr-only"
                    type="radio"
                    name="reason"
                    value="general"
                    checked={reason === "general"}
                    onChange={() => setReason("general")}
                  />
                  General inquiry
                </label>
              </div>
              {errors.reason && (
                <p className="text-red-600 text-sm mt-2">{errors.reason}</p>
              )}
            </fieldset>

            {/* Conditional block for sell/buy */}
            {(reason === "sell" || reason === "buy") && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium">
                    Furniture category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full rounded-md border p-2"
                  >
                    <option value="">Select category</option>
                    <option value="sofa">Sofa</option>
                    <option value="bed">Bed</option>
                    <option value="table">Table</option>
                    <option value="wardrobe">Wardrobe</option>
                    <option value="appliance">Appliance</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.category && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Condition</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="mt-1 block w-full rounded-md border p-2"
                  >
                    <option value="">Select condition</option>
                    <option value="like-new">Like new</option>
                    <option value="good">Used - Good</option>
                    <option value="repair">Needs repair</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium">
                    Preferred service
                  </label>
                  <div className="flex gap-4 mt-2 items-center">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={preferredService.pickup}
                        onChange={(e) =>
                          setPreferredService((s) => ({
                            ...s,
                            pickup: e.target.checked,
                          }))
                        }
                      />
                      Pickup
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={preferredService.delivery}
                        onChange={(e) =>
                          setPreferredService((s) => ({
                            ...s,
                            delivery: e.target.checked,
                          }))
                        }
                      />
                      Delivery
                    </label>
                  </div>
                </div>

                <div className="md:col-span-1 bg-secondary p-4 rounded-2xl">
                  <label className="block text-sm font-medium">
                    Upload photos (optional)
                  </label>
                  <div className="mt-2">
                    <input
                      aria-describedby="upload-help"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                    />
                    <p id="upload-help" className="text-xs text-gray-500">
                      Recommended: up to 3 images. Max 5MB each.
                    </p>
                    {errors.files && (
                      <p className="text-red-600 text-sm">{errors.files}</p>
                    )}
                  </div>

                  {files.length > 0 && (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {files.map((f, i) => (
                        <div
                          key={i}
                          className="relative border rounded overflow-hidden"
                        >
                          <img
                            src={URL.createObjectURL(f)}
                            className="w-full h-20 object-cover"
                            alt={`preview-${i}`}
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="absolute top-1 right-1 bg-white/80 rounded px-1 text-xs"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Message */}
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Message / Details
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="Describe the item, size, preferred pickup time, or your request (optional)"
                maxLength={1000}
              ></textarea>
            </div>

            {/* Contact inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 block w-full rounded-md border p-2 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="John Ahmed"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Phone (WhatsApp)
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`mt-1 block w-full rounded-md border p-2 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="+971 5X XXX XXXX"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Email (optional)
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border p-2"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`mt-1 block w-full rounded-md border p-2 ${
                    errors.city ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select city</option>
                  <option value="dubai">Dubai</option>
                  <option value="sharjah">Sharjah</option>
                  <option value="ajman">Ajman</option>
                  <option value="rak">Ras Al Khaimah</option>
                  <option value="abudhabi">Abu Dhabi</option>
                  <option value="alain">Al Ain</option>
                </select>
                {errors.city && (
                  <p className="text-red-600 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">
                  Area / Address (optional)
                </label>
                <input
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="mt-1 block w-full rounded-md border p-2"
                  placeholder="Flat 12B, Street 5, Marina"
                />
              </div>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 mb-4">
              <input
                id="consent"
                type="checkbox"
                defaultChecked
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm">
                I agree to be contacted via phone or WhatsApp and accept the{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit area */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium disabled:opacity-60"
                >
                  {loading
                    ? "Sending..."
                    : reason === "sell"
                    ? "Get Quote"
                    : reason === "buy"
                    ? "Request Item"
                    : "Send Message"}
                </button>
                {errors.submit && (
                  <p className="text-red-600 text-sm mt-2">{errors.submit}</p>
                )}
              </div>

              <div className="text-sm text-gray-500">
                Prefer WhatsApp?{" "}
                <a href="#" className="underline">
                  Message us directly
                </a>
              </div>
            </div>
          </form>

          {/* Success message */}
          {success && (
            <div
              className="mt-4 p-3 bg-green-50 border border-green-200 rounded"
              role="status"
            >
              <strong className="block">
                Thanks {success.name || "there"}!
              </strong>
              <p className="text-sm">
                We received your request. Reference:{" "}
                <span className="font-mono">{success.id}</span>. We&lsquo;ll
                reach out shortly on WhatsApp.
              </p>
            </div>
          )}

          <div className="sr-only" aria-live="polite" ref={liveRegionRef}></div>
        </div>
      </div>
      x``
    </main>
  );
}
