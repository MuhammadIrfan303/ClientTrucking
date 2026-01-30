const Home = () => {

    return (
        <div className="px-4 md:px-1">


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
                        We’ve Got You Covered
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-gray-100">
                        CLE FREIGHT LLC provides nationwide freight and logistics solutions with reliable
                        carrier capacity and competitive pricing. Our team ensures your shipments are handled
                        safely, professionally, and delivered on time. Request a free quote today.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#133866] hover:bgcolor text-white px-6 py-3 rounded-lg transition duration-300">
                            Request a Quote
                        </button>

                        <button className="border border-white text-white hover:bg-white hover:text px-6 py-3 rounded-lg transition duration-300">
                            Our Services
                        </button>
                    </div>


                </div>
            </section>

        </div>
    )
}

export default Home