
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Box
 * 
 */
export type Box = {
  /**
   * @zod.string.uuid()
   */
  id: string
  name: string
  /**
   * @zod.string.uuid()
   */
  room_id: string
}

/**
 * Model Box_user
 * 
 */
export type Box_user = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  person_id: string
}

/**
 * Model House
 * 
 */
export type House = {
  /**
   * @zod.string.uuid()
   */
  id: string
  name: string
}

/**
 * Model Person
 * 
 */
export type Person = {
  /**
   * @zod.string.uuid()
   */
  id: string
  name: string
}

/**
 * Model Room
 * 
 */
export type Room = {
  /**
   * @zod.string.uuid()
   */
  id: string
  name: string
  /**
   * @zod.string.uuid()
   */
  house_id: string
  /**
   * @zod.string.uuid()
   */
  owner_id: string | null
}

/**
 * Model Room_user
 * 
 */
export type Room_user = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  person_id: string
}

/**
 * Model Thing
 * 
 */
export type Thing = {
  /**
   * @zod.string.uuid()
   */
  id: string
  name: string
  /**
   * @zod.string.uuid()
   */
  box_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Boxes
 * const boxes = await prisma.box.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Boxes
   * const boxes = await prisma.box.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.box`: Exposes CRUD operations for the **Box** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boxes
    * const boxes = await prisma.box.findMany()
    * ```
    */
  get box(): Prisma.BoxDelegate<GlobalReject>;

  /**
   * `prisma.box_user`: Exposes CRUD operations for the **Box_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Box_users
    * const box_users = await prisma.box_user.findMany()
    * ```
    */
  get box_user(): Prisma.Box_userDelegate<GlobalReject>;

  /**
   * `prisma.house`: Exposes CRUD operations for the **House** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Houses
    * const houses = await prisma.house.findMany()
    * ```
    */
  get house(): Prisma.HouseDelegate<GlobalReject>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<GlobalReject>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<GlobalReject>;

  /**
   * `prisma.room_user`: Exposes CRUD operations for the **Room_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Room_users
    * const room_users = await prisma.room_user.findMany()
    * ```
    */
  get room_user(): Prisma.Room_userDelegate<GlobalReject>;

  /**
   * `prisma.thing`: Exposes CRUD operations for the **Thing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Things
    * const things = await prisma.thing.findMany()
    * ```
    */
  get thing(): Prisma.ThingDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Box: 'Box',
    Box_user: 'Box_user',
    House: 'House',
    Person: 'Person',
    Room: 'Room',
    Room_user: 'Room_user',
    Thing: 'Thing'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BoxCountOutputType
   */


  export type BoxCountOutputType = {
    box_user: number
    thing: number
  }

  export type BoxCountOutputTypeSelect = {
    box_user?: boolean
    thing?: boolean
  }

  export type BoxCountOutputTypeGetPayload<S extends boolean | null | undefined | BoxCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoxCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BoxCountOutputTypeArgs)
    ? BoxCountOutputType 
    : S extends { select: any } & (BoxCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BoxCountOutputType ? BoxCountOutputType[P] : never
  } 
      : BoxCountOutputType




  // Custom InputTypes

  /**
   * BoxCountOutputType without action
   */
  export type BoxCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoxCountOutputType
     * 
    **/
    select?: BoxCountOutputTypeSelect | null
  }



  /**
   * Count Type HouseCountOutputType
   */


  export type HouseCountOutputType = {
    room: number
  }

  export type HouseCountOutputTypeSelect = {
    room?: boolean
  }

  export type HouseCountOutputTypeGetPayload<S extends boolean | null | undefined | HouseCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HouseCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HouseCountOutputTypeArgs)
    ? HouseCountOutputType 
    : S extends { select: any } & (HouseCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HouseCountOutputType ? HouseCountOutputType[P] : never
  } 
      : HouseCountOutputType




  // Custom InputTypes

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HouseCountOutputType
     * 
    **/
    select?: HouseCountOutputTypeSelect | null
  }



  /**
   * Count Type PersonCountOutputType
   */


  export type PersonCountOutputType = {
    box_user: number
    room: number
    room_user: number
  }

  export type PersonCountOutputTypeSelect = {
    box_user?: boolean
    room?: boolean
    room_user?: boolean
  }

  export type PersonCountOutputTypeGetPayload<S extends boolean | null | undefined | PersonCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PersonCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PersonCountOutputTypeArgs)
    ? PersonCountOutputType 
    : S extends { select: any } & (PersonCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PersonCountOutputType ? PersonCountOutputType[P] : never
  } 
      : PersonCountOutputType




  // Custom InputTypes

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     * 
    **/
    select?: PersonCountOutputTypeSelect | null
  }



  /**
   * Count Type RoomCountOutputType
   */


  export type RoomCountOutputType = {
    box: number
    room_user: number
  }

  export type RoomCountOutputTypeSelect = {
    box?: boolean
    room_user?: boolean
  }

  export type RoomCountOutputTypeGetPayload<S extends boolean | null | undefined | RoomCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoomCountOutputTypeArgs)
    ? RoomCountOutputType 
    : S extends { select: any } & (RoomCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoomCountOutputType ? RoomCountOutputType[P] : never
  } 
      : RoomCountOutputType




  // Custom InputTypes

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     * 
    **/
    select?: RoomCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Box
   */


  export type AggregateBox = {
    _count: BoxCountAggregateOutputType | null
    _min: BoxMinAggregateOutputType | null
    _max: BoxMaxAggregateOutputType | null
  }

  export type BoxMinAggregateOutputType = {
    id: string | null
    name: string | null
    room_id: string | null
  }

  export type BoxMaxAggregateOutputType = {
    id: string | null
    name: string | null
    room_id: string | null
  }

  export type BoxCountAggregateOutputType = {
    id: number
    name: number
    room_id: number
    _all: number
  }


  export type BoxMinAggregateInputType = {
    id?: true
    name?: true
    room_id?: true
  }

  export type BoxMaxAggregateInputType = {
    id?: true
    name?: true
    room_id?: true
  }

  export type BoxCountAggregateInputType = {
    id?: true
    name?: true
    room_id?: true
    _all?: true
  }

  export type BoxAggregateArgs = {
    /**
     * Filter which Box to aggregate.
     * 
    **/
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     * 
    **/
    orderBy?: Enumerable<BoxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boxes
    **/
    _count?: true | BoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoxMaxAggregateInputType
  }

  export type GetBoxAggregateType<T extends BoxAggregateArgs> = {
        [P in keyof T & keyof AggregateBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBox[P]>
      : GetScalarType<T[P], AggregateBox[P]>
  }




  export type BoxGroupByArgs = {
    where?: BoxWhereInput
    orderBy?: Enumerable<BoxOrderByWithAggregationInput>
    by: Array<BoxScalarFieldEnum>
    having?: BoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoxCountAggregateInputType | true
    _min?: BoxMinAggregateInputType
    _max?: BoxMaxAggregateInputType
  }


  export type BoxGroupByOutputType = {
    id: string
    name: string
    room_id: string
    _count: BoxCountAggregateOutputType | null
    _min: BoxMinAggregateOutputType | null
    _max: BoxMaxAggregateOutputType | null
  }

  type GetBoxGroupByPayload<T extends BoxGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoxGroupByOutputType[P]>
            : GetScalarType<T[P], BoxGroupByOutputType[P]>
        }
      >
    >


  export type BoxSelect = {
    id?: boolean
    name?: boolean
    room_id?: boolean
    room?: boolean | RoomArgs
    box_user?: boolean | Box$box_userArgs
    thing?: boolean | Box$thingArgs
    _count?: boolean | BoxCountOutputTypeArgs
  }


  export type BoxInclude = {
    room?: boolean | RoomArgs
    box_user?: boolean | Box$box_userArgs
    thing?: boolean | Box$thingArgs
    _count?: boolean | BoxCountOutputTypeArgs
  } 

  export type BoxGetPayload<S extends boolean | null | undefined | BoxArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Box :
    S extends undefined ? never :
    S extends { include: any } & (BoxArgs | BoxFindManyArgs)
    ? Box  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? RoomGetPayload<S['include'][P]> :
        P extends 'box_user' ? Array < Box_userGetPayload<S['include'][P]>>  :
        P extends 'thing' ? Array < ThingGetPayload<S['include'][P]>>  :
        P extends '_count' ? BoxCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoxArgs | BoxFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? RoomGetPayload<S['select'][P]> :
        P extends 'box_user' ? Array < Box_userGetPayload<S['select'][P]>>  :
        P extends 'thing' ? Array < ThingGetPayload<S['select'][P]>>  :
        P extends '_count' ? BoxCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Box ? Box[P] : never
  } 
      : Box


  type BoxCountArgs = Merge<
    Omit<BoxFindManyArgs, 'select' | 'include'> & {
      select?: BoxCountAggregateInputType | true
    }
  >

  export interface BoxDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Box that matches the filter.
     * @param {BoxFindUniqueArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoxFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoxFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Box'> extends True ? Prisma__BoxClient<BoxGetPayload<T>> : Prisma__BoxClient<BoxGetPayload<T> | null, null>

    /**
     * Find one Box that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoxFindUniqueOrThrowArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoxFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoxFindUniqueOrThrowArgs>
    ): Prisma__BoxClient<BoxGetPayload<T>>

    /**
     * Find the first Box that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindFirstArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoxFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoxFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Box'> extends True ? Prisma__BoxClient<BoxGetPayload<T>> : Prisma__BoxClient<BoxGetPayload<T> | null, null>

    /**
     * Find the first Box that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindFirstOrThrowArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoxFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoxFindFirstOrThrowArgs>
    ): Prisma__BoxClient<BoxGetPayload<T>>

    /**
     * Find zero or more Boxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boxes
     * const boxes = await prisma.box.findMany()
     * 
     * // Get first 10 Boxes
     * const boxes = await prisma.box.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boxWithIdOnly = await prisma.box.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoxFindManyArgs>(
      args?: SelectSubset<T, BoxFindManyArgs>
    ): PrismaPromise<Array<BoxGetPayload<T>>>

    /**
     * Create a Box.
     * @param {BoxCreateArgs} args - Arguments to create a Box.
     * @example
     * // Create one Box
     * const Box = await prisma.box.create({
     *   data: {
     *     // ... data to create a Box
     *   }
     * })
     * 
    **/
    create<T extends BoxCreateArgs>(
      args: SelectSubset<T, BoxCreateArgs>
    ): Prisma__BoxClient<BoxGetPayload<T>>

    /**
     * Create many Boxes.
     *     @param {BoxCreateManyArgs} args - Arguments to create many Boxes.
     *     @example
     *     // Create many Boxes
     *     const box = await prisma.box.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoxCreateManyArgs>(
      args?: SelectSubset<T, BoxCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Box.
     * @param {BoxDeleteArgs} args - Arguments to delete one Box.
     * @example
     * // Delete one Box
     * const Box = await prisma.box.delete({
     *   where: {
     *     // ... filter to delete one Box
     *   }
     * })
     * 
    **/
    delete<T extends BoxDeleteArgs>(
      args: SelectSubset<T, BoxDeleteArgs>
    ): Prisma__BoxClient<BoxGetPayload<T>>

    /**
     * Update one Box.
     * @param {BoxUpdateArgs} args - Arguments to update one Box.
     * @example
     * // Update one Box
     * const box = await prisma.box.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoxUpdateArgs>(
      args: SelectSubset<T, BoxUpdateArgs>
    ): Prisma__BoxClient<BoxGetPayload<T>>

    /**
     * Delete zero or more Boxes.
     * @param {BoxDeleteManyArgs} args - Arguments to filter Boxes to delete.
     * @example
     * // Delete a few Boxes
     * const { count } = await prisma.box.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoxDeleteManyArgs>(
      args?: SelectSubset<T, BoxDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boxes
     * const box = await prisma.box.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoxUpdateManyArgs>(
      args: SelectSubset<T, BoxUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Box.
     * @param {BoxUpsertArgs} args - Arguments to update or create a Box.
     * @example
     * // Update or create a Box
     * const box = await prisma.box.upsert({
     *   create: {
     *     // ... data to create a Box
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Box we want to update
     *   }
     * })
    **/
    upsert<T extends BoxUpsertArgs>(
      args: SelectSubset<T, BoxUpsertArgs>
    ): Prisma__BoxClient<BoxGetPayload<T>>

    /**
     * Count the number of Boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCountArgs} args - Arguments to filter Boxes to count.
     * @example
     * // Count the number of Boxes
     * const count = await prisma.box.count({
     *   where: {
     *     // ... the filter for the Boxes we want to count
     *   }
     * })
    **/
    count<T extends BoxCountArgs>(
      args?: Subset<T, BoxCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Box.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoxAggregateArgs>(args: Subset<T, BoxAggregateArgs>): PrismaPromise<GetBoxAggregateType<T>>

    /**
     * Group by Box.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxGroupByArgs} args - Group by arguments.
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
      T extends BoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoxGroupByArgs['orderBy'] }
        : { orderBy?: BoxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoxGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Box.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoxClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    box_user<T extends Box$box_userArgs= {}>(args?: Subset<T, Box$box_userArgs>): PrismaPromise<Array<Box_userGetPayload<T>>| Null>;

    thing<T extends Box$thingArgs= {}>(args?: Subset<T, Box$thingArgs>): PrismaPromise<Array<ThingGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Box base type for findUnique actions
   */
  export type BoxFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * Filter, which Box to fetch.
     * 
    **/
    where: BoxWhereUniqueInput
  }

  /**
   * Box findUnique
   */
  export interface BoxFindUniqueArgs extends BoxFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Box findUniqueOrThrow
   */
  export type BoxFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * Filter, which Box to fetch.
     * 
    **/
    where: BoxWhereUniqueInput
  }


  /**
   * Box base type for findFirst actions
   */
  export type BoxFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * Filter, which Box to fetch.
     * 
    **/
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     * 
    **/
    orderBy?: Enumerable<BoxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boxes.
     * 
    **/
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boxes.
     * 
    **/
    distinct?: Enumerable<BoxScalarFieldEnum>
  }

  /**
   * Box findFirst
   */
  export interface BoxFindFirstArgs extends BoxFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Box findFirstOrThrow
   */
  export type BoxFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * Filter, which Box to fetch.
     * 
    **/
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     * 
    **/
    orderBy?: Enumerable<BoxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boxes.
     * 
    **/
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boxes.
     * 
    **/
    distinct?: Enumerable<BoxScalarFieldEnum>
  }


  /**
   * Box findMany
   */
  export type BoxFindManyArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * Filter, which Boxes to fetch.
     * 
    **/
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     * 
    **/
    orderBy?: Enumerable<BoxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boxes.
     * 
    **/
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoxScalarFieldEnum>
  }


  /**
   * Box create
   */
  export type BoxCreateArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * The data needed to create a Box.
     * 
    **/
    data: XOR<BoxCreateInput, BoxUncheckedCreateInput>
  }


  /**
   * Box createMany
   */
  export type BoxCreateManyArgs = {
    /**
     * The data used to create many Boxes.
     * 
    **/
    data: Enumerable<BoxCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Box update
   */
  export type BoxUpdateArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * The data needed to update a Box.
     * 
    **/
    data: XOR<BoxUpdateInput, BoxUncheckedUpdateInput>
    /**
     * Choose, which Box to update.
     * 
    **/
    where: BoxWhereUniqueInput
  }


  /**
   * Box updateMany
   */
  export type BoxUpdateManyArgs = {
    /**
     * The data used to update Boxes.
     * 
    **/
    data: XOR<BoxUpdateManyMutationInput, BoxUncheckedUpdateManyInput>
    /**
     * Filter which Boxes to update
     * 
    **/
    where?: BoxWhereInput
  }


  /**
   * Box upsert
   */
  export type BoxUpsertArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * The filter to search for the Box to update in case it exists.
     * 
    **/
    where: BoxWhereUniqueInput
    /**
     * In case the Box found by the `where` argument doesn't exist, create a new Box with this data.
     * 
    **/
    create: XOR<BoxCreateInput, BoxUncheckedCreateInput>
    /**
     * In case the Box was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoxUpdateInput, BoxUncheckedUpdateInput>
  }


  /**
   * Box delete
   */
  export type BoxDeleteArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    /**
     * Filter which Box to delete.
     * 
    **/
    where: BoxWhereUniqueInput
  }


  /**
   * Box deleteMany
   */
  export type BoxDeleteManyArgs = {
    /**
     * Filter which Boxes to delete
     * 
    **/
    where?: BoxWhereInput
  }


  /**
   * Box.box_user
   */
  export type Box$box_userArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    where?: Box_userWhereInput
    orderBy?: Enumerable<Box_userOrderByWithRelationInput>
    cursor?: Box_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Box_userScalarFieldEnum>
  }


  /**
   * Box.thing
   */
  export type Box$thingArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    where?: ThingWhereInput
    orderBy?: Enumerable<ThingOrderByWithRelationInput>
    cursor?: ThingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThingScalarFieldEnum>
  }


  /**
   * Box without action
   */
  export type BoxArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
  }



  /**
   * Model Box_user
   */


  export type AggregateBox_user = {
    _count: Box_userCountAggregateOutputType | null
    _min: Box_userMinAggregateOutputType | null
    _max: Box_userMaxAggregateOutputType | null
  }

  export type Box_userMinAggregateOutputType = {
    id: string | null
    person_id: string | null
  }

  export type Box_userMaxAggregateOutputType = {
    id: string | null
    person_id: string | null
  }

  export type Box_userCountAggregateOutputType = {
    id: number
    person_id: number
    _all: number
  }


  export type Box_userMinAggregateInputType = {
    id?: true
    person_id?: true
  }

  export type Box_userMaxAggregateInputType = {
    id?: true
    person_id?: true
  }

  export type Box_userCountAggregateInputType = {
    id?: true
    person_id?: true
    _all?: true
  }

  export type Box_userAggregateArgs = {
    /**
     * Filter which Box_user to aggregate.
     * 
    **/
    where?: Box_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Box_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Box_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Box_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Box_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Box_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Box_users
    **/
    _count?: true | Box_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Box_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Box_userMaxAggregateInputType
  }

  export type GetBox_userAggregateType<T extends Box_userAggregateArgs> = {
        [P in keyof T & keyof AggregateBox_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBox_user[P]>
      : GetScalarType<T[P], AggregateBox_user[P]>
  }




  export type Box_userGroupByArgs = {
    where?: Box_userWhereInput
    orderBy?: Enumerable<Box_userOrderByWithAggregationInput>
    by: Array<Box_userScalarFieldEnum>
    having?: Box_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Box_userCountAggregateInputType | true
    _min?: Box_userMinAggregateInputType
    _max?: Box_userMaxAggregateInputType
  }


  export type Box_userGroupByOutputType = {
    id: string
    person_id: string
    _count: Box_userCountAggregateOutputType | null
    _min: Box_userMinAggregateOutputType | null
    _max: Box_userMaxAggregateOutputType | null
  }

  type GetBox_userGroupByPayload<T extends Box_userGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Box_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Box_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Box_userGroupByOutputType[P]>
            : GetScalarType<T[P], Box_userGroupByOutputType[P]>
        }
      >
    >


  export type Box_userSelect = {
    id?: boolean
    person_id?: boolean
    box?: boolean | BoxArgs
    person?: boolean | PersonArgs
  }


  export type Box_userInclude = {
    box?: boolean | BoxArgs
    person?: boolean | PersonArgs
  } 

  export type Box_userGetPayload<S extends boolean | null | undefined | Box_userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Box_user :
    S extends undefined ? never :
    S extends { include: any } & (Box_userArgs | Box_userFindManyArgs)
    ? Box_user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'box' ? BoxGetPayload<S['include'][P]> :
        P extends 'person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Box_userArgs | Box_userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'box' ? BoxGetPayload<S['select'][P]> :
        P extends 'person' ? PersonGetPayload<S['select'][P]> :  P extends keyof Box_user ? Box_user[P] : never
  } 
      : Box_user


  type Box_userCountArgs = Merge<
    Omit<Box_userFindManyArgs, 'select' | 'include'> & {
      select?: Box_userCountAggregateInputType | true
    }
  >

  export interface Box_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Box_user that matches the filter.
     * @param {Box_userFindUniqueArgs} args - Arguments to find a Box_user
     * @example
     * // Get one Box_user
     * const box_user = await prisma.box_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Box_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Box_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Box_user'> extends True ? Prisma__Box_userClient<Box_userGetPayload<T>> : Prisma__Box_userClient<Box_userGetPayload<T> | null, null>

    /**
     * Find one Box_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Box_userFindUniqueOrThrowArgs} args - Arguments to find a Box_user
     * @example
     * // Get one Box_user
     * const box_user = await prisma.box_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Box_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Box_userFindUniqueOrThrowArgs>
    ): Prisma__Box_userClient<Box_userGetPayload<T>>

    /**
     * Find the first Box_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Box_userFindFirstArgs} args - Arguments to find a Box_user
     * @example
     * // Get one Box_user
     * const box_user = await prisma.box_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Box_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Box_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Box_user'> extends True ? Prisma__Box_userClient<Box_userGetPayload<T>> : Prisma__Box_userClient<Box_userGetPayload<T> | null, null>

    /**
     * Find the first Box_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Box_userFindFirstOrThrowArgs} args - Arguments to find a Box_user
     * @example
     * // Get one Box_user
     * const box_user = await prisma.box_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Box_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Box_userFindFirstOrThrowArgs>
    ): Prisma__Box_userClient<Box_userGetPayload<T>>

    /**
     * Find zero or more Box_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Box_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Box_users
     * const box_users = await prisma.box_user.findMany()
     * 
     * // Get first 10 Box_users
     * const box_users = await prisma.box_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const box_userWithIdOnly = await prisma.box_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Box_userFindManyArgs>(
      args?: SelectSubset<T, Box_userFindManyArgs>
    ): PrismaPromise<Array<Box_userGetPayload<T>>>

    /**
     * Create a Box_user.
     * @param {Box_userCreateArgs} args - Arguments to create a Box_user.
     * @example
     * // Create one Box_user
     * const Box_user = await prisma.box_user.create({
     *   data: {
     *     // ... data to create a Box_user
     *   }
     * })
     * 
    **/
    create<T extends Box_userCreateArgs>(
      args: SelectSubset<T, Box_userCreateArgs>
    ): Prisma__Box_userClient<Box_userGetPayload<T>>

    /**
     * Create many Box_users.
     *     @param {Box_userCreateManyArgs} args - Arguments to create many Box_users.
     *     @example
     *     // Create many Box_users
     *     const box_user = await prisma.box_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Box_userCreateManyArgs>(
      args?: SelectSubset<T, Box_userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Box_user.
     * @param {Box_userDeleteArgs} args - Arguments to delete one Box_user.
     * @example
     * // Delete one Box_user
     * const Box_user = await prisma.box_user.delete({
     *   where: {
     *     // ... filter to delete one Box_user
     *   }
     * })
     * 
    **/
    delete<T extends Box_userDeleteArgs>(
      args: SelectSubset<T, Box_userDeleteArgs>
    ): Prisma__Box_userClient<Box_userGetPayload<T>>

    /**
     * Update one Box_user.
     * @param {Box_userUpdateArgs} args - Arguments to update one Box_user.
     * @example
     * // Update one Box_user
     * const box_user = await prisma.box_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Box_userUpdateArgs>(
      args: SelectSubset<T, Box_userUpdateArgs>
    ): Prisma__Box_userClient<Box_userGetPayload<T>>

    /**
     * Delete zero or more Box_users.
     * @param {Box_userDeleteManyArgs} args - Arguments to filter Box_users to delete.
     * @example
     * // Delete a few Box_users
     * const { count } = await prisma.box_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Box_userDeleteManyArgs>(
      args?: SelectSubset<T, Box_userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Box_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Box_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Box_users
     * const box_user = await prisma.box_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Box_userUpdateManyArgs>(
      args: SelectSubset<T, Box_userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Box_user.
     * @param {Box_userUpsertArgs} args - Arguments to update or create a Box_user.
     * @example
     * // Update or create a Box_user
     * const box_user = await prisma.box_user.upsert({
     *   create: {
     *     // ... data to create a Box_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Box_user we want to update
     *   }
     * })
    **/
    upsert<T extends Box_userUpsertArgs>(
      args: SelectSubset<T, Box_userUpsertArgs>
    ): Prisma__Box_userClient<Box_userGetPayload<T>>

    /**
     * Count the number of Box_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Box_userCountArgs} args - Arguments to filter Box_users to count.
     * @example
     * // Count the number of Box_users
     * const count = await prisma.box_user.count({
     *   where: {
     *     // ... the filter for the Box_users we want to count
     *   }
     * })
    **/
    count<T extends Box_userCountArgs>(
      args?: Subset<T, Box_userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Box_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Box_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Box_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Box_userAggregateArgs>(args: Subset<T, Box_userAggregateArgs>): PrismaPromise<GetBox_userAggregateType<T>>

    /**
     * Group by Box_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Box_userGroupByArgs} args - Group by arguments.
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
      T extends Box_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Box_userGroupByArgs['orderBy'] }
        : { orderBy?: Box_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Box_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBox_userGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Box_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Box_userClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    box<T extends BoxArgs= {}>(args?: Subset<T, BoxArgs>): Prisma__BoxClient<BoxGetPayload<T> | Null>;

    person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Box_user base type for findUnique actions
   */
  export type Box_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * Filter, which Box_user to fetch.
     * 
    **/
    where: Box_userWhereUniqueInput
  }

  /**
   * Box_user findUnique
   */
  export interface Box_userFindUniqueArgs extends Box_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Box_user findUniqueOrThrow
   */
  export type Box_userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * Filter, which Box_user to fetch.
     * 
    **/
    where: Box_userWhereUniqueInput
  }


  /**
   * Box_user base type for findFirst actions
   */
  export type Box_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * Filter, which Box_user to fetch.
     * 
    **/
    where?: Box_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Box_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Box_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Box_users.
     * 
    **/
    cursor?: Box_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Box_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Box_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Box_users.
     * 
    **/
    distinct?: Enumerable<Box_userScalarFieldEnum>
  }

  /**
   * Box_user findFirst
   */
  export interface Box_userFindFirstArgs extends Box_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Box_user findFirstOrThrow
   */
  export type Box_userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * Filter, which Box_user to fetch.
     * 
    **/
    where?: Box_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Box_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Box_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Box_users.
     * 
    **/
    cursor?: Box_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Box_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Box_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Box_users.
     * 
    **/
    distinct?: Enumerable<Box_userScalarFieldEnum>
  }


  /**
   * Box_user findMany
   */
  export type Box_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * Filter, which Box_users to fetch.
     * 
    **/
    where?: Box_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Box_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Box_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Box_users.
     * 
    **/
    cursor?: Box_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Box_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Box_users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Box_userScalarFieldEnum>
  }


  /**
   * Box_user create
   */
  export type Box_userCreateArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * The data needed to create a Box_user.
     * 
    **/
    data: XOR<Box_userCreateInput, Box_userUncheckedCreateInput>
  }


  /**
   * Box_user createMany
   */
  export type Box_userCreateManyArgs = {
    /**
     * The data used to create many Box_users.
     * 
    **/
    data: Enumerable<Box_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Box_user update
   */
  export type Box_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * The data needed to update a Box_user.
     * 
    **/
    data: XOR<Box_userUpdateInput, Box_userUncheckedUpdateInput>
    /**
     * Choose, which Box_user to update.
     * 
    **/
    where: Box_userWhereUniqueInput
  }


  /**
   * Box_user updateMany
   */
  export type Box_userUpdateManyArgs = {
    /**
     * The data used to update Box_users.
     * 
    **/
    data: XOR<Box_userUpdateManyMutationInput, Box_userUncheckedUpdateManyInput>
    /**
     * Filter which Box_users to update
     * 
    **/
    where?: Box_userWhereInput
  }


  /**
   * Box_user upsert
   */
  export type Box_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * The filter to search for the Box_user to update in case it exists.
     * 
    **/
    where: Box_userWhereUniqueInput
    /**
     * In case the Box_user found by the `where` argument doesn't exist, create a new Box_user with this data.
     * 
    **/
    create: XOR<Box_userCreateInput, Box_userUncheckedCreateInput>
    /**
     * In case the Box_user was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Box_userUpdateInput, Box_userUncheckedUpdateInput>
  }


  /**
   * Box_user delete
   */
  export type Box_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    /**
     * Filter which Box_user to delete.
     * 
    **/
    where: Box_userWhereUniqueInput
  }


  /**
   * Box_user deleteMany
   */
  export type Box_userDeleteManyArgs = {
    /**
     * Filter which Box_users to delete
     * 
    **/
    where?: Box_userWhereInput
  }


  /**
   * Box_user without action
   */
  export type Box_userArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
  }



  /**
   * Model House
   */


  export type AggregateHouse = {
    _count: HouseCountAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  export type HouseMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HouseMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HouseCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HouseMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HouseMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HouseCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HouseAggregateArgs = {
    /**
     * Filter which House to aggregate.
     * 
    **/
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     * 
    **/
    orderBy?: Enumerable<HouseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Houses
    **/
    _count?: true | HouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseMaxAggregateInputType
  }

  export type GetHouseAggregateType<T extends HouseAggregateArgs> = {
        [P in keyof T & keyof AggregateHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouse[P]>
      : GetScalarType<T[P], AggregateHouse[P]>
  }




  export type HouseGroupByArgs = {
    where?: HouseWhereInput
    orderBy?: Enumerable<HouseOrderByWithAggregationInput>
    by: Array<HouseScalarFieldEnum>
    having?: HouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseCountAggregateInputType | true
    _min?: HouseMinAggregateInputType
    _max?: HouseMaxAggregateInputType
  }


  export type HouseGroupByOutputType = {
    id: string
    name: string
    _count: HouseCountAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  type GetHouseGroupByPayload<T extends HouseGroupByArgs> = PrismaPromise<
    Array<
      PickArray<HouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseGroupByOutputType[P]>
            : GetScalarType<T[P], HouseGroupByOutputType[P]>
        }
      >
    >


  export type HouseSelect = {
    id?: boolean
    name?: boolean
    room?: boolean | House$roomArgs
    _count?: boolean | HouseCountOutputTypeArgs
  }


  export type HouseInclude = {
    room?: boolean | House$roomArgs
    _count?: boolean | HouseCountOutputTypeArgs
  } 

  export type HouseGetPayload<S extends boolean | null | undefined | HouseArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? House :
    S extends undefined ? never :
    S extends { include: any } & (HouseArgs | HouseFindManyArgs)
    ? House  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? Array < RoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? HouseCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HouseArgs | HouseFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? Array < RoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? HouseCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof House ? House[P] : never
  } 
      : House


  type HouseCountArgs = Merge<
    Omit<HouseFindManyArgs, 'select' | 'include'> & {
      select?: HouseCountAggregateInputType | true
    }
  >

  export interface HouseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one House that matches the filter.
     * @param {HouseFindUniqueArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HouseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HouseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'House'> extends True ? Prisma__HouseClient<HouseGetPayload<T>> : Prisma__HouseClient<HouseGetPayload<T> | null, null>

    /**
     * Find one House that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HouseFindUniqueOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HouseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HouseFindUniqueOrThrowArgs>
    ): Prisma__HouseClient<HouseGetPayload<T>>

    /**
     * Find the first House that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HouseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HouseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'House'> extends True ? Prisma__HouseClient<HouseGetPayload<T>> : Prisma__HouseClient<HouseGetPayload<T> | null, null>

    /**
     * Find the first House that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HouseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HouseFindFirstOrThrowArgs>
    ): Prisma__HouseClient<HouseGetPayload<T>>

    /**
     * Find zero or more Houses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Houses
     * const houses = await prisma.house.findMany()
     * 
     * // Get first 10 Houses
     * const houses = await prisma.house.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const houseWithIdOnly = await prisma.house.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HouseFindManyArgs>(
      args?: SelectSubset<T, HouseFindManyArgs>
    ): PrismaPromise<Array<HouseGetPayload<T>>>

    /**
     * Create a House.
     * @param {HouseCreateArgs} args - Arguments to create a House.
     * @example
     * // Create one House
     * const House = await prisma.house.create({
     *   data: {
     *     // ... data to create a House
     *   }
     * })
     * 
    **/
    create<T extends HouseCreateArgs>(
      args: SelectSubset<T, HouseCreateArgs>
    ): Prisma__HouseClient<HouseGetPayload<T>>

    /**
     * Create many Houses.
     *     @param {HouseCreateManyArgs} args - Arguments to create many Houses.
     *     @example
     *     // Create many Houses
     *     const house = await prisma.house.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HouseCreateManyArgs>(
      args?: SelectSubset<T, HouseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a House.
     * @param {HouseDeleteArgs} args - Arguments to delete one House.
     * @example
     * // Delete one House
     * const House = await prisma.house.delete({
     *   where: {
     *     // ... filter to delete one House
     *   }
     * })
     * 
    **/
    delete<T extends HouseDeleteArgs>(
      args: SelectSubset<T, HouseDeleteArgs>
    ): Prisma__HouseClient<HouseGetPayload<T>>

    /**
     * Update one House.
     * @param {HouseUpdateArgs} args - Arguments to update one House.
     * @example
     * // Update one House
     * const house = await prisma.house.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HouseUpdateArgs>(
      args: SelectSubset<T, HouseUpdateArgs>
    ): Prisma__HouseClient<HouseGetPayload<T>>

    /**
     * Delete zero or more Houses.
     * @param {HouseDeleteManyArgs} args - Arguments to filter Houses to delete.
     * @example
     * // Delete a few Houses
     * const { count } = await prisma.house.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HouseDeleteManyArgs>(
      args?: SelectSubset<T, HouseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HouseUpdateManyArgs>(
      args: SelectSubset<T, HouseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one House.
     * @param {HouseUpsertArgs} args - Arguments to update or create a House.
     * @example
     * // Update or create a House
     * const house = await prisma.house.upsert({
     *   create: {
     *     // ... data to create a House
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the House we want to update
     *   }
     * })
    **/
    upsert<T extends HouseUpsertArgs>(
      args: SelectSubset<T, HouseUpsertArgs>
    ): Prisma__HouseClient<HouseGetPayload<T>>

    /**
     * Count the number of Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseCountArgs} args - Arguments to filter Houses to count.
     * @example
     * // Count the number of Houses
     * const count = await prisma.house.count({
     *   where: {
     *     // ... the filter for the Houses we want to count
     *   }
     * })
    **/
    count<T extends HouseCountArgs>(
      args?: Subset<T, HouseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HouseAggregateArgs>(args: Subset<T, HouseAggregateArgs>): PrismaPromise<GetHouseAggregateType<T>>

    /**
     * Group by House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseGroupByArgs} args - Group by arguments.
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
      T extends HouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseGroupByArgs['orderBy'] }
        : { orderBy?: HouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for House.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HouseClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    room<T extends House$roomArgs= {}>(args?: Subset<T, House$roomArgs>): PrismaPromise<Array<RoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * House base type for findUnique actions
   */
  export type HouseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * Filter, which House to fetch.
     * 
    **/
    where: HouseWhereUniqueInput
  }

  /**
   * House findUnique
   */
  export interface HouseFindUniqueArgs extends HouseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * House findUniqueOrThrow
   */
  export type HouseFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * Filter, which House to fetch.
     * 
    **/
    where: HouseWhereUniqueInput
  }


  /**
   * House base type for findFirst actions
   */
  export type HouseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * Filter, which House to fetch.
     * 
    **/
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     * 
    **/
    orderBy?: Enumerable<HouseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     * 
    **/
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     * 
    **/
    distinct?: Enumerable<HouseScalarFieldEnum>
  }

  /**
   * House findFirst
   */
  export interface HouseFindFirstArgs extends HouseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * House findFirstOrThrow
   */
  export type HouseFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * Filter, which House to fetch.
     * 
    **/
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     * 
    **/
    orderBy?: Enumerable<HouseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     * 
    **/
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     * 
    **/
    distinct?: Enumerable<HouseScalarFieldEnum>
  }


  /**
   * House findMany
   */
  export type HouseFindManyArgs = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * Filter, which Houses to fetch.
     * 
    **/
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     * 
    **/
    orderBy?: Enumerable<HouseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Houses.
     * 
    **/
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<HouseScalarFieldEnum>
  }


  /**
   * House create
   */
  export type HouseCreateArgs = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * The data needed to create a House.
     * 
    **/
    data: XOR<HouseCreateInput, HouseUncheckedCreateInput>
  }


  /**
   * House createMany
   */
  export type HouseCreateManyArgs = {
    /**
     * The data used to create many Houses.
     * 
    **/
    data: Enumerable<HouseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * House update
   */
  export type HouseUpdateArgs = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * The data needed to update a House.
     * 
    **/
    data: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
    /**
     * Choose, which House to update.
     * 
    **/
    where: HouseWhereUniqueInput
  }


  /**
   * House updateMany
   */
  export type HouseUpdateManyArgs = {
    /**
     * The data used to update Houses.
     * 
    **/
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     * 
    **/
    where?: HouseWhereInput
  }


  /**
   * House upsert
   */
  export type HouseUpsertArgs = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * The filter to search for the House to update in case it exists.
     * 
    **/
    where: HouseWhereUniqueInput
    /**
     * In case the House found by the `where` argument doesn't exist, create a new House with this data.
     * 
    **/
    create: XOR<HouseCreateInput, HouseUncheckedCreateInput>
    /**
     * In case the House was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
  }


  /**
   * House delete
   */
  export type HouseDeleteArgs = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
    /**
     * Filter which House to delete.
     * 
    **/
    where: HouseWhereUniqueInput
  }


  /**
   * House deleteMany
   */
  export type HouseDeleteManyArgs = {
    /**
     * Filter which Houses to delete
     * 
    **/
    where?: HouseWhereInput
  }


  /**
   * House.room
   */
  export type House$roomArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    where?: RoomWhereInput
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * House without action
   */
  export type HouseArgs = {
    /**
     * Select specific fields to fetch from the House
     * 
    **/
    select?: HouseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: HouseInclude | null
  }



  /**
   * Model Person
   */


  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PersonAggregateArgs = {
    /**
     * Filter which Person to aggregate.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs = {
    where?: PersonWhereInput
    orderBy?: Enumerable<PersonOrderByWithAggregationInput>
    by: Array<PersonScalarFieldEnum>
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }


  export type PersonGroupByOutputType = {
    id: string
    name: string
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect = {
    id?: boolean
    name?: boolean
    box_user?: boolean | Person$box_userArgs
    room?: boolean | Person$roomArgs
    room_user?: boolean | Person$room_userArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }


  export type PersonInclude = {
    box_user?: boolean | Person$box_userArgs
    room?: boolean | Person$roomArgs
    room_user?: boolean | Person$room_userArgs
    _count?: boolean | PersonCountOutputTypeArgs
  } 

  export type PersonGetPayload<S extends boolean | null | undefined | PersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Person :
    S extends undefined ? never :
    S extends { include: any } & (PersonArgs | PersonFindManyArgs)
    ? Person  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'box_user' ? Array < Box_userGetPayload<S['include'][P]>>  :
        P extends 'room' ? Array < RoomGetPayload<S['include'][P]>>  :
        P extends 'room_user' ? Array < Room_userGetPayload<S['include'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PersonArgs | PersonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'box_user' ? Array < Box_userGetPayload<S['select'][P]>>  :
        P extends 'room' ? Array < RoomGetPayload<S['select'][P]>>  :
        P extends 'room_user' ? Array < Room_userGetPayload<S['select'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Person ? Person[P] : never
  } 
      : Person


  type PersonCountArgs = Merge<
    Omit<PersonFindManyArgs, 'select' | 'include'> & {
      select?: PersonCountAggregateInputType | true
    }
  >

  export interface PersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Person'> extends True ? Prisma__PersonClient<PersonGetPayload<T>> : Prisma__PersonClient<PersonGetPayload<T> | null, null>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PersonFindUniqueOrThrowArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Person'> extends True ? Prisma__PersonClient<PersonGetPayload<T>> : Prisma__PersonClient<PersonGetPayload<T> | null, null>

    /**
     * Find the first Person that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PersonFindFirstOrThrowArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs>(
      args?: SelectSubset<T, PersonFindManyArgs>
    ): PrismaPromise<Array<PersonGetPayload<T>>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs>(
      args: SelectSubset<T, PersonCreateArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Create many People.
     *     @param {PersonCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonCreateManyArgs>(
      args?: SelectSubset<T, PersonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs>(
      args: SelectSubset<T, PersonDeleteArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs>(
      args: SelectSubset<T, PersonUpdateArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs>(
      args?: SelectSubset<T, PersonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs>(
      args: SelectSubset<T, PersonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs>(
      args: SelectSubset<T, PersonUpsertArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    box_user<T extends Person$box_userArgs= {}>(args?: Subset<T, Person$box_userArgs>): PrismaPromise<Array<Box_userGetPayload<T>>| Null>;

    room<T extends Person$roomArgs= {}>(args?: Subset<T, Person$roomArgs>): PrismaPromise<Array<RoomGetPayload<T>>| Null>;

    room_user<T extends Person$room_userArgs= {}>(args?: Subset<T, Person$room_userArgs>): PrismaPromise<Array<Room_userGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Person base type for findUnique actions
   */
  export type PersonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUnique
   */
  export interface PersonFindUniqueArgs extends PersonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person base type for findFirst actions
   */
  export type PersonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     * 
    **/
    distinct?: Enumerable<PersonScalarFieldEnum>
  }

  /**
   * Person findFirst
   */
  export interface PersonFindFirstArgs extends PersonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     * 
    **/
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person findMany
   */
  export type PersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which People to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person create
   */
  export type PersonCreateArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The data needed to create a Person.
     * 
    **/
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person createMany
   */
  export type PersonCreateManyArgs = {
    /**
     * The data used to create many People.
     * 
    **/
    data: Enumerable<PersonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The data needed to update a Person.
     * 
    **/
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs = {
    /**
     * The data used to update People.
     * 
    **/
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     * 
    **/
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The filter to search for the Person to update in case it exists.
     * 
    **/
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     * 
    **/
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter which Person to delete.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs = {
    /**
     * Filter which People to delete
     * 
    **/
    where?: PersonWhereInput
  }


  /**
   * Person.box_user
   */
  export type Person$box_userArgs = {
    /**
     * Select specific fields to fetch from the Box_user
     * 
    **/
    select?: Box_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Box_userInclude | null
    where?: Box_userWhereInput
    orderBy?: Enumerable<Box_userOrderByWithRelationInput>
    cursor?: Box_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Box_userScalarFieldEnum>
  }


  /**
   * Person.room
   */
  export type Person$roomArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    where?: RoomWhereInput
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Person.room_user
   */
  export type Person$room_userArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    where?: Room_userWhereInput
    orderBy?: Enumerable<Room_userOrderByWithRelationInput>
    cursor?: Room_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Room_userScalarFieldEnum>
  }


  /**
   * Person without action
   */
  export type PersonArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
  }



  /**
   * Model Room
   */


  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    house_id: string | null
    owner_id: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    house_id: string | null
    owner_id: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    house_id: number
    owner_id: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    house_id?: true
    owner_id?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    house_id?: true
    owner_id?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    house_id?: true
    owner_id?: true
    _all?: true
  }

  export type RoomAggregateArgs = {
    /**
     * Filter which Room to aggregate.
     * 
    **/
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     * 
    **/
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs = {
    where?: RoomWhereInput
    orderBy?: Enumerable<RoomOrderByWithAggregationInput>
    by: Array<RoomScalarFieldEnum>
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }


  export type RoomGroupByOutputType = {
    id: string
    name: string
    house_id: string
    owner_id: string | null
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect = {
    id?: boolean
    name?: boolean
    house_id?: boolean
    owner_id?: boolean
    box?: boolean | Room$boxArgs
    house?: boolean | HouseArgs
    person?: boolean | PersonArgs
    room_user?: boolean | Room$room_userArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }


  export type RoomInclude = {
    box?: boolean | Room$boxArgs
    house?: boolean | HouseArgs
    person?: boolean | PersonArgs
    room_user?: boolean | Room$room_userArgs
    _count?: boolean | RoomCountOutputTypeArgs
  } 

  export type RoomGetPayload<S extends boolean | null | undefined | RoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Room :
    S extends undefined ? never :
    S extends { include: any } & (RoomArgs | RoomFindManyArgs)
    ? Room  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'box' ? Array < BoxGetPayload<S['include'][P]>>  :
        P extends 'house' ? HouseGetPayload<S['include'][P]> :
        P extends 'person' ? PersonGetPayload<S['include'][P]> | null :
        P extends 'room_user' ? Array < Room_userGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoomArgs | RoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'box' ? Array < BoxGetPayload<S['select'][P]>>  :
        P extends 'house' ? HouseGetPayload<S['select'][P]> :
        P extends 'person' ? PersonGetPayload<S['select'][P]> | null :
        P extends 'room_user' ? Array < Room_userGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Room ? Room[P] : never
  } 
      : Room


  type RoomCountArgs = Merge<
    Omit<RoomFindManyArgs, 'select' | 'include'> & {
      select?: RoomCountAggregateInputType | true
    }
  >

  export interface RoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Room'> extends True ? Prisma__RoomClient<RoomGetPayload<T>> : Prisma__RoomClient<RoomGetPayload<T> | null, null>

    /**
     * Find one Room that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoomFindUniqueOrThrowArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Room'> extends True ? Prisma__RoomClient<RoomGetPayload<T>> : Prisma__RoomClient<RoomGetPayload<T> | null, null>

    /**
     * Find the first Room that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoomFindFirstOrThrowArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoomFindManyArgs>(
      args?: SelectSubset<T, RoomFindManyArgs>
    ): PrismaPromise<Array<RoomGetPayload<T>>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
    **/
    create<T extends RoomCreateArgs>(
      args: SelectSubset<T, RoomCreateArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Create many Rooms.
     *     @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     *     @example
     *     // Create many Rooms
     *     const room = await prisma.room.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomCreateManyArgs>(
      args?: SelectSubset<T, RoomCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
    **/
    delete<T extends RoomDeleteArgs>(
      args: SelectSubset<T, RoomDeleteArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomUpdateArgs>(
      args: SelectSubset<T, RoomUpdateArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomDeleteManyArgs>(
      args?: SelectSubset<T, RoomDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomUpdateManyArgs>(
      args: SelectSubset<T, RoomUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
    **/
    upsert<T extends RoomUpsertArgs>(
      args: SelectSubset<T, RoomUpsertArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoomClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    box<T extends Room$boxArgs= {}>(args?: Subset<T, Room$boxArgs>): PrismaPromise<Array<BoxGetPayload<T>>| Null>;

    house<T extends HouseArgs= {}>(args?: Subset<T, HouseArgs>): Prisma__HouseClient<HouseGetPayload<T> | Null>;

    person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    room_user<T extends Room$room_userArgs= {}>(args?: Subset<T, Room$room_userArgs>): PrismaPromise<Array<Room_userGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Room base type for findUnique actions
   */
  export type RoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     * 
    **/
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUnique
   */
  export interface RoomFindUniqueArgs extends RoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     * 
    **/
    where: RoomWhereUniqueInput
  }


  /**
   * Room base type for findFirst actions
   */
  export type RoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     * 
    **/
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     * 
    **/
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     * 
    **/
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     * 
    **/
    distinct?: Enumerable<RoomScalarFieldEnum>
  }

  /**
   * Room findFirst
   */
  export interface RoomFindFirstArgs extends RoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     * 
    **/
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     * 
    **/
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     * 
    **/
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     * 
    **/
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Room findMany
   */
  export type RoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * Filter, which Rooms to fetch.
     * 
    **/
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     * 
    **/
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     * 
    **/
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Room create
   */
  export type RoomCreateArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * The data needed to create a Room.
     * 
    **/
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }


  /**
   * Room createMany
   */
  export type RoomCreateManyArgs = {
    /**
     * The data used to create many Rooms.
     * 
    **/
    data: Enumerable<RoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Room update
   */
  export type RoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * The data needed to update a Room.
     * 
    **/
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     * 
    **/
    where: RoomWhereUniqueInput
  }


  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs = {
    /**
     * The data used to update Rooms.
     * 
    **/
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     * 
    **/
    where?: RoomWhereInput
  }


  /**
   * Room upsert
   */
  export type RoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * The filter to search for the Room to update in case it exists.
     * 
    **/
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     * 
    **/
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }


  /**
   * Room delete
   */
  export type RoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
    /**
     * Filter which Room to delete.
     * 
    **/
    where: RoomWhereUniqueInput
  }


  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs = {
    /**
     * Filter which Rooms to delete
     * 
    **/
    where?: RoomWhereInput
  }


  /**
   * Room.box
   */
  export type Room$boxArgs = {
    /**
     * Select specific fields to fetch from the Box
     * 
    **/
    select?: BoxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoxInclude | null
    where?: BoxWhereInput
    orderBy?: Enumerable<BoxOrderByWithRelationInput>
    cursor?: BoxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoxScalarFieldEnum>
  }


  /**
   * Room.room_user
   */
  export type Room$room_userArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    where?: Room_userWhereInput
    orderBy?: Enumerable<Room_userOrderByWithRelationInput>
    cursor?: Room_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Room_userScalarFieldEnum>
  }


  /**
   * Room without action
   */
  export type RoomArgs = {
    /**
     * Select specific fields to fetch from the Room
     * 
    **/
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoomInclude | null
  }



  /**
   * Model Room_user
   */


  export type AggregateRoom_user = {
    _count: Room_userCountAggregateOutputType | null
    _min: Room_userMinAggregateOutputType | null
    _max: Room_userMaxAggregateOutputType | null
  }

  export type Room_userMinAggregateOutputType = {
    id: string | null
    person_id: string | null
  }

  export type Room_userMaxAggregateOutputType = {
    id: string | null
    person_id: string | null
  }

  export type Room_userCountAggregateOutputType = {
    id: number
    person_id: number
    _all: number
  }


  export type Room_userMinAggregateInputType = {
    id?: true
    person_id?: true
  }

  export type Room_userMaxAggregateInputType = {
    id?: true
    person_id?: true
  }

  export type Room_userCountAggregateInputType = {
    id?: true
    person_id?: true
    _all?: true
  }

  export type Room_userAggregateArgs = {
    /**
     * Filter which Room_user to aggregate.
     * 
    **/
    where?: Room_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Room_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Room_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Room_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Room_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Room_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Room_users
    **/
    _count?: true | Room_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Room_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Room_userMaxAggregateInputType
  }

  export type GetRoom_userAggregateType<T extends Room_userAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom_user[P]>
      : GetScalarType<T[P], AggregateRoom_user[P]>
  }




  export type Room_userGroupByArgs = {
    where?: Room_userWhereInput
    orderBy?: Enumerable<Room_userOrderByWithAggregationInput>
    by: Array<Room_userScalarFieldEnum>
    having?: Room_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Room_userCountAggregateInputType | true
    _min?: Room_userMinAggregateInputType
    _max?: Room_userMaxAggregateInputType
  }


  export type Room_userGroupByOutputType = {
    id: string
    person_id: string
    _count: Room_userCountAggregateOutputType | null
    _min: Room_userMinAggregateOutputType | null
    _max: Room_userMaxAggregateOutputType | null
  }

  type GetRoom_userGroupByPayload<T extends Room_userGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Room_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Room_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Room_userGroupByOutputType[P]>
            : GetScalarType<T[P], Room_userGroupByOutputType[P]>
        }
      >
    >


  export type Room_userSelect = {
    id?: boolean
    person_id?: boolean
    room?: boolean | RoomArgs
    person?: boolean | PersonArgs
  }


  export type Room_userInclude = {
    room?: boolean | RoomArgs
    person?: boolean | PersonArgs
  } 

  export type Room_userGetPayload<S extends boolean | null | undefined | Room_userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Room_user :
    S extends undefined ? never :
    S extends { include: any } & (Room_userArgs | Room_userFindManyArgs)
    ? Room_user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? RoomGetPayload<S['include'][P]> :
        P extends 'person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Room_userArgs | Room_userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? RoomGetPayload<S['select'][P]> :
        P extends 'person' ? PersonGetPayload<S['select'][P]> :  P extends keyof Room_user ? Room_user[P] : never
  } 
      : Room_user


  type Room_userCountArgs = Merge<
    Omit<Room_userFindManyArgs, 'select' | 'include'> & {
      select?: Room_userCountAggregateInputType | true
    }
  >

  export interface Room_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Room_user that matches the filter.
     * @param {Room_userFindUniqueArgs} args - Arguments to find a Room_user
     * @example
     * // Get one Room_user
     * const room_user = await prisma.room_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Room_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Room_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Room_user'> extends True ? Prisma__Room_userClient<Room_userGetPayload<T>> : Prisma__Room_userClient<Room_userGetPayload<T> | null, null>

    /**
     * Find one Room_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Room_userFindUniqueOrThrowArgs} args - Arguments to find a Room_user
     * @example
     * // Get one Room_user
     * const room_user = await prisma.room_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Room_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Room_userFindUniqueOrThrowArgs>
    ): Prisma__Room_userClient<Room_userGetPayload<T>>

    /**
     * Find the first Room_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_userFindFirstArgs} args - Arguments to find a Room_user
     * @example
     * // Get one Room_user
     * const room_user = await prisma.room_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Room_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Room_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Room_user'> extends True ? Prisma__Room_userClient<Room_userGetPayload<T>> : Prisma__Room_userClient<Room_userGetPayload<T> | null, null>

    /**
     * Find the first Room_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_userFindFirstOrThrowArgs} args - Arguments to find a Room_user
     * @example
     * // Get one Room_user
     * const room_user = await prisma.room_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Room_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Room_userFindFirstOrThrowArgs>
    ): Prisma__Room_userClient<Room_userGetPayload<T>>

    /**
     * Find zero or more Room_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Room_users
     * const room_users = await prisma.room_user.findMany()
     * 
     * // Get first 10 Room_users
     * const room_users = await prisma.room_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const room_userWithIdOnly = await prisma.room_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Room_userFindManyArgs>(
      args?: SelectSubset<T, Room_userFindManyArgs>
    ): PrismaPromise<Array<Room_userGetPayload<T>>>

    /**
     * Create a Room_user.
     * @param {Room_userCreateArgs} args - Arguments to create a Room_user.
     * @example
     * // Create one Room_user
     * const Room_user = await prisma.room_user.create({
     *   data: {
     *     // ... data to create a Room_user
     *   }
     * })
     * 
    **/
    create<T extends Room_userCreateArgs>(
      args: SelectSubset<T, Room_userCreateArgs>
    ): Prisma__Room_userClient<Room_userGetPayload<T>>

    /**
     * Create many Room_users.
     *     @param {Room_userCreateManyArgs} args - Arguments to create many Room_users.
     *     @example
     *     // Create many Room_users
     *     const room_user = await prisma.room_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Room_userCreateManyArgs>(
      args?: SelectSubset<T, Room_userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Room_user.
     * @param {Room_userDeleteArgs} args - Arguments to delete one Room_user.
     * @example
     * // Delete one Room_user
     * const Room_user = await prisma.room_user.delete({
     *   where: {
     *     // ... filter to delete one Room_user
     *   }
     * })
     * 
    **/
    delete<T extends Room_userDeleteArgs>(
      args: SelectSubset<T, Room_userDeleteArgs>
    ): Prisma__Room_userClient<Room_userGetPayload<T>>

    /**
     * Update one Room_user.
     * @param {Room_userUpdateArgs} args - Arguments to update one Room_user.
     * @example
     * // Update one Room_user
     * const room_user = await prisma.room_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Room_userUpdateArgs>(
      args: SelectSubset<T, Room_userUpdateArgs>
    ): Prisma__Room_userClient<Room_userGetPayload<T>>

    /**
     * Delete zero or more Room_users.
     * @param {Room_userDeleteManyArgs} args - Arguments to filter Room_users to delete.
     * @example
     * // Delete a few Room_users
     * const { count } = await prisma.room_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Room_userDeleteManyArgs>(
      args?: SelectSubset<T, Room_userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Room_users
     * const room_user = await prisma.room_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Room_userUpdateManyArgs>(
      args: SelectSubset<T, Room_userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Room_user.
     * @param {Room_userUpsertArgs} args - Arguments to update or create a Room_user.
     * @example
     * // Update or create a Room_user
     * const room_user = await prisma.room_user.upsert({
     *   create: {
     *     // ... data to create a Room_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room_user we want to update
     *   }
     * })
    **/
    upsert<T extends Room_userUpsertArgs>(
      args: SelectSubset<T, Room_userUpsertArgs>
    ): Prisma__Room_userClient<Room_userGetPayload<T>>

    /**
     * Count the number of Room_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_userCountArgs} args - Arguments to filter Room_users to count.
     * @example
     * // Count the number of Room_users
     * const count = await prisma.room_user.count({
     *   where: {
     *     // ... the filter for the Room_users we want to count
     *   }
     * })
    **/
    count<T extends Room_userCountArgs>(
      args?: Subset<T, Room_userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Room_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Room_userAggregateArgs>(args: Subset<T, Room_userAggregateArgs>): PrismaPromise<GetRoom_userAggregateType<T>>

    /**
     * Group by Room_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_userGroupByArgs} args - Group by arguments.
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
      T extends Room_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Room_userGroupByArgs['orderBy'] }
        : { orderBy?: Room_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Room_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoom_userGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Room_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Room_userClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Room_user base type for findUnique actions
   */
  export type Room_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * Filter, which Room_user to fetch.
     * 
    **/
    where: Room_userWhereUniqueInput
  }

  /**
   * Room_user findUnique
   */
  export interface Room_userFindUniqueArgs extends Room_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room_user findUniqueOrThrow
   */
  export type Room_userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * Filter, which Room_user to fetch.
     * 
    **/
    where: Room_userWhereUniqueInput
  }


  /**
   * Room_user base type for findFirst actions
   */
  export type Room_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * Filter, which Room_user to fetch.
     * 
    **/
    where?: Room_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Room_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Room_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Room_users.
     * 
    **/
    cursor?: Room_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Room_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Room_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Room_users.
     * 
    **/
    distinct?: Enumerable<Room_userScalarFieldEnum>
  }

  /**
   * Room_user findFirst
   */
  export interface Room_userFindFirstArgs extends Room_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room_user findFirstOrThrow
   */
  export type Room_userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * Filter, which Room_user to fetch.
     * 
    **/
    where?: Room_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Room_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Room_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Room_users.
     * 
    **/
    cursor?: Room_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Room_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Room_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Room_users.
     * 
    **/
    distinct?: Enumerable<Room_userScalarFieldEnum>
  }


  /**
   * Room_user findMany
   */
  export type Room_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * Filter, which Room_users to fetch.
     * 
    **/
    where?: Room_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Room_users to fetch.
     * 
    **/
    orderBy?: Enumerable<Room_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Room_users.
     * 
    **/
    cursor?: Room_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Room_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Room_users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Room_userScalarFieldEnum>
  }


  /**
   * Room_user create
   */
  export type Room_userCreateArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * The data needed to create a Room_user.
     * 
    **/
    data: XOR<Room_userCreateInput, Room_userUncheckedCreateInput>
  }


  /**
   * Room_user createMany
   */
  export type Room_userCreateManyArgs = {
    /**
     * The data used to create many Room_users.
     * 
    **/
    data: Enumerable<Room_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Room_user update
   */
  export type Room_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * The data needed to update a Room_user.
     * 
    **/
    data: XOR<Room_userUpdateInput, Room_userUncheckedUpdateInput>
    /**
     * Choose, which Room_user to update.
     * 
    **/
    where: Room_userWhereUniqueInput
  }


  /**
   * Room_user updateMany
   */
  export type Room_userUpdateManyArgs = {
    /**
     * The data used to update Room_users.
     * 
    **/
    data: XOR<Room_userUpdateManyMutationInput, Room_userUncheckedUpdateManyInput>
    /**
     * Filter which Room_users to update
     * 
    **/
    where?: Room_userWhereInput
  }


  /**
   * Room_user upsert
   */
  export type Room_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * The filter to search for the Room_user to update in case it exists.
     * 
    **/
    where: Room_userWhereUniqueInput
    /**
     * In case the Room_user found by the `where` argument doesn't exist, create a new Room_user with this data.
     * 
    **/
    create: XOR<Room_userCreateInput, Room_userUncheckedCreateInput>
    /**
     * In case the Room_user was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Room_userUpdateInput, Room_userUncheckedUpdateInput>
  }


  /**
   * Room_user delete
   */
  export type Room_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
    /**
     * Filter which Room_user to delete.
     * 
    **/
    where: Room_userWhereUniqueInput
  }


  /**
   * Room_user deleteMany
   */
  export type Room_userDeleteManyArgs = {
    /**
     * Filter which Room_users to delete
     * 
    **/
    where?: Room_userWhereInput
  }


  /**
   * Room_user without action
   */
  export type Room_userArgs = {
    /**
     * Select specific fields to fetch from the Room_user
     * 
    **/
    select?: Room_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Room_userInclude | null
  }



  /**
   * Model Thing
   */


  export type AggregateThing = {
    _count: ThingCountAggregateOutputType | null
    _min: ThingMinAggregateOutputType | null
    _max: ThingMaxAggregateOutputType | null
  }

  export type ThingMinAggregateOutputType = {
    id: string | null
    name: string | null
    box_id: string | null
  }

  export type ThingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    box_id: string | null
  }

  export type ThingCountAggregateOutputType = {
    id: number
    name: number
    box_id: number
    _all: number
  }


  export type ThingMinAggregateInputType = {
    id?: true
    name?: true
    box_id?: true
  }

  export type ThingMaxAggregateInputType = {
    id?: true
    name?: true
    box_id?: true
  }

  export type ThingCountAggregateInputType = {
    id?: true
    name?: true
    box_id?: true
    _all?: true
  }

  export type ThingAggregateArgs = {
    /**
     * Filter which Thing to aggregate.
     * 
    **/
    where?: ThingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Things to fetch.
     * 
    **/
    orderBy?: Enumerable<ThingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ThingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Things from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Things.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Things
    **/
    _count?: true | ThingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThingMaxAggregateInputType
  }

  export type GetThingAggregateType<T extends ThingAggregateArgs> = {
        [P in keyof T & keyof AggregateThing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThing[P]>
      : GetScalarType<T[P], AggregateThing[P]>
  }




  export type ThingGroupByArgs = {
    where?: ThingWhereInput
    orderBy?: Enumerable<ThingOrderByWithAggregationInput>
    by: Array<ThingScalarFieldEnum>
    having?: ThingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThingCountAggregateInputType | true
    _min?: ThingMinAggregateInputType
    _max?: ThingMaxAggregateInputType
  }


  export type ThingGroupByOutputType = {
    id: string
    name: string
    box_id: string
    _count: ThingCountAggregateOutputType | null
    _min: ThingMinAggregateOutputType | null
    _max: ThingMaxAggregateOutputType | null
  }

  type GetThingGroupByPayload<T extends ThingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ThingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThingGroupByOutputType[P]>
            : GetScalarType<T[P], ThingGroupByOutputType[P]>
        }
      >
    >


  export type ThingSelect = {
    id?: boolean
    name?: boolean
    box_id?: boolean
    box?: boolean | BoxArgs
  }


  export type ThingInclude = {
    box?: boolean | BoxArgs
  } 

  export type ThingGetPayload<S extends boolean | null | undefined | ThingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Thing :
    S extends undefined ? never :
    S extends { include: any } & (ThingArgs | ThingFindManyArgs)
    ? Thing  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'box' ? BoxGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ThingArgs | ThingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'box' ? BoxGetPayload<S['select'][P]> :  P extends keyof Thing ? Thing[P] : never
  } 
      : Thing


  type ThingCountArgs = Merge<
    Omit<ThingFindManyArgs, 'select' | 'include'> & {
      select?: ThingCountAggregateInputType | true
    }
  >

  export interface ThingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Thing that matches the filter.
     * @param {ThingFindUniqueArgs} args - Arguments to find a Thing
     * @example
     * // Get one Thing
     * const thing = await prisma.thing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ThingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Thing'> extends True ? Prisma__ThingClient<ThingGetPayload<T>> : Prisma__ThingClient<ThingGetPayload<T> | null, null>

    /**
     * Find one Thing that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThingFindUniqueOrThrowArgs} args - Arguments to find a Thing
     * @example
     * // Get one Thing
     * const thing = await prisma.thing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ThingFindUniqueOrThrowArgs>
    ): Prisma__ThingClient<ThingGetPayload<T>>

    /**
     * Find the first Thing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThingFindFirstArgs} args - Arguments to find a Thing
     * @example
     * // Get one Thing
     * const thing = await prisma.thing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ThingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Thing'> extends True ? Prisma__ThingClient<ThingGetPayload<T>> : Prisma__ThingClient<ThingGetPayload<T> | null, null>

    /**
     * Find the first Thing that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThingFindFirstOrThrowArgs} args - Arguments to find a Thing
     * @example
     * // Get one Thing
     * const thing = await prisma.thing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ThingFindFirstOrThrowArgs>
    ): Prisma__ThingClient<ThingGetPayload<T>>

    /**
     * Find zero or more Things that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Things
     * const things = await prisma.thing.findMany()
     * 
     * // Get first 10 Things
     * const things = await prisma.thing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thingWithIdOnly = await prisma.thing.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThingFindManyArgs>(
      args?: SelectSubset<T, ThingFindManyArgs>
    ): PrismaPromise<Array<ThingGetPayload<T>>>

    /**
     * Create a Thing.
     * @param {ThingCreateArgs} args - Arguments to create a Thing.
     * @example
     * // Create one Thing
     * const Thing = await prisma.thing.create({
     *   data: {
     *     // ... data to create a Thing
     *   }
     * })
     * 
    **/
    create<T extends ThingCreateArgs>(
      args: SelectSubset<T, ThingCreateArgs>
    ): Prisma__ThingClient<ThingGetPayload<T>>

    /**
     * Create many Things.
     *     @param {ThingCreateManyArgs} args - Arguments to create many Things.
     *     @example
     *     // Create many Things
     *     const thing = await prisma.thing.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ThingCreateManyArgs>(
      args?: SelectSubset<T, ThingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Thing.
     * @param {ThingDeleteArgs} args - Arguments to delete one Thing.
     * @example
     * // Delete one Thing
     * const Thing = await prisma.thing.delete({
     *   where: {
     *     // ... filter to delete one Thing
     *   }
     * })
     * 
    **/
    delete<T extends ThingDeleteArgs>(
      args: SelectSubset<T, ThingDeleteArgs>
    ): Prisma__ThingClient<ThingGetPayload<T>>

    /**
     * Update one Thing.
     * @param {ThingUpdateArgs} args - Arguments to update one Thing.
     * @example
     * // Update one Thing
     * const thing = await prisma.thing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThingUpdateArgs>(
      args: SelectSubset<T, ThingUpdateArgs>
    ): Prisma__ThingClient<ThingGetPayload<T>>

    /**
     * Delete zero or more Things.
     * @param {ThingDeleteManyArgs} args - Arguments to filter Things to delete.
     * @example
     * // Delete a few Things
     * const { count } = await prisma.thing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThingDeleteManyArgs>(
      args?: SelectSubset<T, ThingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Things.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Things
     * const thing = await prisma.thing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThingUpdateManyArgs>(
      args: SelectSubset<T, ThingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Thing.
     * @param {ThingUpsertArgs} args - Arguments to update or create a Thing.
     * @example
     * // Update or create a Thing
     * const thing = await prisma.thing.upsert({
     *   create: {
     *     // ... data to create a Thing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thing we want to update
     *   }
     * })
    **/
    upsert<T extends ThingUpsertArgs>(
      args: SelectSubset<T, ThingUpsertArgs>
    ): Prisma__ThingClient<ThingGetPayload<T>>

    /**
     * Count the number of Things.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThingCountArgs} args - Arguments to filter Things to count.
     * @example
     * // Count the number of Things
     * const count = await prisma.thing.count({
     *   where: {
     *     // ... the filter for the Things we want to count
     *   }
     * })
    **/
    count<T extends ThingCountArgs>(
      args?: Subset<T, ThingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThingAggregateArgs>(args: Subset<T, ThingAggregateArgs>): PrismaPromise<GetThingAggregateType<T>>

    /**
     * Group by Thing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThingGroupByArgs} args - Group by arguments.
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
      T extends ThingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThingGroupByArgs['orderBy'] }
        : { orderBy?: ThingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ThingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Thing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ThingClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    box<T extends BoxArgs= {}>(args?: Subset<T, BoxArgs>): Prisma__BoxClient<BoxGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Thing base type for findUnique actions
   */
  export type ThingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * Filter, which Thing to fetch.
     * 
    **/
    where: ThingWhereUniqueInput
  }

  /**
   * Thing findUnique
   */
  export interface ThingFindUniqueArgs extends ThingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Thing findUniqueOrThrow
   */
  export type ThingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * Filter, which Thing to fetch.
     * 
    **/
    where: ThingWhereUniqueInput
  }


  /**
   * Thing base type for findFirst actions
   */
  export type ThingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * Filter, which Thing to fetch.
     * 
    **/
    where?: ThingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Things to fetch.
     * 
    **/
    orderBy?: Enumerable<ThingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Things.
     * 
    **/
    cursor?: ThingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Things from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Things.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Things.
     * 
    **/
    distinct?: Enumerable<ThingScalarFieldEnum>
  }

  /**
   * Thing findFirst
   */
  export interface ThingFindFirstArgs extends ThingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Thing findFirstOrThrow
   */
  export type ThingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * Filter, which Thing to fetch.
     * 
    **/
    where?: ThingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Things to fetch.
     * 
    **/
    orderBy?: Enumerable<ThingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Things.
     * 
    **/
    cursor?: ThingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Things from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Things.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Things.
     * 
    **/
    distinct?: Enumerable<ThingScalarFieldEnum>
  }


  /**
   * Thing findMany
   */
  export type ThingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * Filter, which Things to fetch.
     * 
    **/
    where?: ThingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Things to fetch.
     * 
    **/
    orderBy?: Enumerable<ThingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Things.
     * 
    **/
    cursor?: ThingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Things from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Things.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ThingScalarFieldEnum>
  }


  /**
   * Thing create
   */
  export type ThingCreateArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * The data needed to create a Thing.
     * 
    **/
    data: XOR<ThingCreateInput, ThingUncheckedCreateInput>
  }


  /**
   * Thing createMany
   */
  export type ThingCreateManyArgs = {
    /**
     * The data used to create many Things.
     * 
    **/
    data: Enumerable<ThingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Thing update
   */
  export type ThingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * The data needed to update a Thing.
     * 
    **/
    data: XOR<ThingUpdateInput, ThingUncheckedUpdateInput>
    /**
     * Choose, which Thing to update.
     * 
    **/
    where: ThingWhereUniqueInput
  }


  /**
   * Thing updateMany
   */
  export type ThingUpdateManyArgs = {
    /**
     * The data used to update Things.
     * 
    **/
    data: XOR<ThingUpdateManyMutationInput, ThingUncheckedUpdateManyInput>
    /**
     * Filter which Things to update
     * 
    **/
    where?: ThingWhereInput
  }


  /**
   * Thing upsert
   */
  export type ThingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * The filter to search for the Thing to update in case it exists.
     * 
    **/
    where: ThingWhereUniqueInput
    /**
     * In case the Thing found by the `where` argument doesn't exist, create a new Thing with this data.
     * 
    **/
    create: XOR<ThingCreateInput, ThingUncheckedCreateInput>
    /**
     * In case the Thing was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ThingUpdateInput, ThingUncheckedUpdateInput>
  }


  /**
   * Thing delete
   */
  export type ThingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
    /**
     * Filter which Thing to delete.
     * 
    **/
    where: ThingWhereUniqueInput
  }


  /**
   * Thing deleteMany
   */
  export type ThingDeleteManyArgs = {
    /**
     * Filter which Things to delete
     * 
    **/
    where?: ThingWhereInput
  }


  /**
   * Thing without action
   */
  export type ThingArgs = {
    /**
     * Select specific fields to fetch from the Thing
     * 
    **/
    select?: ThingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThingInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BoxScalarFieldEnum: {
    id: 'id',
    name: 'name',
    room_id: 'room_id'
  };

  export type BoxScalarFieldEnum = (typeof BoxScalarFieldEnum)[keyof typeof BoxScalarFieldEnum]


  export const Box_userScalarFieldEnum: {
    id: 'id',
    person_id: 'person_id'
  };

  export type Box_userScalarFieldEnum = (typeof Box_userScalarFieldEnum)[keyof typeof Box_userScalarFieldEnum]


  export const HouseScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HouseScalarFieldEnum = (typeof HouseScalarFieldEnum)[keyof typeof HouseScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    house_id: 'house_id',
    owner_id: 'owner_id'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const Room_userScalarFieldEnum: {
    id: 'id',
    person_id: 'person_id'
  };

  export type Room_userScalarFieldEnum = (typeof Room_userScalarFieldEnum)[keyof typeof Room_userScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ThingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    box_id: 'box_id'
  };

  export type ThingScalarFieldEnum = (typeof ThingScalarFieldEnum)[keyof typeof ThingScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type BoxWhereInput = {
    AND?: Enumerable<BoxWhereInput>
    OR?: Enumerable<BoxWhereInput>
    NOT?: Enumerable<BoxWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    room_id?: UuidFilter | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    box_user?: Box_userListRelationFilter
    thing?: ThingListRelationFilter
  }

  export type BoxOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
    room?: RoomOrderByWithRelationInput
    box_user?: Box_userOrderByRelationAggregateInput
    thing?: ThingOrderByRelationAggregateInput
  }

  export type BoxWhereUniqueInput = {
    id?: string
  }

  export type BoxOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
    _count?: BoxCountOrderByAggregateInput
    _max?: BoxMaxOrderByAggregateInput
    _min?: BoxMinOrderByAggregateInput
  }

  export type BoxScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoxScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoxScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoxScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    room_id?: UuidWithAggregatesFilter | string
  }

  export type Box_userWhereInput = {
    AND?: Enumerable<Box_userWhereInput>
    OR?: Enumerable<Box_userWhereInput>
    NOT?: Enumerable<Box_userWhereInput>
    id?: UuidFilter | string
    person_id?: UuidFilter | string
    box?: XOR<BoxRelationFilter, BoxWhereInput>
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type Box_userOrderByWithRelationInput = {
    id?: SortOrder
    person_id?: SortOrder
    box?: BoxOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
  }

  export type Box_userWhereUniqueInput = {
    id_person_id?: Box_userIdPerson_idCompoundUniqueInput
  }

  export type Box_userOrderByWithAggregationInput = {
    id?: SortOrder
    person_id?: SortOrder
    _count?: Box_userCountOrderByAggregateInput
    _max?: Box_userMaxOrderByAggregateInput
    _min?: Box_userMinOrderByAggregateInput
  }

  export type Box_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Box_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<Box_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Box_userScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    person_id?: UuidWithAggregatesFilter | string
  }

  export type HouseWhereInput = {
    AND?: Enumerable<HouseWhereInput>
    OR?: Enumerable<HouseWhereInput>
    NOT?: Enumerable<HouseWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    room?: RoomListRelationFilter
  }

  export type HouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    room?: RoomOrderByRelationAggregateInput
  }

  export type HouseWhereUniqueInput = {
    id?: string
  }

  export type HouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HouseCountOrderByAggregateInput
    _max?: HouseMaxOrderByAggregateInput
    _min?: HouseMinOrderByAggregateInput
  }

  export type HouseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HouseScalarWhereWithAggregatesInput>
    OR?: Enumerable<HouseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HouseScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type PersonWhereInput = {
    AND?: Enumerable<PersonWhereInput>
    OR?: Enumerable<PersonWhereInput>
    NOT?: Enumerable<PersonWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    box_user?: Box_userListRelationFilter
    room?: RoomListRelationFilter
    room_user?: Room_userListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    box_user?: Box_userOrderByRelationAggregateInput
    room?: RoomOrderByRelationAggregateInput
    room_user?: Room_userOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = {
    id?: string
  }

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<PersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PersonScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type RoomWhereInput = {
    AND?: Enumerable<RoomWhereInput>
    OR?: Enumerable<RoomWhereInput>
    NOT?: Enumerable<RoomWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    house_id?: UuidFilter | string
    owner_id?: UuidNullableFilter | string | null
    box?: BoxListRelationFilter
    house?: XOR<HouseRelationFilter, HouseWhereInput>
    person?: XOR<PersonRelationFilter, PersonWhereInput> | null
    room_user?: Room_userListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    house_id?: SortOrder
    owner_id?: SortOrder
    box?: BoxOrderByRelationAggregateInput
    house?: HouseOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
    room_user?: Room_userOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = {
    id?: string
  }

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    house_id?: SortOrder
    owner_id?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoomScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    house_id?: UuidWithAggregatesFilter | string
    owner_id?: UuidNullableWithAggregatesFilter | string | null
  }

  export type Room_userWhereInput = {
    AND?: Enumerable<Room_userWhereInput>
    OR?: Enumerable<Room_userWhereInput>
    NOT?: Enumerable<Room_userWhereInput>
    id?: UuidFilter | string
    person_id?: UuidFilter | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type Room_userOrderByWithRelationInput = {
    id?: SortOrder
    person_id?: SortOrder
    room?: RoomOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
  }

  export type Room_userWhereUniqueInput = {
    id_person_id?: Room_userIdPerson_idCompoundUniqueInput
  }

  export type Room_userOrderByWithAggregationInput = {
    id?: SortOrder
    person_id?: SortOrder
    _count?: Room_userCountOrderByAggregateInput
    _max?: Room_userMaxOrderByAggregateInput
    _min?: Room_userMinOrderByAggregateInput
  }

  export type Room_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Room_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<Room_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Room_userScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    person_id?: UuidWithAggregatesFilter | string
  }

  export type ThingWhereInput = {
    AND?: Enumerable<ThingWhereInput>
    OR?: Enumerable<ThingWhereInput>
    NOT?: Enumerable<ThingWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    box_id?: UuidFilter | string
    box?: XOR<BoxRelationFilter, BoxWhereInput>
  }

  export type ThingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    box_id?: SortOrder
    box?: BoxOrderByWithRelationInput
  }

  export type ThingWhereUniqueInput = {
    id?: string
  }

  export type ThingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    box_id?: SortOrder
    _count?: ThingCountOrderByAggregateInput
    _max?: ThingMaxOrderByAggregateInput
    _min?: ThingMinOrderByAggregateInput
  }

  export type ThingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ThingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ThingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ThingScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    box_id?: UuidWithAggregatesFilter | string
  }

  export type BoxCreateInput = {
    id: string
    name: string
    room: RoomCreateNestedOneWithoutBoxInput
    box_user?: Box_userCreateNestedManyWithoutBoxInput
    thing?: ThingCreateNestedManyWithoutBoxInput
  }

  export type BoxUncheckedCreateInput = {
    id: string
    name: string
    room_id: string
    box_user?: Box_userUncheckedCreateNestedManyWithoutBoxInput
    thing?: ThingUncheckedCreateNestedManyWithoutBoxInput
  }

  export type BoxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutBoxNestedInput
    box_user?: Box_userUpdateManyWithoutBoxNestedInput
    thing?: ThingUpdateManyWithoutBoxNestedInput
  }

  export type BoxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUncheckedUpdateManyWithoutBoxNestedInput
    thing?: ThingUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type BoxCreateManyInput = {
    id: string
    name: string
    room_id: string
  }

  export type BoxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BoxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
  }

  export type Box_userCreateInput = {
    box: BoxCreateNestedOneWithoutBox_userInput
    person: PersonCreateNestedOneWithoutBox_userInput
  }

  export type Box_userUncheckedCreateInput = {
    id: string
    person_id: string
  }

  export type Box_userUpdateInput = {
    box?: BoxUpdateOneRequiredWithoutBox_userNestedInput
    person?: PersonUpdateOneRequiredWithoutBox_userNestedInput
  }

  export type Box_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
  }

  export type Box_userCreateManyInput = {
    id: string
    person_id: string
  }

  export type Box_userUpdateManyMutationInput = {

  }

  export type Box_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
  }

  export type HouseCreateInput = {
    id: string
    name: string
    room?: RoomCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateInput = {
    id: string
    name: string
    room?: RoomUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type HouseCreateManyInput = {
    id: string
    name: string
  }

  export type HouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateInput = {
    id: string
    name: string
    box_user?: Box_userCreateNestedManyWithoutPersonInput
    room?: RoomCreateNestedManyWithoutPersonInput
    room_user?: Room_userCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id: string
    name: string
    box_user?: Box_userUncheckedCreateNestedManyWithoutPersonInput
    room?: RoomUncheckedCreateNestedManyWithoutPersonInput
    room_user?: Room_userUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUpdateManyWithoutPersonNestedInput
    room?: RoomUpdateManyWithoutPersonNestedInput
    room_user?: Room_userUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUncheckedUpdateManyWithoutPersonNestedInput
    room?: RoomUncheckedUpdateManyWithoutPersonNestedInput
    room_user?: Room_userUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id: string
    name: string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    id: string
    name: string
    box?: BoxCreateNestedManyWithoutRoomInput
    house: HouseCreateNestedOneWithoutRoomInput
    person?: PersonCreateNestedOneWithoutRoomInput
    room_user?: Room_userCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id: string
    name: string
    house_id: string
    owner_id?: string | null
    box?: BoxUncheckedCreateNestedManyWithoutRoomInput
    room_user?: Room_userUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box?: BoxUpdateManyWithoutRoomNestedInput
    house?: HouseUpdateOneRequiredWithoutRoomNestedInput
    person?: PersonUpdateOneWithoutRoomNestedInput
    room_user?: Room_userUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    house_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    box?: BoxUncheckedUpdateManyWithoutRoomNestedInput
    room_user?: Room_userUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id: string
    name: string
    house_id: string
    owner_id?: string | null
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    house_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Room_userCreateInput = {
    room: RoomCreateNestedOneWithoutRoom_userInput
    person: PersonCreateNestedOneWithoutRoom_userInput
  }

  export type Room_userUncheckedCreateInput = {
    id: string
    person_id: string
  }

  export type Room_userUpdateInput = {
    room?: RoomUpdateOneRequiredWithoutRoom_userNestedInput
    person?: PersonUpdateOneRequiredWithoutRoom_userNestedInput
  }

  export type Room_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
  }

  export type Room_userCreateManyInput = {
    id: string
    person_id: string
  }

  export type Room_userUpdateManyMutationInput = {

  }

  export type Room_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    person_id?: StringFieldUpdateOperationsInput | string
  }

  export type ThingCreateInput = {
    id: string
    name: string
    box: BoxCreateNestedOneWithoutThingInput
  }

  export type ThingUncheckedCreateInput = {
    id: string
    name: string
    box_id: string
  }

  export type ThingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box?: BoxUpdateOneRequiredWithoutThingNestedInput
  }

  export type ThingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_id?: StringFieldUpdateOperationsInput | string
  }

  export type ThingCreateManyInput = {
    id: string
    name: string
    box_id: string
  }

  export type ThingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ThingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_id?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type RoomRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type Box_userListRelationFilter = {
    every?: Box_userWhereInput
    some?: Box_userWhereInput
    none?: Box_userWhereInput
  }

  export type ThingListRelationFilter = {
    every?: ThingWhereInput
    some?: ThingWhereInput
    none?: ThingWhereInput
  }

  export type Box_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoxCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
  }

  export type BoxMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
  }

  export type BoxMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room_id?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoxRelationFilter = {
    is?: BoxWhereInput
    isNot?: BoxWhereInput
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type Box_userIdPerson_idCompoundUniqueInput = {
    id: string
    person_id: string
  }

  export type Box_userCountOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type Box_userMaxOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type Box_userMinOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Room_userListRelationFilter = {
    every?: Room_userWhereInput
    some?: Room_userWhereInput
    none?: Room_userWhereInput
  }

  export type Room_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter | string | null
  }

  export type BoxListRelationFilter = {
    every?: BoxWhereInput
    some?: BoxWhereInput
    none?: BoxWhereInput
  }

  export type HouseRelationFilter = {
    is?: HouseWhereInput
    isNot?: HouseWhereInput
  }

  export type BoxOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    house_id?: SortOrder
    owner_id?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    house_id?: SortOrder
    owner_id?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    house_id?: SortOrder
    owner_id?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type Room_userIdPerson_idCompoundUniqueInput = {
    id: string
    person_id: string
  }

  export type Room_userCountOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type Room_userMaxOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type Room_userMinOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type ThingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    box_id?: SortOrder
  }

  export type ThingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    box_id?: SortOrder
  }

  export type ThingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    box_id?: SortOrder
  }

  export type RoomCreateNestedOneWithoutBoxInput = {
    create?: XOR<RoomCreateWithoutBoxInput, RoomUncheckedCreateWithoutBoxInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBoxInput
    connect?: RoomWhereUniqueInput
  }

  export type Box_userCreateNestedManyWithoutBoxInput = {
    create?: XOR<Enumerable<Box_userCreateWithoutBoxInput>, Enumerable<Box_userUncheckedCreateWithoutBoxInput>>
    connectOrCreate?: Enumerable<Box_userCreateOrConnectWithoutBoxInput>
    createMany?: Box_userCreateManyBoxInputEnvelope
    connect?: Enumerable<Box_userWhereUniqueInput>
  }

  export type ThingCreateNestedManyWithoutBoxInput = {
    create?: XOR<Enumerable<ThingCreateWithoutBoxInput>, Enumerable<ThingUncheckedCreateWithoutBoxInput>>
    connectOrCreate?: Enumerable<ThingCreateOrConnectWithoutBoxInput>
    createMany?: ThingCreateManyBoxInputEnvelope
    connect?: Enumerable<ThingWhereUniqueInput>
  }

  export type Box_userUncheckedCreateNestedManyWithoutBoxInput = {
    create?: XOR<Enumerable<Box_userCreateWithoutBoxInput>, Enumerable<Box_userUncheckedCreateWithoutBoxInput>>
    connectOrCreate?: Enumerable<Box_userCreateOrConnectWithoutBoxInput>
    createMany?: Box_userCreateManyBoxInputEnvelope
    connect?: Enumerable<Box_userWhereUniqueInput>
  }

  export type ThingUncheckedCreateNestedManyWithoutBoxInput = {
    create?: XOR<Enumerable<ThingCreateWithoutBoxInput>, Enumerable<ThingUncheckedCreateWithoutBoxInput>>
    connectOrCreate?: Enumerable<ThingCreateOrConnectWithoutBoxInput>
    createMany?: ThingCreateManyBoxInputEnvelope
    connect?: Enumerable<ThingWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RoomUpdateOneRequiredWithoutBoxNestedInput = {
    create?: XOR<RoomCreateWithoutBoxInput, RoomUncheckedCreateWithoutBoxInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBoxInput
    upsert?: RoomUpsertWithoutBoxInput
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutBoxInput, RoomUncheckedUpdateWithoutBoxInput>
  }

  export type Box_userUpdateManyWithoutBoxNestedInput = {
    create?: XOR<Enumerable<Box_userCreateWithoutBoxInput>, Enumerable<Box_userUncheckedCreateWithoutBoxInput>>
    connectOrCreate?: Enumerable<Box_userCreateOrConnectWithoutBoxInput>
    upsert?: Enumerable<Box_userUpsertWithWhereUniqueWithoutBoxInput>
    createMany?: Box_userCreateManyBoxInputEnvelope
    set?: Enumerable<Box_userWhereUniqueInput>
    disconnect?: Enumerable<Box_userWhereUniqueInput>
    delete?: Enumerable<Box_userWhereUniqueInput>
    connect?: Enumerable<Box_userWhereUniqueInput>
    update?: Enumerable<Box_userUpdateWithWhereUniqueWithoutBoxInput>
    updateMany?: Enumerable<Box_userUpdateManyWithWhereWithoutBoxInput>
    deleteMany?: Enumerable<Box_userScalarWhereInput>
  }

  export type ThingUpdateManyWithoutBoxNestedInput = {
    create?: XOR<Enumerable<ThingCreateWithoutBoxInput>, Enumerable<ThingUncheckedCreateWithoutBoxInput>>
    connectOrCreate?: Enumerable<ThingCreateOrConnectWithoutBoxInput>
    upsert?: Enumerable<ThingUpsertWithWhereUniqueWithoutBoxInput>
    createMany?: ThingCreateManyBoxInputEnvelope
    set?: Enumerable<ThingWhereUniqueInput>
    disconnect?: Enumerable<ThingWhereUniqueInput>
    delete?: Enumerable<ThingWhereUniqueInput>
    connect?: Enumerable<ThingWhereUniqueInput>
    update?: Enumerable<ThingUpdateWithWhereUniqueWithoutBoxInput>
    updateMany?: Enumerable<ThingUpdateManyWithWhereWithoutBoxInput>
    deleteMany?: Enumerable<ThingScalarWhereInput>
  }

  export type Box_userUncheckedUpdateManyWithoutBoxNestedInput = {
    create?: XOR<Enumerable<Box_userCreateWithoutBoxInput>, Enumerable<Box_userUncheckedCreateWithoutBoxInput>>
    connectOrCreate?: Enumerable<Box_userCreateOrConnectWithoutBoxInput>
    upsert?: Enumerable<Box_userUpsertWithWhereUniqueWithoutBoxInput>
    createMany?: Box_userCreateManyBoxInputEnvelope
    set?: Enumerable<Box_userWhereUniqueInput>
    disconnect?: Enumerable<Box_userWhereUniqueInput>
    delete?: Enumerable<Box_userWhereUniqueInput>
    connect?: Enumerable<Box_userWhereUniqueInput>
    update?: Enumerable<Box_userUpdateWithWhereUniqueWithoutBoxInput>
    updateMany?: Enumerable<Box_userUpdateManyWithWhereWithoutBoxInput>
    deleteMany?: Enumerable<Box_userScalarWhereInput>
  }

  export type ThingUncheckedUpdateManyWithoutBoxNestedInput = {
    create?: XOR<Enumerable<ThingCreateWithoutBoxInput>, Enumerable<ThingUncheckedCreateWithoutBoxInput>>
    connectOrCreate?: Enumerable<ThingCreateOrConnectWithoutBoxInput>
    upsert?: Enumerable<ThingUpsertWithWhereUniqueWithoutBoxInput>
    createMany?: ThingCreateManyBoxInputEnvelope
    set?: Enumerable<ThingWhereUniqueInput>
    disconnect?: Enumerable<ThingWhereUniqueInput>
    delete?: Enumerable<ThingWhereUniqueInput>
    connect?: Enumerable<ThingWhereUniqueInput>
    update?: Enumerable<ThingUpdateWithWhereUniqueWithoutBoxInput>
    updateMany?: Enumerable<ThingUpdateManyWithWhereWithoutBoxInput>
    deleteMany?: Enumerable<ThingScalarWhereInput>
  }

  export type BoxCreateNestedOneWithoutBox_userInput = {
    create?: XOR<BoxCreateWithoutBox_userInput, BoxUncheckedCreateWithoutBox_userInput>
    connectOrCreate?: BoxCreateOrConnectWithoutBox_userInput
    connect?: BoxWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutBox_userInput = {
    create?: XOR<PersonCreateWithoutBox_userInput, PersonUncheckedCreateWithoutBox_userInput>
    connectOrCreate?: PersonCreateOrConnectWithoutBox_userInput
    connect?: PersonWhereUniqueInput
  }

  export type BoxUpdateOneRequiredWithoutBox_userNestedInput = {
    create?: XOR<BoxCreateWithoutBox_userInput, BoxUncheckedCreateWithoutBox_userInput>
    connectOrCreate?: BoxCreateOrConnectWithoutBox_userInput
    upsert?: BoxUpsertWithoutBox_userInput
    connect?: BoxWhereUniqueInput
    update?: XOR<BoxUpdateWithoutBox_userInput, BoxUncheckedUpdateWithoutBox_userInput>
  }

  export type PersonUpdateOneRequiredWithoutBox_userNestedInput = {
    create?: XOR<PersonCreateWithoutBox_userInput, PersonUncheckedCreateWithoutBox_userInput>
    connectOrCreate?: PersonCreateOrConnectWithoutBox_userInput
    upsert?: PersonUpsertWithoutBox_userInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutBox_userInput, PersonUncheckedUpdateWithoutBox_userInput>
  }

  export type RoomCreateNestedManyWithoutHouseInput = {
    create?: XOR<Enumerable<RoomCreateWithoutHouseInput>, Enumerable<RoomUncheckedCreateWithoutHouseInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutHouseInput>
    createMany?: RoomCreateManyHouseInputEnvelope
    connect?: Enumerable<RoomWhereUniqueInput>
  }

  export type RoomUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<Enumerable<RoomCreateWithoutHouseInput>, Enumerable<RoomUncheckedCreateWithoutHouseInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutHouseInput>
    createMany?: RoomCreateManyHouseInputEnvelope
    connect?: Enumerable<RoomWhereUniqueInput>
  }

  export type RoomUpdateManyWithoutHouseNestedInput = {
    create?: XOR<Enumerable<RoomCreateWithoutHouseInput>, Enumerable<RoomUncheckedCreateWithoutHouseInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutHouseInput>
    upsert?: Enumerable<RoomUpsertWithWhereUniqueWithoutHouseInput>
    createMany?: RoomCreateManyHouseInputEnvelope
    set?: Enumerable<RoomWhereUniqueInput>
    disconnect?: Enumerable<RoomWhereUniqueInput>
    delete?: Enumerable<RoomWhereUniqueInput>
    connect?: Enumerable<RoomWhereUniqueInput>
    update?: Enumerable<RoomUpdateWithWhereUniqueWithoutHouseInput>
    updateMany?: Enumerable<RoomUpdateManyWithWhereWithoutHouseInput>
    deleteMany?: Enumerable<RoomScalarWhereInput>
  }

  export type RoomUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<Enumerable<RoomCreateWithoutHouseInput>, Enumerable<RoomUncheckedCreateWithoutHouseInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutHouseInput>
    upsert?: Enumerable<RoomUpsertWithWhereUniqueWithoutHouseInput>
    createMany?: RoomCreateManyHouseInputEnvelope
    set?: Enumerable<RoomWhereUniqueInput>
    disconnect?: Enumerable<RoomWhereUniqueInput>
    delete?: Enumerable<RoomWhereUniqueInput>
    connect?: Enumerable<RoomWhereUniqueInput>
    update?: Enumerable<RoomUpdateWithWhereUniqueWithoutHouseInput>
    updateMany?: Enumerable<RoomUpdateManyWithWhereWithoutHouseInput>
    deleteMany?: Enumerable<RoomScalarWhereInput>
  }

  export type Box_userCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<Box_userCreateWithoutPersonInput>, Enumerable<Box_userUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<Box_userCreateOrConnectWithoutPersonInput>
    createMany?: Box_userCreateManyPersonInputEnvelope
    connect?: Enumerable<Box_userWhereUniqueInput>
  }

  export type RoomCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<RoomCreateWithoutPersonInput>, Enumerable<RoomUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutPersonInput>
    createMany?: RoomCreateManyPersonInputEnvelope
    connect?: Enumerable<RoomWhereUniqueInput>
  }

  export type Room_userCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<Room_userCreateWithoutPersonInput>, Enumerable<Room_userUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<Room_userCreateOrConnectWithoutPersonInput>
    createMany?: Room_userCreateManyPersonInputEnvelope
    connect?: Enumerable<Room_userWhereUniqueInput>
  }

  export type Box_userUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<Box_userCreateWithoutPersonInput>, Enumerable<Box_userUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<Box_userCreateOrConnectWithoutPersonInput>
    createMany?: Box_userCreateManyPersonInputEnvelope
    connect?: Enumerable<Box_userWhereUniqueInput>
  }

  export type RoomUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<RoomCreateWithoutPersonInput>, Enumerable<RoomUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutPersonInput>
    createMany?: RoomCreateManyPersonInputEnvelope
    connect?: Enumerable<RoomWhereUniqueInput>
  }

  export type Room_userUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<Room_userCreateWithoutPersonInput>, Enumerable<Room_userUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<Room_userCreateOrConnectWithoutPersonInput>
    createMany?: Room_userCreateManyPersonInputEnvelope
    connect?: Enumerable<Room_userWhereUniqueInput>
  }

  export type Box_userUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<Box_userCreateWithoutPersonInput>, Enumerable<Box_userUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<Box_userCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<Box_userUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: Box_userCreateManyPersonInputEnvelope
    set?: Enumerable<Box_userWhereUniqueInput>
    disconnect?: Enumerable<Box_userWhereUniqueInput>
    delete?: Enumerable<Box_userWhereUniqueInput>
    connect?: Enumerable<Box_userWhereUniqueInput>
    update?: Enumerable<Box_userUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<Box_userUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<Box_userScalarWhereInput>
  }

  export type RoomUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<RoomCreateWithoutPersonInput>, Enumerable<RoomUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<RoomUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: RoomCreateManyPersonInputEnvelope
    set?: Enumerable<RoomWhereUniqueInput>
    disconnect?: Enumerable<RoomWhereUniqueInput>
    delete?: Enumerable<RoomWhereUniqueInput>
    connect?: Enumerable<RoomWhereUniqueInput>
    update?: Enumerable<RoomUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<RoomUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<RoomScalarWhereInput>
  }

  export type Room_userUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<Room_userCreateWithoutPersonInput>, Enumerable<Room_userUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<Room_userCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<Room_userUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: Room_userCreateManyPersonInputEnvelope
    set?: Enumerable<Room_userWhereUniqueInput>
    disconnect?: Enumerable<Room_userWhereUniqueInput>
    delete?: Enumerable<Room_userWhereUniqueInput>
    connect?: Enumerable<Room_userWhereUniqueInput>
    update?: Enumerable<Room_userUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<Room_userUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<Room_userScalarWhereInput>
  }

  export type Box_userUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<Box_userCreateWithoutPersonInput>, Enumerable<Box_userUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<Box_userCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<Box_userUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: Box_userCreateManyPersonInputEnvelope
    set?: Enumerable<Box_userWhereUniqueInput>
    disconnect?: Enumerable<Box_userWhereUniqueInput>
    delete?: Enumerable<Box_userWhereUniqueInput>
    connect?: Enumerable<Box_userWhereUniqueInput>
    update?: Enumerable<Box_userUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<Box_userUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<Box_userScalarWhereInput>
  }

  export type RoomUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<RoomCreateWithoutPersonInput>, Enumerable<RoomUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RoomCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<RoomUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: RoomCreateManyPersonInputEnvelope
    set?: Enumerable<RoomWhereUniqueInput>
    disconnect?: Enumerable<RoomWhereUniqueInput>
    delete?: Enumerable<RoomWhereUniqueInput>
    connect?: Enumerable<RoomWhereUniqueInput>
    update?: Enumerable<RoomUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<RoomUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<RoomScalarWhereInput>
  }

  export type Room_userUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<Room_userCreateWithoutPersonInput>, Enumerable<Room_userUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<Room_userCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<Room_userUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: Room_userCreateManyPersonInputEnvelope
    set?: Enumerable<Room_userWhereUniqueInput>
    disconnect?: Enumerable<Room_userWhereUniqueInput>
    delete?: Enumerable<Room_userWhereUniqueInput>
    connect?: Enumerable<Room_userWhereUniqueInput>
    update?: Enumerable<Room_userUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<Room_userUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<Room_userScalarWhereInput>
  }

  export type BoxCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<BoxCreateWithoutRoomInput>, Enumerable<BoxUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BoxCreateOrConnectWithoutRoomInput>
    createMany?: BoxCreateManyRoomInputEnvelope
    connect?: Enumerable<BoxWhereUniqueInput>
  }

  export type HouseCreateNestedOneWithoutRoomInput = {
    create?: XOR<HouseCreateWithoutRoomInput, HouseUncheckedCreateWithoutRoomInput>
    connectOrCreate?: HouseCreateOrConnectWithoutRoomInput
    connect?: HouseWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutRoomInput = {
    create?: XOR<PersonCreateWithoutRoomInput, PersonUncheckedCreateWithoutRoomInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRoomInput
    connect?: PersonWhereUniqueInput
  }

  export type Room_userCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<Room_userCreateWithoutRoomInput>, Enumerable<Room_userUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<Room_userCreateOrConnectWithoutRoomInput>
    createMany?: Room_userCreateManyRoomInputEnvelope
    connect?: Enumerable<Room_userWhereUniqueInput>
  }

  export type BoxUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<BoxCreateWithoutRoomInput>, Enumerable<BoxUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BoxCreateOrConnectWithoutRoomInput>
    createMany?: BoxCreateManyRoomInputEnvelope
    connect?: Enumerable<BoxWhereUniqueInput>
  }

  export type Room_userUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<Room_userCreateWithoutRoomInput>, Enumerable<Room_userUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<Room_userCreateOrConnectWithoutRoomInput>
    createMany?: Room_userCreateManyRoomInputEnvelope
    connect?: Enumerable<Room_userWhereUniqueInput>
  }

  export type BoxUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<BoxCreateWithoutRoomInput>, Enumerable<BoxUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BoxCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<BoxUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: BoxCreateManyRoomInputEnvelope
    set?: Enumerable<BoxWhereUniqueInput>
    disconnect?: Enumerable<BoxWhereUniqueInput>
    delete?: Enumerable<BoxWhereUniqueInput>
    connect?: Enumerable<BoxWhereUniqueInput>
    update?: Enumerable<BoxUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<BoxUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<BoxScalarWhereInput>
  }

  export type HouseUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<HouseCreateWithoutRoomInput, HouseUncheckedCreateWithoutRoomInput>
    connectOrCreate?: HouseCreateOrConnectWithoutRoomInput
    upsert?: HouseUpsertWithoutRoomInput
    connect?: HouseWhereUniqueInput
    update?: XOR<HouseUpdateWithoutRoomInput, HouseUncheckedUpdateWithoutRoomInput>
  }

  export type PersonUpdateOneWithoutRoomNestedInput = {
    create?: XOR<PersonCreateWithoutRoomInput, PersonUncheckedCreateWithoutRoomInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRoomInput
    upsert?: PersonUpsertWithoutRoomInput
    disconnect?: boolean
    delete?: boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutRoomInput, PersonUncheckedUpdateWithoutRoomInput>
  }

  export type Room_userUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<Room_userCreateWithoutRoomInput>, Enumerable<Room_userUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<Room_userCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<Room_userUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: Room_userCreateManyRoomInputEnvelope
    set?: Enumerable<Room_userWhereUniqueInput>
    disconnect?: Enumerable<Room_userWhereUniqueInput>
    delete?: Enumerable<Room_userWhereUniqueInput>
    connect?: Enumerable<Room_userWhereUniqueInput>
    update?: Enumerable<Room_userUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<Room_userUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<Room_userScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoxUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<BoxCreateWithoutRoomInput>, Enumerable<BoxUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BoxCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<BoxUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: BoxCreateManyRoomInputEnvelope
    set?: Enumerable<BoxWhereUniqueInput>
    disconnect?: Enumerable<BoxWhereUniqueInput>
    delete?: Enumerable<BoxWhereUniqueInput>
    connect?: Enumerable<BoxWhereUniqueInput>
    update?: Enumerable<BoxUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<BoxUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<BoxScalarWhereInput>
  }

  export type Room_userUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<Room_userCreateWithoutRoomInput>, Enumerable<Room_userUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<Room_userCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<Room_userUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: Room_userCreateManyRoomInputEnvelope
    set?: Enumerable<Room_userWhereUniqueInput>
    disconnect?: Enumerable<Room_userWhereUniqueInput>
    delete?: Enumerable<Room_userWhereUniqueInput>
    connect?: Enumerable<Room_userWhereUniqueInput>
    update?: Enumerable<Room_userUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<Room_userUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<Room_userScalarWhereInput>
  }

  export type RoomCreateNestedOneWithoutRoom_userInput = {
    create?: XOR<RoomCreateWithoutRoom_userInput, RoomUncheckedCreateWithoutRoom_userInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoom_userInput
    connect?: RoomWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutRoom_userInput = {
    create?: XOR<PersonCreateWithoutRoom_userInput, PersonUncheckedCreateWithoutRoom_userInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRoom_userInput
    connect?: PersonWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutRoom_userNestedInput = {
    create?: XOR<RoomCreateWithoutRoom_userInput, RoomUncheckedCreateWithoutRoom_userInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoom_userInput
    upsert?: RoomUpsertWithoutRoom_userInput
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutRoom_userInput, RoomUncheckedUpdateWithoutRoom_userInput>
  }

  export type PersonUpdateOneRequiredWithoutRoom_userNestedInput = {
    create?: XOR<PersonCreateWithoutRoom_userInput, PersonUncheckedCreateWithoutRoom_userInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRoom_userInput
    upsert?: PersonUpsertWithoutRoom_userInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutRoom_userInput, PersonUncheckedUpdateWithoutRoom_userInput>
  }

  export type BoxCreateNestedOneWithoutThingInput = {
    create?: XOR<BoxCreateWithoutThingInput, BoxUncheckedCreateWithoutThingInput>
    connectOrCreate?: BoxCreateOrConnectWithoutThingInput
    connect?: BoxWhereUniqueInput
  }

  export type BoxUpdateOneRequiredWithoutThingNestedInput = {
    create?: XOR<BoxCreateWithoutThingInput, BoxUncheckedCreateWithoutThingInput>
    connectOrCreate?: BoxCreateOrConnectWithoutThingInput
    upsert?: BoxUpsertWithoutThingInput
    connect?: BoxWhereUniqueInput
    update?: XOR<BoxUpdateWithoutThingInput, BoxUncheckedUpdateWithoutThingInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedUuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableFilter | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type RoomCreateWithoutBoxInput = {
    id: string
    name: string
    house: HouseCreateNestedOneWithoutRoomInput
    person?: PersonCreateNestedOneWithoutRoomInput
    room_user?: Room_userCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBoxInput = {
    id: string
    name: string
    house_id: string
    owner_id?: string | null
    room_user?: Room_userUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBoxInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBoxInput, RoomUncheckedCreateWithoutBoxInput>
  }

  export type Box_userCreateWithoutBoxInput = {
    person: PersonCreateNestedOneWithoutBox_userInput
  }

  export type Box_userUncheckedCreateWithoutBoxInput = {
    person_id: string
  }

  export type Box_userCreateOrConnectWithoutBoxInput = {
    where: Box_userWhereUniqueInput
    create: XOR<Box_userCreateWithoutBoxInput, Box_userUncheckedCreateWithoutBoxInput>
  }

  export type Box_userCreateManyBoxInputEnvelope = {
    data: Enumerable<Box_userCreateManyBoxInput>
    skipDuplicates?: boolean
  }

  export type ThingCreateWithoutBoxInput = {
    id: string
    name: string
  }

  export type ThingUncheckedCreateWithoutBoxInput = {
    id: string
    name: string
  }

  export type ThingCreateOrConnectWithoutBoxInput = {
    where: ThingWhereUniqueInput
    create: XOR<ThingCreateWithoutBoxInput, ThingUncheckedCreateWithoutBoxInput>
  }

  export type ThingCreateManyBoxInputEnvelope = {
    data: Enumerable<ThingCreateManyBoxInput>
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutBoxInput = {
    update: XOR<RoomUpdateWithoutBoxInput, RoomUncheckedUpdateWithoutBoxInput>
    create: XOR<RoomCreateWithoutBoxInput, RoomUncheckedCreateWithoutBoxInput>
  }

  export type RoomUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    house?: HouseUpdateOneRequiredWithoutRoomNestedInput
    person?: PersonUpdateOneWithoutRoomNestedInput
    room_user?: Room_userUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    house_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    room_user?: Room_userUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type Box_userUpsertWithWhereUniqueWithoutBoxInput = {
    where: Box_userWhereUniqueInput
    update: XOR<Box_userUpdateWithoutBoxInput, Box_userUncheckedUpdateWithoutBoxInput>
    create: XOR<Box_userCreateWithoutBoxInput, Box_userUncheckedCreateWithoutBoxInput>
  }

  export type Box_userUpdateWithWhereUniqueWithoutBoxInput = {
    where: Box_userWhereUniqueInput
    data: XOR<Box_userUpdateWithoutBoxInput, Box_userUncheckedUpdateWithoutBoxInput>
  }

  export type Box_userUpdateManyWithWhereWithoutBoxInput = {
    where: Box_userScalarWhereInput
    data: XOR<Box_userUpdateManyMutationInput, Box_userUncheckedUpdateManyWithoutBox_userInput>
  }

  export type Box_userScalarWhereInput = {
    AND?: Enumerable<Box_userScalarWhereInput>
    OR?: Enumerable<Box_userScalarWhereInput>
    NOT?: Enumerable<Box_userScalarWhereInput>
    id?: UuidFilter | string
    person_id?: UuidFilter | string
  }

  export type ThingUpsertWithWhereUniqueWithoutBoxInput = {
    where: ThingWhereUniqueInput
    update: XOR<ThingUpdateWithoutBoxInput, ThingUncheckedUpdateWithoutBoxInput>
    create: XOR<ThingCreateWithoutBoxInput, ThingUncheckedCreateWithoutBoxInput>
  }

  export type ThingUpdateWithWhereUniqueWithoutBoxInput = {
    where: ThingWhereUniqueInput
    data: XOR<ThingUpdateWithoutBoxInput, ThingUncheckedUpdateWithoutBoxInput>
  }

  export type ThingUpdateManyWithWhereWithoutBoxInput = {
    where: ThingScalarWhereInput
    data: XOR<ThingUpdateManyMutationInput, ThingUncheckedUpdateManyWithoutThingInput>
  }

  export type ThingScalarWhereInput = {
    AND?: Enumerable<ThingScalarWhereInput>
    OR?: Enumerable<ThingScalarWhereInput>
    NOT?: Enumerable<ThingScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    box_id?: UuidFilter | string
  }

  export type BoxCreateWithoutBox_userInput = {
    id: string
    name: string
    room: RoomCreateNestedOneWithoutBoxInput
    thing?: ThingCreateNestedManyWithoutBoxInput
  }

  export type BoxUncheckedCreateWithoutBox_userInput = {
    id: string
    name: string
    room_id: string
    thing?: ThingUncheckedCreateNestedManyWithoutBoxInput
  }

  export type BoxCreateOrConnectWithoutBox_userInput = {
    where: BoxWhereUniqueInput
    create: XOR<BoxCreateWithoutBox_userInput, BoxUncheckedCreateWithoutBox_userInput>
  }

  export type PersonCreateWithoutBox_userInput = {
    id: string
    name: string
    room?: RoomCreateNestedManyWithoutPersonInput
    room_user?: Room_userCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutBox_userInput = {
    id: string
    name: string
    room?: RoomUncheckedCreateNestedManyWithoutPersonInput
    room_user?: Room_userUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutBox_userInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutBox_userInput, PersonUncheckedCreateWithoutBox_userInput>
  }

  export type BoxUpsertWithoutBox_userInput = {
    update: XOR<BoxUpdateWithoutBox_userInput, BoxUncheckedUpdateWithoutBox_userInput>
    create: XOR<BoxCreateWithoutBox_userInput, BoxUncheckedCreateWithoutBox_userInput>
  }

  export type BoxUpdateWithoutBox_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutBoxNestedInput
    thing?: ThingUpdateManyWithoutBoxNestedInput
  }

  export type BoxUncheckedUpdateWithoutBox_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    thing?: ThingUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type PersonUpsertWithoutBox_userInput = {
    update: XOR<PersonUpdateWithoutBox_userInput, PersonUncheckedUpdateWithoutBox_userInput>
    create: XOR<PersonCreateWithoutBox_userInput, PersonUncheckedCreateWithoutBox_userInput>
  }

  export type PersonUpdateWithoutBox_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateManyWithoutPersonNestedInput
    room_user?: Room_userUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutBox_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutPersonNestedInput
    room_user?: Room_userUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type RoomCreateWithoutHouseInput = {
    id: string
    name: string
    box?: BoxCreateNestedManyWithoutRoomInput
    person?: PersonCreateNestedOneWithoutRoomInput
    room_user?: Room_userCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHouseInput = {
    id: string
    name: string
    owner_id?: string | null
    box?: BoxUncheckedCreateNestedManyWithoutRoomInput
    room_user?: Room_userUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHouseInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput>
  }

  export type RoomCreateManyHouseInputEnvelope = {
    data: Enumerable<RoomCreateManyHouseInput>
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutHouseInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHouseInput, RoomUncheckedUpdateWithoutHouseInput>
    create: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHouseInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHouseInput, RoomUncheckedUpdateWithoutHouseInput>
  }

  export type RoomUpdateManyWithWhereWithoutHouseInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomScalarWhereInput = {
    AND?: Enumerable<RoomScalarWhereInput>
    OR?: Enumerable<RoomScalarWhereInput>
    NOT?: Enumerable<RoomScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    house_id?: UuidFilter | string
    owner_id?: UuidNullableFilter | string | null
  }

  export type Box_userCreateWithoutPersonInput = {
    box: BoxCreateNestedOneWithoutBox_userInput
  }

  export type Box_userUncheckedCreateWithoutPersonInput = {
    id: string
  }

  export type Box_userCreateOrConnectWithoutPersonInput = {
    where: Box_userWhereUniqueInput
    create: XOR<Box_userCreateWithoutPersonInput, Box_userUncheckedCreateWithoutPersonInput>
  }

  export type Box_userCreateManyPersonInputEnvelope = {
    data: Enumerable<Box_userCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutPersonInput = {
    id: string
    name: string
    box?: BoxCreateNestedManyWithoutRoomInput
    house: HouseCreateNestedOneWithoutRoomInput
    room_user?: Room_userCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPersonInput = {
    id: string
    name: string
    house_id: string
    box?: BoxUncheckedCreateNestedManyWithoutRoomInput
    room_user?: Room_userUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPersonInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPersonInput, RoomUncheckedCreateWithoutPersonInput>
  }

  export type RoomCreateManyPersonInputEnvelope = {
    data: Enumerable<RoomCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type Room_userCreateWithoutPersonInput = {
    room: RoomCreateNestedOneWithoutRoom_userInput
  }

  export type Room_userUncheckedCreateWithoutPersonInput = {
    id: string
  }

  export type Room_userCreateOrConnectWithoutPersonInput = {
    where: Room_userWhereUniqueInput
    create: XOR<Room_userCreateWithoutPersonInput, Room_userUncheckedCreateWithoutPersonInput>
  }

  export type Room_userCreateManyPersonInputEnvelope = {
    data: Enumerable<Room_userCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type Box_userUpsertWithWhereUniqueWithoutPersonInput = {
    where: Box_userWhereUniqueInput
    update: XOR<Box_userUpdateWithoutPersonInput, Box_userUncheckedUpdateWithoutPersonInput>
    create: XOR<Box_userCreateWithoutPersonInput, Box_userUncheckedCreateWithoutPersonInput>
  }

  export type Box_userUpdateWithWhereUniqueWithoutPersonInput = {
    where: Box_userWhereUniqueInput
    data: XOR<Box_userUpdateWithoutPersonInput, Box_userUncheckedUpdateWithoutPersonInput>
  }

  export type Box_userUpdateManyWithWhereWithoutPersonInput = {
    where: Box_userScalarWhereInput
    data: XOR<Box_userUpdateManyMutationInput, Box_userUncheckedUpdateManyWithoutBox_userInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutPersonInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPersonInput, RoomUncheckedUpdateWithoutPersonInput>
    create: XOR<RoomCreateWithoutPersonInput, RoomUncheckedCreateWithoutPersonInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPersonInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPersonInput, RoomUncheckedUpdateWithoutPersonInput>
  }

  export type RoomUpdateManyWithWhereWithoutPersonInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutRoomInput>
  }

  export type Room_userUpsertWithWhereUniqueWithoutPersonInput = {
    where: Room_userWhereUniqueInput
    update: XOR<Room_userUpdateWithoutPersonInput, Room_userUncheckedUpdateWithoutPersonInput>
    create: XOR<Room_userCreateWithoutPersonInput, Room_userUncheckedCreateWithoutPersonInput>
  }

  export type Room_userUpdateWithWhereUniqueWithoutPersonInput = {
    where: Room_userWhereUniqueInput
    data: XOR<Room_userUpdateWithoutPersonInput, Room_userUncheckedUpdateWithoutPersonInput>
  }

  export type Room_userUpdateManyWithWhereWithoutPersonInput = {
    where: Room_userScalarWhereInput
    data: XOR<Room_userUpdateManyMutationInput, Room_userUncheckedUpdateManyWithoutRoom_userInput>
  }

  export type Room_userScalarWhereInput = {
    AND?: Enumerable<Room_userScalarWhereInput>
    OR?: Enumerable<Room_userScalarWhereInput>
    NOT?: Enumerable<Room_userScalarWhereInput>
    id?: UuidFilter | string
    person_id?: UuidFilter | string
  }

  export type BoxCreateWithoutRoomInput = {
    id: string
    name: string
    box_user?: Box_userCreateNestedManyWithoutBoxInput
    thing?: ThingCreateNestedManyWithoutBoxInput
  }

  export type BoxUncheckedCreateWithoutRoomInput = {
    id: string
    name: string
    box_user?: Box_userUncheckedCreateNestedManyWithoutBoxInput
    thing?: ThingUncheckedCreateNestedManyWithoutBoxInput
  }

  export type BoxCreateOrConnectWithoutRoomInput = {
    where: BoxWhereUniqueInput
    create: XOR<BoxCreateWithoutRoomInput, BoxUncheckedCreateWithoutRoomInput>
  }

  export type BoxCreateManyRoomInputEnvelope = {
    data: Enumerable<BoxCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type HouseCreateWithoutRoomInput = {
    id: string
    name: string
  }

  export type HouseUncheckedCreateWithoutRoomInput = {
    id: string
    name: string
  }

  export type HouseCreateOrConnectWithoutRoomInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutRoomInput, HouseUncheckedCreateWithoutRoomInput>
  }

  export type PersonCreateWithoutRoomInput = {
    id: string
    name: string
    box_user?: Box_userCreateNestedManyWithoutPersonInput
    room_user?: Room_userCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutRoomInput = {
    id: string
    name: string
    box_user?: Box_userUncheckedCreateNestedManyWithoutPersonInput
    room_user?: Room_userUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutRoomInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutRoomInput, PersonUncheckedCreateWithoutRoomInput>
  }

  export type Room_userCreateWithoutRoomInput = {
    person: PersonCreateNestedOneWithoutRoom_userInput
  }

  export type Room_userUncheckedCreateWithoutRoomInput = {
    person_id: string
  }

  export type Room_userCreateOrConnectWithoutRoomInput = {
    where: Room_userWhereUniqueInput
    create: XOR<Room_userCreateWithoutRoomInput, Room_userUncheckedCreateWithoutRoomInput>
  }

  export type Room_userCreateManyRoomInputEnvelope = {
    data: Enumerable<Room_userCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type BoxUpsertWithWhereUniqueWithoutRoomInput = {
    where: BoxWhereUniqueInput
    update: XOR<BoxUpdateWithoutRoomInput, BoxUncheckedUpdateWithoutRoomInput>
    create: XOR<BoxCreateWithoutRoomInput, BoxUncheckedCreateWithoutRoomInput>
  }

  export type BoxUpdateWithWhereUniqueWithoutRoomInput = {
    where: BoxWhereUniqueInput
    data: XOR<BoxUpdateWithoutRoomInput, BoxUncheckedUpdateWithoutRoomInput>
  }

  export type BoxUpdateManyWithWhereWithoutRoomInput = {
    where: BoxScalarWhereInput
    data: XOR<BoxUpdateManyMutationInput, BoxUncheckedUpdateManyWithoutBoxInput>
  }

  export type BoxScalarWhereInput = {
    AND?: Enumerable<BoxScalarWhereInput>
    OR?: Enumerable<BoxScalarWhereInput>
    NOT?: Enumerable<BoxScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    room_id?: UuidFilter | string
  }

  export type HouseUpsertWithoutRoomInput = {
    update: XOR<HouseUpdateWithoutRoomInput, HouseUncheckedUpdateWithoutRoomInput>
    create: XOR<HouseCreateWithoutRoomInput, HouseUncheckedCreateWithoutRoomInput>
  }

  export type HouseUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HouseUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonUpsertWithoutRoomInput = {
    update: XOR<PersonUpdateWithoutRoomInput, PersonUncheckedUpdateWithoutRoomInput>
    create: XOR<PersonCreateWithoutRoomInput, PersonUncheckedCreateWithoutRoomInput>
  }

  export type PersonUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUpdateManyWithoutPersonNestedInput
    room_user?: Room_userUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUncheckedUpdateManyWithoutPersonNestedInput
    room_user?: Room_userUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type Room_userUpsertWithWhereUniqueWithoutRoomInput = {
    where: Room_userWhereUniqueInput
    update: XOR<Room_userUpdateWithoutRoomInput, Room_userUncheckedUpdateWithoutRoomInput>
    create: XOR<Room_userCreateWithoutRoomInput, Room_userUncheckedCreateWithoutRoomInput>
  }

  export type Room_userUpdateWithWhereUniqueWithoutRoomInput = {
    where: Room_userWhereUniqueInput
    data: XOR<Room_userUpdateWithoutRoomInput, Room_userUncheckedUpdateWithoutRoomInput>
  }

  export type Room_userUpdateManyWithWhereWithoutRoomInput = {
    where: Room_userScalarWhereInput
    data: XOR<Room_userUpdateManyMutationInput, Room_userUncheckedUpdateManyWithoutRoom_userInput>
  }

  export type RoomCreateWithoutRoom_userInput = {
    id: string
    name: string
    box?: BoxCreateNestedManyWithoutRoomInput
    house: HouseCreateNestedOneWithoutRoomInput
    person?: PersonCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoom_userInput = {
    id: string
    name: string
    house_id: string
    owner_id?: string | null
    box?: BoxUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoom_userInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoom_userInput, RoomUncheckedCreateWithoutRoom_userInput>
  }

  export type PersonCreateWithoutRoom_userInput = {
    id: string
    name: string
    box_user?: Box_userCreateNestedManyWithoutPersonInput
    room?: RoomCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutRoom_userInput = {
    id: string
    name: string
    box_user?: Box_userUncheckedCreateNestedManyWithoutPersonInput
    room?: RoomUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutRoom_userInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutRoom_userInput, PersonUncheckedCreateWithoutRoom_userInput>
  }

  export type RoomUpsertWithoutRoom_userInput = {
    update: XOR<RoomUpdateWithoutRoom_userInput, RoomUncheckedUpdateWithoutRoom_userInput>
    create: XOR<RoomCreateWithoutRoom_userInput, RoomUncheckedCreateWithoutRoom_userInput>
  }

  export type RoomUpdateWithoutRoom_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box?: BoxUpdateManyWithoutRoomNestedInput
    house?: HouseUpdateOneRequiredWithoutRoomNestedInput
    person?: PersonUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoom_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    house_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    box?: BoxUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PersonUpsertWithoutRoom_userInput = {
    update: XOR<PersonUpdateWithoutRoom_userInput, PersonUncheckedUpdateWithoutRoom_userInput>
    create: XOR<PersonCreateWithoutRoom_userInput, PersonUncheckedCreateWithoutRoom_userInput>
  }

  export type PersonUpdateWithoutRoom_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUpdateManyWithoutPersonNestedInput
    room?: RoomUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutRoom_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUncheckedUpdateManyWithoutPersonNestedInput
    room?: RoomUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type BoxCreateWithoutThingInput = {
    id: string
    name: string
    room: RoomCreateNestedOneWithoutBoxInput
    box_user?: Box_userCreateNestedManyWithoutBoxInput
  }

  export type BoxUncheckedCreateWithoutThingInput = {
    id: string
    name: string
    room_id: string
    box_user?: Box_userUncheckedCreateNestedManyWithoutBoxInput
  }

  export type BoxCreateOrConnectWithoutThingInput = {
    where: BoxWhereUniqueInput
    create: XOR<BoxCreateWithoutThingInput, BoxUncheckedCreateWithoutThingInput>
  }

  export type BoxUpsertWithoutThingInput = {
    update: XOR<BoxUpdateWithoutThingInput, BoxUncheckedUpdateWithoutThingInput>
    create: XOR<BoxCreateWithoutThingInput, BoxUncheckedCreateWithoutThingInput>
  }

  export type BoxUpdateWithoutThingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutBoxNestedInput
    box_user?: Box_userUpdateManyWithoutBoxNestedInput
  }

  export type BoxUncheckedUpdateWithoutThingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type Box_userCreateManyBoxInput = {
    person_id: string
  }

  export type ThingCreateManyBoxInput = {
    id: string
    name: string
  }

  export type Box_userUpdateWithoutBoxInput = {
    person?: PersonUpdateOneRequiredWithoutBox_userNestedInput
  }

  export type Box_userUncheckedUpdateWithoutBoxInput = {
    person_id?: StringFieldUpdateOperationsInput | string
  }

  export type Box_userUncheckedUpdateManyWithoutBox_userInput = {
    person_id?: StringFieldUpdateOperationsInput | string
  }

  export type ThingUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ThingUncheckedUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ThingUncheckedUpdateManyWithoutThingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateManyHouseInput = {
    id: string
    name: string
    owner_id?: string | null
  }

  export type RoomUpdateWithoutHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box?: BoxUpdateManyWithoutRoomNestedInput
    person?: PersonUpdateOneWithoutRoomNestedInput
    room_user?: Room_userUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    box?: BoxUncheckedUpdateManyWithoutRoomNestedInput
    room_user?: Room_userUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Box_userCreateManyPersonInput = {
    id: string
  }

  export type RoomCreateManyPersonInput = {
    id: string
    name: string
    house_id: string
  }

  export type Room_userCreateManyPersonInput = {
    id: string
  }

  export type Box_userUpdateWithoutPersonInput = {
    box?: BoxUpdateOneRequiredWithoutBox_userNestedInput
  }

  export type Box_userUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box?: BoxUpdateManyWithoutRoomNestedInput
    house?: HouseUpdateOneRequiredWithoutRoomNestedInput
    room_user?: Room_userUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    house_id?: StringFieldUpdateOperationsInput | string
    box?: BoxUncheckedUpdateManyWithoutRoomNestedInput
    room_user?: Room_userUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type Room_userUpdateWithoutPersonInput = {
    room?: RoomUpdateOneRequiredWithoutRoom_userNestedInput
  }

  export type Room_userUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type Room_userUncheckedUpdateManyWithoutRoom_userInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BoxCreateManyRoomInput = {
    id: string
    name: string
  }

  export type Room_userCreateManyRoomInput = {
    person_id: string
  }

  export type BoxUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUpdateManyWithoutBoxNestedInput
    thing?: ThingUpdateManyWithoutBoxNestedInput
  }

  export type BoxUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    box_user?: Box_userUncheckedUpdateManyWithoutBoxNestedInput
    thing?: ThingUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type BoxUncheckedUpdateManyWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Room_userUpdateWithoutRoomInput = {
    person?: PersonUpdateOneRequiredWithoutRoom_userNestedInput
  }

  export type Room_userUncheckedUpdateWithoutRoomInput = {
    person_id?: StringFieldUpdateOperationsInput | string
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