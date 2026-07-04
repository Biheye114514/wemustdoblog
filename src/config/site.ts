export const defaultLocale = "zh";

export const locales = {
	zh: {
		label: "中文",
		lang: "zh-CN",
		path: "/",
	},
	en: {
		label: "English",
		lang: "en",
		path: "/en/",
	},
} as const;

export type Locale = keyof typeof locales;

const shared = {
	name: "Biheye",
	email: "2609260660@qq.com",
	emailIcon: "@",
	avatar: "/avatar.png",
	visitorCount: "0001",
	background: {
		image: "",
		blur: "0px",
		opacity: 0,
		scale: 1,
		overlay: "radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 30%), linear-gradient(180deg, #050505 0%, #000 55%, #090909 100%)",
		rain: {
			enabled: false,
			mode: "falling",
			density: 0.7,
			speed: 1,
			dropColor: "rgba(210, 230, 255, 0.5)",
			rippleColor: "rgba(210, 230, 255, 0.34)",
			maxDrops: 170,
			maxRipples: 48,
		},
	},
	socials: [
		{ label: "GitHub", href: "https://github.com/Biheye114514", icon: "GH" },
		{ label: "B站", href: "https://space.bilibili.com/94217775?spm_id_from=333.1007.0.0", icon: "B" },
		{ label: "Folo", href: "https://folo.is", icon: "F" },
	],
};

