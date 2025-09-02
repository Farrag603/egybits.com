// ============================================
// PROJECT CATEGORIES - Predefined categories for consistency
// ============================================

export const PROJECT_CATEGORIES = {
  REAL_ESTATE: "Real Estate & Design",
  ENTERTAINMENT: "Entertainment",
  PRODUCTIVITY: "Productivity",
  EDUCATION: "Education & Learning",
  SMART_SYSTEMS: "Smart Systems",
  NONPROFIT: "Non-Profit & Charity",
  ECOMMERCE: "E-Commerce",
  FINTECH: "FinTech",
  HEALTHCARE: "Healthcare",
  AI_ML: "AI/ML",
  MOBILE_APP: "Mobile App",
  ENTERPRISE: "Enterprise",
} as const;

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];
