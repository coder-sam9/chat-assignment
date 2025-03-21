# ClassChat Application

A real-time chat application built with React Native and Firebase, featuring anonymous authentication and meeting management capabilities.

## Features

- Anonymous authentication
- Real-time messaging
- Meeting summaries
- Bottom sheet chat interface
- Message status indicators
- Typing indicators
- File attachments support

## Tech Stack

- React Native with Expo
- Firebase (Authentication & Firestore)
- React Navigation
- Expo Linear Gradient
- React Native Bottom Sheet
- React Native Gesture Handler

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Firebase account

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd chat-asssignmnt
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a new Firebase project
   - Enable Anonymous Authentication
   - Enable Cloud Firestore
   - Update the Firebase configuration in `src/config/firebase.js`

4. Start the application:
```bash
npm start
```

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
├── config/          # Configuration files
├── context/         # React Context providers
├── screens/         # Application screens
└── utils/          # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
