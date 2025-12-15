'use client';

import { useActionState, useState, useEffect } from 'react';
import { submitContactForm } from './actions';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';

const initialState = {
  success: false,
  error: '',
};

interface ContactFormProps {
  csrfToken: string;
}

export function ContactForm({ csrfToken }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
    const result = await submitContactForm(formData);
    return result;
  }, initialState);

  const [hasDismissedSuccess, setHasDismissedSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setHasDismissedSuccess(false);
    }
  }, [state]);

  const showSuccess = state?.success && !hasDismissedSuccess;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg bg-gradient-to-r from-pink-500/10 to-orange-400/10 p-6 border border-pink-500/20"
          >
            <h3 className="text-lg font-semibold text-pink-500">Message Sent!</h3>
            <p className="mt-2 text-gray-300">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
            <Button
              onClick={() => setHasDismissedSuccess(true)}
              variant="secondary"
              className="mt-6 text-sm px-6 py-2"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            action={formAction}
            className="space-y-6"
          >
            <input type="hidden" name="csrf_token" value={csrfToken} />
            {state?.error && (
              <div className="rounded-md bg-red-500/10 p-4 text-sm text-red-400 border border-red-500/20">
                {state.error}
              </div>
            )}
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
            <Button
              type="submit"
              disabled={isPending}
              className="w-full text-sm"
            >
              {isPending ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
