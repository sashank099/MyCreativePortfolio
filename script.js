/* ═══════════════════════════════════════════════════════════
   PORTFOLIO CMS — EDIT ONLY THIS SECTION
   ─────────────────────────────────────────────────────────
   To add a video  → push one object to VIDEO_DATA
   To add a design → push one object to DESIGN_DATA
   To toggle a section → flip the boolean in SETTINGS
═══════════════════════════════════════════════════════════ */

const VIDEO_DATA = [
    /* ── SHORT-FORM (9:16) ── */
    {
        type:      "short",
        title:     "Reel 1",
        category:  "reel",
        subtitle:  "BRAND EDIT",
        cloudinary: {
            cloudName: "dfyoex2hk",  // from cloudinary.com dashboard
            publicId:  "reel1_xbqmfr",  // public ID of your uploaded video
        },
        thumbnail: "https://res.cloudinary.com/dfyoex2hk/image/upload/v1780597301/Reel1_ouuuo9.jpg"  // optional; auto-generated if omitted
    },
    
    {
        type:      "short",
        title:     "Reel 2",
        category:  "reel",
        subtitle:  "BRAND EDIT",
        cloudinary: {
            cloudName: "dfyoex2hk",  
            publicId:  "reel2_ylmtqs",  
        },
        thumbnail: "https://res.cloudinary.com/dfyoex2hk/image/upload/v1780597320/Reel2_perqt1.jpg"  
    },

    {
        type:      "short",
        title:     "Reel 3",
        category:  "reel",
        subtitle:  "BRAND EDIT",
        cloudinary: {
            cloudName: "dfyoex2hk",  
            publicId:  "reel3_owh05w",  
        },
        thumbnail: "https://res.cloudinary.com/dfyoex2hk/image/upload/v1780637887/Reel3_jepkk9.jpg"  
    },

    {
        type:      "long",
        title:     "Do Chehre",
        category:  "Trailer",
        subtitle:  "Visual Storytelling · Edit",
        cloudinary: {
            cloudName: "dfyoex2hk",
            publicId:  "DoChehreTrailer_t1efhe",
        },
        thumbnail: "https://res.cloudinary.com/dfyoex2hk/image/upload/v1780597305/DoChehre_fbw80y.png"
    },

    {
        type:    "narrative",
        year:    "2026 · 6:25",
        title:   "Do Chehre | Full Movie",
        desc:    "A psychological narrative exploring the two faces of trust — the one we choose to see and the one hidden beneath. Crafted through deliberate pacing, atmosphere, and emotional revelation.",
        youtube: "Mr7VzmLbHFc",   // ← add this to make the title a clickable ⇗ Watch on YouTube link
    },
    /* ── Add more short-form reels here ──
    // Option A — Cloudinary (recommended when YT has copyright issues):
    {
        type:      "short",
        title:     "Reel Title",
        category:  "Category Label",
        subtitle:  "Sub-label",
        cloudinary: {
            cloudName: "your_cloud_name",  // from cloudinary.com dashboard
            publicId:  "folder/video_id",  // public ID of your uploaded video
        },
        thumbnail: "assets/thumbnails/x.jpg"  // optional; auto-generated if omitted
    },
    // Option B — local MP4:
    {
        type:      "short",
        title:     "Reel Title",
        category:  "Category Label",
        subtitle:  "Sub-label",
        src:       "assets/videos/reel2.mp4",
        thumbnail: ""
    },
    */

    /* ── LONG-FORM (16:9) ── */
    /* Option A — Cloudinary:
    {
        type:      "long",
        title:     "Brand Film",
        category:  "Motion Sequence",
        subtitle:  "Substance Integration · Edit",
        cloudinary: {
            cloudName: "your_cloud_name",
            publicId:  "folder/video_id",
        },
        thumbnail: ""
    },
    // Option B — local MP4:
    {
        type:      "long",
        title:     "Brand Film",
        category:  "Motion Sequence",
        subtitle:  "Substance Integration · Edit",
        src:       "assets/videos/brand.mp4",
        thumbnail: ""
    },
    */

    /* ── NARRATIVE (listed — title links to YouTube, no embed) ── */
    // {
    //     type:    "narrative",
    //     year:    "2026 · 12:40",
    //     title:   "The Rourkela Chronicle",
    //     desc:    "Cinematic doc charting urban development near the NIT campus. Pacing, arc, structure — a full narrative cut.",
    //     youtube: "YOUR_VIDEO_ID",   // ← add this to make the title a clickable ⇗ Watch on YouTube link
    // },
    // {
    //     type:    "narrative",
    //     year:    "2025 · 08:15",
    //     title:   "Chemical Fluid Dynamics (Visualized)",
    //     desc:    "Translating transport phenomena equations into fluid visual graphics. Where ChemE meets motion design.",
    //     youtube: "YOUR_VIDEO_ID",
    // }
];

/* ─────────────────────────────────────────────────────────
   DESIGN_DATA  — add real images as you go
   featured: true  → shows in the big spotlight above the grid
   featured: false → shows in the masonry grid below
─────────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────
   CLOUDINARY IMAGE HELPER
   Build a Cloudinary image URL from cloudName + publicId.
   q_auto → best quality/size balance
   f_auto → serves WebP/AVIF to browsers that support it
─────────────────────────────────────────────────────────── */
const CLD_NAME = "dfyoex2hk"; // ← your Cloudinary cloud name (same for images + videos)

function cldImg(publicId) {
    return `https://res.cloudinary.com/${CLD_NAME}/image/upload/q_auto,f_auto/${publicId}`;
}

const DESIGN_DATA = [
    {
        featured:  false,
        title:     "Metropolis 2026",
        category:  "poster",
        image:     cldImg("Instagram_post_-_1_yy2qzi"),  // ← replace with your Cloudinary image public ID
        chip:      "Poster Artwork",
        desc:      "Editorial poster design exploring urban rhythm and architectural tension. Built in Photoshop — kinetic composition with typographic precision.",
        year:      "2026",
        tool:      "Adobe Photoshop",
        dims:      "1080 × 1350"
    },
    /* ── Add more design items below ──
    {
        featured:  false,
        title:     "Story Template Series",
        category:  "social",
        image:     cldImg("designs/story_template"),  // ← use cldImg() for all images
        chip:      "Instagram Story",
        ratio:     "4:5"
    },
    {
        featured:  false,
        title:     "Kinetic Thumbnail Series",
        category:  "motion",
        image:     cldImg("designs/thumbnail_series"),
        chip:      "Thumbnail",
        ratio:     "16:9"
    },
    */
];

