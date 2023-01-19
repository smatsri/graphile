/**
 * @typedef {Object} Actor
 * @property {number} actorId
 * @property {FilmActorsConnection} filmActorsByActorId - Reads and enables pagination through a set of `FilmActor`.
 * @property {string} firstName
 * @property {string} lastName
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 */

/**
 * A condition to be used against `Actor` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} ActorCondition
 * @property {number} [actorId] - Checks for equality with the object’s `actorId` field.
 * @property {string} [firstName] - Checks for equality with the object’s `firstName` field.
 * @property {string} [lastName] - Checks for equality with the object’s `lastName` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 */

/**
 * @typedef {Object} ActorInfo
 * @property {number} [actorId]
 * @property {string} [filmInfo]
 * @property {string} [firstName]
 * @property {string} [lastName]
 */

/**
 * A condition to be used against `ActorInfo` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 * @typedef {Object} ActorInfoCondition
 * @property {number} [actorId] - Checks for equality with the object’s `actorId` field.
 * @property {string} [filmInfo] - Checks for equality with the object’s `filmInfo` field.
 * @property {string} [firstName] - Checks for equality with the object’s `firstName` field.
 * @property {string} [lastName] - Checks for equality with the object’s `lastName` field.
 */

/**
 * A connection to a list of `ActorInfo` values.
 * @typedef {Object} ActorInfosConnection
 * @property {Array<ActorInfosEdge>} edges - A list of edges which contains the `ActorInfo` and cursor to aid in pagination.
 * @property {Array<(ActorInfo|null|undefined)>} nodes - A list of `ActorInfo` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `ActorInfo` you could get from the connection.
 */

/**
 * A `ActorInfo` edge in the connection.
 * @typedef {Object} ActorInfosEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {ActorInfo} [node] - The `ActorInfo` at the end of the edge.
 */

/**
 * Methods to use when ordering `ActorInfo`.
 * @typedef {("ACTOR_ID_ASC"|"ACTOR_ID_DESC"|"FILM_INFO_ASC"|"FILM_INFO_DESC"|"FIRST_NAME_ASC"|"FIRST_NAME_DESC"|"LAST_NAME_ASC"|"LAST_NAME_DESC"|"NATURAL")} ActorInfosOrderBy
 */

/**
 * A connection to a list of `Actor` values.
 * @typedef {Object} ActorsConnection
 * @property {Array<ActorsEdge>} edges - A list of edges which contains the `Actor` and cursor to aid in pagination.
 * @property {Array<(Actor|null|undefined)>} nodes - A list of `Actor` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Actor` you could get from the connection.
 */

/**
 * A `Actor` edge in the connection.
 * @typedef {Object} ActorsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Actor} [node] - The `Actor` at the end of the edge.
 */

/**
 * Methods to use when ordering `Actor`.
 * @typedef {("ACTOR_ID_ASC"|"ACTOR_ID_DESC"|"FIRST_NAME_ASC"|"FIRST_NAME_DESC"|"LAST_NAME_ASC"|"LAST_NAME_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC")} ActorsOrderBy
 */

/**
 * @typedef {Object} AddResponse
 * @property {number} [res]
 */

/**
 * @typedef {Object} Address
 * @property {string} address
 * @property {string} [address2]
 * @property {number} addressId
 * @property {City} [cityByCityId] - Reads a single `City` that is related to this `Address`.
 * @property {number} cityId
 * @property {CustomersConnection} customersByAddressId - Reads and enables pagination through a set of `Customer`.
 * @property {string} district
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 * @property {string} phone
 * @property {string} [postalCode]
 * @property {StaffConnection} staffByAddressId - Reads and enables pagination through a set of `Staff`.
 * @property {StoresConnection} storesByAddressId - Reads and enables pagination through a set of `Store`.
 */

/**
 * A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} AddressCondition
 * @property {string} [address] - Checks for equality with the object’s `address` field.
 * @property {string} [address2] - Checks for equality with the object’s `address2` field.
 * @property {number} [addressId] - Checks for equality with the object’s `addressId` field.
 * @property {number} [cityId] - Checks for equality with the object’s `cityId` field.
 * @property {string} [district] - Checks for equality with the object’s `district` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {string} [phone] - Checks for equality with the object’s `phone` field.
 * @property {string} [postalCode] - Checks for equality with the object’s `postalCode` field.
 */

/**
 * A connection to a list of `Address` values.
 * @typedef {Object} AddressesConnection
 * @property {Array<AddressesEdge>} edges - A list of edges which contains the `Address` and cursor to aid in pagination.
 * @property {Array<(Address|null|undefined)>} nodes - A list of `Address` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Address` you could get from the connection.
 */

/**
 * A `Address` edge in the connection.
 * @typedef {Object} AddressesEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Address} [node] - The `Address` at the end of the edge.
 */

/**
 * Methods to use when ordering `Address`.
 * @typedef {("ADDRESS2_ASC"|"ADDRESS2_DESC"|"ADDRESS_ASC"|"ADDRESS_DESC"|"ADDRESS_ID_ASC"|"ADDRESS_ID_DESC"|"CITY_ID_ASC"|"CITY_ID_DESC"|"DISTRICT_ASC"|"DISTRICT_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PHONE_ASC"|"PHONE_DESC"|"POSTAL_CODE_ASC"|"POSTAL_CODE_DESC"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC")} AddressesOrderBy
 */

/**
 * A floating point number that requires more precision than IEEE 754 binary 64
 * @typedef {*} BigFloat
 */

/**
 * A connection to a list of `Category` values.
 * @typedef {Object} CategoriesConnection
 * @property {Array<CategoriesEdge>} edges - A list of edges which contains the `Category` and cursor to aid in pagination.
 * @property {Array<(Category|null|undefined)>} nodes - A list of `Category` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Category` you could get from the connection.
 */

/**
 * A `Category` edge in the connection.
 * @typedef {Object} CategoriesEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Category} [node] - The `Category` at the end of the edge.
 */

/**
 * Methods to use when ordering `Category`.
 * @typedef {("CATEGORY_ID_ASC"|"CATEGORY_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NAME_ASC"|"NAME_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC")} CategoriesOrderBy
 */

/**
 * @typedef {Object} Category
 * @property {number} categoryId
 * @property {FilmCategoriesConnection} filmCategoriesByCategoryId - Reads and enables pagination through a set of `FilmCategory`.
 * @property {Datetime} lastUpdate
 * @property {string} name
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 */

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 * @typedef {Object} CategoryCondition
 * @property {number} [categoryId] - Checks for equality with the object’s `categoryId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {string} [name] - Checks for equality with the object’s `name` field.
 */

/**
 * A connection to a list of `City` values.
 * @typedef {Object} CitiesConnection
 * @property {Array<CitiesEdge>} edges - A list of edges which contains the `City` and cursor to aid in pagination.
 * @property {Array<(City|null|undefined)>} nodes - A list of `City` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `City` you could get from the connection.
 */

/**
 * A `City` edge in the connection.
 * @typedef {Object} CitiesEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {City} [node] - The `City` at the end of the edge.
 */

/**
 * Methods to use when ordering `City`.
 * @typedef {("CITY_ASC"|"CITY_DESC"|"CITY_ID_ASC"|"CITY_ID_DESC"|"COUNTRY_ID_ASC"|"COUNTRY_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC")} CitiesOrderBy
 */

/**
 * @typedef {Object} City
 * @property {AddressesConnection} addressesByCityId - Reads and enables pagination through a set of `Address`.
 * @property {string} city
 * @property {number} cityId
 * @property {Country} [countryByCountryId] - Reads a single `Country` that is related to this `City`.
 * @property {number} countryId
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 */

/**
 * A condition to be used against `City` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} CityCondition
 * @property {string} [city] - Checks for equality with the object’s `city` field.
 * @property {number} [cityId] - Checks for equality with the object’s `cityId` field.
 * @property {number} [countryId] - Checks for equality with the object’s `countryId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 */

