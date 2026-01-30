function About() {
    return (
        <div className="px-4 md:px-1">


            {/* Hero with background image */}
            <section
                className="relative w-full min-h-[380px] rounded-sm overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/images/truck1.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-3xl text-left text-white px-6 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide">ABOUT US</h1>
                    <p className="mt-4 text-base md:text-lg text-gray-100">
                        Learn more about CLE FREIGHT LLC, a trusted trucking and freight brokerage company
                        committed to delivering reliable and efficient transportation solutions across the
                        United States. We focus on building strong relationships with shippers and carriers
                        through professionalism, transparency, and on-time service
                    </p>
                </div>
            </section>
            {/* Breadcrumb */}
            {/* <nav className="text-sm text-gray-500 mb-4 px-3">
                <a href="/" className="hover:text-gray-700">Home</a>
                <span className="mx-2">/</span>
                <span className="text-gray-700 font-medium">About</span>
            </nav> */}
        </div>
    );
}

export default About