const SETTINGS = {
    showAbout:    true,
    showToolkit:  true,
    showVideo:    true,
    showDesign:   true,
    showImpact:   false,
    showFeedback: true,   // ← show/hide the entire feedback section
    showContact:  true
};

/* ═══════════════════════════════════════════════════════════
   END OF CMS — DO NOT EDIT BELOW THIS LINE
═══════════════════════════════════════════════════════════ */


/* ─── APPLY SETTINGS — hide sections + sync nav ─────────── */
(function applySettings() {
    const map = {
        showAbout:    { id: 'about',    label: 'About' },
        showToolkit:  { id: 'toolkit',  label: 'Toolkit' },
        showVideo:    { id: 'video',    label: 'Video' },
        showDesign:   { id: 'design',   label: 'Design' },
        showImpact:   { id: 'impact',   label: 'Impact' },
        showFeedback: { id: 'feedback', label: 'Feedback' },
        showContact:  { id: 'inquire',  label: 'Inquire' }
    };

    // Remove hidden sections from DOM
    Object.entries(map).forEach(([key, cfg]) => {
        if (!SETTINGS[key]) {
            const el = document.getElementById(cfg.id);
            if (el) el.remove();
        }
    });

    // Build desktop nav dynamically — only visible sections appear
    const nav = document.getElementById('main-nav');
    if (nav) {
        nav.innerHTML = Object.entries(map)
            .filter(([key]) => SETTINGS[key])
            .map(([, cfg]) =>
                `<a href="#${cfg.id}" class="hover-me">${cfg.label}</a>`
            ).join('');
    }

    // Build mobile drawer nav — same links
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.innerHTML = Object.entries(map)
            .filter(([key]) => SETTINGS[key])
            .map(([, cfg]) =>
                `<a href="#${cfg.id}">${cfg.label}</a>`
            ).join('');
    }
})();


/* ─── MOBILE DRAWER LOGIC ────────────────────────────────── */
(function initMobileDrawer() {
    const btn      = document.getElementById('mobile-menu-btn');
    const drawer   = document.getElementById('mobile-drawer');
    const overlay  = document.getElementById('mobile-drawer-overlay');
    const closeBtn = document.getElementById('mobile-drawer-close');
    if (!btn || !drawer || !overlay) return;

    function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('open');
        btn.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        btn.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', () => {
        drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });
    overlay.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    // Close drawer when a nav link is tapped
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }
    // Also close CTA inside drawer footer
    const drawerCta = document.querySelector('.mobile-drawer-cta');
    if (drawerCta) drawerCta.addEventListener('click', closeDrawer);
})();


/* ─── CLOUDINARY VIDEO EMBED BUILDER ────────────────────── */
/**
 * Builds a lazy-play Cloudinary embed that matches the YT lazy-play UX.
 *
 * VIDEO_DATA entry fields:
 *   cloudinary: {
 *     cloudName: "your_cloud_name",   // e.g. "sashank99"
 *     publicId:  "folder/video_id",   // public ID of the uploaded video
 *   }
 *   thumbnail:  "assets/thumbnails/x.jpg"  // optional; auto-generated if absent
 */
