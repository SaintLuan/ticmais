import { Input } from "@/components/form/Input";

import { Search, Filter } from "react-iconly";

export const FilterInput = () => {
    return(
        <>
            <Input 
                icon={<Search />} 
                width={85}
                iconRight={<Filter />} 
            />
        </>
        
    )
}