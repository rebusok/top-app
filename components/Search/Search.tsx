import React, {FC, useState, KeyboardEvent} from 'react';
import {SearchProps} from "./Search.props";
import cn from 'classnames';
import styles from './Search.module.css';
import {Button, Input} from "../index";
import SearchIcon from './SearchIcon.svg';
import {useRouter} from "next/router";
const Search:FC<SearchProps> = ({className, ...restProps}) => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const goToSearch = async () => {
        await router.push({
            pathname: '/search',
            query:{
                q: search
            }
        });
    };
    const handlerKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter') {
          ( async () => {
              await goToSearch();
          })();
      }
    };
    return (
        <div className={cn(className, styles.search)}
             {...restProps}
        >
            <Input
                className={styles.input}
                placeholder={'Поиск...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handlerKeyDown}
            />
            <Button
                appearance={'primary'}
                className={styles.button}
                onClick={goToSearch}
                aria-label={'Искать по сайту'}
            >
                <SearchIcon/>
            </Button>
        </div>
    );
};

export default Search;