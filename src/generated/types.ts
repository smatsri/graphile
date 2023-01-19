export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  Year: any;
};

export type Actor = Node & {
  __typename?: 'Actor';
  actorId: Scalars['Int'];
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActorsByActorId: FilmActorsConnection;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type ActorFilmActorsByActorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};

/** A condition to be used against `Actor` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ActorCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type ActorInfo = {
  __typename?: 'ActorInfo';
  actorId?: Maybe<Scalars['Int']>;
  filmInfo?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `ActorInfo` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ActorInfoCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `filmInfo` field. */
  filmInfo?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `ActorInfo` values. */
export type ActorInfosConnection = {
  __typename?: 'ActorInfosConnection';
  /** A list of edges which contains the `ActorInfo` and cursor to aid in pagination. */
  edges: Array<ActorInfosEdge>;
  /** A list of `ActorInfo` objects. */
  nodes: Array<Maybe<ActorInfo>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ActorInfo` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ActorInfo` edge in the connection. */
export type ActorInfosEdge = {
  __typename?: 'ActorInfosEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ActorInfo` at the end of the edge. */
  node?: Maybe<ActorInfo>;
};

/** Methods to use when ordering `ActorInfo`. */
export enum ActorInfosOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FilmInfoAsc = 'FILM_INFO_ASC',
  FilmInfoDesc = 'FILM_INFO_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL'
}

