import { Input } from "@/components/form/Input";

import { Search, Filter } from "react-iconly";

export const FilterInput = () => {
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