function buildCloudinaryEmbed(v) {
    const { cloudName, publicId } = v.cloudinary;

    // Auto-generate a Cloudinary thumbnail if none is supplied
    const thumb = v.thumbnail
        ? v.thumbnail
        : `https://res.cloudinary.com/${cloudName}/video/upload/so_0,f_jpg,q_auto,w_640/${publicId}.jpg`;

    // Direct MP4 URL — no embed restrictions, no copyright blocks
    const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/q_auto/${publicId}`;

    return `
        <div class="cld-lazy"
             data-cld-url="${videoUrl}"
             data-cld-poster="${thumb}"
             style="position:absolute;inset:0;width:100%;height:100%;cursor:none;">
            <img src="${thumb}"
                 alt="${v.title}" loading="lazy"
                 style="width:100%;height:100%;object-fit:cover;display:block;" />
            <div class="yt-play-btn" aria-label="Play video">
                <svg viewBox="0 0 68 48" width="60" height="42">
                    <rect width="68" height="48" rx="12" fill="rgba(0,0,0,.72)"/>
                    <path d="M27 34l18-10-18-10v20z" fill="#fff"/>
                </svg>
            </div>
        </div>`;
}

/* ─── VIDEO RENDERER ────────────────────────────────────── */
function renderVideos() {
    const shortContainer     = document.getElementById('short-video-container');
    const longContainer      = document.getElementById('long-video-container');
    const narrativeContainer = document.getElementById('narrative-container');
    const shortSection       = document.getElementById('short-form-section');
    const longSection        = document.getElementById('long-form-section');
    const narrativeSection   = document.getElementById('narrative-section');

    if (!shortContainer) return;

    const shorts     = VIDEO_DATA.filter(v => v.type === 'short');
    const longs      = VIDEO_DATA.filter(v => v.type === 'long');
    const narratives = VIDEO_DATA.filter(v => v.type === 'narrative');

    /* ── Short-form cards ── */
    if (shorts.length === 0) {
        if (shortSection) shortSection.style.display = 'none';
    } else {
        shorts.forEach((v, i) => {
            const delay = i < 4 ? ` reveal-delay-${i}` : '';
            const mediaEmbed = v.cloudinary
                ? buildCloudinaryEmbed(v)
                : v.youtube
                ? `<div class="yt-lazy" data-ytid="${v.youtube}" style="position:absolute;inset:0;width:100%;height:100%;cursor:none;">
                        <img src="${v.thumbnail || `https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg`}"
                             alt="${v.title}" loading="lazy"
                             style="width:100%;height:100%;object-fit:cover;display:block;" />
                        <div class="yt-play-btn" aria-label="Play video">
                            <svg viewBox="0 0 68 48" width="60" height="42"><path d="M66.5 7.7a8.5 8.5 0 00-6-6C56 0 34 0 34 0S12 0 7.5 1.7a8.5 8.5 0 00-6 6C0 12.3 0 24 0 24s0 11.7 1.5 16.3a8.5 8.5 0 006 6C12 48 34 48 34 48s22 0 26.5-1.7a8.5 8.5 0 006-6C68 35.7 68 24 68 24s0-11.7-1.5-16.3z" fill="#ff0000"/><path d="M27 34l18-10-18-10v20z" fill="#fff"/></svg>
                        </div>
                   </div>`
                : `<video
                        src="${v.src}"
                        ${v.thumbnail ? `poster="${v.thumbnail}"` : ''}
                        controls preload="metadata" playsinline
                        style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"
                   ></video>`;
            shortContainer.innerHTML += `
            <div class="video-card reveal${delay} hover-me">
                <div class="video-placeholder" style="aspect-ratio:9/16;">
                    ${mediaEmbed}
                </div>
                <div class="video-info">
                    <span class="video-tag">${v.category}</span>
                    <p class="video-title" style="margin-top:6px;">${v.title}</p>
                    <p style="font-size:11px; color:var(--dim); margin-top:4px;">${v.subtitle}</p>
                </div>
            </div>`;
        });
    }

    /* ── Long-form cards ── */
    if (longs.length === 0) {
        if (longSection) longSection.style.display = 'none';
    } else {
        longs.forEach((v, i) => {
            const delay = i < 3 ? ` reveal-delay-${i + 1}` : '';
            const mediaEmbed = v.cloudinary
                ? buildCloudinaryEmbed(v)
                : v.youtube
                ? `<div class="yt-lazy" data-ytid="${v.youtube}" style="position:absolute;inset:0;width:100%;height:100%;cursor:none;">
                        <img src="${v.thumbnail || `https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg`}"
                             alt="${v.title}" loading="lazy"
                             style="width:100%;height:100%;object-fit:cover;display:block;" />
                        <div class="yt-play-btn" aria-label="Play video">
                            <svg viewBox="0 0 68 48" width="60" height="42"><path d="M66.5 7.7a8.5 8.5 0 00-6-6C56 0 34 0 34 0S12 0 7.5 1.7a8.5 8.5 0 00-6 6C0 12.3 0 24 0 24s0 11.7 1.5 16.3a8.5 8.5 0 006 6C12 48 34 48 34 48s22 0 26.5-1.7a8.5 8.5 0 006-6C68 35.7 68 24 68 24s0-11.7-1.5-16.3z" fill="#ff0000"/><path d="M27 34l18-10-18-10v20z" fill="#fff"/></svg>
                        </div>
                   </div>`
                : `<video
                        src="${v.src}"
                        ${v.thumbnail ? `poster="${v.thumbnail}"` : ''}
                        controls preload="metadata" playsinline
                        style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"
                   ></video>`;
            longContainer.innerHTML += `
            <div class="video-card reveal${delay} hover-me">
                <div class="video-placeholder" style="aspect-ratio:16/9;">
                    ${mediaEmbed}
                </div>
                <div class="video-info">
                    <span class="video-tag">${v.category}</span>
                    <p class="video-title" style="margin-top:6px;">${v.title}</p>
                    <p style="font-size:11px; color:var(--dim); margin-top:4px;">${v.subtitle}</p>
                </div>
            </div>`;
        });
    }

    /* ── Narrative list ── */
    if (narratives.length === 0) {
        if (narrativeSection) narrativeSection.style.display = 'none';
    } else {
        narratives.forEach((v, i) => {
            const delay = i < 3 ? ` reveal-delay-${i}` : '';
            // If a youtube ID is supplied, wrap the title in a link that opens YT in a new tab
            const titleHtml = v.youtube
                ? `<a href="https://www.youtube.com/watch?v=${v.youtube}"
                      target="_blank" rel="noopener noreferrer"
                      class="narrative-yt-link hover-me">${v.title} <span class="narrative-yt-badge">↗ Watch on YouTube</span></a>`
                : v.title;
            narrativeContainer.innerHTML += `
            <div class="timeline-item hover-me reveal${delay}">
                <div class="timeline-year">${v.year}</div>
                <div>
                    <h4 class="timeline-title">${titleHtml}</h4>
                    <p class="timeline-desc">${v.desc}</p>
                </div>
            </div>`;
        });
    }

    /* Re-apply hover-me cursor listeners after injection */
    initHoverListeners();

    /* ── Lazy YouTube: click thumbnail → swap in iframe ── */
    document.querySelectorAll('.yt-lazy').forEach(el => {
        el.addEventListener('click', function () {
            const id = this.dataset.ytid;
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
            this.replaceWith(iframe);
        });
    });

    /* ── Lazy Cloudinary: click thumbnail → swap in <video> ── */
    document.querySelectorAll('.cld-lazy').forEach(el => {
        el.addEventListener('click', function () {
            const video = document.createElement('video');
            video.src         = this.dataset.cldUrl;
            video.poster      = this.dataset.cldPoster;
            video.autoplay    = true;
            video.playsInline = true;
            video.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000;';

            // Hide native controls until the full duration is known.
            // Cloudinary streams progressively, so the browser reports a
            // partial/buffered duration at first — causing "0:03 / 0:05"
            // then "0:05 / 0:08" as more data arrives.
            // We show controls only once duration settles to a finite value.
            video.controls = false;

            const onDuration = () => {
                if (isFinite(video.duration) && video.duration > 0) {
                    video.controls = true;
                    video.removeEventListener('durationchange', onDuration);
                }
            };
            video.addEventListener('durationchange', onDuration);

            this.replaceWith(video);
            video.play().catch(() => {});
        });
    });
}


/* ─── VIDEO LAZY PLAY BUTTON STYLES (YouTube + Cloudinary) ────────── */
(function injectYTStyles() {
    const s = document.createElement('style');
    s.textContent = `
        .yt-lazy, .cld-lazy { position: relative; overflow: hidden; }
        .yt-lazy img, .cld-lazy img { transition: transform .4s ease; }
        .yt-lazy:hover img, .cld-lazy:hover img { transform: scale(1.04); }
        .yt-play-btn {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
        }
        .yt-play-btn svg {
            filter: drop-shadow(0 2px 12px rgba(0,0,0,.7));
            transition: transform .2s ease, opacity .2s ease;
            opacity: .92;
        }
        .yt-lazy:hover .yt-play-btn svg,
        .cld-lazy:hover .yt-play-btn svg {
            transform: scale(1.12);
            opacity: 1;
        }

        /* Narrative YouTube link */
        .narrative-yt-link {
            color: inherit;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: color .2s ease;
        }
        .narrative-yt-link:hover {
            color: var(--accent, #c8ff00);
        }
        .narrative-yt-badge {
            font-family: 'DM Mono', monospace;
            font-size: 9px;
            letter-spacing: .2em;
            text-transform: uppercase;
            color: var(--accent, #c8ff00);
            border: 1px solid var(--accent, #c8ff00);
            padding: 3px 8px;
            border-radius: 2px;
            opacity: 0;
            transform: translateX(-6px);
            transition: opacity .2s ease, transform .2s ease;
            white-space: nowrap;
        }
        .narrative-yt-link:hover .narrative-yt-badge {
            opacity: 1;
            transform: translateX(0);
        }
    `;
    document.head.appendChild(s);
})();


/* ─── GALLERY RENDERER ──────────────────────────────────── */
function renderGallery() {
    const featuredWrap = document.getElementById('dg-featured-wrap');
    const grid         = document.getElementById('dg-grid');
    const filtersEl    = document.getElementById('dg-filters');
    const countEl      = document.getElementById('dg-count');

    if (!grid || !DESIGN_DATA.length) return;

    /* ── Build category filter tabs ── */
    const cats = ['all', ...new Set(
        DESIGN_DATA.filter(d => !d.featured).map(d => d.category)
    )];
    filtersEl.innerHTML = cats.map((c, i) => `
        <button class="dg-filter${i === 0 ? ' active' : ''} hover-me"
                data-filter="${c}"
                role="tab">${c.charAt(0).toUpperCase() + c.slice(1)}</button>
    `).join('');

    /* ── Featured spotlight ── */
    const featured = DESIGN_DATA.find(d => d.featured);
    if (featured && featuredWrap) {
        const hasImg = featured.image && featured.image.length > 0;
        featuredWrap.innerHTML = `
        <div class="dg-featured reveal reveal-delay-1 hover-me" data-cat="${featured.category}">
            <div class="dg-featured-img">
                ${hasImg
                    ? `<img src="${featured.image}" alt="${featured.title}" class="lightbox-trigger" data-title="${featured.title}">`
                    : `<div style="width:100%;height:100%;background:var(--surface2);display:flex;align-items:center;justify-content:center;">
                           <span style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.25em;color:var(--muted);text-transform:uppercase;">Image Coming Soon</span>
                       </div>`
                }
                <div class="dg-featured-shimmer"></div>
            </div>
            <div class="dg-featured-info">
                <div>
                    <span class="dg-chip">${featured.chip || featured.category}</span>
                    <h3 class="dg-feat-title">${featured.title}</h3>
                    <p class="dg-feat-desc">${featured.desc || ''}</p>
                </div>
                <div class="dg-feat-meta">
                    <span>${featured.year || ''}</span>
                    ${featured.year ? '<span>·</span>' : ''}
                    <span>${featured.tool || ''}</span>
                    ${featured.tool ? '<span>·</span>' : ''}
                    <span>${featured.dims || ''}</span>
                </div>
            </div>
        </div>`;
    }

    /* ── Grid items ── */
    /* Aspect-ratio shapes cycle for visual variety */
    const shapes = [
        { cls: 'dg-card--portrait',  style: 'grid-column:span 4; aspect-ratio:4/5;'   },
        { cls: 'dg-card--landscape', style: 'grid-column:span 8; aspect-ratio:16/9;'  },
        { cls: 'dg-card--square',    style: 'grid-column:span 4; aspect-ratio:1/1;'   },
        { cls: 'dg-card--vertical',  style: 'grid-column:span 3; aspect-ratio:9/16;'  },
        { cls: 'dg-card--wide',      style: 'grid-column:span 9; aspect-ratio:21/9;'  },
        { cls: 'dg-card--square',    style: 'grid-column:span 5; aspect-ratio:5/4;'   },
    ];

    const gridItems = DESIGN_DATA.filter(d => !d.featured);
    let visible = featured ? 1 : 0;

    gridItems.forEach((item, i) => {
        const shape = shapes[i % shapes.length];
        const hasImg = item.image && item.image.length > 0;
        const delayClass = i < 3 ? ` reveal-delay-${i + 1}` : '';
        visible++;

        grid.innerHTML += `
        <div class="dg-card ${shape.cls} reveal${delayClass} hover-me${hasImg ? ' lightbox-card' : ''}"
             data-cat="${item.category}"
             data-img="${hasImg ? item.image : ''}"
             data-title="${item.title}"
             style="${shape.style}${hasImg ? 'cursor:zoom-in;' : ''}">
            <div class="dg-card-inner">
                ${hasImg
                    ? `<img src="${item.image}"
                            alt="${item.title}"
                            style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">`
                    : `<div style="position:absolute;inset:0;background:var(--surface2);"></div>`
                }
                <div class="dg-card-glass">
                    <span class="dg-chip">${item.chip || item.category}</span>
                    ${!hasImg ? `<p class="dg-soon">Dropping Soon</p>` : ''}
                </div>
            </div>
            <div class="dg-card-foot">
                <span class="dg-card-title">${item.title}</span>
                <span class="dg-card-ratio">${item.ratio || ''}</span>
            </div>
        </div>`;
    });

    if (countEl) countEl.textContent = visible + (visible === 1 ? ' work' : ' works');

    /* ── Wire up filter tabs ── */
    initGalleryFilters();
    /* ── Wire up lightbox triggers ── */
    initLightbox();
    /* ── Re-apply hover-me listeners ── */
    initHoverListeners();
}


/* ─── GALLERY FILTER TABS ───────────────────────────────── */
function initGalleryFilters() {
    const filters  = document.querySelectorAll('.dg-filter');
    const cards    = document.querySelectorAll('#dg-grid .dg-card');
    const featured = document.querySelector('.dg-featured');
    const countEl  = document.getElementById('dg-count');

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const f = btn.dataset.filter;
            let visible = 0;

            if (featured) {
                const fCat = featured.dataset.cat || '';
                const show = f === 'all' || f === fCat;
                featured.style.display = show ? '' : 'none';
                if (show) visible++;
            }

            cards.forEach(card => {
                const cat  = card.dataset.cat || '';
                const show = f === 'all' || cat === f;
                card.classList.toggle('dg-hidden', !show);
                if (show) visible++;
            });

            if (countEl) countEl.textContent = visible + (visible === 1 ? ' work' : ' works');
        });
    });
}


/* ─── LIGHTBOX ──────────────────────────────────────────── */
function initLightbox() {
    const lb      = document.getElementById('lightbox');
    const lbImg   = document.getElementById('lightbox-img');
    const lbCap   = document.getElementById('lightbox-caption');
    const lbClose = document.getElementById('lightbox-close');

    if (!lb) return;

    // Cards in the masonry grid are the click target (the glass overlay
    // has pointer-events:none so the whole card face is clickable).
    // Featured image keeps its own .lightbox-trigger on the <img>.
    document.querySelectorAll('.lightbox-card').forEach(card => {
        card.addEventListener('click', () => {
            const src   = card.dataset.img;
            const title = card.dataset.title || '';
            if (!src) return;                       // "dropping soon" cards — ignore
            lbImg.src         = src;
            lbCap.textContent = title;
            lb.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    // Featured spotlight image still uses .lightbox-trigger on the <img>
    document.querySelectorAll('.dg-featured .lightbox-trigger').forEach(img => {
        img.addEventListener('click', () => {
            lbImg.src         = img.src;
            lbCap.textContent = img.dataset.title || '';
            lb.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeLb() {
        lb.classList.remove('open');
        document.body.style.overflow = '';
        lbImg.src = '';
    }

    lbClose.addEventListener('click', closeLb);
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
}


/* ─── HOVER LISTENER (cursor effect) ────────────────────── */
function initHoverListeners() {
    document.querySelectorAll('.hover-me, a, button, input, textarea').forEach(el => {
        if (el._hoverBound) return;
        el._hoverBound = true;
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}


/* ─── LOADER ─────────────────────────────────────────────── */
(function () {
    const canvas = document.getElementById('loader-canvas');
    const ctx    = canvas.getContext('2d');
    const fill   = document.getElementById('loader-fill');
    const pct    = document.getElementById('loader-pct');
    const loader = document.getElementById('loader');

    let W, H, particles = [], animId, done = false;

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(true); }
        reset(init) {
            this.x        = Math.random() * W;
            this.y        = init ? Math.random() * H : H + 10;
            this.r        = Math.random() * 1.5 + .4;
            this.vx       = (Math.random() - .5) * .3;
            this.vy       = -(Math.random() * .6 + .2);
            this.alpha    = 0;
            this.maxAlpha = Math.random() * .6 + .1;
            this.life     = 0;
            this.maxLife  = Math.random() * 300 + 150;
        }
        update() {
            this.x    += this.vx;
            this.y    += this.vy;
            this.life += 1;
            const t    = this.life / this.maxLife;
            this.alpha = t < .2  ? (t / .2) * this.maxAlpha
                       : t > .8  ? ((1 - t) / .2) * this.maxAlpha
                       : this.maxAlpha;
            if (this.life >= this.maxLife) this.reset(false);
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = '#C8FF00';
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    function drawGrid() {
        ctx.save();
        ctx.strokeStyle = 'rgba(255,255,255,.025)';
        ctx.lineWidth   = 1;
        const spacing   = 60;
        for (let x = 0; x < W; x += spacing) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
        }
        for (let y = 0; y < H; y += spacing) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
        }
        ctx.restore();
    }

    let lineT = 0;
    function drawLines() {
        lineT += .005;
        ctx.save();
        for (let i = 0; i < 4; i++) {
            const yBase = H * (.2 + i * .2);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200,255,0,${.015 + i * .008})`;
            ctx.lineWidth   = 1;
            for (let x = 0; x <= W; x += 4) {
                const y = yBase + Math.sin(x * .004 + lineT + i) * 40;
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
        ctx.restore();
    }

    function frame() {
        if (done) return;
        ctx.fillStyle = 'rgba(0,0,0,.15)';
        ctx.fillRect(0, 0, W, H);
        drawGrid();
        drawLines();
        particles.forEach(p => { p.update(); p.draw(); });
        animId = requestAnimationFrame(frame);
    }
    frame();

    let prog = 0;
    const interval = setInterval(() => {
        prog += Math.random() * 4 + 1;
        if (prog >= 100) {
            prog = 100;
            clearInterval(interval);
            setTimeout(exitLoader, 400);
        }
        fill.style.width = prog + '%';
        pct.textContent  = Math.floor(prog) + '%';
    }, 40);

    function exitLoader() {
        done = true;
        cancelAnimationFrame(animId);
        loader.classList.add('exit');
        setTimeout(() => {
            loader.style.display         = 'none';
            document.body.style.overflow = '';
            triggerReveals();
        }, 900);
    }

    document.body.style.overflow = 'hidden';
})();


/* ─── CUSTOM CURSOR ─────────────────────────────────────── */
(function () {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    let visible = true;

    function showCursor() {
        if (!visible) {
            visible = true;
            dot.style.opacity  = '';
            ring.style.opacity = '';
        }
    }

    function hideCursor() {
        if (visible) {
            visible = false;
            dot.style.opacity  = '0';
            ring.style.opacity = '0';
        }
    }

    /* Track mouse position on the page */
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top  = my + 'px';
        showCursor();
    });

    /* Hide cursor when leaving the browser window / switching tabs */
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

    /* Fix: iframes swallow mousemove events, causing cursor to freeze.
       Overlay a transparent div on each iframe while NOT interacting,
       and remove it only on click so the video still works. */
    function fixIframeCursors() {
        document.querySelectorAll('iframe').forEach(iframe => {
            if (iframe._cursorFixed) return;
            iframe._cursorFixed = true;

            const wrap = iframe.parentElement;
            if (wrap) wrap.style.position = 'relative';

            /* Transparent overlay that intercepts mouse — sits on top of iframe */
            const shield = document.createElement('div');
            shield.style.cssText = [
                'position:absolute',
                'inset:0',
                'z-index:10',
                'cursor:none',
                'background:transparent'
            ].join(';');

            /* Track cursor through the shield */
            shield.addEventListener('mousemove', e => {
                mx = e.clientX; my = e.clientY;
                dot.style.left = mx + 'px';
                dot.style.top  = my + 'px';
                showCursor();
            });

            shield.addEventListener('mouseleave', () => {
                showCursor();
            });

            /* On click: remove shield so iframe gets the click (play/pause etc.)
               Then restore shield after a short delay */
            shield.addEventListener('click', () => {
                shield.style.pointerEvents = 'none';
                setTimeout(() => { shield.style.pointerEvents = ''; }, 2500);
            });

            if (wrap) wrap.appendChild(shield);
        });
    }

    /* Run once now and re-run after videos are rendered */
    fixIframeCursors();
    const origRender = window.renderVideos;
    if (typeof origRender === 'function') {
        window.renderVideos = function () {
            origRender.apply(this, arguments);
            setTimeout(fixIframeCursors, 100);
        };
    }
    /* Also watch for dynamically added iframes */
    const iframeObserver = new MutationObserver(() => fixIframeCursors());
    iframeObserver.observe(document.body, { childList: true, subtree: true });

    /* Animation loop for the trailing ring */
    (function loop() {
        rx += (mx - rx) * .12;
        ry += (my - ry) * .12;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
        requestAnimationFrame(loop);
    })();

    initHoverListeners();
})();


