export interface Application {
  name: string;
  id: string;
  inAppPurchases: boolean;
  hasAds: boolean;
  subscriptionOptions: Subscription[];
}

export interface Subscription {
  length: string;
  price: number;
}

// // Define the interface for the attributes of an app
// interface AppAttributes {
//     name: string;
//     bundleId: string;
//     sku: string;
//     primaryLocale: string;
//     isOrEverWasMadeForKids: boolean;
//     subscriptionStatusUrl: string | null;
//     subscriptionStatusUrlVersion: string | null;
//     subscriptionStatusUrlForSandbox: string | null;
//     subscriptionStatusUrlVersionForSandbox: string | null;
//     contentRightsDeclaration: string;
// }

// // Define the interface for an app object
// export interface Apps {
//     type: string;
//     id: string;
//     attributes: AppAttributes;
// }

// // Define the interface for the data array
// export interface DataResponse {
//     data: Apps[];
// }

export interface DataResponse {
  data: Datum[];
  links: DatumLinks;
  meta: Meta;
}

export interface Datum {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: DatumLinks;
}

export interface Attributes {
  name: string;
  bundleId: string;
  sku: string;
  primaryLocale: string;
  isOrEverWasMadeForKids: boolean;
  subscriptionStatusUrl: null;
  subscriptionStatusUrlVersion: null;
  subscriptionStatusUrlForSandbox: null;
  subscriptionStatusUrlVersionForSandbox: null;
  contentRightsDeclaration: string;
}

export interface DatumLinks {
  self: string;
}

export interface Relationships {
  ciProduct: AlternativeDistributionKey;
  betaTesters: BetaTesters;
  betaGroups: AlternativeDistributionKey;
  appStoreVersions: AlternativeDistributionKey;
  preReleaseVersions: AlternativeDistributionKey;
  betaAppLocalizations: AlternativeDistributionKey;
  builds: AlternativeDistributionKey;
  betaLicenseAgreement: AlternativeDistributionKey;
  betaAppReviewDetail: AlternativeDistributionKey;
  appInfos: AlternativeDistributionKey;
  appClips: AlternativeDistributionKey;
  appPricePoints: AlternativeDistributionKey;
  endUserLicenseAgreement: AlternativeDistributionKey;
  preOrder: AlternativeDistributionKey;
  appPriceSchedule: AlternativeDistributionKey;
  appAvailability: AlternativeDistributionKey;
  appAvailabilityV2: AlternativeDistributionKey;
  inAppPurchases: AlternativeDistributionKey;
  subscriptionGroups: AlternativeDistributionKey;
  gameCenterEnabledVersions: AlternativeDistributionKey;
  perfPowerMetrics: PerfPowerMetrics;
  appCustomProductPages: AlternativeDistributionKey;
  inAppPurchasesV2: AlternativeDistributionKey;
  promotedPurchases: AlternativeDistributionKey;
  appEvents: AlternativeDistributionKey;
  reviewSubmissions: AlternativeDistributionKey;
  subscriptionGracePeriod: AlternativeDistributionKey;
  customerReviews: AlternativeDistributionKey;
  gameCenterDetail: AlternativeDistributionKey;
  appStoreVersionExperimentsV2: AlternativeDistributionKey;
  alternativeDistributionKey: AlternativeDistributionKey;
  analyticsReportRequests: AlternativeDistributionKey;
  marketplaceSearchDetail: AlternativeDistributionKey;
}

export interface AlternativeDistributionKey {
  links: AlternativeDistributionKeyLinks;
}

export interface AlternativeDistributionKeyLinks {
  self: string;
  related: string;
}

export interface BetaTesters {
  links: DatumLinks;
}

export interface PerfPowerMetrics {
  links: PerfPowerMetricsLinks;
}

export interface PerfPowerMetricsLinks {
  related: string;
}

export interface Meta {
  paging: Paging;
}

export interface Paging {
  total: number;
  limit: number;
}
