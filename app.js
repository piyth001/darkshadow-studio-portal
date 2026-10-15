/* ==========================================================================
   DARKSHADOW STUDIO - portal behaviour
   Served as a classic script, not a module, because the markup relies on
   global handler functions such as onclick="smoothScrollToSection(...)".
   ========================================================================== */

// =========================================================================
// ลิงก์กลุ่ม Discord หลักของ DARKSHADOW STUDIO
// =========================================================================
const DISCORD_SERVER_INVITE_URL = 'https://discord.gg/XxXrEUKfn';

const STORAGE_KEY = 'darkshadow_studio_profiles_v4';
const THEME_STORAGE_KEY = 'darkshadow_studio_theme_v2';
const LANG_STORAGE_KEY = 'darkshadow_studio_lang_v1';

// =========================================================================
// ระบบแปลภาษา TH / EN (Bilingual Dictionary)
// =========================================================================
const I18N = {
    th: {
        nav_founders: 'ผู้ก่อตั้ง',
        nav_systems: 'ระบบงาน',
        nav_videos: 'ผลงานวิดีโอ',
        nav_maps: 'คลังแมพ Roblox',
        join_discord: 'เข้ากลุ่ม Discord',
        theme_btn: 'ธีมสีเว็บ',
        scroll_top_btn: 'เลื่อนขึ้นบนสุด',
        hero_badge_prefix: 'พอร์ทัลผู้บริหาร',
        hero_subtitle_html: 'ศูนย์บัญชาการของ <span class="text-white font-semibold">Owner</span> และ <span class="text-white font-semibold">Co-Owner</span> รวมโปรไฟล์ บทบาทหน้าที่ และ<span class="text-red-400 font-medium">ผลงานของทีมพัฒนา</span>ไว้ในที่เดียว พร้อมอัปเดตข้อมูลให้เป็นปัจจุบันอยู่เสมอ',
        owner_badge_top: 'OWNER • ผู้ก่อตั้งหลัก',
        coowner_badge_top: 'CO-OWNER • ผู้ร่วมก่อตั้ง',
        copy_name: 'คัดลอกชื่อ',
        owner_role_heading: 'ข้อมูลและหน้าที่รับผิดชอบ (OWNER ROLE)',
        coowner_role_heading: 'ข้อมูลและหน้าที่รับผิดชอบ (CO-OWNER ROLE)',
        owner_bio: 'จัดการระบบเขียนสคริปต์ (Scripting), ทำ UI, Animation และ VFX',
        coowner_bio: 'เขียนสคริปต์ (Scripting), ทำโมเดล (3D Modeling), Build Map และจัดการ Optimize ระบบ',
        skill_owner_1: 'จัดการระบบ & เขียนสคริปต์',
        skill_owner_2: 'ทำระบบ UI',
        skill_coowner_1: 'เขียนสคริปต์ (Scripting)',
        skill_coowner_2: 'ทำโมเดล (3D Model)',
        skill_coowner_4: 'จัดการ Optimize ระบบ',
        direct_links_label: 'ลิงก์เชื่อมต่อประจำตัว (Direct Links)',
        btn_discord_profile: 'โปรไฟล์ Discord',
        btn_discord_sub: 'เปิดโปรไฟล์ / แอดเพื่อน',
        btn_roblox_profile: 'โปรไฟล์ Roblox',
        scroll_down_cue: 'เลื่อนลงเพื่อดูระบบงาน ผลงานวิดีโอ และคลังแมพ Roblox',
        about_heading: 'รายละเอียดทีมพัฒนา & ขอบเขตการสร้างสรรค์',
        about_subheading_html: 'การแบ่งสายงานอย่างชัดเจนระหว่าง <span class="text-red-400 font-semibold">Owner</span> (จัดการระบบเขียนสคริปต์, ทำ UI, Animation, VFX) และ <span class="text-rose-400 font-semibold">Co-Owner</span> (เขียนสคริปต์, ทำโมเดล, Build Map, จัดการ Optimize ระบบ) เพื่อสร้างแมพคุณภาพสูงบน Roblox',
        arch_1_title: '1. ระบบ Luau Scripting',
        arch_1_desc: 'ทั้ง Owner และ Co-Owner ร่วมกันวางโครงสร้างสคริปต์ระบบเกมเพลย์, ระบบ Combat, DataStore และระบบป้องกันช่องโหว่ที่เสถียร',
        arch_2_title: '2. UI, Animation & VFX',
        arch_2_desc: 'ดูแลโดย Owner เน้นออกแบบหน้าต่าง UI ที่ลื่นไหล ท่วงท่า Animation ที่สมจริง และเอฟเฟกต์สกิล VFX สุดอลังการ',
        arch_3_title: '3. 3D Model & Build Map',
        arch_3_desc: 'ดูแลโดย Co-Owner สร้างสรรค์โมเดล 3D อาวุธ สิ่งปลูกสร้าง และจัดวางองค์ประกอบแผนที่ (Build Map) ให้มีเอกลักษณ์เฉพาะตัว',
        arch_4_title: '4. System Optimization',
        arch_4_desc: 'จัดการ Optimize ระบบและแมพโดย Co-Owner เพื่อลดอาการแลค ลดการใช้ Memory และทำให้ผู้เล่นทุกอุปกรณ์เล่นได้เฟรมเรตสูงสุด',
        video_heading_prefix: 'ผลงานวิดีโอ & ระบบเกม',
        video_subheading: 'รวบรวมผลงานระบบสคริปต์ (Scripting), การออกแบบ UI & Animation, เอฟเฟกต์สกิล VFX, การปั้น 3D Model และการสร้างแมพจากทีมพัฒนา DARKSHADOW STUDIO',
        videos_empty_title: 'ยังไม่มีคลิปวิดีโอในคลังผลงานขณะนี้ รอการอัปโหลดคลิปเร็ว ๆ นี้',
        video_media_missing: 'ยังไม่มีไฟล์คลิปวิดีโอสำหรับรายการนี้',
        vid_cat_all: 'ผลงานทั้งหมด (All Reels)',
        vid_cat_script: 'ระบบสคริปต์ (Scripting & Combat)',
        vid_cat_uivfx: 'UI, Animation & VFX (Owner)',
        vid_cat_model: '3D Model, Build Map & Optimize (Co-Owner)',
        vid_click_watch: 'คลิกเพื่อรับชมผลงาน',
        maps_heading_prefix: 'คลังผลงานแมพใน',
        maps_subheading: 'ผลงานการพัฒนาแมพและประสบการณ์บนแพลตฟอร์ม Roblox ที่ผสานระบบ Luau Scripting, UI/VFX, 3D Modeling และการทำ System Optimization เต็มรูปแบบ',
        maps_empty_title: 'ยังไม่มีรายการแมพในคลังผลงานขณะนี้',
        maps_view_roblox: 'ดูบน Roblox',
        footer_change_theme: 'เปลี่ยนสีธีมเว็บ',
        footer_join_discord: 'เข้าร่วมกลุ่ม Discord',
        footer_scroll_top: 'เลื่อนกลับขึ้นบนสุด',
        floating_theme_btn: 'เปลี่ยนธีมสีเว็บ',
        theme_modal_title: 'เลือกธีมสีประจำสตูดิโอ (12 Curated Themes)',
        theme_modal_sub: 'คลิกเลือกโทนสีที่ต้องการเพื่อปรับเปลี่ยนบรรยากาศ การ์ดโปรไฟล์ และแสงเงาทั้งหน้าเว็บทันที',
        theme_active_label: 'ธีมที่เลือกใช้งานอยู่:',
        theme_glow_label: 'แสงเรืองรอง:',
        theme_reset_btn: 'คืนค่าเป็นธีมเริ่มต้น (Crimson Shadow)',
        theme_save_close: 'บันทึกและปิดหน้าต่าง',
        modal_close_btn: 'ปิดหน้าต่างแสดงผลงาน',
        status_online: '● ออนไลน์ (Online)',
        status_idle: '● ไม่อยู่ (Idle)',
        status_dnd: '● ห้ามรบกวน (Do Not Disturb)',
        status_offline: '● ออฟไลน์ (Offline)',
        hud_viewing: 'กำลังดู',
        hud_scrolling_up: 'เลื่อนขึ้น',
        sec_founders: 'ผู้ก่อตั้ง (Owners)',
        sec_about: 'ระบบงานสตูดิโอ',
        sec_videos: 'ผลงานวิดีโอ',
        sec_maps: 'คลังแมพ Roblox',
        mode_section_title: 'โหมดแสงหน้าเว็บ (Display Appearance)',
        mode_section_sub: 'เลือกสลับโหมดมืดไซเบอร์ (Dark) หรือโหมดสว่างคริสตัล (Light) ร่วมกับสีธีมได้ทุกเฉด',
        mode_dark_label: 'Dark Cyber (มืด)',
        mode_light_label: 'Light Crystal (สว่าง)',
        toast_mode_dark: 'เปิดโหมด Dark Cyber (โหมดมืดไซเบอร์) เรียบร้อย!',
        toast_mode_light: 'เปิดโหมด Light Crystal (โหมดสว่างคริสตัล) เรียบร้อย!',
        toast_lang_changed: 'เปลี่ยนภาษาเป็น ภาษาไทย (TH) เรียบร้อยแล้ว!',
        toast_copied: 'คัดลอกชื่อ Discord เรียบร้อยแล้ว!',
        toast_sound_on: 'เปิดเสียงเอฟเฟกต์ UI แล้ว',
        toast_sound_off: 'ปิดเสียงเอฟเฟกต์ UI แล้ว'
    },
    en: {
        nav_founders: 'Founders',
        nav_systems: 'Architecture',
        nav_videos: 'Video Reels',
        nav_maps: 'Roblox Maps',
        join_discord: 'Join Discord',
        theme_btn: 'Theme',
        scroll_top_btn: 'Back to Top',
        hero_badge_prefix: 'Executive Portal',
        hero_subtitle_html: 'The command center for <span class="text-white font-semibold">Owner</span> and <span class="text-white font-semibold">Co-Owner</span> — profiles, roles, and our <span class="text-red-400 font-medium">studio work</span> in one place, always kept up to date.',
        owner_badge_top: 'OWNER • LEAD FOUNDER',
        coowner_badge_top: 'CO-OWNER • CO-FOUNDER',
        copy_name: 'Copy Tag',
        owner_role_heading: 'ROLE & RESPONSIBILITIES (OWNER ROLE)',
        coowner_role_heading: 'ROLE & RESPONSIBILITIES (CO-OWNER ROLE)',
        owner_bio: 'Core Luau Scripting, UI Design, Character Animation, and Visual Effects (VFX)',
        coowner_bio: 'Luau Scripting, 3D Modeling, Map Building, and Full System Optimization',
        skill_owner_1: 'Core Systems & Scripting',
        skill_owner_2: 'UI Architecture',
        skill_coowner_1: 'Luau Scripting',
        skill_coowner_2: '3D Modeling',
        skill_coowner_4: 'System Optimization',
        direct_links_label: 'Direct Profile Connections',
        btn_discord_profile: 'Discord Profile',
        btn_discord_sub: 'View Profile / Add Friend',
        btn_roblox_profile: 'Roblox Profile',
        scroll_down_cue: 'Scroll down to explore Architecture, Video Reels, and Roblox Maps',
        about_heading: 'Development Team & Creative Architecture',
        about_subheading_html: 'Clear specialization between <span class="text-red-400 font-semibold">Owner</span> (Scripting, UI, Animation, VFX) and <span class="text-rose-400 font-semibold">Co-Owner</span> (Scripting, 3D Modeling, Map Building, System Optimization) to deliver high-performance Roblox experiences.',
        arch_1_title: '1. Luau Scripting Core',
        arch_1_desc: 'Both Owner and Co-Owner architect gameplay frameworks, combat hitboxes, DataStore persistence, and secure anti-exploit protection.',
        arch_2_title: '2. UI, Animation & VFX',
        arch_2_desc: 'Led by the Owner, focusing on responsive UI animations, fluid combat keyframes, and high-impact particle VFX.',
        arch_3_title: '3. 3D Model & Build Map',
        arch_3_desc: 'Led by the Co-Owner, crafting custom 3D weapons, architectural assets, and immersive Roblox map environments.',
        arch_4_title: '4. System Optimization',
        arch_4_desc: 'Engineered by the Co-Owner to minimize memory usage, eliminate lag spikes, and guarantee high FPS across all devices.',
        video_heading_prefix: 'Video Showreel & Game Systems',
        video_subheading: 'Explore our collection of Luau Scripting systems, UI & Animation reels, custom VFX particles, 3D Models, and Map Builds from DARKSHADOW STUDIO.',
        videos_empty_title: 'No showcase reels published yet — clips are coming soon.',
        video_media_missing: 'No clip file available for this reel yet.',
        vid_cat_all: 'All Showreels',
        vid_cat_script: 'Scripting & Combat',
        vid_cat_uivfx: 'UI, Animation & VFX (Owner)',
        vid_cat_model: '3D Model, Map & Optimize (Co-Owner)',
        vid_click_watch: 'Click to Watch Reel',
        maps_heading_prefix: 'Official Map Archive on',
        maps_subheading: 'Roblox experiences engineered with modular Luau Scripting, custom UI/VFX, detailed 3D Modeling, and full System Optimization.',
        maps_empty_title: 'No maps published in the public archive yet',
        maps_view_roblox: 'View on Roblox',
        footer_change_theme: 'Change Theme',
        footer_join_discord: 'Join Discord Server',
        footer_scroll_top: 'Back to Top',
        floating_theme_btn: 'Studio Theme',
        theme_modal_title: 'Choose Studio Theme (12 Curated Themes)',
        theme_modal_sub: 'Select any color palette to transform cards, lighting, and atmosphere across the entire portal.',
        theme_active_label: 'Active Theme:',
        theme_glow_label: 'Glow Intensity:',
        theme_reset_btn: 'Reset to Default (Crimson Shadow)',
        theme_save_close: 'Save & Close',
        modal_close_btn: 'Close Showcase Player',
        status_online: '● Online',
        status_idle: '● Idle',
        status_dnd: '● Do Not Disturb',
        status_offline: '● Offline',
        hud_viewing: 'Viewing',
        hud_scrolling_up: 'Scrolling Up',
        sec_founders: 'Founders (Owners)',
        sec_about: 'Studio Architecture',
        sec_videos: 'Video Reels',
        sec_maps: 'Roblox Maps',
        mode_section_title: 'Display Appearance (Dark / Light)',
        mode_section_sub: 'Switch between Dark Cyber Abyss and Light Crystal Daylight across all 12 studio color palettes.',
        mode_dark_label: 'Dark Cyber',
        mode_light_label: 'Light Crystal',
        toast_mode_dark: 'Switched to Dark Cyber Mode!',
        toast_mode_light: 'Switched to Light Crystal Mode!',
        toast_lang_changed: 'Language switched to English (EN)!',
        toast_copied: 'Copied Discord tag to clipboard!',
        toast_sound_on: 'UI Sound Effects Enabled',
        toast_sound_off: 'UI Sound Effects Muted'
    }
};