/* ─── SCROLL REVEAL ─────────────────────────────────────── */
function triggerReveals() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: .08 });

    els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('visible');
        else obs.observe(el);
    });
}


/* ─── ABOUT CANVAS — molecular/floating nodes ────────── */
(function () {
    const canvas = document.getElementById('about-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        W = canvas.width  = rect.width;
        H = canvas.height = rect.height;
    }
    resize();

    const nodes = [];
    for (let i = 0; i < 18; i++) {
        nodes.push({
            x:  Math.random() * W,
            y:  Math.random() * H,
            vx: (Math.random() - .5) * .3,
            vy: (Math.random() - .5) * .3,
            r:  Math.random() * 3 + 1
        });
    }

    function tick() {
        ctx.clearRect(0, 0, W, H);

        nodes.forEach((a, i) => {
            nodes.slice(i + 1).forEach(b => {
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d < 120) {
                    ctx.save();
                    ctx.globalAlpha = (1 - d / 120) * .15;
                    ctx.strokeStyle = '#C8FF00';
                    ctx.lineWidth   = .5;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                    ctx.restore();
                }
            });
        });

        nodes.forEach(n => {
            n.x += n.vx; n.y += n.vy;
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;
            ctx.save();
            ctx.globalAlpha = .35;
            ctx.fillStyle   = '#C8FF00';
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });

        requestAnimationFrame(tick);
    }
    tick();

    window.addEventListener('resize', resize);
})();


