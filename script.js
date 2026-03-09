/**
 * Portfolio Website JavaScript
 * Handles theme toggle, portfolio filtering, and dynamic content rendering
 */

// Portfolio data structure for easy management and addition of new items
const portfolioItems = [
  {
    id: 1,
    title: "Headless Mask",
    description: "Mask with text \"HEADLESS\"",
    image: "./Assets/images/HEADLESSmodelPortfolioImage.png",
    date: "Feb 22, 2026",
    timeTaken: "30 minutes",
    tags: ["3d", "model", "modeling", "head", "roblox"],
    link: "https://www.roblox.com/catalog/113493087079243/HEADLESS-Mask",
    linkText: "View on Roblox",
    type: "image"
  },
  {
    id: 2,
    title: "Hustler Cap",
    description: "Black cap with text \"Hustler\".",
    image: "./Assets/images/HustlerCapPortfolioImage.png",
    date: "Feb 21, 2026",
    timeTaken: "90 minutes",
    tags: ["3d", "model", "modeling", "cap", "roblox"],
    link: "https://www.roblox.com/catalog/119091969302250/Hustler-Cap",
    linkText: "View on Roblox",
    type: "image"
  },
  {
    id: 3,
    title: "THE BIG LEAGUE",
    description: "Skin sphere with the text \"BIG LEAGUE\"",
    image: "./Assets/images/BigLeaguemodelPortfolioImage.png",
    date: "Jan 10, 2026",
    timeTaken: "1 hour",
    tags: ["3d", "model", "modeling", "sphere", "roblox"],
    link: "https://www.roblox.com/catalog/97111423090018/THE-BIG-LEAGUE",
    linkText: "View on Roblox",
    type: "image"
  },
  {
    id: 4,
    title: "Community Booth",
    description: "Showcase of a community booth design and implementation.",
    image: "https://img.youtube.com/vi/icnSmcAY5pY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=icnSmcAY5pY",
    date: "2024",
    timeTaken: "Few hours maybe",
    tags: ["scripting", "gameplay", "group", "roblox"],
    link: "https://www.youtube.com/watch?v=icnSmcAY5pY",
    linkText: "Watch on YouTube",
    type: "video"
  },
  {
    id: 5,
    title: "Idol Tool",
    description: "An odd looking idol as a Roblox tool.",
    image: "./Assets/images/IdolToolPortfolioImage.png",
    date: "March 6, 2026",
    timeTaken: "15 minutes",
    tags: ["3d", "model", "modeling", "sculpting", "roblox", "studio", "tool"],
    type: "image"
  },
  {
    id: 6,
    title: "Proximity Prompt Collision Door",
    description: "Showcase of a proximity prompt collision door implementation.",
    image: "https://img.youtube.com/vi/ZDPpYGJUDy8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ZDPpYGJUDy8",
    date: "Aug 14, 2025",
    timeTaken: "5 minutes",
    tags: ["scripting", "gameplay", "roblox"],
    link: "https://www.youtube.com/watch?v=ZDPpYGJUDy8",
    linkText: "Watch on YouTube",
    type: "video"
  },
  {
    id: 7,
    title: "Burning Skibidi Toilet Spawner Tool",
    description: "Showcase of a burning skibidi toilet spawner tool implementation.",
    image: "https://img.youtube.com/vi/0XPHTan12Cg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=0XPHTan12Cg",
    date: "Dec 22, 2025",
    timeTaken: "1 hour",
    tags: ["scripting", "tool", "gameplay", "roblox"],
    link: "https://www.youtube.com/watch?v=0XPHTan12Cg",
    linkText: "Watch on YouTube",
    type: "video"
  },
  {
    id: 8,
    title: "Stud collection system",
    description: "Showcase of a stud collection system implementation.",
    image: "https://img.youtube.com/vi/vP87Yyb0fI0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vP87Yyb0fI0",
    date: "Late 2025",
    timeTaken: "A couple days",
    tags: ["scripting", "data", "system", "gameplay", "roblox"],
    link: "https://www.youtube.com/watch?v=vP87Yyb0fI0",
    linkText: "Watch on YouTube",
    type: "video"
  },
  {
    id: 9,
    title: "Game Lobby \"Developer's mind\"",
    description: "Showcase of a game lobby build",
    image: "./Assets/images/DevelopersMindGameLobbyPortfolioImage.png",
    date: "2025",
    timeTaken: "Multiple hours",
    tags: ["3d", "build", "building", "lobby", "environment", "roblox"],
    type: "image"
  },
  {
    id: 10,
    title: "Large Blocky Island",
    description: "Showcase of a large blocky island build.",
    image: "./Assets/images/LargeBlockyIslandPortfolioImage.png",
    date: "2025",
    timeTaken: "One or two hours",
    tags: ["3d", "build", "building", "environment", "roblox"],
    type: "image"
  },
  {
    id: 11,
    title: "Crude machine gun using raycasts",
    description: "Showcase of a crude machine gun implementation using raycasts.",
    image: "https://img.youtube.com/vi/VkIAxPZ926g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VkIAxPZ926g",
    date: "2024",
    timeTaken: "Few hours",
    tags: ["scripting", "tool", "gameplay", "roblox"],
    link: "https://www.youtube.com/watch?v=VkIAxPZ926g",
    linkText: "Watch on YouTube",
    type: "video"
  },
  {
    id: 12,
    title: "Developer Menu UI",
    description: "Showcase of a developer menu UI implementation.",
    image: "./Assets/images/DeveloperMenuUIPortfolioImage.png",
    date: "2025",
    timeTaken: "30 minutes",
    tags: ["ui", "design", "scripting", "roblox"],
    type: "image"
  },
  {
    id: 13,
    title: "Blocky Islands Build",
    description: "Showcase of a blocky islands build.",
    image: "./Assets/images/BlockyIslandsBuildPortfolioImage.png",
    date: "2025",
    timeTaken: "One or two hours",
    tags: ["3d", "build", "building", "studio", "environment", "roblox"],
    type: "image"
  },
  {
    id: 14,
    title: "Health Bar UI",
    description: "Showcase of a health bar UI implementation. Functional.",
    image: "./Assets/images/HealthBarUIPortfolioImage.png",
    date: "2025",
    timeTaken: "Max 20 minutes",
    tags: ["ui", "design", "scripting", "roblox"],
    type: "image"
  },
  {
    id: 15,
    title: "Maintenance Asset Pack",
    description: "Showcase of a maintenance asset pack. Models for differing usage built inside of Roblox Studio.",
    image: "./Assets/images/MaintenanceAssetPackPortfolioImage.png",
    date: "2025",
    timeTaken: "1 Hour",
    tags: ["3d", "model", "modeling", "studio", "roblox"],
    type: "image"
  },
  {
    id: 16,
    title: "Main Menu UI",
    description: "Showcase of a main menu implementation.",
    image: "./Assets/images/UIwork1PortfolioImage.png",
    date: "2025",
    timeTaken: "10 minutes",
    tags: ["ui", "design", "scripting", "roblox"],
    type: "image"
  },
  {
    id: 17,
    title: "Tycoon Game",
    description: "Showcase of a tycoon game. It was scripted using a tutorial.",
    image: "./Assets/images/TycoonGamePortfolioImage.png",
    date: "2025",
    timeTaken: "2 hours",
    tags: ["scripting", "tutorial", "system", "roblox"],
    type: "image"
  },
  {
    id: 18,
    title: "Command Prompt UI system",
    description: "Showcase of a command prompt UI system implementation.",
    image: "https://img.youtube.com/vi/7sWp74me2ts/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=7sWp74me2ts",
    date: "2025",
    timeTaken: "A day or two",
    tags: ["scripting", "ui", "system", "gameplay", "roblox"],
    link: "https://www.youtube.com/watch?v=7sWp74me2ts",
    linkText: "Watch on YouTube",
    type: "video"
  },
  {
    id: 19,
    title: "A night club with flashing lights",
    description: "Showcase of a night club build with flashing lights.",
    image: "./Assets/images/ClubBuildLightsPortfolioImage.png",
    date: "2025",
    timeTaken: "A few hours",
    tags: ["studio", "building", "lighting", "build", "environment", "roblox"],
    type: "image"
  },
  {
    id: 20,
    title: "Randomized Boulder Spawner",
    description: "Showcase of a randomized boulder spawner implementation.",
    image: "https://img.youtube.com/vi/Zt7LRzNjD6k/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Zt7LRzNjD6k",
    date: "2025",
    timeTaken: "A few hours",
    tags: ["scripting", "system", "gameplay", "roblox", "ai", "npc", "scp", "module"],
    link: "https://www.youtube.com/watch?v=Zt7LRzNjD6k",
    linkText: "Watch on YouTube",
    type: "video"
  },
  {
    id: 21,
    title: "Exploding Duck Bomb Tool",
    description: "A fun and explosive tool for Roblox.",
    image: "./Assets/images/ExplodingDuckBombToolPortfolioImage.png",
    date: "2024",
    timeTaken: "Max 5 minutes",
    tags: ["3d", "model", "modeling", "sculpting", "roblox", "studio", "tool"],
    link: "https://create.roblox.com/store/asset/136474677018468/Exploding-Duck-Bomb-Tool",
    linkText: "View on Roblox",
    type: "image"
  }
];

