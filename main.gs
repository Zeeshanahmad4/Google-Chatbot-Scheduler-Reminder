// main.gs

function main() {
    // Step 1: Schedule reminders
    scheduleReminders();
    
    // Step 2: Send reminder to chat space
    sendReminderToChatSpace();
    
    // Step 3: Send voting options
    sendVotingOptionsToChatSpace();
    
    // Step 4: Collect and count votes
    var yesVotes = countVotes();
    
    // Step 5: Send email based on the voting results
    if (yesVotes >= VOTE_THRESHOLD) {
        sendPositiveEmail();
    } else {
        sendNegativeEmail();
    }
}
 
