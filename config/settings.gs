// settings.gs

// Threshold for "Yes" votes
var VOTE_THRESHOLD = 10;

// Google Chat Space and Thread details
var GOOGLE_CHAT_SPACE = "YOUR_GOOGLE_CHAT_SPACE_URL"; 
var GOOGLE_CHAT_THREAD = "YOUR_GOOGLE_CHAT_THREAD_ID"; 

// Email templates and recipient
var EMAIL_TEMPLATE_POSITIVE = "More than X people are attending yoga tomorrow!";
var EMAIL_TEMPLATE_NEGATIVE = "Less than X people are attending yoga tomorrow!";
var EMAIL_RECIPIENT = "recipient@example.com"; // Adjust to your recipient's email

/**
 * Fetches the number of "Yes" votes from a Google Sheet.
 * Replace the sheet ID and range based on your setup.
 * @return {number} - The number of "Yes" votes.
 */
function getVotes() {
    var sheet = SpreadsheetApp.openById('YOUR_GOOGLE_SHEET_ID').getSheetByName('Voting');
    var range = sheet.getRange('A:A'); // Assuming votes are in column A
    var values = range.getValues();
    
    var yesVotes = values.filter(function(value) {
        return value[0] === "Yes";
    }).length;

    return yesVotes;
}

/**
 * Sends a message to Google Chat.
 * @param {string} message - The message you want to send.
 */
function sendMessageToGoogleChat(message) {
    var headers = {
        "Authorization": "Bearer " + ScriptApp.getOAuthToken(),
        "contentType": "application/json"
    };

    var payload = {
        "text": message
    };

    var options = {
        "method": "POST",
        "headers": headers,
        "payload": JSON.stringify(payload)
    };

    UrlFetchApp.fetch(GOOGLE_CHAT_SPACE + GOOGLE_CHAT_THREAD, options);
}

/**
 * Sends an email notification based on the votes.
 * @param {string} message - The message to be sent via email.
 */
function sendEmailNotification(message) {
    MailApp.sendEmail({
        to: EMAIL_RECIPIENT,
        subject: "Yoga Attendance Update",
        body: message
    });
}

/**
 * Evaluates the number of votes and sends an appropriate notification.
 */
function checkVotesAndNotify() {
    var votes = getVotes();
    var message;

    if (votes > VOTE_THRESHOLD) {
        message = EMAIL_TEMPLATE_POSITIVE.replace("X", votes.toString());
    } else {
        message = EMAIL_TEMPLATE_NEGATIVE.replace("X", votes.toString());
    }

    sendMessageToGoogleChat(message);
    sendEmailNotification(message);
}

