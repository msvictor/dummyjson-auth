declare type UserState = {
  id?: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  maidenName?: string;
  age?: number;
  phone?: string;
  password?: string;
  birthDate?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: Hair;
  domain?: string;
  ip?: string;
  address?: Address;
  macAddress?: string;
  university?: string;
  bank?: Bank;
  company?: Company;
  ein?: string;
  ssn?: string;
  userAgent?: string;
};

declare type Address = {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
};

declare type Coordinates = {
  lat: number;
  lng: number;
};

declare type Bank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

declare type Company = {
  address: Address;
  department: string;
  name: string;
  title: string;
};

declare type Hair = {
  color: string;
  type: string;
};
