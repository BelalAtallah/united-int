#!/bin/bash

# Build the project
npm run build

# Create a temporary directory for deployment
mkdir -p temp-deploy

# Copy the built files to the temporary directory
cp -r dist/* temp-deploy/

# Deploy to gh-pages
gh-pages -d temp-deploy

# Clean up
rm -rf temp-deploy

echo "Deployment completed!"
