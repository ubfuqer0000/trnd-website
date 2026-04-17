import IconPR from '../assets/icons/icon-pr-corporate.svg?react';
import IconMarketingComms from '../assets/icons/icon-marketing-comms.svg?react';
import IconNonprofit from '../assets/icons/icon-user-cap.svg?react';
import IconStorytelling from '../assets/icons/icon-storytelling.svg?react';
import IconSponsorship from '../assets/icons/icon-sponsorship.svg?react';
import IconPlanning from '../assets/icons/icon-strategy.svg?react';
import IconCreative from '../assets/icons/icon-box-3d.svg?react';
import Icon360 from '../assets/icons/icon-360-view.svg?react';
import IconDigital from '../assets/icons/icon-chart-growth.svg?react';
import IconEvent from '../assets/icons/icon-event-stadium.svg?react';
import IconMediaBuying from '../assets/icons/icon-media-buying.svg?react';
import IconBranding from '../assets/icons/icon-branding-r.svg?react';
import IconCommercials from '../assets/icons/icon-video-camera.svg?react';
import IconDocumentaries from '../assets/icons/icon-film-strip.svg?react';
import Icon3D from '../assets/icons/icon-box-3d.svg?react';
import IconExplainers from '../assets/icons/icon-play-simple.svg?react';
import IconCoverage from '../assets/icons/icon-camera-photo.svg?react';
import IconPromos from '../assets/icons/icon-video-edit.svg?react';
import IconSocial from '../assets/icons/icon-social-media.svg?react';
import IconContent from '../assets/icons/icon-content-creation.svg?react';
import IconAnalytics from '../assets/icons/icon-analytics.svg?react';
import IconMonitoring from '../assets/icons/icon-monitoring.svg?react';
import IconEditing from '../assets/icons/icon-video-edit.svg?react';

export const TEAM_MEMBERS = [
  { id: 1, name: "Khalid Sallam", title: "CEO & Team Leader", image: "/assets/team/Khalid Sallam.png" },
  { id: 2, name: "Amal Al-Shaibany", title: "Operations Manager", image: "/assets/team/Amal Al-Shaibany.png" },
  { id: 3, name: "Ahmed Sallam", title: "Artist Supervisor", image: "/assets/team/Ahmed Sallam.png" },
  { id: 4, name: "Mohammed Hamoud", title: "Creative Director", image: "/assets/team/Mohammed Hamoud.png" },
  { id: 5, name: "Nuha Al-Asbahi", title: "Account Executive", image: "/assets/team/Nuha Al-Asbahi.png" },
  { id: 6, name: "Amjed Natheer", title: "IT", image: "/assets/team/Amjed Natheer.png" },
  { id: 7, name: "Murad Omar", title: "Senior Graphic Design", image: "/assets/team/Murad Omar.png" },
  { id: 8, name: "Weam Al-Adashi", title: "Senior Editor", image: "/public/assets/team/Weam Al-Adashi.png" },
  { id: 9, name: "Garnet", title: "International Writer & Proofreader", image: "/assets/team/Garnet.png" },
  { id: 10, name: "Mohammed Nasher", title: "Communication Assistant", image: "/assets/team/Mohammed Nasher.png" },
  { id: 11, name: "Ahmed Abduljaleel", title: "Senior Animator & Illustrator", image: "/assets/team/Ahmed Abduljaleel.png" },
  { id: 12, name: "Sofia", title: "Voice Over", image: "/assets/team/Sofia.png" },
  { id: 13, name: "Nather Al-Areqi", title: "Liaisons and PR", image: "/assets/team/Natheer Al-Areqi.png" },
  { id: 14, name: "Ala'a Abdulqader", title: "Finance", image: "/assets/team/Alaa Abdulqader.png" },
  { id: 15, name: "Haneen Mohammed", title: "HR", image: "/assets/team/Haneen Mohammed.png" },
];

