import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesIcon from "./icons/curses.svg";
import {TopLevelCategory} from "../interfaces/page.intirface";
import ServicesIcon from "./icons/servises.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/shopsItem.svg";
import React from "react";

export const firstLevelCategory: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Курсы', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];

export const priceRu = (price:number):string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const devOfNum = (num: number, titles:[string, string, string]):string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(num % 100 > 4 && num % 100 < 20 ) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
};