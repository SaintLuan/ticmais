import { Input } from "@/components/form/Input";
import { useState } from "react";

import { Search, Filter } from "react-iconly";

export const FilterInput = () => {
    const [serach, setSearch] = useState('');
    const handleInputType = () =>{
        
    }
    
    return(
        <>
            <Input 
                icon={<Search set="light"  />} 
                width={65}
                widthMobile={85}
                iconRight={<Filter set="light" primaryColor="#023E5E" />}
                placeholder="Procurar evento..." 
            />
        </>
        
    )
}