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

1. GET /api/metrics
   Description: Fetch real-time metrics on failed requests and system logs.

   ![Fetch real-time metrics on failed requests and system logs.](/images/1.png)

2. POST /api/submit
   Description: Monitors POST requests due to invalid headers or tokens.
   ![logs and failures of the post request providing incorrect token](/images/3.png)

3. POST /api/submit
   Description: Monitors POST requests due to valid tokens.
   ![Monitors POST requests due to valid tokens.](/images/2.png)

## Email Alert

![](/images/4.png)
![](/images//5.png)
![](/images//6.png)
![](/images/7.png)
![](/images/8.png)

## Example Use Case

Send POST Requests:
Send valid and invalid POST requests to /api/submit. Invalid requests will be tracked.

# Monitor Metrics:

Fetch metrics via /api/metrics to view failed attempts and logs.

# Receive Alerts:

When an IP exceeds the failure threshold within the time window, an email is sent to the configured address.

# Contributing

Contributions are welcome! Fork the repo, create a branch, and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
