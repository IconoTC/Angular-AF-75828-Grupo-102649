import { Observable } from "rxjs";

export interface Repo<T extends { id: symbol | number | string }> {
    getAll(): Promise<T[]>;
    getById(id: T['id']): Promise<T>; // throw error if not found
    add(item: Omit<T, 'id'>): Promise<T>;
    updateFull?(item: T): Promise<T>; // throw error if not found
    updateById( id: T['id'] , item: Partial<Omit<T, 'id'>>): Promise<T>; // throw error if not found
    deleteById(id: T['id']): Promise<void>; // throw error if not found
}

export interface RepoRx<T extends { id: symbol | number | string }> {
    getAll(): Observable<T[]>;
    getById(id: T['id']): Observable<T>; // throw error if not found
    add(item: Omit<T, 'id'>): Observable<T>;
    updateFull?(item: T): Observable<T>; // throw error if not found
    updateById( id: T['id'] , item: Partial<Omit<T, 'id'>>): Observable<T>; // throw error if not found
    deleteById(id: T['id']): Observable<void>; // throw error if not found
}