/**
 * A connection to a list of `Country` values.
 * @typedef {Object} CountriesConnection
 * @property {Array<CountriesEdge>} edges - A list of edges which contains the `Country` and cursor to aid in pagination.
 * @property {Array<(Country|null|undefined)>} nodes - A list of `Country` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Country` you could get from the connection.
 */

/**
 * A `Country` edge in the connection.
 * @typedef {Object} CountriesEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Country} [node] - The `Country` at the end of the edge.
 */

/**
 * Methods to use when ordering `Country`.
 * @typedef {("COUNTRY_ASC"|"COUNTRY_DESC"|"COUNTRY_ID_ASC"|"COUNTRY_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC")} CountriesOrderBy
 */

/**
 * @typedef {Object} Country
 * @property {CitiesConnection} citiesByCountryId - Reads and enables pagination through a set of `City`.
 * @property {string} country
 * @property {number} countryId
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 */

/**
 * A condition to be used against `Country` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} CountryCondition
 * @property {string} [country] - Checks for equality with the object’s `country` field.
 * @property {number} [countryId] - Checks for equality with the object’s `countryId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 */

/**
 * A location in a connection that can be used for resuming pagination.
 * @typedef {*} Cursor
 */

/**
 * @typedef {Object} Customer
 * @property {number} [active]
 * @property {boolean} activebool
 * @property {Address} [addressByAddressId] - Reads a single `Address` that is related to this `Customer`.
 * @property {number} addressId
 * @property {Date} createDate
 * @property {number} customerId
 * @property {string} [email]
 * @property {string} firstName
 * @property {string} lastName
 * @property {Datetime} [lastUpdate]
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 * @property {PaymentP200701SConnection} paymentP200701SByCustomerId - Reads and enables pagination through a set of `PaymentP200701`.
 * @property {PaymentP200702SConnection} paymentP200702SByCustomerId - Reads and enables pagination through a set of `PaymentP200702`.
 * @property {PaymentP200703SConnection} paymentP200703SByCustomerId - Reads and enables pagination through a set of `PaymentP200703`.
 * @property {PaymentP200704SConnection} paymentP200704SByCustomerId - Reads and enables pagination through a set of `PaymentP200704`.
 * @property {PaymentP200705SConnection} paymentP200705SByCustomerId - Reads and enables pagination through a set of `PaymentP200705`.
 * @property {PaymentP200706SConnection} paymentP200706SByCustomerId - Reads and enables pagination through a set of `PaymentP200706`.
 * @property {PaymentsConnection} paymentsByCustomerId - Reads and enables pagination through a set of `Payment`.
 * @property {RentalsConnection} rentalsByCustomerId - Reads and enables pagination through a set of `Rental`.
 * @property {Store} [storeByStoreId] - Reads a single `Store` that is related to this `Customer`.
 * @property {number} storeId
 */

/**
 * A condition to be used against `Customer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 * @typedef {Object} CustomerCondition
 * @property {number} [active] - Checks for equality with the object’s `active` field.
 * @property {boolean} [activebool] - Checks for equality with the object’s `activebool` field.
 * @property {number} [addressId] - Checks for equality with the object’s `addressId` field.
 * @property {Date} [createDate] - Checks for equality with the object’s `createDate` field.
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {string} [email] - Checks for equality with the object’s `email` field.
 * @property {string} [firstName] - Checks for equality with the object’s `firstName` field.
 * @property {string} [lastName] - Checks for equality with the object’s `lastName` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {number} [storeId] - Checks for equality with the object’s `storeId` field.
 */

/**
 * @typedef {Object} CustomerList
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [notes]
 * @property {string} [phone]
 * @property {number} [sid]
 * @property {string} [zipCode]
 */

/**
 * A condition to be used against `CustomerList` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} CustomerListCondition
 * @property {string} [address] - Checks for equality with the object’s `address` field.
 * @property {string} [city] - Checks for equality with the object’s `city` field.
 * @property {string} [country] - Checks for equality with the object’s `country` field.
 * @property {number} [id] - Checks for equality with the object’s `id` field.
 * @property {string} [name] - Checks for equality with the object’s `name` field.
 * @property {string} [notes] - Checks for equality with the object’s `notes` field.
 * @property {string} [phone] - Checks for equality with the object’s `phone` field.
 * @property {number} [sid] - Checks for equality with the object’s `sid` field.
 * @property {string} [zipCode] - Checks for equality with the object’s `zipCode` field.
 */

/**
 * A connection to a list of `CustomerList` values.
 * @typedef {Object} CustomerListsConnection
 * @property {Array<CustomerListsEdge>} edges - A list of edges which contains the `CustomerList` and cursor to aid in pagination.
 * @property {Array<(CustomerList|null|undefined)>} nodes - A list of `CustomerList` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `CustomerList` you could get from the connection.
 */

/**
 * A `CustomerList` edge in the connection.
 * @typedef {Object} CustomerListsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {CustomerList} [node] - The `CustomerList` at the end of the edge.
 */

/**
 * Methods to use when ordering `CustomerList`.
 * @typedef {("ADDRESS_ASC"|"ADDRESS_DESC"|"CITY_ASC"|"CITY_DESC"|"COUNTRY_ASC"|"COUNTRY_DESC"|"ID_ASC"|"ID_DESC"|"NAME_ASC"|"NAME_DESC"|"NATURAL"|"NOTES_ASC"|"NOTES_DESC"|"PHONE_ASC"|"PHONE_DESC"|"SID_ASC"|"SID_DESC"|"ZIP_CODE_ASC"|"ZIP_CODE_DESC")} CustomerListsOrderBy
 */

/**
 * A connection to a list of `Customer` values.
 * @typedef {Object} CustomersConnection
 * @property {Array<CustomersEdge>} edges - A list of edges which contains the `Customer` and cursor to aid in pagination.
 * @property {Array<(Customer|null|undefined)>} nodes - A list of `Customer` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Customer` you could get from the connection.
 */

/**
 * A `Customer` edge in the connection.
 * @typedef {Object} CustomersEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Customer} [node] - The `Customer` at the end of the edge.
 */

/**
 * Methods to use when ordering `Customer`.
 * @typedef {("ACTIVEBOOL_ASC"|"ACTIVEBOOL_DESC"|"ACTIVE_ASC"|"ACTIVE_DESC"|"ADDRESS_ID_ASC"|"ADDRESS_ID_DESC"|"CREATE_DATE_ASC"|"CREATE_DATE_DESC"|"CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"EMAIL_ASC"|"EMAIL_DESC"|"FIRST_NAME_ASC"|"FIRST_NAME_DESC"|"LAST_NAME_ASC"|"LAST_NAME_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"STORE_ID_ASC"|"STORE_ID_DESC")} CustomersOrderBy
 */

/**
 * The day, does not include a time.
 * @typedef {*} Date
 */

/**
 * A point in time as described by the [ISO
 * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
 * @typedef {*} Datetime
 */

/**
 * @typedef {Object} Film
 * @property {string} [description]
 * @property {FilmActorsConnection} filmActorsByFilmId - Reads and enables pagination through a set of `FilmActor`.
 * @property {FilmCategoriesConnection} filmCategoriesByFilmId - Reads and enables pagination through a set of `FilmCategory`.
 * @property {number} filmId
 * @property {string} fulltext
 * @property {InventoriesConnection} inventoriesByFilmId - Reads and enables pagination through a set of `Inventory`.
 * @property {Language} [languageByLanguageId] - Reads a single `Language` that is related to this `Film`.
 * @property {Language} [languageByOriginalLanguageId] - Reads a single `Language` that is related to this `Film`.
 * @property {number} languageId
 * @property {Datetime} lastUpdate
 * @property {number} [length]
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 * @property {number} [originalLanguageId]
 * @property {MpaaRating} [rating]
 * @property {Year} [releaseYear]
 * @property {number} rentalDuration
 * @property {BigFloat} rentalRate
 * @property {BigFloat} replacementCost
 * @property {Array<(string|null|undefined)>} [specialFeatures]
 * @property {string} title
 */

