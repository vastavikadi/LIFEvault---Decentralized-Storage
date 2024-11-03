
## 🎓 LifeVault

LifeVault is a decentralized, privacy-focused file storage platform leveraging IPFS, Hive blockchain, and Pinata. It allows users to securely store, share, and manage their files, with metadata broadcasted on Hive for verifiability.

## 🚀 **Table of Contents**

- [Features](https://github.com/vastavikadi/LIFEvault---Decentralized-Storage/edit/main/README.md#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Decentralized Storage**: Stores files on IPFS, ensuring availability and privacy.
- **Hive Integration**: Uses Hive blockchain for account integration and transaction broadcasting.
- **Secure Access**: Supports email-based and Hive Keychain-based authentication.
- **File Management**: Allows uploading, renaming, deleting, and sharing files.
- **User Profiles and Transaction History**: Displays user details and transaction records.
- **Integration with HiveExplorer and Hive Keychain** for easy account & its data access.

## 🌟 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v14+)
- [MongoDB](https://mongodb.com) (for data storage)
- [Hive Keychain](https://hive-keychain.com) extension for Hive authentication.

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vastavikadi/LIFEvault---Decentralized-Storage.git
   cd LIFEvault---Decentralized-Storage

2. **Set up the backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Set up the frontend (in a new terminal):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Create a `.env` file** in the backend folder:
   ```
   SMTP_EMAIL="YOUR_SMTP_EMAIL"
   SMTP_PASSWORD="YOUR_SMTP_PASSWORD"
   MONGODB_URI="YOUR_MONGODB_URI"
   JWT_SECRET="YOUR_JWT_SECRET"
   HIVE_USERNAME="YOUR_HIVE_USERNAME"  # Hive account username used for broadcasting; optional as needed to implement for individual
   HIVE_PRIVATE_KEY="YOUR_HIVE_PRIVATE_KEY"  #optional as needed to implement for individual
   PINATA_API_KEY="YOUR_PINATA_API_KEY"  # Pinata API key for IPFS uploads
   PINATA_API_SECRET="YOUR_PINATA_API_SECRET"  # Pinata API secret key
   PINATA_JWT="YOUR_PINATA_JWT"
   ```

5. **Run the application**:
   - Open your browser and visit http://localhost:5173.

> **Note**: You'll need a Pinata account to obtain the API, SECRET KEY and JWT. Sign up at [PINATA](https://auth.pinata.cloud/realms/pinata/login-actions/registration?client_id=pinata-app&tab_id=_grlKze3fOw).

> **Note**: You'll need a HIVE account as well as Hive KEYCHAIN browser extension. Sign up at [HIVE](https://ecency.com/signup?referral=vastavikadi).


## 🛠️ Technologies Used

- **Frontend**: Vite, Tailwind CSS, TypeScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **File Storage**: Pinata
- **Blockchain Integration**: dhive, hivejs, Hive Keychain
