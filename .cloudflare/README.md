# Cloudflare Pages Configuration

This project is configured for Cloudflare Pages deployment.

## Build Settings

- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node version**: 18 or higher

## Deployment

Cloudflare Pages will automatically:
1. Install dependencies with `npm install`
2. Run the build command
3. Deploy the `out` directory

No additional deploy command is needed.

