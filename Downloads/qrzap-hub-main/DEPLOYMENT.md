# GitHub Pages Deployment Guide

## Current Status
If you're seeing a 404 error, follow these steps:

## Step 1: Verify GitHub Pages is Enabled

1. Go to: https://github.com/devbytes766/qrzap-promotion/settings/pages
2. Under "Source", make sure it's set to **"GitHub Actions"** (NOT "Deploy from a branch")
3. If it's not set, select "GitHub Actions" and click "Save"

## Step 2: Check Workflow Status

1. Go to: https://github.com/devbytes766/qrzap-promotion/actions
2. Look for a workflow run called "Deploy to GitHub Pages"
3. If you see a failed run, click on it to see the error
4. If there's no run, the workflow will trigger automatically on the next push

## Step 3: Manually Trigger Workflow (if needed)

1. Go to: https://github.com/devbytes766/qrzap-promotion/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button (top right)
4. Select "main" branch and click "Run workflow"

## Step 4: Wait for Deployment

- The workflow typically takes 2-3 minutes to complete
- You'll see a green checkmark when it's done
- The site will be available at: https://devbytes766.github.io/qrzap-promotion/

## Troubleshooting

### If workflow fails:
- Check the error message in the Actions tab
- Common issues:
  - Missing dependencies (should be fixed with `npm ci`)
  - Build errors (check the build step logs)
  - Permission issues (make sure Pages permissions are enabled)

### If Pages shows 404:
- Make sure GitHub Pages source is set to "GitHub Actions"
- Wait a few minutes after the workflow completes (propagation delay)
- Clear your browser cache and try again
- Check that the workflow completed successfully

## Verify Deployment

After the workflow completes:
1. Go to: https://github.com/devbytes766/qrzap-promotion/settings/pages
2. You should see: "Your site is live at https://devbytes766.github.io/qrzap-promotion/"
3. Visit the URL to verify it's working

