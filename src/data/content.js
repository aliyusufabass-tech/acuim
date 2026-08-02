import heroImage from "../assets/images/acuim-hero.png";
import advisoryImage from "../assets/images/ADVISORY AND STRATEGIC CONSULTING.jpeg";
import architectureImage from "../assets/images/ARCHITECTURE.jpeg";
import citiesImage from "../assets/images/CITIES SOLUTION.jpeg";
import constructionManagementImage from "../assets/images/CONSTRUCTION MANAGEMENT.jpeg";
import engineeringImage from "../assets/images/ENGINEERING.jpeg";
import environmentalImage from "../assets/images/ENVIRONMENTAL SERVICES.jpeg";
import geospatialImage from "../assets/images/GEOSPATIAL SERVICE.jpeg";
import infrastructureImage from "../assets/images/INFRASTRUCTURE CONSTRUCTION.jpeg";
import cybersecurityImage from "../assets/images/IT AND CYBERSECURITY.jpeg";
import landscapeImage from "../assets/images/LANDSCAPE ARCHITECTURE.jpeg";
import pedestrianImage from "../assets/images/PEDESTRIAL MODELING.jpeg";
import publicRealmImage from "../assets/images/PUBLIC REALM AND OPEN SPACE DEVELOPMENT.jpeg";
import urbanAnalyticsImage from "../assets/images/URBAN ANALUTICS.jpeg";
import urbanismImage from "../assets/images/URBANISM AND PLANNING.jpeg";
import {
  Building2,
  Cpu,
  DraftingCompass,
  Factory,
  Globe2,
  HardHat,
  Landmark,
  Leaf,
  Map,
  Network,
  ShieldCheck,
  Trees,
  Users,
  Waypoints,
} from "lucide-react";

export const fallbackImage = heroImage;

export const serviceImages = {
  Engineering: engineeringImage,
  "Architecture Design": architectureImage,
  "Public Realm and Open Space Development": publicRealmImage,
  "Infrastructure Construction": infrastructureImage,
  "Construction Management": constructionManagementImage,
  "Urban Analytics": urbanAnalyticsImage,
  "Geospatial Services": geospatialImage,
  "Urbanism and Planning": urbanismImage,
  "Landscape Architecture": landscapeImage,
  "Pedestrian Modeling": pedestrianImage,
  "Cities Solutions": citiesImage,
  "Advisory and Strategic Consulting": advisoryImage,
  "Environmental Services": environmentalImage,
  "IT and Cybersecurity": cybersecurityImage,
};

export const serviceCategories = ["All", "Engineering", "Design", "Planning", "Technology", "Environment"];

export const services = [
  ["Engineering", "We provide integrated engineering solutions that support safe, efficient, resilient and sustainable infrastructure development.", HardHat, "Engineering"],
  ["Architecture Design", "Our architectural services combine creativity, functionality and technical excellence to create meaningful and high-performing spaces.", DraftingCompass, "Design"],
  ["Public Realm and Open Space Development", "We design inclusive public spaces, parks, streetscapes and community environments that improve quality of life.", Landmark, "Design"],
  ["Infrastructure Construction", "We support the planning, coordination and delivery of reliable infrastructure and construction projects.", Factory, "Engineering"],
  ["Construction Management", "We provide professional construction supervision, coordination, quality control, scheduling and project delivery management.", Building2, "Engineering"],
  ["Urban Analytics", "We use data, technology and analytical tools to understand urban patterns and support informed development decisions.", Waypoints, "Technology"],
  ["Geospatial Services", "Our geospatial services include mapping, spatial analysis, GIS, site assessment and location-based development intelligence.", Map, "Technology"],
  ["Urbanism and Planning", "We create strategic urban plans, master plans and development frameworks for sustainable and resilient communities.", Globe2, "Planning"],
  ["Landscape Architecture", "We design attractive, environmentally responsible and functional landscapes that connect people, nature and places.", Trees, "Environment"],
  ["Pedestrian Modeling", "We analyse pedestrian movement, accessibility, capacity and safety to support efficient public spaces and transport environments.", Users, "Planning"],
  ["Cities Solutions", "We develop integrated solutions for smart, sustainable and resilient cities through planning, infrastructure and technology.", Network, "Planning"],
  ["Advisory and Strategic Consulting", "We provide research, feasibility studies, development strategies, technical advisory and decision-support services.", ShieldCheck, "Technology"],
  ["Environmental Services", "We deliver environmental assessments, sustainability strategies, impact studies and responsible development solutions.", Leaf, "Environment"],
  ["IT and Cybersecurity", "We provide secure digital infrastructure, information technology consulting, cybersecurity assessment, systems protection and technology solutions.", Cpu, "Technology"],
].map(([title, short_description, Icon, category], index) => ({
  id: index + 1,
  title,
  slug: title.toLowerCase().replaceAll(" and ", "-").replaceAll(" ", "-"),
  short_description,
  full_description: short_description,
  Icon,
  icon: Icon.name,
  category,
  card_image: serviceImages[title] || heroImage,
  hero_image: serviceImages[title] || heroImage,
  capabilities: ["Strategic assessment", "Technical design", "Implementation support", "Performance review"],
  benefits: ["Resilient outcomes", "Efficient delivery", "Clear decision-making", "Sustainable value"],
  approach: ["Discover", "Plan", "Design", "Deliver", "Improve"],
}));

