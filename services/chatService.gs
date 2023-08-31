// chatService.gs

// Assuming you have the API endpoint and authorization details
var CHAT_API_ENDPOINT = "YOUR_CHAT_API_ENDPOINT";
var GOOGLE_CHAT_SPACE = "YOUR_GOOGLE_CHAT_SPACE_URL"; 
var GOOGLE_CHAT_THREAD = "YOUR_GOOGLE_CHAT_THREAD_ID"; 

/**
 * Sends a reminder message to a specific Google Chat space and thread.
 */
function sendReminderToChatSpace() {
    var message = "Friendly Reminder: Please cast your vote for tomorrow's yoga session!";
    
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

    try {
        UrlFetchApp.fetch(GOOGLE_CHAT_SPACE + GOOGLE_CHAT_THREAD, options);
    } catch (error) {
        Logger.log('Error sending reminder to chat space: ' + error.toString());
    }
}

/**
 * Sends a message to Google Chat with "Yes" and "No" buttons for voting.
 */
function sendVotingOptionsToChatSpace() {
    var text = "Are you attending tomorrow's yoga session?";

    var headers = {
        "Authorization": "Bearer " + ScriptApp.getOAuthToken(),
        "contentType": "application/json"
    };

    var payload = {
        "text": text,
        "cards": [{
            "sections": [{
                "widgets": [{
                    "buttons": [
                        {
                            "textButton": {
                                "text": "Yes",
                                "onClick": {
                                    "action": {
                                        "actionMethodName": "vote",
                                        "parameters": [{"key": "vote", "value": "yes"}]
                                    }
                                }
                            }
                        },
                        {
                            "textButton": {
                                "text": "No",
                                "onClick": {
                                    "action": {
                                        "actionMethodName": "vote",
                                        "parameters": [{"key": "vote", "value": "no"}]
                                    }
                                }
                            }
                        }
                    ]
                }]
            }]
        }]
    };

    var options = {
        "method": "POST",
        "headers": headers,
        "payload": JSON.stringify(payload)
    };

    try {
        UrlFetchApp.fetch(GOOGLE_CHAT_SPACE + GOOGLE_CHAT_THREAD, options);
    } catch (error) {
        Logger.log('Error sending voting options to chat space: ' + error.toString());
    }
}
 
