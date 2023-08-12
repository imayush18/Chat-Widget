# Chat Widget Application README

Welcome to the Chat Widget application! This is a simple web-based chat widget that allows users to submit messages, delete messages, and reply to messages. The application is built using HTML, CSS, and JavaScript, and it utilizes local storage for storing the chat data.

## Features

- **Message Submission:** Users can enter their messages in the input field and submit them by clicking the "Send" button. Submitted messages will appear in the chat area.

- **Message Deletion:** Users can delete their own messages by clicking the "Delete" button next to each message. Deleted messages will be removed from the chat area.

- **Message Replies:** Users can reply to messages by clicking the "Reply" button below a message. The reply will appear indented under the original message, creating a threaded conversation view.

## Getting Started

To use the Chat Widget application, follow these steps:

1. **Clone the Repository:** Start by cloning this repository to your local machine using the following command:

   ```
   git clone https://github.com/your-username/chat-widget-app.git
   ```

2. **Navigate to the Project Directory:** Move to the directory containing the cloned repository:

   ```
   cd chat-widget-app
   ```

3. **Open the Application:** Open the `index.html` file in your preferred web browser to launch the application.

## Usage

1. **Submitting Messages:** Enter your message in the input field at the bottom of the chat area. Click the "Send" button or press Enter to submit the message. The message will appear in the chat area along with the current timestamp.

2. **Deleting Messages:** To delete your own messages, click the "Delete" button (represented by a trash can icon) next to the message you want to delete. The message will be removed from the chat area and local storage.

3. **Replying to Messages:** To reply to a message, click the "Reply" button below the message you want to reply to. A new input field will appear under the message. Enter your reply and click the "Send" button. The reply will be indented under the original message, creating a threaded conversation.

## Local Storage

The Chat Widget application utilizes local storage to store chat messages and their metadata. This means that the chat history will be saved even if you close the browser tab or refresh the page. However, please note that local storage has limitations in terms of storage capacity, and excessive use may lead to data being overwritten.
