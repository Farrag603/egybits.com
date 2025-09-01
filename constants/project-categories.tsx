// ============================================
// PROJECT CATEGORIES - Predefined categories for consistency
// ============================================

export const PROJECT_CATEGORIES = {
  WEB_APP: "Web Application",
  MOBILE_APP: "Mobile App",
  WEB_PLATFORM: "Web Platform",
  HEALTHCARE: "Healthcare",
  ENTERPRISE: "Enterprise",
  AI_ML: "AI/ML",
  FINTECH: "FinTech",
  ECOMMERCE: "E-Commerce",
  EDUCATION: "Education",
  REAL_ESTATE: "Real Estate",
} as const;

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];
