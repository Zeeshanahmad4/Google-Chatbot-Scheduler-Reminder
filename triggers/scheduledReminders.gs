// scheduledReminders.gs

function scheduleReminders() {
    // Clear any existing triggers to avoid duplication
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
        ScriptApp.deleteTrigger(triggers[i]);
    }

    // Set up a daily trigger for 10:00 AM
    ScriptApp.newTrigger('sendReminder')
        .timeBased()
        .atHour(10)
        .everyDays(1) // Frequency is every day
        .create();
}

/**
 * Function to be executed by the trigger. This is just a sample and can be replaced with any other function.
 */
function sendReminder() {
    // Your reminder logic here
    Logger.log("Reminder sent at: " + new Date());
}
 
