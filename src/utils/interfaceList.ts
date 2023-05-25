export interface APIlist {
  offset: number | null;
  payload: Payload;
  count: number | null;
  limit: number | null;
}

export interface Payload {
  autoCorrectedTerm: any;
  tabInfo: TabInfo;
  disclaimerType: any;
  monetization: Monetization;
  availableTerms: any[];
  activeDimensions: ActiveDimension[];
  products: Product[];
  suppressAds: boolean;
  searchTerm: string;
  relevancyAlgorithm: string;
  omnitureInfo: any;
  storeBreadcrumbURL: any;
  links: any;
  resultsPersonalized: boolean;
  sorts: Sort[];
  legalDisclaimer: any;
  h1tag: string;
  pageSeoURL: string;
  searchResultMessage: any;
  stores: any;
  metaInfo: MetaInfo;
  spotLights: SpotLights;
  selectedDimensions: any[];
  linkCartridge: LinkCartridge;
  relatedSearchTerms: any[];
  monetizationRequest: any;
  propensityAvailable: any;
  sephoraProducts: boolean;
  pageURL: string;
  dimensions: Dimension[];
  encoded: boolean;
}

export interface TabInfo {
  allProducts: AllProduct[];
}

export interface AllProduct {
  tabName: string;
  count: number | null;
  isSelected: boolean;
  url: string;
}

export interface Monetization {
  ageAppropriate: AgeAppropriate;
  occasion: any;
  sizeRange: any;
  bodyType: any;
  sportsLeague: any;
  personaCategory: any;
  gender: any;
  activity: any;
  trend: any;
  personaSubject: any;
  personaGroupCode: any;
  legOpening: any;
  adUnit: AdUnit;
  ageAppropriateRange: any;
  childAgeRange: any;
  fit: any;
  feature: any;
  personaTheme: any;
  silhouette: any;
  sportsTeam: any;
  roastsFlavors: any;
  brand: any;
}

export interface AgeAppropriate {
  value: string;
}

export interface AdUnit {
  value: string;
}

export interface ActiveDimension {
  name: string;
  index: number | null;
  label: string;
  activeDimensionValues: ActiveDimensionValue[];
}

export interface ActiveDimensionValue {
  seoURL: string;
  name: string;
  index: number | null;
  currentDimensionId: string;
  currentAttributeId: any;
  ID: string;
  productCount: number | null;
  breadcrumbType: any;
}

export interface Product {
  image: Image;
  availableColr: string[];
  sephoraProduct: boolean;
  rating: Rating;
  valueAddedIcons: string[];
  prodType: string;
  ypEligible: boolean;
  sponsoredData: any;
  valueAddedBadges: ValueAddedBadges | null;
  isBossAvailable: boolean;
  productTitle: string;
  isAvailableforShip?: boolean;
  seoURL: string;
  webID: string;
  couponEligible: boolean;
  isVGC: boolean;
  variations: string;
  storeNumbers?: StoreNumber[];
  swatchImages: SwatchImage[];
  displayColor: string[];
  prices: Price[];
  boosted: boolean;
  altImageUrl?: string | null;
  isAvailableforPickUp?: boolean;
}

export interface Image {
  width: string;
  url: string;
  height: string;
}

export interface Rating {
  count: number | null;
  avgRating?: number | null;
}

export interface ValueAddedBadges {
  realTime: string[];
  other: string[];
  pricing: any[];
}

export interface StoreNumber {
  value: string;
}

export interface SwatchImage {
  color: string;
  URL: string;
}

export interface Price {
  isCurrentPrice: boolean;
  salePriceType: any;
  isSuppressed: boolean;
  salePrice?: SalePrice | null;
  salePriceStatus?: string | null;
  regularPrice: RegularPrice;
  regularPriceType: string;
  displayEndDateTime: string;
  purchaseBegDateTime: string;
  purchaseEndDateTime: string;
  priceCode: string;
  suppressedPricingText: any;
  promotions: Promotions;
  displayBegDateTime: string;
  promotion: any;
  statusCode: string;
  isPriceInstore: boolean;
}

export interface SalePrice {
  minPrice: number | null;
  maxPrice?: number | null;
}

export interface RegularPrice {
  minPrice: number | null;
  maxPrice?: number | null;
}

export interface Promotions {
  tieredPrice: any[];
  bogo: any[];
  group: any[];
}

export interface Sort {
  name: string;
  active: boolean;
  ID: string;
}

export interface MetaInfo {
  metaKeywords: any;
  metaTitle: string;
  copyBlock: any;
  seoLinks: any;
  seoNoIndex: string;
  metaDescription: string;
}

export interface SpotLights {
  bannerContents: any[];
}

export interface LinkCartridge {
  linkGroup: any[];
}

export interface Dimension {
  dimensionValues: DimensionValue[];
  clearSEOURL?: string | null;
  name: string;
  index: number | null;
  label: string;
}

export interface DimensionValue {
  seoURL: string;
  noFollow: boolean;
  name: string;
  index: number | null;
  active: boolean;
  currentDimensionId: string;
  currentAttributeId: any;
  ID: string;
  productCount: number | null;
}
