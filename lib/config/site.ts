export interface SiteConfig {
  // Basic Site Information
  name: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  baseUrl: string;

  // Company Information
  company: {
    name: string;
    legalName: string;
    description: string;
    foundingYear: number;
    dealerCode: string;
  };

  // SEO Configuration
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    titleSeparator: string;
    defaultDescription: string;
    siteLanguage: string;
    openGraph: {
      type: string;
      siteName: string;
      profile: {
        firstName: string;
        lastName: string;
      };
    };
  };

  // Social Media Links
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };

  // Contact Configuration
  contact: {
    form: {
      successMessage: string;
      errorMessage: string;
    };
    whatsapp: {
      defaultMessage: string;
      autoOpen: boolean;
    };
  };

  // Features Configuration
  features: {
    creditSimulation: boolean;
    testDriveBooking: boolean;
    carComparison: boolean;
    onlineBrochure: boolean;
    liveChat: boolean;
    promotionSystem: boolean;
  };

  // API Configuration
  api: {
    baseUrl: string;
    timeout: number;
    endpoints: {
      contact: string;
      testDrive: string;
      creditSimulation: string;
      newsletter: string;
    };
  };

  // Payment & Credit Configuration
  credit: {
    defaultInterestRate: number;
    minDownPayment: number; // percentage
    maxTenure: number; // months
    tenures: number[];
    banks: {
      name: string;
      interestRate: number;
      processingFee: number;
    }[];
  };

  // Analytics Configuration
  analytics: {
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
    hotjarId?: string;
  };

  // Performance Configuration
  performance: {
    imageOptimization: boolean;
    lazyLoading: boolean;
    preloadCriticalAssets: boolean;
  };
}

export const siteConfig: SiteConfig = {
  // Basic Site Information
  name: 'Honda Prisma HR Muhammad Surabaya',
  title: 'Dealer Resmi Honda Surabaya - Honda Prisma HR Muhammad',
  description: 'Dealer resmi Honda di Surabaya. Menjual berbagai tipe mobil Honda seperti HR-V, CR-V, Brio, Civic, dan lainnya. Melayani penjualan cash dan kredit dengan DP ringan.',
  keywords: [
    'honda surabaya',
    'dealer honda surabaya',
    'mobil honda',
    'hr-v surabaya',
    'cr-v surabaya',
    'brio surabaya',
    'kredit mobil honda',
    'test drive honda',
  ],
  author: 'Honda Prisma HR Muhammad Surabaya',
  url: 'https://hondaprismasurabaya.com',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',

  // Company Information
  company: {
    name: 'Honda Prisma HR Muhammad Surabaya',
    legalName: 'PT. Prisma Harapan Raya - Dealer Honda Surabaya',
    description: 'Dealer resmi Honda yang telah berpengalaman melayani masyarakat Surabaya dan sekitarnya dengan komitmen memberikan pelayanan terbaik dan produk berkualitas.',
    foundingYear: 2010,
    dealerCode: 'HND-PRS-SBY',
  },

  // SEO Configuration
  seo: {
    titleTemplate: '%s | Honda Prisma Surabaya',
    defaultTitle: 'Dealer Resmi Honda Surabaya - Honda Prisma HR Muhammad',
    titleSeparator: '|',
    defaultDescription: 'Dealer resmi Honda di Surabaya. Penjualan mobil Honda cash dan kredit dengan DP ringan. Test drive gratis dan promo spesial setiap bulannya.',
    siteLanguage: 'id',
    openGraph: {
      type: 'website',
      siteName: 'Honda Prisma HR Muhammad Surabaya',
      profile: {
        firstName: 'Honda',
        lastName: 'Prisma Surabaya',
      },
    },
  },

  // Social Media Links
  social: {
    instagram: 'https://instagram.com/jasimhonda',
    facebook: 'https://facebook.com/fikra.awan',
    // twitter: 'https://twitter.com/hondasurabaya',
    // youtube: 'https://youtube.com/hondasurabaya',
  },

  // Contact Configuration
  contact: {
    form: {
      successMessage: 'Terima kasih! Pesan Anda telah kami terima. Tim sales kami akan menghubungi Anda dalam 1x24 jam.',
      errorMessage: 'Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung via WhatsApp.',
    },
    whatsapp: {
      defaultMessage: 'Halo, saya tertarik dengan mobil Honda. Bisa info lebih lanjut?',
      autoOpen: true,
    },
  },

  // Features Configuration
  features: {
    creditSimulation: false,
    testDriveBooking: false,
    carComparison: true,
    onlineBrochure: true,
    liveChat: false, // Can be enabled later
    promotionSystem: false,
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 10000,
    endpoints: {
      contact: '/contact',
      testDrive: '/test-drive',
      creditSimulation: '/credit-simulation',
      newsletter: '/newsletter',
    },
  },

  // Payment & Credit Configuration
  credit: {
    defaultInterestRate: 0.08, // 8% per year
    minDownPayment: 10, // 10%
    maxTenure: 60, // 5 years
    tenures: [12, 24, 36, 48, 60],
    banks: [
      {
        name: 'BCA Finance',
        interestRate: 0.075,
        processingFee: 750000,
      },
      {
        name: 'Adira Finance',
        interestRate: 0.082,
        processingFee: 650000,
      },
      {
        name: 'BRI Finance',
        interestRate: 0.079,
        processingFee: 700000,
      },
      {
        name: 'Mandiri Tunas Finance',
        interestRate: 0.081,
        processingFee: 680000,
      },
    ],
  },

  // Analytics Configuration
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
  },

  // Performance Configuration
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    preloadCriticalAssets: true,
  },
};

// Helper functions
export const getFullTitle = (pageTitle?: string): string => {
  if (!pageTitle) return siteConfig.seo.defaultTitle;
  return `${pageTitle} ${siteConfig.seo.titleSeparator} ${siteConfig.name}`;
};

export const getMetaDescription = (description?: string): string => {
  return description || siteConfig.seo.defaultDescription;
};

export const getCanonicalUrl = (path: string = ''): string => {
  return `${siteConfig.url}${path}`;
};