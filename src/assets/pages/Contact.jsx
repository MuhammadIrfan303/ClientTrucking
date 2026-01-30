const Contact = () => {
    return (
        <div className="px-4 md:px-1">


            {/* Hero with background image */}
            <section
                className="relative w-full min-h-[380px] rounded-sm overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/images/truckcontact.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-3xl text-left text-white px-6 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide">CONTACT US</h1>

                    <p className="mt-4 text-base md:text-lg text-gray-100">
                        Have questions or need a freight quote? Our experienced logistics team is ready to
                        assist you with fast, reliable, and cost-effective transportation solutions.
                        Whether you are shipping locally or nationwide, we are here to make your delivery
                        process smooth and stress-free.
                    </p>

                    <p className="mt-3 text-base md:text-lg text-gray-200">
                        Contact us today to discuss your shipping needs, request a custom quote, or learn
                        more about how CLE FREIGHT LLC can support your business with dependable carrier
                        capacity and professional freight brokerage services.
                    </p>


                </div>
            </section>
            {/* Breadcrumb */}
            {/* <nav className="text-sm text-gray-500 mb-4 px-3">
                <a href="/" className="hover:text-gray-700">Home</a>
                <span className="mx-2">/</span>
                <span className="text-gray-700 font-medium">Contact</span>
            </nav> */}
        </div>
    );
}


export default Contact