````markdown
# 🚀 Peer-to-Peer Crowdfunding Platform

A decentralized crowdfunding platform built on the **Ethereum Sepolia testnet** that enables users to create fundraising campaigns, contribute using ETH, and withdraw funds in a secure, trustless manner.

---

## 🧾 Description

This dApp allows individuals to launch campaigns directly on-chain. Built with **Solidity smart contracts** and integrated with **Thirdweb** tools for faster blockchain development. It uses a **Node.js + MongoDB** backend to manage user and campaign metadata, with a **React + Tailwind CSS** frontend for a seamless user experience.

---

## ⚙️ Tech Stack

| Layer        | Technologies Used                                  |
|--------------|----------------------------------------------------|
| 🖥️ Frontend   | React.js, TypeScript, Tailwind CSS                 |
| ⚙️ Backend    | Node.js, Express.js                                |
| 🔗 Blockchain | Solidity, Ethereum (Sepolia Testnet), Thirdweb SDK |
| 🗃️ Database   | MongoDB                                            |

---

## ✨ Features

- 📝 Create crowdfunding campaigns with title, description, goal, and deadline
- 💰 Contribute ETH to active campaigns
- ⏳ View live funding status and time remaining
- 🧾 Withdraw raised funds post-deadline (only by campaign creator)
- 🌐 Stores metadata off-chain securely via backend + MongoDB
- 🛡️ Integrated with **Thirdweb** for wallet connection and smart contract interaction

---

## 🧑‍💻 Getting Started

> Make sure you have **Node.js** and **npm** installed. Blockchain interaction happens via Sepolia testnet, so you need ETH from [Sepolia Faucet](https://sepoliafaucet.com/).

### 🔧 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/https://github.com/BhavsarShubham/Crowd-funding-platform-
cd Crowd-funding-platform-

# 2. Install frontend dependencies
cd client
npm install

# 3. Install backend dependencies
cd ../server
npm install

# 4. Start the backend server
npm start

# 5. Start the frontend React app (in a new terminal)
cd ../client
npm start
````

---

## 🔐 Environment Variables

Create a `.env` file in both `/client` and `/server` directories. Examples:

### 📁 `/client/.env`

```env
VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
```

### 📁 `/server/.env`

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🧪 Smart Contracts

* Written in **Solidity**
* Deployed to **Sepolia Testnet**
* Interacted via **Thirdweb SDK** and WalletConnect

🛠 Contracts support:

* `createCampaign()`
* `donateToCampaign()`
* `getDonators()`
* `withdrawFunds()`



## 📫 Contact

* 📧 Email: [shubhambhavsar3311@gmail.com](mailto:shubhambhavsar3311@gmail.com)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgments

* [Thirdweb](https://thirdweb.com/)
* [Ethereum Sepolia Testnet](https://sepoliafaucet.com/)
* [Tailwind CSS](https://tailwindcss.com/)

```

