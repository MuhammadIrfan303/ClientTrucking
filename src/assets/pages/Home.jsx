import { Link } from "react-router-dom";
import Services from "../components/layoutsections/Services";
import Testimonal from "../components/layoutsections/Testimonal";
import WhyChoose from "../components/layoutsections/Whychoose";

const Home = () => {

    const chatbtn = () => {
        alert("We’re currently working on this button functionality to improve your experience. Please check back soon")
    }





    return (
        <div className="min-h-screen space-y-15 md:px-1 mb-11" >

            {/* Hero with background image */}
            <section
                className="relative w-full min-h-[400px] md:min-h-[500px] rounded-sm overflow-hidden bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('/images/truckhome.jpg')" }}
            >
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#133866]/90 via-[#133866]/70 to-transparent" />

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

                {/* Content container */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
                        <div className="max-w-2xl">
                            {/* Decorative element */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-1 bg-[#4372ac] rounded-full"></div>
                                <span className="text-[#4372ac] font-medium tracking-widest text-sm uppercase">
                                    Nationwide Coverage
                                </span>
                            </div>

                            {/* Main headline with impact */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                <span className="block">CLE FREIGHT LLC</span>
                                <span className="block text-[#4372ac]">TRANSPORT</span>
                            </h1>

                            {/* Subtitle */}
                            <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-white/90">
                                We've Got You Covered
                            </h2>

                            {/* Description */}
                            <div className="mt-6 md:mt-8 max-w-xl">
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                    CLE FREIGHT LLC is a premier U.S.-based freight brokerage specializing in Dry Van and Reefer transportation across all 48 states. We connect shippers with reliable, vetted carriers for safe, efficient, and timely freight movement.
                                </p>
                            </div>

                            {/* Stats bar - optional */}
                            <div className="mt-8 flex flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 bg-[#4372ac] rounded-full"></div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">48</div>
                                        <div className="text-sm text-white/80">States Covered</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 bg-[#4372ac] rounded-full"></div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">24/7</div>
                                        <div className="text-sm text-white/80">Support</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 bg-[#4372ac] rounded-full"></div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">98%</div>
                                        <div className="text-sm text-white/80">On-Time Rate</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Link to='/quote' className="bg-[#4372ac] hover:bg-[#3a6399] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4372ac]/30 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Request a Free Quote
                                </Link>


                            </div>

                            {/* Scroll indicator - optional */}
                            <div className="mt-10 hidden md:block">
                                <div className="flex flex-col items-center text-white/60 animate-bounce">
                                    <span className="text-sm mb-2">Scroll to explore</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
            </section>

            {/* Company Overview Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 px-6 md:px-12 lg:px-24 bg-[#133866]/5">
                <div className="flex items-center justify-center">
                    <img
                        src="/images/truckoverview.jpg"
                        alt="CLE FREIGHT LLC truck transport service"
                        className="w-full max-w-lg rounded-lg shadow-lg object-cover h-[400px] border-4 border-[#133866]/20"
                    />
                </div>

                <div className="flex flex-col justify-center space-y-8">
                    <div className="space-y-4">
                        <div className="inline-block">
                            <span className="text-sm font-semibold tracking-wider text-white uppercase bg-[#133866] px-4 py-2 rounded-full">
                                Nationwide Transport Services
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#133866] leading-tight">
                            Professional Trucking <span className="text-[#4372ac]">Services</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-gray-700">
                            CLE FREIGHT LLC is a U.S.-based freight brokerage firm providing reliable logistics
                            solutions for shippers nationwide.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#133866]/10 flex items-center justify-center mt-1">
                                    <div className="w-2 h-2 rounded-full bg-[#4372ac]"></div>
                                </div>
                                <p className="text-gray-700">
                                    Our mission is to connect freight with trusted carriers while delivering clear communication
                                </p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#133866]/10 flex items-center justify-center mt-1">
                                    <div className="w-2 h-2 rounded-full bg-[#4372ac]"></div>
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
            <Services />

            {/* NEW – Trust / Why Choose CLE FREIGHT Section */}
            <WhyChoose />
            {/* Shippers Section */}
            <section className="relative py-16 md:py-24 bg-[#0b1f3a] overflow-hidden">

                {/* Decorative blur shapes */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <span className="text-sm uppercase tracking-widest text-blue-300 font-semibold">
                                Built for Shippers
                            </span>

                            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                Freight Solutions
                                <span className="block text-blue-400">That Move Faster</span>
                            </h2>

                            <p className="mt-6 text-gray-300 text-lg max-w-xl">
                                We provide reliable Dry Van and Reefer freight services with
                                transparent pricing, real-time tracking, and dedicated logistics support.
                            </p>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {shipperBenefits.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3"
                                    >
                                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                        <p className="text-gray-200 text-sm font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT CTA CARD */}
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 shadow-2xl">

                                <h3 className="text-2xl font-bold text-white text-center">
                                    Request a Freight Quote
                                </h3>

                                <p className="text-gray-300 text-center mt-3">
                                    Fast response • Competitive rates • No hidden fees
                                </p>

                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3 text-gray-200 text-sm">
                                        <span className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-full">🚚</span>
                                        Dry Van & Reefer Freight
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-200 text-sm">
                                        <span className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-full">⏱</span>
                                        Quick Turnaround Time
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-200 text-sm">
                                        <span className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-full">📍</span>
                                        Nationwide Coverage
                                    </div>
                                </div>

                                <Link
                                    to="/quote"
                                    className="mt-8 block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition duration-300"
                                >
                                    Get My Quote
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* NEW – Callout Banner between Shippers and Carriers */}
            <section className="relative py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="rounded-2xl overflow-hidden bg-[#111827] border border-white/10 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left visual (uses an existing image; replace if desired) */}
                            <div
                                className="min-h-[220px] md:min-h-[280px] bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/truckoverview.jpg')" }}
                            />
                            {/* Right content */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-10 h-1 bg-[#4372ac]"></span>
                                    <span className="text-[#4372ac] font-semibold tracking-wider uppercase text-xs">
                                        Skip the Guesswork
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    Let our assistant deliver the exact info you need
                                </h3>
                                <p className="mt-3 text-gray-300">
                                    Fast answers, clear pricing, and guidance tailored to your shipment.
                                </p>
                                <div className="mt-6">
                                    <button
                                        onClick={() => chatbtn()}

                                        className="inline-block bg-[#4372ac] hover:bg-[#3a6399] text-white font-semibold px-6 py-3 rounded-lg transition"
                                    >
                                        Find Your Answers
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carriers – New Bold Design */}
            <section className="relative py-20 md:py-28 bg-[#0a1628] overflow-hidden">
                {/* subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="relative max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm tracking-widest uppercase text-blue-400 font-semibold">
                            For Carriers
                        </span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
                            Built by Brokers
                            <span className="block text-blue-400">Who Respect Carriers</span>
                        </h2>
                        <p className="mt-6 text-gray-300 text-lg">
                            We value strong relationships with owner-operators and fleets.
                            Clear communication, fair rates, and steady freight — always.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* Benefits */}
                        {carrierBenefits.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                                    <svg
                                        className="w-6 h-6 text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d={item.icon}
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Bar */}
                    <div className="mt-20 grid sm:grid-cols-3 gap-8 text-center">
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <p className="text-4xl font-extrabold text-blue-400">48</p>
                            <p className="text-gray-300 mt-2">States Covered</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <p className="text-4xl font-extrabold text-blue-400">24/7</p>
                            <p className="text-gray-300 mt-2">Dispatcher Support</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <p className="text-4xl font-extrabold text-blue-400">Fast</p>
                            <p className="text-gray-300 mt-2">On-Time Payments</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 text-center">


                        {/* NEW: Direct link to Carrier Setup page */}
                        <a
                            href="/carrier"
                            className="ml-4 inline-flex items-center gap-3 bg-[#4372ac] hover:bg-[#3a6399] text-white font-bold text-lg px-10 py-5 rounded-2xl transition"
                        >
                            Carrier Partners
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>

                        <p className="mt-4 text-gray-400 text-sm">
                            Owner-operators • Small fleets • Nationwide freight
                        </p>
                    </div>

                </div>
            </section>

            {/* Testmonial  sectional*/}
            <Testimonal />


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



export default Home


