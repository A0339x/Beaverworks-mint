import { LucideIcon } from 'lucide-react';

export type ViewType = 'home' | 'page' | 'category' | 'product';

export interface ViewState {
  type: ViewType;
  id: string;
}

export interface NavItem {
  label: string;
  id: string;
  type: ViewType;
  href?: string;
  children?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  link?: string;
}

export interface ProductHighlight {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  description: string;
  longDescription?: string; // Added for product detail page
  specs?: { label: string; value: string }[];
  category: string; // Used for filtering
  relatedIds?: string[]; // For cross-selling
}

export interface CollectionInfo {
  title: string;
  subtitle: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroImage?: string; // URL for background image
  stats?: { label: string; value: string }[];
  contentTitle?: string;
  content?: string; // Supports markdown-like formatting or newlines
  secondaryImage?: string;
}

export interface PageContent {
  title: string;
  subtitle?: string;
  headerImage: string;
  sections: {
    type?: 'standard' | 'banner' | 'embed' | 'musicPlayer'; // New field to distinguish layout styles
    title?: string;
    subtitle?: string; // Added subtitle support for sections
    content?: string;
    quote?: string; // Added for banner quotes
    image?: string;
    imageAlign?: 'left' | 'right';
    embedUrl?: string; // For embedded content like Bandcamp players
    albumArt?: string; // For music player
    bandcampAlbumId?: string; // For music player
    tracks?: { title: string; trackNum: number }[]; // For music player
  }[];
}
