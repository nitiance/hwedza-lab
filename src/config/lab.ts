// File: src/config/lab.ts

export const LAB = {
  name: "Wedza Medical Laboratory",

  // Phone
  phoneDisplay: "+263 000 000 000",
  phoneTel: "+263000000000",

  // WhatsApp (use same format as phoneTel but with country code)
  whatsappNumber: "+263000000000",

  // Email
  email: "info@wedzalab.co.zw",

  // Address
  addressShort: "B24 Complex, Wedza",
  addressFull: "B24 Complex, Wedza District, Zimbabwe",

  // Opening hours
  hours: {
    weekdays: "Mon–Fri 8:00–16:30",
    saturday: "Sat 8:00–12:00",
  },

  // ✅ One line used by Home/About
  hoursLine: "Mon–Fri 8:00–16:30 • Sat 8:00–12:00",

  // ✅ Real coordinates (18.61917° S, 31.57027° E)
  coords: {
    lat: -18.61917,
    lng: 31.57027,
  },
} as const;

export const buildTelLink = () => `tel:${LAB.phoneTel}`;

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
  // Opens Google Maps with coordinates
  const { lat, lng } = LAB.coords;
  return `https://www.google.com/maps?q=${lat},${lng}`;
};

export const buildMapsEmbedUrl = () => {
  // No API key version. Works fine for embedding.
  const { lat, lng } = LAB.coords;
  return `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
};

// Handy one-liner used in Home/About
export const LAB_HOURS_LINE = `${LAB.hours.weekdays} • ${LAB.hours.saturday}`;
