const Home = () => {

    const servicesData = [
        {
            title: "Dry Van Freight",
            description: "Standard enclosed trailer service for non-perishable goods, offering reliable nationwide shipping for general cargo."
        },
        {
            title: "Reefer / Temperature-Controlled Freight",
            description: "Refrigerated transport solutions for temperature-sensitive products including food, pharmaceuticals, and perishable goods."
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
        <div className="px-4 space-y-20 md:px-1">

            {/* Hero with background image */}
            <section
                className="relative w-full min-h-[380px] rounded-sm overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/images/truckhome.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-3xl text-left text-white px-6 py-16">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
                        NATIONWIDE
                    </h1>
                    <h2 className="mt-2 text-xl md:text-2xl font-semibold">
                        We've Got You Covered
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-gray-100">
                        CLE FREIGHT LLC is a U.S.-based freight brokerage company specializing in Dry Van and Reefer transportation across all 48 states.
                        We connect shippers with reliable, vetted carriers to move freight safely, efficiently, and on time.
                        Our mission is to provide professional logistics solutions with strong communication, real-time tracking, and dependable service from pickup to delivery.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#133866] hover:bg-[#0d2a4d] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Request a Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 px-6 md:px-12 lg:px-24 bg-amber-50">
    <div className="flex items-center justify-center">
        <img 
            src="/images/truck1.jpg" 
            alt="CLE FREIGHT LLC truck transport service" 
            className="w-full max-w-lg rounded-lg shadow-lg object-cover h-[400px]"
        />
    </div>
    
    <div className="flex flex-col justify-center space-y-8">
        <div className="space-y-4">
            <div className="inline-block">
                <span className="text-sm font-semibold tracking-wider color uppercase bg-amber-100 px-4 py-2 rounded-full">
                    Nationwide Transport Services
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Professional Trucking <span className="color">Services</span>
            </h2>
        </div>

        <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
                CLE FREIGHT LLC is a U.S.-based freight brokerage firm providing reliable logistics 
                solutions for shippers nationwide.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bgcolor"></div>
                    </div>
                    <p className="text-gray-700">
                        Our mission is to connect freight with trusted carriers while delivering clear communication
                    </p>
                </div>
                
                <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bgcolor"></div>
                    </div>
                    <p className="text-gray-700">
                        Real-time tracking and dependable service from pickup to delivery
                    </p>
                </div>
            </div>
        </div>
        
       
    </div>
</section>

            {/* Services Section */}
            <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                       
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">At Nationwide Transport Services,<h1 className="color">we offer several transportation solutions</h1> to meet your shipping and hauling needs. Choose the option that best fits your application</p>
                    </div>

                    <div className="flex flex-wrap">
                        {servicesData.map((item,index)=>(
                            <div key={index} className="">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>

                            </div>
                        ))} 

                    </div>

                    
                </div>
            </section>

            {/* Shippers Section */}
            {/* <section className="py-12 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#133866] to-blue-700 opacity-95"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform -translate-y-4">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-2/3">
                                <span className="inline-block px-4 py-1 bg-blue-100 text-[#133866] rounded-full text-sm font-semibold mb-4">For Shippers</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Your Instant Freight Quote</h3>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    Experience seamless logistics with our competitive rates and transparent pricing.
                                    Get a fast, reliable quote for your Dry Van or Reefer freight with 24/7 tracking and dedicated support.
                                </p>
                                <div className="flex flex-wrap gap-4 mb-6">
                                    {shipperBenefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 text-center">
                                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#133866] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Fast & Accurate Quotes</h4>
                                    <p className="text-gray-600 mb-6">Get your customized quote within hours</p>
                                    <a href="/contact" className="inline-block w-full bg-gradient-to-r from-[#133866] to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                        Request Your Quote Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Carriers Section */}
            {/* <section className="py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-6 left-0 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
                                <div className="absolute -bottom-6 right-0 w-20 h-20 bg-blue-50 rounded-full opacity-50"></div>
                                <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                    <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">Carrier Partnership</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Grow Your Business With Us</h3>
                                    <p className="text-lg text-gray-700 mb-8">
                                        Join our network of trusted carriers and enjoy consistent loads, fair rates, and respectful partnerships.
                                    </p>
                                    <div className="space-y-6">
                                        {carrierBenefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:shadow-md transition-shadow">
                                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                                                    <p className="text-gray-600">{benefit.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-gradient-to-br from-[#133866] to-blue-800 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
                                <h4 className="text-2xl font-bold mb-6">Why Partner With CLE FREIGHT?</h4>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <span className="text-xl font-bold">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Fair Rates & On-Time Pay</p>
                                            <p className="text-blue-100 text-sm">Competitive pricing with reliable payment schedules</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <span className="text-xl font-bold">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Clear Communication</p>
                                            <p className="text-blue-100 text-sm">Proactive updates and dedicated support</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <span className="text-xl font-bold">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Consistent Opportunities</p>
                                            <p className="text-blue-100 text-sm">Regular freight across all 48 states</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/20">
                                    <a href="/contact" className="inline-flex items-center justify-center w-full bg-white text-[#133866] font-bold py-4 px-6 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                                        Join Our Carrier Network
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Trust & Compliance Section */}
            {/* <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trust & Compliance</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fully licensed and insured for your peace of mind</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {complianceItems.map((item, index) => (
                            <div key={index} className="group relative">
                                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-[#133866]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center mb-2">{item.label}</p>
                                    <p className="text-2xl font-bold text-gray-900 text-center">{item.value}</p>
                                    <p className="text-gray-600 text-center mt-4">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-gradient-to-r from-[#133866] to-blue-700 rounded-2xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-white">
                                <h4 className="text-2xl font-bold mb-3">Ready to Ship With Confidence?</h4>
                                <p className="text-blue-100">Get in touch with our logistics experts today</p>
                            </div>
                            <a href="/contact" className="inline-flex items-center bg-white text-[#133866] font-bold px-8 py-4 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                                Contact Us Now
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    )
}

// Data arrays for mapping
 

const shipperBenefits = [
    "Competitive rates",
    "Real-time tracking",
    "24/7 support",
    "Transparent pricing",
    "Dedicated account management",
    "Insurance coverage"
]

const carrierBenefits = [
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Fair & Competitive Rates",
        description: "Get paid what you deserve with our transparent and competitive pricing."
    },
    {
        icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
        title: "Clear Communication",
        description: "Proactive updates and dedicated support for every shipment."
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Consistent Freight",
        description: "Regular opportunities across our nationwide network of shippers."
    }
]

const complianceItems = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        label: "MC Number",
        value: "MC-1775717",
        description: "Fully licensed freight brokerage"
    },
    {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        label: "DOT Number",
        value: "DOT-4491865",
        description: "Department of Transportation registered"
    },
    {
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        label: "Coverage Area",
        value: "48 States",
        description: "Nationwide freight network"
    }
]

export default Home