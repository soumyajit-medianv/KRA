
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    index(): string | Promise<string>;
    securedDataForAdmin(): string | Promise<string>;
    securedDataForUser(): string | Promise<string>;
    login(email: string, password: string): string | Promise<string>;
}

type Nullable<T> = T | null;