export const projects = [
  {
    id: 1,
    title: "Integrated Waterfront Mobility Framework",
    slug: "integrated-waterfront-mobility-framework",
    location: "Abidjan, Cote d'Ivoire",
    client: "Municipal Development Partner",
    year: 2026,
    category: "Infrastructure",
    short_description: "A mobility and public realm framework connecting transport, open space and resilient infrastructure.",
    full_description: "ACUIM coordinated urban design, movement analysis and infrastructure planning to improve access, safety and long-term district performance.",
    challenge: "A growing waterfront district needed better pedestrian access, transport integration and climate-aware public space.",
    solution: "Our team created a phased framework combining street hierarchy, landscape systems, multimodal access and implementation priorities.",
    outcome: "The plan created a clear roadmap for investment, improved mobility and more inclusive waterfront amenities.",
    featured_image: heroImage,
    services_provided: ["Urbanism and Planning", "Pedestrian Modeling", "Landscape Architecture"],
    gallery: [],
  },
  {
    id: 2,
    title: "Resilient Civic Infrastructure Program",
    slug: "resilient-civic-infrastructure-program",
    location: "West Africa",
    client: "Public Sector Client",
    year: 2025,
    category: "Engineering",
    short_description: "Technical advisory for civic infrastructure upgrades with sustainability and delivery controls.",
    full_description: "The program aligned engineering standards, construction sequencing and asset management priorities.",
    challenge: "Critical assets required modernization while remaining operational.",
    solution: "ACUIM provided engineering review, delivery planning and risk controls.",
    outcome: "The program reduced delivery uncertainty and improved resilience criteria.",
    featured_image: heroImage,
    services_provided: ["Engineering", "Construction Management", "Environmental Services"],
    gallery: [],
  },
  {
    id: 3,
    title: "Digital Urban Intelligence Platform",
    slug: "digital-urban-intelligence-platform",
    location: "Regional",
    client: "Private Development Group",
    year: 2024,
    category: "Technology",
    short_description: "GIS, analytics and advisory support for smarter development decisions.",
    full_description: "ACUIM combined spatial data, urban analytics and technical consulting to support site selection and infrastructure prioritization.",
    challenge: "Decision-makers lacked one evidence base for multiple development scenarios.",
    solution: "We built a spatial analysis workflow and executive reporting framework.",
    outcome: "The client gained a repeatable model for comparing investment options.",
    featured_image: heroImage,
    services_provided: ["Urban Analytics", "Geospatial Services", "Advisory and Strategic Consulting"],
    gallery: [],
  },
];

export const insights = [
  {
    id: 1,
    title: "Designing Infrastructure for Long-Term Urban Resilience",
    slug: "designing-infrastructure-for-long-term-urban-resilience",
    category: "Infrastructure",
    summary: "How integrated planning helps cities prepare for growth, climate pressure and changing mobility needs.",
    content: "Resilient infrastructure starts with clear evidence, multidisciplinary coordination and practical delivery sequencing. ACUIM helps clients connect technical decisions with long-term civic value.",
    author: "ACUIM Development",
    published_at: "2026-07-12",
    featured_image: heroImage,
  },
  {
    id: 2,
    title: "Why Public Realm Quality Matters in Sustainable Cities",
    slug: "why-public-realm-quality-matters-in-sustainable-cities",
    category: "Sustainable Cities",
    summary: "Public spaces shape safety, inclusion, environmental performance and everyday economic activity.",
    content: "High-quality public realm is not decoration. It is civic infrastructure that supports accessibility, social value, stormwater performance and identity.",
    author: "ACUIM Development",
    published_at: "2026-06-18",
    featured_image: heroImage,
  },
  {
    id: 3,
    title: "Using Geospatial Intelligence in Early Project Planning",
    slug: "using-geospatial-intelligence-in-early-project-planning",
    category: "Technology",
    summary: "Spatial analysis can expose risks, opportunities and priorities before costly design decisions are locked in.",
    content: "GIS and urban analytics create a stronger foundation for feasibility studies, infrastructure planning and development strategy.",
    author: "ACUIM Development",
    published_at: "2026-05-21",
    featured_image: heroImage,
  },
];
