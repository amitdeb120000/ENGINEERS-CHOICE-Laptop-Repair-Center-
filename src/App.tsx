import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Battery, 
  Monitor, 
  Zap, 
  ShieldAlert, 
  ChevronRight,
  Settings,
  ArrowRight,
  ExternalLink,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

const phone = "+919609206267";
const whatsapp = "https://wa.me/919609206267";
const googleMaps = "https://maps.app.goo.gl/5inasRvFRJiFBwG56";

const SERVICES = [
  {
    title: "Laptop Repair & Troubleshooting",
    desc: "Comprehensive diagnostics and component-level repair for all Windows laptops.",
    icon: Wrench
  },
  {
    title: "Screen & Panel Replacement",
    desc: "Original quality LED/LCD panels with precise fitting and warranty.",
    icon: Monitor
  },
  {
    title: "Battery & Power Solutions",
    desc: "Genuine high-capacity battery replacements and power adapter repairs.",
    icon: Battery
  },
  {
    title: "OS Setup & Optimization",
    desc: "Clean Windows installation, driver setup, and system stabilization.",
    icon: Settings
  },
  {
    title: "Virus & Malware Removal",
    desc: "Deep system cleaning and installation of robust security software.",
    icon: ShieldCheck
  },
  {
    title: "Hardware Upgrades",
    desc: "RAM and SSD upgrades to significantly boost system performance and speed.",
    icon: Zap
  }
];

const WHY_US = [
  { title: "Experienced Technicians", desc: "Certified experts in Windows hardware." },
  { title: "Fast Turnaround", desc: "Most repairs completed within 24-48 hours." },
  { title: "Affordable Pricing", desc: "Transparent costs with no hidden charges." },
  { title: "Genuine Spare Parts", desc: "We use only high-quality, authentic components." },
  { title: "Trusted Local Service", desc: "A track record of excellence in Cooch Behar." }
];

