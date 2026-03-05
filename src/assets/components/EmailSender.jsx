const EmailSender = async ({ to, subject, htmlContent, recipientName, type }) => {
    try {
        if (!to || !subject || !htmlContent) {
            throw new Error("Missing required email parameters");
        }

        // ✅ API URL configuration
        const API_URL =
            process.env.NODE_ENV === "development"
                ? "http://localhost:5000/api/send-email" // Local
                : "https://clienttrucking.onrender.com/api/send-email"; // Production (Render)

        console.log("Sending email to:", API_URL);
        console.log("Environment:", process.env.NODE_ENV);

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to,
                subject,
                type,
                htmlContent,
                recipientName,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to send email");
        }

        console.log("✅ Email sent successfully:", data);

        return {
            success: true,
            data,
        };
    } catch (error) {
        console.error("❌ Failed to send email:", error);

        return {
            success: false,
            error: error.message,
        };
    }
};

export default EmailSender;