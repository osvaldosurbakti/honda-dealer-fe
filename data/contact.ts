export interface ContactInfo {
  dealer: {
    name: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  phones: {
    primary: string;
    secondary?: string;
    sales: string[];
  };
  emails: {
    primary: string;
    sales: string;
    info: string;
  };
  whatsapp: {
    number: string;
    message: string;
    sales: {
      name: string;
      number: string;
      specialization: string[];
    }[];
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    tiktok?: string;
  };
  workingHours: {
    days: string;
    hours: string;
    exception?: string;
  };
  salesTeam: {
    id: string;
    name: string;
    position: string;
    phone: string;
    whatsapp: string;
    email: string;
    photo?: string;
    specialization: string[];
    experience: string;
    languages: string[];
  }[];
}

export const contactInfo: ContactInfo = {
  dealer: {
    name: 'Honda Prisma HR Muhammad Surabaya',
    address: 'Jl. Raya Darmo Permai III, Surabaya',
    city: 'Surabaya',
    province: 'Jawa Timur',
    postalCode: '60189',
    coordinates: {
      lat: -7.250445,
      lng: 112.768845,
    },
  },
  phones: {
    primary: '087852432636',
    secondary: '031-1234567',
    sales: ['087852432636', '085150655710', '085150655711'],
  },
  emails: {
    primary: 'rendyhondasurabaya@gmail.com',
    sales: 'sales@hondaprismasurabaya.com',
    info: 'info@hondaprismasurabaya.com',
  },
  whatsapp: {
    number: '6287852432636',
    message: 'Halo, saya tertarik dengan mobil Honda. Bisa info lebih lanjut?',
    sales: [
      {
        name: 'Fikra Awan',
        number: '6287852432636',
        specialization: ['HR-V', 'CR-V', 'BR-V'],
      },
      {
        name: 'Sales Honda 2',
        number: '6285150655710',
        specialization: ['Brio', 'Mobilio', 'Jazz'],
      },
    ],
  },
  socialMedia: {
    instagram: 'jasimhonda',
    facebook: 'Fikra Awan',
    // twitter: 'hondasurabaya', // Optional
    // youtube: 'hondasurabaya', // Optional
  },
  workingHours: {
    days: 'Senin - Jumat',
    hours: '08:00 - 17:00 WIB',
    exception: 'Sabtu: 08:00 - 15:00 WIB',
  },
  salesTeam: [
    {
      id: 'sales-1',
      name: 'Fikra Awan',
      position: 'Sales Consultant',
      phone: '087852432636',
      whatsapp: '6287852432636',
      email: 'fikra@hondaprismasurabaya.com',
      photo: '/images/sales/fikra-awan.jpg',
      specialization: ['HR-V', 'CR-V', 'BR-V', 'SUV Models'],
      experience: '5 tahun',
      languages: ['Indonesia', 'English Basic'],
    },
    {
      id: 'sales-2',
      name: 'Budi Santoso',
      position: 'Sales Consultant',
      phone: '085150655710',
      whatsapp: '6285150655710',
      email: 'budi@hondaprismasurabaya.com',
      specialization: ['Brio', 'Mobilio', 'Jazz', 'Hatchback Models'],
      experience: '3 tahun',
      languages: ['Indonesia', 'Javanese'],
    },
    {
      id: 'sales-3',
      name: 'Sari Dewi',
      position: 'Sales Consultant',
      phone: '085150655711',
      whatsapp: '6285150655711',
      email: 'sari@hondaprismasurabaya.com',
      specialization: ['Civic', 'Accord', 'Sedan Models'],
      experience: '4 tahun',
      languages: ['Indonesia', 'English'],
    },
  ],
};

// Helper functions
export const getSalesBySpecialization = (specialization: string) => {
  return contactInfo.salesTeam.filter(sales =>
    sales.specialization.some(spec => spec.toLowerCase().includes(specialization.toLowerCase()))
  );
};

export const getPrimaryContact = () => {
  return {
    phone: contactInfo.phones.primary,
    whatsapp: contactInfo.whatsapp.number,
    email: contactInfo.emails.primary,
  };
};