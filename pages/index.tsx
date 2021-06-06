import {Button, Htag, Ptag, Rating, Tag} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);
    return (
        < >
            <Htag tag={'h1'}>test</Htag>
            <Button appearance={'primary'} arrow={'right'}>Кнопка</Button>
            <Button appearance={'ghost'} arrow={'down'}>Кнопка</Button>
            <Ptag size={'L'}>tetsts</Ptag>
            <Ptag size={'S'}>tetsts</Ptag>
            <Ptag>tetsts</Ptag>
            <Tag size={'s'} color={'red'}>VdsaF</Tag>
            <Tag size={'m'} color={'grey'}>VFKF</Tag>
            <Tag size={'m'} color={'primary'} href={'#'}>VFKF</Tag>
            <Tag size={'m'} color={'green'} href={'#'}>VFKF</Tag>
            <Rating rating={rating} setRating={setRating}/>
              <ul>
                  {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
              </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}