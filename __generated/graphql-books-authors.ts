export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
};

export type Query = {
  books?: Maybe<Array<Maybe<Book>>>;
  authors?: Maybe<Array<Maybe<Author>>>;
  getBookById?: Maybe<Book>;
};


export type QueryBooksArgs = {
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBookByIdArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  addBook?: Maybe<Book>;
  updateBook?: Maybe<Book>;
  deleteBook?: Maybe<Book>;
};


export type MutationAddBookArgs = {
  title: Scalars['String'];
  author: Scalars['String'];
};


export type MutationUpdateBookArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Scalars['String'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};

export type Book = {
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Scalars['String'];
};

export type Author = {
  id: Scalars['ID'];
  name: Scalars['String'];
  books?: Maybe<Array<Maybe<Book>>>;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { books?: Array<{ id: string, author: string, title: string } | null> | null };
