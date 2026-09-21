import { useState } from 'react';
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, Edit2, Save } from 'lucide-react';
import Button from '../components/ui/Button';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const orders = [];
  const favorites = [];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, save to backend
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary-lighter py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-2">
                My Account
              </h1>
              <p className="text-lg text-gray-700">
                Manage your profile, orders, and preferences
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <User size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
                <div className="p-6 bg-primary text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <User size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{userInfo.name || 'Guest User'}</p>
                      <p className="text-sm opacity-90">Member</p>
                    </div>
                  </div>
                </div>

                <nav className="p-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all mb-2 ${
                        activeTab === tab.id
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-primary-lighter'
                      }`}
                    >
                      <tab.icon size={20} />
                      {tab.label}
                    </button>
                  ))}
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-red-500 hover:bg-red-50 transition-all mt-4">
                    <LogOut size={20} />
                    Logout
                  </button>
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black text-primary">Profile Information</h2>
                    {!isEditing ? (
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2"
                      >
                        <Edit2 size={18} />
                        Edit
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSaveProfile}
                        className="flex items-center gap-2"
                      >
                        <Save size={18} />
                        Save
                      </Button>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>

                    <div className="pt-6 border-t-2 border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Account Statistics</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-primary-lighter p-4 rounded-xl text-center">
                          <p className="text-3xl font-black text-primary mb-1">0</p>
                          <p className="text-sm text-gray-600">Total Orders</p>
                        </div>
                        <div className="bg-primary-lighter p-4 rounded-xl text-center">
                          <p className="text-3xl font-black text-primary mb-1">$0</p>
                          <p className="text-sm text-gray-600">Total Spent</p>
                        </div>
                        <div className="bg-primary-lighter p-4 rounded-xl text-center">
                          <p className="text-3xl font-black text-primary mb-1">0</p>
                          <p className="text-sm text-gray-600">Favorites</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
                  <h2 className="text-3xl font-black text-primary mb-8">Order History</h2>

                  {orders.length === 0 ? (
                    <div className="text-center py-16">
                      <Package size={64} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No orders yet</h3>
                      <p className="text-gray-600 mb-6">
                        Start shopping to see your order history here!
                      </p>
                      <Button>Browse Products</Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="border-2 border-gray-100 rounded-xl p-6 hover:border-primary transition-colors"
                        >
                          {/* Order content would go here */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Favorites Tab */}
              {activeTab === 'favorites' && (
                <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
                  <h2 className="text-3xl font-black text-primary mb-8">My Favorites</h2>

                  {favorites.length === 0 ? (
                    <div className="text-center py-16">
                      <Heart size={64} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No favorites yet</h3>
                      <p className="text-gray-600 mb-6">
                        Save your favorite products here for easy access!
                      </p>
                      <Button>Explore Products</Button>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                      {favorites.map((item, index) => (
                        <div key={index}>
                          {/* Favorite items would go here */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black text-primary">Saved Addresses</h2>
                    <Button className="flex items-center gap-2">
                      <MapPin size={18} />
                      Add New Address
                    </Button>
                  </div>

                  <div className="text-center py-16">
                    <MapPin size={64} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No saved addresses</h3>
                    <p className="text-gray-600 mb-6">
                      Add your shipping addresses for faster checkout!
                    </p>
                  </div>
                </div>
              )}

              {/* Payment Tab */}
              {activeTab === 'payment' && (
                <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black text-primary">Payment Methods</h2>
                    <Button className="flex items-center gap-2">
                      <CreditCard size={18} />
                      Add Payment Method
                    </Button>
                  </div>

                  <div className="text-center py-16">
                    <CreditCard size={64} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No payment methods</h3>
                    <p className="text-gray-600 mb-6">
                      Add a payment method for quick and secure checkout!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountPage;
