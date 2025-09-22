'use client'
import React, { useState } from "react";

export function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
        if (!key) {
            console.warn("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY");
            return;
        }

        formData.append("access_key", key)

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="max-w-6xl mx-auto w-full px-6 py-12 scroll-mt-20">
            <h1 className='text-5xl text-start text-gray-700 font-bold mb-5'>
                <span className='underline underline-offset-15 decoration-blue-500'>Con</span>tact Me
            </h1>
            <h2 className="mb-15 mt-10 text-xl">Let’s chat! Whether it’s a project, a question, or just a hello - I’m always open to messages.</h2>
            <div className="mx-auto w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                placeholder="Your name"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="you@example.com"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="How can I help?"
                            className="mt-1 w-full min-h-[120px] resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
                        >
                            Submit Form
                        </button>

                        <span className="text-sm text-gray-600">{result}</span>
                    </div>
                </form>
            </div>
        </div>
    );
}