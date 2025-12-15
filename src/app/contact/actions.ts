'use server';

import { cookies } from 'next/headers';

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const cookieStore = await cookies();
  const cookieToken = cookieStore.get('csrf_token')?.value;
  const formToken = formData.get('csrf_token');

  if (!cookieToken || !formToken || cookieToken !== formToken) {
    return { success: false, error: 'Invalid CSRF token. Please refresh the page and try again.' };
  }

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log('Form submitted:', { name, email, message });

  // In a real application, you would send an email or save to a database here.
  return { success: true };
}