/**
 * @typedef {Object} FilmActor
 * @property {Actor} [actorByActorId] - Reads a single `Actor` that is related to this `FilmActor`.
 * @property {number} actorId
 * @property {Film} [filmByFilmId] - Reads a single `Film` that is related to this `FilmActor`.
 * @property {number} filmId
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 */

/**
 * A condition to be used against `FilmActor` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 * @typedef {Object} FilmActorCondition
 * @property {number} [actorId] - Checks for equality with the object’s `actorId` field.
 * @property {number} [filmId] - Checks for equality with the object’s `filmId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 */

/**
 * A connection to a list of `FilmActor` values.
 * @typedef {Object} FilmActorsConnection
 * @property {Array<FilmActorsEdge>} edges - A list of edges which contains the `FilmActor` and cursor to aid in pagination.
 * @property {Array<(FilmActor|null|undefined)>} nodes - A list of `FilmActor` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `FilmActor` you could get from the connection.
 */

/**
 * A `FilmActor` edge in the connection.
 * @typedef {Object} FilmActorsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {FilmActor} [node] - The `FilmActor` at the end of the edge.
 */

/**
 * Methods to use when ordering `FilmActor`.
 * @typedef {("ACTOR_ID_ASC"|"ACTOR_ID_DESC"|"FILM_ID_ASC"|"FILM_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC")} FilmActorsOrderBy
 */

/**
 * A connection to a list of `FilmCategory` values.
 * @typedef {Object} FilmCategoriesConnection
 * @property {Array<FilmCategoriesEdge>} edges - A list of edges which contains the `FilmCategory` and cursor to aid in pagination.
 * @property {Array<(FilmCategory|null|undefined)>} nodes - A list of `FilmCategory` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `FilmCategory` you could get from the connection.
 */

/**
 * A `FilmCategory` edge in the connection.
 * @typedef {Object} FilmCategoriesEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {FilmCategory} [node] - The `FilmCategory` at the end of the edge.
 */

/**
 * Methods to use when ordering `FilmCategory`.
 * @typedef {("CATEGORY_ID_ASC"|"CATEGORY_ID_DESC"|"FILM_ID_ASC"|"FILM_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC")} FilmCategoriesOrderBy
 */

/**
 * @typedef {Object} FilmCategory
 * @property {Category} [categoryByCategoryId] - Reads a single `Category` that is related to this `FilmCategory`.
 * @property {number} categoryId
 * @property {Film} [filmByFilmId] - Reads a single `Film` that is related to this `FilmCategory`.
 * @property {number} filmId
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 */

/**
 * A condition to be used against `FilmCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} FilmCategoryCondition
 * @property {number} [categoryId] - Checks for equality with the object’s `categoryId` field.
 * @property {number} [filmId] - Checks for equality with the object’s `filmId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 */

/**
 * A condition to be used against `Film` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} FilmCondition
 * @property {string} [description] - Checks for equality with the object’s `description` field.
 * @property {number} [filmId] - Checks for equality with the object’s `filmId` field.
 * @property {string} [fulltext] - Checks for equality with the object’s `fulltext` field.
 * @property {number} [languageId] - Checks for equality with the object’s `languageId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {number} [length] - Checks for equality with the object’s `length` field.
 * @property {number} [originalLanguageId] - Checks for equality with the object’s `originalLanguageId` field.
 * @property {MpaaRating} [rating] - Checks for equality with the object’s `rating` field.
 * @property {Year} [releaseYear] - Checks for equality with the object’s `releaseYear` field.
 * @property {number} [rentalDuration] - Checks for equality with the object’s `rentalDuration` field.
 * @property {BigFloat} [rentalRate] - Checks for equality with the object’s `rentalRate` field.
 * @property {BigFloat} [replacementCost] - Checks for equality with the object’s `replacementCost` field.
 * @property {Array<(string|null|undefined)>} [specialFeatures] - Checks for equality with the object’s `specialFeatures` field.
 * @property {string} [title] - Checks for equality with the object’s `title` field.
 */

/**
 * @typedef {Object} FilmList
 * @property {string} [actors]
 * @property {string} [category]
 * @property {string} [description]
 * @property {number} [fid]
 * @property {number} [length]
 * @property {BigFloat} [price]
 * @property {MpaaRating} [rating]
 * @property {string} [title]
 */

/**
 * A condition to be used against `FilmList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 * @typedef {Object} FilmListCondition
 * @property {string} [actors] - Checks for equality with the object’s `actors` field.
 * @property {string} [category] - Checks for equality with the object’s `category` field.
 * @property {string} [description] - Checks for equality with the object’s `description` field.
 * @property {number} [fid] - Checks for equality with the object’s `fid` field.
 * @property {number} [length] - Checks for equality with the object’s `length` field.
 * @property {BigFloat} [price] - Checks for equality with the object’s `price` field.
 * @property {MpaaRating} [rating] - Checks for equality with the object’s `rating` field.
 * @property {string} [title] - Checks for equality with the object’s `title` field.
 */

/**
 * A connection to a list of `FilmList` values.
 * @typedef {Object} FilmListsConnection
 * @property {Array<FilmListsEdge>} edges - A list of edges which contains the `FilmList` and cursor to aid in pagination.
 * @property {Array<(FilmList|null|undefined)>} nodes - A list of `FilmList` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `FilmList` you could get from the connection.
 */

/**
 * A `FilmList` edge in the connection.
 * @typedef {Object} FilmListsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {FilmList} [node] - The `FilmList` at the end of the edge.
 */

/**
 * Methods to use when ordering `FilmList`.
 * @typedef {("ACTORS_ASC"|"ACTORS_DESC"|"CATEGORY_ASC"|"CATEGORY_DESC"|"DESCRIPTION_ASC"|"DESCRIPTION_DESC"|"FID_ASC"|"FID_DESC"|"LENGTH_ASC"|"LENGTH_DESC"|"NATURAL"|"PRICE_ASC"|"PRICE_DESC"|"RATING_ASC"|"RATING_DESC"|"TITLE_ASC"|"TITLE_DESC")} FilmListsOrderBy
 */

/**
 * A connection to a list of `Film` values.
 * @typedef {Object} FilmsConnection
 * @property {Array<FilmsEdge>} edges - A list of edges which contains the `Film` and cursor to aid in pagination.
 * @property {Array<(Film|null|undefined)>} nodes - A list of `Film` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Film` you could get from the connection.
 */

/**
 * A `Film` edge in the connection.
 * @typedef {Object} FilmsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Film} [node] - The `Film` at the end of the edge.
 */

/**
 * Methods to use when ordering `Film`.
 * @typedef {("DESCRIPTION_ASC"|"DESCRIPTION_DESC"|"FILM_ID_ASC"|"FILM_ID_DESC"|"FULLTEXT_ASC"|"FULLTEXT_DESC"|"LANGUAGE_ID_ASC"|"LANGUAGE_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"LENGTH_ASC"|"LENGTH_DESC"|"NATURAL"|"ORIGINAL_LANGUAGE_ID_ASC"|"ORIGINAL_LANGUAGE_ID_DESC"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"RATING_ASC"|"RATING_DESC"|"RELEASE_YEAR_ASC"|"RELEASE_YEAR_DESC"|"RENTAL_DURATION_ASC"|"RENTAL_DURATION_DESC"|"RENTAL_RATE_ASC"|"RENTAL_RATE_DESC"|"REPLACEMENT_COST_ASC"|"REPLACEMENT_COST_DESC"|"SPECIAL_FEATURES_ASC"|"SPECIAL_FEATURES_DESC"|"TITLE_ASC"|"TITLE_DESC")} FilmsOrderBy
 */