const THEME_PRESETS = {
    crimson: {
        id: 'crimson',
        name: 'Crimson Shadow',
        label: 'แดงเข้มดาร์กชาโดว์ (ต้นฉบับ)',
        labelEn: 'Signature Darkshadow Crimson',
        tag: 'SIGNATURE',
        primary: '#ff1744',
        secondary: '#99001b',
        accent: '#ff6b81',
        deep: '#4a0412'
    },
    bloodmoon: {
        id: 'bloodmoon',
        name: 'Bloodmoon Ruby',
        label: 'แดงทับทิมรัตติกาล',
        labelEn: 'Midnight Bloodmoon Ruby',
        tag: 'DARK RUBY',
        primary: '#e11d48',
        secondary: '#881337',
        accent: '#fb7185',
        deep: '#4c0519'
    },
    violet: {
        id: 'violet',
        name: 'Nebula Violet',
        label: 'ม่วงเนบิวลาไซเบอร์',
        labelEn: 'Cyberpunk Nebula Violet',
        tag: 'CYBERPUNK',
        primary: '#a855f7',
        secondary: '#581c87',
        accent: '#d8b4fe',
        deep: '#2e1065'
    },
    indigo: {
        id: 'indigo',
        name: 'Phantom Indigo',
        label: 'ครามอินดิโก้ลึกลับ',
        labelEn: 'Deep Phantom Indigo',
        tag: 'PHANTOM',
        primary: '#6366f1',
        secondary: '#312e81',
        accent: '#a5b4fc',
        deep: '#1e1b4b'
    },
    cyan: {
        id: 'cyan',
        name: 'Cybernetic Cyan',
        label: 'ฟ้าไซเบอร์เทคโนโลยี',
        labelEn: 'Sci-Fi Cybernetic Cyan',
        tag: 'SCI-FI',
        primary: '#06b6d4',
        secondary: '#155e75',
        accent: '#67e8f9',
        deep: '#083344'
    },
    cobalt: {
        id: 'cobalt',
        name: 'Cobalt Striker',
        label: 'น้ำเงินโคบอลต์คมเข้ม',
        labelEn: 'Electric Cobalt Striker',
        tag: 'STRIKER',
        primary: '#3b82f6',
        secondary: '#1e3a8a',
        accent: '#93c5fd',
        deep: '#172554'
    },
    emerald: {
        id: 'emerald',
        name: 'Emerald Matrix',
        label: 'เขียวมรกตเรืองแสง',
        labelEn: 'Glowing Emerald Matrix',
        tag: 'MATRIX',
        primary: '#10b981',
        secondary: '#065f46',
        accent: '#6ee7b7',
        deep: '#022c22'
    },
    mint: {
        id: 'mint',
        name: 'Aurora Mint',
        label: 'เขียวมิ้นต์แสงเหนือ',
        labelEn: 'Northern Aurora Mint',
        tag: 'AURORA',
        primary: '#14b8a6',
        secondary: '#115e59',
        accent: '#5eead4',
        deep: '#042f2e'
    },
    gold: {
        id: 'gold',
        name: 'Imperial Gold',
        label: 'ทองราชันย์พรีเมียม',
        labelEn: 'Royal Imperial Gold',
        tag: 'PRESTIGE',
        primary: '#f59e0b',
        secondary: '#92400e',
        accent: '#fcd34d',
        deep: '#451a03'
    },
    magma: {
        id: 'magma',
        name: 'Magma Flare',
        label: 'ส้มแมกมาอัคคีเดือด',
        labelEn: 'Inferno Magma Flare',
        tag: 'INFERNO',
        primary: '#f97316',
        secondary: '#9a3412',
        accent: '#fdba74',
        deep: '#431407'
    },
    sakura: {
        id: 'sakura',
        name: 'Midnight Sakura',
        label: 'ชมพูซากุระนีออน',
        labelEn: 'Neon Midnight Sakura',
        tag: 'NEON PINK',
        primary: '#ec4899',
        secondary: '#831843',
        accent: '#f9a8d4',
        deep: '#500724'
    },
    arctic: {
        id: 'arctic',
        name: 'Arctic Titanium',
        label: 'ขาวเงินไทเทเนียมไอซ์บลู',
        labelEn: 'Ice-Blue Arctic Titanium',
        tag: 'TITANIUM',
        primary: '#38bdf8',
        secondary: '#334155',
        accent: '#e2e8f0',
        deep: '#0f172a'
    }
};

