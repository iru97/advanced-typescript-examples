export type SubscriptionStatusRaw = 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'PENDING';
export interface DateTimeInfo {
    dateTime: string;
    timezone: string;
}

export interface TaxDataRaw {
    company: string;
    country: string;
    address: string;
  }

export interface SubscriptionRaw {
    id: string;
    provider: string;
    created: string;
    status: SubscriptionStatusRaw;
    nextPaymentDate: DateTimeInfo;
    nextPaymentAmount: number;
    taxData: TaxDataRaw;
}

type JoinNestedKey<T, K> = T extends string | number ? `${T}.${K extends string | number | boolean ? K : ''}` : K;

export type NestedKey<T extends Object, P = false> = {
  [K in keyof T]: T[K] extends string | number ? JoinNestedKey<P, K> : JoinNestedKey<P, K> | NestedKey<T[K], JoinNestedKey<P, K>>;
}[keyof T];

export type SubscriptionRequestParams = NestedKey<SubscriptionRaw>[];

const params: SubscriptionRequestParams = ["nextPaymentDate.dateTime", "taxData.company"];
