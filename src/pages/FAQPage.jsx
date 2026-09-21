import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          q: 'What is your shipping policy?',
          a: 'Orders typically ship within 1-2 business days and arrive within 3-5 business days for standard shipping. Shipping costs are calculated at checkout based on your location and order size. Expedited shipping options are available at checkout.',
        },
        {
          q: 'Do you ship internationally?',
          a: 'Currently, we only ship within the United States. We are working on expanding our international shipping options and will update our customers when available.',
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you will receive a confirmation email with a tracking number. You can use this number to track your package on our Track Order page or directly on the carrier\'s website.',
        },
        {
          q: 'Can I modify or cancel my order?',
          a: 'Orders can be modified or cancelled within 2 hours of placement. After that, our team begins processing and packing your order. Please contact us immediately at support@sweetbites.com if you need to make changes.',
        },
      ],
    },
    {
      category: 'Products',
      questions: [
        {
          q: 'Are your products suitable for people with dietary restrictions?',
          a: 'Many of our products are made with natural ingredients and some are vegan-friendly. However, our facility does process nuts, dairy, and gluten. Please check individual product pages for detailed ingredient lists and allergen information.',
        },
        {
          q: 'How should I store my candies?',
          a: 'Store your Sweet Bites products in a cool, dry place away from direct sunlight. Chocolates should be kept at room temperature (60-70°F). Once opened, reseal packaging tightly or transfer to an airtight container.',
        },
        {
          q: 'What is the shelf life of your products?',
          a: 'Our products have varying shelf lives depending on the type. Jellies and gummies typically last 6-12 months, while chocolates have a 4-6 month shelf life. All products display a "best by" date on the packaging.',
        },
        {
          q: 'Do you use artificial colors or flavors?',
          a: 'We prioritize natural ingredients whenever possible. Many of our products use natural fruit flavors and colors derived from vegetables and fruits. Check individual product descriptions for specific information.',
        },
      ],
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We want you to be completely satisfied! If you\'re not happy with your purchase, you can return unopened products within 30 days for a full refund or exchange. Opened products can only be returned if there\'s a quality issue.',
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact our customer service team at support@sweetbites.com with your order number and reason for return. We\'ll provide you with a return shipping label and instructions.',
        },
        {
          q: 'When will I receive my refund?',
          a: 'Refunds are processed within 5-7 business days of receiving your returned items. The refund will be issued to your original payment method.',
        },
        {
          q: 'What if my order arrives damaged?',
          a: 'We take great care in packaging, but if your order arrives damaged, please contact us within 48 hours with photos. We\'ll send a replacement or provide a full refund immediately.',
        },
      ],
    },
    {
      category: 'Account & Payment',
      questions: [
        {
          q: 'Do I need an account to place an order?',
          a: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and access exclusive member benefits.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards ( Mastercard, American Express, Discover), PayPal, and Apple Pay.',
        },
        {
          q: 'Is my payment information secure?',
          a: 'Absolutely! We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.',
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-lighter py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, and policies
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={questionIndex}
                      className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary transition-all hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-lighter/30 transition-colors"
                      >
                        <span className="text-lg font-bold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={24}
                          className={`text-primary flex-shrink-0 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary-lighter">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our customer support team is here to help!
          </p>
          <a
            href="mailto:support@sweetbites.com"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
