# Visual Story Weaver

Please use high-quality royalty-free stock videos and images from sources such as Pexels, Unsplash, and Pixabay. Automatically choose appropriate visuals based on each section of my uploaded website content and place them where they create the strongest visual impact. For example: African climate/landscape video in the hero, renewable energy imagery in Services, biogas/agriculture imagery in the Featured Project, and technology/data imagery in Digital MRV. Do not use random images, watermarked content, or inappropriate visuals. Keep the official logo and brand colors unchanged.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://smart-sight-artist.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a2c1904a-49f9-4817-8097-2af88e29f68e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy on Render

This app uses TanStack Start server functions for contact inquiries, so deploy it as a **Web Service**, not a Static Site.

The included `render.yaml` defines a free Node Web Service with:

- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Health check: `/`

Create the service from the Blueprint in Render. In the service's Environment settings, add the server-only secrets `RESEND_API_KEY` and `RESEND_FROM_EMAIL`. The sender address must be verified in Resend. Do not prefix these values with `VITE_` or commit them to the repository. Contact submissions will continue to show an error until both values are configured correctly.
