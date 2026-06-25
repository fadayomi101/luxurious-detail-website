/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package, VehicleSize, GalleryItem } from './types';

export const PACKAGES: Package[] = [
  {
    id: 'single_stage',
    name: 'Single Stage Paint Correction',
    basePrice: 130000,
    prices: {
      sedan: 130000,
      mid_suv: 180000,
      suv: 190000,
      suv_lwb: 200000
    },
    description: 'Perfect for light defect removal and gloss enhancement. Restores depth and clarity to your paintwork.',
    features: [
      'Decontamination wash and clay bar',
      'Single stage machine polish',
      'Removes 50-60% of light defects and swirls',
      'Premium paint sealant applied',
      'Exterior plastic trim dressed'
    ]
  },
  {
    id: 'two_stage',
    name: 'Two Stage Paint Correction',
    basePrice: 170000,
    prices: {
      sedan: 170000,
      mid_suv: 230000,
      suv: 280000,
      suv_lwb: 400000
    },
    description: 'Intensive defect removal. Heavy compounding followed by a finishing polish for maximum clarity.',
    features: [
      'Decontamination wash and clay bar',
      'Heavy compound machine stage',
      'Refinement and finishing polish',
      'Removes 75-85% of moderate to heavy defects',
      'Premium ceramic sealant applied'
    ]
  },
  {
    id: 'three_stage',
    name: 'Three Stage Paint Correction',
    basePrice: 400000,
    prices: {
      sedan: 400000,
      mid_suv: 490000,
      suv: 550000,
      suv_lwb: 600000
    },
    description: 'The ultimate restoration for heavily degraded paint. Multiple aggressive cutting stages and fine jeweler polishing.',
    features: [
      'Extensive decontamination processes',
      'Multiple heavy machine compounding stages',
      'Jeweling polish for perfect mirror finish',
      'Removes 90-95% of heavy defects and deep scratches',
      '12-Month premium graphene coating applied'
    ]
  },
  {
    id: 'experience_imperial',
    name: 'The Imperial Treatment',
    basePrice: 1500000,
    prices: { sedan: 1500000, mid_suv: 1500000, suv: 1500000, suv_lwb: 1500000 },
    description: 'For Royale Collectors and Connoisseurs.',
    features: [
      'Bespoke museum-grade concourse detailing',
      'Intensive interior out-of-vehicle deep restoration',
      'Multi-stage paint correction to absolute perfection',
      'Multi-layer elite nano-ceramic shell coating',
      'White glove delivery and lifetime maintenance consultation'
    ]
  },
  {
    id: 'experience_heritage',
    name: 'The Heritage Collection Care',
    basePrice: 1000000,
    prices: { sedan: 1000000, mid_suv: 1000000, suv: 1000000, suv_lwb: 1000000 },
    description: 'For Classics and Museum Pieces.',
    features: [
      'Delicate single-stage refinement for classic single-stage paints',
      'Hand-applied carnauba wax sealing',
      'Gentle leather conditioning without harsh chemicals',
      'Chrome and analog instrument cluster polishing',
      'Engine bay dry ice cleaning'
    ]
  },
  {
    id: 'experience_grand_tour',
    name: 'The Grand Tour Detail',
    basePrice: 800000,
    prices: { sedan: 800000, mid_suv: 800000, suv: 800000, suv_lwb: 800000 },
    description: 'For Modern icons of Performance.',
    features: [
      'Performance brake dust and iron decontamination',
      'Carbon fiber panel specialized polishing',
      'Alcantara steering wheel and seat revitalization',
      'Track-ready heat resistant wheel coating applied',
      'Aerodynamic component sealing'
    ]
  }
];

export const VEHICLE_SIZES: VehicleSize[] = [
  { id: 'sedan', name: 'Sedan', description: 'Standard passenger sedans and coupes' },
  { id: 'mid_suv', name: 'Mid Size SUV', description: 'Medium SUVs and crossovers' },
  { id: 'suv', name: 'SUV', description: 'Standard size SUVs' },
  { id: 'suv_lwb', name: 'SUV LWB', description: 'Long-wheelbase and full-size SUVs' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'paint_correction',
    title: 'Multi-Stage Paint Correction',
    beforeImg: '/before.mp4',
    afterImg: '/after.mp4',
    description: 'Scratches, swirl marks, and paint oxidation resolved on this luxury performance coupe.'
  },
  {
    id: 'interior_restoration',
    title: 'Decontaminated Leather Cabin',
    beforeImg: '/before-2.mp4',
    afterImg: '/after-2.mp4',
    description: 'Restoring dirty console elements and dehydrated leather back to factory matte finish.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Marcus Vance',
    vehicle: 'Tesla Model S Plaid',
    quote: 'Absolutely outstanding. My Plaid looks cleaner than the day I picked it up. The paint correction got rid of all of the factory swirl marks. Worth every single penny.',
    rating: 5,
    package: 'Three Stage Paint Correction'
  },
  {
    name: 'Sarah Peterson',
    vehicle: 'Range Rover Sport',
    quote: 'Luxuriös is the only place I trust with my Range Rover. With two toddlers and a golden retriever, the interior gets destroyed. The team made it look like a showroom floor.',
    rating: 5,
    package: 'Two Stage Paint Correction'
  },
  {
    name: 'David K.',
    vehicle: 'Porsche 911 GT3 RS',
    quote: 'Extremely detailed-oriented. They clean the inside of exhaust pipes and standard door sills that other places miss entirely. High-degree of professionalism.',
    rating: 5,
    package: 'Single Stage Paint Correction'
  }
];

export const FAQS = [
  {
    question: 'How long does a detailing service take?',
    answer: 'It depends on the package. Single Stage Paint Correction takes about 4-6 hours. Two Stage takes 1-2 days. Three Stage is a comprehensive multi-day process.'
  },
  {
    question: 'How do you price for different vehicle sizes?',
    answer: 'Larger vehicles like SUVs and long-wheelbase vehicles require significantly more materials and time for machine polishing. Our pricing structure directly reflects the size and panels of your vehicle.'
  },
  {
    question: 'How do I care for my car after receiving paint correction?',
    answer: 'We recommend always washing your car in the shade using clean microfiber cloths and a pH-neutral car wash soap. Avoid commercial automated tunnel washes with rotating brushes.'
  },
  {
    question: 'Are your detailing products eco-friendly?',
    answer: 'Yes! We care about the environment. Our premium shampoos are 100% biodegradable, and our water filtration system recaptures and filters runoffs to protect local waterways.'
  }
];
