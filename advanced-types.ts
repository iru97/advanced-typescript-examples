export interface Metric {
    label: Function;
    color: string;
    handler: Function;
    aggregationHandler: Function;
    aggregation?: unknown;
    prevAggregation?: unknown;
    prevValues?: [];
    values?: [];
}

interface A {
    a: string;
}

interface B {
    b: string;
}

// Union
export type AOrB = A | B;

// Intersection
export type AAndB = A & {b: string};

const aOrB: AOrB = {
    a: '',
    //b: ''
}

const aAndB: AAndB = {
    a: '',
    b: ''
}

// Pick
export type EvolutionMetricsPick = Record<
  string,
  Pick<Metric, 'aggregation' | 'prevAggregation' | 'prevValues' | 'values' | 'color'>
>;

// Omit
export type EvolutionMetricsOmit = Record<
  string,
  Omit<Metric, 'label' | 'handler' | 'aggregationHandler'>
>;

// Record
const map = new Map<string, string>();
const valueKey: Record<string, string | (() => string)> = {
    metric1: 'value',
    'metric-1': '',
    metric2: () => 'value'
}

// Partial
const updateMetricData = (metric: Partial<Metric>) => {
    //metric.
}

// Readonly
const readonlyMetricData = (metric: Readonly<Metric>) => {
    //metric.label = '';
}