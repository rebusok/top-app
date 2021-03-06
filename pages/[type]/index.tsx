
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {withLayout} from "../../layout/Layout";
import {MenuItem} from "../../interfaces/menu.interface";
import {firstLevelCategory} from "../../helpers/helpers";
import {API} from "../../helpers/api/Api";


function Type({firstCategory}:TypeProps): JSX.Element {

    return (
        <>

        </>
    );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelCategory.map(m => '/' + m.route),
        fallback: false
    };
};
export const getStaticProps: GetStaticProps<TypeProps> = async ({params}:GetStaticPropsContext) => {
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
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory:firstCategoryItem.id
    });

    return {
        props: {
            menu,
            firstCategory:firstCategoryItem.id
        }
    };
};

interface TypeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}