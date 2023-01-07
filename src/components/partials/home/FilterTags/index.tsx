import { Tag } from "@/components/shared/Tag"
import { FilterTagsContainer } from "./styles"

export const FilterTags = () => {
    return(
        <FilterTagsContainer>
            <Tag
                bgColor="primary-500"
                textColor="white"
                className="filled"
            >
                Todos
            </Tag>

            <Tag
                bgColor="primary-500"
                textColor="primary-500"
                className="outline"
            >
                Música
            </Tag>

            <Tag
                bgColor="primary-500"
                textColor="primary-500"
                className="outline"
            >
                Arte
            </Tag>

            <Tag
                bgColor="primary-500"
                textColor="primary-500"
                className="outline"
            >
                Teatro
            </Tag>

            <Tag
                bgColor="primary-500"
                textColor="primary-500"
                className="outline"
            >
                Gastronomia
            </Tag>

            <Tag
                bgColor="primary-500"
                textColor="primary-500"
                className="outline"
            >
                Cinema
            </Tag>

            <Tag
                bgColor="primary-500"
                textColor="primary-500"
                className="outline"
            >
                Palestras
            </Tag>
        </FilterTagsContainer>
    )
}