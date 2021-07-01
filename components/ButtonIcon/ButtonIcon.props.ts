import {DetailedHTMLProps, HTMLAttributes} from "react";
import up from './arrowUp.svg';
import sort from './sortIcon.svg';
import close from './close.svg';


export const icons = {
    up,
    sort, close
};

export type IconName = keyof typeof icons;
export interface ButtonIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'white';
}