export const TRUST_INFO = {
  name: "Riddhi Siddhi Charitable Trust",
  shortName: "RSCT",
  established: 2014,
  founder: "Mr. Gopalsingh Solanki",
  pan: "AACTR3220R",
  regNo: "E30149",
  tagline: "Giving is the greatest act of worship",
  missionStatement: "To realize an India where every marginalized soul—be it an abandoned child, a struggling senior, or a sick individual—receives dignified support, quality education, healthcare, and nourishing meals through proactive grassroots action.",
  phone1: "+91 9820737415",
  phone2: "+91 7506356633",
  tel1: "919820737415",
  tel2: "7506356633",
  email: "support@riddhisiddhicharitabletrust.org",
  address: "Office no 20 Swapnadeep Apartment, Poonam Sagar Complex, Mira Road East, Thane - 401107, Maharashtra, India",
  googleMapsUrl: "https://maps.app.goo.gl/19271902245794294",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.2405590949934!2d72.85834247466991!3d19.271902245794294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73a721e0ff7%3A0x340abd3dc66573ff!2sRIDDHI%20SIDDHI%20CHARITABLE%20TRUST!5e0!3m2!1sen!2sin!4v1743678085111!5m2!1sen!2sin",
  hours: "Mon - Sat: 10:00 AM - 6:00 PM (Sunday Closed)",
  form10BEUrl: "https://forms.gle/pzHQFtn4crwdvYZ59",
  employeeLoginUrl: "https://dedi.riddhisiddhicharitabletrust.org:2096/",
  logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/images/logo-light.png",
  founderImage: "https://www.riddhisiddhicharitabletrust.org/static/images/about/founder-image.webp",
  aboutImage: "https://www.riddhisiddhicharitabletrust.org/static/images/about/about-us-image.webp",
  missionBanner: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Our-Mission.webp",
  qrCodeImage: "https://www.riddhisiddhicharitabletrust.org/static/images/bank/QrCode.jpeg",
  googlePayImage: "https://www.riddhisiddhicharitabletrust.org/static/images/bank/google_pay.webp",
  socials: {
    facebook: "https://www.facebook.com/charitabletrustmumbai/",
    twitter: "https://x.com/RiddhiSiddhiCT",
    youtube: "https://www.youtube.com/channel/UCAqqXugQXxoBZR5lZHlvjaQ",
    instagram: "https://www.instagram.com/riddhisiddhitrust/",
    whatsapp: "https://wa.me/919820737415?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20supporting%20Riddhi%20Siddhi%20Charitable%20Trust"
  },
  taxExemptionText: "Under Section 80G of Income Tax Act 1961, donors are entitled to a 50% Tax Exemption on their donations. Donor PAN is mandatory to issue an official 10BE Tax Certificate."
};

export const IMPACT_STATS = [
  { label: "Hot Meals Distributed", value: "150,000+", numeric: 150000, suffix: "+", icon: "Utensils", color: "from-amber-500 to-orange-600" },
  { label: "Children Educated", value: "12,500+", numeric: 12500, suffix: "+", icon: "GraduationCap", color: "from-blue-600 to-indigo-700" },
  { label: "Senior Elders Supported", value: "4,800+", numeric: 4800, suffix: "+", icon: "HeartHandshake", color: "from-rose-500 to-crimson-600" },
  { label: "Active Volunteers", value: "1,500+", numeric: 1500, suffix: "+", icon: "Users", color: "from-emerald-500 to-teal-700" },
  { label: "Relief & Health Drives", value: "350+", numeric: 350, suffix: "+", icon: "Activity", color: "from-purple-500 to-violet-700" }
];

export const BANK_ACCOUNTS = [
  {
    bankName: "HDFC BANK",
    accountName: "Riddhi Siddhi Charitable Trust",
    accountNumber: "50200004807417",
    ifsc: "HDFC0001230",
    branch: "Dahisar West, Mumbai",
    upiId: "riddhisiddhict@hdfcbank",
    type: "Domestic Account (INR)",
    gradient: "from-emerald-600 to-teal-800",
    badge: "Primary Savings / 80G",
    popular: true
  },
  {
    bankName: "AXIS BANK",
    accountName: "Riddhi Siddhi Charitable Trust",
    accountNumber: "917010052501627",
    ifsc: "UTIB0000108",
    branch: "Mulund West, Mumbai",
    upiId: "9820737415@axisbank",
    type: "Domestic Account (INR)",
    gradient: "from-blue-600 to-indigo-800",
    badge: "Fast Direct Transfer",
    popular: false
  },
  {
    bankName: "STATE BANK OF INDIA (FCRA)",
    accountName: "Riddhi Siddhi Charitable Trust",
    accountNumber: "40125001845",
    ifsc: "SBIN0000691",
    branch: "New Delhi Main Branch (Branch Code: 00691)",
    upiId: "fcra.rsct@sbi",
    type: "Foreign Contribution (FCRA Account)",
    gradient: "from-rose-600 to-crimson-800",
    badge: "Global / FCRA Approved",
    popular: false
  }
];

