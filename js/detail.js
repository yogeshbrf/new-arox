/**
 * AROX TECH - Course Detail Interactive Controller (js/detail.js)
 * Dynamically populates hero, interactive 3-column syllabus, real-time projects,
 * student testimonials, FAQs, and application links based on URL query parameter (?course=...).
 */

(function () {
    'use strict';

    // ─── 1. URL & Course Extraction ───
    function getSelectedCourse() {
        const urlParams = new URLSearchParams(window.location.search);
        let slug = urlParams.get('course');

        if (!slug && window.location.hash) {
            // Check if hash matches card-xyz or xyz
            slug = window.location.hash.replace('#card-', '').replace('#', '');
        }

        if (!slug) {
            slug = 'full-stack-web-development';
        }

        return getCourseBySlug(slug);
    }

    // ─── 2. DOM Population Helpers ───
    function renderHero(course) {
        // Page Title & Meta
        document.title = `Arox Tech - ${course.title}`;
        const pageTitleEl = document.getElementById('page-title');
        if (pageTitleEl) pageTitleEl.innerText = `Arox Tech - ${course.title}`;

        // Hero Title & Accent
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) {
            heroTitle.innerText = course.heroAccent || course.title;
        }

        // Hero Badge
        const heroBadge = document.getElementById('hero-badge');
        if (heroBadge) {
            heroBadge.innerText = course.badge || `${course.category.toUpperCase()} PROGRAM`;
        }

        // Hero Description
        const heroDesc = document.getElementById('hero-desc');
        if (heroDesc) {
            heroDesc.innerText = course.desc;
        }

        // Hero Features (6 Highlights)
        const heroFeaturesContainer = document.getElementById('hero-features-list');
        if (heroFeaturesContainer && course.heroFeatures && course.heroFeatures.length > 0) {
            heroFeaturesContainer.innerHTML = course.heroFeatures.map(feat => `
                <div class="feat">
                    <div class="feat-check"><i class="fa-solid fa-check"></i></div>
                    <span>${feat}</span>
                </div>
            `).join('');
        }

        // Apply links
        const applyLink = document.getElementById('apply-link');
        if (applyLink) applyLink.href = `apply.html?course=${course.slug}`;

        const ctaApplyLink = document.getElementById('cta-apply-link');
        if (ctaApplyLink) ctaApplyLink.href = `apply.html?course=${course.slug}`;

        // Back to Courses Link
        const backBtn = document.getElementById('back-to-courses-btn');
        if (backBtn) {
            backBtn.href = `courses.html#card-${course.slug}`;
        }
    }

    // ─── 3. 3-Column Interactive Syllabus Engine ───
    function initInteractiveSyllabus(course) {
        const techContainer = document.getElementById('tech-stack-container');
        const curriculumContainer = document.getElementById('curriculum-container');
        const topicDetailPanel = document.getElementById('topic-detail-panel');

        if (!curriculumContainer || !topicDetailPanel) return;

        // Structured topic objects from course.topics or generated fallback
        const topics = course.topics || (course.learnItems || []).map((item, idx) => {
            const associatedTool = (course.techStack && course.techStack[idx % course.techStack.length]) || 'Technology';
            return {
                title: item,
                tool: associatedTool,
                desc: `Master ${item} through practical labs, real-world case studies, and industry-aligned training modules. Build key skills required by top engineering teams.`,
                points: [
                    `Comprehensive coverage of ${item} concepts`,
                    `Hands-on practical exercises & live demonstrations`,
                    `Industry standard design patterns & best practices`,
                    `Real-world troubleshooting & workflow integration`
                ],
                practicalLab: `Build and complete a hands-on project assignment focusing on ${item}.`
            };
        });

        // 1. Render Tools in Column 1 (Static / Sticky)
        if (techContainer && course.techStack) {
            techContainer.innerHTML = '';
            course.techStack.forEach(techName => {
                const deviconSlug = (typeof deviconMap !== 'undefined' && deviconMap[techName]) || 'chrome/chrome-original.svg';
                const badge = document.createElement('div');
                badge.className = 'tech-badge-card';
                badge.setAttribute('data-tool', techName);
                badge.innerHTML = `
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconSlug}" alt="${techName}" onerror="this.src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg'" />
                    <span>${techName}</span>
                `;
                badge.addEventListener('click', () => {
                    const topicIdx = topics.findIndex(t => t.tool.toLowerCase() === techName.toLowerCase());
                    if (topicIdx !== -1) {
                        activateTopic(topicIdx);
                        const targetItem = curriculumContainer.querySelector(`.topic-scroll-item[data-index="${topicIdx}"]`);
                        if (targetItem) {
                            targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                });
                techContainer.appendChild(badge);
            });
        }

        // 2. Render Topics in Column 2 (Scroll-driven arrival sequence)
        curriculumContainer.innerHTML = '';
        topics.forEach((topic, index) => {
            const stepNum = String(index + 1).padStart(2, '0');
            const topicItem = document.createElement('div');
            topicItem.className = 'topic-scroll-item';
            topicItem.setAttribute('data-index', index);
            topicItem.innerHTML = `
                <div class="topic-card-body">
                    <div class="topic-num-badge">${stepNum}</div>
                    <div class="topic-content-preview">
                        <h4 class="topic-title">${topic.title}</h4>
                        <span class="topic-tag"><i class="fa-solid fa-layer-group"></i> Module ${index + 1} &bull; ${topic.tool}</span>
                    </div>
                </div>
            `;

            topicItem.addEventListener('click', () => {
                activateTopic(index);
            });

            curriculumContainer.appendChild(topicItem);
        });

        let currentActiveIndex = -1;

        // Activate specific topic in Col 2, update Col 3 detail, and highlight Col 1 tool
        function activateTopic(index) {
            if (index === currentActiveIndex) return;

            const topicItems = curriculumContainer.querySelectorAll('.topic-scroll-item');
            topicItems.forEach((item, idx) => {
                if (idx === index) {
                    item.classList.add('active-topic');
                    item.classList.add('arrived');
                } else {
                    item.classList.remove('active-topic');
                }
            });

            const activeTopic = topics[index];
            if (!activeTopic) return;

            // Highlight matching tool in Col 1
            if (techContainer) {
                const toolCards = techContainer.querySelectorAll('.tech-badge-card');
                toolCards.forEach(card => {
                    const toolName = card.getAttribute('data-tool');
                    if (toolName && activeTopic.tool && toolName.toLowerCase() === activeTopic.tool.toLowerCase()) {
                        card.classList.add('active-tool');
                    } else {
                        card.classList.remove('active-tool');
                    }
                });
            }

            // Update Col 3 Detail Panel with smooth transition
            updateDetailPanel(activeTopic, index + 1, topics.length);
            currentActiveIndex = index;
        }

        function updateDetailPanel(topic, modNum, totalMods) {
            const renderHTML = `
                <div class="detail-transition-wrapper fade-out">
                    <div class="detail-header-badge">
                        <i class="fa-solid fa-sparkles"></i> Module ${modNum} of ${totalMods}
                    </div>
                    <h4 class="detail-main-title">${topic.title}</h4>
                    <p class="detail-desc">${topic.desc}</p>

                    <div class="detail-bullets-title">Key Takeaways:</div>
                    <ul class="detail-bullets-list">
                        ${topic.points.map(pt => `<li><i class="fa-solid fa-circle-check"></i> <span>${pt}</span></li>`).join('')}
                    </ul>

                    <div class="detail-lab-box">
                        <div class="detail-lab-header">
                            <i class="fa-solid fa-flask"></i> Hands-On Practical Lab
                        </div>
                        <div class="detail-lab-text">${topic.practicalLab}</div>
                    </div>
                </div>
            `;

            topicDetailPanel.innerHTML = renderHTML;
            const newWrap = topicDetailPanel.querySelector('.detail-transition-wrapper');
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (newWrap) {
                        newWrap.classList.remove('fade-out');
                        newWrap.classList.add('fade-in');
                    }
                });
            });
        }

        // Activate initial topic
        if (topics.length > 0) {
            activateTopic(0);
        }

        // 3. Scroll Observer: Topics arrive sequentially and remain in place
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -25% 0px',
            threshold: 0.15
        };

        const topicObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    const idx = parseInt(item.getAttribute('data-index'), 10);
                    item.classList.add('arrived');
                    activateTopic(idx);
                }
            });
        }, observerOptions);

        const topicItems = curriculumContainer.querySelectorAll('.topic-scroll-item');
        topicItems.forEach(item => {
            topicObserver.observe(item);
        });
    }

    // ─── 4. Real Time Projects Renderer ───
    function renderProjects(course) {
        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) return;

        const projects = course.projects || [
            {
                title: 'E-Commerce Marketplace',
                subtitle: 'Full Stack Web Platform',
                icon: 'fa-solid fa-cart-shopping',
                iconColor: '#5d4cf7',
                desc: 'End-to-end shopping platform with product filtering, dynamic cart state, Stripe checkout, and admin dashboard.',
                tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
            },
            {
                title: 'Real-Time Team Chat',
                subtitle: 'WebSocket Application',
                icon: 'fa-solid fa-comment-dots',
                iconColor: '#10b981',
                desc: 'Instant messaging platform supporting channels, direct messages, read receipts, and file attachments.',
                tags: ['Socket.io', 'Express', 'React', 'Tailwind']
            },
            {
                title: 'SaaS Billing & Analytics',
                subtitle: 'Enterprise Dashboard',
                icon: 'fa-solid fa-chart-line',
                iconColor: '#3b82f6',
                desc: 'Subscription billing dashboard with interactive charts, invoice generation, and customer management.',
                tags: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js']
            },
            {
                title: 'Interactive Portfolio Portal',
                subtitle: 'Creative Web Experience',
                icon: 'fa-solid fa-laptop-code',
                iconColor: '#f97316',
                desc: 'Dynamic interactive developer showcase featuring smooth GSAP animations, 3D elements, and contact handling.',
                tags: ['HTML5', 'GSAP', 'CSS3', 'JavaScript']
            }
        ];

        projectsContainer.innerHTML = projects.map(p => `
            <div class="project-card">
                <div class="project-card-header">
                    <div class="project-icon-wrapper" style="background: ${p.iconColor || '#5d4cf7'};">
                        <i class="${p.icon || 'fa-solid fa-code'}"></i>
                    </div>
                    <span class="project-type-tag">${p.subtitle || 'Live Project'}</span>
                </div>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-subtitle">${p.subtitle}</p>
                <p class="project-desc">${p.desc}</p>
                <div class="project-tags-list">
                    ${(p.tags || []).map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // ─── 5. Student Reviews Renderer ───
    function renderReviews(course) {
        const reviewsContainer = document.getElementById('reviews-container');
        if (!reviewsContainer) return;

        const reviews = course.reviews || [
            {
                name: 'Aravind K.',
                role: `${course.title} Trainee`,
                initials: 'AK',
                quote: 'The training gave me real-world experience and confidence to build live applications from scratch.',
                stars: 5
            },
            {
                name: 'Kaviya S.',
                role: 'Frontend Trainee',
                initials: 'KS',
                quote: 'Mentors here are super supportive and the hands-on projects helped me boost my placement skills.',
                stars: 5
            },
            {
                name: 'Vignesh R.',
                role: 'Backend Trainee',
                initials: 'VR',
                quote: 'Best training program I have ever joined. Learned a lot and improved my problem-solving skills.',
                stars: 5
            }
        ];

        reviewsContainer.innerHTML = reviews.map(r => `
            <div class="review-card">
                <i class="fa-solid fa-quote-left quote"></i>
                <p class="review-text">${r.quote}</p>
                <div style="padding-bottom:0.5rem;">
                    <p class="reviewer-name">— ${r.name}</p>
                    <p class="reviewer-role">${r.role}</p>
                    <div class="review-stars">
                        ${Array.from({ length: r.stars || 5 }).map(() => '<i class="fa-solid fa-star"></i>').join('')}
                    </div>
                </div>
                <div class="reviewer-avatar-badge">${r.initials || 'AT'}</div>
            </div>
        `).join('');
    }

    // ─── 6. FAQs Renderer ───
    function renderFaqs(course) {
        const faqContainer = document.getElementById('faq-accordion');
        if (!faqContainer) return;

        const faqs = course.faqs || [
            {
                q: `What is the duration of the ${course.title} program?`,
                a: 'The training duration typically ranges from 10 to 14 weeks (approx. 3 months) to ensure comprehensive project development and practical mastery.'
            },
            {
                q: 'Is this training program completely online?',
                a: 'Yes, our training programs are fully remote with live mentor sessions, allowing you to learn from anywhere with flexible sprint hours.'
            },
            {
                q: 'Will I get an industry-recognized certificate after completion?',
                a: 'Absolutely. Upon successful completion of all curriculum modules and project reviews, you will receive a verified certificate from AROX Tech.'
            },
            {
                q: 'What are the eligibility criteria for enrolling?',
                a: 'Basic knowledge of computing concepts is helpful. The program is ideal for college students, recent graduates, and career changers.'
            },
            {
                q: 'Do you offer job placement assistance?',
                a: 'Yes! We conduct mock technical interviews, resume and portfolio optimization, and refer our top trainees to partner engineering teams.'
            }
        ];

        faqContainer.innerHTML = faqs.map((faq, idx) => `
            <details class="faq-item" ${idx === 0 ? 'open' : ''}>
                <summary>${faq.q} <span class="toggle">+</span></summary>
                <div class="faq-answer">${faq.a}</div>
            </details>
        `).join('');
    }

    // ─── 7. Main Initializer ───
    document.addEventListener('DOMContentLoaded', () => {
        const course = getSelectedCourse();
        if (!course) return;

        renderHero(course);
        initInteractiveSyllabus(course);
        renderProjects(course);
        renderReviews(course);
        renderFaqs(course);
    });

})();