const PROCESS = [
  { step: "01", title: "Contact or Visit", desc: "Bring your device or call us for inquiry." },
  { step: "02", title: "Fast Diagnosis", desc: "We identify the root cause within minutes." },
  { step: "03", title: "Expert Repair", desc: "Precision work using professional tools." },
  { step: "04", title: "Safe Delivery", desc: "Test and pick up your fixed device." }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1588702547318-29007cb45280?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1614285457768-646f65ca8548?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555616635-6409700a7d1e?auto=format&fit=crop&q=80&w=600"
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center text-slate-900">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-700/20">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tighter uppercase block leading-none">ENGINEERS CHOICE</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-blue-600">Repair Center</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5" />
              Open: 10AM - 8PM
            </div>
            <a href={`tel:${phone}`} className="bg-blue-700 text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-700/20 active:scale-95">
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px]" />
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest mb-6 border border-blue-200">
                <ShieldCheck className="w-4 h-4" />
                No. 1 Repair Center in Cooch Behar
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight uppercase">
                Fast & Reliable <span className="text-blue-700">Laptop Repair</span> in Cooch Behar
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Expert technicians, quick service, and affordable pricing. We bring your device back to life with precision hardware diagnostics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={`tel:${phone}`} className="flex-1 bg-blue-700 text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-sm tracking-widest hover:bg-blue-800 transition-all shadow-2xl shadow-blue-700/30 active:scale-95">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="flex-1 bg-emerald-600 text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-sm tracking-widest hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/30 active:scale-95">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl flex gap-4 items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-orange-900 leading-tight">
                  <span className="block text-orange-700 uppercase text-[10px] mb-1 tracking-widest font-black">Important Notice</span>
                  We repair all major laptop brands except Apple MacBooks. Specialized in Windows laptops (HP, Dell, Lenovo, Acer, ASUS).
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white z-10 relative bg-slate-200 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1200" 
                  alt="Laptop repair service" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-xl shadow-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technician at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-700 font-black uppercase text-xs tracking-[0.3em] mb-4 block text-left">About Our Center</span>
              <h3 className="text-4xl font-black mb-8 leading-tight text-slate-900 tracking-tight text-left">Trusted Expertise for Your Digital Life</h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10 text-left">
                <p>
                  At ENGINEERS CHOICE, we understand how critical your laptop is to your work and personal life. Our mission is to provide the fastest and most transparent repair service in Cooch Behar.
                </p>
                <p className="font-medium text-slate-800">
                  Emphasizing trust, experience, and service quality, we specialize exclusively in the Windows ecosystem, ensuring deep technical knowledge across all major brands.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                <div>
                  <div className="text-3xl font-black text-blue-700 mb-1">5000+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Fixed Devices</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-700 mb-1">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Genuine Parts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-black uppercase text-xs tracking-[0.3em] mb-4 block">Specialized Services</span>
            <h3 className="text-4xl font-black mb-4 tracking-tight uppercase">What We Fix</h3>
            <p className="text-slate-500 font-medium tracking-wide">Focused on Windows excellence except Apple MacBooks.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:border-blue-100 group text-left"
              >
                <div className="w-14 h-14 bg-slate-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-black mb-3 tracking-tight text-slate-800 uppercase leading-snug">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-blue-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/50 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h3 className="text-4xl font-black text-white mb-8 tracking-tight leading-tight uppercase">Why Choose Us</h3>
              <div className="space-y-4">
                {WHY_US.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-6 h-6 text-blue-300 shrink-0" />
                    <div className="text-left">
                      <h4 className="font-black text-white uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[40px] p-10 shadow-3xl text-center">
              <Users className="w-16 h-16 text-blue-700 mx-auto mb-6" />
              <h4 className="text-3xl font-black text-slate-900 mb-4 uppercase">Trusted Local Service</h4>
              <p className="text-slate-500 mb-8 max-w-sm mx-auto">From students to businesses, we are the first choice for laptop diagnostics in Cooch Behar.</p>
              <a href={`tel:${phone}`} className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-800 transition-all active:scale-95">
                Visit Us Today
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white overflow-hidden text-center">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <span className="text-blue-700 font-black uppercase text-xs tracking-[0.3em] mb-4 block">Our Process</span>
            <h3 className="text-4xl font-black mb-4 tracking-tight uppercase">How It Works</h3>
            <p className="text-slate-500 font-medium">Simple 4-step process to get you back on track.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-[20%] left-0 w-full h-[1px] bg-slate-100 -z-10" />
            {PROCESS.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-8 text-blue-700 font-black text-xl shadow-lg group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <h4 className="font-black text-slate-800 mb-3 uppercase tracking-widest text-sm leading-tight">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-200/50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-black uppercase text-xs tracking-[0.3em] mb-4 block">Our Work & Service</span>
            <h3 className="text-4xl font-black tracking-tight uppercase">Captured Moments</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white group relative">
                <img src={img} alt={`Repair work ${idx}`} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" />
                <div className="absolute inset-0 bg-blue-700/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white rounded-full">
                    <ArrowRight className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <div className="bg-slate-900 py-12 border-y border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <p className="text-center text-white/50 text-base font-bold uppercase tracking-[0.4em] leading-relaxed">
            Serving customers across <span className="text-blue-400">Cooch Behar</span> with reliable and fast laptop repair service
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-left">
              <span className="text-blue-700 font-black uppercase text-xs tracking-[0.3em] mb-4 block text-left">Contact Section</span>
              <h3 className="text-4xl font-black mb-12 tracking-tight uppercase text-left">Find Our Center</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-700 shrink-0 shadow-sm border border-slate-200">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Full Address</h4>
                    <p className="text-slate-800 font-bold leading-relaxed uppercase text-left">
                      S N Road, near Rajmata Dighi,<br />
                      Puratan Post Office Para,<br />
                      South Cooch Behar, West Bengal 736101
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 shrink-0 shadow-sm border border-blue-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-[0.2em] text-blue-500 mb-2">Phone Number</h4>
                    <a href={`tel:${phone}`} className="text-3xl font-black text-slate-900 hover:text-blue-700 transition-colors tracking-tighter block text-left">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href={whatsapp} target="_blank" rel="noreferrer" className="flex-1 bg-emerald-600 text-white px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/10 active:scale-95">
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a href={googleMaps} target="_blank" rel="noreferrer" className="flex-1 bg-slate-100 text-slate-800 px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-3 border border-slate-200 active:scale-95">
                    <ExternalLink className="w-5 h-5" />
                    Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-2xl h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.565863266159!2d89.4447437754228!3d26.308940985854894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3650033ad9e77%3A0xe5a40a59518331d2!2sEngineers%20choice!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                title="Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-32 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(30,64,175,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <h3 className="text-4xl lg:text-5xl font-black mb-8 tracking-tight uppercase text-white leading-tight underline decoration-blue-500 underline-offset-8">Facing laptop issues?<br />Get it fixed today by experts.</h3>
          <p className="text-xl text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">Expert Windows maintenance and hardware solutions just a call away.</p>
          <a href={`tel:${phone}`} className="inline-flex items-center gap-4 bg-blue-700 text-white px-14 py-6 rounded-[2rem] font-black uppercase text-sm tracking-[0.2em] hover:bg-blue-800 transition-all shadow-3xl shadow-blue-700/30 active:scale-95">
            Contact Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100 text-center">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white">
                  <Laptop className="w-5 h-5" />
                </div>
                <span className="font-black text-lg tracking-tighter uppercase text-slate-900 leading-none">ENGINEERS CHOICE</span>
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest leading-relaxed text-center md:text-left">
                South Cooch Behar, West Bengal 736101
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
              <div className="text-2xl font-black tracking-tight text-slate-800">{phone}</div>
              <div className="text-[10px] uppercase font-black tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Windows Specialized Service
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-10 flex flex-col items-center gap-6">
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.5em] font-black text-center">
              © {new Date().getFullYear()} ENGINEERS CHOICE Laptop Repair Center
            </p>
            <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-bold">
              Designed & Developed by{" "}
              <a 
                href="https://debdeveloper.netlify.app/" 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors uppercase font-black underline decoration-blue-100 underline-offset-4"
              >
                Deb Developer
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bar - Visual fix */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[100] flex gap-3">
        <a href={`tel:${phone}`} className="flex-1 bg-slate-900 text-white h-14 rounded-2xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-slate-900/20 active:scale-95 transition-all">
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a href={whatsapp} className="flex-1 bg-emerald-600 text-white h-14 rounded-2xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-emerald-600/20 active:scale-95 transition-all">
          <MessageSquare className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default App;
