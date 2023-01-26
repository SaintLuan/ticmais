import Link from "next/link";
import { TileContainer } from "./styles";

interface TitleProps{
    title: string;
    seeAllText?: string;
    seeALlLink: string;
};

export const TitleSection = ({ title, seeAllText, seeALlLink }:TitleProps) => {
    return(
        <TileContainer>
            <h1 className="title">{title}</h1>
            <Link href={seeALlLink}>
                <span className="seeAll">{seeAllText}</span>
            </Link>
        </TileContainer>
    );
}