// Function to create a portfolio card element
function createPortfolioCard(item) {
  const card = document.createElement('div');
  card.className = 'portfolio-card bg-white dark:bg-black dark:border dark:border-green-400 shadow-md overflow-hidden flex flex-col';
  card.setAttribute('data-tags', item.tags.join(','));

  let mediaContent = '';

  if (item.type === 'video') {
    mediaContent = `
      <div class="aspect-square w-full bg-gray-100 dark:bg-gray-800 relative cursor-pointer group" onclick="window.open('${item.videoUrl}', '_blank')">
        <img src="${item.image}" alt="${item.title} Video Thumbnail" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
          <div class="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm">
          YouTube
        </div>
      </div>
    `;
  } else {
    mediaContent = `
      <div class="aspect-square w-full">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-contain">
      </div>
    `;
  }

  const linkHtml = item.link ? `<a href="${item.link}" ${item.link.includes('youtube.com') ? 'target="_blank"' : ''} class="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300">${item.linkText}</a>` : '';

  card.innerHTML = `
    ${mediaContent}
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 dark:text-white">${item.title}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">${item.description}</p>
      <div class="text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
        <p>Date: ${item.date}</p>
        <p>Time Taken: ${item.timeTaken}</p>
      </div>
      ${linkHtml}
    </div>
  `;

  return card;
}

