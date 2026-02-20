const EmailSender = async ({ to, subject, htmlContent, recipientName, type }) => {
    try {
        if (!to || !subject || !htmlContent) {
            throw new Error("Missing required email parameters");
        }

        const response = await fetch('http://localhost:5000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to,
                subject,
                type,
                htmlContent,
                recipientName
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to send email');
        }

        console.log('Email sent successfully:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Failed to send email:', error);
        throw new Error(`Email sending failed: ${error.message}`);
    }
};

export default EmailSender;