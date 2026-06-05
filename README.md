<h1>Sashank Sekhar Sahoo — Creative Portfolio</h1>

<p>A cinematic, single-page creative portfolio built to showcase filmmaking, video editing, motion graphics, and graphic design work. Engineered for performance with a dark editorial aesthetic, smooth scroll-reveal animations, a custom cursor, and a fully headless CMS powered by a single JavaScript config block.</p>

<blockquote>
    <p><strong>Vibe-coded with AI assistance.</strong> This project was built entirely through natural-language prompting with Claude (Anthropic), Gemini (Google), and ChatGPT (OpenAI). No traditional dev workflow — just ideas, iteration, and vibes.</p>
</blockquote>

<hr>

<h2>Live Sections</h2>

<table>
    <thead>
        <tr>
            <th>Section</th>
            <th>What it does</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Hero</strong></td>
            <td>Animated intro with photo panel, stat pills, and particle canvas</td>
        </tr>
        <tr>
            <td><strong>About + Timeline</strong></td>
            <td>Bio, personal journey, and career milestones</td>
        </tr>
        <tr>
            <td><strong>Toolkit</strong></td>
            <td>Skills and software stack display</td>
        </tr>
        <tr>
            <td><strong>Motion Works</strong></td>
            <td>Video gallery — short-form (9:16 reels), long-form (16:9 brand films), and a narrative project list</td>
        </tr>
        <tr>
            <td><strong>Design Gallery</strong></td>
            <td>Featured spotlight card + filterable masonry grid with lightbox</td>
        </tr>
        <tr>
            <td><strong>Impact / Retention Chemistry</strong></td>
            <td>Chart.js-powered analytics display (toggleable)</td>
        </tr>
        <tr>
            <td><strong>Feedback</strong></td>
            <td>Client review submission form with star ratings</td>
        </tr>
        <tr>
            <td><strong>Inquire / Contact</strong></td>
            <td>Freelance inquiry form (Formspree-powered)</td>
        </tr>
    </tbody>
</table>

<hr>

<h2>Tech Stack</h2>

<ul>
    <li><strong>HTML5 / CSS3 / Vanilla JS</strong> — no frameworks, no build step, opens straight in a browser</li>
    <li><strong>Tailwind CSS</strong> (CDN) — utility classes for layout</li>
    <li><strong>Chart.js</strong> (CDN) — retention/analytics chart in the Impact section</li>
    <li><strong>Cloudinary</strong> — video and image hosting with adaptive streaming (<code>q_auto</code>, <code>f_auto</code>)</li>
    <li><strong>Formspree</strong> — serverless contact form handling</li>
    <li><strong>Google Fonts</strong> — Inter, Playfair Display, Syne, DM Mono</li>
</ul>

<hr>

<h2>File Structure</h2>

<pre><code>/
├── index.html              &larr; structure only — DO NOT EDIT
├── style.css               &larr; all visual styles — DO NOT EDIT
├── script.js               &larr; ★ EDIT THIS FILE ONLY (CMS block at the top)
├── assets/
│   ├── videos/             &larr; local .mp4 files (if not using Cloudinary)
│   ├── images/             &larr; poster and design images
│   └── thumbnails/         &larr; video preview images
└── README.md</code></pre>

<p>The entire content of the site is controlled by three data objects at the very top of <code>script.js</code>. You never need to touch <code>index.html</code> or <code>style.css</code>.</p>

<hr>

<h2>CMS — How to Edit Content</h2>

<p>Open <code>script.js</code>. Everything above the <code>END OF CMS</code> comment is yours to edit.</p>

<h3>Add a short-form reel (9:16)</h3>

<pre><code class="language-js">// In VIDEO_DATA:
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
},</code></pre>

<h3>Add a long-form video (16:9)</h3>

<pre><code class="language-js">// In VIDEO_DATA:
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
},</code></pre>

<h3>Add a narrative project (no video embed — links to YouTube)</h3>

