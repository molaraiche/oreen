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
  _id?: string | number | undefined;
  image: string;
  name: string;
  price: number;
  review?: number;
  hot: boolean;
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

export interface dashCardType {
  id?: number;
  image: string;
  name: string;
  path: string;
}

export type imgProps = {
  name: boolean;
  url: string;
  public_id: string;
};
export interface ImgProps {
  url: string;
  public_id: string;
  name: string;
}

export interface CarType {
  _id?: number;
  name: string;
  mainImage?: string;
  secondaryImages?: [];
  description?: string;
  video?: string;
  price: number;
  brand: string;
  model: string;
  type?: string;
  condition?: string;
  review?: number;
  hot?: boolean;
}

export interface formType {
  type?: string;
  stats?: string | imgProps;
  title?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  img?: string;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  info?: string;
  multiple?: boolean;
  min?: string;
  max?: string;
  value?: string;
}

export interface bookType {
  _id?: string | number | undefined;
  name: string;
  phone: string;
  from: string;
  to: string;
  message: string;
  carName: string;
  status: string;
}

export interface testimonialCardType {
  _id?: string | number | undefined;
  profile: string;
  name: string;
  location: string;
  comment: string;
  review: number;
  phone?: string;
  hot?: boolean;
}