let activeParticlePalette = ['#ff1744', '#ff6b81', '#99001b', '#4a0412'];
let currentScrollDirection = 'down';

const state = {
    lang: 'th',
    soundEnabled: true,
    videoCategory: 'all',
    theme: {
        mode: 'dark',
        presetId: 'crimson',
        name: 'Crimson Shadow',
        primary: '#ff1744',
        secondary: '#99001b',
        accent: '#ff6b81',
        deep: '#4a0412',
        glowOpacity: 0.85
    },
    owner: {
        discordId: '1375103992358768730',
        robloxId: '9626965436',
        displayName: 'AyatoFixed',
        username: '@ayatofixed',
        avatar: 'https://cdn.discordapp.com/embed/avatars/0.png',
        banner: '',
        status: 'online',
        bio: 'จัดการระบบเขียนสคริปต์ (Scripting), ทำ UI, Animation และ VFX',
        discordUrl: 'https://discord.com/users/1375103992358768730',
        robloxUrl: 'https://www.roblox.com/th/users/9626965436/profile'
    },
    coowner: {
        discordId: '789027937633959936',
        robloxId: '732463046',
        displayName: 'piyth001',
        username: '@piyth001',
        avatar: 'https://cdn.discordapp.com/embed/avatars/1.png',
        banner: '',
        status: 'online',
        bio: 'เขียนสคริปต์ (Scripting), ทำโมเดล (3D Modeling), Build Map และจัดการ Optimize ระบบ',
        discordUrl: 'https://discord.com/users/789027937633959936',
        robloxUrl: 'https://www.roblox.com/th/users/732463046/profile'
    },
    // คลิปผลงานจะถูกเพิ่มในอาร์เรย์นี้เมื่ออัปโหลดวิดีโอจริงแล้ว
    // รูปแบบ: { id, category, categoryLabel, role, title, desc, descEn, duration, views, thumb, videoUrl, tags }
    sampleVideos: [],
    studioMaps: []
};

function t(key) {
    const dict = I18N[state.lang] || I18N.th;
    return dict[key] || I18N.th[key] || key;
}

function setLanguage(lang, showNotification = true) {
    if (lang !== 'th' && lang !== 'en') return;
    state.lang = lang;
    document.documentElement.lang = lang;

    try {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {}

    // Update TH / EN Toggle Button Styles
    const btnTH = document.getElementById('langBtnTH');
    const btnEN = document.getElementById('langBtnEN');
    if (btnTH && btnEN) {
        if (lang === 'th') {
            btnTH.classList.add('lang-active');
            btnTH.classList.remove('text-slate-400');
            btnEN.classList.remove('lang-active');
            btnEN.classList.add('text-slate-400');
        } else {
            btnEN.classList.add('lang-active');
            btnEN.classList.remove('text-slate-400');
            btnTH.classList.remove('lang-active');
            btnTH.classList.add('text-slate-400');
        }
    }

    // Translate all elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) el.textContent = t(key);
    });

    // Translate rich HTML sections
    const heroSub = document.getElementById('heroSubtitleText');
    if (heroSub) heroSub.innerHTML = t('hero_subtitle_html');

    const aboutSub = document.getElementById('aboutSubheading');
    if (aboutSub) aboutSub.innerHTML = t('about_subheading_html');

    // Update Owner & Co-Owner localized bios
    state.owner.bio = t('owner_bio');
    state.coowner.bio = t('coowner_bio');

    updateDOMProfiles();
    renderThemePresetButtons();
    renderVideoShowcase(false);
    renderMapShowcase();

    const badge = document.getElementById('currentThemeBadge');
    const activePreset = THEME_PRESETS[state.theme.presetId] || THEME_PRESETS.crimson;
    if (badge && activePreset) {
        const subLabel = state.lang === 'en' ? activePreset.labelEn : activePreset.label;
        badge.textContent = `${activePreset.name} (${subLabel})`;
    }

    if (showNotification) {
        playClickSound();
        showToast(t('toast_lang_changed'), 'emerald');
    }
}

function loadSavedLanguage() {
    try {
        const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
        if (savedLang === 'en' || savedLang === 'th') {
            setLanguage(savedLang, false);
            return;
        }
    } catch (e) {}
    setLanguage('th', false);
}

function loadSavedState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (parsed.owner) {
            state.owner = {
                ...state.owner,
                ...parsed.owner,
                bio: t('owner_bio')
            };
        }
        if (parsed.coowner) {
            state.coowner = {
                ...state.coowner,
                ...parsed.coowner,
                bio: t('coowner_bio')
            };
        }
    } catch (e) {
        console.warn('Could not read saved state:', e);
    }
}

function saveStateToLocal() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            owner: state.owner,
            coowner: state.coowner
        }));
    } catch (e) {
        console.warn('Could not save state to localStorage:', e);
    }
}

async function fetchWithTimeout(url, timeoutMs = 6000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timer);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (err) {
        clearTimeout(timer);
        throw err;
    }
}

async function lookupDiscordUser(discordId) {
    const cleanId = String(discordId).trim();
    if (!cleanId) return null;

    try {
        const lanyard = await fetchWithTimeout(`https://api.lanyard.rest/v1/users/${cleanId}`, 4500);
        if (lanyard && lanyard.success && lanyard.data && lanyard.data.discord_user) {
            const u = lanyard.data.discord_user;
            const hash = u.avatar;
            const ext = hash && hash.startsWith('a_') ? 'gif' : 'png';
            const avatarUrl = hash
                ? `https://cdn.discordapp.com/avatars/${cleanId}/${hash}.${ext}?size=512`
                : null;
            return {
                displayName: u.global_name || u.display_name || u.username,
                username: `@${u.username}`,
                avatar: avatarUrl,
                status: lanyard.data.discord_status || 'online',
                source: 'Lanyard Live'
            };
        }
    } catch (_) {}

    const mesalyticUrl = `https://discordlookup.mesalytic.moe/v1/user/${cleanId}`;
    const mesalyticCandidates = [
        mesalyticUrl,
        `https://corsproxy.io/?${encodeURIComponent(mesalyticUrl)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(mesalyticUrl)}`
    ];

    for (const url of mesalyticCandidates) {
        try {
            const data = await fetchWithTimeout(url, 5500);
            if (data && (data.username || data.global_name)) {
                let avatarUrl = null;
                if (data.avatar && data.avatar.link) {
                    avatarUrl = `${data.avatar.link}?size=512`;
                } else if (typeof data.avatar === 'string' && data.avatar) {
                    const ext = data.avatar.startsWith('a_') ? 'gif' : 'png';
                    avatarUrl = `https://cdn.discordapp.com/avatars/${cleanId}/${data.avatar}.${ext}?size=512`;
                }
                let bannerUrl = null;
                if (data.banner && data.banner.link) {
                    bannerUrl = `${data.banner.link}?size=1024`;
                }
                return {
                    displayName: data.global_name || data.username,
                    username: `@${data.username}`,
                    avatar: avatarUrl,
                    banner: bannerUrl,
                    status: 'online',
                    source: 'Discord Lookup'
                };
            }
        } catch (_) {}
    }

    const japiUrl = `https://japi.rest/discord/v1/user/${cleanId}`;
    const japiCandidates = [
        japiUrl,
        `https://corsproxy.io/?${encodeURIComponent(japiUrl)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(japiUrl)}`
    ];

    for (const url of japiCandidates) {
        try {
            const res = await fetchWithTimeout(url, 5500);
            if (res && res.data && (res.data.username || res.data.global_name)) {
                const d = res.data;
                let avatarUrl = d.avatarURL ? `${d.avatarURL}?size=512` : null;
                if (!avatarUrl && d.avatar) {
                    const ext = d.avatar.startsWith('a_') ? 'gif' : 'png';
                    avatarUrl = `https://cdn.discordapp.com/avatars/${cleanId}/${d.avatar}.${ext}?size=512`;
                }
                return {
                    displayName: d.global_name || d.username,
                    username: `@${d.username}`,
                    avatar: avatarUrl,
                    banner: d.bannerURL || null,
                    status: 'online',
                    source: 'Discord API'
                };
            }
        } catch (_) {}
    }

    return null;
}

