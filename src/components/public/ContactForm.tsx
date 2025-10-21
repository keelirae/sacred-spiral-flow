import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Button from './Button';

export default function ContactForm() {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const errs: Record<string, string> = {};
    if (!name) errs.name = 'Name is required';
    if (!email) errs.email = 'Email is required';
    if (!message) errs.message = 'Message is required';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    toast({ title: 'Thanks for reaching out', description: "I’ll be in touch soon." });
    form.reset();
    const nameField = form.querySelector<HTMLInputElement>('#name');
    nameField?.focus();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-live="polite">
  <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
    <Input id="name" name="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
  {errors.name && <p id="name-error" className="text-sm text-destructive">{errors.name}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
    <Input id="email" name="email" type="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
  {errors.email && <p id="email-error" className="text-sm text-destructive">{errors.email}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
    <Textarea id="message" name="message" rows={5} required aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
  {errors.message && <p id="message-error" className="text-sm text-destructive">{errors.message}</p>}
      </div>
  <Button>Send Message</Button>
    </form>
  );
}
