import { Home, Shield, TreePine, Brush } from 'lucide-react';

export const categories = [
  {
    id: 'interior',
    name: 'Interior Paints',
    icon: Home,
    image:'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg',
    description:
      'Transform your indoor spaces with premium interior paints that bring warmth and elegance to every room.',
  },
  {
    id: 'exterior',
    name: 'Exterior Paints',
    icon: Home,
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      "Weather-resistant exterior paints that protect and beautify your home's exterior surfaces.",
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing',
    icon: Shield,
    image:
      '',
    description:
      'Complete waterproofing solutions to protect your property from moisture and water damage.',
  },
  {
    id: 'woodfinishes',
    name: 'Wood Finishes',
    icon: TreePine,
    image:
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Premium wood stains and finishes that enhance the natural beauty and durability of wood.',
  },
  {
    id: 'undercoat',
    name: 'Undercoat & Primers',
    icon: Brush,
    image:
      'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Essential base coats and primers for perfect paint adhesion and long-lasting results.',
  },
];
