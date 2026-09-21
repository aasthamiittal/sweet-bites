import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-lighter py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions or feedback
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-10">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 hover:border-primary transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">support@sweetbites.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 hover:border-primary transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">1-800-SWEET-BITES</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri, 9AM - 6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 hover:border-primary transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Candy Lane<br />
                      Sweet City, SC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 hover:border-primary transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-primary-lighter rounded-2xl border-2 border-primary/20">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-700">
                  We pride ourselves on excellent customer service. Our team typically responds to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border-2 border-gray-200 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <Button type="submit" size="large" fullWidth>
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Map Location (Google Maps Integration)</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
