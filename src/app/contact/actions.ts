'use server';

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log('Form submitted:', { name, email, message });

  // In a real application, you would send an email or save to a database here.
  return { success: true };
}
