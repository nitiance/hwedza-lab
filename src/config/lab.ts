// File: src/config/lab.ts

export const LAB = {
  name: "Wedza Medical Laboratory",

  // Phone (owners provided multiple numbers)
  phoneDisplay: "+263 775 243 241",
  phoneTel: "+263775243241",
  phones: ["+263775243241", "+263773862907", "+263716308106"],

  // WhatsApp (pick primary; you can change if they want a different WhatsApp line)
  whatsappNumber: "+263775243241",

  // Email
  email: "wmcl2014@gmail.com",

  // Address
  addressShort: "Wedza Centre",
  addressFull: "Wedza Centre, Mashonaland East, Zimbabwe",

  // Opening hours (owners’ hours)
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "Saturday: 10:00 AM - 2:00 PM",
  },

  // Coordinates (your real coords)
  coords: {
    lat: -18.61917,
    lng: 31.57027,
  },
} as const;

export const LAB_HOURS_LINE = `${LAB.hours.weekdays} • ${LAB.hours.saturday}`;

export const buildTelLink = (tel: string = LAB.phoneTel) => `tel:${tel}`;

export const buildWhatsAppLink = (message: string) => {
  const msg = encodeURIComponent(message);
  const num = LAB.whatsappNumber.replace("+", "");
  return `https://wa.me/${num}?text=${msg}`;
};

export const buildMailtoLink = (subject: string, body: string) => {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${LAB.email}?subject=${s}&body=${b}`;
};

export const buildMapsLink = () => {
  const { lat, lng } = LAB.coords;
  return `https://www.google.com/maps?q=${lat},${lng}`;
};

export const buildMapsEmbedUrl = () => {
  const { lat, lng } = LAB.coords;
  return `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
};
