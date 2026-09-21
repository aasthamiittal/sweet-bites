import { Link } from 'react-router-dom';
import { Heart, Award, Sparkles, Users, Target, Leaf } from 'lucide-react';
import Button from '../components/ui/Button';
import jellyImg from '../assets/products/jelly.png';
import truffleBox from '../assets/products/Assorted-truffle-box.png';
import mixedBerry from '../assets/products/Mixed Berry Bliss.png';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-lighter py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6">
            About Sweet Bites
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Crafting joy, one sweet bite at a time since 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Sweet Bites was born from a simple belief: life's sweetest moments deserve the finest treats. What started as a small kitchen experiment in 2020 has grown into a beloved brand dedicated to creating premium candies and confections that bring joy to every occasion.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We source the highest quality ingredients from around the world, ensuring every bite delivers an unforgettable experience. From our signature fruit jellies bursting with real fruit flavors to artisan chocolates handcrafted with premium cocoa, each product is made with care, passion, and dedication to perfection.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our commitment goes beyond taste. We believe in sustainable sourcing, supporting local communities, and creating treats that you can feel good about sharing with your loved ones.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Sweet Bites brings happiness to thousands of customers nationwide, and we're just getting started. Join us on our delicious journey!
              </p>
            </div>
            <div className="relative">
              <img
                src={jellyImg}
                alt="Sweet Bites Premium Jellies"
                className="rounded-2xl shadow-2xl border-2 border-gray-100"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={truffleBox}
                alt="Artisan Truffle Collection"
                className="rounded-2xl shadow-2xl border-2 border-gray-100"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-3xl -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-primary">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create moments of pure happiness through premium, handcrafted confections that celebrate life's sweet moments. We're committed to delivering exceptional taste and quality in every product we create.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-primary">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the most loved candy brand nationwide, known for our commitment to quality, innovation, and the joy we bring to every customer. We envision a world where every celebration includes Sweet Bites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary text-center mb-12 sm:mb-16">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Premium ingredients sourced globally. Every candy is crafted with meticulous attention to detail, ensuring exceptional taste and freshness in every bite.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Pushing boundaries with unique flavor combinations and creative confections that surprise and delight our customers with every new release.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Award-winning taste and stunning presentation. Each product is a masterpiece designed to create memorable moments and lasting impressions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Building meaningful connections through shared sweetness. Supporting local communities and creating joy that brings people together.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Leaf size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Committed to eco-friendly practices, sustainable sourcing, and reducing our environmental footprint while creating delicious treats.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Made with Love</h3>
              <p className="text-gray-600">
                Every candy is handcrafted with passion and care. Real ingredients, authentic flavors, and genuine dedication in every single piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">
              Taste the Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From vibrant fruit jellies to decadent chocolate truffles, explore our handcrafted collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-50 border-2 border-gray-100 group-hover:border-primary transition-all duration-300">
                <img
                  src={jellyImg}
                  alt="Premium Fruit Jellies"
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fruit Jellies</h3>
              <p className="text-gray-600">
                Bursting with real fruit flavors, our signature jellies are made with natural ingredients for an authentic taste.
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-50 border-2 border-gray-100 group-hover:border-primary transition-all duration-300">
                <img
                  src={truffleBox}
                  alt="Artisan Chocolate Truffles"
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Artisan Chocolates</h3>
              <p className="text-gray-600">
                Handcrafted truffles and chocolates made with premium cocoa, offering rich and sophisticated flavors.
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-50 border-2 border-gray-100 group-hover:border-primary transition-all duration-300">
                <img
                  src={mixedBerry}
                  alt="Gourmet Gummy Collection"
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gourmet Gummies</h3>
              <p className="text-gray-600">
                Soft, chewy, and irresistibly delicious gummies in a rainbow of flavors that both kids and adults love.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
