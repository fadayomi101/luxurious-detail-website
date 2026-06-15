/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package, AddOn, VehicleSize, GalleryItem } from './types';

export const PACKAGES: Package[] = [
  {
    id: 'essential',
    name: 'Essential Foam & Shine',
    price: 45,
    description: 'Perfect for quick weekly maintenance. Brings back the premium clean luster.',
    features: [
      'Two-bucket hand wash with premium pH-neutral foam',
      'Microfiber drying with compressed-air blowout',
      'Wheel faces, barrels, and wheel wells detailed',
      'Tires dressed with satin-finish protectant',
      'Exterior window streak-free clarify',
      'Express cabin vacuuming'
    ]
  },
  {
    id: 'signature',
    name: 'Breezy Signature Detail',
    price: 135,
    description: 'Our most popular comprehensive service. Deep interior steam sanitize combined with complete exterior paint rejuvenation.',
    features: [
      'All Essential foam & shine features included',
      'Clay bar mechanical de-contamination treatment',
      'Premium ceramic spray sealant (3-month protection)',
      'Dashboard, vents, and door panels steam-cleaned & uv-protected',
      'Shampoo and deep extraction of carpet mats',
      'Leather cleaned and conditioned with natural matte balm',
      'Door jambs, trunk jams, and exhaust tips polished'
    ]
  },
  {
    id: 'elite',
    name: 'Elite Concierge Restoration',
    price: 295,
    description: 'An exhaustive, ultra-precision overhaul. Corrects paint defects, extracts embedded odors, and applies elite shell coatings.',
    features: [
      'All Signature detail treatments included',
      'Single-stage machine paint correction (swirl & scratch removal)',
      '12-Month premium graphene hybrid coating applied',
      'Full cabin interior steam sterilization and germ eradication',
      'Engine bay detailed, steam-treated, and polymer-sealed',
      'Infrared odor neutralization treatment',
      'Rain-repellent windshield glass treatment'
    ]
  }
];

export const VEHICLE_SIZES: VehicleSize[] = [
  { id: 'compact', name: 'Sedan / Coupe', multiplier: 1.0, description: 'Standard passenger vehicles' },
  { id: 'midsize', name: 'SUV / Crossover', multiplier: 1.25, description: 'Medium SUVs, wagons, and crossovers' },
  { id: 'large', name: 'Truck / Large SUV', multiplier: 1.5, description: 'Full-size pickups, large SUVs, and passenger vans' }
];

export const ADD_ONS: AddOn[] = [
  { id: 'ceramic', name: 'Premium Ceramic Coating Up', price: 90, description: 'Increases shine and repels hydrophobic residues (adds 6 months protection)' },
  { id: 'pet_hair', name: 'Extreme Pet Hair Extraction', price: 40, description: 'Deep fiber brushing to locate and extract embedded styling fibers & hair' },
  { id: 'engine_bay', name: 'Engine Bay Steam Detailing', price: 60, description: 'Degrease, steam sanitize, and condition rubber hoses and engine covers' },
  { id: 'steam_sanitize', name: 'AC Vent & Odor Steam Sanitize', price: 45, description: 'Therapeutic pressurized steam sent deep through all air intake channels' },
  { id: 'ceramic_glass', name: 'Ceramic Glass Rainproof treatment', price: 35, description: 'Specialized rain-repelling chemical bonding for wind, front, and side mirrors' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'paint_correction',
    title: 'Multi-Stage Paint Correction',
    beforeImg: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800',
    description: 'Scratches, swirl marks, and paint oxidation resolved on this luxury performance coupe.'
  },
  {
    id: 'interior_restoration',
    title: 'Decontaminated Leather Cabin',
    beforeImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
    description: 'Restoring dirty console elements and dehydrated leather back to factory matte finish.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Marcus Vance',
    vehicle: 'Tesla Model S Plaid',
    quote: 'Absolutely outstanding. My Plaid looks cleaner than the day I picked it up. The paint correction got rid of all of the factory swirl marks. Worth every single penny.',
    rating: 5,
    package: 'Elite Concierge Restoration'
  },
  {
    name: 'Sarah Peterson',
    vehicle: 'Range Rover Sport',
    quote: 'Breezy is the only place I trust with my Range Rover. With two toddlers and a golden retriever, the interior gets destroyed. The team made it look like a showroom floor.',
    rating: 5,
    package: 'Breezy Signature Detail'
  },
  {
    name: 'David K.',
    vehicle: 'Porsche 911 GT3 RS',
    quote: 'Extremely detailed-oriented. They clean the inside of exhaust pipes and standard door sills that other places miss entirely. High-degree of professionalism.',
    rating: 5,
    package: 'Elite Concierge Restoration'
  }
];

export const FAQS = [
  {
    question: 'How long does a Breezy Detailing service take?',
    answer: 'It depends on the package. Our Essential Foam & Shine takes about 45-60 minutes. The Breezy Signature Detail requires 2 to 3.5 hours. Our flagship Elite Concierge Restoration is a full-day process (approx 6-8 hours) requiring extensive clay bar, single-stage compound polish, and precise curing times.'
  },
  {
    question: 'What is a vehicle size multiplier, and why is it applied?',
    answer: 'Larger vehicles (like full-size SUVs and pickup trucks) have up to double the surface area of a compact sedan, and require significantly more materials (cleaners, ceramic coatings) and manual work. We apply a 1.25x factor for standard crossovers/SUVs and a 1.5x factor for full-size pickups.'
  },
  {
    question: 'How do I care for my car after receiving the Ceramic Sealant?',
    answer: 'Do not wash your car for 7 days to allow the hydrophobic coatings to fully cross-link and cure. Once cured, always wash your car in the shade using clean microfiber cloths and pH-neutral car wash soap. Avoid commercial automated tunnel washes with rotating brushes.'
  },
  {
    question: 'Are your detailing products eco-friendly?',
    answer: 'Yes! We care about the environment. Our premium shampoos are 100% biodegradable, and our water filtration system recaptures and filters runoffs to protect local waterways.'
  }
];
