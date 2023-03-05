# Turbo + Vite Plugin Federation POC

This is a small POC which combines [Turbo repo](https://turbo.build/repo) and [Vite plugin federation](https://github.com/originjs/vite-plugin-federation) in order to hopefully provide a better alternative to (the [deprecated](https://github.com/single-spa/single-spa/issues/1070)) [single-spa](https://single-spa.js.org/).

## Requirements

- [pnpm](https://pnpm.io/) is the package manager used in this project.

## Usage

Run `pnpm dev` so start both applications, here you will find a host and a remote app. 

- The host app is just a simple shell for the remote(s).
- The remote is using Tailwind.
- Both are using vite (rather the CRA)

![App Screenshot](./assets/app-screenshot.png)

## Limitations

- For now, only the host can start in development mode, the remote apps are meant to use a production build in order to generate a `remoteEntry.js`.
    - I haven't gotten the shell to detect when a remote has undergone changes, so you need to reload the page.
    - An ideal workflow (for now), would be to run your remote in development (standalone) and just let the shell do it's job to wrap it.
