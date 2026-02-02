const Services = () => {
    const coreServices = [
        {
            title: "Dry Van Freight (53ft)",
            description: "Standard trailer transportation for non-perishable goods. Ideal for packaged products, electronics, and general merchandise.",
            icon: "🚚",
            features: ["Standard 53ft trailers", "Non-temperature sensitive", "Most economical option", "Ideal for packaged goods"]
        },
        {
            title: "Reefer / Temperature-Controlled Freight",
            description: "Climate-controlled transportation for perishable goods, pharmaceuticals, and temperature-sensitive products.",
            icon: "❄️",
            features: ["Temperature monitoring", "Perishable goods expertise", "Pharmaceutical compliant", "Food-grade standards"]
        },
        {
            title: "Full Truckload (FTL)",
            description: "Dedicated truck for your exclusive shipment. No sharing, maximum security, and faster transit times.",
            icon: "📦",
            features: ["Dedicated equipment", "Faster transit times", "Exclusive capacity", "Enhanced security"]
        },
        {
            title: "Nationwide Freight Coverage",
            description: "Comprehensive coverage across all 48 states with reliable carriers and consistent service quality.",
            icon: "🗺️",
            features: ["All 48 states", "Regional expertise", "Cross-border options", "Consistent pricing"]
        },
        {
            title: "Carrier Dispatch & Load Tracking",
            description: "Real-time tracking and professional dispatch services for complete shipment visibility and control.",
            icon: "📍",
            features: ["Real-time GPS tracking", "Automated updates", "24/7 monitoring", "Digital paperwork"]
        },
        {
            title: "On-Time Pickup & Delivery Coordination",
            description: "Professional coordination ensuring your freight moves according to schedule with minimal delays.",
            icon: "⏱️",
            features: ["Appointment scheduling", "Advanced planning", "Delay mitigation", "Communication protocol"]
        }
    ];

    const serviceGuarantees = [
        {
            title: "Trusted Carriers",
            description: "We work exclusively with vetted, insured, and experienced carriers who meet our strict safety and reliability standards.",
            icon: "🛡️"
        },
        {
            title: "Safe Handling",
            description: "Your cargo is handled with care and precision, following industry best practices for loading, securing, and transportation.",
            icon: "👷"
        },
        {
            title: "On-Time Delivery",
            description: "We prioritize punctuality with a 98% on-time delivery rate, backed by proactive communication and contingency planning.",
            icon: "✅"
        },
        {
            title: "Professional Coordination",
            description: "Dedicated logistics experts manage every shipment from start to finish, ensuring seamless execution and problem-solving.",
            icon: "📋"
        }
    ];
    const servicesData = [
        {
            title: "Reefer / Temperature-Controlled Freight",
            description: "Refrigerated transport solutions for temperature-sensitive products including food, pharmaceuticals, and perishable goods."
        },
        {
            title: "Dry Van Freight",
            description: "Standard enclosed trailer service for non-perishable goods, offering reliable nationwide shipping for general cargo."
        },

        {
            title: "Full Truckload (FTL) Shipping",
            description: "Dedicated truckload service for large shipments that require exclusive use of an entire trailer for maximum security and efficiency."
        },
        {
            title: "Nationwide Freight Coverage",
            description: "Comprehensive logistics network providing reliable shipping solutions to all 48 contiguous states with consistent service quality."
        },
        {
            title: "Carrier Dispatch & Load Tracking",
            description: "Professional dispatch coordination and real-time shipment tracking for complete visibility and communication throughout transit."
        },
        {
            title: "On-Time Pickup and Delivery Coordination",
            description: "Precision scheduling and coordination services ensuring timely pickup and delivery with proactive communication."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section freerhg */}
            <section
                className="relative w-full min-h-[400px] md:min-h-[500px] rounded-sm overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/images/truckservices.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#133866]/90 via-[#133866]/80 to-transparent" />
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
                
                <div className="relative z-10 max-w-3xl text-left text-white px-6 md:px-12 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center md:text-left w-full">
                        <div className="inline-flex items-center gap-3 mb-6 mx-auto md:mx-0">
                            <div className="w-10 h-1 bg-[#4372ac] rounded-full"></div>
                            <span className="text-[#4372ac] font-medium tracking-widest text-sm uppercase">
                                Our Solutions
                            </span>
                            <div className="w-10 h-1 bg-[#4372ac] rounded-full"></div>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Professional
                            <span className="block text-[#4372ac]">Freight Services</span>
                        </h1>
                        
                        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto md:mx-0">
                            Comprehensive logistics solutions designed to move your freight efficiently, safely, and reliably across all 48 states.
                        </p>
                        
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-[#4372ac] hover:bg-[#3a6399] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                Get Instant Quote
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Intro Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#133866] mb-6">
                            Comprehensive Freight Solutions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            CLE FREIGHT LLC provides end-to-end logistics services that streamline your supply chain. 
                            Whether you're shipping temperature-sensitive pharmaceuticals, general merchandise, or oversized equipment, 
                            our experienced team ensures your freight reaches its destination safely, on time, and within budget.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            { number: "48", label: "States Covered" },
                            { number: "98%", label: "On-Time Delivery" },
                            { number: "500+", label: "Active Carriers" },
                            { number: "24/7", label: "Support Available" }
                        ].map((stat, index) => (
                            <div key={index} className="bg-gradient-to-br from-[#133866]/5 to-white p-6 rounded-2xl text-center border border-[#133866]/10">
                                <div className="text-3xl md:text-4xl font-bold text-[#133866] mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#133866]/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-10 h-1 bg-[#4372ac] rounded-full"></div>
                            <span className="text-[#4372ac] font-medium tracking-widest text-sm uppercase">
                                What We Offer
                            </span>
                            <div className="w-10 h-1 bg-[#4372ac] rounded-full"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#133866] mb-6">
                            Our Core Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Specialized transportation solutions tailored to your specific needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-10">
                        {servicesData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white to-[#133866]/5 p-6 md:p-8 rounded-2xl border border-[#133866]/10 hover:border-[#4372ac] hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-[#133866] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    
                </div>
            </section>

          
        </div>
    );
}

export default Services;