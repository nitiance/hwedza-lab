/**
 * BinanceXI ©
 * Central configuration for Wedza Medical Centre Laboratory
 * Single source of truth for identity, contact, and location data
 */

export const LAB = {
  // Official registered name
  name: "Wedza Medical Centre Laboratory",

  // Primary contact numbers (as displayed publicly)
  phoneDisplay: "+263 775 243 241",
  phoneTel: "+263775243241",
  phones: [
    "+263775243241",
    "+263773862907",
    "+263716308106",
  ],

  // Primary WhatsApp line
  whatsappNumber: "+263775243241",

  // Official email
  email: "wmcl2014@gmail.com",

  // Physical location
  addressShort: "Wedza Centre",
  addressFull: "Wedza Centre, Mashonaland East, Zimbabwe",

  // Operating hours
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 5:00 PM",
    saturday: "Saturday: 10:00 AM – 2:00 PM",
  },

  // GPS coordinates (Google Maps)
  coords: {
    lat: -18.61917,
    lng: 31.57027,
  },
} as const;

// Compact hours line used across UI
export const LAB_HOURS_LINE =
  `${LAB.hours.weekdays} • ${LAB.hours.saturday}`;

// Backward compatibility helper (do not remove)
export const LAB_HELPERS = {
  hoursLine: LAB_HOURS_LINE,
} as const;

// -------------------------------
// Link builders
// -------------------------------

export const buildTelLink = (
  tel: string = LAB.phoneTel
) => `tel:${tel}`;

export const buildWhatsAppLink = (
  message: string
) => {
  const msg = encodeURIComponent(message);
  const num = LAB.whatsappNumber.replace("+", "");
  return `https://wa.me/${num}?text=${msg}`;
};

export const buildMailtoLink = (
  subject: string,
  body: string
) => {
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