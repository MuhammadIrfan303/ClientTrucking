// NEW: Trust reasons for "Why Choose CLE FREIGHT"
const trustReasons = [
    "FMCSA Licensed Freight Brokerage",
    "Vetted & Insured Carrier Network",
    "Nationwide Coverage",
    "Real-Time Tracking & Updates",
    "Fast Communication & Reliable Service"
];
const WhyChoose = () => {
    return (
        <section className="py-16 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                        <span className="text-[#4372ac] font-medium tracking-wider">WHY CHOOSE CLE FREIGHT</span>
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#133866]">Why Choose Us?</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trustReasons.map((reason, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 bg-white rounded-xl p-6 border border-[#133866]/10 shadow-sm"
                        >
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4372ac]/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#4372ac]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-700 font-medium">{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default WhyChoose