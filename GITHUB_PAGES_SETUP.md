# GitHub Pages Setup Instructions

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/devbytes766/qrzap-promotion
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

## Step 2: Check Workflow Status

1. Go to: https://github.com/devbytes766/qrzap-promotion/actions
2. Look for the "Deploy to GitHub Pages" workflow
3. If you see it, click on it to see if it's running or has errors
4. If you don't see it, the workflow will trigger on the next push

## Step 3: Manually Trigger Workflow (if needed)

If the workflow hasn't run automatically:

1. Go to: https://github.com/devbytes766/qrzap-promotion/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click **"Run workflow"** button (top right)
4. Select **"main"** branch
5. Click **"Run workflow"**

## Step 4: Wait for Deployment

- The workflow typically takes 2-3 minutes to complete
- You'll see a green checkmark when it's done
- The site will be available at: **https://devbytes766.github.io/qrzap-promotion/**

## Troubleshooting

### If workflow fails:
- Check the error message in the Actions tab
- Common issues:
  - Missing dependencies (should be fixed with `npm ci`)
  - Build errors (check the build step logs)
  - Permission issues (make sure Pages permissions are enabled in Settings > Actions > General)

### If Pages still shows 404:
1. Make sure GitHub Pages source is set to **"GitHub Actions"** (not a branch)
2. Wait a few minutes after the workflow completes (propagation delay)
3. Clear your browser cache and try again
4. Check that the workflow completed successfully (green checkmark)
5. Try accessing: https://devbytes766.github.io/qrzap-promotion/ (without /index.html)

### Verify Deployment

After the workflow completes:
1. Go to: https://github.com/devbytes766/qrzap-promotion/settings/pages
2. You should see: "Your site is live at https://devbytes766.github.io/qrzap-promotion/"
3. Visit the URL to verify it's working

## Important Notes

- **DO NOT** set the source to a branch (like `gh-pages` or `main`)
- **MUST** set the source to **"GitHub Actions"**
- The workflow will automatically deploy on every push to `main`
- The site URL is: https://devbytes766.github.io/qrzap-promotion/

