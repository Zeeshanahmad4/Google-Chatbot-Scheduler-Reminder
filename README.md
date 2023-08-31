# Google Chatbot Scheduler: Yoga Reminder 🧘‍♂️

## Project Overview 📋

Google Chatbot Scheduler: Yoga Reminder is a custom chatbot integrated into Google Workspace. It's designed to send scheduled reminders in specific Google Chat spaces, gather responses through voting buttons, and send emails based on the voting results.

## Features ✨

- **Scheduled Reminders**: Ability to send reminders on a scheduled basis.
- **Voting Mechanism**: Users can vote via "Yes" and "No" buttons on the reminder message.
- **Conditional Email Sending**: Sends different email messages based on the number of "Yes" votes.
- **Configurable Settings**: Adjust the vote threshold, chat space, and email templates as needed.

## **To-Do Features 🚀**

- **Analytics Dashboard**: A dashboard showing the voting statistics over time.
- **Integration with Calendar**: Auto-schedule yoga sessions based on the voting results.
- **User Profiles**: Recognize frequent participants and provide them with loyalty rewards.

## Usage Examples 📌

1. **Schedule a Reminder**: Call the `scheduleReminders()` function to set up a new reminder.
2. **Send an Immediate Reminder**: Use the `sendReminderToChatSpace()` function to send a reminder instantly

## Setup and Installation Instructions 🛠️

1. Clone this repository to your local machine.
2. Navigate to the Google App Scripts dashboard and create a new project.
3. Upload the files from the cloned repository.
4. Set up the necessary triggers and permissions in Google Workspace.
5. Adjust the configurations in `settings.gs` and `placeholders.gs` as needed.


## Troubleshooting Tips 🔍

- **Reminder Not Sent**: Ensure that the Google Chat API has the necessary permissions.
- **Votes Not Counted**: Check the `countVotes()` function and verify the integration with Google Chat.
- **Email Not Sent**: Ensure that the Gmail API is enabled and has the necessary permissions.


## Contribution Guidelines 🤝

1. Fork this repository to your GitHub account.
2. Create a new branch for your feature or bugfix.
3. Write meaningful commit messages.
4. Create a pull request describing your changes. Ensure that the CI checks pass.
5. Wait for a review. Address any review comments and make the necessary changes.