async function lookupRobloxAvatar(robloxId) {
    if (!robloxId) return null;
    const thumbApi = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${robloxId}&size=420x420&format=Png&isCircular=false`;
    const candidates = [
        `https://corsproxy.io/?${encodeURIComponent(thumbApi)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(thumbApi)}`
    ];
    for (const url of candidates) {
        try {
            const data = await fetchWithTimeout(url, 5000);
            if (data && data.data && data.data[0] && data.data[0].imageUrl) {
                return data.data[0].imageUrl;
            }
        } catch (_) {}
    }
    return null;
}

async function fetchDiscordProfileByRole(role, showFeedback = false) {
    const target = role === 'owner' ? state.owner : state.coowner;
    const badgeEl = document.getElementById(`${role}SyncBadge`);
    if (badgeEl) {
        badgeEl.textContent = state.lang === 'en' ? 'Syncing Discord...' : 'กำลังซิงก์ Discord...';
    }

    const discordData = await lookupDiscordUser(target.discordId);

    if (discordData) {
        target.displayName = discordData.displayName || target.displayName;
        target.username = discordData.username || target.username;
        if (discordData.avatar) {
            target.avatar = discordData.avatar;
        }
        if (discordData.banner) {
            target.banner = discordData.banner;
        }
        target.status = discordData.status || 'online';

        if (badgeEl) {
            badgeEl.textContent = `ID: ${target.discordId}`;
        }
        updateDOMProfiles();
        saveStateToLocal();

        if (showFeedback) {
            const msg = state.lang === 'en'
                ? `Synced Discord profile for ${target.displayName} (${target.username})!`
                : `ดึงโปรไฟล์ Discord ของ ${target.displayName} (${target.username}) สำเร็จ!`;
            showToast(msg, 'emerald');
        }
        return true;
    } else {
        if (!target.avatar || target.avatar.includes('embed/avatars')) {
            const rbxAvatar = await lookupRobloxAvatar(target.robloxId);
            if (rbxAvatar) {
                target.avatar = rbxAvatar;
            }
        }
        if (badgeEl) {
            badgeEl.textContent = `ID: ${target.discordId}`;
        }
        updateDOMProfiles();
        if (showFeedback) {
            const msg = state.lang === 'en'
                ? `Profile updated for ${target.displayName}`
                : `แสดงข้อมูลโปรไฟล์ของ ${target.displayName} เรียบร้อย`;
            showToast(msg, 'red');
        }
        return false;
    }
}

async function syncAllDiscordProfiles(manual = false) {
    await Promise.all([
        fetchDiscordProfileByRole('owner', false),
        fetchDiscordProfileByRole('coowner', false)
    ]);

    if (manual) {
        playClickSound();
        const msg = state.lang === 'en'
            ? 'Synced latest Discord avatars & names!'
            : 'ซิงก์รูปโปรไฟล์และชื่อจาก Discord ล่าสุดเรียบร้อยแล้ว!';
        showToast(msg, 'emerald');
    }
}

function applyStatusBadge(role, status) {
    const dot = document.getElementById(`${role}StatusDot`);
    const text = document.getElementById(`${role}StatusText`);
    if (!dot || !text) return;

    const statusMap = {
        online: { color: '#23a55a', label: t('status_online'), textClass: 'text-emerald-400 font-medium text-[11px] sm:text-xs' },
        idle: { color: '#f0b232', label: t('status_idle'), textClass: 'text-amber-400 font-medium text-[11px] sm:text-xs' },
        dnd: { color: '#f23f43', label: t('status_dnd'), textClass: 'text-rose-400 font-medium text-[11px] sm:text-xs' },
        offline: { color: '#80848e', label: t('status_offline'), textClass: 'text-slate-400 font-medium text-[11px] sm:text-xs' }
    };
    const st = statusMap[status] || statusMap.online;
    dot.style.backgroundColor = st.color;
    dot.style.color = st.color;
    text.className = st.textClass;
    text.textContent = st.label;
}

function updateDOMProfiles() {
    document.getElementById('ownerDisplayName').textContent = state.owner.displayName;
    document.getElementById('ownerUsername').textContent = state.owner.username.startsWith('@')
        ? state.owner.username
        : `@${state.owner.username}`;
    const ownerImg = document.getElementById('ownerAvatar');
    ownerImg.src = state.owner.avatar;
    ownerImg.onerror = function () {
        this.onerror = null;
        this.src = 'https://cdn.discordapp.com/embed/avatars/0.png';
    };
    document.getElementById('ownerBio').textContent = t('owner_bio');
    document.getElementById('ownerDiscordLink').href = state.owner.discordUrl;
    document.getElementById('ownerRobloxLink').href = state.owner.robloxUrl;
    if (state.owner.banner) {
        document.getElementById('ownerBannerBox').style.backgroundImage = `url('${state.owner.banner}')`;
    }
    applyStatusBadge('owner', state.owner.status);

    document.getElementById('coownerDisplayName').textContent = state.coowner.displayName;
    document.getElementById('coownerUsername').textContent = state.coowner.username.startsWith('@')
        ? state.coowner.username
        : `@${state.coowner.username}`;
    const coownerImg = document.getElementById('coownerAvatar');
    coownerImg.src = state.coowner.avatar;
    coownerImg.onerror = function () {
        this.onerror = null;
        this.src = 'https://cdn.discordapp.com/embed/avatars/1.png';
    };
    document.getElementById('coownerBio').textContent = t('coowner_bio');
    document.getElementById('coownerDiscordLink').href = state.coowner.discordUrl;
    document.getElementById('coownerRobloxLink').href = state.coowner.robloxUrl;
    if (state.coowner.banner) {
        document.getElementById('coownerBannerBox').style.backgroundImage = `url('${state.coowner.banner}')`;
    }
    applyStatusBadge('coowner', state.coowner.status);
}

