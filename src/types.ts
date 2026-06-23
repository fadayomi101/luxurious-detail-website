/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Package {
  id: string;
  name: string;
  basePrice: number;
  prices: Record<string, number>;
  description: string;
  features: string[];
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface VehicleSize {
  id: string;
  name: string;
  description: string;
}

export interface Appointment {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  vehicleMakeModel: string;
  vehicleSize: string;
  packageId: string;
  packageName: string;
  addOnIds: string[];
  addOnNames: string[];
  date: string;
  time: string;
  notes?: string;
  totalPrice: number;
  status: 'Pending' | 'Confirmed' | 'Completed';
}

export interface GalleryItem {
  id: string;
  title: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}
