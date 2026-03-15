#!/bin/bash

# Setup Soroban environment
# This script installs Rust, Soroban CLI, and configures the environment

set -e

echo "Setting up Soroban environment..."

# Install Rust if not present
if ! command -v rustc &> /dev/null; then
    echo "Installing Rust..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source $HOME/.cargo/env
fi

# Add wasm32 target
rustup target add wasm32-unknown-unknown

# Install Soroban CLI
if ! command -v soroban &> /dev/null; then
    echo "Installing Soroban CLI..."
    cargo install soroban-cli
fi

# Configure testnet
soroban config network add testnet \
  --rpc-url https://soroban-testnet.stellar.org \
  --network-passphrase "Test SDF Network ; September 2015"

echo "Soroban environment setup complete!"
echo "You can now build and deploy contracts."