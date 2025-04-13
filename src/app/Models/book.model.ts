export interface Book {
    bookID: number;
    title: string;
    price: number;
    stockQuantity: number;
    authorID: number;
    categoryID: number;
    averageRating?: number;
   
    author?:{
        authorID:number;
        authorName:string;
    };
    category?:{
        categoryID:number;
        categoryName:string;
    }
    authorName?:string;
    categoryName?:string;
}