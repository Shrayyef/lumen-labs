export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  platforms: string[];
  accent: string;
  atmosphere: string;
};

export const products: Product[] = [
  {
    slug: "aula",
    name: "Aula",
    tagline: "White-label learning, ready to brand.",
    summary:
      "White-label LMS sold as SaaS — courses, quizzes, live classes and billing on web, iOS and Android.",
    description:
      "Aula gives education teams and training businesses a complete learning stack they can brand as their own. Launch courses, run quizzes, host live classes, and collect payments across web and native apps — without rebuilding the platform from scratch.",
    highlights: [
      "Courses, cohorts, and assessments in one place",
      "Live classes with scheduling and attendance",
      "Billing and subscriptions built for SaaS delivery",
      "White-label web, iOS, and Android experiences",
    ],
    stack: ["React Native", "Next.js", "Node.js", "In-app purchases"],
    platforms: ["Web", "iOS", "Android"],
    accent: "#1F7A6B",
    atmosphere: "Soft classroom light over a calm study desk",
  },
  {
    slug: "serviceshub",
    name: "ServicesHub",
    tagline: "Car care, coordinated.",
    summary:
      "Car-care marketplace connecting drivers with workshops, mobile mechanics and tow trucks — plus SaaS for workshops.",
    description:
      "ServicesHub links drivers to workshops, mobile mechanics, and tow trucks while giving workshops the SaaS tools to manage jobs, schedules, and customers. One marketplace on the road; one operations layer in the bay.",
    highlights: [
      "Driver marketplace for repair, mobile service, and towing",
      "Workshop SaaS for jobs, scheduling, and customers",
      "Realtime job status from request to completion",
      "Built for high-volume marketplace traffic",
    ],
    stack: ["React Native", "Next.js", "Fastify", "Prisma", "BullMQ"],
    platforms: ["iOS", "Android", "Web"],
    accent: "#C45C26",
    atmosphere: "Open garage bay with tools and a waiting service lane",
  },
  {
    slug: "fileroom",
    name: "Fileroom",
    tagline: "Convert privately. Stay on-device.",
    summary:
      "Private on-device file converter — images, video, PDF, archives, ebooks on iPhone, Android, Mac.",
    description:
      "Fileroom converts images, video, PDFs, archives, and ebooks entirely on-device. No upload pipeline, no cloud round-trip — just fast local conversion on iPhone, Android, and Mac when privacy is the product.",
    highlights: [
      "Images, video, PDF, archives, and ebooks",
      "Fully on-device processing — files never leave the device",
      "Native apps for iPhone, Android, and Mac",
      "Powered by platform media stacks and FFmpeg",
    ],
    stack: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "FFmpeg"],
    platforms: ["iPhone", "Android", "Mac"],
    accent: "#2F5D8C",
    atmosphere: "Quiet desk with a laptop converting local media files",
  },
  {
    slug: "bulduk",
    name: "Bulduk",
    tagline: "Shop smarter across Turkey.",
    summary:
      "AI shopping assistant for Turkey — compares Trendyol, Hepsiburada, n11, Amazon.",
    description:
      "Bulduk is an AI shopping assistant for Turkey. Describe what you want, and it compares offers across Trendyol, Hepsiburada, n11, and Amazon — streaming answers as it reasons so shoppers can decide faster.",
    highlights: [
      "Conversational shopping for the Turkish market",
      "Cross-store comparison across major marketplaces",
      "Streaming responses via SSE for live answers",
      "Native companion experiences on iOS and Android",
    ],
    stack: ["FastAPI", "LLM", "SSE", "SwiftUI", "Jetpack Compose"],
    platforms: ["Web", "iOS", "Android"],
    accent: "#B45309",
    atmosphere: "City evening light over phone shopping and price cards",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
