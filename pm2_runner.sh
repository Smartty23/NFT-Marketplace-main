#!/bin/bash

# PM2 Runner Script for Gradsea.io NFT Marketplace
# This script manages the Next.js application using PM2

echo "🚀 Starting Gradsea.io NFT Marketplace deployment..."

# Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null
then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Stop existing PM2 process if running
echo "🛑 Stopping existing processes..."
pm2 stop gradsea-nft || true
pm2 delete gradsea-nft || true

# Start the Next.js application with PM2
echo "▶️  Starting application with PM2..."
pm2 start npm --name "gradsea-nft" -- start

# Save PM2 process list
pm2 save

# Display PM2 status
echo "✅ Deployment complete!"
pm2 status

# Show logs
echo "📋 Application logs:"
pm2 logs gradsea-nft --lines 20
