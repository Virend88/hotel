// Hotel Information and metadata for Grand Horizon Hotel, Bengaluru
export const hotelInfo = {
  name: "Grand Horizon Hotel",
  shortName: "Grand Horizon",
  tagline: "Stay Comfortable. Experience Bengaluru.",
  subTagline: "A 5-Star Haven of Contemporary Elegance & South Indian Hospitality",
  rating: 4.9,
  totalReviews: 1240,
  established: 2018,
  
  // Location details
  location: {
    address: "48, Residency Road, Ashok Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560025",
    country: "India",
    landmark: "Near UB City & Cubbon Park Metro Station",
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985584879269!2d77.5976!3d12.9723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679c7820129%3A0xc3bdf9bf0bb67d56!2sResidency%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  // Contact details
  contact: {
    phone: "+91 (80) 4123-8899",
    altPhone: "+91 98450 12345",
    email: "reservations@grandhorizonhotel.com",
    inquiriesEmail: "concierge@grandhorizonhotel.com",
    whatsapp: "+91 98450 12345",
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM"
  },

  // Proximity to popular places in Bengaluru
  nearbyAttractions: [
    { name: "Cubbon Park", distance: "1.2 km", time: "5 mins drive" },
    { name: "UB City & Luxury Mall", distance: "1.5 km", time: "6 mins drive" },
    { name: "MG Road & Brigade Road", distance: "800 m", time: "8 mins walk" },
    { name: "Bangalore Palace", distance: "4.5 km", time: "15 mins drive" },
    { name: "Vidhana Soudha", distance: "2.8 km", time: "10 mins drive" },
    { name: "Kempegowda International Airport (BLR)", distance: "34 km", time: "45 mins drive" }
  ],

  // Key hotel amenities
  amenities: [
    {
      id: "pool",
      name: "Rooftop Infinity Pool",
      description: "Heated swimming pool with skyline views of Bengaluru Garden City and poolside cocktail bar.",
      icon: "Waves"
    },
    {
      id: "dining",
      name: "3 Fine Dining Venues",
      description: "From authentic Karnataka delicacies to contemporary Mediterranean & Asian fusion.",
      icon: "Utensils"
    },
    {
      id: "spa",
      name: "Ayurvedic & Wellness Spa",
      description: "Rejuvenating traditional Kerala treatments, Swedish massage therapies, and cedar sauna.",
      icon: "Sparkles"
    },
    {
      id: "fitness",
      name: "24/7 Technogym Studio",
      description: "Equipped with state-of-the-art cardio, free weights, and certified personal trainers.",
      icon: "Dumbbell"
    },
    {
      id: "wifi",
      name: "High-Speed Fiber Internet",
      description: "Complimentary 500 Mbps connection in all rooms, conference halls, and public spaces.",
      icon: "Wifi"
    },
    {
      id: "valet",
      name: "Valet & EV Charging",
      description: "Complimentary valet parking and fast DC charging stations for electric vehicles.",
      icon: "Car"
    },
    {
      id: "business",
      name: "Executive Business Lounge",
      description: "Private meeting boardrooms, ergonomic pods, secretarial assistance, and printing hub.",
      icon: "Briefcase"
    },
    {
      id: "concierge",
      name: "24/7 Clefs d'Or Concierge",
      description: "Bespoke Bengaluru heritage tours, curated dining reservations, and personal luxury transport.",
      icon: "Compass"
    }
  ],

  // Why choose us highlights
  whyChooseUs: [
    {
      title: "Prime Central Location",
      desc: "Situated on prestigious Residency Road, moments away from MG Road, UB City, tech hubs, and Cubbon Park.",
      stat: "Heart of City"
    },
    {
      title: "Signature Hospitality",
      desc: "Warm traditional Indian warmth seamlessly combined with bespoke 5-star international service standards.",
      stat: "4.9 / 5 Rating"
    },
    {
      title: "Best Rate Guarantee",
      desc: "Book directly through our website to enjoy exclusive complimentary perks, free upgrades, and zero hidden fees.",
      stat: "Direct Perks"
    },
    {
      title: "Eco-Friendly Luxury",
      desc: "LEED Gold certified property with solar power, zero single-use plastic, and locally sourced organic ingredients.",
      stat: "100% Green"
    }
  ]
};