export const SERVICES = [
  {
    id: "communications",
    title: "COMMUNICATIONS SERVICES",
    items: [
      { text: "Public Relations & Corporate Communication", icon: IconPR },
      { text: "Marketing Communications", icon: IconMarketingComms },
      { text: "Nonprofit Communications", icon: IconNonprofit },
      { text: "Content Creation & Storytelling", icon: IconStorytelling },
      { text: "Sponsorship Campaigns", icon: IconSponsorship }
    ]
  },
  {
    id: "marketing",
    title: "MARKETING SERVICES",
    items: [
      { text: "Campaign Planning & Execution", icon: IconPlanning },
      { text: "Creative Campaigns", icon: IconCreative },
      { text: "360 Integrated Campaigns", icon: Icon360 },
      { text: "Digital Marketing | Display Ads & Social Ads", icon: IconDigital },
      { text: "Event Marketing", icon: IconEvent },
      { text: "Media Buying & Planning", icon: IconMediaBuying },
      { text: "Branding Solutions | Brand Strategy, Development & Activation", icon: IconBranding }
    ]
  },
  {
    id: "production",
    title: "PRODUCTION & ANIMATION SERVICES",
    items: [
      { text: "Commercials & Corporate Videos", icon: IconCommercials },
      { text: "Documentaries", icon: IconDocumentaries },
      { text: "2D & 3D Motion/Animation", icon: Icon3D },
      { text: "Animation Explainers", icon: IconExplainers },
      { text: "Event Coverage", icon: IconCoverage },
      { text: "Promos & Product Demos", icon: IconPromos }
    ]
  },
  {
    id: "digital",
    title: "DIGITAL MEDIA SERVICES",
    items: [
      { text: "Social Media Management & Strategy", icon: IconSocial },
      { text: "Social Media Content Creation (Videos, Posts, Stories)", icon: IconContent },
      { text: "Analytics & Performance Tracking", icon: IconAnalytics },
      { text: "Media Monitoring & Reporting", icon: IconMonitoring },
      { text: "Video Production & Editing", icon: IconEditing }
    ]
  }
];

