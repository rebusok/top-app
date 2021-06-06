import {Button, Htag, Ptag, Rating, Tag} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";


function Home(): JSX.Element {
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
        </>
    );
}

export default withLayout(Home);