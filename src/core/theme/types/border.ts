import { Sizing, SizingNone } from './sizing';

export type BorderWidth = Sizing<number> & SizingNone;

export type BorderRadius = Sizing<number> & SizingNone & { circle: number };