export const NAV_LINKS = [
  { name: "About", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    src: "/assets/portfolio/A Celebration of 25 Years and Beyond -HSA.mp4",
    type: "video",
    category: "production",
    title: "25 Years and Beyond",
    caption: "A corporate milestone documentation celebrating a quarter-century of impact, resilience, and strategic vision."
  },
  {
    id: 2,
    src: "/assets/portfolio/A new Dawn in Al Rahbah Project in Taiz - NRC.mp4",
    type: "video",
    category: "production",
    title: "A New Dawn: Al Rahbah Project",
    caption: "Humanitarian coverage detailing infrastructure developments and the ensuing community resilience."
  },
  {
    id: 3,
    src: "/assets/portfolio/Agricultural input in Al-Misrakh -Taiz.mp4",
    type: "video",
    category: "production",
    title: "Agricultural Resilience: Al-Misrakh",
    caption: "Factual documentation capturing agricultural advancements and sustainable empowerment efforts."
  },
  {
    id: 4,
    src: "/assets/portfolio/Animals Feed Group in Taiz , Al-Ma'afer District - f.mp4",
    type: "video",
    category: "production",
    title: "Animals Feed Group Initiative",
    caption: "Professional reporting on systematic agricultural support systems and ongoing community welfare improvements."
  },
  {
    id: 5,
    src: "/assets/portfolio/Animals Feed Group project in Taiz - FAO.mp4",
    type: "video",
    category: "production",
    title: "FAO: Animals Feed Group",
    caption: "Highlighting international collaborative efforts focusing on long-term agricultural sustainability."
  },
  {
    id: 6,
    src: "/assets/portfolio/Dairy Products Value Chain in Taiz - Impact Consulting.mp4",
    type: "video",
    category: "branding",
    title: "Dairy Products Value Chain",
    caption: "An analytical visual study detailing value chain development and its fundamental economic significance."
  },
  {
    id: 7,
    src: "/assets/portfolio/Dairy products Center in Lahj - FAO.mp4",
    type: "video",
    category: "production",
    title: "FAO: Dairy Products Center",
    caption: "Showcasing critical infrastructural developments that serve as pillars for local agricultural communities."
  },
  {
    id: 8,
    src: "/assets/portfolio/Day 0 Reel.mp4",
    type: "video",
    category: "digital",
    title: "Day 0 Agency Reel",
    caption: "A high-impact cinematic reel reflecting our collective creative capabilities and technical precision."
  },
  {
    id: 9,
    src: "/assets/portfolio/Demo Day_ Promo_Final.mp4",
    type: "video",
    category: "digital",
    title: "Demo Day Promotions",
    caption: "Dynamic promotional coverage engineered to capture pivotal event highlights and corporate innovation."
  },
  {
    id: 10,
    src: "/assets/portfolio/E-Wallet Motion Video - Onecash (2).mp4",
    type: "video",
    category: "animation",
    title: "Onecash: E-Wallet Motion II",
    caption: "Engaging, fluid motion graphics designed to articulate seamless digital financial solutions."
  },
  {
    id: 11,
    src: "/assets/portfolio/E-Wallet Motion Video - Onecash (3).mp4",
    type: "video",
    category: "animation",
    title: "Onecash: E-Wallet Motion III",
    caption: "Impactful digital storytelling communicating the evolution and integration of financial technology."
  },
  {
    id: 12,
    src: "/assets/portfolio/E-Wallet Motion Video - Onecash.mp4",
    type: "video",
    category: "animation",
    title: "Onecash: E-Wallet Motion",
    caption: "Clear, visually striking motion design communicating product value and enhanced user accessibility."
  },
  {
    id: 13,
    src: "/assets/portfolio/Entelaqah - HSA.mp4",
    type: "video",
    category: "branding",
    title: "Entelaqah: Corporate Launch",
    caption: "A compelling corporate narrative illustrating brand launch impact and foundational corporate identity."
  },
  {
    id: 14,
    src: "/assets/portfolio/Inauguration in Al-Nasr School, Al-Somaia  IDP Camp in Ma’arb- Unicef.mp4",
    type: "video",
    category: "production",
    title: "UNICEF: Al-Nasr School Inauguration",
    caption: "Human-centered documentation highlighting critical educational milestones in displaced communities."
  },
  {
    id: 15,
    src: "/assets/portfolio/Inauguration in Al-Nasr School, Al-Somaia IDP Camp in Ma’arb- Unicef.mp4",
    type: "video",
    category: "production",
    title: "UNICEF: Educational Infrastructure",
    caption: "Extended coverage emphasizing the restoration of essential educational infrastructure in challenging environments."
  },
  {
    id: 16,
    src: "/assets/portfolio/Inauguration in Al-Shadadi School, Al-Jufaiha IDP Camp in Ma’arb- Unicef.mp4",
    type: "video",
    category: "production",
    title: "UNICEF: Al-Shadadi School",
    caption: "Capturing the pivotal moments of educational access restoration and community rebuilding initiatives."
  },
  {
    id: 17,
    src: "/assets/portfolio/Infographic Video - ONE Cash.mp4",
    type: "video",
    category: "animation",
    title: "ONE Cash Infographic",
    caption: "Data-driven animation crafted to distill complex financial methodologies into accessible visual formats."
  },
  {
    id: 18,
    src: "/assets/portfolio/Lina Health Care Worker in  Taiz - FAO.mp4",
    type: "video",
    category: "production",
    title: "Frontline Heroes: Lina",
    caption: "A powerful personal narrative emphasizing unwavering human dedication within the health sector."
  },
  {
    id: 19,
    src: "/assets/portfolio/Lina Health Care Worker in Taiz- FAO.mp4",
    type: "video",
    category: "production",
    title: "FAO: Health Care Provision",
    caption: "An objective exploration of critical health care provision and overarching human resilience."
  },
  {
    id: 20,
    src: "/assets/portfolio/Livestock input in Al-Misrakh District - FAO.mp4",
    type: "video",
    category: "production",
    title: "FAO: Livestock Input Program",
    caption: "Factual documentation of agricultural support programs actively driving community economic sustainability."
  },
  {
    id: 21,
    src: "/assets/portfolio/PSC-Explainer Animation.mp4",
    type: "video",
    category: "animation",
    title: "PSC Explainer Animation",
    caption: "A precise, technical explainer animation engineered to simplify multi-tiered processes."
  },
  {
    id: 22,
    src: "/assets/portfolio/Risk Sharing Motion Video.mp4",
    type: "video",
    category: "animation",
    title: "Risk Sharing Framework",
    caption: "Corporate motion design communicating essential financial strategies and risk management protocols."
  },
  {
    id: 23,
    src: "/assets/portfolio/SIL Teaser.mp4",
    type: "video",
    category: "digital",
    title: "SIL Teaser Campaign",
    caption: "A dynamic, high-fidelity teaser campaign crafted strategically to maximize organic engagement."
  },
  {
    id: 24,
    src: "/assets/portfolio/SOS_ أغنية متعايشين_ هاني الشيباني- Promo_ Final.mp4",
    type: "video",
    category: "digital",
    title: "SOS: Mutaaishin Promo",
    caption: "A compelling cultural promo leveraging musical elements to foster messages of coexistence and unity."
  },
  {
    id: 25,
    src: "/assets/portfolio/YHF Hanan Success Story in Marib - HDP.mp4",
    type: "video",
    category: "production",
    title: "YHF: Hanan's Success Story",
    caption: "A profoundly human success story underscoring the tangible positive impact of targeted intervention."
  },
  {
    id: 26,
    src: "/assets/portfolio/YHF Video in Marib - HDP.mp4",
    type: "video",
    category: "production",
    title: "YHF Campaign Documentation",
    caption: "Comprehensive professional coverage detailing the extensive scope of humanitarian efforts in Marib."
  }
];