let audioCtx = null;
function playTone(freq = 520, duration = 0.06, type = 'sine', volume = 0.04) {
    if (!state.soundEnabled) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(volume, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
}

function playHoverSound() { playTone(660, 0.05, 'sine', 0.03); }
function playClickSound() { playTone(880, 0.08, 'triangle', 0.04); }
function playWhooshUpSound() {
    if (!state.soundEnabled) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(980, audioCtx.currentTime + 0.32);
        gain.gain.setValueAtTime(0.045, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {}
}

function hexToRgbString(hex) {
    const clean = String(hex).replace('#', '');
    if (clean.length !== 6) return '255, 23, 68';
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return '255, 23, 68';
    return `${r}, ${g}, ${b}`;
}

function setColorMode(mode, showNotification = true) {
    const targetMode = mode === 'light' ? 'light' : 'dark';
    state.theme.mode = targetMode;
    applyThemeToDOM(state.theme, true);

    if (showNotification) {
        playClickSound();
        showToast(targetMode === 'light' ? t('toast_mode_light') : t('toast_mode_dark'), 'emerald');
    }
}

function toggleColorMode() {
    const nextMode = state.theme.mode === 'light' ? 'dark' : 'light';
    setColorMode(nextMode, true);
}

function updateModeSwitchUI() {
    const isLight = state.theme.mode === 'light';
    const root = document.documentElement;
    root.classList.toggle('light-mode', isLight);
    root.classList.toggle('dark-mode', !isLight);

    const navIcon = document.getElementById('modeToggleIcon');
    const navLabel = document.getElementById('modeToggleLabel');
    const modalBannerIcon = document.getElementById('modalModeBannerIcon');
    const darkBtn = document.getElementById('modalDarkBtn');
    const lightBtn = document.getElementById('modalLightBtn');

    if (navIcon) {
        navIcon.className = isLight
            ? 'fa-solid fa-sun text-amber-500 text-xs sm:text-sm transition-transform duration-500 group-hover:rotate-45'
            : 'fa-solid fa-moon text-amber-400 text-xs sm:text-sm transition-transform duration-500 group-hover:-rotate-12';
    }
    if (navLabel) {
        navLabel.textContent = isLight ? 'LIGHT' : 'DARK';
    }
    if (modalBannerIcon) {
        modalBannerIcon.className = isLight ? 'fa-solid fa-sun text-sm' : 'fa-solid fa-moon text-sm';
    }
    if (darkBtn && lightBtn) {
        if (isLight) {
            lightBtn.classList.add('mode-active');
            lightBtn.classList.remove('text-slate-300');
            darkBtn.classList.remove('mode-active');
            darkBtn.classList.add('text-slate-300');
        } else {
            darkBtn.classList.add('mode-active');
            darkBtn.classList.remove('text-slate-300');
            lightBtn.classList.remove('mode-active');
            lightBtn.classList.add('text-slate-300');
        }
    }
}

function applyThemeToDOM(themeObj, save = true) {
    const root = document.documentElement;
    const isLight = themeObj.mode === 'light';
    const primaryRgb = hexToRgbString(themeObj.primary);
    const secondaryRgb = hexToRgbString(themeObj.secondary);
    const accentRgb = hexToRgbString(themeObj.accent);

    updateModeSwitchUI();

    root.style.setProperty('--theme-primary', themeObj.primary);
    root.style.setProperty('--theme-primary-rgb', primaryRgb);
    root.style.setProperty('--theme-secondary', themeObj.secondary);
    root.style.setProperty('--theme-secondary-rgb', secondaryRgb);
    root.style.setProperty('--theme-accent', themeObj.accent);
    root.style.setProperty('--theme-accent-rgb', accentRgb);
    root.style.setProperty('--theme-deep', themeObj.deep || themeObj.secondary);
    root.style.setProperty('--glow-opacity', themeObj.glowOpacity ?? 0.85);

    activeParticlePalette = [
        themeObj.primary,
        themeObj.accent,
        themeObj.secondary,
        themeObj.deep || themeObj.secondary
    ];

    if (window.__studioParticles) {
        window.__studioParticles.forEach((p, idx) => {
            p.color = activeParticlePalette[idx % activeParticlePalette.length];
        });
    }

    const overrideEl = document.getElementById('dynamicThemeOverrides');
    if (overrideEl) {
        const surfaceMix = isLight
            ? `
            .bg-\\[\\#080407\\]\\/95, .bg-\\[\\#080407\\] {
                background-color: color-mix(in srgb, ${themeObj.primary} 3%, #ffffff) !important;
            }
            .bg-\\[\\#12080c\\], .bg-\\[\\#12090d\\], .bg-\\[\\#14080e\\], .bg-\\[\\#120b10\\] {
                background-color: color-mix(in srgb, ${themeObj.primary} 6%, #f1f5f9) !important;
            }
            .bg-\\[\\#0d070a\\]\\/90, .bg-\\[\\#0d070a\\]\\/95, .bg-\\[\\#0f070b\\], .bg-\\[\\#0b070a\\] {
                background-color: color-mix(in srgb, ${themeObj.primary} 4%, #ffffff) !important;
            }
            .hover\\:bg-\\[\\#150a0f\\]:hover {
                background-color: color-mix(in srgb, ${themeObj.primary} 9%, #ffffff) !important;
            }
            #ownerBannerBox, #coownerBannerBox {
                background-image: linear-gradient(135deg, ${themeObj.primary}, ${themeObj.secondary}, #1e1b4b) !important;
            }
            `
            : `
            .bg-\\[\\#080407\\]\\/95, .bg-\\[\\#080407\\] {
                background-color: color-mix(in srgb, ${themeObj.secondary} 7%, #060609) !important;
            }
            .bg-\\[\\#12080c\\], .bg-\\[\\#12090d\\], .bg-\\[\\#14080e\\], .bg-\\[\\#120b10\\] {
                background-color: color-mix(in srgb, ${themeObj.primary} 8%, #09090f) !important;
            }
            .bg-\\[\\#0d070a\\]\\/90, .bg-\\[\\#0d070a\\]\\/95, .bg-\\[\\#0f070b\\], .bg-\\[\\#0b070a\\] {
                background-color: color-mix(in srgb, ${themeObj.secondary} 9%, #07070c) !important;
            }
            .hover\\:bg-\\[\\#150a0f\\]:hover {
                background-color: color-mix(in srgb, ${themeObj.primary} 14%, #0b0b12) !important;
            }
            #ownerBannerBox, #coownerBannerBox {
                background-image: linear-gradient(135deg, rgba(${secondaryRgb}, 0.65), rgba(${primaryRgb}, 0.32), #06060a) !important;
            }
            `;

        overrideEl.textContent = `
            .border-red-500\\/15, .border-red-500\\/20, .border-red-500\\/25, .border-red-500\\/30, .border-red-500\\/35,
            .border-rose-500\\/20, .border-rose-500\\/30, .border-red-600\\/30 {
                border-color: rgba(${primaryRgb}, 0.28) !important;
            }
            .border-red-500\\/40, .border-red-500\\/50, .border-rose-500\\/40, .border-rose-500\\/50,
            .hover\\:border-red-500\\/50:hover, .hover\\:border-red-500\\/60:hover, .group:hover .group-hover\\:border-red-500 {
                border-color: rgba(${primaryRgb}, 0.6) !important;
            }
            .focus\\:border-red-500:focus, .focus\\:border-rose-500:focus {
                border-color: ${themeObj.primary} !important;
            }
            .bg-red-600\\/20, .bg-red-600\\/15, .bg-red-600\\/10, .bg-red-500\\/20, .bg-red-500\\/15, .bg-red-500\\/10,
            .bg-rose-600\\/20, .bg-rose-600\\/15, .bg-rose-500\\/20, .bg-rose-500\\/15, .bg-rose-500\\/10 {
                background-color: rgba(${primaryRgb}, 0.16) !important;
            }
            .hover\\:bg-red-500\\/20:hover, .hover\\:bg-rose-500\\/20:hover,
            .hover\\:bg-red-600\\/30:hover, .hover\\:bg-rose-600\\/30:hover {
                background-color: rgba(${primaryRgb}, 0.28) !important;
            }
            .bg-red-600, .bg-red-500 {
                background-color: ${themeObj.primary} !important;
            }
            .text-red-400, .text-red-500, .text-rose-400 {
                color: ${themeObj.primary} !important;
            }
            .text-red-300, .text-rose-300, .text-rose-200, .text-red-200, .text-rose-100 {
                color: ${isLight ? themeObj.secondary : themeObj.accent} !important;
            }
            .from-red-600 {
                --tw-gradient-from: ${themeObj.primary} !important;
                --tw-gradient-to: ${themeObj.secondary} !important;
                --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
            }
            .shadow-red-600\\/30, .shadow-red-600\\/40 {
                --tw-shadow-color: rgba(${primaryRgb}, 0.38) !important;
                box-shadow: 0 10px 25px -5px rgba(${primaryRgb}, 0.38) !important;
            }
            .accent-rose-500 {
                accent-color: ${themeObj.primary} !important;
            }
            ${surfaceMix}
        `;
    }

    const heroBadgeText = document.getElementById('heroThemeBadgeText');
    if (heroBadgeText) {
        heroBadgeText.textContent = `DARKSHADOW ${themeObj.name.toUpperCase()}`;
    }

    const dot = document.getElementById('activeThemeDot');
    if (dot) {
        dot.style.background = themeObj.primary;
        dot.style.boxShadow = `0 0 10px ${themeObj.primary}`;
    }

    const badge = document.getElementById('currentThemeBadge');
    const preset = THEME_PRESETS[themeObj.presetId] || THEME_PRESETS.crimson;
    if (badge && preset) {
        const subLabel = state.lang === 'en' ? preset.labelEn : preset.label;
        badge.textContent = `${preset.name} (${subLabel})`;
    }

    renderThemePresetButtons();

    if (save) {
        try {
            localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(state.theme));
        } catch (e) {}
    }
}

function renderThemePresetButtons() {
    const grid = document.getElementById('themePresetsGrid');
    if (!grid) return;

    grid.innerHTML = Object.values(THEME_PRESETS).map(preset => {
        const isSelected = state.theme.presetId === preset.id;
        const previewGradient = `linear-gradient(135deg, ${preset.primary}, ${preset.secondary}, ${preset.deep})`;
        const subLabel = state.lang === 'en' ? preset.labelEn : preset.label;

        return `
            <button onclick="selectPresetTheme('${preset.id}')" 
                    class="group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 hover:-translate-y-1 ${
                        isSelected
                            ? 'bg-white/[0.09] border-white shadow-xl'
                            : 'bg-[#120b10]/90 border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                    }">
                <div class="w-full">
                    <div class="w-full h-10 sm:h-11 rounded-xl mb-3 shadow-inner flex items-center justify-between px-3 relative overflow-hidden" style="background: ${previewGradient};">
                        <span class="text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md bg-black/55 text-white/90 backdrop-blur-sm border border-white/15">
                            ${preset.tag}
                        </span>
                        ${
                            isSelected
                                ? '<span class="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs shadow-md"><i class="fa-solid fa-check"></i></span>'
                                : '<span class="w-5 h-5 rounded-full bg-black/40 border border-white/25 group-hover:border-white/70 transition-colors"></span>'
                        }
                    </div>

                    <div class="flex items-center justify-between gap-2">
                        <div class="text-sm font-bold text-white leading-tight">${preset.name}</div>
                        <div class="flex items-center -space-x-1 shrink-0">
                            <span class="w-3.5 h-3.5 rounded-full border border-black/60" style="background: ${preset.primary};"></span>
                            <span class="w-3.5 h-3.5 rounded-full border border-black/60" style="background: ${preset.accent};"></span>
                            <span class="w-3.5 h-3.5 rounded-full border border-black/60" style="background: ${preset.secondary};"></span>
                        </div>
                    </div>
                    <div class="text-xs text-slate-400 mt-1">${subLabel}</div>
                </div>
            </button>
        `;
    }).join('');
}

function selectPresetTheme(presetId) {
    const preset = THEME_PRESETS[presetId];
    if (!preset) return;
    state.theme = {
        ...state.theme,
        presetId: preset.id,
        name: preset.name,
        label: preset.label,
        primary: preset.primary,
        secondary: preset.secondary,
        accent: preset.accent,
        deep: preset.deep
    };
    applyThemeToDOM(state.theme, true);
    playClickSound();
    const subLabel = state.lang === 'en' ? preset.labelEn : preset.label;
    const msg = state.lang === 'en'
        ? `Theme switched to ${preset.name} (${subLabel})!`
        : `เปลี่ยนธีมสีเป็น ${preset.name} (${subLabel}) เรียบร้อย!`;
    showToast(msg, 'emerald');
}

function updateGlowIntensity(val) {
    const numeric = Number(val) / 100;
    state.theme.glowOpacity = numeric;
    document.getElementById('glowValueLabel').textContent = `${val}%`;
    document.documentElement.style.setProperty('--glow-opacity', numeric);
    try {
        localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(state.theme));
    } catch (e) {}
}