export const CORE_PROJECTS = [
  {
    id: "education",
    title: "Education for Every Child",
    category: "Child Welfare",
    icon: "BookOpen",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Education.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Home-page-education-for-every-child.webp",
    shortDesc: "Supporting children with school stationery, bags, fees, bicycles, and raincoats to break the poverty cycle.",
    fullDesc: "Education is the single most powerful equalizer to dismantle generational poverty. India has the largest young population in the world, yet millions of children in rural and urban slums drop out due to basic lack of school kits, stationery, uniforms, and transportation. RSCT runs year-round education drives across Maharashtra and neighboring regions, providing complete educational kits, coaching support, and bicycles so no child is denied knowledge.",
    impact: "12,500+ students supported across 40+ schools and rural tribal pockets.",
    goal: "₹15,00,000",
    raised: "₹11,40,000",
    progress: 76
  },
  {
    id: "shelter",
    title: "Shelter Home for Orphaned Kids",
    category: "Shelter & Care",
    icon: "Home",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Our-Orphanage-A-Future-Full-of-Hope.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Our-Orphanage.webp",
    shortDesc: "A safe haven in Airoli, Mumbai offering 24/7 boarding, healthy meals, medical checkups, and loving mentorship.",
    fullDesc: "According to surveys, millions of Indian children live without biological parents or guardians due to poverty, abandonment, or illness. RSCT established a dedicated shelter home in Airoli, Mumbai. We provide full-time security, comfortable clean bedding, dedicated cooks preparing 4 balanced daily meals, school tuition, life skills training, and celebratory festival experiences.",
    impact: "65+ full-time resident children living in safety and dignity.",
    goal: "₹25,00,000",
    raised: "₹19,50,000",
    progress: 78
  },
  {
    id: "old-age",
    title: "Dignity for Senior Elders",
    category: "Elderly Care",
    icon: "HeartHandshake",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Dignity-and-Care-for-Every-Senior.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Oldage-2.webp",
    shortDesc: "Loving residential care, medicine, companionship, and emotional safety for abandoned senior citizens.",
    fullDesc: "Aging should be a period of peace, not neglect. Unfortunately, many elderly individuals find themselves abandoned on roads or left with chronic ailments. RSCT's Old Age Home initiative provides clean shelter, doctor consultations, regular medication, nutritious geriatric meals, and recreational activities that restore self-worth and familial warmth.",
    impact: "4,800+ senior citizen care days and healthcare packages delivered.",
    goal: "₹18,00,000",
    raised: "₹14,20,000",
    progress: 79
  },
  {
    id: "health",
    title: "Health & Critical Medical Appeal",
    category: "Healthcare",
    icon: "Activity",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Medical-support.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/A-Healthier-Tomorrow-Starts-Today.webp",
    shortDesc: "Emergency medical funds for life-threatening illnesses, pediatric surgeries, dialysis, and health camps.",
    fullDesc: "No human being should lose their life simply because they cannot afford hospital treatment. RSCT works hand-in-hand with leading multi-specialty hospitals to fund critical operations for children and adults battling cancer, thalassemia, bone marrow deficiencies, and chronic diseases. We also organize rural free health camps offering blood pressure screening, CPR training, and anemia diagnosis.",
    impact: "180+ critical surgeries co-funded & 8,000+ patients screened.",
    goal: "₹30,00,000",
    raised: "₹24,80,000",
    progress: 82
  },
  {
    id: "meals-for-all",
    title: "Fighting Hunger: Meals for All",
    category: "Nutrition",
    icon: "Utensils",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Fighting-Hunger-in-India.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/rs-livielihood-banner.webp",
    shortDesc: "Hot cooked meals and dry grocery ration kits for daily-wage workers, homeless people, and orphanages.",
    fullDesc: "Hunger is an immediate crisis. Our food distribution vans operate across Mumbai slum clusters, railway station vicinities, and migrant colonies distributing fresh, wholesome meals prepared in hygienic kitchens. We also supply monthly dry ration kits (wheat flour, rice, pulses, cooking oil, spices) to impoverished families and elderly homes.",
    impact: "150,000+ meals served and 4,000+ monthly ration kits delivered.",
    goal: "₹12,00,000",
    raised: "₹9,80,000",
    progress: 81
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment & Skill Development",
    category: "Livelihood",
    icon: "Sparkles",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Empowering-Women-&-Transforming-Society.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/rs-livielihood-banner.webp",
    shortDesc: "Vocational tailoring, computer literacy, financial training, and menstrual hygiene kits for underprivileged women.",
    fullDesc: "When you empower a woman, you uplift an entire generation. RSCT conducts free vocational stitching, beauty care, computer literacy, and cottage industry workshops for single mothers, widows, and young girls from low-income communities. We also distribute sanitary kits and conduct community menstrual health awareness sessions.",
    impact: "1,200+ women trained into self-employed micro-entrepreneurs.",
    goal: "₹10,00,000",
    raised: "₹7,60,000",
    progress: 76
  },
  {
    id: "animal-welfare",
    title: "Animal Welfare & Stray Feeding",
    category: "Compassion",
    icon: "ShieldAlert",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Animal-Welfare-big-img.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Compassion-for-All-Living-Beings.webp",
    shortDesc: "Daily nutritious food, rescue support, and basic medical aid for voiceless street dogs and injured animals.",
    fullDesc: "Street animals frequently endure extreme hunger, road accidents, and neglect. Our dedicated volunteers prepare nutritious canine meals daily and feed hundreds of street dogs across designated Mumbai routes, ensuring they don't have to rummage through hazardous garbage heaps for sustenance.",
    impact: "500+ stray dogs fed daily across Mumbai & Mira Road.",
    goal: "₹6,00,000",
    raised: "₹4,90,000",
    progress: 82
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief & Emergency Support",
    category: "Emergency Aid",
    icon: "ShieldCheck",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Disaster-Relief.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Saving-Lives-in-Times-of-Crisis.webp",
    shortDesc: "Immediate food, tarpaulin shelters, clean drinking water, and medicine during floods, cyclones, and crises.",
    fullDesc: "During natural calamities such as severe monsoon flooding, cyclones, and cold waves, RSCT's rapid-response volunteer squads deploy with emergency ration kits, waterproof tarpaulins, clothes, blankets, and essential medications to the hardest-hit rural and coastal villages.",
    impact: "15,000+ disaster-affected families assisted across Maharashtra.",
    goal: "₹8,00,000",
    raised: "₹6,50,000",
    progress: 81
  },
  {
    id: "school-kits",
    title: "School Kits & Monsoon Raincoat Drives",
    category: "Child Education",
    icon: "Backpack",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Empowering-the-Next-Generation-with-Knowledge.webp",
    fallbackImage: "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Education.webp",
    shortDesc: "Waterproof school bags, raincoats, notebooks, geometry sets, and water bottles for rural learners.",
    fullDesc: "Heavy monsoon rains in Maharashtra frequently damage school books and prevent tribal children from walking miles to school. Our annual School Kit Drive equips every enrolled child with a heavy-duty waterproof bag, quality raincoat, full year's stationery, lunch box, and water bottle.",
    impact: "8,500+ complete school kits distributed across 35 tribal villages.",
    goal: "₹7,50,000",
    raised: "₹6,10,000",
    progress: 81
  }
];

export const MEDICAL_APPEALS = [
  {
    id: 22,
    patientName: "Miss Adhiraj Ajay Patile",
    age: "7 Years Old",
    disease: "Immune Deficiency Disorder",
    hospital: "Multi-Specialty Pediatric Center",
    targetAmount: 450000,
    raisedAmount: 345000,
    progress: 76,
    urgent: true,
    image: "https://www.riddhisiddhicharitabletrust.org/media/medical/Miss-Adhiraj-Ajay-Patile-banner.webp",
    description: "7-year-old Adhiraj is bravely battling severe primary immune deficiency. Her family of daily wage earners has exhausted all savings for intensive antibody therapy. Your contribution directly funds her essential immunoglobulin injections."
  },
  {
    id: 21,
    patientName: "Miss Samaira Varun Bhenwal",
    age: "18 Months Old",
    disease: "Severe Congenital Neutropenia",
    hospital: "Pediatric Hematology Care",
    targetAmount: 600000,
    raisedAmount: 490000,
    progress: 81,
    urgent: true,
    image: "https://www.riddhisiddhicharitabletrust.org/media/medical/Miss-Samaira-Varun-Bhenwal-Banner.webp",
    description: "Baby Samaira is just 1.5 years old and suffers from life-threatening neutropenia requiring urgent marrow stimulation treatments and clean sterile care to prevent fatal bacterial infections."
  },
  {
    id: 20,
    patientName: "Miss Anvi Sandesh Patil",
    age: "6 Years Old",
    disease: "Thalassemia Major",
    hospital: "Specialized Blood & Bone Care Center",
    targetAmount: 850000,
    raisedAmount: 680000,
    progress: 80,
    urgent: true,
    image: "https://www.riddhisiddhicharitabletrust.org/media/medical/Miss-ANVI-SANDESH-PATIL-Banner.webp",
    description: "Anvi needs frequent blood transfusions and an urgent bone marrow transplant to survive Thalassemia Major. Her parents seek kind support to give their joyful daughter a healthy future."
  },
  {
    id: 19,
    patientName: "Miss Aaradhya Khopde",
    age: "5 Years Old",
    disease: "Pediatric Critical Surgery",
    hospital: "Pediatric Surgery Institute",
    targetAmount: 550000,
    raisedAmount: 460000,
    progress: 83,
    urgent: true,
    image: "https://www.riddhisiddhicharitabletrust.org/media/medical/Miss._Aaradhya_Khopde.jpg.webp",
    description: "Little Aaradhya requires emergency pediatric surgery to treat critical congenital health complications. Her family requires urgent community support for hospital stay and post-op rehabilitation."
  },
  {
    id: 18,
    patientName: "Miss Shaurya Sandip Kachare",
    age: "4 Years Old",
    disease: "Pediatric Oncology Care",
    hospital: "Tata Memorial Allied Pediatric Oncology",
    targetAmount: 700000,
    raisedAmount: 560000,
    progress: 80,
    urgent: false,
    image: "https://www.riddhisiddhicharitabletrust.org/media/medical/RS-Thumbnail-Miss-Shaurya-Sandip-Kachare_os3eKqC.webp",
    description: "Shaurya is undergoing specialized pediatric treatment. Her parents seek financial assistance to complete the multi-phase therapy protocol."
  }
];

