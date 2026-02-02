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
const Services = () => {
    return (

        <section className="bg-white">
            <div className="px-4 md:px-12 lg:px-24">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                        <span className="text-[#4372ac] font-medium tracking-wider">OUR SERVICES</span>
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#133866] mb-4">Our Services</h3>

                    {/* CHANGED: Branding sentence */}
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        At CLE FREIGHT LLC, <span className="text-[#4372ac] font-medium">we provide several transportation solutions</span> to meet your shipping and hauling needs. Choose the option that best fits your application.
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

    )
}

export default Services