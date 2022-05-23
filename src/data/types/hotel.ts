export interface RootHotel {
  data: Hotel[];
  status: Status;
  paging: Paging;
}

export interface Hotel {
  location_id: string;
  name?: string;
  latitude?: string;
  longitude?: string;
  num_reviews?: string;
  timezone?: string;
  location_string?: string;
  photo?: Photo;
  awards?: any[];
  preferred_map_engine?: string;
  autobroaden_type?: string;
  autobroaden_label?: string;
  ranking_position?: string;
  ranking_denominator?: string;
  ranking?: string;
  distance?: string;
  distance_string: any;
  bearing?: string;
  is_closed?: boolean;
  is_long_closed?: boolean;
  price_level?: string;
  price?: string;
  hotel_class?: string;
  business_listings?: BusinessListings;
  special_offers?: SpecialOffers;
  listing_key?: string;
  raw_ranking?: string;
  ranking_geo?: string;
  ranking_geo_id?: string;
  ranking_category?: string;
  subcategory_type?: string;
  subcategory_type_label?: string;
  rating?: string;
  hotel_class_attribution?: string;
  ad_position?: string;
  ad_size?: string;
  doubleclick_zone?: string;
  ancestors?: Ancestor[];
  detail?: string;
  page_type?: string;
  mob_ptype?: string;
  address?: string;
  cuisine?: any[];
  phone?: string;
  web_url?: string;
  website?: string;
}

export interface Photo {
  images: Images;
  is_blessed: boolean;
  uploaded_date: string;
  caption: string;
  id: string;
  helpful_votes: string;
  published_date: string;
  user?: User;
}

export interface Images {
  small: Small;
  thumbnail: Thumbnail;
  original: Original;
  large: Large;
  medium: Medium;
}

export interface Small {
  width: string;
  url: string;
  height: string;
}

export interface Thumbnail {
  width: string;
  url: string;
  height: string;
}

export interface Original {
  width: string;
  url: string;
  height: string;
}

export interface Large {
  width: string;
  url: string;
  height: string;
}

export interface Medium {
  width: string;
  url: string;
  height: string;
}

export interface User {
  user_id: any;
  member_id: string;
  type: string;
}

export interface BusinessListings {
  desktop_contacts: any[];
  mobile_contacts: any[];
}

export interface SpecialOffers {
  desktop: any[];
  mobile: any[];
}

export interface Ancestor {
  subcategory: Subcategory[];
  name: string;
  abbrv: any;
  location_id: string;
}

export interface Subcategory {
  key: string;
  name: string;
}

export interface Status {
  unfiltered_total_size: string;
  commerce_country_iso_code: string;
  autobroadened: boolean;
  progress: string;
  auction_key: string;
  primary_geo: string;
  pricing: string;
  doubleClickZone: string;
}

export interface Paging {
  results: string;
  total_results: string;
}
