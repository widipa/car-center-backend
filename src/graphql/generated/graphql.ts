import { GraphQLResolveInfo } from 'graphql';
import { IPrismaContext } from 'src/prisma/IPrismaContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Clientes de Car Center */
export type Cliente = {
  __typename?: 'Cliente';
  /** Número de celular del cliente */
  celular?: Maybe<Scalars['String']>;
  /** Correo electrónico válido del cliente */
  correo_electronico?: Maybe<Scalars['String']>;
  /** Dirección de ubicación del cliente */
  direccion?: Maybe<Scalars['String']>;
  /** Número de identificación del cliente */
  documento?: Maybe<Scalars['String']>;
  /** id del cliente */
  id: Scalars['ID'];
  /** Primer apellido del cliente */
  primer_apellido?: Maybe<Scalars['String']>;
  /** Primer nombre del cliente */
  primer_nombre?: Maybe<Scalars['String']>;
  /** Segundo apellido del cliente */
  segundo_apellido?: Maybe<Scalars['String']>;
  /** Segundo nombre del cliente */
  segundo_nombre?: Maybe<Scalars['String']>;
  /** Tipo de documento del cliente */
  tipo_documento?: Maybe<Scalars['String']>;
};

/** Crear un registros de cliente */
export type CreateClienteInput = {
  /** Número de celular del cliente */
  celular: Scalars['String'];
  /** Correo electrónico válido del cliente */
  correo_electronico: Scalars['String'];
  /** Dirección de ubicación del cliente */
  direccion: Scalars['String'];
  /** Número de identificación del cliente */
  documento: Scalars['String'];
  /** Primer apellido del cliente */
  primer_apellido: Scalars['String'];
  /** Primer nombre del cliente */
  primer_nombre: Scalars['String'];
  /** Segundo apellido del cliente */
  segundo_apellido: Scalars['String'];
  /** Segundo nombre del cliente */
  segundo_nombre: Scalars['String'];
  /** Tipo de documento del cliente */
  tipo_documento: Scalars['String'];
};

/** Eliminar un registro de cliente */
export type DeleteClienteInput = {
  /** id del cliente */
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCliente?: Maybe<Cliente>;
  deleteCliente?: Maybe<Cliente>;
  updateCliente?: Maybe<Cliente>;
};


export type MutationCreateClienteArgs = {
  input: CreateClienteInput;
};


export type MutationDeleteClienteArgs = {
  input: DeleteClienteInput;
};


export type MutationUpdateClienteArgs = {
  input: UpdateClienteInput;
};

export type Query = {
  __typename?: 'Query';
  clientes?: Maybe<Array<Maybe<Cliente>>>;
};

/** Actualizar un registro de cliente */
export type UpdateClienteInput = {
  /** Número de celular del cliente */
  celular?: InputMaybe<Scalars['String']>;
  /** Correo electrónico válido del cliente */
  correo_electronico?: InputMaybe<Scalars['String']>;
  /** Dirección de ubicación del cliente */
  direccion?: InputMaybe<Scalars['String']>;
  /** Número de identificación del cliente */
  documento?: InputMaybe<Scalars['String']>;
  /** id del cliente */
  id: Scalars['ID'];
  /** Primer apellido del cliente */
  primer_apellido?: InputMaybe<Scalars['String']>;
  /** Primer nombre del cliente */
  primer_nombre?: InputMaybe<Scalars['String']>;
  /** Segundo apellido del cliente */
  segundo_apellido?: InputMaybe<Scalars['String']>;
  /** Segundo nombre del cliente */
  segundo_nombre?: InputMaybe<Scalars['String']>;
  /** Tipo de documento del cliente */
  tipo_documento?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cliente: ResolverTypeWrapper<Cliente>;
  CreateClienteInput: CreateClienteInput;
  DeleteClienteInput: DeleteClienteInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateClienteInput: UpdateClienteInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Cliente: Cliente;
  CreateClienteInput: CreateClienteInput;
  DeleteClienteInput: DeleteClienteInput;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  UpdateClienteInput: UpdateClienteInput;
}>;

export type ClienteResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Cliente'] = ResolversParentTypes['Cliente']> = ResolversObject<{
  celular?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  correo_electronico?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  direccion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documento?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  primer_apellido?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primer_nombre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  segundo_apellido?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  segundo_nombre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tipo_documento?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCliente?: Resolver<Maybe<ResolversTypes['Cliente']>, ParentType, ContextType, RequireFields<MutationCreateClienteArgs, 'input'>>;
  deleteCliente?: Resolver<Maybe<ResolversTypes['Cliente']>, ParentType, ContextType, RequireFields<MutationDeleteClienteArgs, 'input'>>;
  updateCliente?: Resolver<Maybe<ResolversTypes['Cliente']>, ParentType, ContextType, RequireFields<MutationUpdateClienteArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  clientes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cliente']>>>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Cliente?: ClienteResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

