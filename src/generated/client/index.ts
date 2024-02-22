import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const BoxScalarFieldEnumSchema = z.enum(['id','name','room_id']);

export const Box_userScalarFieldEnumSchema = z.enum(['id','person_id']);

export const HouseScalarFieldEnumSchema = z.enum(['id','name']);

export const PersonScalarFieldEnumSchema = z.enum(['id','name']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const RoomScalarFieldEnumSchema = z.enum(['id','name','house_id','owner_id']);

export const Room_userScalarFieldEnumSchema = z.enum(['id','person_id']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const ThingScalarFieldEnumSchema = z.enum(['id','name','box_id']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BOX SCHEMA
/////////////////////////////////////////

export const BoxSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  room_id: z.string().uuid(),
})

export type Box = z.infer<typeof BoxSchema>

/////////////////////////////////////////
// BOX USER SCHEMA
/////////////////////////////////////////

export const Box_userSchema = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid(),
})

export type Box_user = z.infer<typeof Box_userSchema>

/////////////////////////////////////////
// HOUSE SCHEMA
/////////////////////////////////////////

export const HouseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
})

export type House = z.infer<typeof HouseSchema>

/////////////////////////////////////////
// PERSON SCHEMA
/////////////////////////////////////////

export const PersonSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
})

export type Person = z.infer<typeof PersonSchema>

/////////////////////////////////////////
// ROOM SCHEMA
/////////////////////////////////////////

export const RoomSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  house_id: z.string().uuid(),
  owner_id: z.string().uuid().nullable(),
})

export type Room = z.infer<typeof RoomSchema>

/////////////////////////////////////////
// ROOM USER SCHEMA
/////////////////////////////////////////

export const Room_userSchema = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid(),
})

export type Room_user = z.infer<typeof Room_userSchema>

/////////////////////////////////////////
// THING SCHEMA
/////////////////////////////////////////

export const ThingSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  box_id: z.string().uuid(),
})

export type Thing = z.infer<typeof ThingSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BOX
//------------------------------------------------------

export const BoxIncludeSchema: z.ZodType<Prisma.BoxInclude> = z.object({
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  box_user: z.union([z.boolean(),z.lazy(() => Box_userFindManyArgsSchema)]).optional(),
  thing: z.union([z.boolean(),z.lazy(() => ThingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BoxCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BoxArgsSchema: z.ZodType<Prisma.BoxArgs> = z.object({
  select: z.lazy(() => BoxSelectSchema).optional(),
  include: z.lazy(() => BoxIncludeSchema).optional(),
}).strict();

export const BoxCountOutputTypeArgsSchema: z.ZodType<Prisma.BoxCountOutputTypeArgs> = z.object({
  select: z.lazy(() => BoxCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BoxCountOutputTypeSelectSchema: z.ZodType<Prisma.BoxCountOutputTypeSelect> = z.object({
  box_user: z.boolean().optional(),
  thing: z.boolean().optional(),
}).strict();

export const BoxSelectSchema: z.ZodType<Prisma.BoxSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  room_id: z.boolean().optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  box_user: z.union([z.boolean(),z.lazy(() => Box_userFindManyArgsSchema)]).optional(),
  thing: z.union([z.boolean(),z.lazy(() => ThingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BoxCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BOX USER
//------------------------------------------------------

export const Box_userIncludeSchema: z.ZodType<Prisma.Box_userInclude> = z.object({
  box: z.union([z.boolean(),z.lazy(() => BoxArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const Box_userArgsSchema: z.ZodType<Prisma.Box_userArgs> = z.object({
  select: z.lazy(() => Box_userSelectSchema).optional(),
  include: z.lazy(() => Box_userIncludeSchema).optional(),
}).strict();

export const Box_userSelectSchema: z.ZodType<Prisma.Box_userSelect> = z.object({
  id: z.boolean().optional(),
  person_id: z.boolean().optional(),
  box: z.union([z.boolean(),z.lazy(() => BoxArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

// HOUSE
//------------------------------------------------------

export const HouseIncludeSchema: z.ZodType<Prisma.HouseInclude> = z.object({
  room: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HouseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HouseArgsSchema: z.ZodType<Prisma.HouseArgs> = z.object({
  select: z.lazy(() => HouseSelectSchema).optional(),
  include: z.lazy(() => HouseIncludeSchema).optional(),
}).strict();

export const HouseCountOutputTypeArgsSchema: z.ZodType<Prisma.HouseCountOutputTypeArgs> = z.object({
  select: z.lazy(() => HouseCountOutputTypeSelectSchema).nullish(),
}).strict();

export const HouseCountOutputTypeSelectSchema: z.ZodType<Prisma.HouseCountOutputTypeSelect> = z.object({
  room: z.boolean().optional(),
}).strict();

export const HouseSelectSchema: z.ZodType<Prisma.HouseSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HouseCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PERSON
//------------------------------------------------------

export const PersonIncludeSchema: z.ZodType<Prisma.PersonInclude> = z.object({
  box_user: z.union([z.boolean(),z.lazy(() => Box_userFindManyArgsSchema)]).optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  room_user: z.union([z.boolean(),z.lazy(() => Room_userFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PersonCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PersonArgsSchema: z.ZodType<Prisma.PersonArgs> = z.object({
  select: z.lazy(() => PersonSelectSchema).optional(),
  include: z.lazy(() => PersonIncludeSchema).optional(),
}).strict();

export const PersonCountOutputTypeArgsSchema: z.ZodType<Prisma.PersonCountOutputTypeArgs> = z.object({
  select: z.lazy(() => PersonCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PersonCountOutputTypeSelectSchema: z.ZodType<Prisma.PersonCountOutputTypeSelect> = z.object({
  box_user: z.boolean().optional(),
  room: z.boolean().optional(),
  room_user: z.boolean().optional(),
}).strict();

export const PersonSelectSchema: z.ZodType<Prisma.PersonSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  box_user: z.union([z.boolean(),z.lazy(() => Box_userFindManyArgsSchema)]).optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  room_user: z.union([z.boolean(),z.lazy(() => Room_userFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PersonCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ROOM
//------------------------------------------------------

export const RoomIncludeSchema: z.ZodType<Prisma.RoomInclude> = z.object({
  box: z.union([z.boolean(),z.lazy(() => BoxFindManyArgsSchema)]).optional(),
  house: z.union([z.boolean(),z.lazy(() => HouseArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  room_user: z.union([z.boolean(),z.lazy(() => Room_userFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoomArgsSchema: z.ZodType<Prisma.RoomArgs> = z.object({
  select: z.lazy(() => RoomSelectSchema).optional(),
  include: z.lazy(() => RoomIncludeSchema).optional(),
}).strict();

export const RoomCountOutputTypeArgsSchema: z.ZodType<Prisma.RoomCountOutputTypeArgs> = z.object({
  select: z.lazy(() => RoomCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RoomCountOutputTypeSelectSchema: z.ZodType<Prisma.RoomCountOutputTypeSelect> = z.object({
  box: z.boolean().optional(),
  room_user: z.boolean().optional(),
}).strict();

export const RoomSelectSchema: z.ZodType<Prisma.RoomSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  house_id: z.boolean().optional(),
  owner_id: z.boolean().optional(),
  box: z.union([z.boolean(),z.lazy(() => BoxFindManyArgsSchema)]).optional(),
  house: z.union([z.boolean(),z.lazy(() => HouseArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  room_user: z.union([z.boolean(),z.lazy(() => Room_userFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ROOM USER
//------------------------------------------------------

export const Room_userIncludeSchema: z.ZodType<Prisma.Room_userInclude> = z.object({
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const Room_userArgsSchema: z.ZodType<Prisma.Room_userArgs> = z.object({
  select: z.lazy(() => Room_userSelectSchema).optional(),
  include: z.lazy(() => Room_userIncludeSchema).optional(),
}).strict();

export const Room_userSelectSchema: z.ZodType<Prisma.Room_userSelect> = z.object({
  id: z.boolean().optional(),
  person_id: z.boolean().optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

// THING
//------------------------------------------------------

export const ThingIncludeSchema: z.ZodType<Prisma.ThingInclude> = z.object({
  box: z.union([z.boolean(),z.lazy(() => BoxArgsSchema)]).optional(),
}).strict()

export const ThingArgsSchema: z.ZodType<Prisma.ThingArgs> = z.object({
  select: z.lazy(() => ThingSelectSchema).optional(),
  include: z.lazy(() => ThingIncludeSchema).optional(),
}).strict();

export const ThingSelectSchema: z.ZodType<Prisma.ThingSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  box_id: z.boolean().optional(),
  box: z.union([z.boolean(),z.lazy(() => BoxArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const BoxWhereInputSchema: z.ZodType<Prisma.BoxWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BoxWhereInputSchema),z.lazy(() => BoxWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoxWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoxWhereInputSchema),z.lazy(() => BoxWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  room: z.union([ z.lazy(() => RoomRelationFilterSchema),z.lazy(() => RoomWhereInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userListRelationFilterSchema).optional(),
  thing: z.lazy(() => ThingListRelationFilterSchema).optional()
}).strict();

export const BoxOrderByWithRelationInputSchema: z.ZodType<Prisma.BoxOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputSchema).optional(),
  box_user: z.lazy(() => Box_userOrderByRelationAggregateInputSchema).optional(),
  thing: z.lazy(() => ThingOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BoxWhereUniqueInputSchema: z.ZodType<Prisma.BoxWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const BoxOrderByWithAggregationInputSchema: z.ZodType<Prisma.BoxOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BoxCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BoxMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BoxMinOrderByAggregateInputSchema).optional()
}).strict();

export const BoxScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BoxScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BoxScalarWhereWithAggregatesInputSchema),z.lazy(() => BoxScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoxScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoxScalarWhereWithAggregatesInputSchema),z.lazy(() => BoxScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const Box_userWhereInputSchema: z.ZodType<Prisma.Box_userWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Box_userWhereInputSchema),z.lazy(() => Box_userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Box_userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Box_userWhereInputSchema),z.lazy(() => Box_userWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  person_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  box: z.union([ z.lazy(() => BoxRelationFilterSchema),z.lazy(() => BoxWhereInputSchema) ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict();

export const Box_userOrderByWithRelationInputSchema: z.ZodType<Prisma.Box_userOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  box: z.lazy(() => BoxOrderByWithRelationInputSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export const Box_userWhereUniqueInputSchema: z.ZodType<Prisma.Box_userWhereUniqueInput> = z.object({
  id_person_id: z.lazy(() => Box_userIdPerson_idCompoundUniqueInputSchema).optional()
}).strict();

export const Box_userOrderByWithAggregationInputSchema: z.ZodType<Prisma.Box_userOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Box_userCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Box_userMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Box_userMinOrderByAggregateInputSchema).optional()
}).strict();

export const Box_userScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Box_userScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Box_userScalarWhereWithAggregatesInputSchema),z.lazy(() => Box_userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Box_userScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Box_userScalarWhereWithAggregatesInputSchema),z.lazy(() => Box_userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  person_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const HouseWhereInputSchema: z.ZodType<Prisma.HouseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HouseWhereInputSchema),z.lazy(() => HouseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HouseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HouseWhereInputSchema),z.lazy(() => HouseWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room: z.lazy(() => RoomListRelationFilterSchema).optional()
}).strict();

export const HouseOrderByWithRelationInputSchema: z.ZodType<Prisma.HouseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room: z.lazy(() => RoomOrderByRelationAggregateInputSchema).optional()
}).strict();

export const HouseWhereUniqueInputSchema: z.ZodType<Prisma.HouseWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const HouseOrderByWithAggregationInputSchema: z.ZodType<Prisma.HouseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HouseCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HouseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HouseMinOrderByAggregateInputSchema).optional()
}).strict();

export const HouseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HouseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HouseScalarWhereWithAggregatesInputSchema),z.lazy(() => HouseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HouseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HouseScalarWhereWithAggregatesInputSchema),z.lazy(() => HouseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PersonWhereInputSchema: z.ZodType<Prisma.PersonWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  box_user: z.lazy(() => Box_userListRelationFilterSchema).optional(),
  room: z.lazy(() => RoomListRelationFilterSchema).optional(),
  room_user: z.lazy(() => Room_userListRelationFilterSchema).optional()
}).strict();

export const PersonOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  box_user: z.lazy(() => Box_userOrderByRelationAggregateInputSchema).optional(),
  room: z.lazy(() => RoomOrderByRelationAggregateInputSchema).optional(),
  room_user: z.lazy(() => Room_userOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PersonWhereUniqueInputSchema: z.ZodType<Prisma.PersonWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const PersonOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonMinOrderByAggregateInputSchema).optional()
}).strict();

export const PersonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const RoomWhereInputSchema: z.ZodType<Prisma.RoomWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  house_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  owner_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  box: z.lazy(() => BoxListRelationFilterSchema).optional(),
  house: z.union([ z.lazy(() => HouseRelationFilterSchema),z.lazy(() => HouseWhereInputSchema) ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
  room_user: z.lazy(() => Room_userListRelationFilterSchema).optional()
}).strict();

export const RoomOrderByWithRelationInputSchema: z.ZodType<Prisma.RoomOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  house_id: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional(),
  box: z.lazy(() => BoxOrderByRelationAggregateInputSchema).optional(),
  house: z.lazy(() => HouseOrderByWithRelationInputSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  room_user: z.lazy(() => Room_userOrderByRelationAggregateInputSchema).optional()
}).strict();

export const RoomWhereUniqueInputSchema: z.ZodType<Prisma.RoomWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const RoomOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoomOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  house_id: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoomCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoomMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoomMinOrderByAggregateInputSchema).optional()
}).strict();

export const RoomScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoomScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoomScalarWhereWithAggregatesInputSchema),z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomScalarWhereWithAggregatesInputSchema),z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  house_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  owner_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Room_userWhereInputSchema: z.ZodType<Prisma.Room_userWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Room_userWhereInputSchema),z.lazy(() => Room_userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Room_userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Room_userWhereInputSchema),z.lazy(() => Room_userWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  person_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  room: z.union([ z.lazy(() => RoomRelationFilterSchema),z.lazy(() => RoomWhereInputSchema) ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict();

export const Room_userOrderByWithRelationInputSchema: z.ZodType<Prisma.Room_userOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export const Room_userWhereUniqueInputSchema: z.ZodType<Prisma.Room_userWhereUniqueInput> = z.object({
  id_person_id: z.lazy(() => Room_userIdPerson_idCompoundUniqueInputSchema).optional()
}).strict();

export const Room_userOrderByWithAggregationInputSchema: z.ZodType<Prisma.Room_userOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Room_userCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Room_userMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Room_userMinOrderByAggregateInputSchema).optional()
}).strict();

export const Room_userScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Room_userScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Room_userScalarWhereWithAggregatesInputSchema),z.lazy(() => Room_userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Room_userScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Room_userScalarWhereWithAggregatesInputSchema),z.lazy(() => Room_userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  person_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ThingWhereInputSchema: z.ZodType<Prisma.ThingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ThingWhereInputSchema),z.lazy(() => ThingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThingWhereInputSchema),z.lazy(() => ThingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  box_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  box: z.union([ z.lazy(() => BoxRelationFilterSchema),z.lazy(() => BoxWhereInputSchema) ]).optional(),
}).strict();

export const ThingOrderByWithRelationInputSchema: z.ZodType<Prisma.ThingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  box_id: z.lazy(() => SortOrderSchema).optional(),
  box: z.lazy(() => BoxOrderByWithRelationInputSchema).optional()
}).strict();

export const ThingWhereUniqueInputSchema: z.ZodType<Prisma.ThingWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const ThingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ThingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  box_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ThingCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ThingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ThingMinOrderByAggregateInputSchema).optional()
}).strict();

export const ThingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ThingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ThingScalarWhereWithAggregatesInputSchema),z.lazy(() => ThingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThingScalarWhereWithAggregatesInputSchema),z.lazy(() => ThingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  box_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const BoxCreateInputSchema: z.ZodType<Prisma.BoxCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  room: z.lazy(() => RoomCreateNestedOneWithoutBoxInputSchema),
  box_user: z.lazy(() => Box_userCreateNestedManyWithoutBoxInputSchema).optional(),
  thing: z.lazy(() => ThingCreateNestedManyWithoutBoxInputSchema).optional()
}).strict();

export const BoxUncheckedCreateInputSchema: z.ZodType<Prisma.BoxUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  room_id: z.string().uuid(),
  box_user: z.lazy(() => Box_userUncheckedCreateNestedManyWithoutBoxInputSchema).optional(),
  thing: z.lazy(() => ThingUncheckedCreateNestedManyWithoutBoxInputSchema).optional()
}).strict();

export const BoxUpdateInputSchema: z.ZodType<Prisma.BoxUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutBoxNestedInputSchema).optional(),
  box_user: z.lazy(() => Box_userUpdateManyWithoutBoxNestedInputSchema).optional(),
  thing: z.lazy(() => ThingUpdateManyWithoutBoxNestedInputSchema).optional()
}).strict();

export const BoxUncheckedUpdateInputSchema: z.ZodType<Prisma.BoxUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUncheckedUpdateManyWithoutBoxNestedInputSchema).optional(),
  thing: z.lazy(() => ThingUncheckedUpdateManyWithoutBoxNestedInputSchema).optional()
}).strict();

export const BoxCreateManyInputSchema: z.ZodType<Prisma.BoxCreateManyInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  room_id: z.string().uuid()
}).strict();

export const BoxUpdateManyMutationInputSchema: z.ZodType<Prisma.BoxUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BoxUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BoxUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Box_userCreateInputSchema: z.ZodType<Prisma.Box_userCreateInput> = z.object({
  box: z.lazy(() => BoxCreateNestedOneWithoutBox_userInputSchema),
  person: z.lazy(() => PersonCreateNestedOneWithoutBox_userInputSchema)
}).strict();

export const Box_userUncheckedCreateInputSchema: z.ZodType<Prisma.Box_userUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid()
}).strict();

export const Box_userUpdateInputSchema: z.ZodType<Prisma.Box_userUpdateInput> = z.object({
  box: z.lazy(() => BoxUpdateOneRequiredWithoutBox_userNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutBox_userNestedInputSchema).optional()
}).strict();

export const Box_userUncheckedUpdateInputSchema: z.ZodType<Prisma.Box_userUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Box_userCreateManyInputSchema: z.ZodType<Prisma.Box_userCreateManyInput> = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid()
}).strict();

export const Box_userUpdateManyMutationInputSchema: z.ZodType<Prisma.Box_userUpdateManyMutationInput> = z.object({
}).strict();

export const Box_userUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Box_userUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HouseCreateInputSchema: z.ZodType<Prisma.HouseCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  room: z.lazy(() => RoomCreateNestedManyWithoutHouseInputSchema).optional()
}).strict();

export const HouseUncheckedCreateInputSchema: z.ZodType<Prisma.HouseUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  room: z.lazy(() => RoomUncheckedCreateNestedManyWithoutHouseInputSchema).optional()
}).strict();

export const HouseUpdateInputSchema: z.ZodType<Prisma.HouseUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUpdateManyWithoutHouseNestedInputSchema).optional()
}).strict();

export const HouseUncheckedUpdateInputSchema: z.ZodType<Prisma.HouseUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUncheckedUpdateManyWithoutHouseNestedInputSchema).optional()
}).strict();

export const HouseCreateManyInputSchema: z.ZodType<Prisma.HouseCreateManyInput> = z.object({
  id: z.string().uuid(),
  name: z.string()
}).strict();

export const HouseUpdateManyMutationInputSchema: z.ZodType<Prisma.HouseUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HouseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HouseUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonCreateInputSchema: z.ZodType<Prisma.PersonCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  box_user: z.lazy(() => Box_userCreateNestedManyWithoutPersonInputSchema).optional(),
  room: z.lazy(() => RoomCreateNestedManyWithoutPersonInputSchema).optional(),
  room_user: z.lazy(() => Room_userCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonUncheckedCreateInputSchema: z.ZodType<Prisma.PersonUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  box_user: z.lazy(() => Box_userUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  room: z.lazy(() => RoomUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonUpdateInputSchema: z.ZodType<Prisma.PersonUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUpdateManyWithoutPersonNestedInputSchema).optional(),
  room: z.lazy(() => RoomUpdateManyWithoutPersonNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const PersonUncheckedUpdateInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  room: z.lazy(() => RoomUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const PersonCreateManyInputSchema: z.ZodType<Prisma.PersonCreateManyInput> = z.object({
  id: z.string().uuid(),
  name: z.string()
}).strict();

export const PersonUpdateManyMutationInputSchema: z.ZodType<Prisma.PersonUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomCreateInputSchema: z.ZodType<Prisma.RoomCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  box: z.lazy(() => BoxCreateNestedManyWithoutRoomInputSchema).optional(),
  house: z.lazy(() => HouseCreateNestedOneWithoutRoomInputSchema),
  person: z.lazy(() => PersonCreateNestedOneWithoutRoomInputSchema).optional(),
  room_user: z.lazy(() => Room_userCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateInputSchema: z.ZodType<Prisma.RoomUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  house_id: z.string().uuid(),
  owner_id: z.string().uuid().optional().nullable(),
  box: z.lazy(() => BoxUncheckedCreateNestedManyWithoutRoomInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUpdateInputSchema: z.ZodType<Prisma.RoomUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box: z.lazy(() => BoxUpdateManyWithoutRoomNestedInputSchema).optional(),
  house: z.lazy(() => HouseUpdateOneRequiredWithoutRoomNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneWithoutRoomNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  house_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  box: z.lazy(() => BoxUncheckedUpdateManyWithoutRoomNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomCreateManyInputSchema: z.ZodType<Prisma.RoomCreateManyInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  house_id: z.string().uuid(),
  owner_id: z.string().uuid().optional().nullable()
}).strict();

export const RoomUpdateManyMutationInputSchema: z.ZodType<Prisma.RoomUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  house_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Room_userCreateInputSchema: z.ZodType<Prisma.Room_userCreateInput> = z.object({
  room: z.lazy(() => RoomCreateNestedOneWithoutRoom_userInputSchema),
  person: z.lazy(() => PersonCreateNestedOneWithoutRoom_userInputSchema)
}).strict();

export const Room_userUncheckedCreateInputSchema: z.ZodType<Prisma.Room_userUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid()
}).strict();

export const Room_userUpdateInputSchema: z.ZodType<Prisma.Room_userUpdateInput> = z.object({
  room: z.lazy(() => RoomUpdateOneRequiredWithoutRoom_userNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutRoom_userNestedInputSchema).optional()
}).strict();

export const Room_userUncheckedUpdateInputSchema: z.ZodType<Prisma.Room_userUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Room_userCreateManyInputSchema: z.ZodType<Prisma.Room_userCreateManyInput> = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid()
}).strict();

export const Room_userUpdateManyMutationInputSchema: z.ZodType<Prisma.Room_userUpdateManyMutationInput> = z.object({
}).strict();

export const Room_userUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Room_userUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThingCreateInputSchema: z.ZodType<Prisma.ThingCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  box: z.lazy(() => BoxCreateNestedOneWithoutThingInputSchema)
}).strict();

export const ThingUncheckedCreateInputSchema: z.ZodType<Prisma.ThingUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  box_id: z.string().uuid()
}).strict();

export const ThingUpdateInputSchema: z.ZodType<Prisma.ThingUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box: z.lazy(() => BoxUpdateOneRequiredWithoutThingNestedInputSchema).optional()
}).strict();

export const ThingUncheckedUpdateInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThingCreateManyInputSchema: z.ZodType<Prisma.ThingCreateManyInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  box_id: z.string().uuid()
}).strict();

export const ThingUpdateManyMutationInputSchema: z.ZodType<Prisma.ThingUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const RoomRelationFilterSchema: z.ZodType<Prisma.RoomRelationFilter> = z.object({
  is: z.lazy(() => RoomWhereInputSchema).optional(),
  isNot: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export const Box_userListRelationFilterSchema: z.ZodType<Prisma.Box_userListRelationFilter> = z.object({
  every: z.lazy(() => Box_userWhereInputSchema).optional(),
  some: z.lazy(() => Box_userWhereInputSchema).optional(),
  none: z.lazy(() => Box_userWhereInputSchema).optional()
}).strict();

export const ThingListRelationFilterSchema: z.ZodType<Prisma.ThingListRelationFilter> = z.object({
  every: z.lazy(() => ThingWhereInputSchema).optional(),
  some: z.lazy(() => ThingWhereInputSchema).optional(),
  none: z.lazy(() => ThingWhereInputSchema).optional()
}).strict();

export const Box_userOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Box_userOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ThingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoxCountOrderByAggregateInputSchema: z.ZodType<Prisma.BoxCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoxMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BoxMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoxMinOrderByAggregateInputSchema: z.ZodType<Prisma.BoxMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const BoxRelationFilterSchema: z.ZodType<Prisma.BoxRelationFilter> = z.object({
  is: z.lazy(() => BoxWhereInputSchema).optional(),
  isNot: z.lazy(() => BoxWhereInputSchema).optional()
}).strict();

export const PersonRelationFilterSchema: z.ZodType<Prisma.PersonRelationFilter> = z.object({
  is: z.lazy(() => PersonWhereInputSchema).optional(),
  isNot: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export const Box_userIdPerson_idCompoundUniqueInputSchema: z.ZodType<Prisma.Box_userIdPerson_idCompoundUniqueInput> = z.object({
  id: z.string(),
  person_id: z.string()
}).strict();

export const Box_userCountOrderByAggregateInputSchema: z.ZodType<Prisma.Box_userCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Box_userMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Box_userMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Box_userMinOrderByAggregateInputSchema: z.ZodType<Prisma.Box_userMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomListRelationFilterSchema: z.ZodType<Prisma.RoomListRelationFilter> = z.object({
  every: z.lazy(() => RoomWhereInputSchema).optional(),
  some: z.lazy(() => RoomWhereInputSchema).optional(),
  none: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export const RoomOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoomOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HouseCountOrderByAggregateInputSchema: z.ZodType<Prisma.HouseCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HouseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HouseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HouseMinOrderByAggregateInputSchema: z.ZodType<Prisma.HouseMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Room_userListRelationFilterSchema: z.ZodType<Prisma.Room_userListRelationFilter> = z.object({
  every: z.lazy(() => Room_userWhereInputSchema).optional(),
  some: z.lazy(() => Room_userWhereInputSchema).optional(),
  none: z.lazy(() => Room_userWhereInputSchema).optional()
}).strict();

export const Room_userOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Room_userOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoxListRelationFilterSchema: z.ZodType<Prisma.BoxListRelationFilter> = z.object({
  every: z.lazy(() => BoxWhereInputSchema).optional(),
  some: z.lazy(() => BoxWhereInputSchema).optional(),
  none: z.lazy(() => BoxWhereInputSchema).optional()
}).strict();

export const HouseRelationFilterSchema: z.ZodType<Prisma.HouseRelationFilter> = z.object({
  is: z.lazy(() => HouseWhereInputSchema).optional(),
  isNot: z.lazy(() => HouseWhereInputSchema).optional()
}).strict();

export const BoxOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BoxOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoomCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  house_id: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoomMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  house_id: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoomMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  house_id: z.lazy(() => SortOrderSchema).optional(),
  owner_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const Room_userIdPerson_idCompoundUniqueInputSchema: z.ZodType<Prisma.Room_userIdPerson_idCompoundUniqueInput> = z.object({
  id: z.string(),
  person_id: z.string()
}).strict();

export const Room_userCountOrderByAggregateInputSchema: z.ZodType<Prisma.Room_userCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Room_userMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Room_userMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Room_userMinOrderByAggregateInputSchema: z.ZodType<Prisma.Room_userMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThingCountOrderByAggregateInputSchema: z.ZodType<Prisma.ThingCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  box_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ThingMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  box_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThingMinOrderByAggregateInputSchema: z.ZodType<Prisma.ThingMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  box_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomCreateNestedOneWithoutBoxInputSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutBoxInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutBoxInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBoxInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutBoxInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional()
}).strict();

export const Box_userCreateNestedManyWithoutBoxInputSchema: z.ZodType<Prisma.Box_userCreateNestedManyWithoutBoxInput> = z.object({
  create: z.union([ z.lazy(() => Box_userCreateWithoutBoxInputSchema),z.lazy(() => Box_userCreateWithoutBoxInputSchema).array(),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Box_userCreateOrConnectWithoutBoxInputSchema),z.lazy(() => Box_userCreateOrConnectWithoutBoxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Box_userCreateManyBoxInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ThingCreateNestedManyWithoutBoxInputSchema: z.ZodType<Prisma.ThingCreateNestedManyWithoutBoxInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutBoxInputSchema),z.lazy(() => ThingCreateWithoutBoxInputSchema).array(),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThingCreateOrConnectWithoutBoxInputSchema),z.lazy(() => ThingCreateOrConnectWithoutBoxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThingCreateManyBoxInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Box_userUncheckedCreateNestedManyWithoutBoxInputSchema: z.ZodType<Prisma.Box_userUncheckedCreateNestedManyWithoutBoxInput> = z.object({
  create: z.union([ z.lazy(() => Box_userCreateWithoutBoxInputSchema),z.lazy(() => Box_userCreateWithoutBoxInputSchema).array(),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Box_userCreateOrConnectWithoutBoxInputSchema),z.lazy(() => Box_userCreateOrConnectWithoutBoxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Box_userCreateManyBoxInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ThingUncheckedCreateNestedManyWithoutBoxInputSchema: z.ZodType<Prisma.ThingUncheckedCreateNestedManyWithoutBoxInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutBoxInputSchema),z.lazy(() => ThingCreateWithoutBoxInputSchema).array(),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThingCreateOrConnectWithoutBoxInputSchema),z.lazy(() => ThingCreateOrConnectWithoutBoxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThingCreateManyBoxInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const RoomUpdateOneRequiredWithoutBoxNestedInputSchema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutBoxNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutBoxInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBoxInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutBoxInputSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutBoxInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithoutBoxInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutBoxInputSchema) ]).optional(),
}).strict();

export const Box_userUpdateManyWithoutBoxNestedInputSchema: z.ZodType<Prisma.Box_userUpdateManyWithoutBoxNestedInput> = z.object({
  create: z.union([ z.lazy(() => Box_userCreateWithoutBoxInputSchema),z.lazy(() => Box_userCreateWithoutBoxInputSchema).array(),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Box_userCreateOrConnectWithoutBoxInputSchema),z.lazy(() => Box_userCreateOrConnectWithoutBoxInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Box_userUpsertWithWhereUniqueWithoutBoxInputSchema),z.lazy(() => Box_userUpsertWithWhereUniqueWithoutBoxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Box_userCreateManyBoxInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Box_userUpdateWithWhereUniqueWithoutBoxInputSchema),z.lazy(() => Box_userUpdateWithWhereUniqueWithoutBoxInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Box_userUpdateManyWithWhereWithoutBoxInputSchema),z.lazy(() => Box_userUpdateManyWithWhereWithoutBoxInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Box_userScalarWhereInputSchema),z.lazy(() => Box_userScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ThingUpdateManyWithoutBoxNestedInputSchema: z.ZodType<Prisma.ThingUpdateManyWithoutBoxNestedInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutBoxInputSchema),z.lazy(() => ThingCreateWithoutBoxInputSchema).array(),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThingCreateOrConnectWithoutBoxInputSchema),z.lazy(() => ThingCreateOrConnectWithoutBoxInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ThingUpsertWithWhereUniqueWithoutBoxInputSchema),z.lazy(() => ThingUpsertWithWhereUniqueWithoutBoxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThingCreateManyBoxInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ThingUpdateWithWhereUniqueWithoutBoxInputSchema),z.lazy(() => ThingUpdateWithWhereUniqueWithoutBoxInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ThingUpdateManyWithWhereWithoutBoxInputSchema),z.lazy(() => ThingUpdateManyWithWhereWithoutBoxInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ThingScalarWhereInputSchema),z.lazy(() => ThingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Box_userUncheckedUpdateManyWithoutBoxNestedInputSchema: z.ZodType<Prisma.Box_userUncheckedUpdateManyWithoutBoxNestedInput> = z.object({
  create: z.union([ z.lazy(() => Box_userCreateWithoutBoxInputSchema),z.lazy(() => Box_userCreateWithoutBoxInputSchema).array(),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Box_userCreateOrConnectWithoutBoxInputSchema),z.lazy(() => Box_userCreateOrConnectWithoutBoxInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Box_userUpsertWithWhereUniqueWithoutBoxInputSchema),z.lazy(() => Box_userUpsertWithWhereUniqueWithoutBoxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Box_userCreateManyBoxInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Box_userUpdateWithWhereUniqueWithoutBoxInputSchema),z.lazy(() => Box_userUpdateWithWhereUniqueWithoutBoxInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Box_userUpdateManyWithWhereWithoutBoxInputSchema),z.lazy(() => Box_userUpdateManyWithWhereWithoutBoxInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Box_userScalarWhereInputSchema),z.lazy(() => Box_userScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ThingUncheckedUpdateManyWithoutBoxNestedInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateManyWithoutBoxNestedInput> = z.object({
  create: z.union([ z.lazy(() => ThingCreateWithoutBoxInputSchema),z.lazy(() => ThingCreateWithoutBoxInputSchema).array(),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThingCreateOrConnectWithoutBoxInputSchema),z.lazy(() => ThingCreateOrConnectWithoutBoxInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ThingUpsertWithWhereUniqueWithoutBoxInputSchema),z.lazy(() => ThingUpsertWithWhereUniqueWithoutBoxInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThingCreateManyBoxInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ThingWhereUniqueInputSchema),z.lazy(() => ThingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ThingUpdateWithWhereUniqueWithoutBoxInputSchema),z.lazy(() => ThingUpdateWithWhereUniqueWithoutBoxInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ThingUpdateManyWithWhereWithoutBoxInputSchema),z.lazy(() => ThingUpdateManyWithWhereWithoutBoxInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ThingScalarWhereInputSchema),z.lazy(() => ThingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BoxCreateNestedOneWithoutBox_userInputSchema: z.ZodType<Prisma.BoxCreateNestedOneWithoutBox_userInput> = z.object({
  create: z.union([ z.lazy(() => BoxCreateWithoutBox_userInputSchema),z.lazy(() => BoxUncheckedCreateWithoutBox_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoxCreateOrConnectWithoutBox_userInputSchema).optional(),
  connect: z.lazy(() => BoxWhereUniqueInputSchema).optional()
}).strict();

export const PersonCreateNestedOneWithoutBox_userInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutBox_userInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutBox_userInputSchema),z.lazy(() => PersonUncheckedCreateWithoutBox_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutBox_userInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export const BoxUpdateOneRequiredWithoutBox_userNestedInputSchema: z.ZodType<Prisma.BoxUpdateOneRequiredWithoutBox_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => BoxCreateWithoutBox_userInputSchema),z.lazy(() => BoxUncheckedCreateWithoutBox_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoxCreateOrConnectWithoutBox_userInputSchema).optional(),
  upsert: z.lazy(() => BoxUpsertWithoutBox_userInputSchema).optional(),
  connect: z.lazy(() => BoxWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BoxUpdateWithoutBox_userInputSchema),z.lazy(() => BoxUncheckedUpdateWithoutBox_userInputSchema) ]).optional(),
}).strict();

export const PersonUpdateOneRequiredWithoutBox_userNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutBox_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutBox_userInputSchema),z.lazy(() => PersonUncheckedCreateWithoutBox_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutBox_userInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutBox_userInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateWithoutBox_userInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutBox_userInputSchema) ]).optional(),
}).strict();

export const RoomCreateNestedManyWithoutHouseInputSchema: z.ZodType<Prisma.RoomCreateNestedManyWithoutHouseInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutHouseInputSchema),z.lazy(() => RoomCreateWithoutHouseInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutHouseInputSchema),z.lazy(() => RoomCreateOrConnectWithoutHouseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyHouseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedCreateNestedManyWithoutHouseInputSchema: z.ZodType<Prisma.RoomUncheckedCreateNestedManyWithoutHouseInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutHouseInputSchema),z.lazy(() => RoomCreateWithoutHouseInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutHouseInputSchema),z.lazy(() => RoomCreateOrConnectWithoutHouseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyHouseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomUpdateManyWithoutHouseNestedInputSchema: z.ZodType<Prisma.RoomUpdateManyWithoutHouseNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutHouseInputSchema),z.lazy(() => RoomCreateWithoutHouseInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutHouseInputSchema),z.lazy(() => RoomCreateOrConnectWithoutHouseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutHouseInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutHouseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyHouseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutHouseInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutHouseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutHouseInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutHouseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedUpdateManyWithoutHouseNestedInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutHouseNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutHouseInputSchema),z.lazy(() => RoomCreateWithoutHouseInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutHouseInputSchema),z.lazy(() => RoomCreateOrConnectWithoutHouseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutHouseInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutHouseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyHouseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutHouseInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutHouseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutHouseInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutHouseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Box_userCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.Box_userCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => Box_userCreateWithoutPersonInputSchema),z.lazy(() => Box_userCreateWithoutPersonInputSchema).array(),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Box_userCreateOrConnectWithoutPersonInputSchema),z.lazy(() => Box_userCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Box_userCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.RoomCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutPersonInputSchema),z.lazy(() => RoomCreateWithoutPersonInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutPersonInputSchema),z.lazy(() => RoomCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Room_userCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.Room_userCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => Room_userCreateWithoutPersonInputSchema),z.lazy(() => Room_userCreateWithoutPersonInputSchema).array(),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Room_userCreateOrConnectWithoutPersonInputSchema),z.lazy(() => Room_userCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Room_userCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Box_userUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.Box_userUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => Box_userCreateWithoutPersonInputSchema),z.lazy(() => Box_userCreateWithoutPersonInputSchema).array(),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Box_userCreateOrConnectWithoutPersonInputSchema),z.lazy(() => Box_userCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Box_userCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.RoomUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutPersonInputSchema),z.lazy(() => RoomCreateWithoutPersonInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutPersonInputSchema),z.lazy(() => RoomCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Room_userUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.Room_userUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => Room_userCreateWithoutPersonInputSchema),z.lazy(() => Room_userCreateWithoutPersonInputSchema).array(),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Room_userCreateOrConnectWithoutPersonInputSchema),z.lazy(() => Room_userCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Room_userCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Box_userUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.Box_userUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => Box_userCreateWithoutPersonInputSchema),z.lazy(() => Box_userCreateWithoutPersonInputSchema).array(),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Box_userCreateOrConnectWithoutPersonInputSchema),z.lazy(() => Box_userCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Box_userUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => Box_userUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Box_userCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Box_userUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => Box_userUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Box_userUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => Box_userUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Box_userScalarWhereInputSchema),z.lazy(() => Box_userScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.RoomUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutPersonInputSchema),z.lazy(() => RoomCreateWithoutPersonInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutPersonInputSchema),z.lazy(() => RoomCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Room_userUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.Room_userUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => Room_userCreateWithoutPersonInputSchema),z.lazy(() => Room_userCreateWithoutPersonInputSchema).array(),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Room_userCreateOrConnectWithoutPersonInputSchema),z.lazy(() => Room_userCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Room_userUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => Room_userUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Room_userCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Room_userUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => Room_userUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Room_userUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => Room_userUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Room_userScalarWhereInputSchema),z.lazy(() => Room_userScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Box_userUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.Box_userUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => Box_userCreateWithoutPersonInputSchema),z.lazy(() => Box_userCreateWithoutPersonInputSchema).array(),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Box_userCreateOrConnectWithoutPersonInputSchema),z.lazy(() => Box_userCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Box_userUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => Box_userUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Box_userCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Box_userWhereUniqueInputSchema),z.lazy(() => Box_userWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Box_userUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => Box_userUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Box_userUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => Box_userUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Box_userScalarWhereInputSchema),z.lazy(() => Box_userScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutPersonInputSchema),z.lazy(() => RoomCreateWithoutPersonInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutPersonInputSchema),z.lazy(() => RoomCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Room_userUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.Room_userUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => Room_userCreateWithoutPersonInputSchema),z.lazy(() => Room_userCreateWithoutPersonInputSchema).array(),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Room_userCreateOrConnectWithoutPersonInputSchema),z.lazy(() => Room_userCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Room_userUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => Room_userUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Room_userCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Room_userUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => Room_userUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Room_userUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => Room_userUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Room_userScalarWhereInputSchema),z.lazy(() => Room_userScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BoxCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.BoxCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => BoxCreateWithoutRoomInputSchema),z.lazy(() => BoxCreateWithoutRoomInputSchema).array(),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoxCreateOrConnectWithoutRoomInputSchema),z.lazy(() => BoxCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoxCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HouseCreateNestedOneWithoutRoomInputSchema: z.ZodType<Prisma.HouseCreateNestedOneWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => HouseCreateWithoutRoomInputSchema),z.lazy(() => HouseUncheckedCreateWithoutRoomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HouseCreateOrConnectWithoutRoomInputSchema).optional(),
  connect: z.lazy(() => HouseWhereUniqueInputSchema).optional()
}).strict();

export const PersonCreateNestedOneWithoutRoomInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutRoomInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutRoomInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export const Room_userCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.Room_userCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => Room_userCreateWithoutRoomInputSchema),z.lazy(() => Room_userCreateWithoutRoomInputSchema).array(),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Room_userCreateOrConnectWithoutRoomInputSchema),z.lazy(() => Room_userCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Room_userCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BoxUncheckedCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.BoxUncheckedCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => BoxCreateWithoutRoomInputSchema),z.lazy(() => BoxCreateWithoutRoomInputSchema).array(),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoxCreateOrConnectWithoutRoomInputSchema),z.lazy(() => BoxCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoxCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Room_userUncheckedCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.Room_userUncheckedCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => Room_userCreateWithoutRoomInputSchema),z.lazy(() => Room_userCreateWithoutRoomInputSchema).array(),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Room_userCreateOrConnectWithoutRoomInputSchema),z.lazy(() => Room_userCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Room_userCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BoxUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.BoxUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => BoxCreateWithoutRoomInputSchema),z.lazy(() => BoxCreateWithoutRoomInputSchema).array(),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoxCreateOrConnectWithoutRoomInputSchema),z.lazy(() => BoxCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BoxUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => BoxUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoxCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BoxUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => BoxUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BoxUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => BoxUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BoxScalarWhereInputSchema),z.lazy(() => BoxScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HouseUpdateOneRequiredWithoutRoomNestedInputSchema: z.ZodType<Prisma.HouseUpdateOneRequiredWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => HouseCreateWithoutRoomInputSchema),z.lazy(() => HouseUncheckedCreateWithoutRoomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HouseCreateOrConnectWithoutRoomInputSchema).optional(),
  upsert: z.lazy(() => HouseUpsertWithoutRoomInputSchema).optional(),
  connect: z.lazy(() => HouseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HouseUpdateWithoutRoomInputSchema),z.lazy(() => HouseUncheckedUpdateWithoutRoomInputSchema) ]).optional(),
}).strict();

export const PersonUpdateOneWithoutRoomNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutRoomInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutRoomInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutRoomInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateWithoutRoomInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoomInputSchema) ]).optional(),
}).strict();

export const Room_userUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.Room_userUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => Room_userCreateWithoutRoomInputSchema),z.lazy(() => Room_userCreateWithoutRoomInputSchema).array(),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Room_userCreateOrConnectWithoutRoomInputSchema),z.lazy(() => Room_userCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Room_userUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => Room_userUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Room_userCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Room_userUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => Room_userUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Room_userUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => Room_userUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Room_userScalarWhereInputSchema),z.lazy(() => Room_userScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const BoxUncheckedUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.BoxUncheckedUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => BoxCreateWithoutRoomInputSchema),z.lazy(() => BoxCreateWithoutRoomInputSchema).array(),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoxCreateOrConnectWithoutRoomInputSchema),z.lazy(() => BoxCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BoxUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => BoxUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoxCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BoxWhereUniqueInputSchema),z.lazy(() => BoxWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BoxUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => BoxUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BoxUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => BoxUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BoxScalarWhereInputSchema),z.lazy(() => BoxScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Room_userUncheckedUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.Room_userUncheckedUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => Room_userCreateWithoutRoomInputSchema),z.lazy(() => Room_userCreateWithoutRoomInputSchema).array(),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Room_userCreateOrConnectWithoutRoomInputSchema),z.lazy(() => Room_userCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Room_userUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => Room_userUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Room_userCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Room_userWhereUniqueInputSchema),z.lazy(() => Room_userWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Room_userUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => Room_userUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Room_userUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => Room_userUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Room_userScalarWhereInputSchema),z.lazy(() => Room_userScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomCreateNestedOneWithoutRoom_userInputSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutRoom_userInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutRoom_userInputSchema),z.lazy(() => RoomUncheckedCreateWithoutRoom_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutRoom_userInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional()
}).strict();

export const PersonCreateNestedOneWithoutRoom_userInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutRoom_userInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutRoom_userInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoom_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutRoom_userInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export const RoomUpdateOneRequiredWithoutRoom_userNestedInputSchema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutRoom_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutRoom_userInputSchema),z.lazy(() => RoomUncheckedCreateWithoutRoom_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutRoom_userInputSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutRoom_userInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithoutRoom_userInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutRoom_userInputSchema) ]).optional(),
}).strict();

export const PersonUpdateOneRequiredWithoutRoom_userNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutRoom_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutRoom_userInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoom_userInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutRoom_userInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutRoom_userInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateWithoutRoom_userInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoom_userInputSchema) ]).optional(),
}).strict();

export const BoxCreateNestedOneWithoutThingInputSchema: z.ZodType<Prisma.BoxCreateNestedOneWithoutThingInput> = z.object({
  create: z.union([ z.lazy(() => BoxCreateWithoutThingInputSchema),z.lazy(() => BoxUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoxCreateOrConnectWithoutThingInputSchema).optional(),
  connect: z.lazy(() => BoxWhereUniqueInputSchema).optional()
}).strict();

export const BoxUpdateOneRequiredWithoutThingNestedInputSchema: z.ZodType<Prisma.BoxUpdateOneRequiredWithoutThingNestedInput> = z.object({
  create: z.union([ z.lazy(() => BoxCreateWithoutThingInputSchema),z.lazy(() => BoxUncheckedCreateWithoutThingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoxCreateOrConnectWithoutThingInputSchema).optional(),
  upsert: z.lazy(() => BoxUpsertWithoutThingInputSchema).optional(),
  connect: z.lazy(() => BoxWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BoxUpdateWithoutThingInputSchema),z.lazy(() => BoxUncheckedUpdateWithoutThingInputSchema) ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const RoomCreateWithoutBoxInputSchema: z.ZodType<Prisma.RoomCreateWithoutBoxInput> = z.object({
  id: z.string(),
  name: z.string(),
  house: z.lazy(() => HouseCreateNestedOneWithoutRoomInputSchema),
  person: z.lazy(() => PersonCreateNestedOneWithoutRoomInputSchema).optional(),
  room_user: z.lazy(() => Room_userCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutBoxInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutBoxInput> = z.object({
  id: z.string(),
  name: z.string(),
  house_id: z.string(),
  owner_id: z.string().optional().nullable(),
  room_user: z.lazy(() => Room_userUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutBoxInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutBoxInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutBoxInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBoxInputSchema) ]),
}).strict();

export const Box_userCreateWithoutBoxInputSchema: z.ZodType<Prisma.Box_userCreateWithoutBoxInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutBox_userInputSchema)
}).strict();

export const Box_userUncheckedCreateWithoutBoxInputSchema: z.ZodType<Prisma.Box_userUncheckedCreateWithoutBoxInput> = z.object({
  person_id: z.string()
}).strict();

export const Box_userCreateOrConnectWithoutBoxInputSchema: z.ZodType<Prisma.Box_userCreateOrConnectWithoutBoxInput> = z.object({
  where: z.lazy(() => Box_userWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Box_userCreateWithoutBoxInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema) ]),
}).strict();

export const Box_userCreateManyBoxInputEnvelopeSchema: z.ZodType<Prisma.Box_userCreateManyBoxInputEnvelope> = z.object({
  data: z.lazy(() => Box_userCreateManyBoxInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ThingCreateWithoutBoxInputSchema: z.ZodType<Prisma.ThingCreateWithoutBoxInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const ThingUncheckedCreateWithoutBoxInputSchema: z.ZodType<Prisma.ThingUncheckedCreateWithoutBoxInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const ThingCreateOrConnectWithoutBoxInputSchema: z.ZodType<Prisma.ThingCreateOrConnectWithoutBoxInput> = z.object({
  where: z.lazy(() => ThingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ThingCreateWithoutBoxInputSchema),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema) ]),
}).strict();

export const ThingCreateManyBoxInputEnvelopeSchema: z.ZodType<Prisma.ThingCreateManyBoxInputEnvelope> = z.object({
  data: z.lazy(() => ThingCreateManyBoxInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoomUpsertWithoutBoxInputSchema: z.ZodType<Prisma.RoomUpsertWithoutBoxInput> = z.object({
  update: z.union([ z.lazy(() => RoomUpdateWithoutBoxInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutBoxInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutBoxInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBoxInputSchema) ]),
}).strict();

export const RoomUpdateWithoutBoxInputSchema: z.ZodType<Prisma.RoomUpdateWithoutBoxInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  house: z.lazy(() => HouseUpdateOneRequiredWithoutRoomNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneWithoutRoomNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutBoxInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutBoxInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  house_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  room_user: z.lazy(() => Room_userUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const Box_userUpsertWithWhereUniqueWithoutBoxInputSchema: z.ZodType<Prisma.Box_userUpsertWithWhereUniqueWithoutBoxInput> = z.object({
  where: z.lazy(() => Box_userWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Box_userUpdateWithoutBoxInputSchema),z.lazy(() => Box_userUncheckedUpdateWithoutBoxInputSchema) ]),
  create: z.union([ z.lazy(() => Box_userCreateWithoutBoxInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutBoxInputSchema) ]),
}).strict();

export const Box_userUpdateWithWhereUniqueWithoutBoxInputSchema: z.ZodType<Prisma.Box_userUpdateWithWhereUniqueWithoutBoxInput> = z.object({
  where: z.lazy(() => Box_userWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Box_userUpdateWithoutBoxInputSchema),z.lazy(() => Box_userUncheckedUpdateWithoutBoxInputSchema) ]),
}).strict();

export const Box_userUpdateManyWithWhereWithoutBoxInputSchema: z.ZodType<Prisma.Box_userUpdateManyWithWhereWithoutBoxInput> = z.object({
  where: z.lazy(() => Box_userScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Box_userUpdateManyMutationInputSchema),z.lazy(() => Box_userUncheckedUpdateManyWithoutBox_userInputSchema) ]),
}).strict();

export const Box_userScalarWhereInputSchema: z.ZodType<Prisma.Box_userScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Box_userScalarWhereInputSchema),z.lazy(() => Box_userScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Box_userScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Box_userScalarWhereInputSchema),z.lazy(() => Box_userScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  person_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const ThingUpsertWithWhereUniqueWithoutBoxInputSchema: z.ZodType<Prisma.ThingUpsertWithWhereUniqueWithoutBoxInput> = z.object({
  where: z.lazy(() => ThingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ThingUpdateWithoutBoxInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutBoxInputSchema) ]),
  create: z.union([ z.lazy(() => ThingCreateWithoutBoxInputSchema),z.lazy(() => ThingUncheckedCreateWithoutBoxInputSchema) ]),
}).strict();

export const ThingUpdateWithWhereUniqueWithoutBoxInputSchema: z.ZodType<Prisma.ThingUpdateWithWhereUniqueWithoutBoxInput> = z.object({
  where: z.lazy(() => ThingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ThingUpdateWithoutBoxInputSchema),z.lazy(() => ThingUncheckedUpdateWithoutBoxInputSchema) ]),
}).strict();

export const ThingUpdateManyWithWhereWithoutBoxInputSchema: z.ZodType<Prisma.ThingUpdateManyWithWhereWithoutBoxInput> = z.object({
  where: z.lazy(() => ThingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ThingUpdateManyMutationInputSchema),z.lazy(() => ThingUncheckedUpdateManyWithoutThingInputSchema) ]),
}).strict();

export const ThingScalarWhereInputSchema: z.ZodType<Prisma.ThingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ThingScalarWhereInputSchema),z.lazy(() => ThingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThingScalarWhereInputSchema),z.lazy(() => ThingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  box_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const BoxCreateWithoutBox_userInputSchema: z.ZodType<Prisma.BoxCreateWithoutBox_userInput> = z.object({
  id: z.string(),
  name: z.string(),
  room: z.lazy(() => RoomCreateNestedOneWithoutBoxInputSchema),
  thing: z.lazy(() => ThingCreateNestedManyWithoutBoxInputSchema).optional()
}).strict();

export const BoxUncheckedCreateWithoutBox_userInputSchema: z.ZodType<Prisma.BoxUncheckedCreateWithoutBox_userInput> = z.object({
  id: z.string(),
  name: z.string(),
  room_id: z.string(),
  thing: z.lazy(() => ThingUncheckedCreateNestedManyWithoutBoxInputSchema).optional()
}).strict();

export const BoxCreateOrConnectWithoutBox_userInputSchema: z.ZodType<Prisma.BoxCreateOrConnectWithoutBox_userInput> = z.object({
  where: z.lazy(() => BoxWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoxCreateWithoutBox_userInputSchema),z.lazy(() => BoxUncheckedCreateWithoutBox_userInputSchema) ]),
}).strict();

export const PersonCreateWithoutBox_userInputSchema: z.ZodType<Prisma.PersonCreateWithoutBox_userInput> = z.object({
  id: z.string(),
  name: z.string(),
  room: z.lazy(() => RoomCreateNestedManyWithoutPersonInputSchema).optional(),
  room_user: z.lazy(() => Room_userCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonUncheckedCreateWithoutBox_userInputSchema: z.ZodType<Prisma.PersonUncheckedCreateWithoutBox_userInput> = z.object({
  id: z.string(),
  name: z.string(),
  room: z.lazy(() => RoomUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonCreateOrConnectWithoutBox_userInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutBox_userInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutBox_userInputSchema),z.lazy(() => PersonUncheckedCreateWithoutBox_userInputSchema) ]),
}).strict();

export const BoxUpsertWithoutBox_userInputSchema: z.ZodType<Prisma.BoxUpsertWithoutBox_userInput> = z.object({
  update: z.union([ z.lazy(() => BoxUpdateWithoutBox_userInputSchema),z.lazy(() => BoxUncheckedUpdateWithoutBox_userInputSchema) ]),
  create: z.union([ z.lazy(() => BoxCreateWithoutBox_userInputSchema),z.lazy(() => BoxUncheckedCreateWithoutBox_userInputSchema) ]),
}).strict();

export const BoxUpdateWithoutBox_userInputSchema: z.ZodType<Prisma.BoxUpdateWithoutBox_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutBoxNestedInputSchema).optional(),
  thing: z.lazy(() => ThingUpdateManyWithoutBoxNestedInputSchema).optional()
}).strict();

export const BoxUncheckedUpdateWithoutBox_userInputSchema: z.ZodType<Prisma.BoxUncheckedUpdateWithoutBox_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thing: z.lazy(() => ThingUncheckedUpdateManyWithoutBoxNestedInputSchema).optional()
}).strict();

export const PersonUpsertWithoutBox_userInputSchema: z.ZodType<Prisma.PersonUpsertWithoutBox_userInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutBox_userInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutBox_userInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutBox_userInputSchema),z.lazy(() => PersonUncheckedCreateWithoutBox_userInputSchema) ]),
}).strict();

