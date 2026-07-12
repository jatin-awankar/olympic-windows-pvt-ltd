export interface AddressDetails {
  title: string;
  companyName: string;
  streetAddress: string;
}

export const contactConfig = {
  phone: {
    display: "+91 91673 94442",
    link: "tel:+919167394442",
    label: "Call Technical Sales"
  },
  email: {
    display: "info@olympicwindows.in",
    link: "mailto:info@olympicwindows.in",
    label: "Email Inquiry"
  },
  whatsapp: {
    display: "Chat on WhatsApp",
    link: "https://wa.me/919167394442",
    label: "Instant Chat"
  },
  indiaAddress: {
    title: "India Factory & HQ",
    companyName: "Olympic Windows HQ",
    streetAddress: "F11, 12 Balaji Plaza, Khoni - Taloja Bypass Road, Usatane, Maharashtra"
  } as AddressDetails,
  londonAddress: {
    title: "London Office",
    companyName: "Olympic Windows UK",
    streetAddress: "UNIT 3A, Northgate Business Centre, Collier Row, Romford, London, UK"
  } as AddressDetails,
  maps: {
    indiaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.661576041231!2d73.12302897493099!3d19.122496950511724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7eb2d7642ba79%3A0xcc48509e9ed8c08e!2sOlympic%20Windows%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1783318964219!5m2!1sen!2sin",
    londonUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5272.275145406427!2d0.14093431160245015!3d51.59357537390531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUNIT%203A%2C%20Northgate%20Business%20Centre%2C%20Collier%20Row%2C%20Romford%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1783319223217!5m2!1sen!2sin"
  }
};
