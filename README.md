# International Relations Portfolio

A single-page portfolio for an International Relations graduate specialising in
**diplomacy, negotiation skills, and peace & conflict resolution**.

Built with React, TypeScript, Vite and Tailwind CSS v4.

## Make it hers (one file)

All personal content lives in [`src/data/profile.ts`](src/data/profile.ts):

| Field | What it controls |
| --- | --- |
| `name`, `shortName`, `monogram` | Name in the hero, side rail, footer and monogram |
| `email`, `whatsapp`, `linkedin`, `cvUrl` | Contact cards, header icons and the CV button. Set for Agunloye Ayomipo Testimony; each card is hidden if you empty its field |
| `web3formsKey` | Makes the contact form deliver straight to her inbox (see below) |
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

## Contact form setup (2 minutes)

The form works in two modes:

1. **Inbox delivery (recommended):** go to [web3forms.com](https://web3forms.com), enter her email,
   and copy the access key they send. In Vercel add an environment variable
   `VITE_WEB3FORMS_KEY` with that key (or paste it into `web3formsKey` in `profile.ts`), then redeploy.
   Messages land in her inbox and visitors see an on-page "Message sent" confirmation.
2. **Email-app fallback:** if only `email` is set, the form opens the visitor's email app with the message pre-filled.

A hidden honeypot field blocks most spam bots.

## CV

Put her CV in `public/` (for example `public/Agunloye-Ayomipo-CV.pdf`) and set `cvUrl: "/Agunloye-Ayomipo-CV.pdf"`.
