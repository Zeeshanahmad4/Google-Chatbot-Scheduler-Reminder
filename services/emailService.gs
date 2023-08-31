// emailService.gs

// Email details
var EMAIL_RECIPIENT = "recipient@example.com"; // Adjust to your recipient's email
var EMAIL_SUBJECT_POSITIVE = "Great News for Yoga!";
var EMAIL_SUBJECT_NEGATIVE = "Yoga Update!";
var EMAIL_BODY_POSITIVE = "Good news! The number of attendees for tomorrow's yoga session has exceeded the threshold.";
var EMAIL_BODY_NEGATIVE = "Unfortunately, we haven't reached the required number of attendees for tomorrow's yoga session.";

/**
 * Sends a positive email indicating that the number of "Yes" votes exceeded the threshold.
 */
function sendPositiveEmail() {
    try {
        MailApp.sendEmail({
            to: EMAIL_RECIPIENT,
            subject: EMAIL_SUBJECT_POSITIVE,
            body: EMAIL_BODY_POSITIVE
        });
    } catch (error) {
        Logger.log('Error sending positive email: ' + error.toString());
    }
}

/**
 * Sends a negative email indicating that the number of "Yes" votes did not meet the threshold.
 */
function sendNegativeEmail() {
    try {
        MailApp.sendEmail({
            to: EMAIL_RECIPIENT,
            subject: EMAIL_SUBJECT_NEGATIVE,
            body: EMAIL_BODY_NEGATIVE
        });
    } catch (error) {
        Logger.log('Error sending negative email: ' + error.toString());
    }
}
 
