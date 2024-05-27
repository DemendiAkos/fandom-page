export type Scraps = Scrap[];


export interface Scrap {
  ScrapName: string;
  MinimumValue: number;
  Maximumvalue: number;
  Weight: number;
  Conductivity: number;
  IsTwoHanded: boolean;
}
