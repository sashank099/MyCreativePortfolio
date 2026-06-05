# Sashank Sekhar Sahoo — Creative Portfolio

A cinematic, single-page creative portfolio built to showcase filmmaking, video editing, motion graphics, and graphic design work. Engineered for performance with a dark editorial aesthetic, smooth scroll-reveal animations, a custom cursor, and a fully headless CMS powered by a single JavaScript config block.

> **Vibe-coded with AI assistance.** This project was built entirely through natural-language prompting with Claude (Anthropic). No traditional dev workflow — just ideas, iteration, and vibes.

---

## Live Sections

| Section | What it does |
|---|---|
| **Hero** | Animated intro with photo panel, stat pills, and particle canvas |
| **About + Timeline** | Bio, personal journey, and career milestones |
| **Toolkit** | Skills and software stack display |
| **Motion Works** | Video gallery — short-form (9:16 reels), long-form (16:9 brand films), and a narrative project list |
| **Design Gallery** | Featured spotlight card + filterable masonry grid with lightbox |
| **Impact / Retention Chemistry** | Chart.js-powered analytics display (toggleable) |
| **Feedback** | Client review submission form with star ratings |
| **Inquire / Contact** | Freelance inquiry form (Formspree-powered) |

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no frameworks, no build step, opens straight in a browser
- **Tailwind CSS** (CDN) — utility classes for layout
- **Chart.js** (CDN) — retention/analytics chart in the Impact section
- **Cloudinary** — video and image hosting with adaptive streaming (`q_auto`, `f_auto`)
- **Formspree** — serverless contact form handling
- **Google Fonts** — Inter, Playfair Display, Syne, DM Mono

---

## File Structure

```
/
├── index.html              ← structure only — DO NOT EDIT
├── style.css               ← all visual styles — DO NOT EDIT
├── script.js               ← ★ EDIT THIS FILE ONLY (CMS block at the top)
├── assets/
│   ├── videos/             ← local .mp4 files (if not using Cloudinary)
│   ├── images/             ← poster and design images
│   └── thumbnails/         ← video preview images
└── README.md
```

The entire content of the site is controlled by three data objects at the very top of `script.js`. You never need to touch `index.html` or `style.css`.

---

## CMS — How to Edit Content

Open `script.js`. Everything above the `END OF CMS` comment is yours to edit.

### Add a short-form reel (9:16)

```js
// In VIDEO_DATA:
{
    type:      "short",
    title:     "Reel Title",
    category:  "Short-Form Edit",
    subtitle:  "Reels · Shorts",
    cloudinary: {
        cloudName: "your_cloud_name",
        publicId:  "your_video_public_id",
    },
    thumbnail: ""   // leave "" to auto-generate from Cloudinary
},
```

### Add a long-form video (16:9)

```js
// In VIDEO_DATA:
{
    type:      "long",
    title:     "Project Title",
    category:  "Brand Film",
    subtitle:  "Brand Story · Edit",
    cloudinary: {
        cloudName: "your_cloud_name",
        publicId:  "your_video_public_id",
    },
    thumbnail: ""
},
```

### Add a narrative project (no video embed — links to YouTube)

```js
// In VIDEO_DATA:
{
    type:    "narrative",
    year:    "2026 · 12:40",
    title:   "Project Name",
    desc:    "One or two sentences about the project and its approach.",
    youtube: "YOUR_YOUTUBE_VIDEO_ID"
},
```

### Add a design to the gallery

```js
// In DESIGN_DATA:
{
    featured:  false,
    title:     "Poster Name",
    category:  "poster",      // "poster" | "social" | "motion" | "ui" | any new string
    image:     cldImg("your_cloudinary_image_public_id"),
    chip:      "Print Design",
    ratio:     "4 : 5"
},
```

### Toggle entire sections on or off

```js
const SETTINGS = {
    showAbout:    true,
    showToolkit:  true,
    showVideo:    true,
    showDesign:   true,
    showImpact:   false,   // ← set false to hide completely
    showFeedback: true,
    showContact:  true
};
```

---

## Cloudinary Setup

Videos and images are hosted on [Cloudinary](https://cloudinary.com) for fast, adaptive delivery.

1. Create a free Cloudinary account.
2. Upload your video or image.
3. Copy the **Cloud Name** from the dashboard and the **Public ID** from the asset.
4. Paste them into the `cloudinary: {}` block in `VIDEO_DATA`, or use `cldImg("public_id")` for images in `DESIGN_DATA`.

The site uses `q_auto` and `f_auto` transforms automatically — no manual optimization needed.

---

## Contact Form Setup (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy your **Form ID**.
3. In `script.js`, find `submitForm()` and replace `YOUR_FORM_ID` with it.

Submissions will be delivered directly to `sashanksahoo208@gmail.com`.

---

## Running Locally

No install, no build step.

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Open in browser (any of these work)
open index.html
# or use VS Code Live Server
# or: python3 -m http.server 3000
```

---

## AI Assistance Disclosure

This project is **fully vibe-coded** — designed and built through iterative natural-language conversation with **Claude** by Anthropic, without writing code manually from scratch. The HTML structure, CSS styling system, JavaScript CMS engine, Cloudinary integration, animation logic, and this README were all produced through AI-assisted prompting and iteration.

This is an intentional creative and engineering workflow choice — not a shortcut, but a method. The ideas, creative direction, content, and all final decisions are the author's own.

---

## Author

**Sashank Sekhar Sahoo**
2nd Year · B.Tech Chemical Engineering · NIT Rourkela
Odisha, India · 2026

[Twitter](https://x.com/SashankSek20197) · [LinkedIn](https://www.linkedin.com/in/sashank-sekhar-sahoo-968a65357/) · [Instagram](https://www.instagram.com/_sashank_99_/) · sashanksahoo208@gmail.com

---

*© 2026 Sashank Sekhar Sahoo · NIT Rourkela*