<pre><code class="language-js">// In VIDEO_DATA:
{
    type:    "narrative",
    year:    "2026 · 12:40",
    title:   "Project Name",
    desc:    "One or two sentences about the project and its approach.",
    youtube: "YOUR_YOUTUBE_VIDEO_ID"
},</code></pre>

<h3>Add a design to the gallery</h3>

<pre><code class="language-js">// In DESIGN_DATA:
{
    featured:  false,
    title:     "Poster Name",
    category:  "poster",      // "poster" | "social" | "motion" | "ui" | any new string
    image:     cldImg("your_cloudinary_image_public_id"),
    chip:      "Print Design",
    ratio:     "4 : 5"
},</code></pre>

<h3>Toggle entire sections on or off</h3>

<pre><code class="language-js">const SETTINGS = {
    showAbout:    true,
    showToolkit:  true,
    showVideo:    true,
    showDesign:   true,
    showImpact:   false,   // &larr; set false to hide completely
    showFeedback: true,
    showContact:  true
};</code></pre>

<hr>

<h2>Cloudinary Setup</h2>

<p>Videos and images are hosted on <a href="https://cloudinary.com" target="_blank">Cloudinary</a> for fast, adaptive delivery.</p>

<ol>
    <li>Create a free Cloudinary account.</li>
    <li>Upload your video or image.</li>
    <li>Copy the <strong>Cloud Name</strong> from the dashboard and the <strong>Public ID</strong> from the asset.</li>
    <li>Paste them into the <code>cloudinary: {}</code> block in <code>VIDEO_DATA</code>, or use <code>cldImg("public_id")</code> for images in <code>DESIGN_DATA</code>.</li>
</ol>

<p>The site uses <code>q_auto</code> and <code>f_auto</code> transforms automatically — no manual optimization needed.</p>

<hr>

<h2>Contact Form Setup (Formspree)</h2>

<ol>
    <li>Go to <a href="https://formspree.io" target="_blank">formspree.io</a> and create a free account.</li>
    <li>Create a new form and copy your <strong>Form ID</strong>.</li>
    <li>In <code>script.js</code>, find <code>submitForm()</code> and replace <code>YOUR_FORM_ID</code> with it.</li>
</ol>

<p>Submissions will be delivered directly to <code>sashanksahoo208@gmail.com</code>.</p>

<hr>

<h2>Running Locally</h2>

<p>No install, no build step.</p>

<pre><code class="language-bash"># Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Open in browser (any of these work)
open index.html
# or use VS Code Live Server
# or: python3 -m http.server 3000</code></pre>

<hr>

<h2>AI Assistance Disclosure</h2>

<p>This project is <strong>fully vibe-coded</strong> — designed and built through iterative natural-language conversation with <strong>Claude</strong> (Anthropic), <strong>Gemini</strong> (Google), and <strong>ChatGPT</strong> (OpenAI), without writing code manually from scratch. The HTML structure, CSS styling system, JavaScript CMS engine, Cloudinary integration, cross-browser responsive debugging, animation logic, and this README were all produced through AI-assisted prompting and iteration.</p>

<p>This is an intentional creative and engineering workflow choice — not a shortcut, but a method. The ideas, creative direction, content, and all final decisions are the author's own.</p>

<hr>

<h2>Author</h2>

<p>
    <strong>Sashank Sekhar Sahoo</strong><br>
    2nd Year · B.Tech Chemical Engineering · NIT Rourkela<br>
    Odisha, India · 2026
</p>

<p>
    <a href="https://x.com/SashankSek20197" target="_blank">Twitter</a> · 
    <a href="https://www.linkedin.com/in/sashank-sekhar-sahoo-968a65357/" target="_blank">LinkedIn</a> · 
    <a href="https://www.instagram.com/_sashank_99_/" target="_blank">Instagram</a> · 
    <a href="mailto:sashanksahoo208@gmail.com">sashanksahoo208@gmail.com</a>
</p>

<hr>

<p><em>&copy; 2026 Sashank Sekhar Sahoo · NIT Rourkela</em></p>