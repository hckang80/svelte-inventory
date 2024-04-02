export const loading = ['lazy', 'eager'] as const;
export type Loading = (typeof loading)[number];

export const decoding = ['async', 'sync', 'auto'] as const;
export type Decoding = (typeof decoding)[number];
