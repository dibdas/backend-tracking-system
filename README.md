# backend-tracking-system

# Alerting System for Monitoring Failed POST Requests

## Overview

This backend system monitors a specific POST endpoint (`/api/submit`) for failed requests caused by invalid headers or incorrect access tokens. It tracks the number of failed requests from each IP address within a configurable time window (10 minutes by default) and triggers email alerts when a threshold (e.g., 5 failed attempts) is exceeded.

## Features

- Monitors failed POST requests for invalid headers or tokens.
- Tracks failed requests by IP within a configurable time window.
- Triggers email alerts when the threshold of failed requests is exceeded.
- Logs failed requests with details such as IP address, timestamp, and failure reason.
- Exposes an endpoint to fetch metrics.
- Scalable design to handle high request volumes.

## Tech Stack

- Backend: Node.js (Express)
- Database: MongoDB
- Email Alerts: Mailtrap SMTP
- Rate Limiting: Custom implementation

## Setup Instructions

## Installation

1. Clone the repository:
   - git clone git@github.com:dibdas/backend-tracking-system.git
     -cd backend-tracking-system
   - npm install
2. Configure .env File: Create a .env file in the root directory:
   - start the redis redis server
   - redis-server --port 6493
   - nodemon to start the server

## API Endpoints

1. POST /api/submit
   Description: Monitors POST requests and logs failures due to invalid headers or tokens.

   ![logs and failures of the post request providing incorrect token][defgggggggggggggggg]

[defgggggggggggggggg]: /images/1.png
