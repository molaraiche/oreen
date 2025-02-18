export interface linksType {
  id: number;
  path: string;
  label: string;
}
export interface partnerType {
  id: number;
  name: string;
  image: string;
  width: number;
  height: number;
}
export interface carCardType {
  id?: number;
  image: string;
  name: string;
  price: number;
  review: number;
}
export interface serviceCardType {
  type: string;
  image: string;
  name: string;
  width: number;
  height: number;
  description: string;
}
export interface advantageCardType {
  id?: number;
  image: string;
  name: string;
  description: string;
}
export interface testimonialCardType {
  id?: number;
  image: string;
  name: string;
  location: string;
  review: number;
}
export interface dashCardType {
  id?: number;
  image: string;
  name: string;
  path: string;
}

export type imgProps = {
  url: string;
  public_id: string;
};
export interface carType {
  id: number;
  name: string;
  mainImage?: imgProps;
  secondaryImages?: imgProps[];
  description?: string;
  video?: imgProps;
  price: number;
  brand: string;
  model: string;
  rate?: number;
  type?: string;
  condition?: string;
  status?: string;
}
export interface formType {
  type?: string;
  title?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  img?: string;
  id?: string;
}