/**
 * A connection to a list of `Inventory` values.
 * @typedef {Object} InventoriesConnection
 * @property {Array<InventoriesEdge>} edges - A list of edges which contains the `Inventory` and cursor to aid in pagination.
 * @property {Array<(Inventory|null|undefined)>} nodes - A list of `Inventory` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Inventory` you could get from the connection.
 */

/**
 * A `Inventory` edge in the connection.
 * @typedef {Object} InventoriesEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Inventory} [node] - The `Inventory` at the end of the edge.
 */

/**
 * Methods to use when ordering `Inventory`.
 * @typedef {("FILM_ID_ASC"|"FILM_ID_DESC"|"INVENTORY_ID_ASC"|"INVENTORY_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"STORE_ID_ASC"|"STORE_ID_DESC")} InventoriesOrderBy
 */

/**
 * @typedef {Object} Inventory
 * @property {Film} [filmByFilmId] - Reads a single `Film` that is related to this `Inventory`.
 * @property {number} filmId
 * @property {number} inventoryId
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 * @property {RentalsConnection} rentalsByInventoryId - Reads and enables pagination through a set of `Rental`.
 * @property {Store} [storeByStoreId] - Reads a single `Store` that is related to this `Inventory`.
 * @property {number} storeId
 */

/**
 * A condition to be used against `Inventory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 * @typedef {Object} InventoryCondition
 * @property {number} [filmId] - Checks for equality with the object’s `filmId` field.
 * @property {number} [inventoryId] - Checks for equality with the object’s `inventoryId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {number} [storeId] - Checks for equality with the object’s `storeId` field.
 */

/**
 * @typedef {Object} Language
 * @property {FilmsConnection} filmsByLanguageId - Reads and enables pagination through a set of `Film`.
 * @property {FilmsConnection} filmsByOriginalLanguageId - Reads and enables pagination through a set of `Film`.
 * @property {number} languageId
 * @property {Datetime} lastUpdate
 * @property {string} name
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 */

/**
 * A condition to be used against `Language` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 * @typedef {Object} LanguageCondition
 * @property {number} [languageId] - Checks for equality with the object’s `languageId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {string} [name] - Checks for equality with the object’s `name` field.
 */

/**
 * A connection to a list of `Language` values.
 * @typedef {Object} LanguagesConnection
 * @property {Array<LanguagesEdge>} edges - A list of edges which contains the `Language` and cursor to aid in pagination.
 * @property {Array<(Language|null|undefined)>} nodes - A list of `Language` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Language` you could get from the connection.
 */

/**
 * A `Language` edge in the connection.
 * @typedef {Object} LanguagesEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Language} [node] - The `Language` at the end of the edge.
 */

/**
 * Methods to use when ordering `Language`.
 * @typedef {("LANGUAGE_ID_ASC"|"LANGUAGE_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NAME_ASC"|"NAME_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC")} LanguagesOrderBy
 */

/**
 * @typedef {("G"|"NC_17"|"PG"|"PG_13"|"R")} MpaaRating
 */

/**
 * @typedef {Object} NicerButSlowerFilmList
 * @property {string} [actors]
 * @property {string} [category]
 * @property {string} [description]
 * @property {number} [fid]
 * @property {number} [length]
 * @property {BigFloat} [price]
 * @property {MpaaRating} [rating]
 * @property {string} [title]
 */

/**
 * A condition to be used against `NicerButSlowerFilmList` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} NicerButSlowerFilmListCondition
 * @property {string} [actors] - Checks for equality with the object’s `actors` field.
 * @property {string} [category] - Checks for equality with the object’s `category` field.
 * @property {string} [description] - Checks for equality with the object’s `description` field.
 * @property {number} [fid] - Checks for equality with the object’s `fid` field.
 * @property {number} [length] - Checks for equality with the object’s `length` field.
 * @property {BigFloat} [price] - Checks for equality with the object’s `price` field.
 * @property {MpaaRating} [rating] - Checks for equality with the object’s `rating` field.
 * @property {string} [title] - Checks for equality with the object’s `title` field.
 */

/**
 * A connection to a list of `NicerButSlowerFilmList` values.
 * @typedef {Object} NicerButSlowerFilmListsConnection
 * @property {Array<NicerButSlowerFilmListsEdge>} edges - A list of edges which contains the `NicerButSlowerFilmList` and cursor to aid in pagination.
 * @property {Array<(NicerButSlowerFilmList|null|undefined)>} nodes - A list of `NicerButSlowerFilmList` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `NicerButSlowerFilmList` you could get from the connection.
 */

/**
 * A `NicerButSlowerFilmList` edge in the connection.
 * @typedef {Object} NicerButSlowerFilmListsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {NicerButSlowerFilmList} [node] - The `NicerButSlowerFilmList` at the end of the edge.
 */

/**
 * Methods to use when ordering `NicerButSlowerFilmList`.
 * @typedef {("ACTORS_ASC"|"ACTORS_DESC"|"CATEGORY_ASC"|"CATEGORY_DESC"|"DESCRIPTION_ASC"|"DESCRIPTION_DESC"|"FID_ASC"|"FID_DESC"|"LENGTH_ASC"|"LENGTH_DESC"|"NATURAL"|"PRICE_ASC"|"PRICE_DESC"|"RATING_ASC"|"RATING_DESC"|"TITLE_ASC"|"TITLE_DESC")} NicerButSlowerFilmListsOrderBy
 */

/**
 * An object with a globally unique `ID`.
 * @typedef {Object} Node
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 */

/**
 * Information about pagination in a connection.
 * @typedef {Object} PageInfo
 * @property {Cursor} [endCursor] - When paginating forwards, the cursor to continue.
 * @property {boolean} hasNextPage - When paginating forwards, are there more items?
 * @property {boolean} hasPreviousPage - When paginating backwards, are there more items?
 * @property {Cursor} [startCursor] - When paginating backwards, the cursor to continue.
 */

/**
 * @typedef {Object} Payment
 * @property {BigFloat} amount
 * @property {Customer} [customerByCustomerId] - Reads a single `Customer` that is related to this `Payment`.
 * @property {number} customerId
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 * @property {Datetime} paymentDate
 * @property {number} paymentId
 * @property {Rental} [rentalByRentalId] - Reads a single `Rental` that is related to this `Payment`.
 * @property {number} rentalId
 * @property {Staff} [staffByStaffId] - Reads a single `Staff` that is related to this `Payment`.
 * @property {number} staffId
 */

/**
 * A condition to be used against `Payment` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} PaymentCondition
 * @property {BigFloat} [amount] - Checks for equality with the object’s `amount` field.
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {Datetime} [paymentDate] - Checks for equality with the object’s `paymentDate` field.
 * @property {number} [paymentId] - Checks for equality with the object’s `paymentId` field.
 * @property {number} [rentalId] - Checks for equality with the object’s `rentalId` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 */

/**
 * @typedef {Object} PaymentP200701
 * @property {BigFloat} amount
 * @property {Customer} [customerByCustomerId] - Reads a single `Customer` that is related to this `PaymentP200701`.
 * @property {number} customerId
 * @property {Datetime} paymentDate
 * @property {number} paymentId
 * @property {Rental} [rentalByRentalId] - Reads a single `Rental` that is related to this `PaymentP200701`.
 * @property {number} rentalId
 * @property {Staff} [staffByStaffId] - Reads a single `Staff` that is related to this `PaymentP200701`.
 * @property {number} staffId
 */

/**
 * A condition to be used against `PaymentP200701` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} PaymentP200701Condition
 * @property {BigFloat} [amount] - Checks for equality with the object’s `amount` field.
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {Datetime} [paymentDate] - Checks for equality with the object’s `paymentDate` field.
 * @property {number} [paymentId] - Checks for equality with the object’s `paymentId` field.
 * @property {number} [rentalId] - Checks for equality with the object’s `rentalId` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 */

/**
 * A connection to a list of `PaymentP200701` values.
 * @typedef {Object} PaymentP200701SConnection
 * @property {Array<PaymentP200701SEdge>} edges - A list of edges which contains the `PaymentP200701` and cursor to aid in pagination.
 * @property {Array<(PaymentP200701|null|undefined)>} nodes - A list of `PaymentP200701` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `PaymentP200701` you could get from the connection.
 */

