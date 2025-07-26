export interface PhoneDetails {
  _id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  specs: Specs;
  averageRatings: number;
  ratingQuantity: number;

}

interface Specs {
  body: Body;
  display: Display;
  platform: Platform;
  memory: Memory;
  mainCamera: MainCamera;
  selfieCamera: SelfieCamera;
  battery: Battery;
  features: Features;
  connectivity: Connectivity;
}

interface Connectivity {
  wlan: string;
  bluetooth: string;
  gps: string;
  nfc: string;
  usb: string;
}

interface Features {
  sensors: string;
  audio: string;
}

interface Battery {
  type: string;
  charging: string;
}

interface SelfieCamera {
  single: string;
  features: string;
  video: string;
}

interface MainCamera {
  triple: string;
  features: string;
  video: string;
  quad: string;
  dual: string;
}

interface Memory {
  internal: string;
  cardSlot: string;
}

interface Platform {
  os: string;
  chipset: string;
  cpu: string;
  gpu: string;
}

interface Display {
  type: string;
  size: string;
  resolution: string;
}

interface Body {
  dimensions: string;
  weight: string;
  build: string;
  sim: string;
}