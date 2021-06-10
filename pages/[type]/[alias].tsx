
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import { withLayout } from "../../layout/Layout";
import {MenuItem} from "../../interfaces/menu.interface";
import {TopLevelCategory, TopPageModel} from "../../interfaces/page.intirface";
import {ProductModel} from "../../interfaces/product.interface";
import {firstLevelCategory} from "../../helpers/helpers";
import {TopPageComponent} from "../../pageComponents";


function TopPage({firstCategory, page, products}: TopPage): JSX.Element {
    return <TopPageComponent page={page} products={products} firstCategory={firstCategory}/>;
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths:string[] = [];
    for(const m of firstLevelCategory) {
        const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }

    return {
        paths,
        fallback: true
    };
};


export const getStaticProps: GetStaticProps<TopPage> = async ({params}:GetStaticPropsContext) => {
    if(!params) {
        return {
            notFound:true
        };
    }
    const firstCategoryItem = firstLevelCategory.find(m => m.route === params.type);
    if(!firstCategoryItem) {
        return {
            notFound:true
        };
    }
    try {
        const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: firstCategoryItem.id
        });
        if(menu.length === 0) {
            return {
                notFound:true
            };
        }
        const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' +params.alias);
        const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
            category:page.category,
            limit: 10
        });
        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    }catch{
        return {
            notFound:true
        };
    }
};

interface TopPage extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products:ProductModel[]
}