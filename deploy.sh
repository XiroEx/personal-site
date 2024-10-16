#!/bin/bash

# This script will deploy the application

# Run build
npm run build

# Deploy to firebase site "georgeanthony"
firebase deploy --only hosting:georgeanthony