/* ─── RETENTION CHART ───────────────────────────────────── */
window.addEventListener('load', () => {
    const chartEl = document.getElementById('retentionChart');
    if (!chartEl) return;
    new Chart(chartEl.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['0s', '5s', '15s', '30s', '45s', '60s'],
            datasets: [
                {
                    label: 'Generic Edit',
                    data: [100, 52, 45, 41, 38, 30],
                    borderColor: '#333',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    tension: .4
                },
                {
                    label: 'Sashank Retention-Optimized',
                    data: [100, 90, 83, 80, 76, 72],
                    borderColor: '#C8FF00',
                    backgroundColor: 'rgba(200,255,0,.05)',
                    borderWidth: 2.5,
                    pointBackgroundColor: '#C8FF00',
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    tension: .4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true, position: 'bottom',
                    labels: { color: '#8E8E93', font: { family: 'DM Mono', size: 10 }, padding: 16 }
                },
                tooltip: {
                    backgroundColor: '#0F0F0F', titleColor: '#fff',
                    bodyColor: '#fff', borderColor: '#222', borderWidth: 1, cornerRadius: 4
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,.03)' },
                    ticks: { color: '#555', font: { family: 'DM Mono', size: 10 } }
                },
                y: {
                    min: 0, max: 100,
                    grid: { color: 'rgba(255,255,255,.03)' },
                    ticks: { color: '#555', font: { family: 'DM Mono', size: 10 }, callback: v => v + '%' }
                }
            }
        }
    });
});


