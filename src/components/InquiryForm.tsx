import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export const InquiryForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-charcoal p-8 rounded-lg text-white text-center animate-in zoom-in duration-300">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-12 w-12 text-brand-gold" />
        </div>
        <h4 className="text-xl font-serif mb-2">Inquiry Submitted Successfully</h4>
        <p className="text-white/60 text-sm mb-6 text-balance">Thank you for reaching out. A member of our team will get back to you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-brand-gold text-sm underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Your Name</label>
          <input 
            type="text" 
            placeholder="Enter your name"
            required
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-brand-gold outline-none transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Phone Number</label>
          <input 
            type="tel" 
            placeholder="Enter your phone number"
            required
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-brand-gold outline-none transition-colors"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
        <input 
          type="email" 
          placeholder="Enter your email address"
          required
          className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-brand-gold outline-none transition-colors"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div className="space-y-1">
        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">What would you like to ask?</label>
        <textarea 
          placeholder="Enter your message"
          required
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-brand-gold outline-none transition-colors resize-none"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-black py-4 rounded font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
      >
        {status === 'loading' ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Send Inquiry <Send className="h-4 w-4" /></>}
      </button>
    </form>
  );
};
