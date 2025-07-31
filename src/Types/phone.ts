export interface PhoneDetails {
  _id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  specs?: Specs;
  averageRatings: number;
  ratingQuantity: number;
  category: "phone" | "smartwatch" | "laptop" | "tablet";
}

interface Specs {
  body?: Body;
  display?: Display;
  platform?: Platform;
  memory?: Memory;
  mainCamera?: MainCamera;
  selfieCamera?: SelfieCamera;
  battery?: Battery;
  features?: Features;
  connectivity?: Connectivity;
  // Additional for laptops / watches:
  ports?: Ports;
  sensors?: string;
  compatibility?: Compatibility; // for smartwatch
  keyboard?: string; // for laptop
  trackpad?: string; // for laptop
}

interface Connectivity {
  wlan?: string;
  bluetooth?: string;
  gps?: string;
  nfc?: string;
  usb?: string;
}

interface Features {
  sensors?: string;
  audio?: string;
}

interface Compatibility {
  osSupport: string; // e.g., "iOS 14+, Android 8+"
  companionApp: string;
}

interface Ports {
  usbC?: string;
  thunderbolt?: string;
  audioJack?: string;
  hdmi?: string;
  sdSlot?: string;
}

interface Battery {
  type?: string;
  charging?: string;
  batteryLife?: string; // e.g., "18 hours", useful for watches/laptops
}

interface SelfieCamera {
  single?: string;
  features?: string;
  video?: string;
}

interface MainCamera {
  triple?: string;
  quad?: string;
  dual?: string;
  features?: string;
  video?: string;
}

interface Memory {
  internal?: string;
  cardSlot?: string;
  ram?: string; // useful for laptops
  storageType?: string; // e.g., SSD, HDD
}

interface Platform {
  os?: string;
  chipset?: string;
  cpu?: string;
  gpu?: string;
}

interface Display {
  type?: string;
  size?: string;
  resolution?: string;
  refreshRate?: string; // for laptops/watches
  alwaysOn?: boolean;   // for watches
}

interface Body {
  dimensions?: string;
  weight?: string;
  build?: string;
  sim?: string;
  waterResistant?: string; // e.g., "IP68", for watches
}