function openThemeModal() {
    playClickSound();
    renderThemePresetButtons();
    const modal = document.getElementById('themeModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeThemeModal() {
    const modal = document.getElementById('themeModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function loadSavedTheme() {
    try {
        const raw = localStorage.getItem(THEME_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && parsed.presetId && THEME_PRESETS[parsed.presetId]) {
                const preset = THEME_PRESETS[parsed.presetId];
                state.theme = {
                    ...state.theme,
                    ...preset,
                    mode: parsed.mode === 'light' ? 'light' : 'dark',
                    presetId: preset.id,
                    glowOpacity: parsed.glowOpacity ?? 0.85
                };
            }
        }
    } catch (e) {}
    applyThemeToDOM(state.theme, false);
}

function toggleSoundFx() {
    state.soundEnabled = !state.soundEnabled;
    const icon = document.getElementById('soundIcon');
    if (state.soundEnabled) {
        icon.className = 'fa-solid fa-volume-high text-red-400 text-xs sm:text-sm';
        showToast(t('toast_sound_on'), 'red');
    } else {
        icon.className = 'fa-solid fa-volume-xmark text-slate-500 text-xs sm:text-sm';
        showToast(t('toast_sound_off'), 'slate');
    }
}

function renderMapShowcase() {
    const grid = document.getElementById('mapCardsGrid');
    if (!grid) return;

    if (!state.studioMaps || state.studioMaps.length === 0) {
        grid.innerHTML = `
            <div class="scroll-card-3d col-span-full min-h-[220px] sm:min-h-[260px] rounded-3xl bg-[#0d070a]/60 border border-dashed border-red-500/20 flex flex-col items-center justify-center p-8 sm:p-10 text-center">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-500 text-lg sm:text-xl mb-3">
                    <i class="fa-solid fa-gamepad"></i>
                </div>
                <p class="text-xs sm:text-sm font-medium text-slate-400">${t('maps_empty_title')}</p>
                <span class="text-[11px] sm:text-xs text-slate-600 mt-1">COMING SOON</span>
            </div>
        `;
        return;
    }

    grid.innerHTML = state.studioMaps.map((map, idx) => `
        <div style="--stagger-delay: ${idx * 90}ms;" class="scroll-card-3d group bg-[#0d070a]/95 border border-red-500/25 hover:border-red-500/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl">
            <div>
                <div class="h-44 sm:h-48 w-full relative overflow-hidden bg-slate-900">
                    <img src="${map.image}" alt="${map.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0d070a] via-transparent to-transparent"></div>
                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold text-emerald-300 border border-emerald-400/30">
                        ${map.badge}
                    </span>
                    <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-semibold text-slate-200 border border-white/10">
                        ${map.lead}
                    </span>
                </div>
                <div class="p-5 sm:p-6 pb-4">
                    <div class="text-xs font-semibold text-red-400 mb-1">${map.category}</div>
                    <h3 class="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">${map.title}</h3>
                    <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">${map.desc}</p>
                </div>
            </div>
            <div class="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-3 text-xs text-slate-300">
                    <span><i class="fa-solid fa-users text-red-400 mr-1"></i>${map.visits}</span>
                    <span><i class="fa-solid fa-thumbs-up text-emerald-400 mr-1"></i>${map.rating}</span>
                </div>
                <a href="${map.url}" target="_blank" rel="noopener noreferrer" onmouseenter="playHoverSound()" class="px-3.5 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600/35 border border-red-500/30 text-red-300 text-xs font-semibold transition-all flex items-center gap-1.5">
                    <span>${t('maps_view_roblox')}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function filterVideoCategory(cat) {
    if (state.videoCategory === cat) return;
    state.videoCategory = cat;
    playClickSound();

    document.querySelectorAll('.video-cat-btn').forEach(btn => {
        const btnCat = btn.getAttribute('data-vid-cat');
        if (btnCat === cat) {
            btn.className = 'video-cat-btn shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold bg-red-600 text-white shadow-lg scale-[1.02] transition-all duration-200 flex items-center gap-2';
        } else {
            btn.className = 'video-cat-btn shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-[#12080c] hover:bg-white/10 text-slate-300 border border-red-500/20 scale-100 transition-all duration-200 flex items-center gap-2';
        }
    });

    renderVideoShowcase(true);
}

function renderVideoShowcase(isCategorySwitch = false) {
    const grid = document.getElementById('videoShowcaseGrid');
    if (!grid) return;

    const categoryBar = document.getElementById('videoCategoryBar');

    if (!state.sampleVideos.length) {
        if (categoryBar) {
            categoryBar.classList.add('hidden');
            categoryBar.classList.remove('flex');
        }
        grid.innerHTML = `
            <div class="scroll-card-3d col-span-full min-h-[220px] sm:min-h-[260px] rounded-3xl bg-[#0d070a]/60 border border-dashed border-red-500/20 flex flex-col items-center justify-center p-8 sm:p-10 text-center">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-500 text-lg sm:text-xl mb-3">
                    <i class="fa-solid fa-circle-play"></i>
                </div>
                <p class="text-xs sm:text-sm font-medium text-slate-400">${t('videos_empty_title')}</p>
                <span class="text-[11px] sm:text-xs text-slate-600 mt-1">COMING SOON</span>
            </div>
        `;
        return;
    }

    if (categoryBar) {
        categoryBar.classList.remove('hidden');
        categoryBar.classList.add('flex');
    }

    const filtered = state.videoCategory === 'all'
        ? state.sampleVideos
        : state.sampleVideos.filter(v => v.category === state.videoCategory);

    const animClass = isCategorySwitch ? 'category-switch-enter' : 'scroll-card-3d scroll-in-view';

    grid.innerHTML = filtered.map((vid, idx) => {
        const staggerMs = idx * 55;
        const localizedDesc = state.lang === 'en' && vid.descEn ? vid.descEn : vid.desc;
        return `
            <div style="--stagger-delay: ${staggerMs}ms;"
                 onclick="openVideoPlayerModal('${vid.id}')"
                 onmouseenter="playHoverSound()"
                 class="${animClass} group cursor-pointer bg-[#0d070a]/95 border border-red-500/25 hover:border-red-500/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl">
                <div>
                    <div class="h-44 w-full relative overflow-hidden bg-[#060306] flex items-center justify-center">
                        ${vid.thumb
                            ? `<img src="${vid.thumb}" alt="${vid.title}" class="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500">`
                            : `<i class="fa-solid fa-film text-slate-700 text-3xl"></i>`}
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0d070a] via-black/20 to-transparent"></div>

                        <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span class="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white truncate">
                                ${vid.role}
                            </span>
                            <span class="px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-slate-200 border border-white/10 shrink-0">
                                <i class="fa-regular fa-clock text-red-400 mr-1"></i>${vid.duration || '01:00'}
                            </span>
                        </div>

                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="video-play-btn w-12 h-12 rounded-full rgb-laser-bar text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                <i class="fa-solid fa-play text-sm ml-0.5"></i>
                            </div>
                        </div>

                        <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px]">
                            <span class="text-emerald-300 font-mono flex items-center gap-1">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                OFFICIAL SHOWCASE
                            </span>
                            <span class="text-slate-300"><i class="fa-solid fa-eye mr-1 text-red-400"></i>${vid.views || '1.2K Views'}</span>
                        </div>
                    </div>

                    <div class="p-4 sm:p-5 pb-4">
                        <div class="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">${vid.categoryLabel}</div>
                        <h3 class="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-red-300 transition-colors line-clamp-1">${vid.title}</h3>
                        <p class="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">${localizedDesc}</p>
                        <div class="flex flex-wrap gap-1">
                            ${(vid.tags || []).map(t => `<span class="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <div class="px-4 sm:px-5 pb-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span class="rgb-text font-bold flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-play"></i> ${t('vid_click_watch')}
                    </span>
                    <i class="fa-solid fa-expand text-slate-400 group-hover:text-white transition-colors"></i>
                </div>
            </div>
        `;
    }).join('');
}

function extractYouTubeEmbed(url) {
    if (!url) return null;
    const reg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(reg);
    return match && match[1] ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : null;
}