/**
 * A `PaymentP200701` edge in the connection.
 * @typedef {Object} PaymentP200701SEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {PaymentP200701} [node] - The `PaymentP200701` at the end of the edge.
 */

/**
 * Methods to use when ordering `PaymentP200701`.
 * @typedef {("AMOUNT_ASC"|"AMOUNT_DESC"|"CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"NATURAL"|"PAYMENT_DATE_ASC"|"PAYMENT_DATE_DESC"|"PAYMENT_ID_ASC"|"PAYMENT_ID_DESC"|"RENTAL_ID_ASC"|"RENTAL_ID_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC")} PaymentP200701SOrderBy
 */

/**
 * @typedef {Object} PaymentP200702
 * @property {BigFloat} amount
 * @property {Customer} [customerByCustomerId] - Reads a single `Customer` that is related to this `PaymentP200702`.
 * @property {number} customerId
 * @property {Datetime} paymentDate
 * @property {number} paymentId
 * @property {Rental} [rentalByRentalId] - Reads a single `Rental` that is related to this `PaymentP200702`.
 * @property {number} rentalId
 * @property {Staff} [staffByStaffId] - Reads a single `Staff` that is related to this `PaymentP200702`.
 * @property {number} staffId
 */

/**
 * A condition to be used against `PaymentP200702` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} PaymentP200702Condition
 * @property {BigFloat} [amount] - Checks for equality with the object’s `amount` field.
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {Datetime} [paymentDate] - Checks for equality with the object’s `paymentDate` field.
 * @property {number} [paymentId] - Checks for equality with the object’s `paymentId` field.
 * @property {number} [rentalId] - Checks for equality with the object’s `rentalId` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 */

/**
 * A connection to a list of `PaymentP200702` values.
 * @typedef {Object} PaymentP200702SConnection
 * @property {Array<PaymentP200702SEdge>} edges - A list of edges which contains the `PaymentP200702` and cursor to aid in pagination.
 * @property {Array<(PaymentP200702|null|undefined)>} nodes - A list of `PaymentP200702` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `PaymentP200702` you could get from the connection.
 */

/**
 * A `PaymentP200702` edge in the connection.
 * @typedef {Object} PaymentP200702SEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {PaymentP200702} [node] - The `PaymentP200702` at the end of the edge.
 */

/**
 * Methods to use when ordering `PaymentP200702`.
 * @typedef {("AMOUNT_ASC"|"AMOUNT_DESC"|"CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"NATURAL"|"PAYMENT_DATE_ASC"|"PAYMENT_DATE_DESC"|"PAYMENT_ID_ASC"|"PAYMENT_ID_DESC"|"RENTAL_ID_ASC"|"RENTAL_ID_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC")} PaymentP200702SOrderBy
 */

/**
 * @typedef {Object} PaymentP200703
 * @property {BigFloat} amount
 * @property {Customer} [customerByCustomerId] - Reads a single `Customer` that is related to this `PaymentP200703`.
 * @property {number} customerId
 * @property {Datetime} paymentDate
 * @property {number} paymentId
 * @property {Rental} [rentalByRentalId] - Reads a single `Rental` that is related to this `PaymentP200703`.
 * @property {number} rentalId
 * @property {Staff} [staffByStaffId] - Reads a single `Staff` that is related to this `PaymentP200703`.
 * @property {number} staffId
 */

/**
 * A condition to be used against `PaymentP200703` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} PaymentP200703Condition
 * @property {BigFloat} [amount] - Checks for equality with the object’s `amount` field.
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {Datetime} [paymentDate] - Checks for equality with the object’s `paymentDate` field.
 * @property {number} [paymentId] - Checks for equality with the object’s `paymentId` field.
 * @property {number} [rentalId] - Checks for equality with the object’s `rentalId` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 */

/**
 * A connection to a list of `PaymentP200703` values.
 * @typedef {Object} PaymentP200703SConnection
 * @property {Array<PaymentP200703SEdge>} edges - A list of edges which contains the `PaymentP200703` and cursor to aid in pagination.
 * @property {Array<(PaymentP200703|null|undefined)>} nodes - A list of `PaymentP200703` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `PaymentP200703` you could get from the connection.
 */

/**
 * A `PaymentP200703` edge in the connection.
 * @typedef {Object} PaymentP200703SEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {PaymentP200703} [node] - The `PaymentP200703` at the end of the edge.
 */

/**
 * Methods to use when ordering `PaymentP200703`.
 * @typedef {("AMOUNT_ASC"|"AMOUNT_DESC"|"CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"NATURAL"|"PAYMENT_DATE_ASC"|"PAYMENT_DATE_DESC"|"PAYMENT_ID_ASC"|"PAYMENT_ID_DESC"|"RENTAL_ID_ASC"|"RENTAL_ID_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC")} PaymentP200703SOrderBy
 */

/**
 * @typedef {Object} PaymentP200704
 * @property {BigFloat} amount
 * @property {Customer} [customerByCustomerId] - Reads a single `Customer` that is related to this `PaymentP200704`.
 * @property {number} customerId
 * @property {Datetime} paymentDate
 * @property {number} paymentId
 * @property {Rental} [rentalByRentalId] - Reads a single `Rental` that is related to this `PaymentP200704`.
 * @property {number} rentalId
 * @property {Staff} [staffByStaffId] - Reads a single `Staff` that is related to this `PaymentP200704`.
 * @property {number} staffId
 */

/**
 * A condition to be used against `PaymentP200704` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} PaymentP200704Condition
 * @property {BigFloat} [amount] - Checks for equality with the object’s `amount` field.
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {Datetime} [paymentDate] - Checks for equality with the object’s `paymentDate` field.
 * @property {number} [paymentId] - Checks for equality with the object’s `paymentId` field.
 * @property {number} [rentalId] - Checks for equality with the object’s `rentalId` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 */

/**
 * A connection to a list of `PaymentP200704` values.
 * @typedef {Object} PaymentP200704SConnection
 * @property {Array<PaymentP200704SEdge>} edges - A list of edges which contains the `PaymentP200704` and cursor to aid in pagination.
 * @property {Array<(PaymentP200704|null|undefined)>} nodes - A list of `PaymentP200704` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `PaymentP200704` you could get from the connection.
 */

/**
 * A `PaymentP200704` edge in the connection.
 * @typedef {Object} PaymentP200704SEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {PaymentP200704} [node] - The `PaymentP200704` at the end of the edge.
 */

/**
 * Methods to use when ordering `PaymentP200704`.
 * @typedef {("AMOUNT_ASC"|"AMOUNT_DESC"|"CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"NATURAL"|"PAYMENT_DATE_ASC"|"PAYMENT_DATE_DESC"|"PAYMENT_ID_ASC"|"PAYMENT_ID_DESC"|"RENTAL_ID_ASC"|"RENTAL_ID_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC")} PaymentP200704SOrderBy
 */

/**
 * @typedef {Object} PaymentP200705
 * @property {BigFloat} amount
 * @property {Customer} [customerByCustomerId] - Reads a single `Customer` that is related to this `PaymentP200705`.
 * @property {number} customerId
 * @property {Datetime} paymentDate
 * @property {number} paymentId
 * @property {Rental} [rentalByRentalId] - Reads a single `Rental` that is related to this `PaymentP200705`.
 * @property {number} rentalId
 * @property {Staff} [staffByStaffId] - Reads a single `Staff` that is related to this `PaymentP200705`.
 * @property {number} staffId
 */

/**
 * A condition to be used against `PaymentP200705` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} PaymentP200705Condition
 * @property {BigFloat} [amount] - Checks for equality with the object’s `amount` field.
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {Datetime} [paymentDate] - Checks for equality with the object’s `paymentDate` field.
 * @property {number} [paymentId] - Checks for equality with the object’s `paymentId` field.
 * @property {number} [rentalId] - Checks for equality with the object’s `rentalId` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 */

