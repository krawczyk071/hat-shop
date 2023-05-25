export interface APIdetail {
  payload: Payload;
  count: number;
  limit: number;
  offset: number;
}

export interface Payload {
  products: Product[];
}

export interface Product {
  description: Description;
  webID: string;
  price: Price;
  images: Image[];
  brand: string;
  brandSeoUrl: string;
  swatchImages: SwatchImage[];
  productStatus: string;
  productTitle: string;
  productURL: string;
  avgRating: string;
  ratingCount: number;
  recommendedPercentage: number;
  videos: any[];
  surcharges: any[];
  bestSeller: boolean;
  topRated: boolean;
  valueAddedIcons: string[];
  productOffers: ProductOffer[];
  styleGuide: StyleGuide;
  metaInfo: MetaInfo[];
  seoURL: string;
  rebate: Rebate;
  exclusions: Exclusions;
  altImages: AltImage[];
  isBopusEligible: boolean;
  monetization: Monetization;
  monetizationAttributes: MonetizationAttributes;
  isLTLProduct: boolean;
  isMarketplaceItem: boolean;
  shippingAndReturn: string;
  pricingDetails: any;
  preSelectedColor: any;
  preSelectedSku: string;
  specialEventPriceSummary: any;
  regulatedClass: any;
  taxCode: string;
  isNew: boolean;
  defaultAccordion: string;
  productType: ProductType;
  productFeatureCode: string;
  productDetails: string;
  sizing: any;
  ingredients: any;
  careInstructions: any;
  relatedInformation: any;
  availableAccordions: string[];
  badges: Badge[];
  vendorDetails: any;
  maxQuantityMessage: any;
  itemMaxAvailableCount: any;
  richCopyBlock: any;
  textCopyBlock: any;
  partnership: any;
  aboutTheBrand: any;
  howToUse: any;
  skuColorDescription: any;
  dept: string;
  allSkusAvailableOnline: boolean;
  isBossEligible: boolean;
  ypEligibility: string;
  SKUS: Skus[];
  isStoreAvailable: boolean;
  kcEligible: boolean;
  priceSet: number[];
  breadcrumbs: Breadcrumb[];
}

export interface Description {
  shortDescription: string;
  longDescription: string;
}

export interface Price {
  regularPriceType: any;
  salePriceStatus: any;
  isSuppressed: boolean;
  regularPrice: any;
  salePrice: any;
  yourPriceInfo: YourPriceInfo;
  promotion: any;
  percentageOff: any;
  suppressedPricingText: any;
  loyalty: Loyalty;
  kohlsCash: KohlsCash;
  lowestApplicablePrice: LowestApplicablePrice;
}

export interface YourPriceInfo {
  yourPrice: any;
  yourPriceSavings: any;
  offersIncludedInYourPrice: any[];
  offersEligibleForYourPrice: any[];
  appliedOffers: any[];
  saveMoreOffers: any[];
}

export interface Loyalty {
  pointsEarned: PointsEarned;
  loyaltyExclusions: any;
}

export interface PointsEarned {
  min: any;
  max: any;
}

export interface KohlsCash {
  kcEarned: KcEarned;
  kcEarningPeriod: KcEarningPeriod;
  kcRedemptionPeriod: KcRedemptionPeriod;
  kcExclusions: any;
}

export interface KcEarned {
  min: any;
  max: any;
}

export interface KcEarningPeriod {
  startDate: any;
  endDate: any;
}

export interface KcRedemptionPeriod {
  startDate: any;
  endDate: any;
}

export interface LowestApplicablePrice {
  minPrice: any;
  maxPrice: any;
}

export interface Image {
  url: string;
  height: string;
  width: string;
  altText: string;
}

export interface SwatchImage {
  color: string;
  URL: string;
}