export const CSR_INITIATIVES = [
  {
    id: "school-gate",
    title: "School Gate & Safe Boundary Renovation",
    location: "Rural Thane & Palghar District",
    category: "School Infrastructure",
    beforeText: "The entrance of the school stood worn-out and neglected, reflecting years of limited resources. Faded walls, broken paint, and an uninviting gate created an unsafe environment.",
    afterText: "With CSR support and RSCT dedication, a reinforced colorful safety gate, secure perimeter, and welcoming archway were constructed, protecting over 320 children.",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR1.webp",
    imageBefore: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR1.webp",
    imageAfter: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR1.webp",
    partnerBeneficiaries: "320+ Students"
  },
  {
    id: "classroom-upgrade",
    title: "Classroom Building & Educational Murals",
    location: "Government Primary School, Maharashtra",
    category: "Classroom Renewal",
    beforeText: "The classroom building was ageing, dull, and in urgent need of repairs. Cracked walls, faded paint, and weakened infrastructure lacked comfort and vibrancy.",
    afterText: "Transformed into a bright, secure, and inspiring space with fresh weatherproof paint, reinforced roofs, and vibrant educational wall art.",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR2.webp",
    imageBefore: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR2.webp",
    imageAfter: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR2.webp",
    partnerBeneficiaries: "450+ Students"
  },
  {
    id: "sanitation-water",
    title: "Modern Hygienic Washrooms & Clean Water Plant",
    location: "Zilla Parishad School Complex",
    category: "WASH Sanitation",
    beforeText: "Unusable unhygienic washroom facilities leading to student illness and high female absentee rates during school days.",
    afterText: "Renovated with modern ceramic tiles, proper ventilation, running water, separate girl-friendly cubicles, and clean drinking water filtration systems.",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR3.webp",
    imageBefore: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR3.webp",
    imageAfter: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/CSR3.webp",
    partnerBeneficiaries: "600+ Students & Teachers"
  }
];

export const CSR_THEMATIC_AREAS = [
  {
    title: "Hunger Relief & Daily Nutrition",
    desc: "Targeted food distribution drives across underserved communities to eliminate malnutrition.",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/Hunger-Relief-Initiative.webp"
  },
  {
    title: "Disaster Relief & Rehabilitation",
    desc: "Rapid response and structural relief materials deployed to monsoon flood and disaster zones.",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/Disaster-Relief-Work.webp"
  },
  {
    title: "Education Support & STEM Classrooms",
    desc: "Upgrading rural schools with modern digital learning equipment, desks, and library kits.",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/Education-Support-for-the-Underprivileged.webp"
  },
  {
    title: "Healthcare & Free Medical Camps",
    desc: "Organizing general health checkups, dental screenings, and subsidized medicine distribution.",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/csr/Healthcare-and-Medical-Aid.webp"
  }
];

export const AWARDS_LIST = [
  {
    id: 1,
    title: "National Icon Award 2026",
    organization: "National Social Excellence Summit",
    location: "Mumbai, Maharashtra",
    year: "2026",
    category: "Best Old Age Home & Senior Care Initiative",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/RS-BEST_OLDAGE_HOME_INITIATIVE.webp",
    desc: "Awarded in recognition of exceptional and compassionate elder care facilities, healthcare provision, and social dignity restoration for abandoned seniors."
  },
  {
    id: 2,
    title: "National Prestige Award 2026",
    organization: "Humanitarian Welfare Confederation",
    location: "New Delhi",
    year: "2026",
    category: "Pioneering Child Shelter & Grassroots Welfare",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/Prestige-Award-2026.webp",
    desc: "Presented in the national capital for sustainable community impact and operating benchmark child shelter facilities in Mumbai."
  },
  {
    id: 3,
    title: "Dr. Shyama Prasad Mukherjee Memorial Award 2025",
    organization: "National Civic Excellence Council",
    location: "Mumbai",
    year: "2025",
    category: "Humanitarian Service & Disaster Response",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/Shyam-Prasad-Mukharjee.webp",
    desc: "Honoring tireless disaster relief efforts and rapid deployment of emergency supplies during Maharashtra monsoon floods."
  },
  {
    id: 4,
    title: "Bharat Shiksha Ratan Award 2025",
    organization: "All India Education Welfare Federation",
    location: "Mumbai",
    year: "2025",
    category: "Rural Literacy & Tribal School Support",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/RS-bharat-sikshs-ratan-award.webp",
    desc: "Recognizing outstanding contributions in reducing rural school dropout rates through stationery, bag, and bicycle distribution drives."
  },
  {
    id: 5,
    title: "Global Legacy Awards 2025",
    organization: "Global Social Impact Forum",
    location: "Mumbai",
    year: "2025",
    category: "Excellence in Hunger Alleviation & NGO Transparency",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/RS-GLA-Award-Jully.webp",
    desc: "Awarded for transparent non-profit governance, 80G donor compliance, and impactful daily meal operations across Maharashtra."
  },
  {
    id: 6,
    title: "India Business Award (IBA)",
    organization: "National Business & CSR Forum",
    location: "Mumbai",
    year: "2025",
    category: "Exemplary Grassroots NGO Execution",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/RS-IBA-Award.webp",
    desc: "Recognizing structured corporate social responsibility partnership execution and high social return on investment."
  },
  {
    id: 7,
    title: "Certificate of Honour - Swami Samarth Math",
    organization: "Shree Swami Samarth Seva Trust",
    location: "Maharashtra",
    year: "2025",
    category: "Compassionate Social Work & Community Welfare",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/Shree-Swami-Samarth.webp",
    desc: "Awarded for continuous service towards child feeding, medical aid, and shelter for destitute individuals."
  },
  {
    id: 8,
    title: "Zilla Parishad Virar School Appreciation Award",
    organization: "Zilla Parishad Education Dept",
    location: "Virar, Palghar",
    year: "2025",
    category: "School Infrastructure & Sanitation Upgrade",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/Zilla-Parishad-Virar-School-Appreciation-Award.webp",
    desc: "Special appreciation for transforming government school sanitation and educational environments for rural children."
  },
  {
    id: 9,
    title: "Legal Awareness Recognition",
    organization: "Thane District Legal Services Authority",
    location: "Thane District Court",
    year: "2024",
    category: "Legal Aid & Child Rights Protection",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/awards/Legal-Awareness-Recognition-Thane-District-Legal-Services-Authority.webp",
    desc: "Appreciation for conducting grassroots child rights, human dignity, and legal aid literacy workshops across Thane district."
  }
];