/* ─── CONTACT FORM (Formspree) ──────────────────────────────
   HOW TO ACTIVATE REAL EMAIL DELIVERY:
   1. Go to https://formspree.io  →  sign up (free)
   2. Click "New Form" → name it "Portfolio Inquiry"
   3. Copy the Form ID from the URL (looks like: xyzabcde)
   4. Paste it into FORMSPREE_ID below — that's it.
   Every submission will land in sashanksahoo208@gmail.com
─────────────────────────────────────────────────────────── */
const FORMSPREE_ID = 'meewqvwo'; // ← replace this once with your ID

async function submitForm() {
    const nameEl  = document.getElementById('f-name');
    const emailEl = document.getElementById('f-email');
    const msgEl   = document.getElementById('f-msg');
    const btn     = document.getElementById('submit-btn');
    const success = document.getElementById('form-success');
    const error   = document.getElementById('form-error');

    const name  = nameEl.value.trim().slice(0, 100);
    const email = emailEl.value.trim().slice(0, 254);
    const msg   = msgEl.value.trim().slice(0, 5000);

    /* Basic validation */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !msg || !emailRegex.test(email)) {
        [nameEl, emailEl, msgEl].forEach(el => {
            if (!el.value.trim()) el.style.borderColor = 'rgba(255,80,80,.6)';
        });
        if (!emailRegex.test(email)) emailEl.style.borderColor = 'rgba(255,80,80,.6)';
        setTimeout(() => {
            [nameEl, emailEl, msgEl].forEach(el => el.style.borderColor = '');
        }, 2000);
        return;
    }

    /* Loading state */
    btn.textContent  = 'Sending…';
    btn.disabled     = true;
    btn.style.opacity = '.6';
    success.style.display = 'none';
    error.style.display   = 'none';

    try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body:    JSON.stringify({ name, email, message: msg })
        });

        if (res.ok) {
            /* ── Success ── */
            success.style.display = 'block';
            nameEl.value  = '';
            emailEl.value = '';
            msgEl.value   = '';
            setTimeout(() => { success.style.display = 'none'; }, 6000);
        } else {
            throw new Error('Non-OK response');
        }
    } catch (err) {
        /* ── Error fallback ── */
        error.style.display = 'block';
        setTimeout(() => { error.style.display = 'none'; }, 8000);
    } finally {
        btn.textContent   = 'Send Inquiry →';
        btn.disabled      = false;
        btn.style.opacity = '1';
    }
}


/* ─── NAV SHRINK ON SCROLL ──────────────────────────────── */
window.addEventListener('scroll', () => {
    const isMobile = window.innerWidth <= 768;
    const nav = document.getElementById('nav');
    if (isMobile) {
        nav.style.padding = window.scrollY > 60 ? '12px 20px' : '16px 20px';
    } else {
        nav.style.padding = window.scrollY > 60 ? '14px 48px' : '24px 48px';
    }
});


/* ─── BOOT — render everything once DOM is ready ────────── */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        renderVideos();
        renderGallery();
    });
} else {
    renderVideos();
    renderGallery();
}


/* ═══════════════════════════════════════════════════════════
   FEEDBACK SYSTEM — Supabase Backend
   ─────────────────────────────────────────────────────────
   Reviews are stored in Supabase. You get an email for each
   new submission with Approve / Reject links.
═══════════════════════════════════════════════════════════ */

