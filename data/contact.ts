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
    name: 'Mary Christie Honda Surabaya',
    address: ' Honda Istana Mobil Surabaya Indah, Jl. Jend. Basuki Rachmat No. 33-37, Embong Kaliasin, Genteng',
    city: 'Surabaya',
    province: 'Jawa Timur',
    postalCode: '60271',
    coordinates: {
      lat: -7.250445,
      lng: 112.768845,
    },
  },
  phones: {
    primary: '085859369826'
    },
  emails: {
    primary: 'maryutami86@gmail.com',
    sales: 'maryutami86@gmail.com',
    info: 'maryutami86@gmail.com',
  },
  whatsapp: {
    number: '6285859369826',
    message: 'Halo, saya tertarik dengan mobil Honda. Bisa info lebih lanjut?',
    sales: [
    ],
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/share/1CkrpJFN9Q/',
    instagram: 'https://instagram.com/maryhondasurabaya',
    tiktok: 'https://tiktok.com/@cecehondasurabaya',
  },
  workingHours: {
    days: 'Everyday',
    hours: '24 Hours',
  },
    maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.786243170802!2d112.7413055!3d-7.265150399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f94c5cd66cc7%3A0x1e543c6b695b8b99!2sHonda%20Surabaya%20Center!5e0!3m2!1sen!2sid!4v1781613623653!5m2!1sen!2sid',
    directUrl: 'https://maps.app.goo.gl/2oypA6qscoHETbt17'
  },
  salesTeam: [
    {
      id: 'sales-1',
      name: 'Mary Christie',
      position: 'Sales Consultant',
      phone: '085859369826',
      whatsapp: '6285859369826',
      email: 'maryutami86@gmail.com',
      photo: '/images/sales/mary.jpeg',
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