// Function to render all portfolio items
function renderPortfolio(items = portfolioItems) {
  const portfolioGrid = document.getElementById('portfolio-grid');
  if (!portfolioGrid) return;

  portfolioGrid.innerHTML = '';
  items.forEach(item => {
    const card = createPortfolioCard(item);
    portfolioGrid.appendChild(card);
  });
}

// Function to add a new portfolio item (for easy addition)
function addPortfolioItem(item) {
  portfolioItems.push(item);
  renderPortfolio();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Portfolio search/filter functionality
function initializePortfolioSearch() {
  const searchInput = document.getElementById('portfolio-search');
  const noResultsMsg = document.getElementById('portfolio-no-results');

  if (!searchInput) return;

  function filterPortfolio() {
    const query = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.portfolio-card');

    if (!query) {
      cards.forEach(card => {
        card.style.display = '';
      });
      if (noResultsMsg) noResultsMsg.classList.add('hidden');
      return;
    }

    const terms = query.split(/\s+/); // This splits it into multiple terms, like model sphere, for more exact.
    let visibleCount = 0;

    cards.forEach(card => {
      const tags = (card.dataset.tags || '').toLowerCase();
      const text = card.innerText.toLowerCase();
      const matches = terms.every(term => tags.includes(term) || text.includes(term));
// Add more things to the search process, figure out what all these words do, like query.split, bla bla. 
      if (matches) {
        card.style.display = '';
        visibleCount++; //dafuq är detta?
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsMsg) {
      noResultsMsg.classList.toggle('hidden', visibleCount > 0);
    }
  }

  // Debounced search
  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterPortfolio, 150);
  });
}

// Dark mode toggle functionality
function initializeThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const html = document.documentElement;

  if (!themeToggle || !sunIcon || !moonIcon) return;

  function updateIcons(isDark) {
    sunIcon.classList.toggle('hidden', !isDark);
    moonIcon.classList.toggle('hidden', isDark);
  }

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  const isDark = savedTheme === 'dark';
  html.classList.toggle('dark', isDark);
  updateIcons(isDark);

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const isDarkNow = html.classList.toggle('dark');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    updateIcons(isDarkNow);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  initializePortfolioSearch();
  initializeThemeToggle();
});
