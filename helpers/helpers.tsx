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