# International Relations Portfolio

A single-page portfolio for an International Relations student specialising in
**diplomacy, negotiation skills, and peace & conflict resolution**.

Built with React, TypeScript, Vite and Tailwind CSS v4.

## Make it hers (one file)

All personal content lives in [`src/data/profile.ts`](src/data/profile.ts):

| Field | What it controls |
| --- | --- |
| `name`, `shortName`, `monogram` | Name in the hero, side rail, footer and monogram |
| `email`, `linkedin` | Contact buttons and the "Send message" form. **Both are empty right now**; the form and buttons appear as soon as you fill them in |
| `specializations` | The three expandable focus areas |
| `experience` | The "Field notes" placement card and stamp |
| `principles`, `toolkit`, `about` | Approach cards, "What I bring" grid and the About text |

Replace the photos in `public/images/` (`portrait.jpg`, `outdoors.jpg`) to change the pictures.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
```

## Deploy

Import the repo in Vercel. The Vite preset is detected automatically.
The share-preview image URL uses `VERCEL_PROJECT_PRODUCTION_URL`; set `SITE_URL`
(e.g. `https://yourname.com`) if you use a custom domain.

## World map

The dotted map in the "World" section is generated data (`src/data/worldMap.ts`).
Regenerate it, or change the hub cities, with `node scripts/gen-map.mjs`.
