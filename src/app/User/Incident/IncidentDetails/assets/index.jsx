// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App = () => {
    const [activeTab, setActiveTab] = useState('COMMUNITY SUPPORT');
    const [commentText, setCommentText] = useState('');
    const renderScamReports = () => (
        <div className="max-w-7xl mx-auto p-8 grid grid-cols-3 gap-8">
            <div className="space-y-6">
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Scammer Details</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Known Aliases</p>
                            <p className="text-white">Jimmy Investments, Jay Rod</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Social Media</p>
                            <p className="text-white">Facebook: @eliz.parker88</p>
                            <p className="text-white">Instagram: @eliz_investments</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Payment Methods</p>
                            <p className="text-white">GXbank: 8888004154126</p>
                            <p className="text-white">BigPay: 83047584153125</p>
                            <p className="text-white">Public Bank: 6420013123</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Scam Statistics</h2>
                    <div className="space-y-4">
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-400 text-sm">Total Incidents</p>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-white text-3xl font-bold">15</p>
                                    <p className="text-gray-400 text-sm">reported cases</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Total Amount Scammed</p>
                                <p className="text-red-500 text-3xl font-bold">RM 78,500</p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="text-gray-400 text-sm">Active Since</p>
                            <p className="text-white text-lg">January 2025</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">IP Series Involved</h2>
                    <div className="flex items-center gap-4 p-3 bg-[#243757] rounded-lg">
                        <img
                            src="https://readdy.ai/api/search-image?query=cute cartoon baby doll mascot character with pink bow, minimalist design on white background, vector art style&width=60&height=60&seq=3&orientation=squarish"
                            alt="CRYBABY Series"
                            className="w-12 h-12 rounded"
                        />
                        <div>
                            <p className="text-white font-medium">CRYBABY Crying For Love Series</p>
                            <p className="text-gray-400 text-sm">Vinyl Plush Hanging Card</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Related Photos</h2>
                    <div className="grid grid-cols-3 gap-3">
                        <img
                            src="https://readdy.ai/api/search-image?query=kawaii plush toy with big eyes on clean white background, product photography, studio lighting&width=100&height=100&seq=4&orientation=squarish"
                            alt="Product 1"
                            className="w-full h-24 object-cover rounded"
                        />
                        <img
                            src="https://readdy.ai/api/search-image?query=cute pink bunny plush toy on clean white background, product photography, studio lighting&width=100&height=100&seq=5&orientation=squarish"
                            alt="Product 2"
                            className="w-full h-24 object-cover rounded"
                        />
                        <img
                            src="https://readdy.ai/api/search-image?query=adorable bear plush toy with bow on clean white background, product photography, studio lighting&width=100&height=100&seq=6&orientation=squarish"
                            alt="Product 3"
                            className="w-full h-24 object-cover rounded"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-2 space-y-6">
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Victim Reports</h2>
                    <div className="space-y-6">
                        <div className="border-b border-gray-700 pb-6">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                <div>
                                    <p className="text-white">Anonymous Victim</p>
                                    <p className="text-gray-400 text-sm">2025-03-08</p>
                                </div>
                                <span className="ml-auto text-yellow-500 text-sm">Under Investigation</span>
                            </div>
                            <div className="mb-3">
                                <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded text-sm">RM 15,000 lost</span>
                            </div>
                            <p className="text-white">He contacted me through Facebook claiming to be a financial advisor. He showed fake certificates and testimonials. I invested 15,000 RM in a "guaranteed" cryptocurrency fund that turned out to be fake.</p>
                        </div>
                        <div className="border-b border-gray-700 pb-6">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                <div>
                                    <p className="text-white">Anonymous Victim</p>
                                    <p className="text-gray-400 text-sm">2025-02-22</p>
                                </div>
                                <span className="ml-auto text-green-500 text-sm">Verified</span>
                            </div>
                            <div className="mb-3">
                                <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded text-sm">RM 12,000 lost</span>
                            </div>
                            <p className="text-white">Met through a mutual friend who was also scammed. He presented himself as a forex expert with "exclusive" trading strategies. After investing 12,000 RM, all communication stopped.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Submit Your Report</h2>
                    <p className="text-gray-400 mb-4">Have you been affected by this scammer? Share your experience to help protect others.</p>
                    <button className="bg-[#38BDF8] text-white px-6 py-2 !rounded-button whitespace-nowrap cursor-pointer">
                        Submit Report
                    </button>
                </div>
            </div>
        </div>
    );
    const renderCommunitySupport = () => (
        <div className="max-w-7xl mx-auto p-8 grid grid-cols-3 gap-8">
            <div className="space-y-6">
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Scammer Details</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Known Aliases</p>
                            <p className="text-white">Jimmy Investments, Jay Rod</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Social Media</p>
                            <p className="text-white">Facebook: @eliz.parker88</p>
                            <p className="text-white">Instagram: @eliz_investments</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Payment Methods</p>
                            <p className="text-white">GXbank: 8888004154126</p>
                            <p className="text-white">BigPay: 83047584153125</p>
                            <p className="text-white">Public Bank: 6420013123</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Scam Statistics</h2>
                    <div className="space-y-4">
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-400 text-sm">Total Incidents</p>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-white text-3xl font-bold">15</p>
                                    <p className="text-gray-400 text-sm">reported cases</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Total Amount Scammed</p>
                                <p className="text-red-500 text-3xl font-bold">RM 78,500</p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="text-gray-400 text-sm">Active Since</p>
                            <p className="text-white text-lg">January 2025</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">IP Series Involved</h2>
                    <div className="flex items-center gap-4 p-3 bg-[#243757] rounded-lg">
                        <img
                            src="https://readdy.ai/api/search-image?query=cute cartoon baby doll mascot character with pink bow, minimalist design on white background, vector art style&width=60&height=60&seq=3&orientation=squarish"
                            alt="CRYBABY Series"
                            className="w-12 h-12 rounded"
                        />
                        <div>
                            <p className="text-white font-medium">CRYBABY Crying For Love Series</p>
                            <p className="text-gray-400 text-sm">Vinyl Plush Hanging Card</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Related Photos</h2>
                    <div className="grid grid-cols-3 gap-3">
                        <img
                            src="https://readdy.ai/api/search-image?query=kawaii plush toy with big eyes on clean white background, product photography, studio lighting&width=100&height=100&seq=4&orientation=squarish"
                            alt="Product 1"
                            className="w-full h-24 object-cover rounded"
                        />
                        <img
                            src="https://readdy.ai/api/search-image?query=cute pink bunny plush toy on clean white background, product photography, studio lighting&width=100&height=100&seq=5&orientation=squarish"
                            alt="Product 2"
                            className="w-full h-24 object-cover rounded"
                        />
                        <img
                            src="https://readdy.ai/api/search-image?query=adorable bear plush toy with bow on clean white background, product photography, studio lighting&width=100&height=100&seq=6&orientation=squarish"
                            alt="Product 3"
                            className="w-full h-24 object-cover rounded"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-2 space-y-6">
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Community Discussions</h2>
                    <div className="space-y-6">
                        <div className="border-b border-gray-700 pb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-white">Sarah L.</p>
                                        <p className="text-gray-400 text-sm">2025-03-10</p>
                                    </div>
                                    <p className="text-white mb-2">I almost fell for his scheme too! He used the same investment pitch with me. Thankfully I saw this website first. Stay strong everyone.</p>
                                    <div className="flex items-center gap-4">
                                        <button className="text-gray-400 text-sm hover:text-white cursor-pointer">12 <i className="fas fa-thumbs-up ml-1"></i></button>
                                        <button className="text-gray-400 text-sm hover:text-white cursor-pointer">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-700 pb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-white">David K.</p>
                                        <p className="text-gray-400 text-sm">2025-03-09</p>
                                    </div>
                                    <p className="text-white mb-2">The authorities have been notified about this scammer. If you've been affected, please file a police report and reference case #25783.</p>
                                    <div className="flex items-center gap-4">
                                        <button className="text-gray-400 text-sm hover:text-white cursor-pointer">27 <i className="fas fa-thumbs-up ml-1"></i></button>
                                        <button className="text-gray-400 text-sm hover:text-white cursor-pointer">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-700 pb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0"></div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-white">Michelle T.</p>
                                        <p className="text-gray-400 text-sm">2025-03-07</p>
                                    </div>
                                    <p className="text-white mb-2">I lost money to this person last month. I've joined the victim support group that meets virtually every Tuesday. It's helped me cope with the shame and anger. DM me if you want details.</p>
                                    <div className="flex items-center gap-4">
                                        <button className="text-gray-400 text-sm hover:text-white cursor-pointer">19 <i className="fas fa-thumbs-up ml-1"></i></button>
                                        <button className="text-gray-400 text-sm hover:text-white cursor-pointer">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-6">
                    <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Share Your Thoughts</h2>
                    <textarea
                        className="w-full bg-[#243757] text-white border-none rounded-lg p-4 mb-4 resize-none"
                        rows={4}
                        placeholder="Share your experience, advice, or support for other victims..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    ></textarea>
                    <div className="flex justify-between items-center">
                        <label className="text-gray-400 text-sm">
                            <input type="checkbox" className="mr-2" />
                            You can post anonymously
                        </label>
                        <button className="bg-[#38BDF8] text-white px-6 py-2 !rounded-button whitespace-nowrap cursor-pointer">
                            Post Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    
    return (
        <div className="min-h-screen bg-[#1A2332]">
            <nav className="bg-[#0F172A] px-6 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <img
                        src="https://public.readdy.ai/ai/img_res/a04020463008f5c7174e0cd2a2a4eb9c.jpg"
                        alt="Logo"
                        className="h-8"
                    />
                    <a href="#" className="text-white hover:text-gray-300">Incident</a>
                    <button className="bg-[#38BDF8] text-white px-4 py-1.5 !rounded-button whitespace-nowrap cursor-pointer">
                        Report
                    </button>
                </div>
                <div>
                    <button className="text-white hover:text-gray-300 cursor-pointer">Login</button>
                </div>
            </nav>
            <div className="bg-gradient-to-r from-[#2D1F2D] to-[#1A2332] p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-lg overflow-hidden">
                            <img
                                src="https://public.readdy.ai/ai/img_res/9d93566a151372427522d4bdc5c21ff8.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-white text-3xl font-bold">James Rodriguez</h1>
                                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Fake Seller</span>
                            </div>
                            <p className="text-gray-400">Reported by 15 people</p>
                            <div className="flex gap-2 mt-3">
                                <button className="bg-[#2C3C56] text-white px-3 py-1 rounded text-sm cursor-pointer">Facebook</button>
                                <button className="bg-[#2C3C56] text-white px-3 py-1 rounded text-sm cursor-pointer">Instagram</button>
                                <button className="bg-[#2C3C56] text-white px-3 py-1 rounded text-sm cursor-pointer">WhatsApp</button>
                                <button className="bg-[#2C3C56] text-white px-3 py-1 rounded text-sm cursor-pointer">Xiao Hong Shu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1A2332] border-b border-gray-700">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-8">
                        {['SCAM REPORTS', 'COMMUNITY SUPPORT', 'HELP RESOURCES'].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-3 text-sm font-medium cursor-pointer ${activeTab === tab
                                        ? 'text-[#38BDF8] border-b-2 border-[#38BDF8]'
                                        : 'text-gray-400'
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {activeTab === 'SCAM REPORTS' && renderScamReports()}
            {activeTab === 'COMMUNITY SUPPORT' && renderCommunitySupport()}
            {activeTab === 'HELP RESOURCES' && (
                <div className="max-w-7xl mx-auto p-8 grid grid-cols-3 gap-8">
                    <div className="space-y-6">
                        <div className="bg-[#1E293B] rounded-lg p-6">
                            <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Scammer Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Known Aliases</p>
                                    <p className="text-white">Jimmy Investments, Jay Rod</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Social Media</p>
                                    <p className="text-white">Facebook: @eliz.parker88</p>
                                    <p className="text-white">Instagram: @eliz_investments</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Payment Methods</p>
                                    <p className="text-white">GXbank: 8888004154126</p>
                                    <p className="text-white">BigPay: 83047584153125</p>
                                    <p className="text-white">Public Bank: 6420013123</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#1E293B] rounded-lg p-6">
                            <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Scam Statistics</h2>
                            <div className="space-y-4">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-gray-400 text-sm">Total Incidents</p>
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-white text-3xl font-bold">15</p>
                                            <p className="text-gray-400 text-sm">reported cases</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Total Amount Scammed</p>
                                        <p className="text-red-500 text-3xl font-bold">RM 78,500</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="text-gray-400 text-sm">Active Since</p>
                                    <p className="text-white text-lg">January 2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#1E293B] rounded-lg p-6">
                            <h2 className="text-[#38BDF8] text-lg font-medium mb-4">IP Series Involved</h2>
                            <div className="flex items-center gap-4 p-3 bg-[#243757] rounded-lg">
                                <img
                                    src="https://readdy.ai/api/search-image?query=cute cartoon baby doll mascot character with pink bow, minimalist design on white background, vector art style&width=60&height=60&seq=3&orientation=squarish"
                                    alt="CRYBABY Series"
                                    className="w-12 h-12 rounded"
                                />
                                <div>
                                    <p className="text-white font-medium">CRYBABY Crying For Love Series</p>
                                    <p className="text-gray-400 text-sm">Vinyl Plush Hanging Card</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#1E293B] rounded-lg p-6">
                            <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Related Photos</h2>
                            <div className="grid grid-cols-3 gap-3">
                                <img
                                    src="https://readdy.ai/api/search-image?query=kawaii plush toy with big eyes on clean white background, product photography, studio lighting&width=100&height=100&seq=4&orientation=squarish"
                                    alt="Product 1"
                                    className="w-full h-24 object-cover rounded"
                                />
                                <img
                                    src="https://readdy.ai/api/search-image?query=cute pink bunny plush toy on clean white background, product photography, studio lighting&width=100&height=100&seq=5&orientation=squarish"
                                    alt="Product 2"
                                    className="w-full h-24 object-cover rounded"
                                />
                                <img
                                    src="https://readdy.ai/api/search-image?query=adorable bear plush toy with bow on clean white background, product photography, studio lighting&width=100&height=100&seq=6&orientation=squarish"
                                    alt="Product 3"
                                    className="w-full h-24 object-cover rounded"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-6">
                        <div className="bg-[#1E293B] rounded-lg p-6">
                            <h2 className="text-[#38BDF8] text-lg font-medium mb-4">Help & Support Resources</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-[#243757] rounded-lg p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-full flex items-center justify-center">
                                            <i className="fas fa-shield-alt text-[#38BDF8] text-xl"></i>
                                        </div>
                                        <h3 className="text-white font-medium">National Scam Response Centre (NSRC)</h3>
                                    </div>
                                    <p className="text-gray-400 mb-2">Mon-Sun 8:00am - 8:00pm</p>
                                    <p className="text-gray-400 mb-4">Contact:</p>
                                    <p className="text-[#38BDF8] text-lg">997</p>
                                </div>
                                <div className="bg-[#243757] rounded-lg p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-full flex items-center justify-center">
                                            <i className="fas fa-phone-alt text-[#38BDF8] text-xl"></i>
                                        </div>
                                        <h3 className="text-white font-medium">Touch N Go eWallet Hotline</h3>
                                    </div>
                                    <p className="text-gray-400 mb-2">Mon-Sun 7:00am - 10:00pm</p>
                                    <p className="text-gray-400 mb-4">Contact:</p>
                                    <p className="text-[#38BDF8] text-lg">603-5022 3888</p>
                                </div>
                                <div className="bg-[#243757] rounded-lg p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-full flex items-center justify-center">
                                            <i className="fas fa-comments text-[#38BDF8] text-xl"></i>
                                        </div>
                                        <h3 className="text-white font-medium">BigPay Support Team</h3>
                                    </div>
                                    <p className="text-gray-400 mb-4">You can chat through the BigPay app or through their email</p>
                                    <p className="text-gray-400 mb-2">Contact:</p>
                                    <p className="text-[#38BDF8]">support.my@bigpayme.com</p>
                                </div>
                                <div className="bg-[#243757] rounded-lg p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-full flex items-center justify-center">
                                            <i className="fas fa-headset text-[#38BDF8] text-xl"></i>
                                        </div>
                                        <h3 className="text-white font-medium">Boost Support Team</h3>
                                    </div>
                                    <p className="text-gray-400 mb-4">You can contact them through their email only</p>
                                    <p className="text-gray-400 mb-2">Contact:</p>
                                    <p className="text-[#38BDF8]">support@myboost.com.my</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#1E293B] rounded-lg p-6 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-[#38BDF8] text-lg font-medium mb-2">Need Immediate Help?</h2>
                                <p className="text-gray-400 mb-6">Don't face this alone. Reach out to our community.</p>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-[#38BDF8]"></div>
                                        <div className="w-8 h-8 rounded-full bg-[#3B82F6]"></div>
                                        <div className="w-8 h-8 rounded-full bg-[#2563EB]"></div>
                                    </div>
                                    <p className="text-white">150 people joined</p>
                                </div>
                                <button className="bg-[#38BDF8] text-white px-6 py-2 !rounded-button whitespace-nowrap">Join our support community</button>
                            </div>
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#38BDF8]/10 to-transparent"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default App
