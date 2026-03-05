// EmailSender.js
// ------------------
// Optimized for GoDaddy domain frontend + Vercel backend

const EmailSender = async ({ to, subject, htmlContent, recipientName, type }) => {
    try {
        // 1️⃣ Validate required parameters
        if (!to || !subject || !htmlContent) {
            throw new Error("Missing required email parameters");
        }

        // 2️⃣ Determine API URL
        const API_URL = process.env.NODE_ENV === "development"
            ? "http://localhost:5000/api/send-email"
            : "https://clefreight.us/api/send-email";// Production Vercel backend

        console.log("Sending email to:", API_URL);
        console.log("Environment:", process.env.NODE_ENV);

        // 3️⃣ Set up fetch with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ to, subject, htmlContent, recipientName, type }),
            signal: controller.signal,
        });

        clearTimeout(timeout);

        // 4️⃣ Parse response safely
        let data;
        try {
            data = await response.json();
        } catch (parseError) {
            throw new Error("Invalid JSON response from server");
        }

        if (!response.ok) {
            throw new Error(data.error || "Failed to send email");
        }

        console.log("✅ Email sent successfully:", data);

        return {
            success: true,
            data,
        };
    } catch (error) {
        // 5️⃣ Handle errors
        console.error("❌ Failed to send email:", error);

        return {
            success: false,
            error: error.message,
        };
    }
};

export default EmailSender;