# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

# Nuxt Docker Deployment

This repository contains a Nuxt 3 application ready to be deployed in a Docker container.

## Setup Instructions

0. Change user

   sudo -u astepanyan -i

1. Navigate to the Nuxt folder:

   ```
       cd /home/astepanyan/skeletonssr
       git pull
   ```

1. Navigate to the main folder:

   ```
   cd /home/astepanyan/skeletoncrew
   ```

1. Build the Docker image for the Nuxt service. We'll use the `--no-cache` flag to ensure any changes to our Dockerfile are included in the build.

   ```
   docker-compose build --no-cache nuxt
   ```

1. Start the Docker containers:

   ```
   docker-compose up -d
   ```

The Nuxt application should now be accessible on port 3000.
