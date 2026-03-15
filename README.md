# StellarForge - Stellar Token Deployer

A user-friendly dApp for quick token deployment on Stellar, targeting creators in Nigeria and emerging markets.

## Overview

**StellarForge** is a decentralized application that enables creators, entrepreneurs, and businesses in emerging markets to deploy custom tokens on the Stellar blockchain without writing a single line of code.

### Why StellarForge?

- **🎯 No Coding Required**: Simple form-based interface for token deployment
- **💰 Low Fees**: Leverage Stellar's ultra-low transaction costs (~0.00001 XLM)
- **⚡ Fast**: Deploy tokens in seconds, not hours
- **🌍 Emerging Markets Focus**: Optimized for users in Nigeria and other developing regions
- **🔒 Secure**: Non-custodial, wallet-based authentication
- **📱 Mobile-First**: Responsive design for all devices
- **📲 PWA Support**: Install as an app on any device with offline capabilities

## Features

### Current Features
- ✅ Token Factory Smart Contract
- ✅ React Frontend with TypeScript
- ✅ Wallet Integration (Freighter)
- ✅ IPFS Metadata Support
- ✅ Testing Infrastructure
- ✅ Responsive UI with Tailwind CSS

### Tech Stack

#### Smart Contracts
- **Rust** 2021
- **Soroban SDK** 21.0.0
- **Soroban Token SDK**

#### Frontend
- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 5.0.8
- **Tailwind CSS** 4.1.18
- **Vitest** 4.0.18

#### Integrations
- **Stellar SDK**
- **Freighter Wallet**
- **Pinata IPFS**

## Getting Started

### Prerequisites

- Node.js 18+
- Rust 1.70+
- Soroban CLI

### Installation

1. Clone and setup:
   ```bash
   git clone <repo>
   cd stellarforge
   ```

2. Setup Soroban:
   ```bash
   chmod +x scripts/setup-soroban.sh
   ./scripts/setup-soroban.sh
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Build contracts:
   ```bash
   cd ../contracts
   cargo build
   ```

### Development

- Frontend: `cd frontend && npm run dev`
- Contracts: `cd contracts && cargo test`

## Project Structure

```
stellarforge/
├── contracts/                    # Smart contracts
│   ├── token-factory/           # Main token factory contract
│   │   ├── src/
│   │   │   ├── lib.rs          # Contract logic
│   │   │   └── test.rs         # Unit tests
│   │   └── Cargo.toml
│   └── Cargo.toml               # Workspace config
│
├── frontend/                     # React application
│   ├── src/
│   │   ├── components/          # UI components
│   │   │   ├── UI/             # Reusable components
│   │   ├── services/            # API integrations
│   │   ├── hooks/               # Custom React hooks
│   │   ├── types/               # TypeScript definitions
│   │   ├── utils/               # Helper functions
│   │   ├── config/              # Configuration files
│   │   └── App.tsx              # Main application
│   ├── public/                  # Static assets
│   └── package.json
│
├── scripts/                      # Utility scripts
│   └── setup-soroban.sh         # Environment setup
│
├── .github/                      # GitHub configuration
└── README.md
```

## Smart Contracts

### Token Factory Contract

Core functions:
- `initialize()` - Set up factory
- `create_token()` - Deploy new tokens
- `set_metadata()` - Add IPFS metadata
- `mint_tokens()` - Admin minting
- `burn()` - Token burning
- `update_fees()` - Fee management

## Testing

```bash
# Frontend tests
cd frontend
npm test

# Contract tests
cd ../contracts
cargo test
```

## Deployment

### Contract Deployment
```bash
cd contracts/token-factory
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/token_factory.wasm --network testnet
```

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy dist/ to Vercel/Netlify
```

## License

MIT