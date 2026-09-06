import { useState } from 'react';
import { 
  Wifi, 
  Coffee, 
  ParkingCircle, 
  WashingMachine, 
  Utensils, 
  Star, 
  Phone, 
  MapPin, 
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingForm } from './components/BookingForm';
import { InquiryForm } from './components/InquiryForm';
import { Logo } from './components/Logo';

const App = () => {
  const [activeRoom, setActiveRoom] = useState<'standard' | 'deluxe' | 'executive'>('standard');

  const rooms = [
    {
      id: 'standard',
      name: 'Standard Room',
      price: '5,790',
      description: 'Comfortable accommodation designed for the practical traveler. A peaceful retreat in the heart of the city.',
      features: ['Air conditioning', 'Private bathroom', 'Free Wi-Fi', 'Breakfast included', 'Room service'],
      image: '/images/room-standard.jpg'
    },
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      price: '6,790',
      description: 'Spacious accommodation with enhanced room space and premium finishes. Perfect for extended stays.',
      features: ['Spacious Layout', 'Air conditioning', 'Private bathroom', 'Free Wi-Fi', 'Breakfast included', 'Room service'],
      image: '/images/room-deluxe.jpg'
    },
    {
      id: 'executive',
      name: 'Executive Suite',
      price: '8,490',
      description: 'The pinnacle of comfort at Royal Suites. Features a larger living area for work or relaxation.',
      features: ['Suite-style living', 'Larger Seating Area', 'Air conditioning', 'Private bathroom', 'Free Wi-Fi', 'Breakfast included'],
      image: '/images/room-executive.jpg'
    }
  ];

  const amenities = [
    { icon: <Wifi className="h-6 w-6" />, title: 'Free Wi-Fi', desc: 'Stay connected throughout your visit.' },
    { icon: <Coffee className="h-6 w-6" />, title: 'Free Breakfast', desc: 'Start your morning with a convenient breakfast.' },
    { icon: <ParkingCircle className="h-6 w-6" />, title: 'Free Parking', desc: 'Safe and convenient parking for hotel guests.' },
    { icon: <WashingMachine className="h-6 w-6" />, title: 'Laundry Service', desc: 'Practical laundry support during your stay.' },
    { icon: <Utensils className="h-6 w-6" />, title: 'Room Service', desc: 'Comfort and convenience whenever you need it.' },
  ];

  const reviews = [
    { name: "Guest from Lahore", content: "Comfortable stay and a convenient location. The staff were helpful and the overall experience was pleasant.", rating: 5 },
    { name: "Business Traveler", content: "Good option for a short stay in Faisalabad. The room was comfortable and breakfast was a nice addition.", rating: 4 },
    { name: "Family Guest", content: "Convenient location and friendly service. The room was clean and the stay was comfortable.", rating: 5 }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-brand-ivory selection:bg-brand-gold selection:text-brand-black">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero-lobby.jpg" 
            alt="Royal Suites Lobby" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/70" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <Logo variant="gold" className="h-20 w-20 md:h-24 md:w-24 mx-auto" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-5xl md:text-8xl font-serif mb-6 tracking-tight"
          >
            ROYAL SUITES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-brand-gold text-lg md:text-2xl font-serif italic mb-4"
          >
            “A Refined Stay in Faisalabad”
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/80 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed tracking-wide"
          >
            Comfort, convenience and warm Pakistani hospitality in the heart of Faisalabad. 
            Designed for guests who value quality service and sophisticated surroundings.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#booking" 
              className="bg-brand-gold text-brand-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-all transform hover:scale-105"
            >
              Book Your Stay
            </a>
            <a 
              href="#rooms" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Explore Rooms
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Discover More</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Welcome to Royal Suites</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8 leading-tight">
                A Comfortable Stay, <br />Thoughtfully Prepared
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Royal Suites Hotel offers comfortable accommodation in Faisalabad with convenient access to the surrounding city. Designed for guests who value comfort, cleanliness, convenience and welcoming service.
                </p>
                <p>
                  Whether you are visiting for business or leisure, our facilities are tailored to provide a seamless experience. From our dedicated room service to our complimentary Pakistani breakfast, every detail is managed with care.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-serif text-brand-charcoal mb-2">Prime Location</h4>
                  <p className="text-sm text-gray-500">In the heart of Faisalabad's Gulistan Colony 1.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-brand-charcoal mb-2">Modern Amenities</h4>
                  <p className="text-sm text-gray-500">Free Wi-Fi, Breakfast, and Secure Parking.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="/images/reception.jpg" 
                  alt="Hotel Reception" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-charcoal p-8 text-white hidden md:block">
                <p className="text-brand-gold text-3xl font-serif mb-1 italic">Personalized</p>
                <p className="text-xs uppercase tracking-[0.2em] opacity-60">Hospitality Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section id="rooms" className="py-24 bg-brand-black text-white">
        <div className="container mx-auto px-4 md:px-8 text-center mb-16">
          <motion.span {...fadeInUp} className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Accommodations</motion.span>
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-serif mb-6">Exceptional Comfort</motion.h2>
          <motion.p {...fadeInUp} className="text-white/60 max-w-2xl mx-auto">Choose from our carefully appointed rooms, each designed to provide a restful and premium environment during your visit to Faisalabad.</motion.p>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="group flex flex-col h-full bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-brand-charcoal/80 backdrop-blur-md px-4 py-2 text-xs font-bold">
                    PKR {room.price} <span className="text-white/40 font-normal">/ Night</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif mb-4">{room.name}</h3>
                  <p className="text-white/60 text-sm mb-6 flex-grow">{room.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {room.features.slice(0, 4).map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/80">
                        <div className="h-1 w-1 bg-brand-gold rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => {
                        setActiveRoom(room.id as any);
                        document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 bg-brand-gold text-brand-black text-center py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Refined Services</span>
              <h2 className="text-4xl font-serif text-brand-charcoal mb-8">Hotel Facilities</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We provide all the essentials for a seamless stay, delivered with the warmth of Pakistani hospitality. 
                Our team is dedicated to making your visit as comfortable as possible.
              </p>
              <div className="bg-brand-ivory p-8 border-l-4 border-brand-gold">
                <p className="italic text-brand-charcoal font-serif text-lg">
                  “Mehmaan aaye hain, unka khayal rakha jata hai.”
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-4">— Traditional Hospitality</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {amenities.map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-white shadow-sm border border-gray-100 flex gap-6"
                >
                  <div className="text-brand-gold shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-charcoal mb-2 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pakistani Breakfast Banner */}
      <section className="relative py-32 overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/images/breakfast.jpg" 
            alt="Pakistani Breakfast" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 md:px-8">
          <div className="max-w-xl">
            <motion.span {...fadeInUp} className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Morning Rituals</motion.span>
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-serif mb-6">A Traditional Start</motion.h2>
            <motion.p {...fadeInUp} className="text-white/80 leading-relaxed mb-8">
              Start your morning with a complimentary Pakistani breakfast. From fresh parathas and eggs to aromatic tea, we serve a taste of home in a premium setting.
            </motion.p>
            <motion.div {...fadeInUp} className="flex items-center gap-4 text-brand-gold">
              <Utensils className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Served Daily: 7:00 AM - 10:30 AM</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Guest Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Testimonials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand-gold" />)}
                </div>
                <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">"{review.content}"</p>
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal uppercase tracking-widest">{review.name}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-tighter mt-1 italic">Verified Guest</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 md:py-32 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Reservations</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Plan Your Visit to <br />Royal Suites</h2>
              <p className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed">
                Secure your stay today. Our booking process is simple and transparent. 
                Experience premium comfort at competitive rates.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Call to inquire</p>
                    <a href="tel:03219663452" className="text-xl text-white font-medium hover:text-brand-gold transition-colors">03219663452</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Our Address</p>
                    <p className="text-sm text-white/80">Opposite Aziz Fatima Hospital, Block H, Faisalabad</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <BookingForm initialRoom={activeRoom} />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 h-[500px] bg-gray-200 rounded-sm overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700 relative group">
              {/* This would be an iframe for a real map, using a placeholder image that looks like a map for now */}
              <div className="absolute inset-0 bg-[#f8f5f0] flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                 <div className="relative z-10 text-center p-8">
                    <MapPin className="h-16 w-16 text-brand-gold mx-auto mb-6 opacity-80" />
                    <h3 className="text-2xl font-serif text-brand-charcoal mb-4">Royal Suites Faisalabad</h3>
                    <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">
                      Opposite Aziz Fatima Hospital, Block H, Gulistan Colony 1, Faisalabad, 38000, Pakistan
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-brand-gold border-b border-brand-gold pb-1 font-bold uppercase tracking-widest text-xs hover:text-brand-gold-light transition-all"
                    >
                      Open in Google Maps <ArrowUpRight className="h-3 w-3" />
                    </a>
                 </div>
              </div>
            </div>
            
            <div id="contact" className="lg:col-span-2 bg-brand-black p-10 md:p-12 text-white">
              <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Get in Touch</span>
              <h2 className="text-3xl font-serif mb-8">Direct Inquiry</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Simple CTA for mobile scrolling */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <a 
          href="tel:03219663452"
          className="h-14 w-14 bg-brand-gold text-brand-black rounded-full shadow-2xl flex items-center justify-center animate-pulse"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default App;