export const PersonUpdateWithoutBox_userInputSchema: z.ZodType<Prisma.PersonUpdateWithoutBox_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUpdateManyWithoutPersonNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const PersonUncheckedUpdateWithoutBox_userInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutBox_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const RoomCreateWithoutHouseInputSchema: z.ZodType<Prisma.RoomCreateWithoutHouseInput> = z.object({
  id: z.string(),
  name: z.string(),
  box: z.lazy(() => BoxCreateNestedManyWithoutRoomInputSchema).optional(),
  person: z.lazy(() => PersonCreateNestedOneWithoutRoomInputSchema).optional(),
  room_user: z.lazy(() => Room_userCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutHouseInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutHouseInput> = z.object({
  id: z.string(),
  name: z.string(),
  owner_id: z.string().optional().nullable(),
  box: z.lazy(() => BoxUncheckedCreateNestedManyWithoutRoomInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutHouseInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutHouseInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutHouseInputSchema),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema) ]),
}).strict();

export const RoomCreateManyHouseInputEnvelopeSchema: z.ZodType<Prisma.RoomCreateManyHouseInputEnvelope> = z.object({
  data: z.lazy(() => RoomCreateManyHouseInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoomUpsertWithWhereUniqueWithoutHouseInputSchema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutHouseInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoomUpdateWithoutHouseInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutHouseInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutHouseInputSchema),z.lazy(() => RoomUncheckedCreateWithoutHouseInputSchema) ]),
}).strict();

export const RoomUpdateWithWhereUniqueWithoutHouseInputSchema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutHouseInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateWithoutHouseInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutHouseInputSchema) ]),
}).strict();

export const RoomUpdateManyWithWhereWithoutHouseInputSchema: z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutHouseInput> = z.object({
  where: z.lazy(() => RoomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateManyMutationInputSchema),z.lazy(() => RoomUncheckedUpdateManyWithoutRoomInputSchema) ]),
}).strict();

export const RoomScalarWhereInputSchema: z.ZodType<Prisma.RoomScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  house_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  owner_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Box_userCreateWithoutPersonInputSchema: z.ZodType<Prisma.Box_userCreateWithoutPersonInput> = z.object({
  box: z.lazy(() => BoxCreateNestedOneWithoutBox_userInputSchema)
}).strict();

export const Box_userUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.Box_userUncheckedCreateWithoutPersonInput> = z.object({
  id: z.string()
}).strict();

export const Box_userCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.Box_userCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => Box_userWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Box_userCreateWithoutPersonInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export const Box_userCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.Box_userCreateManyPersonInputEnvelope> = z.object({
  data: z.lazy(() => Box_userCreateManyPersonInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoomCreateWithoutPersonInputSchema: z.ZodType<Prisma.RoomCreateWithoutPersonInput> = z.object({
  id: z.string(),
  name: z.string(),
  box: z.lazy(() => BoxCreateNestedManyWithoutRoomInputSchema).optional(),
  house: z.lazy(() => HouseCreateNestedOneWithoutRoomInputSchema),
  room_user: z.lazy(() => Room_userCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutPersonInput> = z.object({
  id: z.string(),
  name: z.string(),
  house_id: z.string(),
  box: z.lazy(() => BoxUncheckedCreateNestedManyWithoutRoomInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutPersonInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export const RoomCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.RoomCreateManyPersonInputEnvelope> = z.object({
  data: z.lazy(() => RoomCreateManyPersonInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Room_userCreateWithoutPersonInputSchema: z.ZodType<Prisma.Room_userCreateWithoutPersonInput> = z.object({
  room: z.lazy(() => RoomCreateNestedOneWithoutRoom_userInputSchema)
}).strict();

export const Room_userUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.Room_userUncheckedCreateWithoutPersonInput> = z.object({
  id: z.string()
}).strict();

export const Room_userCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.Room_userCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => Room_userWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Room_userCreateWithoutPersonInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export const Room_userCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.Room_userCreateManyPersonInputEnvelope> = z.object({
  data: z.lazy(() => Room_userCreateManyPersonInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Box_userUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.Box_userUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => Box_userWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Box_userUpdateWithoutPersonInputSchema),z.lazy(() => Box_userUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => Box_userCreateWithoutPersonInputSchema),z.lazy(() => Box_userUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export const Box_userUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.Box_userUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => Box_userWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Box_userUpdateWithoutPersonInputSchema),z.lazy(() => Box_userUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export const Box_userUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.Box_userUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => Box_userScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Box_userUpdateManyMutationInputSchema),z.lazy(() => Box_userUncheckedUpdateManyWithoutBox_userInputSchema) ]),
}).strict();

export const RoomUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoomUpdateWithoutPersonInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutPersonInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export const RoomUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateWithoutPersonInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export const RoomUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => RoomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateManyMutationInputSchema),z.lazy(() => RoomUncheckedUpdateManyWithoutRoomInputSchema) ]),
}).strict();

export const Room_userUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.Room_userUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => Room_userWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Room_userUpdateWithoutPersonInputSchema),z.lazy(() => Room_userUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => Room_userCreateWithoutPersonInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export const Room_userUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.Room_userUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => Room_userWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Room_userUpdateWithoutPersonInputSchema),z.lazy(() => Room_userUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export const Room_userUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.Room_userUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => Room_userScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Room_userUpdateManyMutationInputSchema),z.lazy(() => Room_userUncheckedUpdateManyWithoutRoom_userInputSchema) ]),
}).strict();

export const Room_userScalarWhereInputSchema: z.ZodType<Prisma.Room_userScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Room_userScalarWhereInputSchema),z.lazy(() => Room_userScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Room_userScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Room_userScalarWhereInputSchema),z.lazy(() => Room_userScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  person_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const BoxCreateWithoutRoomInputSchema: z.ZodType<Prisma.BoxCreateWithoutRoomInput> = z.object({
  id: z.string(),
  name: z.string(),
  box_user: z.lazy(() => Box_userCreateNestedManyWithoutBoxInputSchema).optional(),
  thing: z.lazy(() => ThingCreateNestedManyWithoutBoxInputSchema).optional()
}).strict();

export const BoxUncheckedCreateWithoutRoomInputSchema: z.ZodType<Prisma.BoxUncheckedCreateWithoutRoomInput> = z.object({
  id: z.string(),
  name: z.string(),
  box_user: z.lazy(() => Box_userUncheckedCreateNestedManyWithoutBoxInputSchema).optional(),
  thing: z.lazy(() => ThingUncheckedCreateNestedManyWithoutBoxInputSchema).optional()
}).strict();

export const BoxCreateOrConnectWithoutRoomInputSchema: z.ZodType<Prisma.BoxCreateOrConnectWithoutRoomInput> = z.object({
  where: z.lazy(() => BoxWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoxCreateWithoutRoomInputSchema),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const BoxCreateManyRoomInputEnvelopeSchema: z.ZodType<Prisma.BoxCreateManyRoomInputEnvelope> = z.object({
  data: z.lazy(() => BoxCreateManyRoomInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const HouseCreateWithoutRoomInputSchema: z.ZodType<Prisma.HouseCreateWithoutRoomInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const HouseUncheckedCreateWithoutRoomInputSchema: z.ZodType<Prisma.HouseUncheckedCreateWithoutRoomInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const HouseCreateOrConnectWithoutRoomInputSchema: z.ZodType<Prisma.HouseCreateOrConnectWithoutRoomInput> = z.object({
  where: z.lazy(() => HouseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HouseCreateWithoutRoomInputSchema),z.lazy(() => HouseUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const PersonCreateWithoutRoomInputSchema: z.ZodType<Prisma.PersonCreateWithoutRoomInput> = z.object({
  id: z.string(),
  name: z.string(),
  box_user: z.lazy(() => Box_userCreateNestedManyWithoutPersonInputSchema).optional(),
  room_user: z.lazy(() => Room_userCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonUncheckedCreateWithoutRoomInputSchema: z.ZodType<Prisma.PersonUncheckedCreateWithoutRoomInput> = z.object({
  id: z.string(),
  name: z.string(),
  box_user: z.lazy(() => Box_userUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonCreateOrConnectWithoutRoomInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutRoomInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutRoomInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const Room_userCreateWithoutRoomInputSchema: z.ZodType<Prisma.Room_userCreateWithoutRoomInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutRoom_userInputSchema)
}).strict();

export const Room_userUncheckedCreateWithoutRoomInputSchema: z.ZodType<Prisma.Room_userUncheckedCreateWithoutRoomInput> = z.object({
  person_id: z.string()
}).strict();

export const Room_userCreateOrConnectWithoutRoomInputSchema: z.ZodType<Prisma.Room_userCreateOrConnectWithoutRoomInput> = z.object({
  where: z.lazy(() => Room_userWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Room_userCreateWithoutRoomInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const Room_userCreateManyRoomInputEnvelopeSchema: z.ZodType<Prisma.Room_userCreateManyRoomInputEnvelope> = z.object({
  data: z.lazy(() => Room_userCreateManyRoomInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BoxUpsertWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.BoxUpsertWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => BoxWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BoxUpdateWithoutRoomInputSchema),z.lazy(() => BoxUncheckedUpdateWithoutRoomInputSchema) ]),
  create: z.union([ z.lazy(() => BoxCreateWithoutRoomInputSchema),z.lazy(() => BoxUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const BoxUpdateWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.BoxUpdateWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => BoxWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BoxUpdateWithoutRoomInputSchema),z.lazy(() => BoxUncheckedUpdateWithoutRoomInputSchema) ]),
}).strict();

export const BoxUpdateManyWithWhereWithoutRoomInputSchema: z.ZodType<Prisma.BoxUpdateManyWithWhereWithoutRoomInput> = z.object({
  where: z.lazy(() => BoxScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BoxUpdateManyMutationInputSchema),z.lazy(() => BoxUncheckedUpdateManyWithoutBoxInputSchema) ]),
}).strict();

export const BoxScalarWhereInputSchema: z.ZodType<Prisma.BoxScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BoxScalarWhereInputSchema),z.lazy(() => BoxScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoxScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoxScalarWhereInputSchema),z.lazy(() => BoxScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const HouseUpsertWithoutRoomInputSchema: z.ZodType<Prisma.HouseUpsertWithoutRoomInput> = z.object({
  update: z.union([ z.lazy(() => HouseUpdateWithoutRoomInputSchema),z.lazy(() => HouseUncheckedUpdateWithoutRoomInputSchema) ]),
  create: z.union([ z.lazy(() => HouseCreateWithoutRoomInputSchema),z.lazy(() => HouseUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const HouseUpdateWithoutRoomInputSchema: z.ZodType<Prisma.HouseUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HouseUncheckedUpdateWithoutRoomInputSchema: z.ZodType<Prisma.HouseUncheckedUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonUpsertWithoutRoomInputSchema: z.ZodType<Prisma.PersonUpsertWithoutRoomInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutRoomInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoomInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutRoomInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const PersonUpdateWithoutRoomInputSchema: z.ZodType<Prisma.PersonUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUpdateManyWithoutPersonNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const PersonUncheckedUpdateWithoutRoomInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const Room_userUpsertWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.Room_userUpsertWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => Room_userWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Room_userUpdateWithoutRoomInputSchema),z.lazy(() => Room_userUncheckedUpdateWithoutRoomInputSchema) ]),
  create: z.union([ z.lazy(() => Room_userCreateWithoutRoomInputSchema),z.lazy(() => Room_userUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const Room_userUpdateWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.Room_userUpdateWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => Room_userWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Room_userUpdateWithoutRoomInputSchema),z.lazy(() => Room_userUncheckedUpdateWithoutRoomInputSchema) ]),
}).strict();

export const Room_userUpdateManyWithWhereWithoutRoomInputSchema: z.ZodType<Prisma.Room_userUpdateManyWithWhereWithoutRoomInput> = z.object({
  where: z.lazy(() => Room_userScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Room_userUpdateManyMutationInputSchema),z.lazy(() => Room_userUncheckedUpdateManyWithoutRoom_userInputSchema) ]),
}).strict();

export const RoomCreateWithoutRoom_userInputSchema: z.ZodType<Prisma.RoomCreateWithoutRoom_userInput> = z.object({
  id: z.string(),
  name: z.string(),
  box: z.lazy(() => BoxCreateNestedManyWithoutRoomInputSchema).optional(),
  house: z.lazy(() => HouseCreateNestedOneWithoutRoomInputSchema),
  person: z.lazy(() => PersonCreateNestedOneWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutRoom_userInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutRoom_userInput> = z.object({
  id: z.string(),
  name: z.string(),
  house_id: z.string(),
  owner_id: z.string().optional().nullable(),
  box: z.lazy(() => BoxUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutRoom_userInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutRoom_userInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutRoom_userInputSchema),z.lazy(() => RoomUncheckedCreateWithoutRoom_userInputSchema) ]),
}).strict();

export const PersonCreateWithoutRoom_userInputSchema: z.ZodType<Prisma.PersonCreateWithoutRoom_userInput> = z.object({
  id: z.string(),
  name: z.string(),
  box_user: z.lazy(() => Box_userCreateNestedManyWithoutPersonInputSchema).optional(),
  room: z.lazy(() => RoomCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonUncheckedCreateWithoutRoom_userInputSchema: z.ZodType<Prisma.PersonUncheckedCreateWithoutRoom_userInput> = z.object({
  id: z.string(),
  name: z.string(),
  box_user: z.lazy(() => Box_userUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  room: z.lazy(() => RoomUncheckedCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonCreateOrConnectWithoutRoom_userInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutRoom_userInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutRoom_userInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoom_userInputSchema) ]),
}).strict();

export const RoomUpsertWithoutRoom_userInputSchema: z.ZodType<Prisma.RoomUpsertWithoutRoom_userInput> = z.object({
  update: z.union([ z.lazy(() => RoomUpdateWithoutRoom_userInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutRoom_userInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutRoom_userInputSchema),z.lazy(() => RoomUncheckedCreateWithoutRoom_userInputSchema) ]),
}).strict();

export const RoomUpdateWithoutRoom_userInputSchema: z.ZodType<Prisma.RoomUpdateWithoutRoom_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box: z.lazy(() => BoxUpdateManyWithoutRoomNestedInputSchema).optional(),
  house: z.lazy(() => HouseUpdateOneRequiredWithoutRoomNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutRoom_userInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutRoom_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  house_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  box: z.lazy(() => BoxUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const PersonUpsertWithoutRoom_userInputSchema: z.ZodType<Prisma.PersonUpsertWithoutRoom_userInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutRoom_userInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoom_userInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutRoom_userInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoom_userInputSchema) ]),
}).strict();

export const PersonUpdateWithoutRoom_userInputSchema: z.ZodType<Prisma.PersonUpdateWithoutRoom_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUpdateManyWithoutPersonNestedInputSchema).optional(),
  room: z.lazy(() => RoomUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const PersonUncheckedUpdateWithoutRoom_userInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutRoom_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  room: z.lazy(() => RoomUncheckedUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const BoxCreateWithoutThingInputSchema: z.ZodType<Prisma.BoxCreateWithoutThingInput> = z.object({
  id: z.string(),
  name: z.string(),
  room: z.lazy(() => RoomCreateNestedOneWithoutBoxInputSchema),
  box_user: z.lazy(() => Box_userCreateNestedManyWithoutBoxInputSchema).optional()
}).strict();

export const BoxUncheckedCreateWithoutThingInputSchema: z.ZodType<Prisma.BoxUncheckedCreateWithoutThingInput> = z.object({
  id: z.string(),
  name: z.string(),
  room_id: z.string(),
  box_user: z.lazy(() => Box_userUncheckedCreateNestedManyWithoutBoxInputSchema).optional()
}).strict();

export const BoxCreateOrConnectWithoutThingInputSchema: z.ZodType<Prisma.BoxCreateOrConnectWithoutThingInput> = z.object({
  where: z.lazy(() => BoxWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoxCreateWithoutThingInputSchema),z.lazy(() => BoxUncheckedCreateWithoutThingInputSchema) ]),
}).strict();

export const BoxUpsertWithoutThingInputSchema: z.ZodType<Prisma.BoxUpsertWithoutThingInput> = z.object({
  update: z.union([ z.lazy(() => BoxUpdateWithoutThingInputSchema),z.lazy(() => BoxUncheckedUpdateWithoutThingInputSchema) ]),
  create: z.union([ z.lazy(() => BoxCreateWithoutThingInputSchema),z.lazy(() => BoxUncheckedCreateWithoutThingInputSchema) ]),
}).strict();

export const BoxUpdateWithoutThingInputSchema: z.ZodType<Prisma.BoxUpdateWithoutThingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutBoxNestedInputSchema).optional(),
  box_user: z.lazy(() => Box_userUpdateManyWithoutBoxNestedInputSchema).optional()
}).strict();

export const BoxUncheckedUpdateWithoutThingInputSchema: z.ZodType<Prisma.BoxUncheckedUpdateWithoutThingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUncheckedUpdateManyWithoutBoxNestedInputSchema).optional()
}).strict();

export const Box_userCreateManyBoxInputSchema: z.ZodType<Prisma.Box_userCreateManyBoxInput> = z.object({
  person_id: z.string().uuid()
}).strict();

export const ThingCreateManyBoxInputSchema: z.ZodType<Prisma.ThingCreateManyBoxInput> = z.object({
  id: z.string().uuid(),
  name: z.string()
}).strict();

export const Box_userUpdateWithoutBoxInputSchema: z.ZodType<Prisma.Box_userUpdateWithoutBoxInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutBox_userNestedInputSchema).optional()
}).strict();