export interface ProductOffer {
  id: string;
  itemType: any;
  groupType: any;
  offerType: string;
  code: string;
  description: string;
  termsConditions: string;
  restricted: any;
  sharable: any;
  offerEffectiveDate: OfferEffectiveDate;
  tenderTypes: any;
  storeOfferEffectiveDate: any;
  corpOfferIDs: any;
  channels: any;
  barCode: string;
  pin: string;
  discountType: string;
  discountAmount: number;
  multipleGiftsAllowed: any;
  tiers: any[];
}

export interface OfferEffectiveDate {
  begDate: string;
  endDate: string;
}

export interface StyleGuide {
  sizeChartText: string;
}

export interface MetaInfo {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: any;
}

export interface Rebate {
  shortDescription: any;
  longDescription: any;
  rebateURL: any;
}

export interface Exclusions {
  shortDescription: any;
  longDescription: any;
}

export interface AltImage {
  url: string;
  height: string;
  width: string;
  altText: string;
}

export interface Monetization {
  brand: Brand;
  ageAppropriate: any;
  occasion: any;
  gender: any;
  sportsLeague: any;
  sportsTeam: any;
  personaCategory: any;
  personaTheme: any;
  personaSubject: any;
  personaGroupCode: any;
  adUnit: any;
  silhouette: any;
  ageAppropriateRange: any;
  childAgeRange: any;
  sizeRange: any;
  fit: any;
  legOpening: any;
  trend: any;
  feature: any;
  activity: any;
  bodyType: any;
  roastsFlavors: any;
}

export interface Brand {
  value: string;
}

export interface AdUnit {
  value: string;
}

export interface Feature {
  value: string;
}

export interface Activity {
  value: string;
}

export interface MonetizationAttributes {
  ageAppropriate: any;
  gender: any;
  partnership: any;
  childAgeRange: any;
  sizeRange: string;
  audiences: any;
}

export interface ProductType {
  isBuyProduct: boolean;
  isGetProduct: boolean;
  isVGC: boolean;
}

export interface Badge {
  imageURL: string;
  altText: string;
  title: string;
}

export interface Skus {
  skuCode: string;
  images: Image2[];
  color: string;
  size: string;
  price: Price2;
  availability: string;
  giftWrappable: boolean;
  specialTypeSku: string;
  isBopusEligible: boolean;
  storeInfo: any;
  sortOrder: string;
  itemMaxAllowedCount: number;
  itemMaxAvailableCount: number;
  maxQuantityMessage: string;
  shippingServiceCode: string;
  isStoreAvailable: boolean;
  surcharge: any;
  sizeRange: string;
  finish: any;
  coverage: any;
  formulation: any;
  skinType: any;
  benefits: any;
  concerns: any;
  sustainability: any;
  skinCareType: any;
  refillable: any;
  swatchOrder: any;
  skuColorDescription: any;
  isBossEligible: boolean;
  UPC: Upc;
}

export interface Image2 {
  url: string;
  height: string;
  width: string;
  altText: string;
}

export interface Price2 {
  isSuppressed: boolean;
  salePriceStatus: string | null;
  salePrice: SalePrice | null;
  regularPriceType: string;
  regularPrice: RegularPrice;
  promotion: any;
  suppressedPricingText: any;
  yourPriceInfo: YourPriceInfo2;
  pointsEarned: any;
  kcEarned?: number | null;
  lowestApplicablePrice: number;
}

export interface SalePrice {
  minPrice: number;
  maxPrice: any;
}

export interface RegularPrice {
  minPrice: number;
  maxPrice: any;
}

export interface YourPriceInfo2 {
  yourPrice: any;
  yourPriceSavings: any;
  appliedOffers: any[];
  saveMoreOffers: number[];
  offersIncludedInYourPrice: any[];
  offersEligibleForYourPrice: OffersEligibleForYourPrice[];
}

export interface OffersEligibleForYourPrice {
  offerId: number;
  tierLevel: any;
}

export interface Upc {
  image: any;
  ID: string;
}

export interface Breadcrumb {
  name: string;
  seoURL: string;
  currentDimensionId: string;
}
