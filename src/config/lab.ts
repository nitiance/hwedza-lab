// src/config/lab.ts

export const LAB = {
  name: "Wedza Medical Laboratory",

  // Phone
  phoneDisplay: "+263 000 000 000",
  phoneTel: "+263000000000",

  // WhatsApp (usually same as phoneTel, but keep separate)
  whatsappNumber: "+263000000000",

  // Email
  email: "info@wedzalab.co.zw",

  // Address
  addressShort: "B24 Complex, Wedza",
  addressFull: "B24 Complex, Wedza District, Zimbabwe",

  // Hours (editable)
  hours: {
    weekdays: "Mon–Fri: 8:00 AM – 4:30 PM",
    saturday: "Sat: 8:00 AM – 12:00 PM",
  },

  // ✅ This is what your Home/About are using
  hoursLine: "Mon–Fri 8:00–16:30 • Sat 8:00–12:00",

  /**
   * Map handling:
   * Option A (recommended): put a google maps search string (works even without exact coordinates)
   */
  mapsQuery: "B24 Complex, Wedza District, Zimbabwe",
} as const;

/** tel:+263... */
export function buildTelLink() {
  return `tel:${LAB.phoneTel}`;
}

/** mailto: with encoded subject/body */
export function buildMailtoLink(subject: string, body: string) {
  return `mailto:${LAB.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** https://wa.me/<digits>?text=... */
export function buildWhatsAppLink(message: string) {
  const digits = LAB.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Open Google Maps search */
export function buildMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LAB.mapsQuery)}`;
}

/** Google Maps embed (simple + reliable) */
export function buildMapsEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(LAB.mapsQuery)}&output=embed`;
}
