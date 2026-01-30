function About() {
    return (
        <div className="px-4 ">

            {/* Hero with background image */}
            <section
                className="relative w-full min-h-[380px] rounded-sm overflow-hidden bg-cover bg-center mt-6"
                style={{ backgroundImage: "url('/images/truck1.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#133866]/80 via-[#133866]/60 to-transparent" />
                <div className="relative z-10 max-w-3xl text-left text-white px-6 md:px-12 py-16 md:py-24">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                        <span className="text-[#4372ac] font-medium tracking-wider">WHO WE ARE</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        About CLE <span className="text-[#4372ac]">Freight</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
                        CLE FREIGHT LLC is a premier freight brokerage headquartered in Louisville, Kentucky.
                        We specialize in building lasting partnerships through transparent service, competitive
                        pricing, and unwavering reliability in the transportation industry.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { number: "500+", label: "Happy Clients" },
                        { number: "98%", label: "On-Time Delivery" },
                        { number: "24/7", label: "Support" },
                        { number: "50+", label: "States Covered" }
                    ].map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-[#133866] mb-2">{stat.number}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Company Background */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#133866]/10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-[#133866] rounded-xl flex items-center justify-center">
                                <span className="text-2xl text-white">🏢</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#133866]">Company Background</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-[#4372ac] rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#133866]">Headquartered in Louisville, Kentucky</h3>
                                    <p className="text-gray-600 mt-1">Strategically located in America's logistics hub for optimal nationwide coverage</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-[#4372ac] rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#133866]">Freight brokerage focus</h3>
                                    <p className="text-gray-600 mt-1">Specialized expertise in connecting shippers with reliable carriers</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-[#4372ac] rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#133866]">Relationship-driven approach</h3>
                                    <p className="text-gray-600 mt-1">Building partnerships that last beyond single transactions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Values */}
                    <div className="bg-gradient-to-br from-[#133866]/5 to-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#133866]/20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-[#4372ac] rounded-xl flex items-center justify-center">
                                <span className="text-2xl text-white">⭐</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#133866]">Mission & Values</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "🤝", title: "Integrity", desc: "Honest dealings in every transaction" },
                                { icon: "🔍", title: "Transparency", desc: "Clear communication & visibility" },
                                { icon: "⚡", title: "Responsiveness", desc: "Quick solutions when you need them" },
                                { icon: "😌", title: "Stress-Free", desc: "Simplifying logistics complexity" }
                            ].map((value, index) => (
                                <div key={index} className="bg-white p-5 rounded-2xl border border-[#133866]/10 hover:border-[#4372ac] transition-colors">
                                    <div className="text-2xl mb-3">{value.icon}</div>
                                    <h3 className="font-bold text-[#133866] mb-1">{value.title}</h3>
                                    <p className="text-sm text-gray-600">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 md:py-20">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                        <span className="text-[#4372ac] font-medium tracking-wider">OUR ADVANTAGES</span>
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#133866] mb-4">
                        Why Choose <span className="text-[#4372ac]">CLE Freight</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover the difference of working with a partner committed to your success
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: "💰",
                            title: "Competitive Pricing",
                            desc: "Fair rates without compromising service quality",
                            color: "from-[#133866]/5 to-white",
                            border: "border-[#133866]/10"
                        },
                        {
                            icon: "📊",
                            title: "Consistent Performance",
                            desc: "Reliable execution you can count on every time",
                            color: "from-[#133866]/5 to-white",
                            border: "border-[#133866]/10"
                        },
                        {
                            icon: "🚚",
                            title: "Trusted Network",
                            desc: "Vetted carriers ensuring safe and timely delivery",
                            color: "from-[#133866]/5 to-white",
                            border: "border-[#133866]/10"
                        },
                        {
                            icon: "👔",
                            title: "Professional Service",
                            desc: "Dedicated experts managing your shipments",
                            color: "from-[#133866]/5 to-white",
                            border: "border-[#133866]/10"
                        }
                    ].map((feature, index) => (
                        <div key={index} className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 border ${feature.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                            <div className="text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-[#133866] mb-3">{feature.title}</h3>
                            <p className="text-[#4372ac]">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-[#133866] to-[#0d2a4d] rounded-3xl text-center text-white mb-12">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Confidence?</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Join hundreds of satisfied clients who trust CLE Freight for their logistics needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#4372ac] hover:bg-[#3a6399] text-white font-semibold px-8 py-3 rounded-xl transition-colors">
                            Get a Free Quote
                        </button>
                        <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;