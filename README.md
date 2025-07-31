# New Materials Cloud main frontend

Using Astro, which allows for a simple but powerful way to build the static frontend.

`main` branch is automatically deployed to https://materialscloud-org.github.io/mc-frontend.

Legacy repositories:

- [frontend-common](https://github.com/materialscloud-org/frontend-common)
- [frontend-learn](https://github.com/materialscloud-org/frontend-learn)
- [frontend-work](https://github.com/materialscloud-org/frontend-work)
- [frontend-discover](https://github.com/materialscloud-org/frontend-discover)
- [frontend-explore](https://github.com/materialscloud-org/frontend-explore)
- [legacy-frontend-docker](https://github.com/materialscloud-org/legacy-frontend-docker)

Development notes - tips for development:

- when linking to pages/resources don't use the leading flash (so use e.g. `<a href="work">` or `<img src="images/logos/mc3d.png">`). This will use the `base:` subpath correctly.
- enviroment variables are set (mostly for backend fetches) via the `.env.development` and `.env.production` files and assigned in `./src/config/env.js`. Astro will automatically use prod and dev backends depending on the command ran...

  - for an example file using these env variables see `./src/components/home/Statistics.astro`

- This project attempts to use modern standards while also maintaining most of the UI prior, changes are as follows:

- bootstrap &rarr; tailwindcss via

  - [Installation Documentation for tailwind astro.](https://docs.astro.build/en/guides/styling/#tailwind)
  - Quick [link](https://tailscan.com/colors) to colors, custom color schemes (either in file or globally.) can be made.
  - Full [documentation](https://v2.tailwindcss.com/docs) for tailwindcss
  - Useful documentation sections:

    - Layout: [Containers](https://v2.tailwindcss.com/docs/container), [Flexbox/Grid](https://v2.tailwindcss.com/docs/flex-direction)
    - [Spacing](https://v2.tailwindcss.com/docs/padding)
    - [Fontsizing](https://v2.tailwindcss.com/docs/font-size)

  - Tailwind aims to have all styling inline via pre-existing classes. Some of our sections are inconsistant (I will try add a globalised styling to these.)

- bootstrap-icons &rarr; lucide astro `npm install lucide-astro`
  - Should be lighter as these are SVGs optimised for the web

# ASTRO QUICKSTART BELOW

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
