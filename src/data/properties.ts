import { Property } from '../types';

export const rentalProperties: Property[] = [
  {
    id: 'r1',
    title: 'Luxury Penthouse Suite',
    location: 'Downtown Manhattan, NY',
    price: '$5,500/month',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,850 sq ft',
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1760611655987-d348d6d28174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2OTA2MDEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTEyNDc1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybiUyMGx1eHVyeXxlbnwxfHx8fDE3NjkxNzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713799210416-593f9734af6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwY2l0eSUyMHZpZXd8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Stunning penthouse with panoramic city views, modern finishes, and premium amenities. Perfect for professionals seeking luxury living in the heart of Manhattan.',
    amenities: [
      '24/7 Doorman',
      'Rooftop Pool',
      'Fitness Center',
      'In-unit Laundry',
      'Pet Friendly',
      'Parking Included'
    ],
    furnished: true,
    furnishingStatus: 'Furnished'
  },
  {
    id: 'r2',
    title: 'Modern Two-Bedroom Apartment',
    location: 'Miami Beach, FL',
    price: '$3,200/month',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,200 sq ft',
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638284556849-1848ec7beb4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiZWRyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTE3NDY0OHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Bright and spacious 2-bedroom apartment near the beach. Features open-concept living, updated kitchen, and balcony with ocean breeze.',
    amenities: [
      'Beach Access',
      'Swimming Pool',
      'Gym',
      'Secure Parking',
      'Balcony',
      'Central AC'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 'r3',
    title: 'Contemporary Studio Loft',
    location: 'San Francisco, CA',
    price: '$2,800/month',
    bedrooms: 1,
    bathrooms: 1,
    area: '750 sq ft',
    type: 'Studio',
    images: [
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1490136001793-14ccbc24fbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc2OTE3NDY1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybiUyMGx1eHVyeXxlbnwxfHx8fDE3NjkxNzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Stylish studio loft in a prime location. High ceilings, large windows, and modern amenities make this the perfect urban retreat.',
    amenities: [
      'High-Speed Internet',
      'Rooftop Terrace',
      'Co-working Space',
      'Bike Storage',
      'Package Room',
      'Pet Friendly'
    ],
    furnished: true,
    furnishingStatus: 'Furnished'
  },
  {
    id: 'r4',
    title: 'Spacious Family Home',
    location: 'Austin, TX',
    price: '$4,200/month',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,400 sq ft',
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2OTA5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Beautiful 4-bedroom home in a quiet neighborhood. Large backyard, updated kitchen, and close to top-rated schools.',
    amenities: [
      'Private Backyard',
      'Garage',
      'Updated Kitchen',
      'Hardwood Floors',
      'Central AC/Heat',
      'Near Schools'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 'r5',
    title: 'Elegant Riverside Apartment',
    location: 'Chicago, IL',
    price: '$3,800/month',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,400 sq ft',
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxNDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTEyNDc1NHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Luxury riverside apartment with stunning water views. Features floor-to-ceiling windows, modern appliances, and access to premium building amenities.',
    amenities: [
      'River Views',
      'Concierge',
      'Fitness Center',
      'Parking',
      'Pet Friendly',
      'Rooftop Deck'
    ],
    furnished: false,
    furnishingStatus: 'Semi-Furnished'
  },
  {
    id: 'r6',
    title: 'Cozy Brooklyn Brownstone',
    location: 'Brooklyn, NY',
    price: '$4,500/month',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,900 sq ft',
    type: 'Townhouse',
    images: [
      'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2OTA5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybiUyMGx1eHVyeXxlbnwxfHx8fDE3NjkxNzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Charming brownstone apartment with classic Brooklyn charm. Exposed brick, high ceilings, and modern updates throughout.',
    amenities: [
      'Exposed Brick',
      'Private Entrance',
      'Backyard Access',
      'Updated Kitchen',
      'Hardwood Floors',
      'Pet Friendly'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 'r7',
    title: 'Downtown Seattle High-Rise',
    location: 'Seattle, WA',
    price: '$3,600/month',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,300 sq ft',
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1760611655987-d348d6d28174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2OTA2MDEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxNDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTEyNDc1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713799210416-593f9734af6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwY2l0eSUyMHZpZXd8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybiUyMGx1eHVyeXxlbnwxfHx8fDE3NjkxNzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Modern high-rise apartment in the heart of downtown Seattle. Amazing city views, contemporary design, and luxury amenities.',
    amenities: [
      'City Views',
      '24/7 Security',
      'Gym',
      'Parking',
      'Rooftop Lounge',
      'Concierge'
    ],
    furnished: true,
    furnishingStatus: 'Furnished'
  },
  {
    id: 'r8',
    title: 'Suburban Denver Retreat',
    location: 'Denver, CO',
    price: '$3,400/month',
    bedrooms: 3,
    bathrooms: 2.5,
    area: '2,100 sq ft',
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2OTA5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638284556849-1848ec7beb4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiZWRyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTE3NDY0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Beautiful suburban home with mountain views. Spacious yard, modern interior, and close to hiking trails.',
    amenities: [
      'Mountain Views',
      'Large Yard',
      'Garage',
      'Fireplace',
      'Updated Kitchen',
      'Pet Friendly'
    ],
    furnished: false,
    furnishingStatus: 'Semi-Furnished'
  },
  {
    id: 'r9',
    title: 'Historic Boston Apartment',
    location: 'Boston, MA',
    price: '$3,900/month',
    bedrooms: 2,
    bathrooms: 1.5,
    area: '1,100 sq ft',
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxNDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1490136001793-14ccbc24fbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc2OTE3NDY1MHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Classic Boston apartment in a historic building. Original hardwood floors, high ceilings, and modern conveniences.',
    amenities: [
      'Historic Building',
      'Hardwood Floors',
      'In-unit Laundry',
      'Storage',
      'Near Transit',
      'Heat Included'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 'r10',
    title: 'Portland Pearl District Loft',
    location: 'Portland, OR',
    price: '$2,950/month',
    bedrooms: 1,
    bathrooms: 1,
    area: '900 sq ft',
    type: 'Studio',
    images: [
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxNDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTEyNDc1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1490136001793-14ccbc24fbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc2OTE3NDY1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybiUyMGx1eHVyeXxlbnwxfHx8fDE3NjkxNzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Trendy loft in the heart of Pearl District. Exposed brick, industrial style, and walking distance to restaurants and shops.',
    amenities: [
      'Exposed Brick',
      'High Ceilings',
      'Bike Storage',
      'Walkable Area',
      'Pet Friendly',
      'Central Location'
    ],
    furnished: true,
    furnishingStatus: 'Furnished'
  }
];

export const resaleProperties: Property[] = [
  {
    id: 's1',
    title: 'Waterfront Luxury Condo',
    location: 'Miami Beach, FL',
    price: '$1,850,000',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,200 sq ft',
    type: 'Condominium',
    images: [
      'https://images.unsplash.com/photo-1760611655987-d348d6d28174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2OTA2MDEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxNDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713799210416-593f9734af6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwY2l0eSUyMHZpZXd8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Exquisite oceanfront condominium with breathtaking views. Premium finishes throughout, private beach access, and world-class amenities.',
    amenities: [
      'Ocean Views',
      'Private Beach',
      'Infinity Pool',
      'Spa & Fitness',
      'Valet Parking',
      'Concierge Service'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 's2',
    title: 'Downtown Manhattan Penthouse',
    location: 'New York, NY',
    price: '$3,250,000',
    bedrooms: 4,
    bathrooms: 3.5,
    area: '3,100 sq ft',
    type: 'Penthouse',
    images: [
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760611655987-d348d6d28174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2OTA2MDEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638284556849-1848ec7beb4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiZWRyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTE3NDY0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybiUyMGx1eHVyeXxlbnwxfHx8fDE3NjkxNzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Spectacular penthouse offering 360-degree city views. Chef\'s kitchen, private terrace, and smart home technology throughout.',
    amenities: [
      'Private Terrace',
      'Smart Home',
      'Wine Cellar',
      'Home Theater',
      'Gym Access',
      'Storage Unit'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 's3',
    title: 'Modern Silicon Valley Home',
    location: 'Palo Alto, CA',
    price: '$2,975,000',
    bedrooms: 5,
    bathrooms: 4,
    area: '3,800 sq ft',
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2OTA5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Stunning contemporary home with eco-friendly features. Solar panels, Tesla Powerwall, and beautifully landscaped yard.',
    amenities: [
      'Solar Powered',
      'Pool & Spa',
      'Home Office',
      'EV Charger',
      'Smart Systems',
      'Top Schools'
    ],
    furnished: false,
    furnishingStatus: 'Semi-Furnished'
  },
  {
    id: 's4',
    title: 'Historic Brownstone',
    location: 'Brooklyn, NY',
    price: '$2,150,000',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,800 sq ft',
    type: 'Townhouse',
    images: [
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1490136001793-14ccbc24fbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc2OTE3NDY1MHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Beautifully restored brownstone blending historic charm with modern luxury. Original details preserved, fully renovated kitchen and baths.',
    amenities: [
      'Historic Details',
      'Renovated Kitchen',
      'Private Garden',
      'Exposed Brick',
      'Wine Cellar',
      'Roof Deck'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 's5',
    title: 'Lakefront Villa',
    location: 'Chicago, IL',
    price: '$1,650,000',
    bedrooms: 3,
    bathrooms: 2.5,
    area: '2,500 sq ft',
    type: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1760611655987-d348d6d28174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2OTA2MDEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybiUyMGx1eHVyeXxlbnwxfHx8fDE3NjkxNzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Elegant villa with stunning lake views. Floor-to-ceiling windows, gourmet kitchen, and private dock access.',
    amenities: [
      'Lake Views',
      'Private Dock',
      'Fireplace',
      'Balconies',
      'Updated Systems',
      'Resort Amenities'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 's6',
    title: 'Coastal San Diego Estate',
    location: 'San Diego, CA',
    price: '$3,450,000',
    bedrooms: 5,
    bathrooms: 4.5,
    area: '4,200 sq ft',
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2OTA5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxNDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638284556849-1848ec7beb4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiZWRyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTE3NDY0OHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Luxurious coastal estate with panoramic ocean views. Modern architecture, infinity pool, and designer finishes throughout.',
    amenities: [
      'Ocean Views',
      'Infinity Pool',
      'Home Theater',
      'Wine Room',
      'Smart Home',
      'Guest House'
    ],
    furnished: false,
    furnishingStatus: 'Semi-Furnished'
  },
  {
    id: 's7',
    title: 'Seattle Modern Townhouse',
    location: 'Seattle, WA',
    price: '$1,285,000',
    bedrooms: 3,
    bathrooms: 2.5,
    area: '2,000 sq ft',
    type: 'Townhouse',
    images: [
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTEyNDc1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1490136001793-14ccbc24fbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc2OTE3NDY1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMG1vZGVybiUyMGx1eHVyeXxlbnwxfHx8fDE3NjkxNzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Contemporary townhouse in vibrant Seattle neighborhood. Open floor plan, rooftop deck, and walking distance to amenities.',
    amenities: [
      'Rooftop Deck',
      'EV Charging',
      'Smart Thermostat',
      'Hardwood Floors',
      'Storage',
      'Walkable'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 's8',
    title: 'Luxury Austin Ranch',
    location: 'Austin, TX',
    price: '$2,780,000',
    bedrooms: 4,
    bathrooms: 3.5,
    area: '3,600 sq ft',
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2OTA5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxNDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638284556849-1848ec7beb4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiZWRyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTE3NDY0OHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Stunning ranch-style home on expansive acreage. Modern interior, gourmet kitchen, resort-style pool, and outdoor entertaining space.',
    amenities: [
      'Acreage',
      'Pool & Spa',
      'Outdoor Kitchen',
      'Home Gym',
      'Guest Suite',
      'Horse Facilities'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  },
  {
    id: 's9',
    title: 'Boston Beacon Hill Condo',
    location: 'Boston, MA',
    price: '$1,975,000',
    bedrooms: 3,
    bathrooms: 2.5,
    area: '2,100 sq ft',
    type: 'Condominium',
    images: [
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxNDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4OTgxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1713799210416-593f9734af6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwY2l0eSUyMHZpZXd8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Prestigious Beacon Hill condo with classic charm and modern upgrades. High ceilings, marble finishes, and private elevator access.',
    amenities: [
      'Private Elevator',
      'Marble Finishes',
      'Concierge',
      'Storage',
      'Garage Parking',
      'Historic District'
    ],
    furnished: false,
    furnishingStatus: 'Semi-Furnished'
  },
  {
    id: 's10',
    title: 'Denver Mountain View Estate',
    location: 'Denver, CO',
    price: '$2,650,000',
    bedrooms: 5,
    bathrooms: 4,
    area: '4,000 sq ft',
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2OTA5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDc3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTEyNDc1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638284556849-1848ec7beb4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiZWRyb29tJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTE3NDY0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1490136001793-14ccbc24fbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc2OTE3NDY1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzY5MTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Spectacular estate with breathtaking mountain views. Luxury finishes, gourmet kitchen, wine cellar, and custom details throughout.',
    amenities: [
      'Mountain Views',
      'Wine Cellar',
      'Home Theater',
      'Heated Garage',
      'Smart Home',
      'Landscaped Grounds'
    ],
    furnished: false,
    furnishingStatus: 'Unfurnished'
  }
];