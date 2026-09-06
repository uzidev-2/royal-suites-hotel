import React, { useState } from 'react';
import { format, addDays, differenceInDays } from 'date-fns';
import { Calendar, Users, Home, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const ROOM_TYPES = [
  { id: 'standard', name: 'Standard Room', price: 5790 },
  { id: 'deluxe', name: 'Deluxe Room', price: 6790 },
  { id: 'executive', name: 'Executive Suite', price: 8490 },
];

export const BookingForm = ({ initialRoom = 'standard' }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  
  const [formData, setFormData] = useState({
    roomType: initialRoom,
    checkIn: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    checkOut: format(addDays(new Date(), 2), 'yyyy-MM-dd'),
    guests: '1',
    name: '',
    email: '',
    phone: '',
    requests: '',
  });

  const nights = Math.max(1, differenceInDays(new Date(formData.checkOut), new Date(formData.checkIn)));
  const selectedRoom = ROOM_TYPES.find(r => r.id === formData.roomType) || ROOM_TYPES[0];
  const totalPrice = selectedRoom.price * nights;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const ref = `RS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setBookingRef(ref);
      
      // Store in localStorage
      const bookings = JSON.parse(localStorage.getItem('rs_bookings') || '[]');
      bookings.push({ ...formData, ref, totalPrice, nights, roomName: selectedRoom.name, date: new Date().toISOString() });
      localStorage.setItem('rs_bookings', JSON.stringify(bookings));
      
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  if (step === 3) {
    return (
      <div className="bg-white p-8 md:p-12 text-center animate-in fade-in duration-500">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-600" />
        </div>
        <h3 className="text-3xl font-serif mb-2">Booking Request Submitted</h3>
        <p className="text-gray-600 mb-8 text-balance">Thank you. Your stay details have been recorded successfully. Our team will contact you shortly to confirm your reservation.</p>
        
        <div className="bg-brand-ivory p-6 rounded-lg text-left max-w-md mx-auto border border-gray-100 mb-8">
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <span className="text-gray-500">Booking Reference:</span>
            <span className="font-bold text-brand-charcoal">{bookingRef}</span>
            <span className="text-gray-500">Guest Name:</span>
            <span className="font-medium">{formData.name}</span>
            <span className="text-gray-500">Room:</span>
            <span className="font-medium">{selectedRoom.name}</span>
            <span className="text-gray-500">Nightly Rate:</span>
            <span className="font-medium">PKR {selectedRoom.price.toLocaleString()}</span>
            <span className="text-gray-500">Stay Duration:</span>
            <span className="font-medium">{nights} Night{nights > 1 ? 's' : ''}</span>
            <span className="text-gray-500 border-t border-gray-200 pt-2 mt-2">Estimated Total:</span>
            <span className="font-bold text-brand-gold text-xl border-t border-gray-200 pt-2 mt-2">PKR {totalPrice.toLocaleString()}</span>
          </div>
        </div>
        
        <button 
          onClick={() => setStep(1)}
          className="bg-brand-charcoal text-white px-8 py-3 rounded-full hover:bg-black transition-colors"
        >
          Book Another Stay
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100">
      <div className="bg-brand-charcoal p-6 text-white">
        <h3 className="text-xl font-serif tracking-wide">Reservation Details</h3>
        <p className="text-xs text-brand-gold uppercase tracking-widest mt-1">Royal Suites Faisalabad</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        {step === 1 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <Home className="h-3 w-3" /> Room Type
                </label>
                <select 
                  name="roomType" 
                  value={formData.roomType} 
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-brand-gold outline-none bg-transparent"
                >
                  {ROOM_TYPES.map(room => (
                    <option key={room.id} value={room.id}>{room.name} - PKR {room.price.toLocaleString()}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <Users className="h-3 w-3" /> Guests
                </label>
                <select 
                  name="guests" 
                  value={formData.guests} 
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-brand-gold outline-none bg-transparent"
                >
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> Check-in
                </label>
                <input 
                  type="date" 
                  name="checkIn"
                  min={format(new Date(), 'yyyy-MM-dd')}
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-brand-gold outline-none bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> Check-out
                </label>
                <input 
                  type="date" 
                  name="checkOut"
                  min={format(addDays(new Date(formData.checkIn), 1), 'yyyy-MM-dd')}
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-brand-gold outline-none bg-transparent"
                />
              </div>
            </div>
            
            <div className="bg-brand-ivory p-5 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-brand-charcoal text-white px-2 py-0.5 rounded-full uppercase tracking-widest">Rate</span>
                  <p className="text-sm font-bold text-brand-charcoal">PKR {selectedRoom.price.toLocaleString()} / Night</p>
                </div>
                <div className="pt-1">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-1">Estimated Total ({nights} Night{nights > 1 ? 's' : ''})</p>
                  <p className="text-2xl font-serif text-brand-gold leading-none">PKR {totalPrice.toLocaleString()}</p>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full sm:w-auto bg-brand-charcoal text-white px-8 py-4 rounded-full hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
             <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-brand-gold outline-none bg-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-brand-gold outline-none bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:border-brand-gold outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Special Requests</label>
                <textarea 
                  name="requests"
                  placeholder="Enter any special requests"
                  rows={2}
                  value={formData.requests}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-brand-gold outline-none bg-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 border border-gray-300 text-gray-600 px-6 py-3 rounded-full hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button 
                type="submit"
                disabled={loading}
                className="flex-[2] bg-brand-charcoal text-white px-6 py-3 rounded-full hover:bg-black transition-all flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Confirm Booking'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
