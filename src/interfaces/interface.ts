export interface IProduct {
  id: number,
  slug: string,
  name: string,
  shortName: string,
  image: Image,
  cartImage: string,
  category: string,
  categoryImage: CategoryImage,
  new: boolean,
  price: number,
  description: string,
  features: string,
  includedItems: IncludedItem[],
  gallery: Gallery,
  others: Other[],
}
export interface Image {
  mobile: string,
  tablet: string,
  desktop: string,
}
export interface CategoryImage {
  mobile: string,
  tablet: string,
  desktop: string,
}
export interface IncludedItem {
  quantity: number,
  item: string,
}
export interface Gallery {
  first: First,
  second: Second,
  third: Third,
}
export interface First {
  mobile: string,
  tablet: string,
  desktop: string,
}
export interface Second {
  mobile: string,
  tablet: string,
  desktop: string,
}
export interface Third {
  mobile: string,
  tablet: string,
  desktop: string,
}
export interface Other {
  slug: string,
  name: string,
  image: Image2,
}
export interface Image2 {
  mobile: string,
  tablet: string,
  desktop: string,
}
export interface IModal {

  text: string,
  bg: string,
  hover: string,
}

export interface ICartProduct {
  id: number,
  name: string,
  price: number,
  image: string,
  cant: number,
  shortName?:string
}
export interface Iprops {
  children: JSX.Element | JSX.Element[];
}


export interface IncludedItems {
  quantity: number,
  item: string,
}

export interface InputProps {
  type: string,
  placeholder?: string,
  name?: string,
  value?: string,
  customClass? :string,
  
}

export type CustomHookFromProp = {
  type: string
}
export type ISummaryPrice = {
  total: number;
  shipping: number;
  iva: number;
  grandTotal: number;
};

export interface ICheckoutProp{
  products: ICartProduct[],
  
}