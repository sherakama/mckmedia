'use client';

import { useActionState } from 'react';
import { submitContactForm } from './actions';

const initialState = {
  success: false,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
    const result = await submitContactForm(formData);
    return result;
  }, initialState);

  if (state?.success) {
    return (
      <div className="rounded-lg bg-green-500/10 p-6 text-green-400 border border-green-500/20">
        <h3 className="text-lg font-semibold">Message Sent!</h3>
        <p>Thanks for reaching out. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500 focus:outline-none focus:ring-1"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500 focus:outline-none focus:ring-1"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500 focus:outline-none focus:ring-1"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:from-pink-400 hover:to-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