const siteConfigs = {
	zh: {
		...shared,
		title: "一个水货的个人博客",
		description: "记录日常学习、番剧感想、技术交流和一些慢慢折腾出来的小东西。",
		nav: [
			{ label: "首页", href: "/" },
			{ label: "关于我", href: "/about" },
			{ label: "项目", href: "/projects" },
			{ label: "博客", href: "/blog" },
			{ label: "图谱", href: "/graph" },
			{ label: "简历", href: "/resume" },
			{ label: "联系", href: "/contact" },
		],
		quickLinks: [
			{ label: "博客", href: "/blog", icon: "书" },
			{ label: "项目", href: "/projects", icon: "作" },
			{ label: "关于", href: "/about", icon: "我" },
			{ label: "简历", href: "/resume", icon: "历" },
			{ label: "联系", href: "/contact", icon: "@" },
		],
		today: {
			title: "今日小状态",
			current: "正在：学习一点新东西",
			next: "稍后：补一篇番剧感想",
			note: "今日目标：把想法好好留下来",
			timeLabel: "我的当前时间",
			timeZone: "Asia/Shanghai",
			dateLocale: "zh-CN",
			greetings: ["凌晨好", "早上好", "上午好", "中午好", "下午好", "晚上好"],
		},
		ui: {
			headerCta: "打个招呼",
			projectCta: "查看项目 ->",
			projectLiveCta: "访问项目",
			projectRepoCta: "查看代码",
			backToList: "返回列表",
			socialCardCta: "查看主页",
		},
		home: {
			eyebrowNote: "一个水货的主页入口，放学习记录、番剧感想和技术折腾。",
			visitorText: "访客编号 #{count}，欢迎翻翻这个小角落",
			headline: "一个水货，也想把学到的、看过的、想到的都认真留下来。",
			intro: "这里会记录日常学习、技术交流、番剧感想，以及一些不一定成熟但确实折腾过的小项目。慢慢写，慢慢改，慢慢变成自己的资料库。",
			primaryCta: { label: "看看博客", href: "/blog" },
			secondaryCta: { label: "打个招呼", href: "/contact" },
		},
		pages: {
			home: {
				title: "首页",
				description: "一个水货的个人博客，记录学习、番剧、技术和日常。",
				modules: [
					{ type: "homeHero" },
					{
						type: "linkGrid", props: {
							items: [
								{ label: "日常学习与笔记", href: "/blog" },
								{ label: "番剧感想与碎碎念", href: "/blog" },
								{ label: "技术交流与折腾记录", href: "/projects" },
								{ label: "关于这个水货", href: "/about" },
							]
						}
					},
					{
						type: "projectGrid",
						props: {
							kicker: "Small Builds",
							title: "最近折腾的小东西",
							description: "不一定成熟，也不一定厉害，但每一个都记录了一点学习和试错的过程。",
							featuredOnly: true,
							limit: 3,
							columns: 3,
						},
					},
					{
						type: "blogPreview",
						props: {
							kicker: "Notes",
							title: "最新碎碎念",
							description: "学习记录、技术想法、番剧感想和日常观察，都可以变成 Markdown 里的小片段。",
							limit: 3,
						},
					},
					{ type: "contactPanel" },
				],
			},
			about: {
				title: "关于我",
				description: "关于一个水货的学习方向、兴趣和博客记录。",
				modules: [
					{
						type: "aboutIntro",
						props: {
							kicker: "About",
							heading: "一个水货，正在学习、看番、写点技术和日常。",
							intro: "这里不是很厉害的作品集，更像一个慢慢整理出来的个人角落。",
							profileLabel: "Profile",
							profile: "一个水货。喜欢把学到的东西、看完的番剧、踩过的坑和偶尔冒出来的想法写下来。",
							paragraphs: [
								"这个博客会主要记录日常学习、番剧感想和技术交流。有些内容可能只是阶段性的理解，但留下来以后就能回头看见自己是怎么一点点变化的。",
								"我希望这里既能放认真整理的笔记，也能放轻一点的碎碎念。技术可以慢慢学，表达也可以慢慢练。",
							],
						},
					},
					{
						type: "gameList",
						props: {
							title: "这里会放什么",
							description: "目前先把博客当成一个长期记录入口，以后可以继续加自定义板块。",
							items: [
								{ label: "日常学习", description: "记录课程、阅读、工具使用、阶段性复盘和学到的新东西。" },
								{ label: "番剧感想", description: "写一些看番后的想法、角色印象、剧情感受和个人推荐。" },
								{ label: "技术交流", description: "整理开发经验、踩坑记录、前端实践和可以分享的小技巧。" },
								{ label: "个人折腾", description: "放一些小项目、页面改造、灵感记录和未完成的尝试。" },
							],
						},
					},
					{
						type: "skillCloud",
						props: {
							title: "技能栈",
							skills: ["Astro", "TypeScript", "Tailwind CSS", "Markdown", "日常学习", "番剧感想", "技术交流"],
						},
					},
					{ type: "contactPanel" },
				],
			},
			projects: {
				title: "项目 / 作品集",
				description: "一些小项目、技术练习和折腾记录。",
				modules: [
					{
						type: "projectGrid",
						props: {
							kicker: "Portfolio",
							title: "项目 / 折腾记录",
							description: "这里展示个人练习、小项目、页面改造和技术实验。",
							columns: 2,
							largePadding: true,
						},
					},
				],
			},
			blog: {
				title: "博客 / 笔记",
				description: "关于日常学习、番剧感想、技术交流和生活观察的笔记。",
				modules: [
					{
						type: "blogIndex",
						props: {
							kicker: "Notes",
							title: "博客 / 笔记",
							description: "用 Markdown 记录日常学习、番剧感想、技术交流和生活里的碎碎念。草稿文章会在列表中自动过滤。",
							labels: {
								search: "搜索标题、摘要或标签",
								all: "全部",
								empty: "没有找到符合条件的笔记。",
							},
						},
					},
				],
			},
			graph: {
				title: "知识图谱",
				description: "由博客标签和双链生成的知识图谱。",
				modules: [
					{
						type: "knowledgeGraph",
						props: {
							kicker: "Graph",
							title: "知识图谱",
							description: "每篇笔记都是一个节点，在这里可以看见整个知识库的结构。",
						},
					},
				],
			},
			resume: {
				title: "简历 / 经历",
				description: "学习记录、技能、项目和个人经历。",
				profileLabel: "Profile",
				emailLabel: "Email",
				linksLabel: "Links",
				skillsLabel: "Skills",
				highlightsLabel: "Highlights",
				modules: [
					{
						type: "resume",
						props: {
							kicker: "Resume",
							title: "简历 / 经历",
							description: "此页面可以展示学习经历、项目经验、技能和可下载的简历文件。当前内容来自 src/config/site.ts。",
						},
					},
				],
			},
			contact: {
				title: "联系方式",
				description: "联系这个个人网站的作者。",
				modules: [
					{
						type: "contactCards",
						props: {
							kicker: "Contact",
							heading: "关于学习、番剧、技术或这个博客，都欢迎来聊。",
							intro: "这里放着 Email、GitHub、Bilibili 等公开联系方式。",
						},
					},
					{ type: "contactPanel" },
				],
			},
		},
		contactPanel: {
			kicker: "Message",
			heading: "如果你在这里发现了有意思的笔记、番剧感想或技术记录，欢迎打个招呼。",
		},
		skills: ["Astro", "TypeScript", "Tailwind CSS", "Markdown", "日常学习", "番剧感想", "技术交流"],
		resume: {
			summary: "一个水货的个人记录区，用来放学习经历、技能、项目和之后可能会补上的简历文件。",
			details: [
				{ label: "Location", value: "Campus / Online" },
				{ label: "Focus", value: "日常学习 / 番剧感想 / 技术交流" },
			],
			links: [
				{ label: "Projects", href: "/projects" },
				{ label: "Notes", href: "/blog" },
				{ label: "Contact", href: "/contact" },
			],
			files: [],
			highlights: ["记录日常学习和阶段性复盘", "整理番剧感想、技术笔记和小项目"],
			sections: [
				{
					title: "Experience",
					items: [
						{
							period: "2025 - Now",
							title: "日常学习记录者",
							org: "学习与空闲时间",
							description: "把学到的知识、技术折腾和个人兴趣整理成可以回头看的笔记。",
							points: ["学习", "技术", "记录"],
							link: [],
						},
						{
							period: "2024 - 2025",
							title: "个人博客维护中",
							org: "自学与折腾",
							description: "用 Astro、TypeScript、Tailwind CSS 和 Markdown 搭建自己的内容空间。",
							points: ["Astro", "Markdown", "博客"],
							link: [],
						},
					],
				},
			],
		},
	},
	en: {
		...shared,
		title: "A Casual Personal Blog",
		description: "Daily learning notes, anime thoughts, tech conversations, and small experiments.",
		nav: [
			{ label: "Home", href: "/" },
			{ label: "About", href: "/about" },
			{ label: "Projects", href: "/projects" },
			{ label: "Blog", href: "/blog" },
			{ label: "Graph", href: "/graph" },
			{ label: "Resume", href: "/resume" },
			{ label: "Contact", href: "/contact" },
		],
		quickLinks: [
			{ label: "Blog", href: "/blog", icon: "N" },
			{ label: "Projects", href: "/projects", icon: "P" },
			{ label: "About", href: "/about", icon: "A" },
			{ label: "Resume", href: "/resume", icon: "R" },
			{ label: "Contact", href: "/contact", icon: "@" },
		],
		today: {
			title: "Today",
			current: "Now: learning something new",
			next: "Next: write an anime note",
			note: "Goal: keep the ideas somewhere I can revisit",
			timeLabel: "My current time",
			timeZone: "Asia/Shanghai",
			dateLocale: "en-US",
			greetings: ["Good late night", "Good early morning", "Good morning", "Good noon", "Good afternoon", "Good evening"],
		},
		ui: {
			headerCta: "Say hi",
			projectCta: "View project ->",
			projectLiveCta: "Visit project",
			projectRepoCta: "View code",
			backToList: "Back to list",
			socialCardCta: "View profile",
		},
		home: {
			eyebrowNote: "A personal corner for learning notes, anime thoughts, and technical tinkering.",
			visitorText: "Visitor #{count}, welcome to this small corner",
			headline: "Not an expert, just trying to keep what I learn, watch, and think in one place.",
			intro: "This blog records daily learning, anime impressions, technical notes, and small experiments that may or may not become polished projects.",
			primaryCta: { label: "Read the blog", href: "/blog" },
			secondaryCta: { label: "Contact me", href: "/contact" },
		},
		pages: {
			home: {
				title: "Home",
				description: "A personal blog for learning, anime, technology, and daily notes.",
				modules: [
					{ type: "homeHero" },
					{
						type: "linkGrid", props: {
							items: [
								{ label: "Daily learning notes", href: "/blog" },
								{ label: "Anime thoughts", href: "/blog" },
								{ label: "Tech notes and experiments", href: "/projects" },
								{ label: "About this blog", href: "/about" },
							]
						}
					},
					{
						type: "projectGrid",
						props: {
							kicker: "Small Builds",
							title: "Recent experiments",
							description: "Not always polished, but each one keeps a trace of learning and trial-and-error.",
							featuredOnly: true,
							limit: 3,
							columns: 3,
						},
					},
					{
						type: "blogPreview",
						props: {
							kicker: "Notes",
							title: "Latest notes",
							description: "Learning notes, tech ideas, anime impressions, and daily observations can all become small Markdown entries.",
							limit: 3,
						},
					},
					{ type: "contactPanel" },
				],
			},
			about: {
				title: "About",
				description: "About a casual learner's interests, notes, and blog direction.",
				modules: [
					{
						type: "aboutIntro",
						props: {
							kicker: "About",
							heading: "A casual learner writing about study, anime, technology, and daily life.",
							intro: "This is less of a polished portfolio and more of a personal corner that grows over time.",
							profileLabel: "Profile",
							profile: "Someone who likes keeping notes about what I learn, what I watch, the bugs I meet, and the ideas that show up along the way.",
							paragraphs: [
								"This blog focuses on daily learning, anime impressions, and technical conversations. Some posts may be rough, but they still show how my thinking changes over time.",
								"I want this place to hold both serious notes and lighter thoughts. Skills can grow slowly, and writing can too.",
							],
						},
					},
					{
						type: "gameList",
						props: {
							title: "What goes here",
							description: "For now, this blog is a long-term record. More custom sections can be added later.",
							items: [
								{ label: "Daily Learning", description: "Notes about courses, reading, tools, reviews, and new things learned." },
								{ label: "Anime Thoughts", description: "Impressions, characters, stories, and personal recommendations." },
								{ label: "Tech Talk", description: "Development notes, debugging records, frontend practice, and small tips." },
								{ label: "Personal Experiments", description: "Small projects, page tweaks, ideas, and unfinished attempts." },
							],
						},
					},
					{
						type: "skillCloud",
						props: {
							title: "Skills",
							skills: ["Astro", "TypeScript", "Tailwind CSS", "Markdown", "Daily Learning", "Anime Notes", "Tech Talk"],
						},
					},
					{ type: "contactPanel" },
				],
			},
			projects: {
				title: "Projects / Experiments",
				description: "Small projects, technical practice, and experiment records.",
				modules: [
					{
						type: "projectGrid",
						props: {
							kicker: "Portfolio",
							title: "Projects / Experiments",
							description: "Personal practice, small projects, page tweaks, and technical experiments.",
							columns: 2,
							largePadding: true,
						},
					},
				],
			},
			blog: {
				title: "Blog / Notes",
				description: "Notes about daily learning, anime thoughts, technology, and life.",
				modules: [
					{
						type: "blogIndex",
						props: {
							kicker: "Notes",
							title: "Blog / Notes",
							description: "Write daily learning notes, anime thoughts, technical conversations, and small observations in Markdown. Drafts are hidden from lists automatically.",
							labels: {
								search: "Search title, summary, or tags",
								all: "All",
								empty: "No notes match the current filters.",
							},
						},
					},
				],
			},
			graph: {
				title: "Knowledge Graph",
				description: "A knowledge graph generated from wiki links in blog posts.",
				modules: [
					{
						type: "knowledgeGraph",
						props: {
							kicker: "Graph",
							title: "Knowledge Graph",
							description: "Each note is a node. Wiki links create connections between notes.",
						},
					},
				],
			},
			resume: {
				title: "Resume / Experience",
				description: "Learning records, skills, projects, and personal experience.",
				profileLabel: "Profile",
				emailLabel: "Email",
				linksLabel: "Links",
				skillsLabel: "Skills",
				highlightsLabel: "Highlights",
				modules: [
					{
						type: "resume",
						props: {
							kicker: "Resume",
							title: "Resume / Experience",
							description: "Use this page for learning experience, projects, skills, and resume files. The current content comes from src/config/site.ts.",
						},
					},
				],
			},
			contact: {
				title: "Contact",
				description: "Contact the author of this personal website.",
				modules: [
					{
						type: "contactCards",
						props: {
							kicker: "Contact",
							heading: "Feel free to talk about learning, anime, technology, or this blog.",
							intro: "Email, GitHub, Bilibili, and other public links live here.",
						},
					},
					{ type: "contactPanel" },
				],
			},
		},
		contactPanel: {
			kicker: "Message",
			heading: "If you find an interesting note, anime thought, or technical record here, feel free to say hi.",
		},
		skills: ["Astro", "TypeScript", "Tailwind CSS", "Markdown", "Daily Learning", "Anime Notes", "Tech Talk"],
		resume: {
			summary: "A personal record area for learning experience, skills, projects, and future resume files.",
			details: [
				{ label: "Location", value: "Campus / Online" },
				{ label: "Focus", value: "Daily Learning / Anime Notes / Tech Talk" },
			],
			links: [
				{ label: "Projects", href: "/projects" },
				{ label: "Notes", href: "/blog" },
				{ label: "Contact", href: "/contact" },
			],
			files: [],
			highlights: ["Recording daily learning and periodic reviews", "Organizing anime thoughts, technical notes, and small projects"],
			sections: [
				{
					title: "Experience",
					items: [
						{
							period: "2025 - Now",
							title: "Daily Learning Note Taker",
							org: "Study and spare time",
							description: "Turning learning, technical tinkering, and personal interests into notes I can revisit.",
							points: ["Learning", "Tech", "Notes"],
							link: [],
						},
						{
							period: "2024 - 2025",
							title: "Personal Blog Maintainer",
							org: "Self-learning and experiments",
							description: "Building a personal content space with Astro, TypeScript, Tailwind CSS, and Markdown.",
							points: ["Astro", "Markdown", "Blog"],
							link: [],
						},
					],
				},
			],
		},
	},
} as const;