export const CORPORATE_PARTNERS = [
  { name: "Lodha Foundation", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-lodha.webp", logoText: "LODHA", color: "text-amber-700 bg-amber-50" },
  { name: "Tata Consultancy Services (TCS)", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-tcs.webp", logoText: "TCS", color: "text-blue-700 bg-blue-50" },
  { name: "Zomato Feeding India", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-zomato.webp", logoText: "ZOMATO", color: "text-red-700 bg-red-50" },
  { name: "Oracle Corporation", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-oracle.webp", logoText: "ORACLE", color: "text-rose-700 bg-rose-50" },
  { name: "Larsen & Toubro (L&T)", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-l&t.webp", logoText: "L&T", color: "text-slate-800 bg-slate-100" },
  { name: "BookMyShow Charity", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-book-my-show.webp", logoText: "BOOKMYSHOW", color: "text-red-600 bg-red-50" },
  { name: "Indraprastha Gas Limited (IGL)", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-igl.webp", logoText: "IGL", color: "text-emerald-700 bg-emerald-50" },
  { name: "Anglo-Eastern Maritime", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-angelo-eastern.webp", logoText: "ANGLO-EASTERN", color: "text-sky-800 bg-sky-50" },
  { name: "Hitachi ABB Power Grids", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-hitachi-abb.webp", logoText: "HITACHI", color: "text-slate-900 bg-neutral-100" },
  { name: "Relaxo Footwears", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-relaxo.webp", logoText: "RELAXO", color: "text-blue-800 bg-blue-50" },
  { name: "Indian Oil Corporation", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-indian-oil.webp", logoText: "INDIAN OIL", color: "text-orange-700 bg-orange-50" },
  { name: "Hinduja College", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-hinduja-college.webp", logoText: "HINDUJA", color: "text-indigo-800 bg-indigo-50" },
  { name: "Richa Global Exports", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-richa-global.webp", logoText: "RICHA GLOBAL", color: "text-purple-800 bg-purple-50" },
  { name: "RPG Enterprises", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-rpg.webp", logoText: "RPG", color: "text-cyan-800 bg-cyan-50" },
  { name: "Rediffmail India", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-rediffmail.webp", logoText: "REDIFF", color: "text-red-700 bg-red-50" },
  { name: "Carnival Cinemas", logoUrl: "https://www.riddhisiddhicharitabletrust.org/static/client/RS-our-partners-carnival-cinema.webp", logoText: "CARNIVAL", color: "text-yellow-700 bg-yellow-50" }
];

export const SHELTER_ITEMS_NEEDED = [
  { name: "Monthly Grocery Ration Kit", cost: 1500, unit: "Per Family / Month", icon: "Package", image: "https://www.riddhisiddhicharitabletrust.org/static/images/ads/ashram/Rice-dal-atta-1kg.webp", desc: "Rice, Wheat, Dal, Oil, Spices, Salt, Sugar" },
  { name: "Child Nutrition & Milk Support", cost: 800, unit: "Per Child / Month", icon: "Coffee", image: "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Orphanage-cart-milk.webp", desc: "Daily fresh milk, fruits, protein supplements" },
  { name: "School Uniform & Footwear", cost: 1200, unit: "Per Child / Year", icon: "Shirt", image: "https://www.riddhisiddhicharitabletrust.org/static/images/ads/ashram/school-Uniform.webp", desc: "2 pairs of stitched uniform, shoes, socks, raincoat" },
  { name: "Essential Medicine & First Aid Kit", cost: 1000, unit: "Per Child / Quarter", icon: "PlusCircle", image: "https://www.riddhisiddhicharitabletrust.org/static/images/ads/ashram/Medkit.webp", desc: "Vitamins, band-aids, antiseptics, cough syrup" },
  { name: "Cooking Oil 15L Bulk Tin", cost: 2400, unit: "Per Month / Shelter", icon: "Package", image: "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Orphanage-cart-oil-15l.webp", desc: "Pure cooking oil for daily meals of 65+ children" },
  { name: "Full Academic Stationery Pack", cost: 650, unit: "Per Student / Term", icon: "Book", image: "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Stationery.webp", desc: "Notebooks, pens, pencils, geometry box, drawing pad" },
  { name: "Personal Hygiene & Sanitation Pack", cost: 450, unit: "Per Month", icon: "Sparkles", image: "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Hygiene-Kit.webp", desc: "Soaps, toothpaste, toothbrushes, hair oil, sanitizer" },
  { name: "Sugar & Sweet Supply (50kg)", cost: 2100, unit: "Per Month / Shelter", icon: "Package", image: "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Orphanage-cart-sugar.webp", desc: "Monthly sugar supply for milk, breakfast, and tea" }
];

export const SCHOOL_KIT_ITEMS = [
  {
    name: "Heavy-Duty Waterproof Bag",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/school/Bag.webp",
    cost: 350,
    desc: "Durable water-resistant school bag designed to withstand heavy Maharashtra monsoon rains."
  },
  {
    name: "Monsoon Raincoat",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/school/raincoat.webp",
    cost: 250,
    desc: "Protective hooded raincoat so tribal students can walk miles to school without falling ill."
  },
  {
    name: "Full Year Stationery Pack",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/school/stationery.webp",
    cost: 200,
    desc: "12 four-line/single-line notebooks, drawing pad, pens, pencils, eraser, and geometry compass box."
  },
  {
    name: "School Uniform Set",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/school/Uniform.webp",
    cost: 500,
    desc: "Custom stitched pair of school uniforms adhering to state government school standards."
  },
  {
    name: "Sturdy School Shoes & Socks",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/school/Shoes.webp",
    cost: 300,
    desc: "Durable all-weather footwear preventing foot infections during rural commutes."
  },
  {
    name: "Complete Combo School Kit",
    image: "https://www.riddhisiddhicharitabletrust.org/static/images/school/school-kit.webp",
    cost: 650,
    desc: "All-in-one bundle containing bag, raincoat, full stationery set, lunchbox, and water bottle."
  }
];

export const CHILD_SPONSORSHIP_PACKAGES = [
  {
    title: "Monthly Child Support",
    amount: 2500,
    duration: "Per Month",
    popular: true,
    benefits: [
      "4 daily hot, balanced nutritious meals",
      "School tuition fees & study materials",
      "Clean residential boarding & bedding",
      "Regular pediatric health checkups & vitamins"
    ],
    desc: "Provides total holistic care for one shelter resident child for a full month."
  },
  {
    title: "Quarterly Care Sponsor",
    amount: 7500,
    duration: "Per Quarter (3 Months)",
    popular: false,
    benefits: [
      "3 months full living & academic expenses",
      "New pair of stitched school uniforms & shoes",
      "Monsoon rainwear & heavy waterproof bag",
      "Quarterly progress report sent to your email"
    ],
    desc: "Covers extensive education coaching, clothing, and wellness for 3 consecutive months."
  },
  {
    title: "Annual Transformation Sponsor",
    amount: 30000,
    duration: "Per Year (12 Months)",
    popular: false,
    benefits: [
      "Full 365-day residential shelter sponsorship",
      "Complete academic school kits & coaching",
      "Special festival clothes & birthday celebration",
      "Personalized digital impact certificate & tax receipt"
    ],
    desc: "Permanently transforms a child's destiny, ensuring they never drop out of school."
  }
];

export const ORPHANAGE_GALLERY = [
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-1.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-2.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-3.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-4.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-5.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-6.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-7.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-8.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-9.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/RS-Orphanage-Gallery-10.webp",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/A-Safe-Home-for-Orphans-Our-Shelter-in-Mumbai_01.png",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/A-Safe-Home-for-Orphans-Our-Shelter-in-Mumbai_02.png",
  "https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/A-Safe-Home-for-Orphans-Our-Shelter-in-Mumbai_03.png"
];

export const TRUST_VIDEOS = [
  {
    id: 1,
    title: "A Day in the Life: Airoli Child Shelter Home",
    category: "Shelter & Child Welfare",
    embedUrl: "https://www.youtube.com/embed/P8nIJXnFock?si=yMjyG_jKAIUhyW-3",
    youtubeUrl: "https://www.youtube.com/watch?v=P8nIJXnFock",
    description: "Step inside our residential shelter in Airoli, Mumbai where 65+ children receive loving foster care, nutritious meals, clean bedding, and remedial education."
  },
  {
    id: 2,
    title: "Festival Celebrations & Joy at Shelter Home",
    category: "Shelter & Child Welfare",
    embedUrl: "https://www.youtube.com/embed/avJONxCQeWo?si=Q1tDtVA16h740w_s",
    youtubeUrl: "https://www.youtube.com/watch?v=avJONxCQeWo",
    description: "Watch the smiling faces of our resident children during cultural festivals, birthday celebrations, and community arts & craft workshops."
  },
  {
    id: 3,
    title: "Monsoon School Kits & Rainwear Distribution Drive",
    category: "Education & Literacy",
    embedUrl: "https://www.youtube.com/embed/dq1C9Cs2Nrs?si=MMnGvzhSO_IgW4-g",
    youtubeUrl: "https://www.youtube.com/watch?v=dq1C9Cs2Nrs",
    description: "Equipping underprivileged rural and tribal students across Maharashtra with waterproof school bags, raincoats, notebooks, and geometry sets."
  }
];

export const GALLERY_ITEMS = [
  {
    "id": 1,
    "title": "School Stationery & Book Distribution #1",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1833_Am6v6zk.webp"
  },
  {
    "id": 2,
    "title": "Airoli Shelter Home & Foster Care #2",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1161_QD87vuC.webp"
  },
  {
    "id": 3,
    "title": "Daily Nutrition & Dry Ration Kits #3",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1088.webp"
  },
  {
    "id": 4,
    "title": "Medical Checkup & Health Camps #4",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1071.webp"
  },
  {
    "id": 5,
    "title": "Senior Citizen Dignity & Care #5",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1008.webp"
  },
  {
    "id": 6,
    "title": "Vocational Sewing & Skill Training #6",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0769.webp"
  },
  {
    "id": 7,
    "title": "Emergency Flood Relief & Tarpaulins #7",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0646.webp"
  },
  {
    "id": 8,
    "title": "Street Dog Daily Feeding Drive #8",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0572.webp"
  },
  {
    "id": 9,
    "title": "School Stationery & Book Distribution #9",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0571-copy.webp"
  },
  {
    "id": 10,
    "title": "Airoli Shelter Home & Foster Care #10",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_5918.jpg.webp"
  },
  {
    "id": 11,
    "title": "Medical Checkup & Health Camps #11",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2973.jpg.webp"
  },
  {
    "id": 12,
    "title": "School Stationery & Book Distribution #12",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2935.jpg.webp"
  },
  {
    "id": 13,
    "title": "School Stationery & Book Distribution #13",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2876.jpg.webp"
  },
  {
    "id": 14,
    "title": "Airoli Shelter Home & Foster Care #14",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_9521.jpg.webp"
  },
  {
    "id": 15,
    "title": "Community Outreach & Welfare Drive #15",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_5622.jpg.webp"
  },
  {
    "id": 16,
    "title": "Community Outreach & Welfare Drive #16",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_5606.jpg.webp"
  },
  {
    "id": 17,
    "title": "Community Outreach & Welfare Drive #17",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_5590.jpg.webp"
  },
  {
    "id": 18,
    "title": "Community Outreach & Welfare Drive #18",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3672.jpg.webp"
  },
  {
    "id": 19,
    "title": "Community Outreach & Welfare Drive #19",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3651.jpg.webp"
  },
  {
    "id": 20,
    "title": "Community Outreach & Welfare Drive #20",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3639.jpg.webp"
  },
  {
    "id": 21,
    "title": "Community Outreach & Welfare Drive #21",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3690.jpg.webp"
  },
  {
    "id": 22,
    "title": "Community Outreach & Welfare Drive #22",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3565.webp"
  },
  {
    "id": 23,
    "title": "Community Outreach & Welfare Drive #23",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3558.webp"
  },
  {
    "id": 24,
    "title": "Community Outreach & Welfare Drive #24",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3542.webp"
  },
  {
    "id": 25,
    "title": "Emergency Flood Relief & Tarpaulins #25",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3519_LkVl34V.webp"
  },
  {
    "id": 26,
    "title": "Community Outreach & Welfare Drive #26",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3506.webp"
  },
  {
    "id": 27,
    "title": "Community Outreach & Welfare Drive #27",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3469.webp"
  },
  {
    "id": 28,
    "title": "Community Outreach & Welfare Drive #28",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3414.webp"
  },
  {
    "id": 29,
    "title": "Community Outreach & Welfare Drive #29",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3360.webp"
  },
  {
    "id": 30,
    "title": "Airoli Shelter Home & Foster Care #30",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_9470.jpg.webp"
  },
  {
    "id": 31,
    "title": "Airoli Shelter Home & Foster Care #31",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_9459.jpg.webp"
  },
  {
    "id": 32,
    "title": "Airoli Shelter Home & Foster Care #32",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_9455.jpg.webp"
  },
  {
    "id": 33,
    "title": "Airoli Shelter Home & Foster Care #33",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_9446.jpg.webp"
  },
  {
    "id": 34,
    "title": "School Stationery & Book Distribution #34",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2488.JPG.webp"
  },
  {
    "id": 35,
    "title": "School Stationery & Book Distribution #35",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2460.JPG.webp"
  },
  {
    "id": 36,
    "title": "School Stationery & Book Distribution #36",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2446.JPG.webp"
  },
  {
    "id": 37,
    "title": "School Stationery & Book Distribution #37",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2437.JPG.webp"
  },
  {
    "id": 38,
    "title": "School Stationery & Book Distribution #38",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2416.JPG.webp"
  },
  {
    "id": 39,
    "title": "School Stationery & Book Distribution #39",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2261.JPG.webp"
  },
  {
    "id": 40,
    "title": "School Stationery & Book Distribution #40",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2259.JPG.webp"
  },
  {
    "id": 41,
    "title": "School Stationery & Book Distribution #41",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2230.JPG.webp"
  },
  {
    "id": 42,
    "title": "School Stationery & Book Distribution #42",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2349.JPG_8roRyQt.webp"
  },
  {
    "id": 43,
    "title": "School Stationery & Book Distribution #43",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2331.JPG_LdvmKQ4.webp"
  },
  {
    "id": 44,
    "title": "School Stationery & Book Distribution #44",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2066.JPG.webp"
  },
  {
    "id": 45,
    "title": "School Stationery & Book Distribution #45",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2062.JPG.webp"
  },
  {
    "id": 46,
    "title": "School Stationery & Book Distribution #46",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2029.JPG.webp"
  },
  {
    "id": 47,
    "title": "School Stationery & Book Distribution #47",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2018.JPG.webp"
  },
  {
    "id": 48,
    "title": "School Stationery & Book Distribution #48",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1961.JPG.webp"
  },
  {
    "id": 49,
    "title": "School Stationery & Book Distribution #49",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1941.JPG.webp"
  },
  {
    "id": 50,
    "title": "School Stationery & Book Distribution #50",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1912.JPG.webp"
  },
  {
    "id": 51,
    "title": "School Stationery & Book Distribution #51",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1904.JPG.webp"
  },
  {
    "id": 52,
    "title": "Community Outreach & Welfare Drive #52",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2922.webp"
  },
  {
    "id": 53,
    "title": "Community Outreach & Welfare Drive #53",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2825.webp"
  },
  {
    "id": 54,
    "title": "School Stationery & Book Distribution #54",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0432_F1N84UO.webp"
  },
  {
    "id": 55,
    "title": "School Stationery & Book Distribution #55",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0207_X8v64i4.webp"
  },
  {
    "id": 56,
    "title": "Community Outreach & Welfare Drive #56",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0795.webp"
  },
  {
    "id": 57,
    "title": "Community Outreach & Welfare Drive #57",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0764.webp"
  },
  {
    "id": 58,
    "title": "Community Outreach & Welfare Drive #58",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0727.webp"
  },
  {
    "id": 59,
    "title": "School Stationery & Book Distribution #59",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_7665.webp"
  },
  {
    "id": 60,
    "title": "School Stationery & Book Distribution #60",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9834.webp"
  },
  {
    "id": 61,
    "title": "School Stationery & Book Distribution #61",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9811.webp"
  },
  {
    "id": 62,
    "title": "School Stationery & Book Distribution #62",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9787.webp"
  },
  {
    "id": 63,
    "title": "School Stationery & Book Distribution #63",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_7791.webp"
  },
  {
    "id": 64,
    "title": "School Stationery & Book Distribution #64",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_7687.webp"
  },
  {
    "id": 65,
    "title": "School Stationery & Book Distribution #65",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0054.webp"
  },
  {
    "id": 66,
    "title": "School Stationery & Book Distribution #66",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0043.webp"
  },
  {
    "id": 67,
    "title": "Airoli Shelter Home & Foster Care #67",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_6905.webp"
  },
  {
    "id": 68,
    "title": "Airoli Shelter Home & Foster Care #68",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_6834.webp"
  },
  {
    "id": 69,
    "title": "Airoli Shelter Home & Foster Care #69",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7832.webp"
  },
  {
    "id": 70,
    "title": "Airoli Shelter Home & Foster Care #70",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7715.webp"
  },
  {
    "id": 71,
    "title": "Airoli Shelter Home & Foster Care #71",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_6189.webp"
  },
  {
    "id": 72,
    "title": "Airoli Shelter Home & Foster Care #72",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3059.webp"
  },
  {
    "id": 73,
    "title": "Airoli Shelter Home & Foster Care #73",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3025.webp"
  },
  {
    "id": 74,
    "title": "Airoli Shelter Home & Foster Care #74",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2993.webp"
  },
  {
    "id": 75,
    "title": "Airoli Shelter Home & Foster Care #75",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2924.webp"
  },
  {
    "id": 76,
    "title": "Airoli Shelter Home & Foster Care #76",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4799.webp"
  },
  {
    "id": 77,
    "title": "Airoli Shelter Home & Foster Care #77",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4767.webp"
  },
  {
    "id": 78,
    "title": "Airoli Shelter Home & Foster Care #78",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4751.webp"
  },
  {
    "id": 79,
    "title": "Airoli Shelter Home & Foster Care #79",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_5746.webp"
  },
  {
    "id": 80,
    "title": "Airoli Shelter Home & Foster Care #80",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_5702.webp"
  },
  {
    "id": 81,
    "title": "Airoli Shelter Home & Foster Care #81",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4581.webp"
  },
  {
    "id": 82,
    "title": "Airoli Shelter Home & Foster Care #82",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4434_51hpn3C.webp"
  },
  {
    "id": 83,
    "title": "Daily Nutrition & Dry Ration Kits #83",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1786.webp"
  },
  {
    "id": 84,
    "title": "Daily Nutrition & Dry Ration Kits #84",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1777.webp"
  },
  {
    "id": 85,
    "title": "Daily Nutrition & Dry Ration Kits #85",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1768.webp"
  },
  {
    "id": 86,
    "title": "Daily Nutrition & Dry Ration Kits #86",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1721.webp"
  },
  {
    "id": 87,
    "title": "Daily Nutrition & Dry Ration Kits #87",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1872.webp"
  },
  {
    "id": 88,
    "title": "Daily Nutrition & Dry Ration Kits #88",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1861.webp"
  },
  {
    "id": 89,
    "title": "School Stationery & Book Distribution #89",
    "category": "Education",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1833.webp"
  },
  {
    "id": 90,
    "title": "Daily Nutrition & Dry Ration Kits #90",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1323.webp"
  },
  {
    "id": 91,
    "title": "Daily Nutrition & Dry Ration Kits #91",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1277.webp"
  },
  {
    "id": 92,
    "title": "Daily Nutrition & Dry Ration Kits #92",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1254.webp"
  },
  {
    "id": 93,
    "title": "Daily Nutrition & Dry Ration Kits #93",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_5277.webp"
  },
  {
    "id": 94,
    "title": "Daily Nutrition & Dry Ration Kits #94",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1056.webp"
  },
  {
    "id": 95,
    "title": "Daily Nutrition & Dry Ration Kits #95",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1019.webp"
  },
  {
    "id": 96,
    "title": "Daily Nutrition & Dry Ration Kits #96",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1003.webp"
  },
  {
    "id": 97,
    "title": "Daily Nutrition & Dry Ration Kits #97",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0858.webp"
  },
  {
    "id": 98,
    "title": "Daily Nutrition & Dry Ration Kits #98",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0856.webp"
  },
  {
    "id": 99,
    "title": "Daily Nutrition & Dry Ration Kits #99",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0847.webp"
  },
  {
    "id": 100,
    "title": "Daily Nutrition & Dry Ration Kits #100",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0826.webp"
  },
  {
    "id": 101,
    "title": "Daily Nutrition & Dry Ration Kits #101",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1194.webp"
  },
  {
    "id": 102,
    "title": "Airoli Shelter Home & Foster Care #102",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1161.webp"
  },
  {
    "id": 103,
    "title": "Daily Nutrition & Dry Ration Kits #103",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1147.webp"
  },
  {
    "id": 104,
    "title": "Daily Nutrition & Dry Ration Kits #104",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1126.webp"
  },
  {
    "id": 105,
    "title": "Daily Nutrition & Dry Ration Kits #105",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0464.webp"
  },
  {
    "id": 106,
    "title": "Daily Nutrition & Dry Ration Kits #106",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0435.webp"
  },
  {
    "id": 107,
    "title": "Daily Nutrition & Dry Ration Kits #107",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0397.webp"
  },
  {
    "id": 108,
    "title": "Daily Nutrition & Dry Ration Kits #108",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0763.webp"
  },
  {
    "id": 109,
    "title": "Medical Checkup & Health Camps #109",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0696.webp"
  },
  {
    "id": 110,
    "title": "Medical Checkup & Health Camps #110",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0689.webp"
  },
  {
    "id": 111,
    "title": "Medical Checkup & Health Camps #111",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_5221.webp"
  },
  {
    "id": 112,
    "title": "Medical Checkup & Health Camps #112",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0524.webp"
  },
  {
    "id": 113,
    "title": "Medical Checkup & Health Camps #113",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0514.webp"
  },
  {
    "id": 114,
    "title": "Medical Checkup & Health Camps #114",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0645.webp"
  },
  {
    "id": 115,
    "title": "Medical Checkup & Health Camps #115",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0613.webp"
  },
  {
    "id": 116,
    "title": "Medical Checkup & Health Camps #116",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0568.webp"
  },
  {
    "id": 117,
    "title": "Medical Checkup & Health Camps #117",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0221.webp"
  },
  {
    "id": 118,
    "title": "Medical Checkup & Health Camps #118",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0137.webp"
  },
  {
    "id": 119,
    "title": "Medical Checkup & Health Camps #119",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9961.webp"
  },
  {
    "id": 120,
    "title": "Medical Checkup & Health Camps #120",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8784.webp"
  },
  {
    "id": 121,
    "title": "Medical Checkup & Health Camps #121",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8713.webp"
  },
  {
    "id": 122,
    "title": "Medical Checkup & Health Camps #122",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8658.webp"
  },
  {
    "id": 123,
    "title": "Medical Checkup & Health Camps #123",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7810.webp"
  },
  {
    "id": 124,
    "title": "Medical Checkup & Health Camps #124",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7778.webp"
  },
  {
    "id": 125,
    "title": "Medical Checkup & Health Camps #125",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7761.webp"
  },
  {
    "id": 126,
    "title": "Medical Checkup & Health Camps #126",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7744.webp"
  },
  {
    "id": 127,
    "title": "Medical Checkup & Health Camps #127",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7263.webp"
  },
  {
    "id": 128,
    "title": "Medical Checkup & Health Camps #128",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7198.webp"
  },
  {
    "id": 129,
    "title": "Medical Checkup & Health Camps #129",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7193.webp"
  },
  {
    "id": 130,
    "title": "Medical Checkup & Health Camps #130",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7138.webp"
  },
  {
    "id": 131,
    "title": "Medical Checkup & Health Camps #131",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_1032.webp"
  },
  {
    "id": 132,
    "title": "Medical Checkup & Health Camps #132",
    "category": "Healthcare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_1027.webp"
  },
  {
    "id": 133,
    "title": "Senior Citizen Dignity & Care #133",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4184.webp"
  },
  {
    "id": 134,
    "title": "Senior Citizen Dignity & Care #134",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4172.webp"
  },
  {
    "id": 135,
    "title": "Senior Citizen Dignity & Care #135",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2927.webp"
  },
  {
    "id": 136,
    "title": "Senior Citizen Dignity & Care #136",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2816.webp"
  },
  {
    "id": 137,
    "title": "Senior Citizen Dignity & Care #137",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2798.webp"
  },
  {
    "id": 138,
    "title": "Senior Citizen Dignity & Care #138",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2796.webp"
  },
  {
    "id": 139,
    "title": "Community Support & Outreach #139",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/WhatsApp_Image_2025-01-30_at_10.51.25.webp"
  },
  {
    "id": 140,
    "title": "Community Support & Outreach #140",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/WhatsApp_Image_2025-01-30_at_10.51.16.webp"
  },
  {
    "id": 141,
    "title": "Senior Citizen Dignity & Care #141",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2661.webp"
  },
  {
    "id": 142,
    "title": "Senior Citizen Dignity & Care #142",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2638.webp"
  },
  {
    "id": 143,
    "title": "Senior Citizen Dignity & Care #143",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2030.webp"
  },
  {
    "id": 144,
    "title": "Senior Citizen Dignity & Care #144",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2021.webp"
  },
  {
    "id": 145,
    "title": "Senior Citizen Dignity & Care #145",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1609.webp"
  },
  {
    "id": 146,
    "title": "Senior Citizen Dignity & Care #146",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1581.webp"
  },
  {
    "id": 147,
    "title": "Senior Citizen Dignity & Care #147",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_1540.webp"
  },
  {
    "id": 148,
    "title": "Senior Citizen Dignity & Care #148",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2387.webp"
  },
  {
    "id": 149,
    "title": "Senior Citizen Dignity & Care #149",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2308.webp"
  },
  {
    "id": 150,
    "title": "Senior Citizen Dignity & Care #150",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2097.webp"
  },
  {
    "id": 151,
    "title": "Senior Citizen Dignity & Care #151",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_6818.webp"
  },
  {
    "id": 152,
    "title": "Senior Citizen Dignity & Care #152",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_6815.webp"
  },
  {
    "id": 153,
    "title": "Senior Citizen Dignity & Care #153",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_6762.webp"
  },
  {
    "id": 154,
    "title": "Senior Citizen Dignity & Care #154",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4840.webp"
  },
  {
    "id": 155,
    "title": "Senior Citizen Dignity & Care #155",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4733.webp"
  },
  {
    "id": 156,
    "title": "Senior Citizen Dignity & Care #156",
    "category": "Old Age",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4676.webp"
  },
  {
    "id": 157,
    "title": "Vocational Sewing & Skill Training #157",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8433.webp"
  },
  {
    "id": 158,
    "title": "Vocational Sewing & Skill Training #158",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8375.webp"
  },
  {
    "id": 159,
    "title": "Vocational Sewing & Skill Training #159",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8288.webp"
  },
  {
    "id": 160,
    "title": "Vocational Sewing & Skill Training #160",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0028.webp"
  },
  {
    "id": 161,
    "title": "Vocational Sewing & Skill Training #161",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9855.webp"
  },
  {
    "id": 162,
    "title": "Vocational Sewing & Skill Training #162",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9841.webp"
  },
  {
    "id": 163,
    "title": "Vocational Sewing & Skill Training #163",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8074.webp"
  },
  {
    "id": 164,
    "title": "Vocational Sewing & Skill Training #164",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8044.webp"
  },
  {
    "id": 165,
    "title": "Vocational Sewing & Skill Training #165",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8018.webp"
  },
  {
    "id": 166,
    "title": "Vocational Sewing & Skill Training #166",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7927.webp"
  },
  {
    "id": 167,
    "title": "Vocational Sewing & Skill Training #167",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7894.webp"
  },
  {
    "id": 168,
    "title": "Vocational Sewing & Skill Training #168",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7818.webp"
  },
  {
    "id": 169,
    "title": "Vocational Sewing & Skill Training #169",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7805.webp"
  },
  {
    "id": 170,
    "title": "Vocational Sewing & Skill Training #170",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7792.webp"
  },
  {
    "id": 171,
    "title": "Vocational Sewing & Skill Training #171",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7789.webp"
  },
  {
    "id": 172,
    "title": "Vocational Sewing & Skill Training #172",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7748.webp"
  },
  {
    "id": 173,
    "title": "Vocational Sewing & Skill Training #173",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7707.webp"
  },
  {
    "id": 174,
    "title": "Vocational Sewing & Skill Training #174",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7677.webp"
  },
  {
    "id": 175,
    "title": "Street Dog Daily Feeding Drive #175",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8743.webp"
  },
  {
    "id": 176,
    "title": "Street Dog Daily Feeding Drive #176",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8564.webp"
  },
  {
    "id": 177,
    "title": "Street Dog Daily Feeding Drive #177",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_5448.webp"
  },
  {
    "id": 178,
    "title": "Street Dog Daily Feeding Drive #178",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_5402.webp"
  },
  {
    "id": 179,
    "title": "Street Dog Daily Feeding Drive #179",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_5376.webp"
  },
  {
    "id": 180,
    "title": "Street Dog Daily Feeding Drive #180",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_5353.webp"
  },
  {
    "id": 181,
    "title": "Street Dog Daily Feeding Drive #181",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_5341.webp"
  },
  {
    "id": 182,
    "title": "Street Dog Daily Feeding Drive #182",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_5260.webp"
  },
  {
    "id": 183,
    "title": "Street Dog Daily Feeding Drive #183",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8429.webp"
  },
  {
    "id": 184,
    "title": "Street Dog Daily Feeding Drive #184",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8413.webp"
  },
  {
    "id": 185,
    "title": "Street Dog Daily Feeding Drive #185",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8272.webp"
  },
  {
    "id": 186,
    "title": "Street Dog Daily Feeding Drive #186",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8525.webp"
  },
  {
    "id": 187,
    "title": "Street Dog Daily Feeding Drive #187",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8510.webp"
  },
  {
    "id": 188,
    "title": "Street Dog Daily Feeding Drive #188",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8492.webp"
  },
  {
    "id": 189,
    "title": "Street Dog Daily Feeding Drive #189",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9097.webp"
  },
  {
    "id": 190,
    "title": "Street Dog Daily Feeding Drive #190",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9096.webp"
  },
  {
    "id": 191,
    "title": "Street Dog Daily Feeding Drive #191",
    "category": "Animal Welfare",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8988.webp"
  },
  {
    "id": 192,
    "title": "Emergency Flood Relief & Tarpaulins #192",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3535.webp"
  },
  {
    "id": 193,
    "title": "Emergency Flood Relief & Tarpaulins #193",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3519.webp"
  },
  {
    "id": 194,
    "title": "Emergency Flood Relief & Tarpaulins #194",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_3392.webp"
  },
  {
    "id": 195,
    "title": "Emergency Flood Relief & Tarpaulins #195",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8135.webp"
  },
  {
    "id": 196,
    "title": "Emergency Flood Relief & Tarpaulins #196",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8126.webp"
  },
  {
    "id": 197,
    "title": "Emergency Flood Relief & Tarpaulins #197",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2125.webp"
  },
  {
    "id": 198,
    "title": "Emergency Flood Relief & Tarpaulins #198",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2063.webp"
  },
  {
    "id": 199,
    "title": "Emergency Flood Relief & Tarpaulins #199",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2042.webp"
  },
  {
    "id": 200,
    "title": "Emergency Flood Relief & Tarpaulins #200",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00019651.webp"
  },
  {
    "id": 201,
    "title": "Emergency Flood Relief & Tarpaulins #201",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00019583.webp"
  },
  {
    "id": 202,
    "title": "Daily Nutrition & Dry Ration Kits #202",
    "category": "Meals",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00010193.webp"
  },
  {
    "id": 203,
    "title": "Emergency Flood Relief & Tarpaulins #203",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00010122.webp"
  },
  {
    "id": 204,
    "title": "Emergency Flood Relief & Tarpaulins #204",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00010077.webp"
  },
  {
    "id": 205,
    "title": "Emergency Flood Relief & Tarpaulins #205",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/IMG_7489.webp"
  },
  {
    "id": 206,
    "title": "Emergency Flood Relief & Tarpaulins #206",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00019990.webp"
  },
  {
    "id": 207,
    "title": "Emergency Flood Relief & Tarpaulins #207",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00010008.webp"
  },
  {
    "id": 208,
    "title": "Emergency Flood Relief & Tarpaulins #208",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8560.webp"
  },
  {
    "id": 209,
    "title": "Community Support & Outreach #209",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00019972.webp"
  },
  {
    "id": 210,
    "title": "Community Support & Outreach #210",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00019909.webp"
  },
  {
    "id": 211,
    "title": "Community Support & Outreach #211",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8167.webp"
  },
  {
    "id": 212,
    "title": "Community Support & Outreach #212",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8112.webp"
  },
  {
    "id": 213,
    "title": "Community Support & Outreach #213",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7969.webp"
  },
  {
    "id": 214,
    "title": "Community Support & Outreach #214",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2969.webp"
  },
  {
    "id": 215,
    "title": "Community Support & Outreach #215",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2778.webp"
  },
  {
    "id": 216,
    "title": "Community Support & Outreach #216",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2652.webp"
  },
  {
    "id": 217,
    "title": "Community Support & Outreach #217",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4467.webp"
  },
  {
    "id": 218,
    "title": "Airoli Shelter Home & Foster Care #218",
    "category": "Shelter",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_4434.webp"
  },
  {
    "id": 219,
    "title": "Community Support & Outreach #219",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7918.webp"
  },
  {
    "id": 220,
    "title": "Community Support & Outreach #220",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_7680.webp"
  },
  {
    "id": 221,
    "title": "Community Support & Outreach #221",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_6719.webp"
  },
  {
    "id": 222,
    "title": "Community Support & Outreach #222",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/087A5545.webp"
  },
  {
    "id": 223,
    "title": "Community Support & Outreach #223",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_6721.webp"
  },
  {
    "id": 224,
    "title": "Community Support & Outreach #224",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0992.webp"
  },
  {
    "id": 225,
    "title": "Community Support & Outreach #225",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0943.webp"
  },
  {
    "id": 226,
    "title": "Community Support & Outreach #226",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0836.webp"
  },
  {
    "id": 227,
    "title": "Community Support & Outreach #227",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_0783.webp"
  },
  {
    "id": 228,
    "title": "Community Support & Outreach #228",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2449.webp"
  },
  {
    "id": 229,
    "title": "Community Support & Outreach #229",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2368.webp"
  },
  {
    "id": 230,
    "title": "Community Support & Outreach #230",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_2324.webp"
  },
  {
    "id": 231,
    "title": "Community Outreach & Welfare Drive #231",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/3_5GB19fK.webp"
  },
  {
    "id": 232,
    "title": "Community Outreach & Welfare Drive #232",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/2.webp"
  },
  {
    "id": 233,
    "title": "Community Outreach & Welfare Drive #233",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/1_Q5AsNAy.webp"
  },
  {
    "id": 234,
    "title": "Community Outreach & Welfare Drive #234",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/151_4yK4644.webp"
  },
  {
    "id": 235,
    "title": "Vocational Sewing & Skill Training #235",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/livelyhood_1_EKMMFaa.webp"
  },
  {
    "id": 236,
    "title": "Vocational Sewing & Skill Training #236",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/livelihood_dNoH4NM.webp"
  },
  {
    "id": 237,
    "title": "Vocational Sewing & Skill Training #237",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/livelyhood_1.webp"
  },
  {
    "id": 238,
    "title": "Vocational Sewing & Skill Training #238",
    "category": "Women Empowerment",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/livelihood_2.webp"
  },
  {
    "id": 239,
    "title": "Community Support & Outreach #239",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/childlabour1.webp"
  },
  {
    "id": 240,
    "title": "Community Support & Outreach #240",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/blood_donate.webp"
  },
  {
    "id": 241,
    "title": "Community Outreach & Welfare Drive #241",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/148.webp"
  },
  {
    "id": 242,
    "title": "Community Outreach & Welfare Drive #242",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/144.webp"
  },
  {
    "id": 243,
    "title": "Community Outreach & Welfare Drive #243",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/142.webp"
  },
  {
    "id": 244,
    "title": "Community Outreach & Welfare Drive #244",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/140.webp"
  },
  {
    "id": 245,
    "title": "Community Outreach & Welfare Drive #245",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/139.webp"
  },
  {
    "id": 246,
    "title": "Community Outreach & Welfare Drive #246",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/137_T2KaM4N.webp"
  },
  {
    "id": 247,
    "title": "Community Outreach & Welfare Drive #247",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/138.webp"
  },
  {
    "id": 248,
    "title": "Community Outreach & Welfare Drive #248",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/136.webp"
  },
  {
    "id": 249,
    "title": "Community Outreach & Welfare Drive #249",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/135.webp"
  },
  {
    "id": 250,
    "title": "Community Outreach & Welfare Drive #250",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/134.webp"
  },
  {
    "id": 251,
    "title": "Community Outreach & Welfare Drive #251",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9105_copy.webp"
  },
  {
    "id": 252,
    "title": "Community Outreach & Welfare Drive #252",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9038_copy.webp"
  },
  {
    "id": 253,
    "title": "Community Outreach & Welfare Drive #253",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_9008_copy.webp"
  },
  {
    "id": 254,
    "title": "Emergency Flood Relief & Tarpaulins #254",
    "category": "Disaster Relief",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8560_copy.webp"
  },
  {
    "id": 255,
    "title": "Community Outreach & Welfare Drive #255",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8179_copy.webp"
  },
  {
    "id": 256,
    "title": "Community Outreach & Welfare Drive #256",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/DSC_8158.webp"
  },
  {
    "id": 257,
    "title": "Community Outreach & Welfare Drive #257",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00019971_copy.webp"
  },
  {
    "id": 258,
    "title": "Community Outreach & Welfare Drive #258",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00010052_copy.webp"
  },
  {
    "id": 259,
    "title": "Community Outreach & Welfare Drive #259",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/151.webp"
  },
  {
    "id": 260,
    "title": "Community Outreach & Welfare Drive #260",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/148new.webp"
  },
  {
    "id": 261,
    "title": "Community Outreach & Welfare Drive #261",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/143.webp"
  },
  {
    "id": 262,
    "title": "Community Support & Outreach #262",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/WhatsApp_Image_2024-02-26_at_15.37.35_1_copy.webp"
  },
  {
    "id": 263,
    "title": "Community Support & Outreach #263",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/WhatsApp_Image_2024-02-26_at_15.37.27.webp"
  },
  {
    "id": 264,
    "title": "Community Support & Outreach #264",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/cl2.webp"
  },
  {
    "id": 265,
    "title": "Community Support & Outreach #265",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/cl.webp"
  },
  {
    "id": 266,
    "title": "Community Outreach & Welfare Drive #266",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/00019965_copy.webp"
  },
  {
    "id": 267,
    "title": "Community Outreach & Welfare Drive #267",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/29.webp"
  },
  {
    "id": 268,
    "title": "Community Outreach & Welfare Drive #268",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/28.webp"
  },
  {
    "id": 269,
    "title": "Community Outreach & Welfare Drive #269",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/27.webp"
  },
  {
    "id": 270,
    "title": "Community Outreach & Welfare Drive #270",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/1.webp"
  },
  {
    "id": 271,
    "title": "Community Outreach & Welfare Drive #271",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/110.webp"
  },
  {
    "id": 272,
    "title": "Community Outreach & Welfare Drive #272",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/47.webp"
  },
  {
    "id": 273,
    "title": "Community Outreach & Welfare Drive #273",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/44.webp"
  },
  {
    "id": 274,
    "title": "Community Outreach & Welfare Drive #274",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/32.webp"
  },
  {
    "id": 275,
    "title": "Community Outreach & Welfare Drive #275",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/31.webp"
  },
  {
    "id": 276,
    "title": "Community Outreach & Welfare Drive #276",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/121.webp"
  },
  {
    "id": 277,
    "title": "Community Outreach & Welfare Drive #277",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/120.webp"
  },
  {
    "id": 278,
    "title": "Community Outreach & Welfare Drive #278",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/117.webp"
  },
  {
    "id": 279,
    "title": "Community Outreach & Welfare Drive #279",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/114.webp"
  },
  {
    "id": 280,
    "title": "Community Outreach & Welfare Drive #280",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/59.webp"
  },
  {
    "id": 281,
    "title": "Community Outreach & Welfare Drive #281",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/58.webp"
  },
  {
    "id": 282,
    "title": "Community Outreach & Welfare Drive #282",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/57.webp"
  },
  {
    "id": 283,
    "title": "Community Outreach & Welfare Drive #283",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/56.webp"
  },
  {
    "id": 284,
    "title": "Community Outreach & Welfare Drive #284",
    "category": "Community",
    "image": "https://www.riddhisiddhicharitabletrust.org/media/media/55.webp"
  }
];

export const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' }
];

export const FAQS = [
  {
    q: "Is donation to Riddhi Siddhi Charitable Trust tax-exempt?",
    a: "Yes! Riddhi Siddhi Charitable Trust is registered under Section 80G of the Income Tax Act, 1961. Indian donors are eligible for an instant 50% tax exemption on their donated amount. Ensure you provide your PAN number to receive the mandatory Form 10BE tax certificate."
  },
  {
    q: "How do I receive my 80G tax receipt and Form 10BE certificate?",
    a: "Immediately upon donating through our website or direct bank transfer, our automated system generates an instant 80G digital receipt. Additionally, our accounts department files Form 10BE with the Income Tax Department and sends you the certificate directly to your email or WhatsApp."
  },
  {
    q: "Can I donate directly using UPI (Google Pay, PhonePe, Paytm, BHIM)?",
    a: "Yes! You can use our dynamic QR Code or transfer directly to our trust UPI ID 'riddhisiddhict@hdfcbank' or '9820737415@axisbank\. Your payment is routed directly to the verified trust bank account."
  },
  {
    q: "Can international donors contribute?",
    a: "Yes. International contributions can be wired directly to our official FCRA bank account with State Bank of India (New Delhi Main Branch, A/C: 40125001845, IFSC: SBIN0000691)."
  },
  {
    q: "Can corporate partners execute CSR projects with Riddhi Siddhi?",
    a: "Absolutely. We are fully eligible to implement CSR initiatives under Schedule VII of the Companies Act 2013 (Education, Healthcare, Sanitation, Senior Care, Disaster Relief). We provide complete CSR compliance documentation, project progress reports, utilization certificates, and audit trails."
  },
  {
    q: "Can I visit the Shelter Home in Airoli or Old Age Care projects?",
    a: "Yes, visitors and volunteers are welcome with prior appointment during visiting hours (Mon-Sat, 10 AM to 6 PM). Please contact us at +91 9820737415 or submit a request on our contact page."
  }
];