/**
 * A connection to a list of `PaymentP200705` values.
 * @typedef {Object} PaymentP200705SConnection
 * @property {Array<PaymentP200705SEdge>} edges - A list of edges which contains the `PaymentP200705` and cursor to aid in pagination.
 * @property {Array<(PaymentP200705|null|undefined)>} nodes - A list of `PaymentP200705` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `PaymentP200705` you could get from the connection.
 */

/**
 * A `PaymentP200705` edge in the connection.
 * @typedef {Object} PaymentP200705SEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {PaymentP200705} [node] - The `PaymentP200705` at the end of the edge.
 */

/**
 * Methods to use when ordering `PaymentP200705`.
 * @typedef {("AMOUNT_ASC"|"AMOUNT_DESC"|"CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"NATURAL"|"PAYMENT_DATE_ASC"|"PAYMENT_DATE_DESC"|"PAYMENT_ID_ASC"|"PAYMENT_ID_DESC"|"RENTAL_ID_ASC"|"RENTAL_ID_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC")} PaymentP200705SOrderBy
 */

/**
 * @typedef {Object} PaymentP200706
 * @property {BigFloat} amount
 * @property {Customer} [customerByCustomerId] - Reads a single `Customer` that is related to this `PaymentP200706`.
 * @property {number} customerId
 * @property {Datetime} paymentDate
 * @property {number} paymentId
 * @property {Rental} [rentalByRentalId] - Reads a single `Rental` that is related to this `PaymentP200706`.
 * @property {number} rentalId
 * @property {Staff} [staffByStaffId] - Reads a single `Staff` that is related to this `PaymentP200706`.
 * @property {number} staffId
 */

/**
 * A condition to be used against `PaymentP200706` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} PaymentP200706Condition
 * @property {BigFloat} [amount] - Checks for equality with the object’s `amount` field.
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {Datetime} [paymentDate] - Checks for equality with the object’s `paymentDate` field.
 * @property {number} [paymentId] - Checks for equality with the object’s `paymentId` field.
 * @property {number} [rentalId] - Checks for equality with the object’s `rentalId` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 */

/**
 * A connection to a list of `PaymentP200706` values.
 * @typedef {Object} PaymentP200706SConnection
 * @property {Array<PaymentP200706SEdge>} edges - A list of edges which contains the `PaymentP200706` and cursor to aid in pagination.
 * @property {Array<(PaymentP200706|null|undefined)>} nodes - A list of `PaymentP200706` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `PaymentP200706` you could get from the connection.
 */

/**
 * A `PaymentP200706` edge in the connection.
 * @typedef {Object} PaymentP200706SEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {PaymentP200706} [node] - The `PaymentP200706` at the end of the edge.
 */

/**
 * Methods to use when ordering `PaymentP200706`.
 * @typedef {("AMOUNT_ASC"|"AMOUNT_DESC"|"CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"NATURAL"|"PAYMENT_DATE_ASC"|"PAYMENT_DATE_DESC"|"PAYMENT_ID_ASC"|"PAYMENT_ID_DESC"|"RENTAL_ID_ASC"|"RENTAL_ID_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC")} PaymentP200706SOrderBy
 */

/**
 * A connection to a list of `Payment` values.
 * @typedef {Object} PaymentsConnection
 * @property {Array<PaymentsEdge>} edges - A list of edges which contains the `Payment` and cursor to aid in pagination.
 * @property {Array<(Payment|null|undefined)>} nodes - A list of `Payment` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Payment` you could get from the connection.
 */

/**
 * A `Payment` edge in the connection.
 * @typedef {Object} PaymentsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Payment} [node] - The `Payment` at the end of the edge.
 */

/**
 * Methods to use when ordering `Payment`.
 * @typedef {("AMOUNT_ASC"|"AMOUNT_DESC"|"CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"NATURAL"|"PAYMENT_DATE_ASC"|"PAYMENT_DATE_DESC"|"PAYMENT_ID_ASC"|"PAYMENT_ID_DESC"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"RENTAL_ID_ASC"|"RENTAL_ID_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC")} PaymentsOrderBy
 */

/**
 * The root query type which gives access points into the data universe.
 * @typedef {Object} Query
 * @property {string} [_groupConcat]
 * @property {Actor} [actor] - Reads a single `Actor` using its globally unique `ID`.
 * @property {Actor} [actorByActorId]
 * @property {AddResponse} [add]
 * @property {Address} [address] - Reads a single `Address` using its globally unique `ID`.
 * @property {Address} [addressByAddressId]
 * @property {ActorInfosConnection} [allActorInfos] - Reads and enables pagination through a set of `ActorInfo`.
 * @property {ActorsConnection} [allActors] - Reads and enables pagination through a set of `Actor`.
 * @property {AddressesConnection} [allAddresses] - Reads and enables pagination through a set of `Address`.
 * @property {CategoriesConnection} [allCategories] - Reads and enables pagination through a set of `Category`.
 * @property {CitiesConnection} [allCities] - Reads and enables pagination through a set of `City`.
 * @property {CountriesConnection} [allCountries] - Reads and enables pagination through a set of `Country`.
 * @property {CustomerListsConnection} [allCustomerLists] - Reads and enables pagination through a set of `CustomerList`.
 * @property {CustomersConnection} [allCustomers] - Reads and enables pagination through a set of `Customer`.
 * @property {FilmActorsConnection} [allFilmActors] - Reads and enables pagination through a set of `FilmActor`.
 * @property {FilmCategoriesConnection} [allFilmCategories] - Reads and enables pagination through a set of `FilmCategory`.
 * @property {FilmListsConnection} [allFilmLists] - Reads and enables pagination through a set of `FilmList`.
 * @property {FilmsConnection} [allFilms] - Reads and enables pagination through a set of `Film`.
 * @property {InventoriesConnection} [allInventories] - Reads and enables pagination through a set of `Inventory`.
 * @property {LanguagesConnection} [allLanguages] - Reads and enables pagination through a set of `Language`.
 * @property {NicerButSlowerFilmListsConnection} [allNicerButSlowerFilmLists] - Reads and enables pagination through a set of `NicerButSlowerFilmList`.
 * @property {PaymentP200701SConnection} [allPaymentP200701S] - Reads and enables pagination through a set of `PaymentP200701`.
 * @property {PaymentP200702SConnection} [allPaymentP200702S] - Reads and enables pagination through a set of `PaymentP200702`.
 * @property {PaymentP200703SConnection} [allPaymentP200703S] - Reads and enables pagination through a set of `PaymentP200703`.
 * @property {PaymentP200704SConnection} [allPaymentP200704S] - Reads and enables pagination through a set of `PaymentP200704`.
 * @property {PaymentP200705SConnection} [allPaymentP200705S] - Reads and enables pagination through a set of `PaymentP200705`.
 * @property {PaymentP200706SConnection} [allPaymentP200706S] - Reads and enables pagination through a set of `PaymentP200706`.
 * @property {PaymentsConnection} [allPayments] - Reads and enables pagination through a set of `Payment`.
 * @property {RentalsConnection} [allRentals] - Reads and enables pagination through a set of `Rental`.
 * @property {SalesByFilmCategoriesConnection} [allSalesByFilmCategories] - Reads and enables pagination through a set of `SalesByFilmCategory`.
 * @property {SalesByStoresConnection} [allSalesByStores] - Reads and enables pagination through a set of `SalesByStore`.
 * @property {StaffConnection} [allStaff] - Reads and enables pagination through a set of `Staff`.
 * @property {StaffListsConnection} [allStaffLists] - Reads and enables pagination through a set of `StaffList`.
 * @property {StoresConnection} [allStores] - Reads and enables pagination through a set of `Store`.
 * @property {Category} [category] - Reads a single `Category` using its globally unique `ID`.
 * @property {Category} [categoryByCategoryId]
 * @property {City} [city] - Reads a single `City` using its globally unique `ID`.
 * @property {City} [cityByCityId]
 * @property {Country} [country] - Reads a single `Country` using its globally unique `ID`.
 * @property {Country} [countryByCountryId]
 * @property {Customer} [customer] - Reads a single `Customer` using its globally unique `ID`.
 * @property {Customer} [customerByCustomerId]
 * @property {Film} [film] - Reads a single `Film` using its globally unique `ID`.
 * @property {FilmActor} [filmActor] - Reads a single `FilmActor` using its globally unique `ID`.
 * @property {FilmActor} [filmActorByActorIdAndFilmId]
 * @property {Film} [filmByFilmId]
 * @property {FilmCategory} [filmCategory] - Reads a single `FilmCategory` using its globally unique `ID`.
 * @property {FilmCategory} [filmCategoryByFilmIdAndCategoryId]
 * @property {Inventory} [inventory] - Reads a single `Inventory` using its globally unique `ID`.
 * @property {Inventory} [inventoryByInventoryId]
 * @property {Language} [language] - Reads a single `Language` using its globally unique `ID`.
 * @property {Language} [languageByLanguageId]
 * @property {Date} [lastDay]
 * @property {Node} [node] - Fetches an object given its globally unique `ID`.
 * @property {string} nodeId - The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`.
 * @property {Payment} [payment] - Reads a single `Payment` using its globally unique `ID`.
 * @property {Payment} [paymentByPaymentId]
 * @property {Query} query - Exposes the root query type nested one level down. This is helpful for Relay 1
 * which can only query top level fields if they are in a particular form.
 * @property {Rental} [rental] - Reads a single `Rental` using its globally unique `ID`.
 * @property {Rental} [rentalByRentalId]
 * @property {Staff} [staff] - Reads a single `Staff` using its globally unique `ID`.
 * @property {Staff} [staffByStaffId]
 * @property {Store} [store] - Reads a single `Store` using its globally unique `ID`.
 * @property {Store} [storeByStoreId]
 */