const SUPABASE_URL      = 'https://ecxgguahftmbnvmjbhmo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjeGdndWFoZnRtYm52bWpiaG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NjA5NDAsImV4cCI6MjA5NjEzNjk0MH0.MksCyHw4QMf-57Y1SPz7PQpe8x9FGhvqS-xFJsQL-oI';
const EDGE_FN_URL       = `${SUPABASE_URL}/functions/v1/feedback-handler`;

const RATING_LABELS = ['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'];
let selectedRating  = 0;

/* ─── Helpers ─────────────────────────────────────────── */
function escHtml(s) {
    return String(s)
        .replace(/&/g,'&amp;').replace(/</g,'&lt;')
        .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function formatDate(iso) {
    try { return new Date(iso).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }); }
    catch { return ''; }
}
function genToken() {
    return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}
function renderStarHTML(val, size) {
    const full  = Math.floor(val);
    const half  = val - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    const sz    = `font-size:${size}px;line-height:1;`;
    return '<span style="display:inline-flex;gap:2px;">' +
        Array(full).fill(`<span style="${sz}color:var(--accent);">★</span>`).join('') +
        (half ? `<span style="${sz}color:var(--accent);">½</span>` : '') +
        Array(empty).fill(`<span style="${sz}color:var(--muted);">★</span>`).join('') +
        '</span>';
}

/* ─── Token storage (localStorage — just identifies the submitter's device) */
function getMyToken(id)       { return localStorage.getItem('fb_token_' + id); }
function storeMyToken(id, tk) { localStorage.setItem('fb_token_' + id, tk); }

/* ─── Star rating widget ──────────────────────────────── */
(function initStars() {
    const stars = document.querySelectorAll('.star-btn');
    if (!stars.length) return;
    function paint(val) {
        stars.forEach(s => s.classList.toggle('star-lit', parseInt(s.dataset.val) <= val));
    }
    stars.forEach(s => {
        s.addEventListener('mouseenter', () => paint(parseInt(s.dataset.val)));
        s.addEventListener('mouseleave', () => paint(selectedRating));
        s.addEventListener('click', () => {
            selectedRating = parseInt(s.dataset.val);
            paint(selectedRating);
            const lbl = document.getElementById('rating-label');
            if (lbl) lbl.textContent = RATING_LABELS[selectedRating] || 'Rated';
        });
    });
})();

/* ─── Fetch & render approved reviews from Supabase ─────── */
async function renderFeedback() {
    if (!SETTINGS.showFeedback) return;
    const container = document.getElementById('feedback-cards-container');
    const emptyEl   = document.getElementById('feedback-empty-state');
    const summaryEl = document.getElementById('feedback-summary');
    if (!container) return;

    // Show skeleton while loading
    container.querySelectorAll('.fb-card').forEach(c => c.remove());
    const skeleton = document.createElement('div');
    skeleton.id = 'fb-skeleton';
    skeleton.style.cssText = 'padding:32px 0; text-align:center;';
    skeleton.innerHTML = '<p style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.3em;text-transform:uppercase;color:var(--muted);">Loading reviews…</p>';
    container.appendChild(skeleton);

    try {
        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/reviews?approved=eq.true&order=created_at.desc`,
            { headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` } }
        );
        const reviews = await res.json();

        // Remove skeleton
        const sk = document.getElementById('fb-skeleton');
        if (sk) sk.remove();

        if (!Array.isArray(reviews) || reviews.length === 0) {
            if (emptyEl) emptyEl.style.display = 'block';
            if (summaryEl) summaryEl.style.display = 'none';
            return;
        }

        if (emptyEl) emptyEl.style.display = 'none';
        if (summaryEl) summaryEl.style.display = 'block';

        // Summary
        const avg     = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;
        const scoreEl = document.getElementById('summary-score');
        const starsEl = document.getElementById('summary-stars');
        const countEl = document.getElementById('summary-count');
        if (scoreEl) scoreEl.textContent = avg.toFixed(1);
        if (starsEl) starsEl.innerHTML   = renderStarHTML(avg, 18);
        if (countEl) countEl.textContent = reviews.length + ' verified review' + (reviews.length !== 1 ? 's' : '');

        // Cards
        reviews.forEach((r, i) => {
            const myToken  = getMyToken(r.id);
            const canEdit  = !!myToken && myToken === r.token;
            const delay    = i < 3 ? ` reveal-delay-${i}` : '';
            const initials = r.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
            const card     = document.createElement('div');
            card.className  = `fb-card reveal${delay} hover-me`;
            card.dataset.id = r.id;
            card.innerHTML  = `
                <div class="fb-card-inner">
                    <div class="fb-card-top">
                        <div class="fb-avatar">${initials}</div>
                        <div class="fb-meta">
                            <p class="fb-name">${escHtml(r.name)}</p>
                            ${r.role ? `<p class="fb-role">${escHtml(r.role)}</p>` : ''}
                        </div>
                        <div class="fb-rating-badge">
                            ${renderStarHTML(r.rating, 12)}
                            <span class="fb-score">${r.rating}.0</span>
                        </div>
                    </div>
                    <p class="fb-text">${escHtml(r.text)}</p>
                    <div class="fb-footer">
                        <span class="fb-date">${formatDate(r.created_at)}</span>
                        ${canEdit ? `<button class="fb-edit-btn hover-me"
                            data-id="${escHtml(String(r.id))}"
                            data-token="${escHtml(String(r.token))}"
                            data-rating="${Number(r.rating)}">Edit ↗</button>` : ''}
                    </div>
                </div>`;
            container.appendChild(card);
        });

        triggerReveals();
        initHoverListeners();

        // Show scroll hint when more than 4 reviews exist
        const scrollHint = document.getElementById('fb-scroll-hint');
        if (scrollHint) {
            scrollHint.style.display = reviews.length > 4 ? 'flex' : 'none';
        }

        // Wire edit buttons via event delegation (safe — no inline onclick)
        container.querySelectorAll('.fb-edit-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                openEditModal(btn.dataset.id, btn.dataset.token, Number(btn.dataset.rating));
            });
        });

    } catch(e) {
        const sk = document.getElementById('fb-skeleton');
        if (sk) sk.innerHTML = '<p style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.3em;text-transform:uppercase;color:var(--muted);">Could not load reviews.</p>';
    }
}

