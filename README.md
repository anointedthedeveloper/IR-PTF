# International Relations Portfolio

A single-page portfolio for an International Relations student specialising in
**diplomacy, negotiation skills, and peace & conflict resolution**.

Built with React, TypeScript, Vite and Tailwind CSS v4.

## Make it hers (one file)

All personal content lives in [`src/data/profile.ts`](src/data/profile.ts):

| Field | What it controls |
| --- | --- |
| `name` | Name in the side rail, hero, footer and monogram |
| `email`, `linkedin` | Contact buttons and the "Send message" form (LinkedIn is hidden when empty) |
| `specializations` | The three expandable focus areas |
| `experience` | The "Field notes" placement card and stamp |
| `principles`, `about` | Approach cards and the About text |

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
