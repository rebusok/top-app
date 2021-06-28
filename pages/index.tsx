import {Button, Htag, Input, Ptag, Rating, Tag} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import TextArea from "../components/TextArea/TextArea";
import {API} from "../helpers/api/Api";

function Home(props: HomeProps): JSX.Element {
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
            <Input/>
            <TextArea/>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
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