export const Box_userUncheckedUpdateWithoutBoxInputSchema: z.ZodType<Prisma.Box_userUncheckedUpdateWithoutBoxInput> = z.object({
  person_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Box_userUncheckedUpdateManyWithoutBox_userInputSchema: z.ZodType<Prisma.Box_userUncheckedUpdateManyWithoutBox_userInput> = z.object({
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThingUpdateWithoutBoxInputSchema: z.ZodType<Prisma.ThingUpdateWithoutBoxInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThingUncheckedUpdateWithoutBoxInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateWithoutBoxInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThingUncheckedUpdateManyWithoutThingInputSchema: z.ZodType<Prisma.ThingUncheckedUpdateManyWithoutThingInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomCreateManyHouseInputSchema: z.ZodType<Prisma.RoomCreateManyHouseInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  owner_id: z.string().uuid().optional().nullable()
}).strict();

export const RoomUpdateWithoutHouseInputSchema: z.ZodType<Prisma.RoomUpdateWithoutHouseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box: z.lazy(() => BoxUpdateManyWithoutRoomNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneWithoutRoomNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutHouseInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutHouseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  box: z.lazy(() => BoxUncheckedUpdateManyWithoutRoomNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateManyWithoutRoomInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutRoomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  owner_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Box_userCreateManyPersonInputSchema: z.ZodType<Prisma.Box_userCreateManyPersonInput> = z.object({
  id: z.string().uuid()
}).strict();

export const RoomCreateManyPersonInputSchema: z.ZodType<Prisma.RoomCreateManyPersonInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  house_id: z.string().uuid()
}).strict();

export const Room_userCreateManyPersonInputSchema: z.ZodType<Prisma.Room_userCreateManyPersonInput> = z.object({
  id: z.string().uuid()
}).strict();

export const Box_userUpdateWithoutPersonInputSchema: z.ZodType<Prisma.Box_userUpdateWithoutPersonInput> = z.object({
  box: z.lazy(() => BoxUpdateOneRequiredWithoutBox_userNestedInputSchema).optional()
}).strict();

export const Box_userUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.Box_userUncheckedUpdateWithoutPersonInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomUpdateWithoutPersonInputSchema: z.ZodType<Prisma.RoomUpdateWithoutPersonInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box: z.lazy(() => BoxUpdateManyWithoutRoomNestedInputSchema).optional(),
  house: z.lazy(() => HouseUpdateOneRequiredWithoutRoomNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutPersonInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  house_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box: z.lazy(() => BoxUncheckedUpdateManyWithoutRoomNestedInputSchema).optional(),
  room_user: z.lazy(() => Room_userUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const Room_userUpdateWithoutPersonInputSchema: z.ZodType<Prisma.Room_userUpdateWithoutPersonInput> = z.object({
  room: z.lazy(() => RoomUpdateOneRequiredWithoutRoom_userNestedInputSchema).optional()
}).strict();

export const Room_userUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.Room_userUncheckedUpdateWithoutPersonInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Room_userUncheckedUpdateManyWithoutRoom_userInputSchema: z.ZodType<Prisma.Room_userUncheckedUpdateManyWithoutRoom_userInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BoxCreateManyRoomInputSchema: z.ZodType<Prisma.BoxCreateManyRoomInput> = z.object({
  id: z.string().uuid(),
  name: z.string()
}).strict();

export const Room_userCreateManyRoomInputSchema: z.ZodType<Prisma.Room_userCreateManyRoomInput> = z.object({
  person_id: z.string().uuid()
}).strict();

export const BoxUpdateWithoutRoomInputSchema: z.ZodType<Prisma.BoxUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUpdateManyWithoutBoxNestedInputSchema).optional(),
  thing: z.lazy(() => ThingUpdateManyWithoutBoxNestedInputSchema).optional()
}).strict();

export const BoxUncheckedUpdateWithoutRoomInputSchema: z.ZodType<Prisma.BoxUncheckedUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  box_user: z.lazy(() => Box_userUncheckedUpdateManyWithoutBoxNestedInputSchema).optional(),
  thing: z.lazy(() => ThingUncheckedUpdateManyWithoutBoxNestedInputSchema).optional()
}).strict();

export const BoxUncheckedUpdateManyWithoutBoxInputSchema: z.ZodType<Prisma.BoxUncheckedUpdateManyWithoutBoxInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Room_userUpdateWithoutRoomInputSchema: z.ZodType<Prisma.Room_userUpdateWithoutRoomInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutRoom_userNestedInputSchema).optional()
}).strict();