export function isLocale(locale: string | undefined): locale is Locale {
	return locale === "zh" || locale === "en";
}

export function getLocaleFromUrl(url: URL): Locale {
	const firstSegment = url.pathname.split("/").filter(Boolean)[0];
	return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function localizePath(locale: Locale, path: string): string {
	if (path.startsWith("http") || path.startsWith("mailto:")) return path;
	if (locale === defaultLocale) return path;
	if (path === "/") return `/${locale}/`;
	if (path.startsWith(`/${locale}/`)) return path;
	return `/${locale}${path}`;
}

function localizeModuleLinks(module: { type: string; props?: Record<string, unknown> }, locale: Locale) {
	if (module.type === "gameList" || module.type === "linkGrid") {
		const props = module.props as { items?: Array<string | { href?: string }> } | undefined;
		return {
			...module,
			props: {
				...module.props,
				items: props?.items?.map((item) => (
					typeof item === "string" ? item : { ...item, href: item.href ? localizePath(locale, item.href) : item.href }
				)),
			},
		};
	}

	return module;
}

function localizeSiteLinks<T extends typeof siteConfigs[Locale]>(config: T, locale: Locale): T {
	return {
		...config,
		nav: config.nav.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		quickLinks: config.quickLinks.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		home: {
			...config.home,
			primaryCta: { ...config.home.primaryCta, href: localizePath(locale, config.home.primaryCta.href) },
			secondaryCta: { ...config.home.secondaryCta, href: localizePath(locale, config.home.secondaryCta.href) },
		},
		pages: {
			...config.pages,
			...Object.fromEntries(
				Object.entries(config.pages).map(([key, page]) => [
					key,
					"modules" in page
						? { ...page, modules: page.modules.map((module: { type: string; props?: Record<string, unknown> }) => localizeModuleLinks(module, locale)) }
						: page,
				]),
			),
		},
		resume: {
			...config.resume,
			links: config.resume.links.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		},
	} as T;
}

export function getSiteConfig(localeOrUrl: Locale | URL = defaultLocale) {
	const locale = localeOrUrl instanceof URL ? getLocaleFromUrl(localeOrUrl) : localeOrUrl;
	return localizeSiteLinks(siteConfigs[locale], locale);
}

export const siteConfig = getSiteConfig(defaultLocale);
