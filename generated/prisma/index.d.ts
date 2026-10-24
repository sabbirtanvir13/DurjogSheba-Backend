
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Donor
 * 
 */
export type Donor = $Result.DefaultSelection<Prisma.$DonorPayload>
/**
 * Model Shelter
 * 
 */
export type Shelter = $Result.DefaultSelection<Prisma.$ShelterPayload>
/**
 * Model ReliefNeed
 * 
 */
export type ReliefNeed = $Result.DefaultSelection<Prisma.$ReliefNeedPayload>
/**
 * Model RescueRequest
 * 
 */
export type RescueRequest = $Result.DefaultSelection<Prisma.$RescueRequestPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  VOLUNTEER: 'VOLUNTEER',
  DONOR: 'DONOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UrgencyLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type UrgencyLevel = (typeof UrgencyLevel)[keyof typeof UrgencyLevel]


export const ReliefStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  FULFILLED: 'FULFILLED',
  CANCELLED: 'CANCELLED'
};

export type ReliefStatus = (typeof ReliefStatus)[keyof typeof ReliefStatus]


export const RescueStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  RESCUED: 'RESCUED',
  CANCELLED: 'CANCELLED'
};

export type RescueStatus = (typeof RescueStatus)[keyof typeof RescueStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UrgencyLevel = $Enums.UrgencyLevel

export const UrgencyLevel: typeof $Enums.UrgencyLevel

export type ReliefStatus = $Enums.ReliefStatus

export const ReliefStatus: typeof $Enums.ReliefStatus

export type RescueStatus = $Enums.RescueStatus

export const RescueStatus: typeof $Enums.RescueStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donor`: Exposes CRUD operations for the **Donor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donors
    * const donors = await prisma.donor.findMany()
    * ```
    */
  get donor(): Prisma.DonorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelter`: Exposes CRUD operations for the **Shelter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shelters
    * const shelters = await prisma.shelter.findMany()
    * ```
    */
  get shelter(): Prisma.ShelterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reliefNeed`: Exposes CRUD operations for the **ReliefNeed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReliefNeeds
    * const reliefNeeds = await prisma.reliefNeed.findMany()
    * ```
    */
  get reliefNeed(): Prisma.ReliefNeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rescueRequest`: Exposes CRUD operations for the **RescueRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RescueRequests
    * const rescueRequests = await prisma.rescueRequest.findMany()
    * ```
    */
  get rescueRequest(): Prisma.RescueRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Donor: 'Donor',
    Shelter: 'Shelter',
    ReliefNeed: 'ReliefNeed',
    RescueRequest: 'RescueRequest',
    Donation: 'Donation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "donor" | "shelter" | "reliefNeed" | "rescueRequest" | "donation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Donor: {
        payload: Prisma.$DonorPayload<ExtArgs>
        fields: Prisma.DonorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findFirst: {
            args: Prisma.DonorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findMany: {
            args: Prisma.DonorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          create: {
            args: Prisma.DonorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          createMany: {
            args: Prisma.DonorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          delete: {
            args: Prisma.DonorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          update: {
            args: Prisma.DonorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          deleteMany: {
            args: Prisma.DonorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          upsert: {
            args: Prisma.DonorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          aggregate: {
            args: Prisma.DonorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonor>
          }
          groupBy: {
            args: Prisma.DonorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorCountArgs<ExtArgs>
            result: $Utils.Optional<DonorCountAggregateOutputType> | number
          }
        }
      }
      Shelter: {
        payload: Prisma.$ShelterPayload<ExtArgs>
        fields: Prisma.ShelterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShelterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShelterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          findFirst: {
            args: Prisma.ShelterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShelterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          findMany: {
            args: Prisma.ShelterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          create: {
            args: Prisma.ShelterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          createMany: {
            args: Prisma.ShelterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShelterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          delete: {
            args: Prisma.ShelterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          update: {
            args: Prisma.ShelterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          deleteMany: {
            args: Prisma.ShelterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShelterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShelterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          upsert: {
            args: Prisma.ShelterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          aggregate: {
            args: Prisma.ShelterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelter>
          }
          groupBy: {
            args: Prisma.ShelterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShelterCountArgs<ExtArgs>
            result: $Utils.Optional<ShelterCountAggregateOutputType> | number
          }
        }
      }
      ReliefNeed: {
        payload: Prisma.$ReliefNeedPayload<ExtArgs>
        fields: Prisma.ReliefNeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReliefNeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReliefNeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>
          }
          findFirst: {
            args: Prisma.ReliefNeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReliefNeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>
          }
          findMany: {
            args: Prisma.ReliefNeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>[]
          }
          create: {
            args: Prisma.ReliefNeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>
          }
          createMany: {
            args: Prisma.ReliefNeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReliefNeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>[]
          }
          delete: {
            args: Prisma.ReliefNeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>
          }
          update: {
            args: Prisma.ReliefNeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>
          }
          deleteMany: {
            args: Prisma.ReliefNeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReliefNeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReliefNeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>[]
          }
          upsert: {
            args: Prisma.ReliefNeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReliefNeedPayload>
          }
          aggregate: {
            args: Prisma.ReliefNeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReliefNeed>
          }
          groupBy: {
            args: Prisma.ReliefNeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReliefNeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReliefNeedCountArgs<ExtArgs>
            result: $Utils.Optional<ReliefNeedCountAggregateOutputType> | number
          }
        }
      }
      RescueRequest: {
        payload: Prisma.$RescueRequestPayload<ExtArgs>
        fields: Prisma.RescueRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RescueRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RescueRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>
          }
          findFirst: {
            args: Prisma.RescueRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RescueRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>
          }
          findMany: {
            args: Prisma.RescueRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>[]
          }
          create: {
            args: Prisma.RescueRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>
          }
          createMany: {
            args: Prisma.RescueRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RescueRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>[]
          }
          delete: {
            args: Prisma.RescueRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>
          }
          update: {
            args: Prisma.RescueRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>
          }
          deleteMany: {
            args: Prisma.RescueRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RescueRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RescueRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>[]
          }
          upsert: {
            args: Prisma.RescueRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RescueRequestPayload>
          }
          aggregate: {
            args: Prisma.RescueRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRescueRequest>
          }
          groupBy: {
            args: Prisma.RescueRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RescueRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RescueRequestCountArgs<ExtArgs>
            result: $Utils.Optional<RescueRequestCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    donor?: DonorOmit
    shelter?: ShelterOmit
    reliefNeed?: ReliefNeedOmit
    rescueRequest?: RescueRequestOmit
    donation?: DonationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    shelters: number
    rescueAssigned: number
    donations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelters?: boolean | UserCountOutputTypeCountSheltersArgs
    rescueAssigned?: boolean | UserCountOutputTypeCountRescueAssignedArgs
    donations?: boolean | UserCountOutputTypeCountDonationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSheltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRescueAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RescueRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }


  /**
   * Count Type ShelterCountOutputType
   */

  export type ShelterCountOutputType = {
    reliefNeeds: number
    rescueRequests: number
  }

  export type ShelterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reliefNeeds?: boolean | ShelterCountOutputTypeCountReliefNeedsArgs
    rescueRequests?: boolean | ShelterCountOutputTypeCountRescueRequestsArgs
  }

  // Custom InputTypes
  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterCountOutputType
     */
    select?: ShelterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountReliefNeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReliefNeedWhereInput
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountRescueRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RescueRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    imageUrl: string | null
    imagePublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    imageUrl: string | null
    imagePublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phoneNumber: number
    role: number
    isVerified: number
    imageUrl: number
    imagePublicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    isVerified?: true
    imageUrl?: true
    imagePublicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    isVerified?: true
    imageUrl?: true
    imagePublicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    isVerified?: true
    imageUrl?: true
    imagePublicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role: $Enums.Role
    isVerified: boolean
    imageUrl: string | null
    imagePublicId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    isVerified?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | User$donorArgs<ExtArgs>
    shelters?: boolean | User$sheltersArgs<ExtArgs>
    rescueAssigned?: boolean | User$rescueAssignedArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    isVerified?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    isVerified?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    isVerified?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phoneNumber" | "role" | "isVerified" | "imageUrl" | "imagePublicId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | User$donorArgs<ExtArgs>
    shelters?: boolean | User$sheltersArgs<ExtArgs>
    rescueAssigned?: boolean | User$rescueAssignedArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      donor: Prisma.$DonorPayload<ExtArgs> | null
      shelters: Prisma.$ShelterPayload<ExtArgs>[]
      rescueAssigned: Prisma.$RescueRequestPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phoneNumber: string
      role: $Enums.Role
      isVerified: boolean
      imageUrl: string | null
      imagePublicId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends User$donorArgs<ExtArgs> = {}>(args?: Subset<T, User$donorArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shelters<T extends User$sheltersArgs<ExtArgs> = {}>(args?: Subset<T, User$sheltersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rescueAssigned<T extends User$rescueAssignedArgs<ExtArgs> = {}>(args?: Subset<T, User$rescueAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends User$donationsArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly imagePublicId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.donor
   */
  export type User$donorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    where?: DonorWhereInput
  }

  /**
   * User.shelters
   */
  export type User$sheltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    where?: ShelterWhereInput
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    cursor?: ShelterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * User.rescueAssigned
   */
  export type User$rescueAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    where?: RescueRequestWhereInput
    orderBy?: RescueRequestOrderByWithRelationInput | RescueRequestOrderByWithRelationInput[]
    cursor?: RescueRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RescueRequestScalarFieldEnum | RescueRequestScalarFieldEnum[]
  }

  /**
   * User.donations
   */
  export type User$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Donor
   */

  export type AggregateDonor = {
    _count: DonorCountAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  export type DonorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonorMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donor to aggregate.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donors
    **/
    _count?: true | DonorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorMaxAggregateInputType
  }

  export type GetDonorAggregateType<T extends DonorAggregateArgs> = {
        [P in keyof T & keyof AggregateDonor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonor[P]>
      : GetScalarType<T[P], AggregateDonor[P]>
  }




  export type DonorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorWhereInput
    orderBy?: DonorOrderByWithAggregationInput | DonorOrderByWithAggregationInput[]
    by: DonorScalarFieldEnum[] | DonorScalarFieldEnum
    having?: DonorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorCountAggregateInputType | true
    _min?: DonorMinAggregateInputType
    _max?: DonorMaxAggregateInputType
  }

  export type DonorGroupByOutputType = {
    id: string
    userId: string
    name: string
    email: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    _count: DonorCountAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  type GetDonorGroupByPayload<T extends DonorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorGroupByOutputType[P]>
            : GetScalarType<T[P], DonorGroupByOutputType[P]>
        }
      >
    >


  export type DonorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "phoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["donor"]>
  export type DonorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      email: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donor"]>
    composites: {}
  }

  type DonorGetPayload<S extends boolean | null | undefined | DonorDefaultArgs> = $Result.GetResult<Prisma.$DonorPayload, S>

  type DonorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorCountAggregateInputType | true
    }

  export interface DonorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donor'], meta: { name: 'Donor' } }
    /**
     * Find zero or one Donor that matches the filter.
     * @param {DonorFindUniqueArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorFindUniqueArgs>(args: SelectSubset<T, DonorFindUniqueArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorFindUniqueOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorFindFirstArgs>(args?: SelectSubset<T, DonorFindFirstArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donors
     * const donors = await prisma.donor.findMany()
     * 
     * // Get first 10 Donors
     * const donors = await prisma.donor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorWithIdOnly = await prisma.donor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorFindManyArgs>(args?: SelectSubset<T, DonorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donor.
     * @param {DonorCreateArgs} args - Arguments to create a Donor.
     * @example
     * // Create one Donor
     * const Donor = await prisma.donor.create({
     *   data: {
     *     // ... data to create a Donor
     *   }
     * })
     * 
     */
    create<T extends DonorCreateArgs>(args: SelectSubset<T, DonorCreateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donors.
     * @param {DonorCreateManyArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorCreateManyArgs>(args?: SelectSubset<T, DonorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donors and returns the data saved in the database.
     * @param {DonorCreateManyAndReturnArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donor.
     * @param {DonorDeleteArgs} args - Arguments to delete one Donor.
     * @example
     * // Delete one Donor
     * const Donor = await prisma.donor.delete({
     *   where: {
     *     // ... filter to delete one Donor
     *   }
     * })
     * 
     */
    delete<T extends DonorDeleteArgs>(args: SelectSubset<T, DonorDeleteArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donor.
     * @param {DonorUpdateArgs} args - Arguments to update one Donor.
     * @example
     * // Update one Donor
     * const donor = await prisma.donor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorUpdateArgs>(args: SelectSubset<T, DonorUpdateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donors.
     * @param {DonorDeleteManyArgs} args - Arguments to filter Donors to delete.
     * @example
     * // Delete a few Donors
     * const { count } = await prisma.donor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorDeleteManyArgs>(args?: SelectSubset<T, DonorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorUpdateManyArgs>(args: SelectSubset<T, DonorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors and returns the data updated in the database.
     * @param {DonorUpdateManyAndReturnArgs} args - Arguments to update many Donors.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonorUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donor.
     * @param {DonorUpsertArgs} args - Arguments to update or create a Donor.
     * @example
     * // Update or create a Donor
     * const donor = await prisma.donor.upsert({
     *   create: {
     *     // ... data to create a Donor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donor we want to update
     *   }
     * })
     */
    upsert<T extends DonorUpsertArgs>(args: SelectSubset<T, DonorUpsertArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCountArgs} args - Arguments to filter Donors to count.
     * @example
     * // Count the number of Donors
     * const count = await prisma.donor.count({
     *   where: {
     *     // ... the filter for the Donors we want to count
     *   }
     * })
    **/
    count<T extends DonorCountArgs>(
      args?: Subset<T, DonorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonorAggregateArgs>(args: Subset<T, DonorAggregateArgs>): Prisma.PrismaPromise<GetDonorAggregateType<T>>

    /**
     * Group by Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorGroupByArgs['orderBy'] }
        : { orderBy?: DonorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donor model
   */
  readonly fields: DonorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donor model
   */
  interface DonorFieldRefs {
    readonly id: FieldRef<"Donor", 'String'>
    readonly userId: FieldRef<"Donor", 'String'>
    readonly name: FieldRef<"Donor", 'String'>
    readonly email: FieldRef<"Donor", 'String'>
    readonly phoneNumber: FieldRef<"Donor", 'String'>
    readonly createdAt: FieldRef<"Donor", 'DateTime'>
    readonly updatedAt: FieldRef<"Donor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donor findUnique
   */
  export type DonorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findUniqueOrThrow
   */
  export type DonorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findFirst
   */
  export type DonorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findFirstOrThrow
   */
  export type DonorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findMany
   */
  export type DonorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter, which Donors to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor create
   */
  export type DonorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The data needed to create a Donor.
     */
    data: XOR<DonorCreateInput, DonorUncheckedCreateInput>
  }

  /**
   * Donor createMany
   */
  export type DonorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donor createManyAndReturn
   */
  export type DonorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donor update
   */
  export type DonorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The data needed to update a Donor.
     */
    data: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
    /**
     * Choose, which Donor to update.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor updateMany
   */
  export type DonorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to update.
     */
    limit?: number
  }

  /**
   * Donor updateManyAndReturn
   */
  export type DonorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donor upsert
   */
  export type DonorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * The filter to search for the Donor to update in case it exists.
     */
    where: DonorWhereUniqueInput
    /**
     * In case the Donor found by the `where` argument doesn't exist, create a new Donor with this data.
     */
    create: XOR<DonorCreateInput, DonorUncheckedCreateInput>
    /**
     * In case the Donor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
  }

  /**
   * Donor delete
   */
  export type DonorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
    /**
     * Filter which Donor to delete.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor deleteMany
   */
  export type DonorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donors to delete
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to delete.
     */
    limit?: number
  }

  /**
   * Donor without action
   */
  export type DonorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorInclude<ExtArgs> | null
  }


  /**
   * Model Shelter
   */

  export type AggregateShelter = {
    _count: ShelterCountAggregateOutputType | null
    _avg: ShelterAvgAggregateOutputType | null
    _sum: ShelterSumAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  export type ShelterAvgAggregateOutputType = {
    capacity: number | null
    currentPeople: number | null
  }

  export type ShelterSumAggregateOutputType = {
    capacity: number | null
    currentPeople: number | null
  }

  export type ShelterMinAggregateOutputType = {
    id: string | null
    name: string | null
    district: string | null
    upazila: string | null
    address: string | null
    capacity: number | null
    currentPeople: number | null
    contactPerson: string | null
    contactPhone: string | null
    coordinatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShelterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    district: string | null
    upazila: string | null
    address: string | null
    capacity: number | null
    currentPeople: number | null
    contactPerson: string | null
    contactPhone: string | null
    coordinatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShelterCountAggregateOutputType = {
    id: number
    name: number
    district: number
    upazila: number
    address: number
    capacity: number
    currentPeople: number
    contactPerson: number
    contactPhone: number
    coordinatorId: number
    createdAt: number
    updatedAt: number
    images: number
    _all: number
  }


  export type ShelterAvgAggregateInputType = {
    capacity?: true
    currentPeople?: true
  }

  export type ShelterSumAggregateInputType = {
    capacity?: true
    currentPeople?: true
  }

  export type ShelterMinAggregateInputType = {
    id?: true
    name?: true
    district?: true
    upazila?: true
    address?: true
    capacity?: true
    currentPeople?: true
    contactPerson?: true
    contactPhone?: true
    coordinatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShelterMaxAggregateInputType = {
    id?: true
    name?: true
    district?: true
    upazila?: true
    address?: true
    capacity?: true
    currentPeople?: true
    contactPerson?: true
    contactPhone?: true
    coordinatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShelterCountAggregateInputType = {
    id?: true
    name?: true
    district?: true
    upazila?: true
    address?: true
    capacity?: true
    currentPeople?: true
    contactPerson?: true
    contactPhone?: true
    coordinatorId?: true
    createdAt?: true
    updatedAt?: true
    images?: true
    _all?: true
  }

  export type ShelterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelter to aggregate.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shelters
    **/
    _count?: true | ShelterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShelterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShelterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelterMaxAggregateInputType
  }

  export type GetShelterAggregateType<T extends ShelterAggregateArgs> = {
        [P in keyof T & keyof AggregateShelter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelter[P]>
      : GetScalarType<T[P], AggregateShelter[P]>
  }




  export type ShelterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterWhereInput
    orderBy?: ShelterOrderByWithAggregationInput | ShelterOrderByWithAggregationInput[]
    by: ShelterScalarFieldEnum[] | ShelterScalarFieldEnum
    having?: ShelterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelterCountAggregateInputType | true
    _avg?: ShelterAvgAggregateInputType
    _sum?: ShelterSumAggregateInputType
    _min?: ShelterMinAggregateInputType
    _max?: ShelterMaxAggregateInputType
  }

  export type ShelterGroupByOutputType = {
    id: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople: number
    contactPerson: string
    contactPhone: string
    coordinatorId: string
    createdAt: Date
    updatedAt: Date
    images: string[]
    _count: ShelterCountAggregateOutputType | null
    _avg: ShelterAvgAggregateOutputType | null
    _sum: ShelterSumAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  type GetShelterGroupByPayload<T extends ShelterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelterGroupByOutputType[P]>
            : GetScalarType<T[P], ShelterGroupByOutputType[P]>
        }
      >
    >


  export type ShelterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    district?: boolean
    upazila?: boolean
    address?: boolean
    capacity?: boolean
    currentPeople?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    coordinatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean
    coordinator?: boolean | UserDefaultArgs<ExtArgs>
    reliefNeeds?: boolean | Shelter$reliefNeedsArgs<ExtArgs>
    rescueRequests?: boolean | Shelter$rescueRequestsArgs<ExtArgs>
    _count?: boolean | ShelterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    district?: boolean
    upazila?: boolean
    address?: boolean
    capacity?: boolean
    currentPeople?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    coordinatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean
    coordinator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    district?: boolean
    upazila?: boolean
    address?: boolean
    capacity?: boolean
    currentPeople?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    coordinatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean
    coordinator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectScalar = {
    id?: boolean
    name?: boolean
    district?: boolean
    upazila?: boolean
    address?: boolean
    capacity?: boolean
    currentPeople?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    coordinatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean
  }

  export type ShelterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "district" | "upazila" | "address" | "capacity" | "currentPeople" | "contactPerson" | "contactPhone" | "coordinatorId" | "createdAt" | "updatedAt" | "images", ExtArgs["result"]["shelter"]>
  export type ShelterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coordinator?: boolean | UserDefaultArgs<ExtArgs>
    reliefNeeds?: boolean | Shelter$reliefNeedsArgs<ExtArgs>
    rescueRequests?: boolean | Shelter$rescueRequestsArgs<ExtArgs>
    _count?: boolean | ShelterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShelterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coordinator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShelterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coordinator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShelterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shelter"
    objects: {
      coordinator: Prisma.$UserPayload<ExtArgs>
      reliefNeeds: Prisma.$ReliefNeedPayload<ExtArgs>[]
      rescueRequests: Prisma.$RescueRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      district: string
      upazila: string
      address: string
      capacity: number
      currentPeople: number
      contactPerson: string
      contactPhone: string
      coordinatorId: string
      createdAt: Date
      updatedAt: Date
      images: string[]
    }, ExtArgs["result"]["shelter"]>
    composites: {}
  }

  type ShelterGetPayload<S extends boolean | null | undefined | ShelterDefaultArgs> = $Result.GetResult<Prisma.$ShelterPayload, S>

  type ShelterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShelterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelterCountAggregateInputType | true
    }

  export interface ShelterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shelter'], meta: { name: 'Shelter' } }
    /**
     * Find zero or one Shelter that matches the filter.
     * @param {ShelterFindUniqueArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShelterFindUniqueArgs>(args: SelectSubset<T, ShelterFindUniqueArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shelter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShelterFindUniqueOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShelterFindUniqueOrThrowArgs>(args: SelectSubset<T, ShelterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindFirstArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShelterFindFirstArgs>(args?: SelectSubset<T, ShelterFindFirstArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindFirstOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShelterFindFirstOrThrowArgs>(args?: SelectSubset<T, ShelterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shelters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shelters
     * const shelters = await prisma.shelter.findMany()
     * 
     * // Get first 10 Shelters
     * const shelters = await prisma.shelter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shelterWithIdOnly = await prisma.shelter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShelterFindManyArgs>(args?: SelectSubset<T, ShelterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shelter.
     * @param {ShelterCreateArgs} args - Arguments to create a Shelter.
     * @example
     * // Create one Shelter
     * const Shelter = await prisma.shelter.create({
     *   data: {
     *     // ... data to create a Shelter
     *   }
     * })
     * 
     */
    create<T extends ShelterCreateArgs>(args: SelectSubset<T, ShelterCreateArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shelters.
     * @param {ShelterCreateManyArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShelterCreateManyArgs>(args?: SelectSubset<T, ShelterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shelters and returns the data saved in the database.
     * @param {ShelterCreateManyAndReturnArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shelters and only return the `id`
     * const shelterWithIdOnly = await prisma.shelter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShelterCreateManyAndReturnArgs>(args?: SelectSubset<T, ShelterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shelter.
     * @param {ShelterDeleteArgs} args - Arguments to delete one Shelter.
     * @example
     * // Delete one Shelter
     * const Shelter = await prisma.shelter.delete({
     *   where: {
     *     // ... filter to delete one Shelter
     *   }
     * })
     * 
     */
    delete<T extends ShelterDeleteArgs>(args: SelectSubset<T, ShelterDeleteArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shelter.
     * @param {ShelterUpdateArgs} args - Arguments to update one Shelter.
     * @example
     * // Update one Shelter
     * const shelter = await prisma.shelter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShelterUpdateArgs>(args: SelectSubset<T, ShelterUpdateArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shelters.
     * @param {ShelterDeleteManyArgs} args - Arguments to filter Shelters to delete.
     * @example
     * // Delete a few Shelters
     * const { count } = await prisma.shelter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShelterDeleteManyArgs>(args?: SelectSubset<T, ShelterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShelterUpdateManyArgs>(args: SelectSubset<T, ShelterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters and returns the data updated in the database.
     * @param {ShelterUpdateManyAndReturnArgs} args - Arguments to update many Shelters.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shelters and only return the `id`
     * const shelterWithIdOnly = await prisma.shelter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShelterUpdateManyAndReturnArgs>(args: SelectSubset<T, ShelterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shelter.
     * @param {ShelterUpsertArgs} args - Arguments to update or create a Shelter.
     * @example
     * // Update or create a Shelter
     * const shelter = await prisma.shelter.upsert({
     *   create: {
     *     // ... data to create a Shelter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shelter we want to update
     *   }
     * })
     */
    upsert<T extends ShelterUpsertArgs>(args: SelectSubset<T, ShelterUpsertArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterCountArgs} args - Arguments to filter Shelters to count.
     * @example
     * // Count the number of Shelters
     * const count = await prisma.shelter.count({
     *   where: {
     *     // ... the filter for the Shelters we want to count
     *   }
     * })
    **/
    count<T extends ShelterCountArgs>(
      args?: Subset<T, ShelterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShelterAggregateArgs>(args: Subset<T, ShelterAggregateArgs>): Prisma.PrismaPromise<GetShelterAggregateType<T>>

    /**
     * Group by Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShelterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShelterGroupByArgs['orderBy'] }
        : { orderBy?: ShelterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShelterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shelter model
   */
  readonly fields: ShelterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shelter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShelterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coordinator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reliefNeeds<T extends Shelter$reliefNeedsArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$reliefNeedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rescueRequests<T extends Shelter$rescueRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$rescueRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shelter model
   */
  interface ShelterFieldRefs {
    readonly id: FieldRef<"Shelter", 'String'>
    readonly name: FieldRef<"Shelter", 'String'>
    readonly district: FieldRef<"Shelter", 'String'>
    readonly upazila: FieldRef<"Shelter", 'String'>
    readonly address: FieldRef<"Shelter", 'String'>
    readonly capacity: FieldRef<"Shelter", 'Int'>
    readonly currentPeople: FieldRef<"Shelter", 'Int'>
    readonly contactPerson: FieldRef<"Shelter", 'String'>
    readonly contactPhone: FieldRef<"Shelter", 'String'>
    readonly coordinatorId: FieldRef<"Shelter", 'String'>
    readonly createdAt: FieldRef<"Shelter", 'DateTime'>
    readonly updatedAt: FieldRef<"Shelter", 'DateTime'>
    readonly images: FieldRef<"Shelter", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Shelter findUnique
   */
  export type ShelterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter findUniqueOrThrow
   */
  export type ShelterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter findFirst
   */
  export type ShelterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter findFirstOrThrow
   */
  export type ShelterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter findMany
   */
  export type ShelterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelters to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter create
   */
  export type ShelterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The data needed to create a Shelter.
     */
    data: XOR<ShelterCreateInput, ShelterUncheckedCreateInput>
  }

  /**
   * Shelter createMany
   */
  export type ShelterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shelters.
     */
    data: ShelterCreateManyInput | ShelterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shelter createManyAndReturn
   */
  export type ShelterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * The data used to create many Shelters.
     */
    data: ShelterCreateManyInput | ShelterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelter update
   */
  export type ShelterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The data needed to update a Shelter.
     */
    data: XOR<ShelterUpdateInput, ShelterUncheckedUpdateInput>
    /**
     * Choose, which Shelter to update.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter updateMany
   */
  export type ShelterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shelters.
     */
    data: XOR<ShelterUpdateManyMutationInput, ShelterUncheckedUpdateManyInput>
    /**
     * Filter which Shelters to update
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to update.
     */
    limit?: number
  }

  /**
   * Shelter updateManyAndReturn
   */
  export type ShelterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * The data used to update Shelters.
     */
    data: XOR<ShelterUpdateManyMutationInput, ShelterUncheckedUpdateManyInput>
    /**
     * Filter which Shelters to update
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelter upsert
   */
  export type ShelterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The filter to search for the Shelter to update in case it exists.
     */
    where: ShelterWhereUniqueInput
    /**
     * In case the Shelter found by the `where` argument doesn't exist, create a new Shelter with this data.
     */
    create: XOR<ShelterCreateInput, ShelterUncheckedCreateInput>
    /**
     * In case the Shelter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShelterUpdateInput, ShelterUncheckedUpdateInput>
  }

  /**
   * Shelter delete
   */
  export type ShelterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter which Shelter to delete.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter deleteMany
   */
  export type ShelterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelters to delete
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to delete.
     */
    limit?: number
  }

  /**
   * Shelter.reliefNeeds
   */
  export type Shelter$reliefNeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    where?: ReliefNeedWhereInput
    orderBy?: ReliefNeedOrderByWithRelationInput | ReliefNeedOrderByWithRelationInput[]
    cursor?: ReliefNeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReliefNeedScalarFieldEnum | ReliefNeedScalarFieldEnum[]
  }

  /**
   * Shelter.rescueRequests
   */
  export type Shelter$rescueRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    where?: RescueRequestWhereInput
    orderBy?: RescueRequestOrderByWithRelationInput | RescueRequestOrderByWithRelationInput[]
    cursor?: RescueRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RescueRequestScalarFieldEnum | RescueRequestScalarFieldEnum[]
  }

  /**
   * Shelter without action
   */
  export type ShelterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
  }


  /**
   * Model ReliefNeed
   */

  export type AggregateReliefNeed = {
    _count: ReliefNeedCountAggregateOutputType | null
    _avg: ReliefNeedAvgAggregateOutputType | null
    _sum: ReliefNeedSumAggregateOutputType | null
    _min: ReliefNeedMinAggregateOutputType | null
    _max: ReliefNeedMaxAggregateOutputType | null
  }

  export type ReliefNeedAvgAggregateOutputType = {
    quantity: number | null
    fulfilled: number | null
  }

  export type ReliefNeedSumAggregateOutputType = {
    quantity: number | null
    fulfilled: number | null
  }

  export type ReliefNeedMinAggregateOutputType = {
    id: string | null
    shelterId: string | null
    itemCategory: string | null
    itemName: string | null
    quantity: number | null
    fulfilled: number | null
    urgency: $Enums.UrgencyLevel | null
    status: $Enums.ReliefStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReliefNeedMaxAggregateOutputType = {
    id: string | null
    shelterId: string | null
    itemCategory: string | null
    itemName: string | null
    quantity: number | null
    fulfilled: number | null
    urgency: $Enums.UrgencyLevel | null
    status: $Enums.ReliefStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReliefNeedCountAggregateOutputType = {
    id: number
    shelterId: number
    itemCategory: number
    itemName: number
    quantity: number
    fulfilled: number
    urgency: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReliefNeedAvgAggregateInputType = {
    quantity?: true
    fulfilled?: true
  }

  export type ReliefNeedSumAggregateInputType = {
    quantity?: true
    fulfilled?: true
  }

  export type ReliefNeedMinAggregateInputType = {
    id?: true
    shelterId?: true
    itemCategory?: true
    itemName?: true
    quantity?: true
    fulfilled?: true
    urgency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReliefNeedMaxAggregateInputType = {
    id?: true
    shelterId?: true
    itemCategory?: true
    itemName?: true
    quantity?: true
    fulfilled?: true
    urgency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReliefNeedCountAggregateInputType = {
    id?: true
    shelterId?: true
    itemCategory?: true
    itemName?: true
    quantity?: true
    fulfilled?: true
    urgency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReliefNeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReliefNeed to aggregate.
     */
    where?: ReliefNeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReliefNeeds to fetch.
     */
    orderBy?: ReliefNeedOrderByWithRelationInput | ReliefNeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReliefNeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReliefNeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReliefNeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReliefNeeds
    **/
    _count?: true | ReliefNeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReliefNeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReliefNeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReliefNeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReliefNeedMaxAggregateInputType
  }

  export type GetReliefNeedAggregateType<T extends ReliefNeedAggregateArgs> = {
        [P in keyof T & keyof AggregateReliefNeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReliefNeed[P]>
      : GetScalarType<T[P], AggregateReliefNeed[P]>
  }




  export type ReliefNeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReliefNeedWhereInput
    orderBy?: ReliefNeedOrderByWithAggregationInput | ReliefNeedOrderByWithAggregationInput[]
    by: ReliefNeedScalarFieldEnum[] | ReliefNeedScalarFieldEnum
    having?: ReliefNeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReliefNeedCountAggregateInputType | true
    _avg?: ReliefNeedAvgAggregateInputType
    _sum?: ReliefNeedSumAggregateInputType
    _min?: ReliefNeedMinAggregateInputType
    _max?: ReliefNeedMaxAggregateInputType
  }

  export type ReliefNeedGroupByOutputType = {
    id: string
    shelterId: string
    itemCategory: string
    itemName: string
    quantity: number
    fulfilled: number
    urgency: $Enums.UrgencyLevel
    status: $Enums.ReliefStatus
    createdAt: Date
    updatedAt: Date
    _count: ReliefNeedCountAggregateOutputType | null
    _avg: ReliefNeedAvgAggregateOutputType | null
    _sum: ReliefNeedSumAggregateOutputType | null
    _min: ReliefNeedMinAggregateOutputType | null
    _max: ReliefNeedMaxAggregateOutputType | null
  }

  type GetReliefNeedGroupByPayload<T extends ReliefNeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReliefNeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReliefNeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReliefNeedGroupByOutputType[P]>
            : GetScalarType<T[P], ReliefNeedGroupByOutputType[P]>
        }
      >
    >


  export type ReliefNeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    itemCategory?: boolean
    itemName?: boolean
    quantity?: boolean
    fulfilled?: boolean
    urgency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reliefNeed"]>

  export type ReliefNeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    itemCategory?: boolean
    itemName?: boolean
    quantity?: boolean
    fulfilled?: boolean
    urgency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reliefNeed"]>

  export type ReliefNeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    itemCategory?: boolean
    itemName?: boolean
    quantity?: boolean
    fulfilled?: boolean
    urgency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reliefNeed"]>

  export type ReliefNeedSelectScalar = {
    id?: boolean
    shelterId?: boolean
    itemCategory?: boolean
    itemName?: boolean
    quantity?: boolean
    fulfilled?: boolean
    urgency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReliefNeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shelterId" | "itemCategory" | "itemName" | "quantity" | "fulfilled" | "urgency" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["reliefNeed"]>
  export type ReliefNeedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }
  export type ReliefNeedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }
  export type ReliefNeedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }

  export type $ReliefNeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReliefNeed"
    objects: {
      shelter: Prisma.$ShelterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shelterId: string
      itemCategory: string
      itemName: string
      quantity: number
      fulfilled: number
      urgency: $Enums.UrgencyLevel
      status: $Enums.ReliefStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reliefNeed"]>
    composites: {}
  }

  type ReliefNeedGetPayload<S extends boolean | null | undefined | ReliefNeedDefaultArgs> = $Result.GetResult<Prisma.$ReliefNeedPayload, S>

  type ReliefNeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReliefNeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReliefNeedCountAggregateInputType | true
    }

  export interface ReliefNeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReliefNeed'], meta: { name: 'ReliefNeed' } }
    /**
     * Find zero or one ReliefNeed that matches the filter.
     * @param {ReliefNeedFindUniqueArgs} args - Arguments to find a ReliefNeed
     * @example
     * // Get one ReliefNeed
     * const reliefNeed = await prisma.reliefNeed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReliefNeedFindUniqueArgs>(args: SelectSubset<T, ReliefNeedFindUniqueArgs<ExtArgs>>): Prisma__ReliefNeedClient<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReliefNeed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReliefNeedFindUniqueOrThrowArgs} args - Arguments to find a ReliefNeed
     * @example
     * // Get one ReliefNeed
     * const reliefNeed = await prisma.reliefNeed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReliefNeedFindUniqueOrThrowArgs>(args: SelectSubset<T, ReliefNeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReliefNeedClient<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReliefNeed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReliefNeedFindFirstArgs} args - Arguments to find a ReliefNeed
     * @example
     * // Get one ReliefNeed
     * const reliefNeed = await prisma.reliefNeed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReliefNeedFindFirstArgs>(args?: SelectSubset<T, ReliefNeedFindFirstArgs<ExtArgs>>): Prisma__ReliefNeedClient<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReliefNeed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReliefNeedFindFirstOrThrowArgs} args - Arguments to find a ReliefNeed
     * @example
     * // Get one ReliefNeed
     * const reliefNeed = await prisma.reliefNeed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReliefNeedFindFirstOrThrowArgs>(args?: SelectSubset<T, ReliefNeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReliefNeedClient<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReliefNeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReliefNeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReliefNeeds
     * const reliefNeeds = await prisma.reliefNeed.findMany()
     * 
     * // Get first 10 ReliefNeeds
     * const reliefNeeds = await prisma.reliefNeed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reliefNeedWithIdOnly = await prisma.reliefNeed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReliefNeedFindManyArgs>(args?: SelectSubset<T, ReliefNeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReliefNeed.
     * @param {ReliefNeedCreateArgs} args - Arguments to create a ReliefNeed.
     * @example
     * // Create one ReliefNeed
     * const ReliefNeed = await prisma.reliefNeed.create({
     *   data: {
     *     // ... data to create a ReliefNeed
     *   }
     * })
     * 
     */
    create<T extends ReliefNeedCreateArgs>(args: SelectSubset<T, ReliefNeedCreateArgs<ExtArgs>>): Prisma__ReliefNeedClient<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReliefNeeds.
     * @param {ReliefNeedCreateManyArgs} args - Arguments to create many ReliefNeeds.
     * @example
     * // Create many ReliefNeeds
     * const reliefNeed = await prisma.reliefNeed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReliefNeedCreateManyArgs>(args?: SelectSubset<T, ReliefNeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReliefNeeds and returns the data saved in the database.
     * @param {ReliefNeedCreateManyAndReturnArgs} args - Arguments to create many ReliefNeeds.
     * @example
     * // Create many ReliefNeeds
     * const reliefNeed = await prisma.reliefNeed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReliefNeeds and only return the `id`
     * const reliefNeedWithIdOnly = await prisma.reliefNeed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReliefNeedCreateManyAndReturnArgs>(args?: SelectSubset<T, ReliefNeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReliefNeed.
     * @param {ReliefNeedDeleteArgs} args - Arguments to delete one ReliefNeed.
     * @example
     * // Delete one ReliefNeed
     * const ReliefNeed = await prisma.reliefNeed.delete({
     *   where: {
     *     // ... filter to delete one ReliefNeed
     *   }
     * })
     * 
     */
    delete<T extends ReliefNeedDeleteArgs>(args: SelectSubset<T, ReliefNeedDeleteArgs<ExtArgs>>): Prisma__ReliefNeedClient<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReliefNeed.
     * @param {ReliefNeedUpdateArgs} args - Arguments to update one ReliefNeed.
     * @example
     * // Update one ReliefNeed
     * const reliefNeed = await prisma.reliefNeed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReliefNeedUpdateArgs>(args: SelectSubset<T, ReliefNeedUpdateArgs<ExtArgs>>): Prisma__ReliefNeedClient<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReliefNeeds.
     * @param {ReliefNeedDeleteManyArgs} args - Arguments to filter ReliefNeeds to delete.
     * @example
     * // Delete a few ReliefNeeds
     * const { count } = await prisma.reliefNeed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReliefNeedDeleteManyArgs>(args?: SelectSubset<T, ReliefNeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReliefNeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReliefNeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReliefNeeds
     * const reliefNeed = await prisma.reliefNeed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReliefNeedUpdateManyArgs>(args: SelectSubset<T, ReliefNeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReliefNeeds and returns the data updated in the database.
     * @param {ReliefNeedUpdateManyAndReturnArgs} args - Arguments to update many ReliefNeeds.
     * @example
     * // Update many ReliefNeeds
     * const reliefNeed = await prisma.reliefNeed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReliefNeeds and only return the `id`
     * const reliefNeedWithIdOnly = await prisma.reliefNeed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReliefNeedUpdateManyAndReturnArgs>(args: SelectSubset<T, ReliefNeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReliefNeed.
     * @param {ReliefNeedUpsertArgs} args - Arguments to update or create a ReliefNeed.
     * @example
     * // Update or create a ReliefNeed
     * const reliefNeed = await prisma.reliefNeed.upsert({
     *   create: {
     *     // ... data to create a ReliefNeed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReliefNeed we want to update
     *   }
     * })
     */
    upsert<T extends ReliefNeedUpsertArgs>(args: SelectSubset<T, ReliefNeedUpsertArgs<ExtArgs>>): Prisma__ReliefNeedClient<$Result.GetResult<Prisma.$ReliefNeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReliefNeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReliefNeedCountArgs} args - Arguments to filter ReliefNeeds to count.
     * @example
     * // Count the number of ReliefNeeds
     * const count = await prisma.reliefNeed.count({
     *   where: {
     *     // ... the filter for the ReliefNeeds we want to count
     *   }
     * })
    **/
    count<T extends ReliefNeedCountArgs>(
      args?: Subset<T, ReliefNeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReliefNeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReliefNeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReliefNeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReliefNeedAggregateArgs>(args: Subset<T, ReliefNeedAggregateArgs>): Prisma.PrismaPromise<GetReliefNeedAggregateType<T>>

    /**
     * Group by ReliefNeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReliefNeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReliefNeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReliefNeedGroupByArgs['orderBy'] }
        : { orderBy?: ReliefNeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReliefNeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReliefNeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReliefNeed model
   */
  readonly fields: ReliefNeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReliefNeed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReliefNeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelter<T extends ShelterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelterDefaultArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReliefNeed model
   */
  interface ReliefNeedFieldRefs {
    readonly id: FieldRef<"ReliefNeed", 'String'>
    readonly shelterId: FieldRef<"ReliefNeed", 'String'>
    readonly itemCategory: FieldRef<"ReliefNeed", 'String'>
    readonly itemName: FieldRef<"ReliefNeed", 'String'>
    readonly quantity: FieldRef<"ReliefNeed", 'Int'>
    readonly fulfilled: FieldRef<"ReliefNeed", 'Int'>
    readonly urgency: FieldRef<"ReliefNeed", 'UrgencyLevel'>
    readonly status: FieldRef<"ReliefNeed", 'ReliefStatus'>
    readonly createdAt: FieldRef<"ReliefNeed", 'DateTime'>
    readonly updatedAt: FieldRef<"ReliefNeed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReliefNeed findUnique
   */
  export type ReliefNeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * Filter, which ReliefNeed to fetch.
     */
    where: ReliefNeedWhereUniqueInput
  }

  /**
   * ReliefNeed findUniqueOrThrow
   */
  export type ReliefNeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * Filter, which ReliefNeed to fetch.
     */
    where: ReliefNeedWhereUniqueInput
  }

  /**
   * ReliefNeed findFirst
   */
  export type ReliefNeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * Filter, which ReliefNeed to fetch.
     */
    where?: ReliefNeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReliefNeeds to fetch.
     */
    orderBy?: ReliefNeedOrderByWithRelationInput | ReliefNeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReliefNeeds.
     */
    cursor?: ReliefNeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReliefNeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReliefNeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReliefNeeds.
     */
    distinct?: ReliefNeedScalarFieldEnum | ReliefNeedScalarFieldEnum[]
  }

  /**
   * ReliefNeed findFirstOrThrow
   */
  export type ReliefNeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * Filter, which ReliefNeed to fetch.
     */
    where?: ReliefNeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReliefNeeds to fetch.
     */
    orderBy?: ReliefNeedOrderByWithRelationInput | ReliefNeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReliefNeeds.
     */
    cursor?: ReliefNeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReliefNeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReliefNeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReliefNeeds.
     */
    distinct?: ReliefNeedScalarFieldEnum | ReliefNeedScalarFieldEnum[]
  }

  /**
   * ReliefNeed findMany
   */
  export type ReliefNeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * Filter, which ReliefNeeds to fetch.
     */
    where?: ReliefNeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReliefNeeds to fetch.
     */
    orderBy?: ReliefNeedOrderByWithRelationInput | ReliefNeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReliefNeeds.
     */
    cursor?: ReliefNeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReliefNeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReliefNeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReliefNeeds.
     */
    distinct?: ReliefNeedScalarFieldEnum | ReliefNeedScalarFieldEnum[]
  }

  /**
   * ReliefNeed create
   */
  export type ReliefNeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * The data needed to create a ReliefNeed.
     */
    data: XOR<ReliefNeedCreateInput, ReliefNeedUncheckedCreateInput>
  }

  /**
   * ReliefNeed createMany
   */
  export type ReliefNeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReliefNeeds.
     */
    data: ReliefNeedCreateManyInput | ReliefNeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReliefNeed createManyAndReturn
   */
  export type ReliefNeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * The data used to create many ReliefNeeds.
     */
    data: ReliefNeedCreateManyInput | ReliefNeedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReliefNeed update
   */
  export type ReliefNeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * The data needed to update a ReliefNeed.
     */
    data: XOR<ReliefNeedUpdateInput, ReliefNeedUncheckedUpdateInput>
    /**
     * Choose, which ReliefNeed to update.
     */
    where: ReliefNeedWhereUniqueInput
  }

  /**
   * ReliefNeed updateMany
   */
  export type ReliefNeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReliefNeeds.
     */
    data: XOR<ReliefNeedUpdateManyMutationInput, ReliefNeedUncheckedUpdateManyInput>
    /**
     * Filter which ReliefNeeds to update
     */
    where?: ReliefNeedWhereInput
    /**
     * Limit how many ReliefNeeds to update.
     */
    limit?: number
  }

  /**
   * ReliefNeed updateManyAndReturn
   */
  export type ReliefNeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * The data used to update ReliefNeeds.
     */
    data: XOR<ReliefNeedUpdateManyMutationInput, ReliefNeedUncheckedUpdateManyInput>
    /**
     * Filter which ReliefNeeds to update
     */
    where?: ReliefNeedWhereInput
    /**
     * Limit how many ReliefNeeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReliefNeed upsert
   */
  export type ReliefNeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * The filter to search for the ReliefNeed to update in case it exists.
     */
    where: ReliefNeedWhereUniqueInput
    /**
     * In case the ReliefNeed found by the `where` argument doesn't exist, create a new ReliefNeed with this data.
     */
    create: XOR<ReliefNeedCreateInput, ReliefNeedUncheckedCreateInput>
    /**
     * In case the ReliefNeed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReliefNeedUpdateInput, ReliefNeedUncheckedUpdateInput>
  }

  /**
   * ReliefNeed delete
   */
  export type ReliefNeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
    /**
     * Filter which ReliefNeed to delete.
     */
    where: ReliefNeedWhereUniqueInput
  }

  /**
   * ReliefNeed deleteMany
   */
  export type ReliefNeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReliefNeeds to delete
     */
    where?: ReliefNeedWhereInput
    /**
     * Limit how many ReliefNeeds to delete.
     */
    limit?: number
  }

  /**
   * ReliefNeed without action
   */
  export type ReliefNeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReliefNeed
     */
    select?: ReliefNeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReliefNeed
     */
    omit?: ReliefNeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReliefNeedInclude<ExtArgs> | null
  }


  /**
   * Model RescueRequest
   */

  export type AggregateRescueRequest = {
    _count: RescueRequestCountAggregateOutputType | null
    _avg: RescueRequestAvgAggregateOutputType | null
    _sum: RescueRequestSumAggregateOutputType | null
    _min: RescueRequestMinAggregateOutputType | null
    _max: RescueRequestMaxAggregateOutputType | null
  }

  export type RescueRequestAvgAggregateOutputType = {
    peopleCount: number | null
  }

  export type RescueRequestSumAggregateOutputType = {
    peopleCount: number | null
  }

  export type RescueRequestMinAggregateOutputType = {
    id: string | null
    shelterId: string | null
    location: string | null
    contactPhone: string | null
    peopleCount: number | null
    urgency: $Enums.UrgencyLevel | null
    status: $Enums.RescueStatus | null
    assignedToId: string | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RescueRequestMaxAggregateOutputType = {
    id: string | null
    shelterId: string | null
    location: string | null
    contactPhone: string | null
    peopleCount: number | null
    urgency: $Enums.UrgencyLevel | null
    status: $Enums.RescueStatus | null
    assignedToId: string | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RescueRequestCountAggregateOutputType = {
    id: number
    shelterId: number
    location: number
    contactPhone: number
    peopleCount: number
    urgency: number
    status: number
    assignedToId: number
    description: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RescueRequestAvgAggregateInputType = {
    peopleCount?: true
  }

  export type RescueRequestSumAggregateInputType = {
    peopleCount?: true
  }

  export type RescueRequestMinAggregateInputType = {
    id?: true
    shelterId?: true
    location?: true
    contactPhone?: true
    peopleCount?: true
    urgency?: true
    status?: true
    assignedToId?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RescueRequestMaxAggregateInputType = {
    id?: true
    shelterId?: true
    location?: true
    contactPhone?: true
    peopleCount?: true
    urgency?: true
    status?: true
    assignedToId?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RescueRequestCountAggregateInputType = {
    id?: true
    shelterId?: true
    location?: true
    contactPhone?: true
    peopleCount?: true
    urgency?: true
    status?: true
    assignedToId?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RescueRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RescueRequest to aggregate.
     */
    where?: RescueRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RescueRequests to fetch.
     */
    orderBy?: RescueRequestOrderByWithRelationInput | RescueRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RescueRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RescueRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RescueRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RescueRequests
    **/
    _count?: true | RescueRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RescueRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RescueRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RescueRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RescueRequestMaxAggregateInputType
  }

  export type GetRescueRequestAggregateType<T extends RescueRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRescueRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRescueRequest[P]>
      : GetScalarType<T[P], AggregateRescueRequest[P]>
  }




  export type RescueRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RescueRequestWhereInput
    orderBy?: RescueRequestOrderByWithAggregationInput | RescueRequestOrderByWithAggregationInput[]
    by: RescueRequestScalarFieldEnum[] | RescueRequestScalarFieldEnum
    having?: RescueRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RescueRequestCountAggregateInputType | true
    _avg?: RescueRequestAvgAggregateInputType
    _sum?: RescueRequestSumAggregateInputType
    _min?: RescueRequestMinAggregateInputType
    _max?: RescueRequestMaxAggregateInputType
  }

  export type RescueRequestGroupByOutputType = {
    id: string
    shelterId: string | null
    location: string
    contactPhone: string
    peopleCount: number
    urgency: $Enums.UrgencyLevel
    status: $Enums.RescueStatus
    assignedToId: string | null
    description: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: RescueRequestCountAggregateOutputType | null
    _avg: RescueRequestAvgAggregateOutputType | null
    _sum: RescueRequestSumAggregateOutputType | null
    _min: RescueRequestMinAggregateOutputType | null
    _max: RescueRequestMaxAggregateOutputType | null
  }

  type GetRescueRequestGroupByPayload<T extends RescueRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RescueRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RescueRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RescueRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RescueRequestGroupByOutputType[P]>
        }
      >
    >


  export type RescueRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    location?: boolean
    contactPhone?: boolean
    peopleCount?: boolean
    urgency?: boolean
    status?: boolean
    assignedToId?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | RescueRequest$shelterArgs<ExtArgs>
    assignedTo?: boolean | RescueRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["rescueRequest"]>

  export type RescueRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    location?: boolean
    contactPhone?: boolean
    peopleCount?: boolean
    urgency?: boolean
    status?: boolean
    assignedToId?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | RescueRequest$shelterArgs<ExtArgs>
    assignedTo?: boolean | RescueRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["rescueRequest"]>

  export type RescueRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    location?: boolean
    contactPhone?: boolean
    peopleCount?: boolean
    urgency?: boolean
    status?: boolean
    assignedToId?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | RescueRequest$shelterArgs<ExtArgs>
    assignedTo?: boolean | RescueRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["rescueRequest"]>

  export type RescueRequestSelectScalar = {
    id?: boolean
    shelterId?: boolean
    location?: boolean
    contactPhone?: boolean
    peopleCount?: boolean
    urgency?: boolean
    status?: boolean
    assignedToId?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RescueRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shelterId" | "location" | "contactPhone" | "peopleCount" | "urgency" | "status" | "assignedToId" | "description" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["rescueRequest"]>
  export type RescueRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | RescueRequest$shelterArgs<ExtArgs>
    assignedTo?: boolean | RescueRequest$assignedToArgs<ExtArgs>
  }
  export type RescueRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | RescueRequest$shelterArgs<ExtArgs>
    assignedTo?: boolean | RescueRequest$assignedToArgs<ExtArgs>
  }
  export type RescueRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | RescueRequest$shelterArgs<ExtArgs>
    assignedTo?: boolean | RescueRequest$assignedToArgs<ExtArgs>
  }

  export type $RescueRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RescueRequest"
    objects: {
      shelter: Prisma.$ShelterPayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shelterId: string | null
      location: string
      contactPhone: string
      peopleCount: number
      urgency: $Enums.UrgencyLevel
      status: $Enums.RescueStatus
      assignedToId: string | null
      description: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rescueRequest"]>
    composites: {}
  }

  type RescueRequestGetPayload<S extends boolean | null | undefined | RescueRequestDefaultArgs> = $Result.GetResult<Prisma.$RescueRequestPayload, S>

  type RescueRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RescueRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RescueRequestCountAggregateInputType | true
    }

  export interface RescueRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RescueRequest'], meta: { name: 'RescueRequest' } }
    /**
     * Find zero or one RescueRequest that matches the filter.
     * @param {RescueRequestFindUniqueArgs} args - Arguments to find a RescueRequest
     * @example
     * // Get one RescueRequest
     * const rescueRequest = await prisma.rescueRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RescueRequestFindUniqueArgs>(args: SelectSubset<T, RescueRequestFindUniqueArgs<ExtArgs>>): Prisma__RescueRequestClient<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RescueRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RescueRequestFindUniqueOrThrowArgs} args - Arguments to find a RescueRequest
     * @example
     * // Get one RescueRequest
     * const rescueRequest = await prisma.rescueRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RescueRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RescueRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RescueRequestClient<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RescueRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescueRequestFindFirstArgs} args - Arguments to find a RescueRequest
     * @example
     * // Get one RescueRequest
     * const rescueRequest = await prisma.rescueRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RescueRequestFindFirstArgs>(args?: SelectSubset<T, RescueRequestFindFirstArgs<ExtArgs>>): Prisma__RescueRequestClient<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RescueRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescueRequestFindFirstOrThrowArgs} args - Arguments to find a RescueRequest
     * @example
     * // Get one RescueRequest
     * const rescueRequest = await prisma.rescueRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RescueRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RescueRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RescueRequestClient<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RescueRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescueRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RescueRequests
     * const rescueRequests = await prisma.rescueRequest.findMany()
     * 
     * // Get first 10 RescueRequests
     * const rescueRequests = await prisma.rescueRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rescueRequestWithIdOnly = await prisma.rescueRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RescueRequestFindManyArgs>(args?: SelectSubset<T, RescueRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RescueRequest.
     * @param {RescueRequestCreateArgs} args - Arguments to create a RescueRequest.
     * @example
     * // Create one RescueRequest
     * const RescueRequest = await prisma.rescueRequest.create({
     *   data: {
     *     // ... data to create a RescueRequest
     *   }
     * })
     * 
     */
    create<T extends RescueRequestCreateArgs>(args: SelectSubset<T, RescueRequestCreateArgs<ExtArgs>>): Prisma__RescueRequestClient<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RescueRequests.
     * @param {RescueRequestCreateManyArgs} args - Arguments to create many RescueRequests.
     * @example
     * // Create many RescueRequests
     * const rescueRequest = await prisma.rescueRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RescueRequestCreateManyArgs>(args?: SelectSubset<T, RescueRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RescueRequests and returns the data saved in the database.
     * @param {RescueRequestCreateManyAndReturnArgs} args - Arguments to create many RescueRequests.
     * @example
     * // Create many RescueRequests
     * const rescueRequest = await prisma.rescueRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RescueRequests and only return the `id`
     * const rescueRequestWithIdOnly = await prisma.rescueRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RescueRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RescueRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RescueRequest.
     * @param {RescueRequestDeleteArgs} args - Arguments to delete one RescueRequest.
     * @example
     * // Delete one RescueRequest
     * const RescueRequest = await prisma.rescueRequest.delete({
     *   where: {
     *     // ... filter to delete one RescueRequest
     *   }
     * })
     * 
     */
    delete<T extends RescueRequestDeleteArgs>(args: SelectSubset<T, RescueRequestDeleteArgs<ExtArgs>>): Prisma__RescueRequestClient<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RescueRequest.
     * @param {RescueRequestUpdateArgs} args - Arguments to update one RescueRequest.
     * @example
     * // Update one RescueRequest
     * const rescueRequest = await prisma.rescueRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RescueRequestUpdateArgs>(args: SelectSubset<T, RescueRequestUpdateArgs<ExtArgs>>): Prisma__RescueRequestClient<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RescueRequests.
     * @param {RescueRequestDeleteManyArgs} args - Arguments to filter RescueRequests to delete.
     * @example
     * // Delete a few RescueRequests
     * const { count } = await prisma.rescueRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RescueRequestDeleteManyArgs>(args?: SelectSubset<T, RescueRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RescueRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescueRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RescueRequests
     * const rescueRequest = await prisma.rescueRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RescueRequestUpdateManyArgs>(args: SelectSubset<T, RescueRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RescueRequests and returns the data updated in the database.
     * @param {RescueRequestUpdateManyAndReturnArgs} args - Arguments to update many RescueRequests.
     * @example
     * // Update many RescueRequests
     * const rescueRequest = await prisma.rescueRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RescueRequests and only return the `id`
     * const rescueRequestWithIdOnly = await prisma.rescueRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RescueRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RescueRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RescueRequest.
     * @param {RescueRequestUpsertArgs} args - Arguments to update or create a RescueRequest.
     * @example
     * // Update or create a RescueRequest
     * const rescueRequest = await prisma.rescueRequest.upsert({
     *   create: {
     *     // ... data to create a RescueRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RescueRequest we want to update
     *   }
     * })
     */
    upsert<T extends RescueRequestUpsertArgs>(args: SelectSubset<T, RescueRequestUpsertArgs<ExtArgs>>): Prisma__RescueRequestClient<$Result.GetResult<Prisma.$RescueRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RescueRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescueRequestCountArgs} args - Arguments to filter RescueRequests to count.
     * @example
     * // Count the number of RescueRequests
     * const count = await prisma.rescueRequest.count({
     *   where: {
     *     // ... the filter for the RescueRequests we want to count
     *   }
     * })
    **/
    count<T extends RescueRequestCountArgs>(
      args?: Subset<T, RescueRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RescueRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RescueRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescueRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RescueRequestAggregateArgs>(args: Subset<T, RescueRequestAggregateArgs>): Prisma.PrismaPromise<GetRescueRequestAggregateType<T>>

    /**
     * Group by RescueRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RescueRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RescueRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RescueRequestGroupByArgs['orderBy'] }
        : { orderBy?: RescueRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RescueRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRescueRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RescueRequest model
   */
  readonly fields: RescueRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RescueRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RescueRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelter<T extends RescueRequest$shelterArgs<ExtArgs> = {}>(args?: Subset<T, RescueRequest$shelterArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends RescueRequest$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, RescueRequest$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RescueRequest model
   */
  interface RescueRequestFieldRefs {
    readonly id: FieldRef<"RescueRequest", 'String'>
    readonly shelterId: FieldRef<"RescueRequest", 'String'>
    readonly location: FieldRef<"RescueRequest", 'String'>
    readonly contactPhone: FieldRef<"RescueRequest", 'String'>
    readonly peopleCount: FieldRef<"RescueRequest", 'Int'>
    readonly urgency: FieldRef<"RescueRequest", 'UrgencyLevel'>
    readonly status: FieldRef<"RescueRequest", 'RescueStatus'>
    readonly assignedToId: FieldRef<"RescueRequest", 'String'>
    readonly description: FieldRef<"RescueRequest", 'String'>
    readonly isDeleted: FieldRef<"RescueRequest", 'Boolean'>
    readonly createdAt: FieldRef<"RescueRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"RescueRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RescueRequest findUnique
   */
  export type RescueRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * Filter, which RescueRequest to fetch.
     */
    where: RescueRequestWhereUniqueInput
  }

  /**
   * RescueRequest findUniqueOrThrow
   */
  export type RescueRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * Filter, which RescueRequest to fetch.
     */
    where: RescueRequestWhereUniqueInput
  }

  /**
   * RescueRequest findFirst
   */
  export type RescueRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * Filter, which RescueRequest to fetch.
     */
    where?: RescueRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RescueRequests to fetch.
     */
    orderBy?: RescueRequestOrderByWithRelationInput | RescueRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RescueRequests.
     */
    cursor?: RescueRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RescueRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RescueRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RescueRequests.
     */
    distinct?: RescueRequestScalarFieldEnum | RescueRequestScalarFieldEnum[]
  }

  /**
   * RescueRequest findFirstOrThrow
   */
  export type RescueRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * Filter, which RescueRequest to fetch.
     */
    where?: RescueRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RescueRequests to fetch.
     */
    orderBy?: RescueRequestOrderByWithRelationInput | RescueRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RescueRequests.
     */
    cursor?: RescueRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RescueRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RescueRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RescueRequests.
     */
    distinct?: RescueRequestScalarFieldEnum | RescueRequestScalarFieldEnum[]
  }

  /**
   * RescueRequest findMany
   */
  export type RescueRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * Filter, which RescueRequests to fetch.
     */
    where?: RescueRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RescueRequests to fetch.
     */
    orderBy?: RescueRequestOrderByWithRelationInput | RescueRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RescueRequests.
     */
    cursor?: RescueRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RescueRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RescueRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RescueRequests.
     */
    distinct?: RescueRequestScalarFieldEnum | RescueRequestScalarFieldEnum[]
  }

  /**
   * RescueRequest create
   */
  export type RescueRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a RescueRequest.
     */
    data: XOR<RescueRequestCreateInput, RescueRequestUncheckedCreateInput>
  }

  /**
   * RescueRequest createMany
   */
  export type RescueRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RescueRequests.
     */
    data: RescueRequestCreateManyInput | RescueRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RescueRequest createManyAndReturn
   */
  export type RescueRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * The data used to create many RescueRequests.
     */
    data: RescueRequestCreateManyInput | RescueRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RescueRequest update
   */
  export type RescueRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a RescueRequest.
     */
    data: XOR<RescueRequestUpdateInput, RescueRequestUncheckedUpdateInput>
    /**
     * Choose, which RescueRequest to update.
     */
    where: RescueRequestWhereUniqueInput
  }

  /**
   * RescueRequest updateMany
   */
  export type RescueRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RescueRequests.
     */
    data: XOR<RescueRequestUpdateManyMutationInput, RescueRequestUncheckedUpdateManyInput>
    /**
     * Filter which RescueRequests to update
     */
    where?: RescueRequestWhereInput
    /**
     * Limit how many RescueRequests to update.
     */
    limit?: number
  }

  /**
   * RescueRequest updateManyAndReturn
   */
  export type RescueRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * The data used to update RescueRequests.
     */
    data: XOR<RescueRequestUpdateManyMutationInput, RescueRequestUncheckedUpdateManyInput>
    /**
     * Filter which RescueRequests to update
     */
    where?: RescueRequestWhereInput
    /**
     * Limit how many RescueRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RescueRequest upsert
   */
  export type RescueRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the RescueRequest to update in case it exists.
     */
    where: RescueRequestWhereUniqueInput
    /**
     * In case the RescueRequest found by the `where` argument doesn't exist, create a new RescueRequest with this data.
     */
    create: XOR<RescueRequestCreateInput, RescueRequestUncheckedCreateInput>
    /**
     * In case the RescueRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RescueRequestUpdateInput, RescueRequestUncheckedUpdateInput>
  }

  /**
   * RescueRequest delete
   */
  export type RescueRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
    /**
     * Filter which RescueRequest to delete.
     */
    where: RescueRequestWhereUniqueInput
  }

  /**
   * RescueRequest deleteMany
   */
  export type RescueRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RescueRequests to delete
     */
    where?: RescueRequestWhereInput
    /**
     * Limit how many RescueRequests to delete.
     */
    limit?: number
  }

  /**
   * RescueRequest.shelter
   */
  export type RescueRequest$shelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    where?: ShelterWhereInput
  }

  /**
   * RescueRequest.assignedTo
   */
  export type RescueRequest$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RescueRequest without action
   */
  export type RescueRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RescueRequest
     */
    select?: RescueRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RescueRequest
     */
    omit?: RescueRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RescueRequestInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    amount: number | null
  }

  export type DonationSumAggregateOutputType = {
    amount: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: string | null
    donorId: string | null
    amount: number | null
    currency: string | null
    transactionId: string | null
    paymentGateway: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    id: string | null
    donorId: string | null
    amount: number | null
    currency: string | null
    transactionId: string | null
    paymentGateway: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    donorId: number
    amount: number
    currency: number
    transactionId: number
    paymentGateway: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    amount?: true
  }

  export type DonationSumAggregateInputType = {
    amount?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    donorId?: true
    amount?: true
    currency?: true
    transactionId?: true
    paymentGateway?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    donorId?: true
    amount?: true
    currency?: true
    transactionId?: true
    paymentGateway?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    donorId?: true
    amount?: true
    currency?: true
    transactionId?: true
    paymentGateway?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: string
    donorId: string
    amount: number
    currency: string
    transactionId: string
    paymentGateway: string
    status: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    amount?: boolean
    currency?: boolean
    transactionId?: boolean
    paymentGateway?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    amount?: boolean
    currency?: boolean
    transactionId?: boolean
    paymentGateway?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    amount?: boolean
    currency?: boolean
    transactionId?: boolean
    paymentGateway?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    donorId?: boolean
    amount?: boolean
    currency?: boolean
    transactionId?: boolean
    paymentGateway?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donorId" | "amount" | "currency" | "transactionId" | "paymentGateway" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      donor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donorId: string
      amount: number
      currency: string
      transactionId: string
      paymentGateway: string
      status: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'String'>
    readonly donorId: FieldRef<"Donation", 'String'>
    readonly amount: FieldRef<"Donation", 'Float'>
    readonly currency: FieldRef<"Donation", 'String'>
    readonly transactionId: FieldRef<"Donation", 'String'>
    readonly paymentGateway: FieldRef<"Donation", 'String'>
    readonly status: FieldRef<"Donation", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    role: 'role',
    isVerified: 'isVerified',
    imageUrl: 'imageUrl',
    imagePublicId: 'imagePublicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DonorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonorScalarFieldEnum = (typeof DonorScalarFieldEnum)[keyof typeof DonorScalarFieldEnum]


  export const ShelterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    district: 'district',
    upazila: 'upazila',
    address: 'address',
    capacity: 'capacity',
    currentPeople: 'currentPeople',
    contactPerson: 'contactPerson',
    contactPhone: 'contactPhone',
    coordinatorId: 'coordinatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    images: 'images'
  };

  export type ShelterScalarFieldEnum = (typeof ShelterScalarFieldEnum)[keyof typeof ShelterScalarFieldEnum]


  export const ReliefNeedScalarFieldEnum: {
    id: 'id',
    shelterId: 'shelterId',
    itemCategory: 'itemCategory',
    itemName: 'itemName',
    quantity: 'quantity',
    fulfilled: 'fulfilled',
    urgency: 'urgency',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReliefNeedScalarFieldEnum = (typeof ReliefNeedScalarFieldEnum)[keyof typeof ReliefNeedScalarFieldEnum]


  export const RescueRequestScalarFieldEnum: {
    id: 'id',
    shelterId: 'shelterId',
    location: 'location',
    contactPhone: 'contactPhone',
    peopleCount: 'peopleCount',
    urgency: 'urgency',
    status: 'status',
    assignedToId: 'assignedToId',
    description: 'description',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RescueRequestScalarFieldEnum = (typeof RescueRequestScalarFieldEnum)[keyof typeof RescueRequestScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    donorId: 'donorId',
    amount: 'amount',
    currency: 'currency',
    transactionId: 'transactionId',
    paymentGateway: 'paymentGateway',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UrgencyLevel'
   */
  export type EnumUrgencyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrgencyLevel'>
    


  /**
   * Reference to a field of type 'UrgencyLevel[]'
   */
  export type ListEnumUrgencyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrgencyLevel[]'>
    


  /**
   * Reference to a field of type 'ReliefStatus'
   */
  export type EnumReliefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReliefStatus'>
    


  /**
   * Reference to a field of type 'ReliefStatus[]'
   */
  export type ListEnumReliefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReliefStatus[]'>
    


  /**
   * Reference to a field of type 'RescueStatus'
   */
  export type EnumRescueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RescueStatus'>
    


  /**
   * Reference to a field of type 'RescueStatus[]'
   */
  export type ListEnumRescueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RescueStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    imageUrl?: StringNullableFilter<"User"> | string | null
    imagePublicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    donor?: XOR<DonorNullableScalarRelationFilter, DonorWhereInput> | null
    shelters?: ShelterListRelationFilter
    rescueAssigned?: RescueRequestListRelationFilter
    donations?: DonationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imagePublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donor?: DonorOrderByWithRelationInput
    shelters?: ShelterOrderByRelationAggregateInput
    rescueAssigned?: RescueRequestOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    imageUrl?: StringNullableFilter<"User"> | string | null
    imagePublicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    donor?: XOR<DonorNullableScalarRelationFilter, DonorWhereInput> | null
    shelters?: ShelterListRelationFilter
    rescueAssigned?: RescueRequestListRelationFilter
    donations?: DonationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imagePublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    imagePublicId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DonorWhereInput = {
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    id?: StringFilter<"Donor"> | string
    userId?: StringFilter<"Donor"> | string
    name?: StringFilter<"Donor"> | string
    email?: StringFilter<"Donor"> | string
    phoneNumber?: StringFilter<"Donor"> | string
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DonorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    email?: string
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    name?: StringFilter<"Donor"> | string
    phoneNumber?: StringFilter<"Donor"> | string
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "email">

  export type DonorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonorCountOrderByAggregateInput
    _max?: DonorMaxOrderByAggregateInput
    _min?: DonorMinOrderByAggregateInput
  }

  export type DonorScalarWhereWithAggregatesInput = {
    AND?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    OR?: DonorScalarWhereWithAggregatesInput[]
    NOT?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donor"> | string
    userId?: StringWithAggregatesFilter<"Donor"> | string
    name?: StringWithAggregatesFilter<"Donor"> | string
    email?: StringWithAggregatesFilter<"Donor"> | string
    phoneNumber?: StringWithAggregatesFilter<"Donor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
  }

  export type ShelterWhereInput = {
    AND?: ShelterWhereInput | ShelterWhereInput[]
    OR?: ShelterWhereInput[]
    NOT?: ShelterWhereInput | ShelterWhereInput[]
    id?: StringFilter<"Shelter"> | string
    name?: StringFilter<"Shelter"> | string
    district?: StringFilter<"Shelter"> | string
    upazila?: StringFilter<"Shelter"> | string
    address?: StringFilter<"Shelter"> | string
    capacity?: IntFilter<"Shelter"> | number
    currentPeople?: IntFilter<"Shelter"> | number
    contactPerson?: StringFilter<"Shelter"> | string
    contactPhone?: StringFilter<"Shelter"> | string
    coordinatorId?: StringFilter<"Shelter"> | string
    createdAt?: DateTimeFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeFilter<"Shelter"> | Date | string
    images?: StringNullableListFilter<"Shelter">
    coordinator?: XOR<UserScalarRelationFilter, UserWhereInput>
    reliefNeeds?: ReliefNeedListRelationFilter
    rescueRequests?: RescueRequestListRelationFilter
  }

  export type ShelterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    upazila?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    currentPeople?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    coordinatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: SortOrder
    coordinator?: UserOrderByWithRelationInput
    reliefNeeds?: ReliefNeedOrderByRelationAggregateInput
    rescueRequests?: RescueRequestOrderByRelationAggregateInput
  }

  export type ShelterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShelterWhereInput | ShelterWhereInput[]
    OR?: ShelterWhereInput[]
    NOT?: ShelterWhereInput | ShelterWhereInput[]
    name?: StringFilter<"Shelter"> | string
    district?: StringFilter<"Shelter"> | string
    upazila?: StringFilter<"Shelter"> | string
    address?: StringFilter<"Shelter"> | string
    capacity?: IntFilter<"Shelter"> | number
    currentPeople?: IntFilter<"Shelter"> | number
    contactPerson?: StringFilter<"Shelter"> | string
    contactPhone?: StringFilter<"Shelter"> | string
    coordinatorId?: StringFilter<"Shelter"> | string
    createdAt?: DateTimeFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeFilter<"Shelter"> | Date | string
    images?: StringNullableListFilter<"Shelter">
    coordinator?: XOR<UserScalarRelationFilter, UserWhereInput>
    reliefNeeds?: ReliefNeedListRelationFilter
    rescueRequests?: RescueRequestListRelationFilter
  }, "id">

  export type ShelterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    upazila?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    currentPeople?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    coordinatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: SortOrder
    _count?: ShelterCountOrderByAggregateInput
    _avg?: ShelterAvgOrderByAggregateInput
    _max?: ShelterMaxOrderByAggregateInput
    _min?: ShelterMinOrderByAggregateInput
    _sum?: ShelterSumOrderByAggregateInput
  }

  export type ShelterScalarWhereWithAggregatesInput = {
    AND?: ShelterScalarWhereWithAggregatesInput | ShelterScalarWhereWithAggregatesInput[]
    OR?: ShelterScalarWhereWithAggregatesInput[]
    NOT?: ShelterScalarWhereWithAggregatesInput | ShelterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shelter"> | string
    name?: StringWithAggregatesFilter<"Shelter"> | string
    district?: StringWithAggregatesFilter<"Shelter"> | string
    upazila?: StringWithAggregatesFilter<"Shelter"> | string
    address?: StringWithAggregatesFilter<"Shelter"> | string
    capacity?: IntWithAggregatesFilter<"Shelter"> | number
    currentPeople?: IntWithAggregatesFilter<"Shelter"> | number
    contactPerson?: StringWithAggregatesFilter<"Shelter"> | string
    contactPhone?: StringWithAggregatesFilter<"Shelter"> | string
    coordinatorId?: StringWithAggregatesFilter<"Shelter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shelter"> | Date | string
    images?: StringNullableListFilter<"Shelter">
  }

  export type ReliefNeedWhereInput = {
    AND?: ReliefNeedWhereInput | ReliefNeedWhereInput[]
    OR?: ReliefNeedWhereInput[]
    NOT?: ReliefNeedWhereInput | ReliefNeedWhereInput[]
    id?: StringFilter<"ReliefNeed"> | string
    shelterId?: StringFilter<"ReliefNeed"> | string
    itemCategory?: StringFilter<"ReliefNeed"> | string
    itemName?: StringFilter<"ReliefNeed"> | string
    quantity?: IntFilter<"ReliefNeed"> | number
    fulfilled?: IntFilter<"ReliefNeed"> | number
    urgency?: EnumUrgencyLevelFilter<"ReliefNeed"> | $Enums.UrgencyLevel
    status?: EnumReliefStatusFilter<"ReliefNeed"> | $Enums.ReliefStatus
    createdAt?: DateTimeFilter<"ReliefNeed"> | Date | string
    updatedAt?: DateTimeFilter<"ReliefNeed"> | Date | string
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
  }

  export type ReliefNeedOrderByWithRelationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    itemCategory?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    fulfilled?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shelter?: ShelterOrderByWithRelationInput
  }

  export type ReliefNeedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReliefNeedWhereInput | ReliefNeedWhereInput[]
    OR?: ReliefNeedWhereInput[]
    NOT?: ReliefNeedWhereInput | ReliefNeedWhereInput[]
    shelterId?: StringFilter<"ReliefNeed"> | string
    itemCategory?: StringFilter<"ReliefNeed"> | string
    itemName?: StringFilter<"ReliefNeed"> | string
    quantity?: IntFilter<"ReliefNeed"> | number
    fulfilled?: IntFilter<"ReliefNeed"> | number
    urgency?: EnumUrgencyLevelFilter<"ReliefNeed"> | $Enums.UrgencyLevel
    status?: EnumReliefStatusFilter<"ReliefNeed"> | $Enums.ReliefStatus
    createdAt?: DateTimeFilter<"ReliefNeed"> | Date | string
    updatedAt?: DateTimeFilter<"ReliefNeed"> | Date | string
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
  }, "id">

  export type ReliefNeedOrderByWithAggregationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    itemCategory?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    fulfilled?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReliefNeedCountOrderByAggregateInput
    _avg?: ReliefNeedAvgOrderByAggregateInput
    _max?: ReliefNeedMaxOrderByAggregateInput
    _min?: ReliefNeedMinOrderByAggregateInput
    _sum?: ReliefNeedSumOrderByAggregateInput
  }

  export type ReliefNeedScalarWhereWithAggregatesInput = {
    AND?: ReliefNeedScalarWhereWithAggregatesInput | ReliefNeedScalarWhereWithAggregatesInput[]
    OR?: ReliefNeedScalarWhereWithAggregatesInput[]
    NOT?: ReliefNeedScalarWhereWithAggregatesInput | ReliefNeedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReliefNeed"> | string
    shelterId?: StringWithAggregatesFilter<"ReliefNeed"> | string
    itemCategory?: StringWithAggregatesFilter<"ReliefNeed"> | string
    itemName?: StringWithAggregatesFilter<"ReliefNeed"> | string
    quantity?: IntWithAggregatesFilter<"ReliefNeed"> | number
    fulfilled?: IntWithAggregatesFilter<"ReliefNeed"> | number
    urgency?: EnumUrgencyLevelWithAggregatesFilter<"ReliefNeed"> | $Enums.UrgencyLevel
    status?: EnumReliefStatusWithAggregatesFilter<"ReliefNeed"> | $Enums.ReliefStatus
    createdAt?: DateTimeWithAggregatesFilter<"ReliefNeed"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReliefNeed"> | Date | string
  }

  export type RescueRequestWhereInput = {
    AND?: RescueRequestWhereInput | RescueRequestWhereInput[]
    OR?: RescueRequestWhereInput[]
    NOT?: RescueRequestWhereInput | RescueRequestWhereInput[]
    id?: StringFilter<"RescueRequest"> | string
    shelterId?: StringNullableFilter<"RescueRequest"> | string | null
    location?: StringFilter<"RescueRequest"> | string
    contactPhone?: StringFilter<"RescueRequest"> | string
    peopleCount?: IntFilter<"RescueRequest"> | number
    urgency?: EnumUrgencyLevelFilter<"RescueRequest"> | $Enums.UrgencyLevel
    status?: EnumRescueStatusFilter<"RescueRequest"> | $Enums.RescueStatus
    assignedToId?: StringNullableFilter<"RescueRequest"> | string | null
    description?: StringNullableFilter<"RescueRequest"> | string | null
    isDeleted?: BoolFilter<"RescueRequest"> | boolean
    createdAt?: DateTimeFilter<"RescueRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RescueRequest"> | Date | string
    shelter?: XOR<ShelterNullableScalarRelationFilter, ShelterWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RescueRequestOrderByWithRelationInput = {
    id?: SortOrder
    shelterId?: SortOrderInput | SortOrder
    location?: SortOrder
    contactPhone?: SortOrder
    peopleCount?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shelter?: ShelterOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
  }

  export type RescueRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RescueRequestWhereInput | RescueRequestWhereInput[]
    OR?: RescueRequestWhereInput[]
    NOT?: RescueRequestWhereInput | RescueRequestWhereInput[]
    shelterId?: StringNullableFilter<"RescueRequest"> | string | null
    location?: StringFilter<"RescueRequest"> | string
    contactPhone?: StringFilter<"RescueRequest"> | string
    peopleCount?: IntFilter<"RescueRequest"> | number
    urgency?: EnumUrgencyLevelFilter<"RescueRequest"> | $Enums.UrgencyLevel
    status?: EnumRescueStatusFilter<"RescueRequest"> | $Enums.RescueStatus
    assignedToId?: StringNullableFilter<"RescueRequest"> | string | null
    description?: StringNullableFilter<"RescueRequest"> | string | null
    isDeleted?: BoolFilter<"RescueRequest"> | boolean
    createdAt?: DateTimeFilter<"RescueRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RescueRequest"> | Date | string
    shelter?: XOR<ShelterNullableScalarRelationFilter, ShelterWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RescueRequestOrderByWithAggregationInput = {
    id?: SortOrder
    shelterId?: SortOrderInput | SortOrder
    location?: SortOrder
    contactPhone?: SortOrder
    peopleCount?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RescueRequestCountOrderByAggregateInput
    _avg?: RescueRequestAvgOrderByAggregateInput
    _max?: RescueRequestMaxOrderByAggregateInput
    _min?: RescueRequestMinOrderByAggregateInput
    _sum?: RescueRequestSumOrderByAggregateInput
  }

  export type RescueRequestScalarWhereWithAggregatesInput = {
    AND?: RescueRequestScalarWhereWithAggregatesInput | RescueRequestScalarWhereWithAggregatesInput[]
    OR?: RescueRequestScalarWhereWithAggregatesInput[]
    NOT?: RescueRequestScalarWhereWithAggregatesInput | RescueRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RescueRequest"> | string
    shelterId?: StringNullableWithAggregatesFilter<"RescueRequest"> | string | null
    location?: StringWithAggregatesFilter<"RescueRequest"> | string
    contactPhone?: StringWithAggregatesFilter<"RescueRequest"> | string
    peopleCount?: IntWithAggregatesFilter<"RescueRequest"> | number
    urgency?: EnumUrgencyLevelWithAggregatesFilter<"RescueRequest"> | $Enums.UrgencyLevel
    status?: EnumRescueStatusWithAggregatesFilter<"RescueRequest"> | $Enums.RescueStatus
    assignedToId?: StringNullableWithAggregatesFilter<"RescueRequest"> | string | null
    description?: StringNullableWithAggregatesFilter<"RescueRequest"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"RescueRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RescueRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RescueRequest"> | Date | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    amount?: FloatFilter<"Donation"> | number
    currency?: StringFilter<"Donation"> | string
    transactionId?: StringFilter<"Donation"> | string
    paymentGateway?: StringFilter<"Donation"> | string
    status?: EnumPaymentStatusFilter<"Donation"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionId?: SortOrder
    paymentGateway?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donor?: UserOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    donorId?: StringFilter<"Donation"> | string
    amount?: FloatFilter<"Donation"> | number
    currency?: StringFilter<"Donation"> | string
    paymentGateway?: StringFilter<"Donation"> | string
    status?: EnumPaymentStatusFilter<"Donation"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "transactionId">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionId?: SortOrder
    paymentGateway?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donation"> | string
    donorId?: StringWithAggregatesFilter<"Donation"> | string
    amount?: FloatWithAggregatesFilter<"Donation"> | number
    currency?: StringWithAggregatesFilter<"Donation"> | string
    transactionId?: StringWithAggregatesFilter<"Donation"> | string
    paymentGateway?: StringWithAggregatesFilter<"Donation"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Donation"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorCreateNestedOneWithoutUserInput
    shelters?: ShelterCreateNestedManyWithoutCoordinatorInput
    rescueAssigned?: RescueRequestCreateNestedManyWithoutAssignedToInput
    donations?: DonationCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorUncheckedCreateNestedOneWithoutUserInput
    shelters?: ShelterUncheckedCreateNestedManyWithoutCoordinatorInput
    rescueAssigned?: RescueRequestUncheckedCreateNestedManyWithoutAssignedToInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneWithoutUserNestedInput
    shelters?: ShelterUpdateManyWithoutCoordinatorNestedInput
    rescueAssigned?: RescueRequestUpdateManyWithoutAssignedToNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUncheckedUpdateOneWithoutUserNestedInput
    shelters?: ShelterUncheckedUpdateManyWithoutCoordinatorNestedInput
    rescueAssigned?: RescueRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDonorInput
  }

  export type DonorUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDonorNestedInput
  }

  export type DonorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorCreateManyInput = {
    id?: string
    userId: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterCreateInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
    coordinator: UserCreateNestedOneWithoutSheltersInput
    reliefNeeds?: ReliefNeedCreateNestedManyWithoutShelterInput
    rescueRequests?: RescueRequestCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    coordinatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
    reliefNeeds?: ReliefNeedUncheckedCreateNestedManyWithoutShelterInput
    rescueRequests?: RescueRequestUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
    coordinator?: UserUpdateOneRequiredWithoutSheltersNestedInput
    reliefNeeds?: ReliefNeedUpdateManyWithoutShelterNestedInput
    rescueRequests?: RescueRequestUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    coordinatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
    reliefNeeds?: ReliefNeedUncheckedUpdateManyWithoutShelterNestedInput
    rescueRequests?: RescueRequestUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type ShelterCreateManyInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    coordinatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
  }

  export type ShelterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
  }

  export type ShelterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    coordinatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
  }

  export type ReliefNeedCreateInput = {
    id?: string
    itemCategory: string
    itemName: string
    quantity: number
    fulfilled?: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.ReliefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutReliefNeedsInput
  }

  export type ReliefNeedUncheckedCreateInput = {
    id?: string
    shelterId: string
    itemCategory: string
    itemName: string
    quantity: number
    fulfilled?: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.ReliefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReliefNeedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fulfilled?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumReliefStatusFieldUpdateOperationsInput | $Enums.ReliefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutReliefNeedsNestedInput
  }

  export type ReliefNeedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fulfilled?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumReliefStatusFieldUpdateOperationsInput | $Enums.ReliefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReliefNeedCreateManyInput = {
    id?: string
    shelterId: string
    itemCategory: string
    itemName: string
    quantity: number
    fulfilled?: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.ReliefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReliefNeedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fulfilled?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumReliefStatusFieldUpdateOperationsInput | $Enums.ReliefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReliefNeedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fulfilled?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumReliefStatusFieldUpdateOperationsInput | $Enums.ReliefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescueRequestCreateInput = {
    id?: string
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter?: ShelterCreateNestedOneWithoutRescueRequestsInput
    assignedTo?: UserCreateNestedOneWithoutRescueAssignedInput
  }

  export type RescueRequestUncheckedCreateInput = {
    id?: string
    shelterId?: string | null
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    assignedToId?: string | null
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescueRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneWithoutRescueRequestsNestedInput
    assignedTo?: UserUpdateOneWithoutRescueAssignedNestedInput
  }

  export type RescueRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescueRequestCreateManyInput = {
    id?: string
    shelterId?: string | null
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    assignedToId?: string | null
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescueRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescueRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateInput = {
    id?: string
    amount: number
    currency?: string
    transactionId: string
    paymentGateway: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: UserCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateInput = {
    id?: string
    donorId: string
    amount: number
    currency?: string
    transactionId: string
    paymentGateway: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentGateway?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: UserUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentGateway?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyInput = {
    id?: string
    donorId: string
    amount: number
    currency?: string
    transactionId: string
    paymentGateway: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentGateway?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentGateway?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DonorNullableScalarRelationFilter = {
    is?: DonorWhereInput | null
    isNot?: DonorWhereInput | null
  }

  export type ShelterListRelationFilter = {
    every?: ShelterWhereInput
    some?: ShelterWhereInput
    none?: ShelterWhereInput
  }

  export type RescueRequestListRelationFilter = {
    every?: RescueRequestWhereInput
    some?: RescueRequestWhereInput
    none?: RescueRequestWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShelterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RescueRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DonorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ReliefNeedListRelationFilter = {
    every?: ReliefNeedWhereInput
    some?: ReliefNeedWhereInput
    none?: ReliefNeedWhereInput
  }

  export type ReliefNeedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShelterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    upazila?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    currentPeople?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    coordinatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: SortOrder
  }

  export type ShelterAvgOrderByAggregateInput = {
    capacity?: SortOrder
    currentPeople?: SortOrder
  }

  export type ShelterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    upazila?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    currentPeople?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    coordinatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShelterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    upazila?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    currentPeople?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    coordinatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShelterSumOrderByAggregateInput = {
    capacity?: SortOrder
    currentPeople?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUrgencyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyLevelFilter<$PrismaModel> | $Enums.UrgencyLevel
  }

  export type EnumReliefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReliefStatus | EnumReliefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReliefStatus[] | ListEnumReliefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReliefStatus[] | ListEnumReliefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReliefStatusFilter<$PrismaModel> | $Enums.ReliefStatus
  }

  export type ShelterScalarRelationFilter = {
    is?: ShelterWhereInput
    isNot?: ShelterWhereInput
  }

  export type ReliefNeedCountOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    itemCategory?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    fulfilled?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReliefNeedAvgOrderByAggregateInput = {
    quantity?: SortOrder
    fulfilled?: SortOrder
  }

  export type ReliefNeedMaxOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    itemCategory?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    fulfilled?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReliefNeedMinOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    itemCategory?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    fulfilled?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReliefNeedSumOrderByAggregateInput = {
    quantity?: SortOrder
    fulfilled?: SortOrder
  }

  export type EnumUrgencyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel> | $Enums.UrgencyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyLevelFilter<$PrismaModel>
    _max?: NestedEnumUrgencyLevelFilter<$PrismaModel>
  }

  export type EnumReliefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReliefStatus | EnumReliefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReliefStatus[] | ListEnumReliefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReliefStatus[] | ListEnumReliefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReliefStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReliefStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReliefStatusFilter<$PrismaModel>
    _max?: NestedEnumReliefStatusFilter<$PrismaModel>
  }

  export type EnumRescueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RescueStatus | EnumRescueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RescueStatus[] | ListEnumRescueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RescueStatus[] | ListEnumRescueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRescueStatusFilter<$PrismaModel> | $Enums.RescueStatus
  }

  export type ShelterNullableScalarRelationFilter = {
    is?: ShelterWhereInput | null
    isNot?: ShelterWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RescueRequestCountOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    location?: SortOrder
    contactPhone?: SortOrder
    peopleCount?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RescueRequestAvgOrderByAggregateInput = {
    peopleCount?: SortOrder
  }

  export type RescueRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    location?: SortOrder
    contactPhone?: SortOrder
    peopleCount?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RescueRequestMinOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    location?: SortOrder
    contactPhone?: SortOrder
    peopleCount?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RescueRequestSumOrderByAggregateInput = {
    peopleCount?: SortOrder
  }

  export type EnumRescueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RescueStatus | EnumRescueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RescueStatus[] | ListEnumRescueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RescueStatus[] | ListEnumRescueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRescueStatusWithAggregatesFilter<$PrismaModel> | $Enums.RescueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRescueStatusFilter<$PrismaModel>
    _max?: NestedEnumRescueStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionId?: SortOrder
    paymentGateway?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionId?: SortOrder
    paymentGateway?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionId?: SortOrder
    paymentGateway?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DonorCreateNestedOneWithoutUserInput = {
    create?: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DonorCreateOrConnectWithoutUserInput
    connect?: DonorWhereUniqueInput
  }

  export type ShelterCreateNestedManyWithoutCoordinatorInput = {
    create?: XOR<ShelterCreateWithoutCoordinatorInput, ShelterUncheckedCreateWithoutCoordinatorInput> | ShelterCreateWithoutCoordinatorInput[] | ShelterUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: ShelterCreateOrConnectWithoutCoordinatorInput | ShelterCreateOrConnectWithoutCoordinatorInput[]
    createMany?: ShelterCreateManyCoordinatorInputEnvelope
    connect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
  }

  export type RescueRequestCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<RescueRequestCreateWithoutAssignedToInput, RescueRequestUncheckedCreateWithoutAssignedToInput> | RescueRequestCreateWithoutAssignedToInput[] | RescueRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: RescueRequestCreateOrConnectWithoutAssignedToInput | RescueRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: RescueRequestCreateManyAssignedToInputEnvelope
    connect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DonorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DonorCreateOrConnectWithoutUserInput
    connect?: DonorWhereUniqueInput
  }

  export type ShelterUncheckedCreateNestedManyWithoutCoordinatorInput = {
    create?: XOR<ShelterCreateWithoutCoordinatorInput, ShelterUncheckedCreateWithoutCoordinatorInput> | ShelterCreateWithoutCoordinatorInput[] | ShelterUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: ShelterCreateOrConnectWithoutCoordinatorInput | ShelterCreateOrConnectWithoutCoordinatorInput[]
    createMany?: ShelterCreateManyCoordinatorInputEnvelope
    connect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
  }

  export type RescueRequestUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<RescueRequestCreateWithoutAssignedToInput, RescueRequestUncheckedCreateWithoutAssignedToInput> | RescueRequestCreateWithoutAssignedToInput[] | RescueRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: RescueRequestCreateOrConnectWithoutAssignedToInput | RescueRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: RescueRequestCreateManyAssignedToInputEnvelope
    connect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DonorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DonorCreateOrConnectWithoutUserInput
    upsert?: DonorUpsertWithoutUserInput
    disconnect?: DonorWhereInput | boolean
    delete?: DonorWhereInput | boolean
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutUserInput, DonorUpdateWithoutUserInput>, DonorUncheckedUpdateWithoutUserInput>
  }

  export type ShelterUpdateManyWithoutCoordinatorNestedInput = {
    create?: XOR<ShelterCreateWithoutCoordinatorInput, ShelterUncheckedCreateWithoutCoordinatorInput> | ShelterCreateWithoutCoordinatorInput[] | ShelterUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: ShelterCreateOrConnectWithoutCoordinatorInput | ShelterCreateOrConnectWithoutCoordinatorInput[]
    upsert?: ShelterUpsertWithWhereUniqueWithoutCoordinatorInput | ShelterUpsertWithWhereUniqueWithoutCoordinatorInput[]
    createMany?: ShelterCreateManyCoordinatorInputEnvelope
    set?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    disconnect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    delete?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    connect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    update?: ShelterUpdateWithWhereUniqueWithoutCoordinatorInput | ShelterUpdateWithWhereUniqueWithoutCoordinatorInput[]
    updateMany?: ShelterUpdateManyWithWhereWithoutCoordinatorInput | ShelterUpdateManyWithWhereWithoutCoordinatorInput[]
    deleteMany?: ShelterScalarWhereInput | ShelterScalarWhereInput[]
  }

  export type RescueRequestUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<RescueRequestCreateWithoutAssignedToInput, RescueRequestUncheckedCreateWithoutAssignedToInput> | RescueRequestCreateWithoutAssignedToInput[] | RescueRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: RescueRequestCreateOrConnectWithoutAssignedToInput | RescueRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: RescueRequestUpsertWithWhereUniqueWithoutAssignedToInput | RescueRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: RescueRequestCreateManyAssignedToInputEnvelope
    set?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    disconnect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    delete?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    connect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    update?: RescueRequestUpdateWithWhereUniqueWithoutAssignedToInput | RescueRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: RescueRequestUpdateManyWithWhereWithoutAssignedToInput | RescueRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: RescueRequestScalarWhereInput | RescueRequestScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type DonorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DonorCreateOrConnectWithoutUserInput
    upsert?: DonorUpsertWithoutUserInput
    disconnect?: DonorWhereInput | boolean
    delete?: DonorWhereInput | boolean
    connect?: DonorWhereUniqueInput
    update?: XOR<XOR<DonorUpdateToOneWithWhereWithoutUserInput, DonorUpdateWithoutUserInput>, DonorUncheckedUpdateWithoutUserInput>
  }

  export type ShelterUncheckedUpdateManyWithoutCoordinatorNestedInput = {
    create?: XOR<ShelterCreateWithoutCoordinatorInput, ShelterUncheckedCreateWithoutCoordinatorInput> | ShelterCreateWithoutCoordinatorInput[] | ShelterUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: ShelterCreateOrConnectWithoutCoordinatorInput | ShelterCreateOrConnectWithoutCoordinatorInput[]
    upsert?: ShelterUpsertWithWhereUniqueWithoutCoordinatorInput | ShelterUpsertWithWhereUniqueWithoutCoordinatorInput[]
    createMany?: ShelterCreateManyCoordinatorInputEnvelope
    set?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    disconnect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    delete?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    connect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    update?: ShelterUpdateWithWhereUniqueWithoutCoordinatorInput | ShelterUpdateWithWhereUniqueWithoutCoordinatorInput[]
    updateMany?: ShelterUpdateManyWithWhereWithoutCoordinatorInput | ShelterUpdateManyWithWhereWithoutCoordinatorInput[]
    deleteMany?: ShelterScalarWhereInput | ShelterScalarWhereInput[]
  }

  export type RescueRequestUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<RescueRequestCreateWithoutAssignedToInput, RescueRequestUncheckedCreateWithoutAssignedToInput> | RescueRequestCreateWithoutAssignedToInput[] | RescueRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: RescueRequestCreateOrConnectWithoutAssignedToInput | RescueRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: RescueRequestUpsertWithWhereUniqueWithoutAssignedToInput | RescueRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: RescueRequestCreateManyAssignedToInputEnvelope
    set?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    disconnect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    delete?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    connect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    update?: RescueRequestUpdateWithWhereUniqueWithoutAssignedToInput | RescueRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: RescueRequestUpdateManyWithWhereWithoutAssignedToInput | RescueRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: RescueRequestScalarWhereInput | RescueRequestScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDonorInput = {
    create?: XOR<UserCreateWithoutDonorInput, UserUncheckedCreateWithoutDonorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonorInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDonorNestedInput = {
    create?: XOR<UserCreateWithoutDonorInput, UserUncheckedCreateWithoutDonorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonorInput
    upsert?: UserUpsertWithoutDonorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonorInput, UserUpdateWithoutDonorInput>, UserUncheckedUpdateWithoutDonorInput>
  }

  export type ShelterCreateimagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSheltersInput = {
    create?: XOR<UserCreateWithoutSheltersInput, UserUncheckedCreateWithoutSheltersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheltersInput
    connect?: UserWhereUniqueInput
  }

  export type ReliefNeedCreateNestedManyWithoutShelterInput = {
    create?: XOR<ReliefNeedCreateWithoutShelterInput, ReliefNeedUncheckedCreateWithoutShelterInput> | ReliefNeedCreateWithoutShelterInput[] | ReliefNeedUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ReliefNeedCreateOrConnectWithoutShelterInput | ReliefNeedCreateOrConnectWithoutShelterInput[]
    createMany?: ReliefNeedCreateManyShelterInputEnvelope
    connect?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
  }

  export type RescueRequestCreateNestedManyWithoutShelterInput = {
    create?: XOR<RescueRequestCreateWithoutShelterInput, RescueRequestUncheckedCreateWithoutShelterInput> | RescueRequestCreateWithoutShelterInput[] | RescueRequestUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: RescueRequestCreateOrConnectWithoutShelterInput | RescueRequestCreateOrConnectWithoutShelterInput[]
    createMany?: RescueRequestCreateManyShelterInputEnvelope
    connect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
  }

  export type ReliefNeedUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<ReliefNeedCreateWithoutShelterInput, ReliefNeedUncheckedCreateWithoutShelterInput> | ReliefNeedCreateWithoutShelterInput[] | ReliefNeedUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ReliefNeedCreateOrConnectWithoutShelterInput | ReliefNeedCreateOrConnectWithoutShelterInput[]
    createMany?: ReliefNeedCreateManyShelterInputEnvelope
    connect?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
  }

  export type RescueRequestUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<RescueRequestCreateWithoutShelterInput, RescueRequestUncheckedCreateWithoutShelterInput> | RescueRequestCreateWithoutShelterInput[] | RescueRequestUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: RescueRequestCreateOrConnectWithoutShelterInput | RescueRequestCreateOrConnectWithoutShelterInput[]
    createMany?: RescueRequestCreateManyShelterInputEnvelope
    connect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShelterUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSheltersNestedInput = {
    create?: XOR<UserCreateWithoutSheltersInput, UserUncheckedCreateWithoutSheltersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheltersInput
    upsert?: UserUpsertWithoutSheltersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSheltersInput, UserUpdateWithoutSheltersInput>, UserUncheckedUpdateWithoutSheltersInput>
  }

  export type ReliefNeedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<ReliefNeedCreateWithoutShelterInput, ReliefNeedUncheckedCreateWithoutShelterInput> | ReliefNeedCreateWithoutShelterInput[] | ReliefNeedUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ReliefNeedCreateOrConnectWithoutShelterInput | ReliefNeedCreateOrConnectWithoutShelterInput[]
    upsert?: ReliefNeedUpsertWithWhereUniqueWithoutShelterInput | ReliefNeedUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: ReliefNeedCreateManyShelterInputEnvelope
    set?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
    disconnect?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
    delete?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
    connect?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
    update?: ReliefNeedUpdateWithWhereUniqueWithoutShelterInput | ReliefNeedUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: ReliefNeedUpdateManyWithWhereWithoutShelterInput | ReliefNeedUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: ReliefNeedScalarWhereInput | ReliefNeedScalarWhereInput[]
  }

  export type RescueRequestUpdateManyWithoutShelterNestedInput = {
    create?: XOR<RescueRequestCreateWithoutShelterInput, RescueRequestUncheckedCreateWithoutShelterInput> | RescueRequestCreateWithoutShelterInput[] | RescueRequestUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: RescueRequestCreateOrConnectWithoutShelterInput | RescueRequestCreateOrConnectWithoutShelterInput[]
    upsert?: RescueRequestUpsertWithWhereUniqueWithoutShelterInput | RescueRequestUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: RescueRequestCreateManyShelterInputEnvelope
    set?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    disconnect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    delete?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    connect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    update?: RescueRequestUpdateWithWhereUniqueWithoutShelterInput | RescueRequestUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: RescueRequestUpdateManyWithWhereWithoutShelterInput | RescueRequestUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: RescueRequestScalarWhereInput | RescueRequestScalarWhereInput[]
  }

  export type ReliefNeedUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<ReliefNeedCreateWithoutShelterInput, ReliefNeedUncheckedCreateWithoutShelterInput> | ReliefNeedCreateWithoutShelterInput[] | ReliefNeedUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ReliefNeedCreateOrConnectWithoutShelterInput | ReliefNeedCreateOrConnectWithoutShelterInput[]
    upsert?: ReliefNeedUpsertWithWhereUniqueWithoutShelterInput | ReliefNeedUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: ReliefNeedCreateManyShelterInputEnvelope
    set?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
    disconnect?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
    delete?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
    connect?: ReliefNeedWhereUniqueInput | ReliefNeedWhereUniqueInput[]
    update?: ReliefNeedUpdateWithWhereUniqueWithoutShelterInput | ReliefNeedUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: ReliefNeedUpdateManyWithWhereWithoutShelterInput | ReliefNeedUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: ReliefNeedScalarWhereInput | ReliefNeedScalarWhereInput[]
  }

  export type RescueRequestUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<RescueRequestCreateWithoutShelterInput, RescueRequestUncheckedCreateWithoutShelterInput> | RescueRequestCreateWithoutShelterInput[] | RescueRequestUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: RescueRequestCreateOrConnectWithoutShelterInput | RescueRequestCreateOrConnectWithoutShelterInput[]
    upsert?: RescueRequestUpsertWithWhereUniqueWithoutShelterInput | RescueRequestUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: RescueRequestCreateManyShelterInputEnvelope
    set?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    disconnect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    delete?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    connect?: RescueRequestWhereUniqueInput | RescueRequestWhereUniqueInput[]
    update?: RescueRequestUpdateWithWhereUniqueWithoutShelterInput | RescueRequestUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: RescueRequestUpdateManyWithWhereWithoutShelterInput | RescueRequestUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: RescueRequestScalarWhereInput | RescueRequestScalarWhereInput[]
  }

  export type ShelterCreateNestedOneWithoutReliefNeedsInput = {
    create?: XOR<ShelterCreateWithoutReliefNeedsInput, ShelterUncheckedCreateWithoutReliefNeedsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutReliefNeedsInput
    connect?: ShelterWhereUniqueInput
  }

  export type EnumUrgencyLevelFieldUpdateOperationsInput = {
    set?: $Enums.UrgencyLevel
  }

  export type EnumReliefStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReliefStatus
  }

  export type ShelterUpdateOneRequiredWithoutReliefNeedsNestedInput = {
    create?: XOR<ShelterCreateWithoutReliefNeedsInput, ShelterUncheckedCreateWithoutReliefNeedsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutReliefNeedsInput
    upsert?: ShelterUpsertWithoutReliefNeedsInput
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutReliefNeedsInput, ShelterUpdateWithoutReliefNeedsInput>, ShelterUncheckedUpdateWithoutReliefNeedsInput>
  }

  export type ShelterCreateNestedOneWithoutRescueRequestsInput = {
    create?: XOR<ShelterCreateWithoutRescueRequestsInput, ShelterUncheckedCreateWithoutRescueRequestsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutRescueRequestsInput
    connect?: ShelterWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRescueAssignedInput = {
    create?: XOR<UserCreateWithoutRescueAssignedInput, UserUncheckedCreateWithoutRescueAssignedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRescueAssignedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRescueStatusFieldUpdateOperationsInput = {
    set?: $Enums.RescueStatus
  }

  export type ShelterUpdateOneWithoutRescueRequestsNestedInput = {
    create?: XOR<ShelterCreateWithoutRescueRequestsInput, ShelterUncheckedCreateWithoutRescueRequestsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutRescueRequestsInput
    upsert?: ShelterUpsertWithoutRescueRequestsInput
    disconnect?: ShelterWhereInput | boolean
    delete?: ShelterWhereInput | boolean
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutRescueRequestsInput, ShelterUpdateWithoutRescueRequestsInput>, ShelterUncheckedUpdateWithoutRescueRequestsInput>
  }

  export type UserUpdateOneWithoutRescueAssignedNestedInput = {
    create?: XOR<UserCreateWithoutRescueAssignedInput, UserUncheckedCreateWithoutRescueAssignedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRescueAssignedInput
    upsert?: UserUpsertWithoutRescueAssignedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRescueAssignedInput, UserUpdateWithoutRescueAssignedInput>, UserUncheckedUpdateWithoutRescueAssignedInput>
  }

  export type UserCreateNestedOneWithoutDonationsInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    upsert?: UserUpsertWithoutDonationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsInput, UserUpdateWithoutDonationsInput>, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUrgencyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyLevelFilter<$PrismaModel> | $Enums.UrgencyLevel
  }

  export type NestedEnumReliefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReliefStatus | EnumReliefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReliefStatus[] | ListEnumReliefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReliefStatus[] | ListEnumReliefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReliefStatusFilter<$PrismaModel> | $Enums.ReliefStatus
  }

  export type NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel> | $Enums.UrgencyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyLevelFilter<$PrismaModel>
    _max?: NestedEnumUrgencyLevelFilter<$PrismaModel>
  }

  export type NestedEnumReliefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReliefStatus | EnumReliefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReliefStatus[] | ListEnumReliefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReliefStatus[] | ListEnumReliefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReliefStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReliefStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReliefStatusFilter<$PrismaModel>
    _max?: NestedEnumReliefStatusFilter<$PrismaModel>
  }

  export type NestedEnumRescueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RescueStatus | EnumRescueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RescueStatus[] | ListEnumRescueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RescueStatus[] | ListEnumRescueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRescueStatusFilter<$PrismaModel> | $Enums.RescueStatus
  }

  export type NestedEnumRescueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RescueStatus | EnumRescueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RescueStatus[] | ListEnumRescueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RescueStatus[] | ListEnumRescueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRescueStatusWithAggregatesFilter<$PrismaModel> | $Enums.RescueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRescueStatusFilter<$PrismaModel>
    _max?: NestedEnumRescueStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DonorCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorCreateOrConnectWithoutUserInput = {
    where: DonorWhereUniqueInput
    create: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
  }

  export type ShelterCreateWithoutCoordinatorInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
    reliefNeeds?: ReliefNeedCreateNestedManyWithoutShelterInput
    rescueRequests?: RescueRequestCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutCoordinatorInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
    reliefNeeds?: ReliefNeedUncheckedCreateNestedManyWithoutShelterInput
    rescueRequests?: RescueRequestUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutCoordinatorInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutCoordinatorInput, ShelterUncheckedCreateWithoutCoordinatorInput>
  }

  export type ShelterCreateManyCoordinatorInputEnvelope = {
    data: ShelterCreateManyCoordinatorInput | ShelterCreateManyCoordinatorInput[]
    skipDuplicates?: boolean
  }

  export type RescueRequestCreateWithoutAssignedToInput = {
    id?: string
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter?: ShelterCreateNestedOneWithoutRescueRequestsInput
  }

  export type RescueRequestUncheckedCreateWithoutAssignedToInput = {
    id?: string
    shelterId?: string | null
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescueRequestCreateOrConnectWithoutAssignedToInput = {
    where: RescueRequestWhereUniqueInput
    create: XOR<RescueRequestCreateWithoutAssignedToInput, RescueRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type RescueRequestCreateManyAssignedToInputEnvelope = {
    data: RescueRequestCreateManyAssignedToInput | RescueRequestCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutDonorInput = {
    id?: string
    amount: number
    currency?: string
    transactionId: string
    paymentGateway: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUncheckedCreateWithoutDonorInput = {
    id?: string
    amount: number
    currency?: string
    transactionId: string
    paymentGateway: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutDonorInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationCreateManyDonorInputEnvelope = {
    data: DonationCreateManyDonorInput | DonationCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type DonorUpsertWithoutUserInput = {
    update: XOR<DonorUpdateWithoutUserInput, DonorUncheckedUpdateWithoutUserInput>
    create: XOR<DonorCreateWithoutUserInput, DonorUncheckedCreateWithoutUserInput>
    where?: DonorWhereInput
  }

  export type DonorUpdateToOneWithWhereWithoutUserInput = {
    where?: DonorWhereInput
    data: XOR<DonorUpdateWithoutUserInput, DonorUncheckedUpdateWithoutUserInput>
  }

  export type DonorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterUpsertWithWhereUniqueWithoutCoordinatorInput = {
    where: ShelterWhereUniqueInput
    update: XOR<ShelterUpdateWithoutCoordinatorInput, ShelterUncheckedUpdateWithoutCoordinatorInput>
    create: XOR<ShelterCreateWithoutCoordinatorInput, ShelterUncheckedCreateWithoutCoordinatorInput>
  }

  export type ShelterUpdateWithWhereUniqueWithoutCoordinatorInput = {
    where: ShelterWhereUniqueInput
    data: XOR<ShelterUpdateWithoutCoordinatorInput, ShelterUncheckedUpdateWithoutCoordinatorInput>
  }

  export type ShelterUpdateManyWithWhereWithoutCoordinatorInput = {
    where: ShelterScalarWhereInput
    data: XOR<ShelterUpdateManyMutationInput, ShelterUncheckedUpdateManyWithoutCoordinatorInput>
  }

  export type ShelterScalarWhereInput = {
    AND?: ShelterScalarWhereInput | ShelterScalarWhereInput[]
    OR?: ShelterScalarWhereInput[]
    NOT?: ShelterScalarWhereInput | ShelterScalarWhereInput[]
    id?: StringFilter<"Shelter"> | string
    name?: StringFilter<"Shelter"> | string
    district?: StringFilter<"Shelter"> | string
    upazila?: StringFilter<"Shelter"> | string
    address?: StringFilter<"Shelter"> | string
    capacity?: IntFilter<"Shelter"> | number
    currentPeople?: IntFilter<"Shelter"> | number
    contactPerson?: StringFilter<"Shelter"> | string
    contactPhone?: StringFilter<"Shelter"> | string
    coordinatorId?: StringFilter<"Shelter"> | string
    createdAt?: DateTimeFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeFilter<"Shelter"> | Date | string
    images?: StringNullableListFilter<"Shelter">
  }

  export type RescueRequestUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: RescueRequestWhereUniqueInput
    update: XOR<RescueRequestUpdateWithoutAssignedToInput, RescueRequestUncheckedUpdateWithoutAssignedToInput>
    create: XOR<RescueRequestCreateWithoutAssignedToInput, RescueRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type RescueRequestUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: RescueRequestWhereUniqueInput
    data: XOR<RescueRequestUpdateWithoutAssignedToInput, RescueRequestUncheckedUpdateWithoutAssignedToInput>
  }

  export type RescueRequestUpdateManyWithWhereWithoutAssignedToInput = {
    where: RescueRequestScalarWhereInput
    data: XOR<RescueRequestUpdateManyMutationInput, RescueRequestUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type RescueRequestScalarWhereInput = {
    AND?: RescueRequestScalarWhereInput | RescueRequestScalarWhereInput[]
    OR?: RescueRequestScalarWhereInput[]
    NOT?: RescueRequestScalarWhereInput | RescueRequestScalarWhereInput[]
    id?: StringFilter<"RescueRequest"> | string
    shelterId?: StringNullableFilter<"RescueRequest"> | string | null
    location?: StringFilter<"RescueRequest"> | string
    contactPhone?: StringFilter<"RescueRequest"> | string
    peopleCount?: IntFilter<"RescueRequest"> | number
    urgency?: EnumUrgencyLevelFilter<"RescueRequest"> | $Enums.UrgencyLevel
    status?: EnumRescueStatusFilter<"RescueRequest"> | $Enums.RescueStatus
    assignedToId?: StringNullableFilter<"RescueRequest"> | string | null
    description?: StringNullableFilter<"RescueRequest"> | string | null
    isDeleted?: BoolFilter<"RescueRequest"> | boolean
    createdAt?: DateTimeFilter<"RescueRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RescueRequest"> | Date | string
  }

  export type DonationUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
  }

  export type DonationUpdateManyWithWhereWithoutDonorInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutDonorInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    amount?: FloatFilter<"Donation"> | number
    currency?: StringFilter<"Donation"> | string
    transactionId?: StringFilter<"Donation"> | string
    paymentGateway?: StringFilter<"Donation"> | string
    status?: EnumPaymentStatusFilter<"Donation"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
  }

  export type UserCreateWithoutDonorInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shelters?: ShelterCreateNestedManyWithoutCoordinatorInput
    rescueAssigned?: RescueRequestCreateNestedManyWithoutAssignedToInput
    donations?: DonationCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutDonorInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shelters?: ShelterUncheckedCreateNestedManyWithoutCoordinatorInput
    rescueAssigned?: RescueRequestUncheckedCreateNestedManyWithoutAssignedToInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutDonorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonorInput, UserUncheckedCreateWithoutDonorInput>
  }

  export type UserUpsertWithoutDonorInput = {
    update: XOR<UserUpdateWithoutDonorInput, UserUncheckedUpdateWithoutDonorInput>
    create: XOR<UserCreateWithoutDonorInput, UserUncheckedCreateWithoutDonorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonorInput, UserUncheckedUpdateWithoutDonorInput>
  }

  export type UserUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelters?: ShelterUpdateManyWithoutCoordinatorNestedInput
    rescueAssigned?: RescueRequestUpdateManyWithoutAssignedToNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelters?: ShelterUncheckedUpdateManyWithoutCoordinatorNestedInput
    rescueAssigned?: RescueRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserCreateWithoutSheltersInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorCreateNestedOneWithoutUserInput
    rescueAssigned?: RescueRequestCreateNestedManyWithoutAssignedToInput
    donations?: DonationCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutSheltersInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorUncheckedCreateNestedOneWithoutUserInput
    rescueAssigned?: RescueRequestUncheckedCreateNestedManyWithoutAssignedToInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutSheltersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSheltersInput, UserUncheckedCreateWithoutSheltersInput>
  }

  export type ReliefNeedCreateWithoutShelterInput = {
    id?: string
    itemCategory: string
    itemName: string
    quantity: number
    fulfilled?: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.ReliefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReliefNeedUncheckedCreateWithoutShelterInput = {
    id?: string
    itemCategory: string
    itemName: string
    quantity: number
    fulfilled?: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.ReliefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReliefNeedCreateOrConnectWithoutShelterInput = {
    where: ReliefNeedWhereUniqueInput
    create: XOR<ReliefNeedCreateWithoutShelterInput, ReliefNeedUncheckedCreateWithoutShelterInput>
  }

  export type ReliefNeedCreateManyShelterInputEnvelope = {
    data: ReliefNeedCreateManyShelterInput | ReliefNeedCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type RescueRequestCreateWithoutShelterInput = {
    id?: string
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutRescueAssignedInput
  }

  export type RescueRequestUncheckedCreateWithoutShelterInput = {
    id?: string
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    assignedToId?: string | null
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescueRequestCreateOrConnectWithoutShelterInput = {
    where: RescueRequestWhereUniqueInput
    create: XOR<RescueRequestCreateWithoutShelterInput, RescueRequestUncheckedCreateWithoutShelterInput>
  }

  export type RescueRequestCreateManyShelterInputEnvelope = {
    data: RescueRequestCreateManyShelterInput | RescueRequestCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSheltersInput = {
    update: XOR<UserUpdateWithoutSheltersInput, UserUncheckedUpdateWithoutSheltersInput>
    create: XOR<UserCreateWithoutSheltersInput, UserUncheckedCreateWithoutSheltersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSheltersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSheltersInput, UserUncheckedUpdateWithoutSheltersInput>
  }

  export type UserUpdateWithoutSheltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneWithoutUserNestedInput
    rescueAssigned?: RescueRequestUpdateManyWithoutAssignedToNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutSheltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUncheckedUpdateOneWithoutUserNestedInput
    rescueAssigned?: RescueRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type ReliefNeedUpsertWithWhereUniqueWithoutShelterInput = {
    where: ReliefNeedWhereUniqueInput
    update: XOR<ReliefNeedUpdateWithoutShelterInput, ReliefNeedUncheckedUpdateWithoutShelterInput>
    create: XOR<ReliefNeedCreateWithoutShelterInput, ReliefNeedUncheckedCreateWithoutShelterInput>
  }

  export type ReliefNeedUpdateWithWhereUniqueWithoutShelterInput = {
    where: ReliefNeedWhereUniqueInput
    data: XOR<ReliefNeedUpdateWithoutShelterInput, ReliefNeedUncheckedUpdateWithoutShelterInput>
  }

  export type ReliefNeedUpdateManyWithWhereWithoutShelterInput = {
    where: ReliefNeedScalarWhereInput
    data: XOR<ReliefNeedUpdateManyMutationInput, ReliefNeedUncheckedUpdateManyWithoutShelterInput>
  }

  export type ReliefNeedScalarWhereInput = {
    AND?: ReliefNeedScalarWhereInput | ReliefNeedScalarWhereInput[]
    OR?: ReliefNeedScalarWhereInput[]
    NOT?: ReliefNeedScalarWhereInput | ReliefNeedScalarWhereInput[]
    id?: StringFilter<"ReliefNeed"> | string
    shelterId?: StringFilter<"ReliefNeed"> | string
    itemCategory?: StringFilter<"ReliefNeed"> | string
    itemName?: StringFilter<"ReliefNeed"> | string
    quantity?: IntFilter<"ReliefNeed"> | number
    fulfilled?: IntFilter<"ReliefNeed"> | number
    urgency?: EnumUrgencyLevelFilter<"ReliefNeed"> | $Enums.UrgencyLevel
    status?: EnumReliefStatusFilter<"ReliefNeed"> | $Enums.ReliefStatus
    createdAt?: DateTimeFilter<"ReliefNeed"> | Date | string
    updatedAt?: DateTimeFilter<"ReliefNeed"> | Date | string
  }

  export type RescueRequestUpsertWithWhereUniqueWithoutShelterInput = {
    where: RescueRequestWhereUniqueInput
    update: XOR<RescueRequestUpdateWithoutShelterInput, RescueRequestUncheckedUpdateWithoutShelterInput>
    create: XOR<RescueRequestCreateWithoutShelterInput, RescueRequestUncheckedCreateWithoutShelterInput>
  }

  export type RescueRequestUpdateWithWhereUniqueWithoutShelterInput = {
    where: RescueRequestWhereUniqueInput
    data: XOR<RescueRequestUpdateWithoutShelterInput, RescueRequestUncheckedUpdateWithoutShelterInput>
  }

  export type RescueRequestUpdateManyWithWhereWithoutShelterInput = {
    where: RescueRequestScalarWhereInput
    data: XOR<RescueRequestUpdateManyMutationInput, RescueRequestUncheckedUpdateManyWithoutShelterInput>
  }

  export type ShelterCreateWithoutReliefNeedsInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
    coordinator: UserCreateNestedOneWithoutSheltersInput
    rescueRequests?: RescueRequestCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutReliefNeedsInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    coordinatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
    rescueRequests?: RescueRequestUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutReliefNeedsInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutReliefNeedsInput, ShelterUncheckedCreateWithoutReliefNeedsInput>
  }

  export type ShelterUpsertWithoutReliefNeedsInput = {
    update: XOR<ShelterUpdateWithoutReliefNeedsInput, ShelterUncheckedUpdateWithoutReliefNeedsInput>
    create: XOR<ShelterCreateWithoutReliefNeedsInput, ShelterUncheckedCreateWithoutReliefNeedsInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutReliefNeedsInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutReliefNeedsInput, ShelterUncheckedUpdateWithoutReliefNeedsInput>
  }

  export type ShelterUpdateWithoutReliefNeedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
    coordinator?: UserUpdateOneRequiredWithoutSheltersNestedInput
    rescueRequests?: RescueRequestUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutReliefNeedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    coordinatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
    rescueRequests?: RescueRequestUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type ShelterCreateWithoutRescueRequestsInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
    coordinator: UserCreateNestedOneWithoutSheltersInput
    reliefNeeds?: ReliefNeedCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutRescueRequestsInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    coordinatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
    reliefNeeds?: ReliefNeedUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutRescueRequestsInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutRescueRequestsInput, ShelterUncheckedCreateWithoutRescueRequestsInput>
  }

  export type UserCreateWithoutRescueAssignedInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorCreateNestedOneWithoutUserInput
    shelters?: ShelterCreateNestedManyWithoutCoordinatorInput
    donations?: DonationCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutRescueAssignedInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorUncheckedCreateNestedOneWithoutUserInput
    shelters?: ShelterUncheckedCreateNestedManyWithoutCoordinatorInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutRescueAssignedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRescueAssignedInput, UserUncheckedCreateWithoutRescueAssignedInput>
  }

  export type ShelterUpsertWithoutRescueRequestsInput = {
    update: XOR<ShelterUpdateWithoutRescueRequestsInput, ShelterUncheckedUpdateWithoutRescueRequestsInput>
    create: XOR<ShelterCreateWithoutRescueRequestsInput, ShelterUncheckedCreateWithoutRescueRequestsInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutRescueRequestsInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutRescueRequestsInput, ShelterUncheckedUpdateWithoutRescueRequestsInput>
  }

  export type ShelterUpdateWithoutRescueRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
    coordinator?: UserUpdateOneRequiredWithoutSheltersNestedInput
    reliefNeeds?: ReliefNeedUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutRescueRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    coordinatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
    reliefNeeds?: ReliefNeedUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type UserUpsertWithoutRescueAssignedInput = {
    update: XOR<UserUpdateWithoutRescueAssignedInput, UserUncheckedUpdateWithoutRescueAssignedInput>
    create: XOR<UserCreateWithoutRescueAssignedInput, UserUncheckedCreateWithoutRescueAssignedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRescueAssignedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRescueAssignedInput, UserUncheckedUpdateWithoutRescueAssignedInput>
  }

  export type UserUpdateWithoutRescueAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneWithoutUserNestedInput
    shelters?: ShelterUpdateManyWithoutCoordinatorNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutRescueAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUncheckedUpdateOneWithoutUserNestedInput
    shelters?: ShelterUncheckedUpdateManyWithoutCoordinatorNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserCreateWithoutDonationsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorCreateNestedOneWithoutUserInput
    shelters?: ShelterCreateNestedManyWithoutCoordinatorInput
    rescueAssigned?: RescueRequestCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutDonationsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.Role
    isVerified?: boolean
    imageUrl?: string | null
    imagePublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor?: DonorUncheckedCreateNestedOneWithoutUserInput
    shelters?: ShelterUncheckedCreateNestedManyWithoutCoordinatorInput
    rescueAssigned?: RescueRequestUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutDonationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
  }

  export type UserUpsertWithoutDonationsInput = {
    update: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUpdateOneWithoutUserNestedInput
    shelters?: ShelterUpdateManyWithoutCoordinatorNestedInput
    rescueAssigned?: RescueRequestUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: DonorUncheckedUpdateOneWithoutUserNestedInput
    shelters?: ShelterUncheckedUpdateManyWithoutCoordinatorNestedInput
    rescueAssigned?: RescueRequestUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type ShelterCreateManyCoordinatorInput = {
    id?: string
    name: string
    district: string
    upazila: string
    address: string
    capacity: number
    currentPeople?: number
    contactPerson: string
    contactPhone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ShelterCreateimagesInput | string[]
  }

  export type RescueRequestCreateManyAssignedToInput = {
    id?: string
    shelterId?: string | null
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationCreateManyDonorInput = {
    id?: string
    amount: number
    currency?: string
    transactionId: string
    paymentGateway: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShelterUpdateWithoutCoordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
    reliefNeeds?: ReliefNeedUpdateManyWithoutShelterNestedInput
    rescueRequests?: RescueRequestUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutCoordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
    reliefNeeds?: ReliefNeedUncheckedUpdateManyWithoutShelterNestedInput
    rescueRequests?: RescueRequestUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateManyWithoutCoordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    upazila?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentPeople?: IntFieldUpdateOperationsInput | number
    contactPerson?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ShelterUpdateimagesInput | string[]
  }

  export type RescueRequestUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneWithoutRescueRequestsNestedInput
  }

  export type RescueRequestUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescueRequestUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentGateway?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentGateway?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentGateway?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReliefNeedCreateManyShelterInput = {
    id?: string
    itemCategory: string
    itemName: string
    quantity: number
    fulfilled?: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.ReliefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RescueRequestCreateManyShelterInput = {
    id?: string
    location: string
    contactPhone: string
    peopleCount: number
    urgency?: $Enums.UrgencyLevel
    status?: $Enums.RescueStatus
    assignedToId?: string | null
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReliefNeedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fulfilled?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumReliefStatusFieldUpdateOperationsInput | $Enums.ReliefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReliefNeedUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fulfilled?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumReliefStatusFieldUpdateOperationsInput | $Enums.ReliefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReliefNeedUncheckedUpdateManyWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fulfilled?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumReliefStatusFieldUpdateOperationsInput | $Enums.ReliefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescueRequestUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutRescueAssignedNestedInput
  }

  export type RescueRequestUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RescueRequestUncheckedUpdateManyWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    peopleCount?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    status?: EnumRescueStatusFieldUpdateOperationsInput | $Enums.RescueStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}