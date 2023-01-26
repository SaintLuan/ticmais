import { Input } from "@/components/form/Input";
import { ChangeEvent, useState } from "react";

import { Search, Filter } from "react-iconly";

interface FilterProps {
    onHandleSearch: (query: string) => void;
}

export const FilterInput = ({onHandleSearch}: FilterProps) => {
    const [search, setSearch] = useState('');
    const handleInputType = (event: ChangeEvent<HTMLInputElement>) =>{
        event.target.setCustomValidity('');
        setSearch(event.target.value);
        onHandleSearch(search);
    }
    
    return(
        <>
            <Input 
                icon={<Search set="light"  />} 
                width={65}
                widthMobile={90}
                iconRight={<Filter set="light" primaryColor="#023E5E" />}
                placeholder="Procurar evento..." 
                onChange={handleInputType}
            />
        </>
        
    )
}