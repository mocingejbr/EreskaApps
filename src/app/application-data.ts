import { Application } from './application/application.model';

export const APPLICATION_DATA: Application[] = [
  {
    name: 'iBločky',
    id: 'iblocky',
    inAppPurchases: true,
    hasAds: false,
    subscriptionOptions: [
      {
        length: 'One Month',
        price: 59.99,
      },
      {
        length: 'One Week',
        price: 19.99,
      },
    ],
  },
  {
    name: 'Simple Calculator',
    id: 'simple-calculator',
    inAppPurchases: true,
    hasAds: true,
    subscriptionOptions: [
      {
        length: 'One Week',
        price: 0.99,
      },
      {
        length: 'One Month',
        price: 2.99,
      },
      {
        length: 'Lifetime',
        price: 9.99,
      },
    ],
  },
  {
    name: 'DPH Kalulačka',
    id: 'vat-calculator',
    inAppPurchases: false,
    hasAds: true,
    subscriptionOptions: [],
  },
];
