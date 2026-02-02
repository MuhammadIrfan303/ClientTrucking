const Testimonal=()=>{
    return(
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-1 bg-[#4372ac]"></div>
                    <span className="text-[#4372ac] font-medium tracking-wider">TESTIMONIALS</span>
                    <div className="w-10 h-1 bg-[#4372ac]"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#133866]">What our partners say</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white to-[#133866]/5 p-6 md:p-8 rounded-2xl border border-[#133866]/10 shadow-sm">
                    <div className="text-2xl">⭐</div>
                    <p className="mt-3 text-gray-700 text-lg">“Professional communication and smooth delivery.”</p>
                </div>
                <div className="bg-gradient-to-br from-white to-[#133866]/5 p-6 md:p-8 rounded-2xl border border-[#133866]/10 shadow-sm">
                    <div className="text-2xl">⭐</div>
                    <p className="mt-3 text-gray-700 text-lg">“Reliable brokerage partner with great service.”</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Testimonal