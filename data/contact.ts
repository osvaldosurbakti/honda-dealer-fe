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
  maps: {
    embedUrl: string;
    directUrl: string;
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
    name: 'Rendy Pambajeng Honda Surabaya',
    address: ' Jl. Mayjen HR. Muhammad No.2B, Putat Gede, Kec. Sukomanunggal, Surabaya, Jawa Timur',
    city: 'Surabaya',
    province: 'Jawa Timur',
    postalCode: '60189',
    coordinates: {
      lat: -7.250445,
      lng: 112.768845,
    },
  },
  phones: {
    primary: '087852432636'
    },
  emails: {
    primary: 'rendyhondasurabaya@gmail.com',
    sales: 'rendyhondasurabaya@gmail.com',
    info: 'rendyhondasurabaya@gmail.com',
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
    //instagram: 'rendy',
    facebook: 'https://www.facebook.com/share/1CThcKHE5Z/',
    tiktok: '@rendyhonda',
    //twitter: 'hondasurabaya', // Optional
    //youtube: 'hondasurabaya', // Optional
  },
  workingHours: {
    days: 'Everyday',
    hours: '24 Hours',
  },
    maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63321.62517524256!2d112.66129752283722!3d-7.286090828765811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fda9b71de18d%3A0xcbf8ea89e4e029af!2sHonda%20Prisma%20HR%20Muhammad!5e0!3m2!1sen!2sid!4v1763277260243!5m2!1sen!2sid',
    directUrl: 'https://maps.google.com/?q=Honda+Prisma+HR+Muhammad'
  },
  salesTeam: [
    {
      id: 'sales-1',
      name: 'Rendy Honda',
      position: 'Sales Consultant',
      phone: '087852432636',
      whatsapp: '6287852432636',
      email: 'rendyhondasurabaya@gmail.com',
      photo: '/images/sales/rendy.jpg',
      specialization: ['HR-V', 'CR-V', 'BR-V', 'SUV Models'],
      experience: '5 tahun',
      languages: ['Indonesia', 'English Basic'],
    }
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