function openVideoPlayerModal(videoId) {
    const vid = state.sampleVideos.find(v => v.id === videoId);
    if (!vid) return;

    playClickSound();

    const localizedDesc = state.lang === 'en' && vid.descEn ? vid.descEn : vid.desc;

    document.getElementById('modalVideoCategory').textContent = vid.categoryLabel;
    document.getElementById('modalVideoTitle').textContent = vid.title;
    document.getElementById('modalVideoRoleBadge').textContent = vid.role;
    document.getElementById('modalVideoDuration').textContent = `${vid.duration || '01:00'} / HD`;
    document.getElementById('modalVideoDesc').textContent = localizedDesc;
    document.getElementById('modalVideoTechTags').innerHTML = (vid.tags || [])
        .map(t => `<span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">${t}</span>`)
        .join('');

    const modal = document.getElementById('videoPlayerModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const customContainer = document.getElementById('modalCustomMediaContainer');
    const rawUrl = (vid.videoUrl || '').trim();
    const ytEmbed = extractYouTubeEmbed(rawUrl);

    customContainer.classList.remove('hidden');

    if (ytEmbed) {
        customContainer.innerHTML = `<iframe src="${ytEmbed}" class="w-full h-full border-0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    } else if (rawUrl) {
        customContainer.innerHTML = `<video src="${rawUrl}" controls autoplay loop class="w-full h-full object-contain bg-black"></video>`;
    } else {
        customContainer.innerHTML = `
            <div class="w-full h-full flex flex-col items-center justify-center gap-2 text-center p-6">
                <i class="fa-solid fa-film text-slate-600 text-2xl"></i>
                <p class="text-xs sm:text-sm text-slate-400">${t('video_media_missing')}</p>
            </div>
        `;
    }
}

function closeVideoPlayerModal() {
    const customContainer = document.getElementById('modalCustomMediaContainer');
    if (customContainer) customContainer.innerHTML = '';
    const modal = document.getElementById('videoPlayerModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

let activeGlideAnim = null;

// Cancel smooth scroll immediately if user manually scrolls via mouse wheel or touch
window.addEventListener('wheel', () => {
    if (activeGlideAnim) {
        cancelAnimationFrame(activeGlideAnim);
        activeGlideAnim = null;
    }
}, { passive: true });
window.addEventListener('touchstart', () => {
    if (activeGlideAnim) {
        cancelAnimationFrame(activeGlideAnim);
        activeGlideAnim = null;
    }
}, { passive: true });

function animateWindowScrollTo(targetY, duration = 620, withWarpEffect = false) {
    if (activeGlideAnim) {
        cancelAnimationFrame(activeGlideAnim);
        activeGlideAnim = null;
    }

    const startY = window.scrollY || document.documentElement.scrollTop;
    const diff = targetY - startY;
    if (Math.abs(diff) < 4) return;

    const startTime = performance.now();
    const warpOverlay = document.getElementById('scrollTopWarpOverlay');
    const upAurora = document.getElementById('scrollUpAurora');

    if (withWarpEffect) {
        playWhooshUpSound();
        if (warpOverlay) warpOverlay.classList.add('warp-active');
        if (upAurora) upAurora.classList.add('active-up-glow');
        if (window.__studioParticleBoost) window.__studioParticleBoost(-3.8);
    }

    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeOutQuart(progress);

        window.scrollTo(0, Math.round(startY + diff * eased));

        if (progress < 1) {
            activeGlideAnim = requestAnimationFrame(step);
        } else {
            activeGlideAnim = null;
            if (warpOverlay) warpOverlay.classList.remove('warp-active');
            setTimeout(() => {
                if (upAurora) upAurora.classList.remove('active-up-glow');
            }, 250);
        }
    }

    activeGlideAnim = requestAnimationFrame(step);
}

function smoothGlideToTop() {
    animateWindowScrollTo(0, 720, true);
}

function updateActiveNavPills(activeSectionId) {
    document.querySelectorAll('.nav-pill').forEach(pill => {
        const target = pill.getAttribute('data-nav-section');
        const isCompactPill = pill.classList.contains('shrink-0');
        if (target === activeSectionId) {
            pill.className = isCompactPill
                ? 'nav-pill shrink-0 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-white bg-red-600/20 border border-red-500/30 transition-all flex items-center gap-1.5'
                : 'nav-pill px-3 py-1.5 rounded-full text-xs font-medium text-white bg-red-600/20 border border-red-500/30 transition-all';
        } else {
            pill.className = isCompactPill
                ? 'nav-pill shrink-0 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white border border-transparent transition-all flex items-center gap-1.5'
                : 'nav-pill px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent transition-all';
        }
    });
}

function smoothScrollToSection(event, sectionId) {
    if (event) event.preventDefault();
    playClickSound();

    if (sectionId !== 'top') {
        updateActiveNavPills(sectionId);
    }

    if (sectionId === 'top') {
        smoothGlideToTop();
        return;
    }
    const targetEl = document.getElementById(sectionId);
    if (!targetEl) return;

    targetEl.querySelectorAll('.reveal-item').forEach(el => {
        el.classList.remove('js-hidden-down', 'js-hidden-up');
        el.classList.add('revealed');
    });
    targetEl.querySelectorAll('.scroll-card-3d').forEach(card => {
        card.classList.remove('js-scroll-pending-down', 'js-scroll-pending-up');
        card.classList.add('scroll-in-view');
    });

    const navHeight = window.innerWidth < 768 ? 104 : 84;
    const targetPosition = Math.max(0, targetEl.getBoundingClientRect().top + (window.scrollY || document.documentElement.scrollTop) - navHeight);
    const isScrollingUp = targetPosition < (window.scrollY || 0);
    animateWindowScrollTo(targetPosition, 580, isScrollingUp);
}

let cardObserver = null;
function observeScrollCards() {
    const cards = document.querySelectorAll('.scroll-card-3d');
    if (!('IntersectionObserver' in window)) {
        cards.forEach(c => c.classList.add('scroll-in-view'));
        return;
    }

    if (!cardObserver) {
        cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.remove('js-scroll-pending-down', 'js-scroll-pending-up');
                    el.classList.add('scroll-in-view');
                } else {
                    const rect = entry.boundingClientRect;
                    if (rect.top < -80) {
                        el.classList.remove('scroll-in-view', 'js-scroll-pending-down');
                        el.classList.add('js-scroll-pending-up');
                    } else if (rect.top > window.innerHeight + 60) {
                        el.classList.remove('scroll-in-view', 'js-scroll-pending-up');
                        el.classList.add('js-scroll-pending-down');
                    }
                }
            });
        }, { threshold: 0.08, rootMargin: '40px 0px 40px 0px' });
    }

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top > window.innerHeight + 40) {
            card.classList.add('js-scroll-pending-down');
        } else if (rect.bottom < -40) {
            card.classList.add('js-scroll-pending-up');
        } else {
            card.classList.add('scroll-in-view');
        }
        cardObserver.observe(card);
    });
}

function initAdvancedScrollAnimations() {
    const revealItems = document.querySelectorAll('.reveal-item');
    if ('IntersectionObserver' in window) {
        const revObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.remove('js-hidden-down', 'js-hidden-up');
                    el.classList.add('revealed');
                } else {
                    const rect = entry.boundingClientRect;
                    if (rect.top < -60) {
                        el.classList.remove('revealed', 'js-hidden-down');
                        el.classList.add('js-hidden-up');
                    } else if (rect.top > window.innerHeight + 40) {
                        el.classList.remove('revealed', 'js-hidden-up');
                        el.classList.add('js-hidden-down');
                    }
                }
            });
        }, { threshold: 0.08, rootMargin: '30px 0px 30px 0px' });

        revealItems.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top > window.innerHeight + 30) {
                el.classList.add('js-hidden-down');
            } else if (rect.bottom < -30) {
                el.classList.add('js-hidden-up');
            } else {
                el.classList.add('revealed');
            }
            revObs.observe(el);
        });

        const laserLines = document.querySelectorAll('.scroll-laser-line');
        const lineObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('line-expanded');
                } else {
                    entry.target.classList.remove('line-expanded');
                }
            });
        }, { threshold: 0.1 });
        laserLines.forEach(l => lineObs.observe(l));
    }

    observeScrollCards();

    const progressBar = document.getElementById('scrollProgressBar');
    const hudBadge = document.getElementById('scrollHudBadge');
    const hudPercent = document.getElementById('scrollHudPercent');
    const hudSectionName = document.getElementById('scrollHudSectionName');
    const scrollDirIcon = document.getElementById('scrollDirectionIcon');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollTopRingCircle = document.getElementById('scrollTopRingCircle');
    const upAurora = document.getElementById('scrollUpAurora');
    const mainNavbar = document.getElementById('mainNavbar');

    let lastScrollY = window.scrollY || 0;
    let auroraTimeout = null;
    let scrollTicking = false;
    const circumference = 113.1;

    function updateOnScrollFrame() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const deltaY = scrollTop - lastScrollY;
        lastScrollY = scrollTop;

        const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const pct = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));

        if (progressBar) progressBar.style.width = `${pct}%`;
        if (hudPercent) hudPercent.textContent = `${pct}%`;

        if (scrollTopRingCircle) {
            const offset = circumference - (pct / 100) * circumference;
            scrollTopRingCircle.style.strokeDashoffset = offset.toFixed(2);
        }

        if (deltaY < -3) {
            currentScrollDirection = 'up';
            if (scrollDirIcon) {
                scrollDirIcon.className = 'fa-solid fa-arrow-up text-[10px] text-emerald-400 transition-transform duration-300 -translate-y-0.5';
            }
            if (upAurora && scrollTop > 80) {
                upAurora.classList.add('active-up-glow');
                clearTimeout(auroraTimeout);
                auroraTimeout = setTimeout(() => {
                    upAurora.classList.remove('active-up-glow');
                }, 380);
            }
            if (mainNavbar) {
                mainNavbar.style.boxShadow = `0 10px 35px -10px rgba(var(--theme-primary-rgb), 0.22)`;
            }
        } else if (deltaY > 3) {
            currentScrollDirection = 'down';
            if (scrollDirIcon) {
                scrollDirIcon.className = 'fa-solid fa-arrow-down text-[10px] text-red-400 transition-transform duration-300 translate-y-0.5';
            }
            if (mainNavbar) {
                mainNavbar.style.boxShadow = 'none';
            }
        }

        if (scrollTop > 220) {
            if (hudBadge) {
                hudBadge.classList.remove('opacity-0', 'translate-y-3');
                hudBadge.classList.add('opacity-100', 'translate-y-0');
            }
            if (scrollToTopBtn) {
                scrollToTopBtn.classList.remove('btn-hidden');
                scrollToTopBtn.classList.add('btn-visible');
            }
        } else {
            if (hudBadge) {
                hudBadge.classList.add('opacity-0', 'translate-y-3');
                hudBadge.classList.remove('opacity-100', 'translate-y-0');
            }
            if (scrollToTopBtn) {
                scrollToTopBtn.classList.remove('btn-visible');
                scrollToTopBtn.classList.add('btn-hidden');
            }
        }

        if (!activeGlideAnim) {
            const trackedSections = [
                { id: 'founders', label: t('sec_founders') },
                { id: 'about', label: t('sec_about') },
                { id: 'video-showcase', label: t('sec_videos') },
                { id: 'maps-showcase', label: t('sec_maps') }
            ];

            let activeSec = trackedSections[0];
            for (const sec of trackedSections) {
                const el = document.getElementById(sec.id);
                if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.42) {
                    activeSec = sec;
                }
            }

            if (hudSectionName) {
                const dirText = currentScrollDirection === 'up' ? t('hud_scrolling_up') : t('hud_viewing');
                hudSectionName.textContent = `${dirText}: ${activeSec.label}`;
            }

            updateActiveNavPills(activeSec.id);
        }

        scrollTicking = false;
    }

    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(updateOnScrollFrame);
            scrollTicking = true;
        }
    }, { passive: true });
}

function copyDiscordTag(role) {
    const tag = role === 'owner' ? state.owner.username : state.coowner.username;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tag).catch(() => {});
    } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = tag;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }
    playClickSound();
    showToast(`${t('toast_copied')} (${tag})`, 'red');
}

function showToast(message, color = 'red') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    const borderColors = {
        red: 'border-red-500/50 bg-[#17050a]/95 text-red-200',
        emerald: 'border-emerald-500/50 bg-[#071710]/95 text-emerald-200',
        rose: 'border-rose-500/50 bg-[#1c080e]/95 text-rose-200',
        slate: 'border-white/20 bg-[#120a0e]/95 text-slate-200'
    };

    toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-xl shadow-2xl text-xs sm:text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${borderColors[color] || borderColors.red}`;
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-base shrink-0"></i><span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.remove('translate-y-2', 'opacity-0'));
    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

function initTiltCards() {
    // Disable 3D tilt on touch/mobile devices for smoother scrolling
    if (window.matchMedia('(hover: none)').matches) return;
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
        let tiltFrame = null;
        let pointerX = 0;
        let pointerY = 0;

        card.addEventListener('mousemove', (e) => {
            pointerX = e.clientX;
            pointerY = e.clientY;
            if (tiltFrame !== null) return;
            // Reading the rect once per frame keeps the pending layout from being
            // flushed on every single pointer event.
            tiltFrame = requestAnimationFrame(() => {
                tiltFrame = null;
                const rect = card.getBoundingClientRect();
                const x = pointerX - rect.left;
                const y = pointerY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4.5;
                const rotateY = ((x - centerX) / centerX) * 4.5;
                card.style.transform = `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
            });
        });
        card.addEventListener('mouseleave', () => {
            if (tiltFrame !== null) {
                cancelAnimationFrame(tiltFrame);
                tiltFrame = null;
            }
            card.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let scrollBoostY = 0;

    const count = window.innerWidth < 640 ? 24 : 45;
    const particles = Array.from({ length: count }, (_, idx) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.2 + 0.8,
        color: activeParticlePalette[idx % activeParticlePalette.length]
    }));
    window.__studioParticles = particles;
    window.__studioParticleBoost = (boostVal) => {
        scrollBoostY = boostVal;
    };

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        scrollBoostY *= 0.92;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy + scrollBoostY;
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

// =========================================================================
// หน้าโหลดเริ่มต้น (Boot Sequence Preloader)
// =========================================================================
const BOOT_STATUS_MESSAGES = [
    'INITIALIZING DARKSHADOW CORE',
    'LINKING DISCORD GATEWAY',
    'SYNCING ROBLOX PROFILES',
    'CALIBRATING PARTICLE ENGINE',
    'ACCESS GRANTED'
];

function initBootPreloader() {
    const preloader = document.getElementById('bootPreloader');
    if (!preloader) {
        document.documentElement.classList.remove('boot-locked');
        return;
    }

    const fillBar = document.getElementById('bootProgressFill');
    const percentLabel = document.getElementById('bootProgressPercent');
    const statusLabel = document.getElementById('bootStatusText');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const minVisibleMs = reduceMotion ? 400 : 1500;
    const statusIntervalMs = reduceMotion ? 180 : 480;
    const startedAt = performance.now();
    const initialScrollY = window.scrollY || document.documentElement.scrollTop || 0;

    let progress = 0;
    let target = 0;
    let statusIndex = 0;
    let frameId = null;
    let statusTimer = null;
    let isFinishing = false;
    let isReleased = false;

    const renderProgress = () => {
        if (fillBar) fillBar.style.width = `${progress}%`;
        if (percentLabel) percentLabel.textContent = `${String(Math.round(progress)).padStart(3, '0')}%`;
    };

    const animateProgress = () => {
        frameId = null;
        const gap = target - progress;
        if (Math.abs(gap) < 0.4) {
            progress = target;
            renderProgress();
            return;
        }
        progress += gap * 0.09;
        renderProgress();
        frameId = requestAnimationFrame(animateProgress);
    };

    const setProgressTarget = (value) => {
        target = Math.max(target, Math.min(100, value));
        if (frameId === null) frameId = requestAnimationFrame(animateProgress);
    };

    const advanceStatus = () => {
        statusIndex = Math.min(statusIndex + 1, BOOT_STATUS_MESSAGES.length - 2);
        if (statusLabel) statusLabel.textContent = BOOT_STATUS_MESSAGES[statusIndex];
    };

    const releasePreloader = () => {
        if (isReleased) return;
        isReleased = true;

        document.documentElement.classList.remove('boot-locked');
        if (initialScrollY > 0) {
            window.scrollTo(0, initialScrollY);
            window.dispatchEvent(new Event('scroll'));
        }

        preloader.classList.add('is-dismissing');
        window.setTimeout(() => preloader.remove(), reduceMotion ? 400 : 950);
    };

    const finishBoot = () => {
        if (isFinishing) return;
        isFinishing = true;

        window.clearInterval(statusTimer);
        statusTimer = null;
        if (statusLabel) statusLabel.textContent = BOOT_STATUS_MESSAGES[BOOT_STATUS_MESSAGES.length - 1];
        setProgressTarget(100);

        const remainingMs = Math.max(0, minVisibleMs - (performance.now() - startedAt));
        window.setTimeout(releasePreloader, remainingMs + (reduceMotion ? 0 : 350));
    };

    let assetsLoaded = document.readyState === 'complete';
    let fontsReady = !document.fonts;
    const finishWhenReady = () => {
        if (assetsLoaded && fontsReady) finishBoot();
    };

    setProgressTarget(reduceMotion ? 100 : 92);
    renderProgress();
    statusTimer = window.setInterval(advanceStatus, statusIntervalMs);

    if (assetsLoaded) {
        finishWhenReady();
    } else {
        window.addEventListener('load', () => {
            assetsLoaded = true;
            finishWhenReady();
        }, { once: true });
    }

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            fontsReady = true;
            finishWhenReady();
        }).catch(() => {
            fontsReady = true;
            finishWhenReady();
        });
    }

    // Safety net: don't keep the page covered if a request stalls.
    window.setTimeout(finishBoot, 8000);
}

function initCursorSpotlight() {
    // The spotlight element is the only consumer of these custom properties. Writing
    // them there instead of on <html> keeps the style invalidation off the other 700
    // elements, and coalescing to one write per frame avoids a recalculation per event.
    const spotlight = document.querySelector('.cursor-spotlight');
    if (!spotlight) return;

    let pendingFrame = null;
    let cursorX = 0;
    let cursorY = 0;

    window.addEventListener('mousemove', (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
        if (pendingFrame !== null) return;
        pendingFrame = requestAnimationFrame(() => {
            pendingFrame = null;
            spotlight.style.setProperty('--cursor-x', `${cursorX}px`);
            spotlight.style.setProperty('--cursor-y', `${cursorY}px`);
        });
    }, { passive: true });
}

window.addEventListener('DOMContentLoaded', () => {
    const navDiscordBtn = document.getElementById('navDiscordServerLink');
    const footerDiscordBtn = document.getElementById('footerDiscordServerLink');
    if (navDiscordBtn && DISCORD_SERVER_INVITE_URL) navDiscordBtn.href = DISCORD_SERVER_INVITE_URL;
    if (footerDiscordBtn && DISCORD_SERVER_INVITE_URL) footerDiscordBtn.href = DISCORD_SERVER_INVITE_URL;

    loadSavedTheme();
    loadSavedState();
    loadSavedLanguage();
    initBootPreloader();
    initTiltCards();
    initCursorSpotlight();
    initParticles();
    initAdvancedScrollAnimations();
    syncAllDiscordProfiles(false);
});
