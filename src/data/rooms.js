// Realistic Room Data for Grand Horizon Hotel, Bengaluru
export const roomsData = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Modern Comfort with Bengaluru City Skyline Views",
    price: 5499,
    capacity: 2,
    bedType: "1 Queen Bed",
    roomSize: "380 sq.ft (35 m²)",
    view: "City Skyline View",
    rating: 4.8,
    reviewCount: 142,
    featured: true,
    badge: "Popular Choice",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Designed for the modern discerning traveler, our Deluxe Room seamlessly blends contemporary aesthetic with plush comforts. Featuring handcrafted teakwood furnishings, ergonomic work desk, Italian marble bathroom, and panoramic floor-to-ceiling windows overlooking central Bengaluru.",
    amenities: [
      { name: "High-Speed WiFi", icon: "Wifi" },
      { name: "Climate Control AC", icon: "Wind" },
      { name: "50-inch Smart LED TV", icon: "Tv" },
      { name: "Tea & Coffee Maker", icon: "Coffee" },
      { name: "Electronic Safe", icon: "ShieldCheck" },
      { name: "Minibar & Snacks", icon: "Wine" },
      { name: "Marble Rain Shower", icon: "Droplets" },
      { name: "24/7 Room Service", icon: "Bell" }
    ],
    perks: [
      "Complimentary buffet breakfast",
      "Welcome detox beverage on arrival",
      "Access to 24-hr fitness center",
      "Free high-speed fiber internet"
    ],
    cancellationPolicy: "Free cancellation up to 24 hours prior to check-in."
  },
  {
    id: "premium-room",
    name: "Premium Room",
    tagline: "Elevated Elegance Overlooking Lush Cubbon Park",
    price: 7999,
    capacity: 2,
    bedType: "1 King Bed or 2 Twin Beds",
    roomSize: "460 sq.ft (43 m²)",
    view: "Cubbon Park & Garden View",
    rating: 4.9,
    reviewCount: 198,
    featured: true,
    badge: "Guest Favorite",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "The Premium Room offers an oasis of calm above Bengaluru's vibrant core. Wake up to tranquil tree-lined views of Cubbon Park. Features a plush custom mattress, bespoke goose-down pillows, a separate lounge seating nook, and a luxury bathroom with soaking tub.",
    amenities: [
      { name: "Ultra Fast WiFi", icon: "Wifi" },
      { name: "Central Climate Control", icon: "Wind" },
      { name: "55-inch 4K OLED TV", icon: "Tv" },
      { name: "Nespresso Coffee Machine", icon: "Coffee" },
      { name: "Deep Soaking Bathtub", icon: "Droplets" },
      { name: "Plush Bathrobes & Slippers", icon: "Sparkles" },
      { name: "Gourmet Stocked Minibar", icon: "Wine" },
      { name: "Daily Evening Turndown", icon: "Moon" }
    ],
    perks: [
      "Lavish international breakfast included",
      "High tea service at Horizon Lounge (4 PM - 6 PM)",
      "Free late check-out until 1:00 PM (subject to availability)",
      "Complimentary ironing of 2 garments per day"
    ],
    cancellationPolicy: "Free cancellation up to 48 hours prior to check-in."
  },
  {
    id: "executive-room",
    name: "Executive Room",
    tagline: "Exclusive Club Lounge Access for Business & Leisure",
    price: 10999,
    capacity: 3,
    bedType: "1 California King Bed",
    roomSize: "550 sq.ft (51 m²)",
    view: "High-Floor Bengaluru City Panorama",
    rating: 4.95,
    reviewCount: 114,
    featured: true,
    badge: "Executive Class",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Tailored for top executives and luxury seekers, the Executive Room perched on floors 15-22 offers breathtaking skyline vistas and dedicated privileges. Enjoy private check-in, all-day refreshments in the Horizon Club Lounge, and a soundproof workstation with Herman Miller seating.",
    amenities: [
      { name: "Gigabit WiFi", icon: "Wifi" },
      { name: "Smart Air Purifier & AC", icon: "Wind" },
      { name: "65-inch Smart Home TV", icon: "Tv" },
      { name: "Club Lounge Access", icon: "Award" },
      { name: "Executive Workstation", icon: "Briefcase" },
      { name: "Bose Bluetooth Soundbar", icon: "Music" },
      { name: "Premium Forest Essentials Toiletries", icon: "Sparkles" },
      { name: "Dedicated 24/7 Butler Service", icon: "UserCheck" }
    ],
    perks: [
      "Exclusive access to Horizon Club Lounge on 24th floor",
      "Complimentary evening cocktail hours with hors d'oeuvres",
      "Complimentary one-way airport transfer in luxury sedan",
      "Unlimited pressing & laundry services (up to 4 items)"
    ],
    cancellationPolicy: "Free cancellation up to 24 hours prior to check-in."
  },
  {
    id: "family-suite",
    name: "Family Suite",
    tagline: "Expansive Multi-Room Living for Memorable Family Stays",
    price: 14499,
    capacity: 4,
    bedType: "1 Master King Bed + 2 Twin Beds",
    roomSize: "820 sq.ft (76 m²)",
    view: "Panoramic Swimming Pool & Garden View",
    rating: 4.88,
    reviewCount: 86,
    featured: true,
    badge: "Family Favorite",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Crafted specifically for families travelling together without compromising on privacy or luxury. Features a master bedroom, an adjoining kid-friendly twin bedroom, a spacious separate living room, dining area with kitchenette, and two opulent full marble bathrooms.",
    amenities: [
      { name: "Super Fast WiFi", icon: "Wifi" },
      { name: "Dual Zone Climate Control", icon: "Wind" },
      { name: "Two 55-inch Smart TVs", icon: "Tv" },
      { name: "Dining Area & Kitchenette", icon: "UtensilsCrossed" },
      { name: "Two Marble Bathrooms", icon: "Droplets" },
      { name: "Children Game Consoles (On request)", icon: "Gamepad2" },
      { name: "Microwave & Refrigerator", icon: "Coffee" },
      { name: "Complimentary Baby Cot/Crib", icon: "Heart" }
    ],
    perks: [
      "Full family breakfast spread at The Orchard Brasserie",
      "Kids eat free program (children under 8)",
      "Complimentary tickets to nearby Bengaluru botanical gardens",
      "Late check-out guarantee until 2:00 PM"
    ],
    cancellationPolicy: "Free cancellation up to 48 hours prior to check-in."
  },
  {
    id: "presidential-suite",
    name: "Presidential Horizon Suite",
    tagline: "The Pinnacle of Opulence on the Penthouse Level",
    price: 24999,
    capacity: 4,
    bedType: "Master Emperor Bed + Guest King Bed",
    roomSize: "1,450 sq.ft (135 m²)",
    view: "360° Uninterrupted Bengaluru Skyline",
    rating: 5.0,
    reviewCount: 42,
    featured: false,
    badge: "Ultra Luxury",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Our crown jewel penthouse suite offers an incomparable residential experience in Bengaluru. Featuring private elevator access, a grand living hall with baby grand piano, custom chandelier dining salon, private terrace with plunge pool, and personalized round-the-clock butler team.",
    amenities: [
      { name: "Private Plunge Pool", icon: "Waves" },
      { name: "Private Elevator Access", icon: "Key" },
      { name: "Grand Living & Dining Room", icon: "Crown" },
      { name: "Dedicated 24/7 Butler", icon: "UserCheck" },
      { name: "Bang & Olufsen Sound System", icon: "Music" },
      { name: "Walk-in Dressing Closets", icon: "Sparkles" },
      { name: "Jacuzzi Spa Bath", icon: "Droplets" },
      { name: "Roundtrip Rolls-Royce Airport Service", icon: "Car" }
    ],
    perks: [
      "Complimentary premium champagne & fruit basket on arrival",
      "In-suite private chef dinner experience (one night)",
      "Unlimited spa treatments at The Horizon Ayurvedic Sanctuary",
      "Flexible 24-hour check-in and check-out"
    ],
    cancellationPolicy: "Free cancellation up to 7 days prior to check-in."
  }
];

export const getRoomById = (id) => {
  return roomsData.find((room) => room.id === id);
};
