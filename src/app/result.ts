export interface Result<T> {
    isSuccess: boolean,
    value?: T,
    messages?: string[]
}

export interface Product {
    id: number
    price: number
    name: string
} 
