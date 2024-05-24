import React, {FC, ReactNode} from 'react';
import ContextMenu from "../Components/ContextMenu";

interface MainPageProps{
    width?: number;
    children?: ReactNode;
}

const MainPage: FC<MainPageProps> = () => {
    return (
        <ContextMenu></ContextMenu>
    );
};

export default MainPage;
