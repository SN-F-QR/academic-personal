# Academic Personal Website

A personal academic website built with Solid, TypeScript, and Vite, featuring Tailwind CSS for styling and MDX for content management.

## Features

- Academic papers and projects showcase
- Markdown-based content management
- Some widget-like designs (personal location, recent news)
- Responsive resume page
- Reduced bundle size (~26 KB Gzipped Bundle Size)
- [GitHub contribution visualization](https://github.com/marketplace/actions/generate-snake-game-from-github-contribution-grid)

## Quick Start

### Deployment

By default, its workflow deploys the project to Cloudflare Pages.

1. Fork the project
2. Add your `secrets` of `CLOUDFLARE_API_TOKEN ` and `CLOUDFLARE_ACCOUNT_ID` to
   > Settings > Secrets and variables > Actions
3. Edit the `--project-name` to your own in `./github/workflows/commit-snake.yml`
4. Run the workflow manually OR push new commits to trigger automatically

---

A **simpler** way is to directly connect the project to Cloudflare Pages, explore more [here](https://developers.cloudflare.com/pages/get-started/git-integration/). Also, remember to delete the `./github/workflows/commit-snake.yml`.

> [!WARNING]
>
> This method disables the github contribution visualization

---

### Local Development

```bash
pnpm install
pnpm run dev
```

## Customizing Content

### Update Personal Information

Edit the MDX files in the `src/content/` directory to update website content:

- `academic.mdx` - Academic achievements, papers, and research projects
- `about.mdx` - Personal profile and skills
- `links.mdx` - Links and contact information
- `resume.mdx` - CV/Resume content

You may refer to the HTML-like contents in these MDX files to use some design components, including:

- `SinglePubCard` to show a publication `Card` with one figure
- `ProjectCard` to show a expandable research project `Card` with a full abstract
- `InfoCard` to show a project or information `Card` with a title and a subtitle
- `CardList` to arrange any `Card` components

### Update Images or Files

- Update new images (avatar, map for widget) or PDF files in the `public/` directory
- Add new figures to `src/assets/` directory for `SinglePubCard`

### Update the location widget

1. Add your `secrets` of `MAP_API_KEY` of Google Map static api to > Settings > Secrets and variables > Actions
2. Adjust the `address` and `zoom` in `./github/workflows/.yml` for your location

More details for the [map generation](https://github.com/SN-F-QR/google-map-generator)

### Fonts

This project uses Google Fonts, adjust `index.css` and `index.html` to customize

## Acknowledgement

Color palette inspiration from [LightQuantum](https://github.com/PhotonQuantum/landingpage)