/**
 * @typedef {Object} Rental
 * @property {Customer} [customerByCustomerId] - Reads a single `Customer` that is related to this `Rental`.
 * @property {number} customerId
 * @property {Inventory} [inventoryByInventoryId] - Reads a single `Inventory` that is related to this `Rental`.
 * @property {number} inventoryId
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 * @property {PaymentP200701SConnection} paymentP200701SByRentalId - Reads and enables pagination through a set of `PaymentP200701`.
 * @property {PaymentP200702SConnection} paymentP200702SByRentalId - Reads and enables pagination through a set of `PaymentP200702`.
 * @property {PaymentP200703SConnection} paymentP200703SByRentalId - Reads and enables pagination through a set of `PaymentP200703`.
 * @property {PaymentP200704SConnection} paymentP200704SByRentalId - Reads and enables pagination through a set of `PaymentP200704`.
 * @property {PaymentP200705SConnection} paymentP200705SByRentalId - Reads and enables pagination through a set of `PaymentP200705`.
 * @property {PaymentP200706SConnection} paymentP200706SByRentalId - Reads and enables pagination through a set of `PaymentP200706`.
 * @property {PaymentsConnection} paymentsByRentalId - Reads and enables pagination through a set of `Payment`.
 * @property {Datetime} rentalDate
 * @property {number} rentalId
 * @property {Datetime} [returnDate]
 * @property {Staff} [staffByStaffId] - Reads a single `Staff` that is related to this `Rental`.
 * @property {number} staffId
 */

/**
 * A condition to be used against `Rental` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} RentalCondition
 * @property {number} [customerId] - Checks for equality with the object’s `customerId` field.
 * @property {number} [inventoryId] - Checks for equality with the object’s `inventoryId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {Datetime} [rentalDate] - Checks for equality with the object’s `rentalDate` field.
 * @property {number} [rentalId] - Checks for equality with the object’s `rentalId` field.
 * @property {Datetime} [returnDate] - Checks for equality with the object’s `returnDate` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 */

/**
 * A connection to a list of `Rental` values.
 * @typedef {Object} RentalsConnection
 * @property {Array<RentalsEdge>} edges - A list of edges which contains the `Rental` and cursor to aid in pagination.
 * @property {Array<(Rental|null|undefined)>} nodes - A list of `Rental` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Rental` you could get from the connection.
 */

/**
 * A `Rental` edge in the connection.
 * @typedef {Object} RentalsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Rental} [node] - The `Rental` at the end of the edge.
 */

/**
 * Methods to use when ordering `Rental`.
 * @typedef {("CUSTOMER_ID_ASC"|"CUSTOMER_ID_DESC"|"INVENTORY_ID_ASC"|"INVENTORY_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"RENTAL_DATE_ASC"|"RENTAL_DATE_DESC"|"RENTAL_ID_ASC"|"RENTAL_ID_DESC"|"RETURN_DATE_ASC"|"RETURN_DATE_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC")} RentalsOrderBy
 */

/**
 * A connection to a list of `SalesByFilmCategory` values.
 * @typedef {Object} SalesByFilmCategoriesConnection
 * @property {Array<SalesByFilmCategoriesEdge>} edges - A list of edges which contains the `SalesByFilmCategory` and cursor to aid in pagination.
 * @property {Array<(SalesByFilmCategory|null|undefined)>} nodes - A list of `SalesByFilmCategory` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `SalesByFilmCategory` you could get from the connection.
 */

/**
 * A `SalesByFilmCategory` edge in the connection.
 * @typedef {Object} SalesByFilmCategoriesEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {SalesByFilmCategory} [node] - The `SalesByFilmCategory` at the end of the edge.
 */

/**
 * Methods to use when ordering `SalesByFilmCategory`.
 * @typedef {("CATEGORY_ASC"|"CATEGORY_DESC"|"NATURAL"|"TOTAL_SALES_ASC"|"TOTAL_SALES_DESC")} SalesByFilmCategoriesOrderBy
 */

/**
 * @typedef {Object} SalesByFilmCategory
 * @property {string} [category]
 * @property {BigFloat} [totalSales]
 */

/**
 * A condition to be used against `SalesByFilmCategory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} SalesByFilmCategoryCondition
 * @property {string} [category] - Checks for equality with the object’s `category` field.
 * @property {BigFloat} [totalSales] - Checks for equality with the object’s `totalSales` field.
 */

/**
 * @typedef {Object} SalesByStore
 * @property {string} [manager]
 * @property {string} [store]
 * @property {BigFloat} [totalSales]
 */

/**
 * A condition to be used against `SalesByStore` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 * @typedef {Object} SalesByStoreCondition
 * @property {string} [manager] - Checks for equality with the object’s `manager` field.
 * @property {string} [store] - Checks for equality with the object’s `store` field.
 * @property {BigFloat} [totalSales] - Checks for equality with the object’s `totalSales` field.
 */

/**
 * A connection to a list of `SalesByStore` values.
 * @typedef {Object} SalesByStoresConnection
 * @property {Array<SalesByStoresEdge>} edges - A list of edges which contains the `SalesByStore` and cursor to aid in pagination.
 * @property {Array<(SalesByStore|null|undefined)>} nodes - A list of `SalesByStore` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `SalesByStore` you could get from the connection.
 */

/**
 * A `SalesByStore` edge in the connection.
 * @typedef {Object} SalesByStoresEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {SalesByStore} [node] - The `SalesByStore` at the end of the edge.
 */

/**
 * Methods to use when ordering `SalesByStore`.
 * @typedef {("MANAGER_ASC"|"MANAGER_DESC"|"NATURAL"|"STORE_ASC"|"STORE_DESC"|"TOTAL_SALES_ASC"|"TOTAL_SALES_DESC")} SalesByStoresOrderBy
 */

