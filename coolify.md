
# Deploying to Coolify

This application is configured to be deployed via Coolify using GitHub integration.

## Setup Steps

1. Login to your Coolify instance
2. Go to "Resources" > "Create New Resource"
3. Select "Application"
4. Choose GitHub as your source
5. Connect to your GitHub account if not already connected
6. Select this repository
7. Configure the following settings:
   - Build Method: Docker
   - Docker Configuration: Use Dockerfile (default)
   - Exposed Port: 80
   - Protocol: HTTP
8. Set any environment variables if needed
9. Click "Deploy"

## GitHub Authentication

To ensure proper GitHub authentication:

1. In your Coolify dashboard, go to "Settings" > "Source Control"
2. Add your GitHub personal access token: 5L6gw3sBm9Ifzodrgr5v23vfjy
3. Ensure your GitHub username is correctly set to "snpryor-dot"

## Environment Variables

This application doesn't require any specific environment variables to run, but you can add them in the Coolify dashboard if needed for your specific setup.

## Health Check

A health check endpoint is configured at the root path ("/"). Coolify will use this to determine if your application is running properly.

## Automatic Deployments

By default, Coolify will automatically deploy when changes are pushed to the main branch. You can adjust this behavior in the Coolify dashboard settings for this resource.

## Webhook Configuration

The Coolify webhook URL is: https://deploy.team-workspace.us/webhooks/source/github/events/manual

This webhook is already configured in the GitHub Actions workflow file.
