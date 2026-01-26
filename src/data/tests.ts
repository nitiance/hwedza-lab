export interface Test {
  id: string;
  name: string;
  description: string;
  category: string;
  sampleType: string;
  turnaround: string;
  price: number;
  popular?: boolean;
}

export const tests: Test[] = [
  {
    id: "fbc",
    name: "Full Blood Count (FBC)",
    description: "Complete blood cell analysis including red cells, white cells, and platelets.",
    category: "Blood",
    sampleType: "Blood",
    turnaround: "Same Day",
    price: 25,
    popular: true,
  },
  {
    id: "lipid",
    name: "Lipid Profile",
    description: "Cholesterol, triglycerides, HDL, LDL levels for cardiovascular risk assessment.",
    category: "Blood",
    sampleType: "Blood",
    turnaround: "Same Day",
    price: 35,
    popular: true,
  },
  {
    id: "thyroid",
    name: "Thyroid Function (TSH, T3, T4)",
    description: "Complete thyroid panel to assess thyroid gland function.",
    category: "Hormones",
    sampleType: "Blood",
    turnaround: "24 hours",
    price: 45,
    popular: true,
  },
  {
    id: "hiv",
    name: "HIV 1 & 2 Screening",
    description: "Confidential HIV antibody and antigen testing with counseling.",
    category: "STI",
    sampleType: "Blood",
    turnaround: "Same Day",
    price: 20,
    popular: true,
  },
  {
    id: "hba1c",
    name: "HbA1c (Diabetes Test)",
    description: "Long-term blood sugar control measurement over 2-3 months.",
    category: "Blood",
    sampleType: "Blood",
    turnaround: "24 hours",
    price: 30,
    popular: true,
  },
  {
    id: "pregnancy",
    name: "Pregnancy Test (Beta HCG)",
    description: "Quantitative pregnancy hormone test for early detection.",
    category: "Hormones",
    sampleType: "Blood/Urine",
    turnaround: "Same Day",
    price: 15,
    popular: true,
  },
  {
    id: "liver",
    name: "Liver Function Tests (LFT)",
    description: "Comprehensive liver enzyme and protein analysis.",
    category: "Blood",
    sampleType: "Blood",
    turnaround: "Same Day",
    price: 40,
  },
  {
    id: "kidney",
    name: "Kidney Function (U&E)",
    description: "Urea, creatinine, and electrolytes for kidney health assessment.",
    category: "Blood",
    sampleType: "Blood",
    turnaround: "Same Day",
    price: 35,
  },
  {
    id: "psa",
    name: "PSA (Prostate Specific Antigen)",
    description: "Prostate cancer screening marker for men over 40.",
    category: "Hormones",
    sampleType: "Blood",
    turnaround: "24 hours",
    price: 40,
  },
  {
    id: "vitamin-d",
    name: "Vitamin D (25-OH)",
    description: "Vitamin D status assessment for bone and immune health.",
    category: "Blood",
    sampleType: "Blood",
    turnaround: "48 hours",
    price: 50,
  },
  {
    id: "hepatitis-b",
    name: "Hepatitis B Panel",
    description: "Surface antigen, antibody, and core antibody testing.",
    category: "Viral",
    sampleType: "Blood",
    turnaround: "24 hours",
    price: 45,
  },
  {
    id: "syphilis",
    name: "Syphilis Screening (VDRL/RPR)",
    description: "Screening test for syphilis infection.",
    category: "STI",
    sampleType: "Blood",
    turnaround: "Same Day",
    price: 20,
  },
  {
    id: "urine-culture",
    name: "Urine Culture & Sensitivity",
    description: "Bacterial identification and antibiotic sensitivity testing.",
    category: "Blood",
    sampleType: "Urine",
    turnaround: "48 hours",
    price: 35,
  },
  {
    id: "iron",
    name: "Iron Studies",
    description: "Serum iron, ferritin, TIBC for anemia evaluation.",
    category: "Blood",
    sampleType: "Blood",
    turnaround: "24 hours",
    price: 45,
  },
  {
    id: "fertility-female",
    name: "Female Fertility Panel",
    description: "FSH, LH, Estradiol, Progesterone, AMH testing.",
    category: "Hormones",
    sampleType: "Blood",
    turnaround: "48 hours",
    price: 120,
  },
];

export interface Package {
  id: string;
  name: string;
  description: string;
  tests: string[];
  price: number;
  originalPrice: number;
}

export const packages: Package[] = [
  {
    id: "full-body",
    name: "Full Body Check",
    description: "Comprehensive health screening covering all major systems.",
    tests: ["Full Blood Count", "Lipid Profile", "Liver Function", "Kidney Function", "Thyroid", "HbA1c", "Urine Analysis"],
    price: 180,
    originalPrice: 250,
  },
  {
    id: "diabetes",
    name: "Diabetes Panel",
    description: "Complete diabetes monitoring and risk assessment.",
    tests: ["Fasting Glucose", "HbA1c", "Lipid Profile", "Kidney Function", "Urine Microalbumin"],
    price: 95,
    originalPrice: 130,
  },
  {
    id: "cardiac",
    name: "Cardiac Risk Panel",
    description: "Heart health assessment with key cardiovascular markers.",
    tests: ["Lipid Profile", "hs-CRP", "Homocysteine", "HbA1c", "Blood Pressure"],
    price: 110,
    originalPrice: 150,
  },
  {
    id: "womens",
    name: "Women's Health",
    description: "Essential tests for women's reproductive and general health.",
    tests: ["Full Blood Count", "Thyroid Panel", "Iron Studies", "Pap Smear", "Breast Exam"],
    price: 140,
    originalPrice: 190,
  },
  {
    id: "mens",
    name: "Men's Health",
    description: "Comprehensive health check tailored for men.",
    tests: ["Full Blood Count", "Lipid Profile", "PSA", "Testosterone", "Liver Function"],
    price: 130,
    originalPrice: 175,
  },
];

export const categories = [
  { id: "all", name: "All Tests" },
  { id: "Blood", name: "Blood" },
  { id: "Hormones", name: "Hormones" },
  { id: "STI", name: "STI" },
  { id: "Viral", name: "Viral" },
  { id: "Packages", name: "Packages" },
];
