import { CategoriesProps } from "@/@types/events";
import { Tag } from "@/components/shared/Tag";
import { FilterTagsContainer } from "./styles";

export const FilterTags = ({categories}: CategoriesProps) => {
    return(
        <FilterTagsContainer>
            <Tag
                bgColor="primary-500"
                textColor="white"
                className="filled"
            >
                Todos
            </Tag>

            {categories.map((categorie)=>(
                <>
                    <Tag
                        bgColor="primary-500"
                        textColor="primary-500"
                        className="outline"
                    >
                        <>{categorie}</>
                    </Tag>
                </>
            ))}
        </FilterTagsContainer>
    )
}