/** A connection to a list of `Actor` values. */
export type ActorsConnection = {
  __typename?: 'ActorsConnection';
  /** A list of edges which contains the `Actor` and cursor to aid in pagination. */
  edges: Array<ActorsEdge>;
  /** A list of `Actor` objects. */
  nodes: Array<Maybe<Actor>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Actor` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Actor` edge in the connection. */
export type ActorsEdge = {
  __typename?: 'ActorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Actor` at the end of the edge. */
  node?: Maybe<Actor>;
};

/** Methods to use when ordering `Actor`. */
export enum ActorsOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type AddResponse = {
  __typename?: 'AddResponse';
  res?: Maybe<Scalars['Float']>;
};

export type Address = Node & {
  __typename?: 'Address';
  address: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  addressId: Scalars['Int'];
  /** Reads a single `City` that is related to this `Address`. */
  cityByCityId?: Maybe<City>;
  cityId: Scalars['Int'];
  /** Reads and enables pagination through a set of `Customer`. */
  customersByAddressId: CustomersConnection;
  district: Scalars['String'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  phone: Scalars['String'];
  postalCode?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Staff`. */
  staffByAddressId: StaffConnection;
  /** Reads and enables pagination through a set of `Store`. */
  storesByAddressId: StoresConnection;
};


export type AddressCustomersByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CustomerCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


export type AddressStaffByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StaffCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};


export type AddressStoresByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StoreCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `address2` field. */
  address2?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `district` field. */
  district?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `postalCode` field. */
  postalCode?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Maybe<Address>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Address` at the end of the edge. */
  node?: Maybe<Address>;
};

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  Address2Asc = 'ADDRESS2_ASC',
  Address2Desc = 'ADDRESS2_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CityIdAsc = 'CITY_ID_ASC',
  CityIdDesc = 'CITY_ID_DESC',
  DistrictAsc = 'DISTRICT_ASC',
  DistrictDesc = 'DISTRICT_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  PostalCodeAsc = 'POSTAL_CODE_ASC',
  PostalCodeDesc = 'POSTAL_CODE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** A list of `Category` objects. */
  nodes: Array<Maybe<Category>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: 'CategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Category` at the end of the edge. */
  node?: Maybe<Category>;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Category = Node & {
  __typename?: 'Category';
  categoryId: Scalars['Int'];
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategoriesByCategoryId: FilmCategoriesConnection;
  lastUpdate: Scalars['Datetime'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type CategoryFilmCategoriesByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `City` values. */
export type CitiesConnection = {
  __typename?: 'CitiesConnection';
  /** A list of edges which contains the `City` and cursor to aid in pagination. */
  edges: Array<CitiesEdge>;
  /** A list of `City` objects. */
  nodes: Array<Maybe<City>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `City` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `City` edge in the connection. */
export type CitiesEdge = {
  __typename?: 'CitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `City` at the end of the edge. */
  node?: Maybe<City>;
};

/** Methods to use when ordering `City`. */
export enum CitiesOrderBy {
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CityIdAsc = 'CITY_ID_ASC',
  CityIdDesc = 'CITY_ID_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type City = Node & {
  __typename?: 'City';
  /** Reads and enables pagination through a set of `Address`. */
  addressesByCityId: AddressesConnection;
  city: Scalars['String'];
  cityId: Scalars['Int'];
  /** Reads a single `Country` that is related to this `City`. */
  countryByCountryId?: Maybe<Country>;
  countryId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type CityAddressesByCityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** A condition to be used against `City` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CityCondition = {
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `Country` values. */
export type CountriesConnection = {
  __typename?: 'CountriesConnection';
  /** A list of edges which contains the `Country` and cursor to aid in pagination. */
  edges: Array<CountriesEdge>;
  /** A list of `Country` objects. */
  nodes: Array<Maybe<Country>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Country` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Country` edge in the connection. */
export type CountriesEdge = {
  __typename?: 'CountriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Country` at the end of the edge. */
  node?: Maybe<Country>;
};

/** Methods to use when ordering `Country`. */
export enum CountriesOrderBy {
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Country = Node & {
  __typename?: 'Country';
  /** Reads and enables pagination through a set of `City`. */
  citiesByCountryId: CitiesConnection;
  country: Scalars['String'];
  countryId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type CountryCitiesByCountryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CityCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** A condition to be used against `Country` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CountryCondition = {
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  active?: Maybe<Scalars['Int']>;
  activebool: Scalars['Boolean'];
  /** Reads a single `Address` that is related to this `Customer`. */
  addressByAddressId?: Maybe<Address>;
  addressId: Scalars['Int'];
  createDate: Scalars['Date'];
  customerId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  lastUpdate?: Maybe<Scalars['Datetime']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `PaymentP200701`. */
  paymentP200701SByCustomerId: PaymentP200701SConnection;
  /** Reads and enables pagination through a set of `PaymentP200702`. */
  paymentP200702SByCustomerId: PaymentP200702SConnection;
  /** Reads and enables pagination through a set of `PaymentP200703`. */
  paymentP200703SByCustomerId: PaymentP200703SConnection;
  /** Reads and enables pagination through a set of `PaymentP200704`. */
  paymentP200704SByCustomerId: PaymentP200704SConnection;
  /** Reads and enables pagination through a set of `PaymentP200705`. */
  paymentP200705SByCustomerId: PaymentP200705SConnection;
  /** Reads and enables pagination through a set of `PaymentP200706`. */
  paymentP200706SByCustomerId: PaymentP200706SConnection;
  /** Reads and enables pagination through a set of `Payment`. */
  paymentsByCustomerId: PaymentsConnection;
  /** Reads and enables pagination through a set of `Rental`. */
  rentalsByCustomerId: RentalsConnection;
  /** Reads a single `Store` that is related to this `Customer`. */
  storeByStoreId?: Maybe<Store>;
  storeId: Scalars['Int'];
};


export type CustomerPaymentP200701SByCustomerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200701Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200701SOrderBy>>;
};


export type CustomerPaymentP200702SByCustomerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200702Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200702SOrderBy>>;
};


export type CustomerPaymentP200703SByCustomerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200703Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200703SOrderBy>>;
};


export type CustomerPaymentP200704SByCustomerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200704Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200704SOrderBy>>;
};


export type CustomerPaymentP200705SByCustomerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200705Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200705SOrderBy>>;
};


export type CustomerPaymentP200706SByCustomerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200706Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200706SOrderBy>>;
};


export type CustomerPaymentsByCustomerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


export type CustomerRentalsByCustomerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

/**
 * A condition to be used against `Customer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CustomerCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `activebool` field. */
  activebool?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createDate` field. */
  createDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']>;
};

export type CustomerList = {
  __typename?: 'CustomerList';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  sid?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `CustomerList` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CustomerListCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `notes` field. */
  notes?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `sid` field. */
  sid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `zipCode` field. */
  zipCode?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `CustomerList` values. */
export type CustomerListsConnection = {
  __typename?: 'CustomerListsConnection';
  /** A list of edges which contains the `CustomerList` and cursor to aid in pagination. */
  edges: Array<CustomerListsEdge>;
  /** A list of `CustomerList` objects. */
  nodes: Array<Maybe<CustomerList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CustomerList` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `CustomerList` edge in the connection. */
export type CustomerListsEdge = {
  __typename?: 'CustomerListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CustomerList` at the end of the edge. */
  node?: Maybe<CustomerList>;
};

/** Methods to use when ordering `CustomerList`. */
export enum CustomerListsOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SidAsc = 'SID_ASC',
  SidDesc = 'SID_DESC',
  ZipCodeAsc = 'ZIP_CODE_ASC',
  ZipCodeDesc = 'ZIP_CODE_DESC'
}

/** A connection to a list of `Customer` values. */
export type CustomersConnection = {
  __typename?: 'CustomersConnection';
  /** A list of edges which contains the `Customer` and cursor to aid in pagination. */
  edges: Array<CustomersEdge>;
  /** A list of `Customer` objects. */
  nodes: Array<Maybe<Customer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Customer` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Customer` edge in the connection. */
export type CustomersEdge = {
  __typename?: 'CustomersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Customer` at the end of the edge. */
  node?: Maybe<Customer>;
};

/** Methods to use when ordering `Customer`. */
export enum CustomersOrderBy {
  ActiveboolAsc = 'ACTIVEBOOL_ASC',
  ActiveboolDesc = 'ACTIVEBOOL_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CreateDateAsc = 'CREATE_DATE_ASC',
  CreateDateDesc = 'CREATE_DATE_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

export type Film = Node & {
  __typename?: 'Film';
  description?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActorsByFilmId: FilmActorsConnection;
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategoriesByFilmId: FilmCategoriesConnection;
  filmId: Scalars['Int'];
  fulltext: Scalars['String'];
  /** Reads and enables pagination through a set of `Inventory`. */
  inventoriesByFilmId: InventoriesConnection;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByLanguageId?: Maybe<Language>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByOriginalLanguageId?: Maybe<Language>;
  languageId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  length?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  originalLanguageId?: Maybe<Scalars['Int']>;
  rating?: Maybe<MpaaRating>;
  releaseYear?: Maybe<Scalars['Year']>;
  rentalDuration: Scalars['Int'];
  rentalRate: Scalars['BigFloat'];
  replacementCost: Scalars['BigFloat'];
  specialFeatures?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
};


export type FilmFilmActorsByFilmIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};


export type FilmFilmCategoriesByFilmIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};


export type FilmInventoriesByFilmIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InventoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};

export type FilmActor = Node & {
  __typename?: 'FilmActor';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actorByActorId?: Maybe<Actor>;
  actorId: Scalars['Int'];
  /** Reads a single `Film` that is related to this `FilmActor`. */
  filmByFilmId?: Maybe<Film>;
  filmId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `FilmActor` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FilmActorCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `FilmActor` values. */
export type FilmActorsConnection = {
  __typename?: 'FilmActorsConnection';
  /** A list of edges which contains the `FilmActor` and cursor to aid in pagination. */
  edges: Array<FilmActorsEdge>;
  /** A list of `FilmActor` objects. */
  nodes: Array<Maybe<FilmActor>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FilmActor` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FilmActor` edge in the connection. */
export type FilmActorsEdge = {
  __typename?: 'FilmActorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FilmActor` at the end of the edge. */
  node?: Maybe<FilmActor>;
};

/** Methods to use when ordering `FilmActor`. */
export enum FilmActorsOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `FilmCategory` values. */
export type FilmCategoriesConnection = {
  __typename?: 'FilmCategoriesConnection';
  /** A list of edges which contains the `FilmCategory` and cursor to aid in pagination. */
  edges: Array<FilmCategoriesEdge>;
  /** A list of `FilmCategory` objects. */
  nodes: Array<Maybe<FilmCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FilmCategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FilmCategory` edge in the connection. */
export type FilmCategoriesEdge = {
  __typename?: 'FilmCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FilmCategory` at the end of the edge. */
  node?: Maybe<FilmCategory>;
};

/** Methods to use when ordering `FilmCategory`. */
export enum FilmCategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type FilmCategory = Node & {
  __typename?: 'FilmCategory';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId: Scalars['Int'];
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  filmByFilmId?: Maybe<Film>;
  filmId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `FilmCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FilmCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
};

/** A condition to be used against `Film` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FilmCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `fulltext` field. */
  fulltext?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `originalLanguageId` field. */
  originalLanguageId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `releaseYear` field. */
  releaseYear?: InputMaybe<Scalars['Year']>;
  /** Checks for equality with the object’s `rentalDuration` field. */
  rentalDuration?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalRate` field. */
  rentalRate?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `replacementCost` field. */
  replacementCost?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `specialFeatures` field. */
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

export type FilmList = {
  __typename?: 'FilmList';
  actors?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fid?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['BigFloat']>;
  rating?: Maybe<MpaaRating>;
  title?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `FilmList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FilmListCondition = {
  /** Checks for equality with the object’s `actors` field. */
  actors?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fid` field. */
  fid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `FilmList` values. */
export type FilmListsConnection = {
  __typename?: 'FilmListsConnection';
  /** A list of edges which contains the `FilmList` and cursor to aid in pagination. */
  edges: Array<FilmListsEdge>;
  /** A list of `FilmList` objects. */
  nodes: Array<Maybe<FilmList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FilmList` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FilmList` edge in the connection. */
export type FilmListsEdge = {
  __typename?: 'FilmListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FilmList` at the end of the edge. */
  node?: Maybe<FilmList>;
};

/** Methods to use when ordering `FilmList`. */
export enum FilmListsOrderBy {
  ActorsAsc = 'ACTORS_ASC',
  ActorsDesc = 'ACTORS_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FidAsc = 'FID_ASC',
  FidDesc = 'FID_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** A connection to a list of `Film` values. */
export type FilmsConnection = {
  __typename?: 'FilmsConnection';
  /** A list of edges which contains the `Film` and cursor to aid in pagination. */
  edges: Array<FilmsEdge>;
  /** A list of `Film` objects. */
  nodes: Array<Maybe<Film>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Film` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Film` edge in the connection. */
export type FilmsEdge = {
  __typename?: 'FilmsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Film` at the end of the edge. */
  node?: Maybe<Film>;
};

/** Methods to use when ordering `Film`. */
export enum FilmsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  FulltextAsc = 'FULLTEXT_ASC',
  FulltextDesc = 'FULLTEXT_DESC',
  LanguageIdAsc = 'LANGUAGE_ID_ASC',
  LanguageIdDesc = 'LANGUAGE_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  OriginalLanguageIdAsc = 'ORIGINAL_LANGUAGE_ID_ASC',
  OriginalLanguageIdDesc = 'ORIGINAL_LANGUAGE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  ReleaseYearAsc = 'RELEASE_YEAR_ASC',
  ReleaseYearDesc = 'RELEASE_YEAR_DESC',
  RentalDurationAsc = 'RENTAL_DURATION_ASC',
  RentalDurationDesc = 'RENTAL_DURATION_DESC',
  RentalRateAsc = 'RENTAL_RATE_ASC',
  RentalRateDesc = 'RENTAL_RATE_DESC',
  ReplacementCostAsc = 'REPLACEMENT_COST_ASC',
  ReplacementCostDesc = 'REPLACEMENT_COST_DESC',
  SpecialFeaturesAsc = 'SPECIAL_FEATURES_ASC',
  SpecialFeaturesDesc = 'SPECIAL_FEATURES_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** A connection to a list of `Inventory` values. */
export type InventoriesConnection = {
  __typename?: 'InventoriesConnection';
  /** A list of edges which contains the `Inventory` and cursor to aid in pagination. */
  edges: Array<InventoriesEdge>;
  /** A list of `Inventory` objects. */
  nodes: Array<Maybe<Inventory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Inventory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Inventory` edge in the connection. */
export type InventoriesEdge = {
  __typename?: 'InventoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Inventory` at the end of the edge. */
  node?: Maybe<Inventory>;
};

/** Methods to use when ordering `Inventory`. */
export enum InventoriesOrderBy {
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  InventoryIdAsc = 'INVENTORY_ID_ASC',
  InventoryIdDesc = 'INVENTORY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

export type Inventory = Node & {
  __typename?: 'Inventory';
  /** Reads a single `Film` that is related to this `Inventory`. */
  filmByFilmId?: Maybe<Film>;
  filmId: Scalars['Int'];
  inventoryId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Rental`. */
  rentalsByInventoryId: RentalsConnection;
  /** Reads a single `Store` that is related to this `Inventory`. */
  storeByStoreId?: Maybe<Store>;
  storeId: Scalars['Int'];
};


export type InventoryRentalsByInventoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

/**
 * A condition to be used against `Inventory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InventoryCondition = {
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `inventoryId` field. */
  inventoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']>;
};

export type Language = Node & {
  __typename?: 'Language';
  /** Reads and enables pagination through a set of `Film`. */
  filmsByLanguageId: FilmsConnection;
  /** Reads and enables pagination through a set of `Film`. */
  filmsByOriginalLanguageId: FilmsConnection;
  languageId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type LanguageFilmsByLanguageIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};


export type LanguageFilmsByOriginalLanguageIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/**
 * A condition to be used against `Language` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LanguageCondition = {
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Language` values. */
export type LanguagesConnection = {
  __typename?: 'LanguagesConnection';
  /** A list of edges which contains the `Language` and cursor to aid in pagination. */
  edges: Array<LanguagesEdge>;
  /** A list of `Language` objects. */
  nodes: Array<Maybe<Language>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Language` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Language` edge in the connection. */
export type LanguagesEdge = {
  __typename?: 'LanguagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Language` at the end of the edge. */
  node?: Maybe<Language>;
};

/** Methods to use when ordering `Language`. */
export enum LanguagesOrderBy {
  LanguageIdAsc = 'LANGUAGE_ID_ASC',
  LanguageIdDesc = 'LANGUAGE_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum MpaaRating {
  G = 'G',
  Nc_17 = 'NC_17',
  Pg = 'PG',
  Pg_13 = 'PG_13',
  R = 'R'
}

export type NicerButSlowerFilmList = {
  __typename?: 'NicerButSlowerFilmList';
  actors?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fid?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['BigFloat']>;
  rating?: Maybe<MpaaRating>;
  title?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `NicerButSlowerFilmList` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type NicerButSlowerFilmListCondition = {
  /** Checks for equality with the object’s `actors` field. */
  actors?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fid` field. */
  fid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `NicerButSlowerFilmList` values. */
export type NicerButSlowerFilmListsConnection = {
  __typename?: 'NicerButSlowerFilmListsConnection';
  /** A list of edges which contains the `NicerButSlowerFilmList` and cursor to aid in pagination. */
  edges: Array<NicerButSlowerFilmListsEdge>;
  /** A list of `NicerButSlowerFilmList` objects. */
  nodes: Array<Maybe<NicerButSlowerFilmList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NicerButSlowerFilmList` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `NicerButSlowerFilmList` edge in the connection. */
export type NicerButSlowerFilmListsEdge = {
  __typename?: 'NicerButSlowerFilmListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `NicerButSlowerFilmList` at the end of the edge. */
  node?: Maybe<NicerButSlowerFilmList>;
};

/** Methods to use when ordering `NicerButSlowerFilmList`. */
export enum NicerButSlowerFilmListsOrderBy {
  ActorsAsc = 'ACTORS_ASC',
  ActorsDesc = 'ACTORS_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FidAsc = 'FID_ASC',
  FidDesc = 'FID_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['BigFloat'];
  /** Reads a single `Customer` that is related to this `Payment`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  paymentDate: Scalars['Datetime'];
  paymentId: Scalars['Int'];
  /** Reads a single `Rental` that is related to this `Payment`. */
  rentalByRentalId?: Maybe<Rental>;
  rentalId: Scalars['Int'];
  /** Reads a single `Staff` that is related to this `Payment`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int'];
};

/** A condition to be used against `Payment` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PaymentCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

export type PaymentP200701 = {
  __typename?: 'PaymentP200701';
  amount: Scalars['BigFloat'];
  /** Reads a single `Customer` that is related to this `PaymentP200701`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int'];
  paymentDate: Scalars['Datetime'];
  paymentId: Scalars['Int'];
  /** Reads a single `Rental` that is related to this `PaymentP200701`. */
  rentalByRentalId?: Maybe<Rental>;
  rentalId: Scalars['Int'];
  /** Reads a single `Staff` that is related to this `PaymentP200701`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int'];
};

/**
 * A condition to be used against `PaymentP200701` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PaymentP200701Condition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `PaymentP200701` values. */
export type PaymentP200701SConnection = {
  __typename?: 'PaymentP200701SConnection';
  /** A list of edges which contains the `PaymentP200701` and cursor to aid in pagination. */
  edges: Array<PaymentP200701SEdge>;
  /** A list of `PaymentP200701` objects. */
  nodes: Array<Maybe<PaymentP200701>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PaymentP200701` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PaymentP200701` edge in the connection. */
export type PaymentP200701SEdge = {
  __typename?: 'PaymentP200701SEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PaymentP200701` at the end of the edge. */
  node?: Maybe<PaymentP200701>;
};

/** Methods to use when ordering `PaymentP200701`. */
export enum PaymentP200701SOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  Natural = 'NATURAL',
  PaymentDateAsc = 'PAYMENT_DATE_ASC',
  PaymentDateDesc = 'PAYMENT_DATE_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

export type PaymentP200702 = {
  __typename?: 'PaymentP200702';
  amount: Scalars['BigFloat'];
  /** Reads a single `Customer` that is related to this `PaymentP200702`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int'];
  paymentDate: Scalars['Datetime'];
  paymentId: Scalars['Int'];
  /** Reads a single `Rental` that is related to this `PaymentP200702`. */
  rentalByRentalId?: Maybe<Rental>;
  rentalId: Scalars['Int'];
  /** Reads a single `Staff` that is related to this `PaymentP200702`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int'];
};

/**
 * A condition to be used against `PaymentP200702` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PaymentP200702Condition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `PaymentP200702` values. */
export type PaymentP200702SConnection = {
  __typename?: 'PaymentP200702SConnection';
  /** A list of edges which contains the `PaymentP200702` and cursor to aid in pagination. */
  edges: Array<PaymentP200702SEdge>;
  /** A list of `PaymentP200702` objects. */
  nodes: Array<Maybe<PaymentP200702>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PaymentP200702` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PaymentP200702` edge in the connection. */
export type PaymentP200702SEdge = {
  __typename?: 'PaymentP200702SEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PaymentP200702` at the end of the edge. */
  node?: Maybe<PaymentP200702>;
};

/** Methods to use when ordering `PaymentP200702`. */
export enum PaymentP200702SOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  Natural = 'NATURAL',
  PaymentDateAsc = 'PAYMENT_DATE_ASC',
  PaymentDateDesc = 'PAYMENT_DATE_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

export type PaymentP200703 = {
  __typename?: 'PaymentP200703';
  amount: Scalars['BigFloat'];
  /** Reads a single `Customer` that is related to this `PaymentP200703`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int'];
  paymentDate: Scalars['Datetime'];
  paymentId: Scalars['Int'];
  /** Reads a single `Rental` that is related to this `PaymentP200703`. */
  rentalByRentalId?: Maybe<Rental>;
  rentalId: Scalars['Int'];
  /** Reads a single `Staff` that is related to this `PaymentP200703`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int'];
};

/**
 * A condition to be used against `PaymentP200703` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PaymentP200703Condition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `PaymentP200703` values. */
export type PaymentP200703SConnection = {
  __typename?: 'PaymentP200703SConnection';
  /** A list of edges which contains the `PaymentP200703` and cursor to aid in pagination. */
  edges: Array<PaymentP200703SEdge>;
  /** A list of `PaymentP200703` objects. */
  nodes: Array<Maybe<PaymentP200703>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PaymentP200703` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PaymentP200703` edge in the connection. */
export type PaymentP200703SEdge = {
  __typename?: 'PaymentP200703SEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PaymentP200703` at the end of the edge. */
  node?: Maybe<PaymentP200703>;
};

/** Methods to use when ordering `PaymentP200703`. */
export enum PaymentP200703SOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  Natural = 'NATURAL',
  PaymentDateAsc = 'PAYMENT_DATE_ASC',
  PaymentDateDesc = 'PAYMENT_DATE_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

export type PaymentP200704 = {
  __typename?: 'PaymentP200704';
  amount: Scalars['BigFloat'];
  /** Reads a single `Customer` that is related to this `PaymentP200704`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int'];
  paymentDate: Scalars['Datetime'];
  paymentId: Scalars['Int'];
  /** Reads a single `Rental` that is related to this `PaymentP200704`. */
  rentalByRentalId?: Maybe<Rental>;
  rentalId: Scalars['Int'];
  /** Reads a single `Staff` that is related to this `PaymentP200704`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int'];
};

/**
 * A condition to be used against `PaymentP200704` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PaymentP200704Condition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `PaymentP200704` values. */
export type PaymentP200704SConnection = {
  __typename?: 'PaymentP200704SConnection';
  /** A list of edges which contains the `PaymentP200704` and cursor to aid in pagination. */
  edges: Array<PaymentP200704SEdge>;
  /** A list of `PaymentP200704` objects. */
  nodes: Array<Maybe<PaymentP200704>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PaymentP200704` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PaymentP200704` edge in the connection. */
export type PaymentP200704SEdge = {
  __typename?: 'PaymentP200704SEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PaymentP200704` at the end of the edge. */
  node?: Maybe<PaymentP200704>;
};

/** Methods to use when ordering `PaymentP200704`. */
export enum PaymentP200704SOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  Natural = 'NATURAL',
  PaymentDateAsc = 'PAYMENT_DATE_ASC',
  PaymentDateDesc = 'PAYMENT_DATE_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

export type PaymentP200705 = {
  __typename?: 'PaymentP200705';
  amount: Scalars['BigFloat'];
  /** Reads a single `Customer` that is related to this `PaymentP200705`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int'];
  paymentDate: Scalars['Datetime'];
  paymentId: Scalars['Int'];
  /** Reads a single `Rental` that is related to this `PaymentP200705`. */
  rentalByRentalId?: Maybe<Rental>;
  rentalId: Scalars['Int'];
  /** Reads a single `Staff` that is related to this `PaymentP200705`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int'];
};

/**
 * A condition to be used against `PaymentP200705` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PaymentP200705Condition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `PaymentP200705` values. */
export type PaymentP200705SConnection = {
  __typename?: 'PaymentP200705SConnection';
  /** A list of edges which contains the `PaymentP200705` and cursor to aid in pagination. */
  edges: Array<PaymentP200705SEdge>;
  /** A list of `PaymentP200705` objects. */
  nodes: Array<Maybe<PaymentP200705>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PaymentP200705` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PaymentP200705` edge in the connection. */
export type PaymentP200705SEdge = {
  __typename?: 'PaymentP200705SEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PaymentP200705` at the end of the edge. */
  node?: Maybe<PaymentP200705>;
};

/** Methods to use when ordering `PaymentP200705`. */
export enum PaymentP200705SOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  Natural = 'NATURAL',
  PaymentDateAsc = 'PAYMENT_DATE_ASC',
  PaymentDateDesc = 'PAYMENT_DATE_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

export type PaymentP200706 = {
  __typename?: 'PaymentP200706';
  amount: Scalars['BigFloat'];
  /** Reads a single `Customer` that is related to this `PaymentP200706`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int'];
  paymentDate: Scalars['Datetime'];
  paymentId: Scalars['Int'];
  /** Reads a single `Rental` that is related to this `PaymentP200706`. */
  rentalByRentalId?: Maybe<Rental>;
  rentalId: Scalars['Int'];
  /** Reads a single `Staff` that is related to this `PaymentP200706`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int'];
};

/**
 * A condition to be used against `PaymentP200706` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PaymentP200706Condition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `PaymentP200706` values. */
export type PaymentP200706SConnection = {
  __typename?: 'PaymentP200706SConnection';
  /** A list of edges which contains the `PaymentP200706` and cursor to aid in pagination. */
  edges: Array<PaymentP200706SEdge>;
  /** A list of `PaymentP200706` objects. */
  nodes: Array<Maybe<PaymentP200706>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PaymentP200706` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PaymentP200706` edge in the connection. */
export type PaymentP200706SEdge = {
  __typename?: 'PaymentP200706SEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PaymentP200706` at the end of the edge. */
  node?: Maybe<PaymentP200706>;
};

/** Methods to use when ordering `PaymentP200706`. */
export enum PaymentP200706SOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  Natural = 'NATURAL',
  PaymentDateAsc = 'PAYMENT_DATE_ASC',
  PaymentDateDesc = 'PAYMENT_DATE_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

/** A connection to a list of `Payment` values. */
export type PaymentsConnection = {
  __typename?: 'PaymentsConnection';
  /** A list of edges which contains the `Payment` and cursor to aid in pagination. */
  edges: Array<PaymentsEdge>;
  /** A list of `Payment` objects. */
  nodes: Array<Maybe<Payment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Payment` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Payment` edge in the connection. */
export type PaymentsEdge = {
  __typename?: 'PaymentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Payment` at the end of the edge. */
  node?: Maybe<Payment>;
};

/** Methods to use when ordering `Payment`. */
export enum PaymentsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  Natural = 'NATURAL',
  PaymentDateAsc = 'PAYMENT_DATE_ASC',
  PaymentDateDesc = 'PAYMENT_DATE_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  _groupConcat?: Maybe<Scalars['String']>;
  /** Reads a single `Actor` using its globally unique `ID`. */
  actor?: Maybe<Actor>;
  actorByActorId?: Maybe<Actor>;
  add?: Maybe<AddResponse>;
  /** Reads a single `Address` using its globally unique `ID`. */
  address?: Maybe<Address>;
  addressByAddressId?: Maybe<Address>;
  /** Reads and enables pagination through a set of `ActorInfo`. */
  allActorInfos?: Maybe<ActorInfosConnection>;
  /** Reads and enables pagination through a set of `Actor`. */
  allActors?: Maybe<ActorsConnection>;
  /** Reads and enables pagination through a set of `Address`. */
  allAddresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `Category`. */
  allCategories?: Maybe<CategoriesConnection>;
  /** Reads and enables pagination through a set of `City`. */
  allCities?: Maybe<CitiesConnection>;
  /** Reads and enables pagination through a set of `Country`. */
  allCountries?: Maybe<CountriesConnection>;
  /** Reads and enables pagination through a set of `CustomerList`. */
  allCustomerLists?: Maybe<CustomerListsConnection>;
  /** Reads and enables pagination through a set of `Customer`. */
  allCustomers?: Maybe<CustomersConnection>;
  /** Reads and enables pagination through a set of `FilmActor`. */
  allFilmActors?: Maybe<FilmActorsConnection>;
  /** Reads and enables pagination through a set of `FilmCategory`. */
  allFilmCategories?: Maybe<FilmCategoriesConnection>;
  /** Reads and enables pagination through a set of `FilmList`. */
  allFilmLists?: Maybe<FilmListsConnection>;
  /** Reads and enables pagination through a set of `Film`. */
  allFilms?: Maybe<FilmsConnection>;
  /** Reads and enables pagination through a set of `Inventory`. */
  allInventories?: Maybe<InventoriesConnection>;
  /** Reads and enables pagination through a set of `Language`. */
  allLanguages?: Maybe<LanguagesConnection>;
  /** Reads and enables pagination through a set of `NicerButSlowerFilmList`. */
  allNicerButSlowerFilmLists?: Maybe<NicerButSlowerFilmListsConnection>;
  /** Reads and enables pagination through a set of `PaymentP200701`. */
  allPaymentP200701S?: Maybe<PaymentP200701SConnection>;
  /** Reads and enables pagination through a set of `PaymentP200702`. */
  allPaymentP200702S?: Maybe<PaymentP200702SConnection>;
  /** Reads and enables pagination through a set of `PaymentP200703`. */
  allPaymentP200703S?: Maybe<PaymentP200703SConnection>;
  /** Reads and enables pagination through a set of `PaymentP200704`. */
  allPaymentP200704S?: Maybe<PaymentP200704SConnection>;
  /** Reads and enables pagination through a set of `PaymentP200705`. */
  allPaymentP200705S?: Maybe<PaymentP200705SConnection>;
  /** Reads and enables pagination through a set of `PaymentP200706`. */
  allPaymentP200706S?: Maybe<PaymentP200706SConnection>;
  /** Reads and enables pagination through a set of `Payment`. */
  allPayments?: Maybe<PaymentsConnection>;
  /** Reads and enables pagination through a set of `Rental`. */
  allRentals?: Maybe<RentalsConnection>;
  /** Reads and enables pagination through a set of `SalesByFilmCategory`. */
  allSalesByFilmCategories?: Maybe<SalesByFilmCategoriesConnection>;
  /** Reads and enables pagination through a set of `SalesByStore`. */
  allSalesByStores?: Maybe<SalesByStoresConnection>;
  /** Reads and enables pagination through a set of `Staff`. */
  allStaff?: Maybe<StaffConnection>;
  /** Reads and enables pagination through a set of `StaffList`. */
  allStaffLists?: Maybe<StaffListsConnection>;
  /** Reads and enables pagination through a set of `Store`. */
  allStores?: Maybe<StoresConnection>;
  /** Reads a single `Category` using its globally unique `ID`. */
  category?: Maybe<Category>;
  categoryByCategoryId?: Maybe<Category>;
  /** Reads a single `City` using its globally unique `ID`. */
  city?: Maybe<City>;
  cityByCityId?: Maybe<City>;
  /** Reads a single `Country` using its globally unique `ID`. */
  country?: Maybe<Country>;
  countryByCountryId?: Maybe<Country>;
  /** Reads a single `Customer` using its globally unique `ID`. */
  customer?: Maybe<Customer>;
  customerByCustomerId?: Maybe<Customer>;
  /** Reads a single `Film` using its globally unique `ID`. */
  film?: Maybe<Film>;
  /** Reads a single `FilmActor` using its globally unique `ID`. */
  filmActor?: Maybe<FilmActor>;
  filmActorByActorIdAndFilmId?: Maybe<FilmActor>;
  filmByFilmId?: Maybe<Film>;
  /** Reads a single `FilmCategory` using its globally unique `ID`. */
  filmCategory?: Maybe<FilmCategory>;
  filmCategoryByFilmIdAndCategoryId?: Maybe<FilmCategory>;
  /** Reads a single `Inventory` using its globally unique `ID`. */
  inventory?: Maybe<Inventory>;
  inventoryByInventoryId?: Maybe<Inventory>;
  /** Reads a single `Language` using its globally unique `ID`. */
  language?: Maybe<Language>;
  languageByLanguageId?: Maybe<Language>;
  lastDay?: Maybe<Scalars['Date']>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Reads a single `Payment` using its globally unique `ID`. */
  payment?: Maybe<Payment>;
  paymentByPaymentId?: Maybe<Payment>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Rental` using its globally unique `ID`. */
  rental?: Maybe<Rental>;
  rentalByRentalId?: Maybe<Rental>;
  /** Reads a single `Staff` using its globally unique `ID`. */
  staff?: Maybe<Staff>;
  staffByStaffId?: Maybe<Staff>;
  /** Reads a single `Store` using its globally unique `ID`. */
  store?: Maybe<Store>;
  storeByStoreId?: Maybe<Store>;
};


/** The root query type which gives access points into the data universe. */
export type Query_GroupConcatArgs = {
  arg0?: InputMaybe<Scalars['String']>;
  arg1?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryActorArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryActorByActorIdArgs = {
  actorId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddArgs = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressByAddressIdArgs = {
  addressId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllActorInfosArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ActorInfoCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ActorInfosOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllActorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ActorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ActorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CityCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CountryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCustomerListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CustomerListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CustomerListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCustomersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CustomerCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmActorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInventoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InventoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLanguagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LanguageCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNicerButSlowerFilmListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<NicerButSlowerFilmListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NicerButSlowerFilmListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPaymentP200701SArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200701Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200701SOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPaymentP200702SArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200702Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200702SOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPaymentP200703SArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200703Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200703SOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPaymentP200704SArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200704Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200704SOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPaymentP200705SArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200705Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200705SOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPaymentP200706SArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200706Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200706SOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPaymentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRentalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSalesByFilmCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SalesByFilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SalesByFilmCategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSalesByStoresArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SalesByStoreCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SalesByStoresOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStaffArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StaffCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStaffListsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StaffListCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStoresArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StoreCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByCategoryIdArgs = {
  categoryId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCityArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCityByCityIdArgs = {
  cityId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryByCountryIdArgs = {
  countryId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerByCustomerIdArgs = {
  customerId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmActorArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmActorByActorIdAndFilmIdArgs = {
  actorId: Scalars['Int'];
  filmId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmByFilmIdArgs = {
  filmId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoryArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoryByFilmIdAndCategoryIdArgs = {
  categoryId: Scalars['Int'];
  filmId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoryArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoryByInventoryIdArgs = {
  inventoryId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageByLanguageIdArgs = {
  languageId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLastDayArgs = {
  arg0: Scalars['Datetime'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPaymentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPaymentByPaymentIdArgs = {
  paymentId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRentalArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRentalByRentalIdArgs = {
  rentalId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStaffArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStaffByStaffIdArgs = {
  staffId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStoreArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStoreByStoreIdArgs = {
  storeId: Scalars['Int'];
};

export type Rental = Node & {
  __typename?: 'Rental';
  /** Reads a single `Customer` that is related to this `Rental`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int'];
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventoryByInventoryId?: Maybe<Inventory>;
  inventoryId: Scalars['Int'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `PaymentP200701`. */
  paymentP200701SByRentalId: PaymentP200701SConnection;
  /** Reads and enables pagination through a set of `PaymentP200702`. */
  paymentP200702SByRentalId: PaymentP200702SConnection;
  /** Reads and enables pagination through a set of `PaymentP200703`. */
  paymentP200703SByRentalId: PaymentP200703SConnection;
  /** Reads and enables pagination through a set of `PaymentP200704`. */
  paymentP200704SByRentalId: PaymentP200704SConnection;
  /** Reads and enables pagination through a set of `PaymentP200705`. */
  paymentP200705SByRentalId: PaymentP200705SConnection;
  /** Reads and enables pagination through a set of `PaymentP200706`. */
  paymentP200706SByRentalId: PaymentP200706SConnection;
  /** Reads and enables pagination through a set of `Payment`. */
  paymentsByRentalId: PaymentsConnection;
  rentalDate: Scalars['Datetime'];
  rentalId: Scalars['Int'];
  returnDate?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int'];
};


export type RentalPaymentP200701SByRentalIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200701Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200701SOrderBy>>;
};


export type RentalPaymentP200702SByRentalIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200702Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200702SOrderBy>>;
};


export type RentalPaymentP200703SByRentalIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200703Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200703SOrderBy>>;
};


export type RentalPaymentP200704SByRentalIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200704Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200704SOrderBy>>;
};


export type RentalPaymentP200705SByRentalIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200705Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200705SOrderBy>>;
};


export type RentalPaymentP200706SByRentalIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200706Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200706SOrderBy>>;
};


export type RentalPaymentsByRentalIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};

/** A condition to be used against `Rental` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RentalCondition = {
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `inventoryId` field. */
  inventoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `rentalDate` field. */
  rentalDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `returnDate` field. */
  returnDate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Rental` values. */
export type RentalsConnection = {
  __typename?: 'RentalsConnection';
  /** A list of edges which contains the `Rental` and cursor to aid in pagination. */
  edges: Array<RentalsEdge>;
  /** A list of `Rental` objects. */
  nodes: Array<Maybe<Rental>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Rental` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Rental` edge in the connection. */
export type RentalsEdge = {
  __typename?: 'RentalsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Rental` at the end of the edge. */
  node?: Maybe<Rental>;
};

/** Methods to use when ordering `Rental`. */
export enum RentalsOrderBy {
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  InventoryIdAsc = 'INVENTORY_ID_ASC',
  InventoryIdDesc = 'INVENTORY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RentalDateAsc = 'RENTAL_DATE_ASC',
  RentalDateDesc = 'RENTAL_DATE_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  ReturnDateAsc = 'RETURN_DATE_ASC',
  ReturnDateDesc = 'RETURN_DATE_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

/** A connection to a list of `SalesByFilmCategory` values. */
export type SalesByFilmCategoriesConnection = {
  __typename?: 'SalesByFilmCategoriesConnection';
  /** A list of edges which contains the `SalesByFilmCategory` and cursor to aid in pagination. */
  edges: Array<SalesByFilmCategoriesEdge>;
  /** A list of `SalesByFilmCategory` objects. */
  nodes: Array<Maybe<SalesByFilmCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SalesByFilmCategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SalesByFilmCategory` edge in the connection. */
export type SalesByFilmCategoriesEdge = {
  __typename?: 'SalesByFilmCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SalesByFilmCategory` at the end of the edge. */
  node?: Maybe<SalesByFilmCategory>;
};

/** Methods to use when ordering `SalesByFilmCategory`. */
export enum SalesByFilmCategoriesOrderBy {
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  Natural = 'NATURAL',
  TotalSalesAsc = 'TOTAL_SALES_ASC',
  TotalSalesDesc = 'TOTAL_SALES_DESC'
}

export type SalesByFilmCategory = {
  __typename?: 'SalesByFilmCategory';
  category?: Maybe<Scalars['String']>;
  totalSales?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `SalesByFilmCategory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type SalesByFilmCategoryCondition = {
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `totalSales` field. */
  totalSales?: InputMaybe<Scalars['BigFloat']>;
};

export type SalesByStore = {
  __typename?: 'SalesByStore';
  manager?: Maybe<Scalars['String']>;
  store?: Maybe<Scalars['String']>;
  totalSales?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `SalesByStore` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SalesByStoreCondition = {
  /** Checks for equality with the object’s `manager` field. */
  manager?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `store` field. */
  store?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `totalSales` field. */
  totalSales?: InputMaybe<Scalars['BigFloat']>;
};

/** A connection to a list of `SalesByStore` values. */
export type SalesByStoresConnection = {
  __typename?: 'SalesByStoresConnection';
  /** A list of edges which contains the `SalesByStore` and cursor to aid in pagination. */
  edges: Array<SalesByStoresEdge>;
  /** A list of `SalesByStore` objects. */
  nodes: Array<Maybe<SalesByStore>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SalesByStore` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SalesByStore` edge in the connection. */
export type SalesByStoresEdge = {
  __typename?: 'SalesByStoresEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SalesByStore` at the end of the edge. */
  node?: Maybe<SalesByStore>;
};

/** Methods to use when ordering `SalesByStore`. */
export enum SalesByStoresOrderBy {
  ManagerAsc = 'MANAGER_ASC',
  ManagerDesc = 'MANAGER_DESC',
  Natural = 'NATURAL',
  StoreAsc = 'STORE_ASC',
  StoreDesc = 'STORE_DESC',
  TotalSalesAsc = 'TOTAL_SALES_ASC',
  TotalSalesDesc = 'TOTAL_SALES_DESC'
}

export type Staff = Node & {
  __typename?: 'Staff';
  active: Scalars['Boolean'];
  /** Reads a single `Address` that is related to this `Staff`. */
  addressByAddressId?: Maybe<Address>;
  addressId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  lastUpdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `PaymentP200701`. */
  paymentP200701SByStaffId: PaymentP200701SConnection;
  /** Reads and enables pagination through a set of `PaymentP200702`. */
  paymentP200702SByStaffId: PaymentP200702SConnection;
  /** Reads and enables pagination through a set of `PaymentP200703`. */
  paymentP200703SByStaffId: PaymentP200703SConnection;
  /** Reads and enables pagination through a set of `PaymentP200704`. */
  paymentP200704SByStaffId: PaymentP200704SConnection;
  /** Reads and enables pagination through a set of `PaymentP200705`. */
  paymentP200705SByStaffId: PaymentP200705SConnection;
  /** Reads and enables pagination through a set of `PaymentP200706`. */
  paymentP200706SByStaffId: PaymentP200706SConnection;
  /** Reads and enables pagination through a set of `Payment`. */
  paymentsByStaffId: PaymentsConnection;
  picture?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Rental`. */
  rentalsByStaffId: RentalsConnection;
  staffId: Scalars['Int'];
  /** Reads a single `Store` that is related to this `Staff`. */
  storeByStoreId?: Maybe<Store>;
  storeId: Scalars['Int'];
  /** Reads and enables pagination through a set of `Store`. */
  storesByManagerStaffId: StoresConnection;
  username: Scalars['String'];
};


export type StaffPaymentP200701SByStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200701Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200701SOrderBy>>;
};


export type StaffPaymentP200702SByStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200702Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200702SOrderBy>>;
};


export type StaffPaymentP200703SByStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200703Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200703SOrderBy>>;
};


export type StaffPaymentP200704SByStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200704Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200704SOrderBy>>;
};


export type StaffPaymentP200705SByStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200705Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200705SOrderBy>>;
};


export type StaffPaymentP200706SByStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentP200706Condition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentP200706SOrderBy>>;
};


export type StaffPaymentsByStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PaymentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


export type StaffRentalsByStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};


export type StaffStoresByManagerStaffIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StoreCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

/** A condition to be used against `Staff` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StaffCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `picture` field. */
  picture?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Staff` values. */
export type StaffConnection = {
  __typename?: 'StaffConnection';
  /** A list of edges which contains the `Staff` and cursor to aid in pagination. */
  edges: Array<StaffEdge>;
  /** A list of `Staff` objects. */
  nodes: Array<Maybe<Staff>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Staff` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Staff` edge in the connection. */
export type StaffEdge = {
  __typename?: 'StaffEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Staff` at the end of the edge. */
  node?: Maybe<Staff>;
};

export type StaffList = {
  __typename?: 'StaffList';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  sid?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `StaffList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type StaffListCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `sid` field. */
  sid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `zipCode` field. */
  zipCode?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `StaffList` values. */
export type StaffListsConnection = {
  __typename?: 'StaffListsConnection';
  /** A list of edges which contains the `StaffList` and cursor to aid in pagination. */
  edges: Array<StaffListsEdge>;
  /** A list of `StaffList` objects. */
  nodes: Array<Maybe<StaffList>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `StaffList` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `StaffList` edge in the connection. */
export type StaffListsEdge = {
  __typename?: 'StaffListsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `StaffList` at the end of the edge. */
  node?: Maybe<StaffList>;
};

/** Methods to use when ordering `StaffList`. */
export enum StaffListsOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SidAsc = 'SID_ASC',
  SidDesc = 'SID_DESC',
  ZipCodeAsc = 'ZIP_CODE_ASC',
  ZipCodeDesc = 'ZIP_CODE_DESC'
}

/** Methods to use when ordering `Staff`. */
export enum StaffOrderBy {
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PictureAsc = 'PICTURE_ASC',
  PictureDesc = 'PICTURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

export type Store = Node & {
  __typename?: 'Store';
  /** Reads a single `Address` that is related to this `Store`. */
  addressByAddressId?: Maybe<Address>;
  addressId: Scalars['Int'];
  /** Reads and enables pagination through a set of `Customer`. */
  customersByStoreId: CustomersConnection;
  /** Reads and enables pagination through a set of `Inventory`. */
  inventoriesByStoreId: InventoriesConnection;
  lastUpdate: Scalars['Datetime'];
  managerStaffId: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Staff` that is related to this `Store`. */
  staffByManagerStaffId?: Maybe<Staff>;
  /** Reads and enables pagination through a set of `Staff`. */
  staffByStoreId: StaffConnection;
  storeId: Scalars['Int'];
};


export type StoreCustomersByStoreIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CustomerCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


export type StoreInventoriesByStoreIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InventoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};


export type StoreStaffByStoreIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<StaffCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};

/** A condition to be used against `Store` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StoreCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `managerStaffId` field. */
  managerStaffId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Store` values. */
export type StoresConnection = {
  __typename?: 'StoresConnection';
  /** A list of edges which contains the `Store` and cursor to aid in pagination. */
  edges: Array<StoresEdge>;
  /** A list of `Store` objects. */
  nodes: Array<Maybe<Store>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Store` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Store` edge in the connection. */
export type StoresEdge = {
  __typename?: 'StoresEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Store` at the end of the edge. */
  node?: Maybe<Store>;
};

/** Methods to use when ordering `Store`. */
export enum StoresOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  ManagerStaffIdAsc = 'MANAGER_STAFF_ID_ASC',
  ManagerStaffIdDesc = 'MANAGER_STAFF_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

export type AllActorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActorsQuery = { __typename?: 'Query', allActors?: { __typename?: 'ActorsConnection', nodes: Array<{ __typename?: 'Actor', firstName: string, lastName: string } | null> } | null };
