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
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-live="polite">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" aria-invalid={!!errors.name} />
        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" aria-invalid={!!errors.email} />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} />
        {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
      </div>
      <Button>Send Message</Button>
    </form>
  );
}
