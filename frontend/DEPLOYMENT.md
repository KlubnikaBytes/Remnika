# How to Deploy to Vercel

Since your project is now in a `frontend` subdirectory, you need to configure Vercel slightly differently.

## Step 1: Import Project
1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New...** > **Project**.
3.  Select the **Fintech** repository you just pushed.

## Step 2: Configure Project (Critical!)
1.  **Framework Preset**: Ensure **Next.js** is selected.
2.  **Root Directory**: Click **Edit** next to Root Directory.
    *   Select the `frontend` folder.
    *   *If you don't do this, the build will fail because it can't find `package.json`.*

## Step 3: Environment Variables
If you have any API keys or secrets (e.g., database URLs, authentication keys), add them under the **Environment Variables** section.
*   Currently, the app uses local state and mock data, so no critical keys are required for the frontend to run initially.

## Step 4: Deploy
1.  Click **Deploy**.
2.  Vercel will build your application.
3.  Once done, you will get a live URL (e.g., `fintech-app.vercel.app`).

## Troubleshooting
*   **Build Failures**: Check the logs. If it says "package.json not found", you likely missed Step 2 (Root Directory).
*   **Lint Errors**: Vercel runs ESLint during build. If it fails, fix the errors locally and push again.