/* ─── Submit new feedback ─────────────────────────────── */
async function submitFeedback() {
    const nameEl    = document.getElementById('fb-name');
    const roleEl    = document.getElementById('fb-role');
    const textEl    = document.getElementById('fb-text');
    const btn       = document.getElementById('fb-submit-btn');
    const successEl = document.getElementById('fb-success');
    const errorEl   = document.getElementById('fb-error');

    const name = nameEl.value.trim().slice(0, 100);
    const role = roleEl ? roleEl.value.trim().slice(0, 100) : '';
    const text = textEl.value.trim().slice(0, 2000);

    if (!name || !text || !selectedRating) {
        if (errorEl) { errorEl.style.display = 'block'; setTimeout(() => errorEl.style.display = 'none', 3000); }
        [nameEl, textEl].forEach(el => {
            if (!el.value.trim()) { el.style.borderColor = 'rgba(255,80,80,.6)'; setTimeout(() => el.style.borderColor = '', 2000); }
        });
        if (!selectedRating) {
            const ratingEl = document.getElementById('star-rating');
            if (ratingEl) { ratingEl.style.outline = '1px solid rgba(255,80,80,.5)'; setTimeout(() => ratingEl.style.outline = '', 2000); }
        }
        return;
    }

    btn.textContent   = 'Submitting…';
    btn.disabled      = true;
    btn.style.opacity = '.6';

    const token = genToken();

    try {
        const res = await fetch(`${EDGE_FN_URL}?action=submit`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'apikey': SUPABASE_ANON_KEY
            },
            body:    JSON.stringify({ name, role, rating: selectedRating, text, token })
        });
        const data = await res.json();

        if (data.success) {
            // Store token so this device can edit later
            storeMyToken(data.id, token);

            if (successEl) successEl.style.display = 'block';
            nameEl.value = ''; if (roleEl) roleEl.value = ''; textEl.value = '';
            selectedRating = 0;
            document.querySelectorAll('.star-btn').forEach(s => s.classList.remove('star-lit'));
            const lbl = document.getElementById('rating-label');
            if (lbl) lbl.textContent = 'Click to rate';

            setTimeout(() => { if (successEl) successEl.style.display = 'none'; }, 6000);
            renderFeedback();
        } else {
            throw new Error(data.error || 'Unknown error');
        }
    } catch(e) {
        if (errorEl) { errorEl.textContent = '✕ Something went wrong. Please try again.'; errorEl.style.display = 'block'; setTimeout(() => errorEl.style.display = 'none', 4000); }
    } finally {
        btn.textContent   = 'Submit Review →';
        btn.disabled      = false;
        btn.style.opacity = '1';
    }
}

/* ─── Edit modal (submitter only, identified by token) ── */
function openEditModal(id, token, currentRating) {
    let modal = document.getElementById('fb-edit-modal');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'fb-edit-modal';
    modal.className = 'fb-modal-overlay';

    let editRating = currentRating;

    modal.innerHTML = `
        <div class="fb-modal-box">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
                <p style="font-family:'Syne',sans-serif;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;">Edit Your Review</p>
                <button class="lightbox-close hover-me" id="edit-modal-close" style="position:static;cursor:none;">✕</button>
            </div>
            <div class="form-group">
                <label class="form-label">Rating</label>
                <div class="star-rating-row" id="edit-stars">
                    ${[1,2,3,4,5].map(v => `<button class="star-btn${v <= currentRating ? ' star-lit' : ''} hover-me" data-val="${v}">★</button>`).join('')}
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Your Feedback</label>
                <textarea class="form-input hover-me" rows="5" id="edit-text"></textarea>
            </div>
            <button class="btn-primary hover-me" id="edit-save-btn">Save Changes →</button>
            <div id="edit-error" style="display:none;background:rgba(255,80,80,.06);border:1px solid rgba(255,80,80,.25);padding:12px;border-radius:4px;margin-top:12px;font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#ff6060;text-align:center;">✕ Could not save. Please try again.</div>
        </div>`;

    document.body.appendChild(modal);

    // Close button — safe event listener, no inline onclick
    modal.querySelector('#edit-modal-close').addEventListener('click', () => modal.remove());
    // Save button — safe event listener, captures id/token from closure
    modal.querySelector('#edit-save-btn').addEventListener('click', () => saveEdit(id, token));

    // Need to fetch current text to populate textarea
    fetch(`${SUPABASE_URL}/rest/v1/reviews?id=eq.${id}&approved=eq.true&select=text`, {
        headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
    }).then(r => r.json()).then(data => {
        const ta = document.getElementById('edit-text');
        if (ta && data[0]) ta.value = data[0].text;
    });

    // Wire edit stars
    const editStars = modal.querySelectorAll('#edit-stars .star-btn');
    function paintEdit(val) { editStars.forEach(s => s.classList.toggle('star-lit', parseInt(s.dataset.val) <= val)); }
    editStars.forEach(s => {
        s.addEventListener('mouseenter', () => paintEdit(parseInt(s.dataset.val)));
        s.addEventListener('mouseleave', () => paintEdit(editRating));
        s.addEventListener('click', () => { editRating = parseInt(s.dataset.val); paintEdit(editRating); modal._editRating = editRating; });
    });
    modal._editRating = editRating;

    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    initHoverListeners();
}

async function saveEdit(id, token) {
    const modal  = document.getElementById('fb-edit-modal');
    const textEl = document.getElementById('edit-text');
    const btn    = document.getElementById('edit-save-btn');
    const errEl  = document.getElementById('edit-error');
    if (!modal || !textEl) return;

    const newText   = textEl.value.trim();
    const newRating = modal._editRating;
    if (!newText || !newRating) return;

    btn.textContent = 'Saving…'; btn.disabled = true; btn.style.opacity = '.6';

    try {
        const res = await fetch(`${EDGE_FN_URL}?action=edit`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'apikey': SUPABASE_ANON_KEY
            },
            body:    JSON.stringify({ id, token, rating: newRating, text: newText })
        });
        const data = await res.json();
        if (data.success) { modal.remove(); renderFeedback(); }
        else throw new Error(data.error);
    } catch {
        if (errEl) { errEl.style.display = 'block'; setTimeout(() => errEl.style.display = 'none', 3000); }
        btn.textContent = 'Save Changes →'; btn.disabled = false; btn.style.opacity = '1';
    }
}

/* ─── Boot ────────────────────────────────────────────── */
(function () {
    if (!SETTINGS.showFeedback) return;
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderFeedback);
    } else {
        renderFeedback();
    }
})();