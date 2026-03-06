// EmailSender.js
// ------------------
// Optimized for GoDaddy domain frontend + Vercel backend

const EmailSender = async ({ to, subject, htmlContent = "", recipientName, type }) => {
    try {
        // 1️⃣ Validate required parameters (htmlContent is now optional)
        if (!to || !subject || !type) {
            throw new Error("Missing required email parameters: to, subject, and type are required");
        }

        // 2️⃣ ✅ FIXED: Use your WORKING Vercel URL
        const API_URL = process.env.NODE_ENV === "development"
            ? "https://clefreight-email-9j5su5foa-irfans-projects-0a1b4cb6.vercel.app/api/send-email" // No trailing slash!
            : "https://clefreight-email-9j5su5foa-irfans-projects-0a1b4cb6.vercel.app/api/send-email"; // Use same URL for now

        console.log("Sending email to:", API_URL);
        console.log("Environment:", process.env.NODE_ENV);
        console.log("Email type:", type);

        // 3️⃣ Set up fetch with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to,
                subject,
                htmlContent, // This can be empty string
                recipientName: recipientName || {},
                type
            }),
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
            throw new Error(data.error || data.details || "Failed to send email");
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