/**
 * @typedef {Object} Staff
 * @property {boolean} active
 * @property {Address} [addressByAddressId] - Reads a single `Address` that is related to this `Staff`.
 * @property {number} addressId
 * @property {string} [email]
 * @property {string} firstName
 * @property {string} lastName
 * @property {Datetime} lastUpdate
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 * @property {string} [password]
 * @property {PaymentP200701SConnection} paymentP200701SByStaffId - Reads and enables pagination through a set of `PaymentP200701`.
 * @property {PaymentP200702SConnection} paymentP200702SByStaffId - Reads and enables pagination through a set of `PaymentP200702`.
 * @property {PaymentP200703SConnection} paymentP200703SByStaffId - Reads and enables pagination through a set of `PaymentP200703`.
 * @property {PaymentP200704SConnection} paymentP200704SByStaffId - Reads and enables pagination through a set of `PaymentP200704`.
 * @property {PaymentP200705SConnection} paymentP200705SByStaffId - Reads and enables pagination through a set of `PaymentP200705`.
 * @property {PaymentP200706SConnection} paymentP200706SByStaffId - Reads and enables pagination through a set of `PaymentP200706`.
 * @property {PaymentsConnection} paymentsByStaffId - Reads and enables pagination through a set of `Payment`.
 * @property {string} [picture]
 * @property {RentalsConnection} rentalsByStaffId - Reads and enables pagination through a set of `Rental`.
 * @property {number} staffId
 * @property {Store} [storeByStoreId] - Reads a single `Store` that is related to this `Staff`.
 * @property {number} storeId
 * @property {StoresConnection} storesByManagerStaffId - Reads and enables pagination through a set of `Store`.
 * @property {string} username
 */

/**
 * A condition to be used against `Staff` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} StaffCondition
 * @property {boolean} [active] - Checks for equality with the object’s `active` field.
 * @property {number} [addressId] - Checks for equality with the object’s `addressId` field.
 * @property {string} [email] - Checks for equality with the object’s `email` field.
 * @property {string} [firstName] - Checks for equality with the object’s `firstName` field.
 * @property {string} [lastName] - Checks for equality with the object’s `lastName` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {string} [password] - Checks for equality with the object’s `password` field.
 * @property {string} [picture] - Checks for equality with the object’s `picture` field.
 * @property {number} [staffId] - Checks for equality with the object’s `staffId` field.
 * @property {number} [storeId] - Checks for equality with the object’s `storeId` field.
 * @property {string} [username] - Checks for equality with the object’s `username` field.
 */

/**
 * A connection to a list of `Staff` values.
 * @typedef {Object} StaffConnection
 * @property {Array<StaffEdge>} edges - A list of edges which contains the `Staff` and cursor to aid in pagination.
 * @property {Array<(Staff|null|undefined)>} nodes - A list of `Staff` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Staff` you could get from the connection.
 */

/**
 * A `Staff` edge in the connection.
 * @typedef {Object} StaffEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Staff} [node] - The `Staff` at the end of the edge.
 */

/**
 * @typedef {Object} StaffList
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {number} [sid]
 * @property {string} [zipCode]
 */

/**
 * A condition to be used against `StaffList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 * @typedef {Object} StaffListCondition
 * @property {string} [address] - Checks for equality with the object’s `address` field.
 * @property {string} [city] - Checks for equality with the object’s `city` field.
 * @property {string} [country] - Checks for equality with the object’s `country` field.
 * @property {number} [id] - Checks for equality with the object’s `id` field.
 * @property {string} [name] - Checks for equality with the object’s `name` field.
 * @property {string} [phone] - Checks for equality with the object’s `phone` field.
 * @property {number} [sid] - Checks for equality with the object’s `sid` field.
 * @property {string} [zipCode] - Checks for equality with the object’s `zipCode` field.
 */

/**
 * A connection to a list of `StaffList` values.
 * @typedef {Object} StaffListsConnection
 * @property {Array<StaffListsEdge>} edges - A list of edges which contains the `StaffList` and cursor to aid in pagination.
 * @property {Array<(StaffList|null|undefined)>} nodes - A list of `StaffList` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `StaffList` you could get from the connection.
 */

/**
 * A `StaffList` edge in the connection.
 * @typedef {Object} StaffListsEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {StaffList} [node] - The `StaffList` at the end of the edge.
 */

/**
 * Methods to use when ordering `StaffList`.
 * @typedef {("ADDRESS_ASC"|"ADDRESS_DESC"|"CITY_ASC"|"CITY_DESC"|"COUNTRY_ASC"|"COUNTRY_DESC"|"ID_ASC"|"ID_DESC"|"NAME_ASC"|"NAME_DESC"|"NATURAL"|"PHONE_ASC"|"PHONE_DESC"|"SID_ASC"|"SID_DESC"|"ZIP_CODE_ASC"|"ZIP_CODE_DESC")} StaffListsOrderBy
 */

/**
 * Methods to use when ordering `Staff`.
 * @typedef {("ACTIVE_ASC"|"ACTIVE_DESC"|"ADDRESS_ID_ASC"|"ADDRESS_ID_DESC"|"EMAIL_ASC"|"EMAIL_DESC"|"FIRST_NAME_ASC"|"FIRST_NAME_DESC"|"LAST_NAME_ASC"|"LAST_NAME_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"NATURAL"|"PASSWORD_ASC"|"PASSWORD_DESC"|"PICTURE_ASC"|"PICTURE_DESC"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"STAFF_ID_ASC"|"STAFF_ID_DESC"|"STORE_ID_ASC"|"STORE_ID_DESC"|"USERNAME_ASC"|"USERNAME_DESC")} StaffOrderBy
 */

/**
 * @typedef {Object} Store
 * @property {Address} [addressByAddressId] - Reads a single `Address` that is related to this `Store`.
 * @property {number} addressId
 * @property {CustomersConnection} customersByStoreId - Reads and enables pagination through a set of `Customer`.
 * @property {InventoriesConnection} inventoriesByStoreId - Reads and enables pagination through a set of `Inventory`.
 * @property {Datetime} lastUpdate
 * @property {number} managerStaffId
 * @property {string} nodeId - A globally unique identifier. Can be used in various places throughout the system to identify this single value.
 * @property {Staff} [staffByManagerStaffId] - Reads a single `Staff` that is related to this `Store`.
 * @property {StaffConnection} staffByStoreId - Reads and enables pagination through a set of `Staff`.
 * @property {number} storeId
 */

/**
 * A condition to be used against `Store` object types. All fields are tested for equality and combined with a logical ‘and.’
 * @typedef {Object} StoreCondition
 * @property {number} [addressId] - Checks for equality with the object’s `addressId` field.
 * @property {Datetime} [lastUpdate] - Checks for equality with the object’s `lastUpdate` field.
 * @property {number} [managerStaffId] - Checks for equality with the object’s `managerStaffId` field.
 * @property {number} [storeId] - Checks for equality with the object’s `storeId` field.
 */

/**
 * A connection to a list of `Store` values.
 * @typedef {Object} StoresConnection
 * @property {Array<StoresEdge>} edges - A list of edges which contains the `Store` and cursor to aid in pagination.
 * @property {Array<(Store|null|undefined)>} nodes - A list of `Store` objects.
 * @property {PageInfo} pageInfo - Information to aid in pagination.
 * @property {number} totalCount - The count of *all* `Store` you could get from the connection.
 */

/**
 * A `Store` edge in the connection.
 * @typedef {Object} StoresEdge
 * @property {Cursor} [cursor] - A cursor for use in pagination.
 * @property {Store} [node] - The `Store` at the end of the edge.
 */

/**
 * Methods to use when ordering `Store`.
 * @typedef {("ADDRESS_ID_ASC"|"ADDRESS_ID_DESC"|"LAST_UPDATE_ASC"|"LAST_UPDATE_DESC"|"MANAGER_STAFF_ID_ASC"|"MANAGER_STAFF_ID_DESC"|"NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"STORE_ID_ASC"|"STORE_ID_DESC")} StoresOrderBy
 */

/**
 * @typedef {*} Year
 */