 
// votingService.gs

// Simulated chat space votes
var chatVotes = [];

/**
 * Collects votes from the chat space. 
 * For demonstration, this function will simulate chat space votes by adding random "Yes" or "No" values to the chatVotes array.
 */
function collectVotes() {
    // Simulate a random number of votes between 5 and 20
    var numberOfVotes = Math.floor(Math.random() * 16) + 5;

    for (var i = 0; i < numberOfVotes; i++) {
        // Randomly add "Yes" or "No" votes to the chatVotes array
        chatVotes.push(Math.random() < 0.5 ? "Yes" : "No");
    }
}

/**
 * Counts and returns the number of "Yes" votes from the chatVotes array.
 * @return {number} - The number of "Yes" votes.
 */
function countVotes() {
    var yesVotesCount = chatVotes.filter(vote => vote === "Yes").length;
    return yesVotesCount;
}