export const Room_userUncheckedUpdateWithoutRoomInputSchema: z.ZodType<Prisma.Room_userUncheckedUpdateWithoutRoomInput> = z.object({
  person_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const BoxFindFirstArgsSchema: z.ZodType<Prisma.BoxFindFirstArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  where: BoxWhereInputSchema.optional(),
  orderBy: z.union([ BoxOrderByWithRelationInputSchema.array(),BoxOrderByWithRelationInputSchema ]).optional(),
  cursor: BoxWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BoxScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.BoxFindFirstArgs>

export const BoxFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BoxFindFirstOrThrowArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  where: BoxWhereInputSchema.optional(),
  orderBy: z.union([ BoxOrderByWithRelationInputSchema.array(),BoxOrderByWithRelationInputSchema ]).optional(),
  cursor: BoxWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BoxScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.BoxFindFirstOrThrowArgs>

export const BoxFindManyArgsSchema: z.ZodType<Prisma.BoxFindManyArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  where: BoxWhereInputSchema.optional(),
  orderBy: z.union([ BoxOrderByWithRelationInputSchema.array(),BoxOrderByWithRelationInputSchema ]).optional(),
  cursor: BoxWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BoxScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.BoxFindManyArgs>

export const BoxAggregateArgsSchema: z.ZodType<Prisma.BoxAggregateArgs> = z.object({
  where: BoxWhereInputSchema.optional(),
  orderBy: z.union([ BoxOrderByWithRelationInputSchema.array(),BoxOrderByWithRelationInputSchema ]).optional(),
  cursor: BoxWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.BoxAggregateArgs>

export const BoxGroupByArgsSchema: z.ZodType<Prisma.BoxGroupByArgs> = z.object({
  where: BoxWhereInputSchema.optional(),
  orderBy: z.union([ BoxOrderByWithAggregationInputSchema.array(),BoxOrderByWithAggregationInputSchema ]).optional(),
  by: BoxScalarFieldEnumSchema.array(),
  having: BoxScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.BoxGroupByArgs>

export const BoxFindUniqueArgsSchema: z.ZodType<Prisma.BoxFindUniqueArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  where: BoxWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.BoxFindUniqueArgs>

export const BoxFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BoxFindUniqueOrThrowArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  where: BoxWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.BoxFindUniqueOrThrowArgs>

export const Box_userFindFirstArgsSchema: z.ZodType<Prisma.Box_userFindFirstArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  where: Box_userWhereInputSchema.optional(),
  orderBy: z.union([ Box_userOrderByWithRelationInputSchema.array(),Box_userOrderByWithRelationInputSchema ]).optional(),
  cursor: Box_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Box_userScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Box_userFindFirstArgs>

export const Box_userFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Box_userFindFirstOrThrowArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  where: Box_userWhereInputSchema.optional(),
  orderBy: z.union([ Box_userOrderByWithRelationInputSchema.array(),Box_userOrderByWithRelationInputSchema ]).optional(),
  cursor: Box_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Box_userScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Box_userFindFirstOrThrowArgs>

export const Box_userFindManyArgsSchema: z.ZodType<Prisma.Box_userFindManyArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  where: Box_userWhereInputSchema.optional(),
  orderBy: z.union([ Box_userOrderByWithRelationInputSchema.array(),Box_userOrderByWithRelationInputSchema ]).optional(),
  cursor: Box_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Box_userScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Box_userFindManyArgs>

export const Box_userAggregateArgsSchema: z.ZodType<Prisma.Box_userAggregateArgs> = z.object({
  where: Box_userWhereInputSchema.optional(),
  orderBy: z.union([ Box_userOrderByWithRelationInputSchema.array(),Box_userOrderByWithRelationInputSchema ]).optional(),
  cursor: Box_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Box_userAggregateArgs>

export const Box_userGroupByArgsSchema: z.ZodType<Prisma.Box_userGroupByArgs> = z.object({
  where: Box_userWhereInputSchema.optional(),
  orderBy: z.union([ Box_userOrderByWithAggregationInputSchema.array(),Box_userOrderByWithAggregationInputSchema ]).optional(),
  by: Box_userScalarFieldEnumSchema.array(),
  having: Box_userScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Box_userGroupByArgs>

export const Box_userFindUniqueArgsSchema: z.ZodType<Prisma.Box_userFindUniqueArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  where: Box_userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Box_userFindUniqueArgs>

export const Box_userFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Box_userFindUniqueOrThrowArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  where: Box_userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Box_userFindUniqueOrThrowArgs>

export const HouseFindFirstArgsSchema: z.ZodType<Prisma.HouseFindFirstArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  where: HouseWhereInputSchema.optional(),
  orderBy: z.union([ HouseOrderByWithRelationInputSchema.array(),HouseOrderByWithRelationInputSchema ]).optional(),
  cursor: HouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HouseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.HouseFindFirstArgs>

export const HouseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HouseFindFirstOrThrowArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  where: HouseWhereInputSchema.optional(),
  orderBy: z.union([ HouseOrderByWithRelationInputSchema.array(),HouseOrderByWithRelationInputSchema ]).optional(),
  cursor: HouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HouseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.HouseFindFirstOrThrowArgs>

export const HouseFindManyArgsSchema: z.ZodType<Prisma.HouseFindManyArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  where: HouseWhereInputSchema.optional(),
  orderBy: z.union([ HouseOrderByWithRelationInputSchema.array(),HouseOrderByWithRelationInputSchema ]).optional(),
  cursor: HouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HouseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.HouseFindManyArgs>

export const HouseAggregateArgsSchema: z.ZodType<Prisma.HouseAggregateArgs> = z.object({
  where: HouseWhereInputSchema.optional(),
  orderBy: z.union([ HouseOrderByWithRelationInputSchema.array(),HouseOrderByWithRelationInputSchema ]).optional(),
  cursor: HouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.HouseAggregateArgs>

export const HouseGroupByArgsSchema: z.ZodType<Prisma.HouseGroupByArgs> = z.object({
  where: HouseWhereInputSchema.optional(),
  orderBy: z.union([ HouseOrderByWithAggregationInputSchema.array(),HouseOrderByWithAggregationInputSchema ]).optional(),
  by: HouseScalarFieldEnumSchema.array(),
  having: HouseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.HouseGroupByArgs>

export const HouseFindUniqueArgsSchema: z.ZodType<Prisma.HouseFindUniqueArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  where: HouseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.HouseFindUniqueArgs>

export const HouseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HouseFindUniqueOrThrowArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  where: HouseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.HouseFindUniqueOrThrowArgs>

export const PersonFindFirstArgsSchema: z.ZodType<Prisma.PersonFindFirstArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PersonScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.PersonFindFirstArgs>

export const PersonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonFindFirstOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PersonScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.PersonFindFirstOrThrowArgs>

export const PersonFindManyArgsSchema: z.ZodType<Prisma.PersonFindManyArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PersonScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.PersonFindManyArgs>

export const PersonAggregateArgsSchema: z.ZodType<Prisma.PersonAggregateArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.PersonAggregateArgs>

export const PersonGroupByArgsSchema: z.ZodType<Prisma.PersonGroupByArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithAggregationInputSchema.array(),PersonOrderByWithAggregationInputSchema ]).optional(),
  by: PersonScalarFieldEnumSchema.array(),
  having: PersonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.PersonGroupByArgs>

export const PersonFindUniqueArgsSchema: z.ZodType<Prisma.PersonFindUniqueArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.PersonFindUniqueArgs>

export const PersonFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PersonFindUniqueOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.PersonFindUniqueOrThrowArgs>

export const RoomFindFirstArgsSchema: z.ZodType<Prisma.RoomFindFirstArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RoomScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.RoomFindFirstArgs>

export const RoomFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoomFindFirstOrThrowArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RoomScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.RoomFindFirstOrThrowArgs>

export const RoomFindManyArgsSchema: z.ZodType<Prisma.RoomFindManyArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RoomScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.RoomFindManyArgs>

export const RoomAggregateArgsSchema: z.ZodType<Prisma.RoomAggregateArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.RoomAggregateArgs>

export const RoomGroupByArgsSchema: z.ZodType<Prisma.RoomGroupByArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithAggregationInputSchema.array(),RoomOrderByWithAggregationInputSchema ]).optional(),
  by: RoomScalarFieldEnumSchema.array(),
  having: RoomScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.RoomGroupByArgs>

export const RoomFindUniqueArgsSchema: z.ZodType<Prisma.RoomFindUniqueArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.RoomFindUniqueArgs>

export const RoomFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoomFindUniqueOrThrowArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.RoomFindUniqueOrThrowArgs>

export const Room_userFindFirstArgsSchema: z.ZodType<Prisma.Room_userFindFirstArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  where: Room_userWhereInputSchema.optional(),
  orderBy: z.union([ Room_userOrderByWithRelationInputSchema.array(),Room_userOrderByWithRelationInputSchema ]).optional(),
  cursor: Room_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Room_userScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Room_userFindFirstArgs>

export const Room_userFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Room_userFindFirstOrThrowArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  where: Room_userWhereInputSchema.optional(),
  orderBy: z.union([ Room_userOrderByWithRelationInputSchema.array(),Room_userOrderByWithRelationInputSchema ]).optional(),
  cursor: Room_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Room_userScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Room_userFindFirstOrThrowArgs>

export const Room_userFindManyArgsSchema: z.ZodType<Prisma.Room_userFindManyArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  where: Room_userWhereInputSchema.optional(),
  orderBy: z.union([ Room_userOrderByWithRelationInputSchema.array(),Room_userOrderByWithRelationInputSchema ]).optional(),
  cursor: Room_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Room_userScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Room_userFindManyArgs>

export const Room_userAggregateArgsSchema: z.ZodType<Prisma.Room_userAggregateArgs> = z.object({
  where: Room_userWhereInputSchema.optional(),
  orderBy: z.union([ Room_userOrderByWithRelationInputSchema.array(),Room_userOrderByWithRelationInputSchema ]).optional(),
  cursor: Room_userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Room_userAggregateArgs>

export const Room_userGroupByArgsSchema: z.ZodType<Prisma.Room_userGroupByArgs> = z.object({
  where: Room_userWhereInputSchema.optional(),
  orderBy: z.union([ Room_userOrderByWithAggregationInputSchema.array(),Room_userOrderByWithAggregationInputSchema ]).optional(),
  by: Room_userScalarFieldEnumSchema.array(),
  having: Room_userScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Room_userGroupByArgs>

export const Room_userFindUniqueArgsSchema: z.ZodType<Prisma.Room_userFindUniqueArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  where: Room_userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Room_userFindUniqueArgs>

export const Room_userFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Room_userFindUniqueOrThrowArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  where: Room_userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Room_userFindUniqueOrThrowArgs>

export const ThingFindFirstArgsSchema: z.ZodType<Prisma.ThingFindFirstArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithRelationInputSchema.array(),ThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ThingScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ThingFindFirstArgs>

export const ThingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ThingFindFirstOrThrowArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithRelationInputSchema.array(),ThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ThingScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ThingFindFirstOrThrowArgs>

export const ThingFindManyArgsSchema: z.ZodType<Prisma.ThingFindManyArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithRelationInputSchema.array(),ThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ThingScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ThingFindManyArgs>

export const ThingAggregateArgsSchema: z.ZodType<Prisma.ThingAggregateArgs> = z.object({
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithRelationInputSchema.array(),ThingOrderByWithRelationInputSchema ]).optional(),
  cursor: ThingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ThingAggregateArgs>

export const ThingGroupByArgsSchema: z.ZodType<Prisma.ThingGroupByArgs> = z.object({
  where: ThingWhereInputSchema.optional(),
  orderBy: z.union([ ThingOrderByWithAggregationInputSchema.array(),ThingOrderByWithAggregationInputSchema ]).optional(),
  by: ThingScalarFieldEnumSchema.array(),
  having: ThingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ThingGroupByArgs>

export const ThingFindUniqueArgsSchema: z.ZodType<Prisma.ThingFindUniqueArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ThingFindUniqueArgs>

export const ThingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ThingFindUniqueOrThrowArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ThingFindUniqueOrThrowArgs>

export const BoxCreateArgsSchema: z.ZodType<Prisma.BoxCreateArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  data: z.union([ BoxCreateInputSchema,BoxUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.BoxCreateArgs>

export const BoxUpsertArgsSchema: z.ZodType<Prisma.BoxUpsertArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  where: BoxWhereUniqueInputSchema,
  create: z.union([ BoxCreateInputSchema,BoxUncheckedCreateInputSchema ]),
  update: z.union([ BoxUpdateInputSchema,BoxUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.BoxUpsertArgs>

export const BoxCreateManyArgsSchema: z.ZodType<Prisma.BoxCreateManyArgs> = z.object({
  data: BoxCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.BoxCreateManyArgs>

export const BoxDeleteArgsSchema: z.ZodType<Prisma.BoxDeleteArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  where: BoxWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.BoxDeleteArgs>

export const BoxUpdateArgsSchema: z.ZodType<Prisma.BoxUpdateArgs> = z.object({
  select: BoxSelectSchema.optional(),
  include: BoxIncludeSchema.optional(),
  data: z.union([ BoxUpdateInputSchema,BoxUncheckedUpdateInputSchema ]),
  where: BoxWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.BoxUpdateArgs>

export const BoxUpdateManyArgsSchema: z.ZodType<Prisma.BoxUpdateManyArgs> = z.object({
  data: z.union([ BoxUpdateManyMutationInputSchema,BoxUncheckedUpdateManyInputSchema ]),
  where: BoxWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.BoxUpdateManyArgs>

export const BoxDeleteManyArgsSchema: z.ZodType<Prisma.BoxDeleteManyArgs> = z.object({
  where: BoxWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.BoxDeleteManyArgs>

export const Box_userCreateArgsSchema: z.ZodType<Prisma.Box_userCreateArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  data: z.union([ Box_userCreateInputSchema,Box_userUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Box_userCreateArgs>

export const Box_userUpsertArgsSchema: z.ZodType<Prisma.Box_userUpsertArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  where: Box_userWhereUniqueInputSchema,
  create: z.union([ Box_userCreateInputSchema,Box_userUncheckedCreateInputSchema ]),
  update: z.union([ Box_userUpdateInputSchema,Box_userUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Box_userUpsertArgs>

export const Box_userCreateManyArgsSchema: z.ZodType<Prisma.Box_userCreateManyArgs> = z.object({
  data: Box_userCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Box_userCreateManyArgs>

export const Box_userDeleteArgsSchema: z.ZodType<Prisma.Box_userDeleteArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  where: Box_userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Box_userDeleteArgs>

export const Box_userUpdateArgsSchema: z.ZodType<Prisma.Box_userUpdateArgs> = z.object({
  select: Box_userSelectSchema.optional(),
  include: Box_userIncludeSchema.optional(),
  data: z.union([ Box_userUpdateInputSchema,Box_userUncheckedUpdateInputSchema ]),
  where: Box_userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Box_userUpdateArgs>

export const Box_userUpdateManyArgsSchema: z.ZodType<Prisma.Box_userUpdateManyArgs> = z.object({
  data: z.union([ Box_userUpdateManyMutationInputSchema,Box_userUncheckedUpdateManyInputSchema ]),
  where: Box_userWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Box_userUpdateManyArgs>

export const Box_userDeleteManyArgsSchema: z.ZodType<Prisma.Box_userDeleteManyArgs> = z.object({
  where: Box_userWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Box_userDeleteManyArgs>

export const HouseCreateArgsSchema: z.ZodType<Prisma.HouseCreateArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  data: z.union([ HouseCreateInputSchema,HouseUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.HouseCreateArgs>

export const HouseUpsertArgsSchema: z.ZodType<Prisma.HouseUpsertArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  where: HouseWhereUniqueInputSchema,
  create: z.union([ HouseCreateInputSchema,HouseUncheckedCreateInputSchema ]),
  update: z.union([ HouseUpdateInputSchema,HouseUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.HouseUpsertArgs>

export const HouseCreateManyArgsSchema: z.ZodType<Prisma.HouseCreateManyArgs> = z.object({
  data: HouseCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.HouseCreateManyArgs>

export const HouseDeleteArgsSchema: z.ZodType<Prisma.HouseDeleteArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  where: HouseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.HouseDeleteArgs>

export const HouseUpdateArgsSchema: z.ZodType<Prisma.HouseUpdateArgs> = z.object({
  select: HouseSelectSchema.optional(),
  include: HouseIncludeSchema.optional(),
  data: z.union([ HouseUpdateInputSchema,HouseUncheckedUpdateInputSchema ]),
  where: HouseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.HouseUpdateArgs>

export const HouseUpdateManyArgsSchema: z.ZodType<Prisma.HouseUpdateManyArgs> = z.object({
  data: z.union([ HouseUpdateManyMutationInputSchema,HouseUncheckedUpdateManyInputSchema ]),
  where: HouseWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.HouseUpdateManyArgs>

export const HouseDeleteManyArgsSchema: z.ZodType<Prisma.HouseDeleteManyArgs> = z.object({
  where: HouseWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.HouseDeleteManyArgs>

export const PersonCreateArgsSchema: z.ZodType<Prisma.PersonCreateArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  data: z.union([ PersonCreateInputSchema,PersonUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.PersonCreateArgs>

export const PersonUpsertArgsSchema: z.ZodType<Prisma.PersonUpsertArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
  create: z.union([ PersonCreateInputSchema,PersonUncheckedCreateInputSchema ]),
  update: z.union([ PersonUpdateInputSchema,PersonUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.PersonUpsertArgs>

export const PersonCreateManyArgsSchema: z.ZodType<Prisma.PersonCreateManyArgs> = z.object({
  data: PersonCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.PersonCreateManyArgs>

export const PersonDeleteArgsSchema: z.ZodType<Prisma.PersonDeleteArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.PersonDeleteArgs>

export const PersonUpdateArgsSchema: z.ZodType<Prisma.PersonUpdateArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  data: z.union([ PersonUpdateInputSchema,PersonUncheckedUpdateInputSchema ]),
  where: PersonWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.PersonUpdateArgs>

export const PersonUpdateManyArgsSchema: z.ZodType<Prisma.PersonUpdateManyArgs> = z.object({
  data: z.union([ PersonUpdateManyMutationInputSchema,PersonUncheckedUpdateManyInputSchema ]),
  where: PersonWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.PersonUpdateManyArgs>

export const PersonDeleteManyArgsSchema: z.ZodType<Prisma.PersonDeleteManyArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.PersonDeleteManyArgs>

export const RoomCreateArgsSchema: z.ZodType<Prisma.RoomCreateArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  data: z.union([ RoomCreateInputSchema,RoomUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.RoomCreateArgs>

export const RoomUpsertArgsSchema: z.ZodType<Prisma.RoomUpsertArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
  create: z.union([ RoomCreateInputSchema,RoomUncheckedCreateInputSchema ]),
  update: z.union([ RoomUpdateInputSchema,RoomUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.RoomUpsertArgs>

export const RoomCreateManyArgsSchema: z.ZodType<Prisma.RoomCreateManyArgs> = z.object({
  data: RoomCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.RoomCreateManyArgs>

export const RoomDeleteArgsSchema: z.ZodType<Prisma.RoomDeleteArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.RoomDeleteArgs>

export const RoomUpdateArgsSchema: z.ZodType<Prisma.RoomUpdateArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  data: z.union([ RoomUpdateInputSchema,RoomUncheckedUpdateInputSchema ]),
  where: RoomWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.RoomUpdateArgs>

export const RoomUpdateManyArgsSchema: z.ZodType<Prisma.RoomUpdateManyArgs> = z.object({
  data: z.union([ RoomUpdateManyMutationInputSchema,RoomUncheckedUpdateManyInputSchema ]),
  where: RoomWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.RoomUpdateManyArgs>

export const RoomDeleteManyArgsSchema: z.ZodType<Prisma.RoomDeleteManyArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.RoomDeleteManyArgs>

export const Room_userCreateArgsSchema: z.ZodType<Prisma.Room_userCreateArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  data: z.union([ Room_userCreateInputSchema,Room_userUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Room_userCreateArgs>

export const Room_userUpsertArgsSchema: z.ZodType<Prisma.Room_userUpsertArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  where: Room_userWhereUniqueInputSchema,
  create: z.union([ Room_userCreateInputSchema,Room_userUncheckedCreateInputSchema ]),
  update: z.union([ Room_userUpdateInputSchema,Room_userUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Room_userUpsertArgs>

export const Room_userCreateManyArgsSchema: z.ZodType<Prisma.Room_userCreateManyArgs> = z.object({
  data: Room_userCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Room_userCreateManyArgs>

export const Room_userDeleteArgsSchema: z.ZodType<Prisma.Room_userDeleteArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  where: Room_userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Room_userDeleteArgs>

export const Room_userUpdateArgsSchema: z.ZodType<Prisma.Room_userUpdateArgs> = z.object({
  select: Room_userSelectSchema.optional(),
  include: Room_userIncludeSchema.optional(),
  data: z.union([ Room_userUpdateInputSchema,Room_userUncheckedUpdateInputSchema ]),
  where: Room_userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Room_userUpdateArgs>

export const Room_userUpdateManyArgsSchema: z.ZodType<Prisma.Room_userUpdateManyArgs> = z.object({
  data: z.union([ Room_userUpdateManyMutationInputSchema,Room_userUncheckedUpdateManyInputSchema ]),
  where: Room_userWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Room_userUpdateManyArgs>

export const Room_userDeleteManyArgsSchema: z.ZodType<Prisma.Room_userDeleteManyArgs> = z.object({
  where: Room_userWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Room_userDeleteManyArgs>

export const ThingCreateArgsSchema: z.ZodType<Prisma.ThingCreateArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  data: z.union([ ThingCreateInputSchema,ThingUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ThingCreateArgs>

export const ThingUpsertArgsSchema: z.ZodType<Prisma.ThingUpsertArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereUniqueInputSchema,
  create: z.union([ ThingCreateInputSchema,ThingUncheckedCreateInputSchema ]),
  update: z.union([ ThingUpdateInputSchema,ThingUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ThingUpsertArgs>

export const ThingCreateManyArgsSchema: z.ZodType<Prisma.ThingCreateManyArgs> = z.object({
  data: ThingCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ThingCreateManyArgs>

export const ThingDeleteArgsSchema: z.ZodType<Prisma.ThingDeleteArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  where: ThingWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ThingDeleteArgs>

export const ThingUpdateArgsSchema: z.ZodType<Prisma.ThingUpdateArgs> = z.object({
  select: ThingSelectSchema.optional(),
  include: ThingIncludeSchema.optional(),
  data: z.union([ ThingUpdateInputSchema,ThingUncheckedUpdateInputSchema ]),
  where: ThingWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ThingUpdateArgs>

export const ThingUpdateManyArgsSchema: z.ZodType<Prisma.ThingUpdateManyArgs> = z.object({
  data: z.union([ ThingUpdateManyMutationInputSchema,ThingUncheckedUpdateManyInputSchema ]),
  where: ThingWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ThingUpdateManyArgs>

export const ThingDeleteManyArgsSchema: z.ZodType<Prisma.ThingDeleteManyArgs> = z.object({
  where: ThingWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ThingDeleteManyArgs>

interface BoxGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.BoxArgs
  readonly type: Prisma.BoxGetPayload<this['_A']>
}

interface Box_userGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Box_userArgs
  readonly type: Prisma.Box_userGetPayload<this['_A']>
}

interface HouseGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.HouseArgs
  readonly type: Prisma.HouseGetPayload<this['_A']>
}

interface PersonGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.PersonArgs
  readonly type: Prisma.PersonGetPayload<this['_A']>
}

interface RoomGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.RoomArgs
  readonly type: Prisma.RoomGetPayload<this['_A']>
}

interface Room_userGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Room_userArgs
  readonly type: Prisma.Room_userGetPayload<this['_A']>
}

interface ThingGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ThingArgs
  readonly type: Prisma.ThingGetPayload<this['_A']>
}

export const tableSchemas = {
  box: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "room_id",
        "UUID"
      ]
    ]),
    relations: [
      new Relation("room", "room_id", "id", "room", "BoxToRoom", "one"),
      new Relation("box_user", "", "", "box_user", "BoxToBox_user", "many"),
      new Relation("thing", "", "", "thing", "BoxToThing", "many"),
    ],
    modelSchema: (BoxCreateInputSchema as any)
      .partial()
      .or((BoxUncheckedCreateInputSchema as any).partial()),
    createSchema: BoxCreateArgsSchema,
    createManySchema: BoxCreateManyArgsSchema,
    findUniqueSchema: BoxFindUniqueArgsSchema,
    findSchema: BoxFindFirstArgsSchema,
    updateSchema: BoxUpdateArgsSchema,
    updateManySchema: BoxUpdateManyArgsSchema,
    upsertSchema: BoxUpsertArgsSchema,
    deleteSchema: BoxDeleteArgsSchema,
    deleteManySchema: BoxDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof BoxCreateInputSchema>,
    Prisma.BoxCreateArgs['data'],
    Prisma.BoxUpdateArgs['data'],
    Prisma.BoxFindFirstArgs['select'],
    Prisma.BoxFindFirstArgs['where'],
    Prisma.BoxFindUniqueArgs['where'],
    Omit<Prisma.BoxInclude, '_count'>,
    Prisma.BoxFindFirstArgs['orderBy'],
    Prisma.BoxScalarFieldEnum,
    BoxGetPayload
  >,
  box_user: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "person_id",
        "UUID"
      ]
    ]),
    relations: [
      new Relation("box", "id", "id", "box", "BoxToBox_user", "one"),
      new Relation("person", "person_id", "id", "person", "Box_userToPerson", "one"),
    ],
    modelSchema: (Box_userCreateInputSchema as any)
      .partial()
      .or((Box_userUncheckedCreateInputSchema as any).partial()),
    createSchema: Box_userCreateArgsSchema,
    createManySchema: Box_userCreateManyArgsSchema,
    findUniqueSchema: Box_userFindUniqueArgsSchema,
    findSchema: Box_userFindFirstArgsSchema,
    updateSchema: Box_userUpdateArgsSchema,
    updateManySchema: Box_userUpdateManyArgsSchema,
    upsertSchema: Box_userUpsertArgsSchema,
    deleteSchema: Box_userDeleteArgsSchema,
    deleteManySchema: Box_userDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Box_userCreateInputSchema>,
    Prisma.Box_userCreateArgs['data'],
    Prisma.Box_userUpdateArgs['data'],
    Prisma.Box_userFindFirstArgs['select'],
    Prisma.Box_userFindFirstArgs['where'],
    Prisma.Box_userFindUniqueArgs['where'],
    Omit<Prisma.Box_userInclude, '_count'>,
    Prisma.Box_userFindFirstArgs['orderBy'],
    Prisma.Box_userScalarFieldEnum,
    Box_userGetPayload
  >,
  house: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("room", "", "", "room", "HouseToRoom", "many"),
    ],
    modelSchema: (HouseCreateInputSchema as any)
      .partial()
      .or((HouseUncheckedCreateInputSchema as any).partial()),
    createSchema: HouseCreateArgsSchema,
    createManySchema: HouseCreateManyArgsSchema,
    findUniqueSchema: HouseFindUniqueArgsSchema,
    findSchema: HouseFindFirstArgsSchema,
    updateSchema: HouseUpdateArgsSchema,
    updateManySchema: HouseUpdateManyArgsSchema,
    upsertSchema: HouseUpsertArgsSchema,
    deleteSchema: HouseDeleteArgsSchema,
    deleteManySchema: HouseDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof HouseCreateInputSchema>,
    Prisma.HouseCreateArgs['data'],
    Prisma.HouseUpdateArgs['data'],
    Prisma.HouseFindFirstArgs['select'],
    Prisma.HouseFindFirstArgs['where'],
    Prisma.HouseFindUniqueArgs['where'],
    Omit<Prisma.HouseInclude, '_count'>,
    Prisma.HouseFindFirstArgs['orderBy'],
    Prisma.HouseScalarFieldEnum,
    HouseGetPayload
  >,
  person: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("box_user", "", "", "box_user", "Box_userToPerson", "many"),
      new Relation("room", "", "", "room", "PersonToRoom", "many"),
      new Relation("room_user", "", "", "room_user", "PersonToRoom_user", "many"),
    ],
    modelSchema: (PersonCreateInputSchema as any)
      .partial()
      .or((PersonUncheckedCreateInputSchema as any).partial()),
    createSchema: PersonCreateArgsSchema,
    createManySchema: PersonCreateManyArgsSchema,
    findUniqueSchema: PersonFindUniqueArgsSchema,
    findSchema: PersonFindFirstArgsSchema,
    updateSchema: PersonUpdateArgsSchema,
    updateManySchema: PersonUpdateManyArgsSchema,
    upsertSchema: PersonUpsertArgsSchema,
    deleteSchema: PersonDeleteArgsSchema,
    deleteManySchema: PersonDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof PersonCreateInputSchema>,
    Prisma.PersonCreateArgs['data'],
    Prisma.PersonUpdateArgs['data'],
    Prisma.PersonFindFirstArgs['select'],
    Prisma.PersonFindFirstArgs['where'],
    Prisma.PersonFindUniqueArgs['where'],
    Omit<Prisma.PersonInclude, '_count'>,
    Prisma.PersonFindFirstArgs['orderBy'],
    Prisma.PersonScalarFieldEnum,
    PersonGetPayload
  >,
  room: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "house_id",
        "UUID"
      ],
      [
        "owner_id",
        "UUID"
      ]
    ]),
    relations: [
      new Relation("box", "", "", "box", "BoxToRoom", "many"),
      new Relation("house", "house_id", "id", "house", "HouseToRoom", "one"),
      new Relation("person", "owner_id", "id", "person", "PersonToRoom", "one"),
      new Relation("room_user", "", "", "room_user", "RoomToRoom_user", "many"),
    ],
    modelSchema: (RoomCreateInputSchema as any)
      .partial()
      .or((RoomUncheckedCreateInputSchema as any).partial()),
    createSchema: RoomCreateArgsSchema,
    createManySchema: RoomCreateManyArgsSchema,
    findUniqueSchema: RoomFindUniqueArgsSchema,
    findSchema: RoomFindFirstArgsSchema,
    updateSchema: RoomUpdateArgsSchema,
    updateManySchema: RoomUpdateManyArgsSchema,
    upsertSchema: RoomUpsertArgsSchema,
    deleteSchema: RoomDeleteArgsSchema,
    deleteManySchema: RoomDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof RoomCreateInputSchema>,
    Prisma.RoomCreateArgs['data'],
    Prisma.RoomUpdateArgs['data'],
    Prisma.RoomFindFirstArgs['select'],
    Prisma.RoomFindFirstArgs['where'],
    Prisma.RoomFindUniqueArgs['where'],
    Omit<Prisma.RoomInclude, '_count'>,
    Prisma.RoomFindFirstArgs['orderBy'],
    Prisma.RoomScalarFieldEnum,
    RoomGetPayload
  >,
  room_user: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "person_id",
        "UUID"
      ]
    ]),
    relations: [
      new Relation("room", "id", "id", "room", "RoomToRoom_user", "one"),
      new Relation("person", "person_id", "id", "person", "PersonToRoom_user", "one"),
    ],
    modelSchema: (Room_userCreateInputSchema as any)
      .partial()
      .or((Room_userUncheckedCreateInputSchema as any).partial()),
    createSchema: Room_userCreateArgsSchema,
    createManySchema: Room_userCreateManyArgsSchema,
    findUniqueSchema: Room_userFindUniqueArgsSchema,
    findSchema: Room_userFindFirstArgsSchema,
    updateSchema: Room_userUpdateArgsSchema,
    updateManySchema: Room_userUpdateManyArgsSchema,
    upsertSchema: Room_userUpsertArgsSchema,
    deleteSchema: Room_userDeleteArgsSchema,
    deleteManySchema: Room_userDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Room_userCreateInputSchema>,
    Prisma.Room_userCreateArgs['data'],
    Prisma.Room_userUpdateArgs['data'],
    Prisma.Room_userFindFirstArgs['select'],
    Prisma.Room_userFindFirstArgs['where'],
    Prisma.Room_userFindUniqueArgs['where'],
    Omit<Prisma.Room_userInclude, '_count'>,
    Prisma.Room_userFindFirstArgs['orderBy'],
    Prisma.Room_userScalarFieldEnum,
    Room_userGetPayload
  >,
  thing: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "box_id",
        "UUID"
      ]
    ]),
    relations: [
      new Relation("box", "box_id", "id", "box", "BoxToThing", "one"),
    ],
    modelSchema: (ThingCreateInputSchema as any)
      .partial()
      .or((ThingUncheckedCreateInputSchema as any).partial()),
    createSchema: ThingCreateArgsSchema,
    createManySchema: ThingCreateManyArgsSchema,
    findUniqueSchema: ThingFindUniqueArgsSchema,
    findSchema: ThingFindFirstArgsSchema,
    updateSchema: ThingUpdateArgsSchema,
    updateManySchema: ThingUpdateManyArgsSchema,
    upsertSchema: ThingUpsertArgsSchema,
    deleteSchema: ThingDeleteArgsSchema,
    deleteManySchema: ThingDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ThingCreateInputSchema>,
    Prisma.ThingCreateArgs['data'],
    Prisma.ThingUpdateArgs['data'],
    Prisma.ThingFindFirstArgs['select'],
    Prisma.ThingFindFirstArgs['where'],
    Prisma.ThingFindUniqueArgs['where'],
    Omit<Prisma.ThingInclude, '_count'>,
    Prisma.ThingFindFirstArgs['orderBy'],
    Prisma.ThingScalarFieldEnum,
    ThingGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
