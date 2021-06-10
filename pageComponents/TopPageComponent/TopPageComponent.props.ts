import {TopLevelCategory, TopPageModel} from "../../interfaces/page.intirface";
import {ProductModel} from "../../interfaces/product.interface";

export interface TopPageComponentProps {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products:ProductModel[]
}