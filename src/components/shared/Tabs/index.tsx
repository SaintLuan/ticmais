import { useState } from "react";
import { TabsContainer, TabsContent, TabsContentItem, TabsHeader } from "./styles";

interface ContentProps{
    id: number;
    component: React.ReactNode;
}

interface TabsProps {
    titles: string[];
    content: ContentProps[];
}

export const Tabs = ({titles, content}: TabsProps) => {
    const quantTabs = titles.length;
    const [activeTab, setActiveTab] = useState(0);
    const handleTab = (indexTab:number) => {
        setActiveTab(indexTab);
    }
    
    return(
        <TabsContainer>
            <TabsHeader quantTabs={quantTabs} activeTab={activeTab}>
                {
                    titles.map((title, index) => (
                        <button 
                            key={title} 
                            className={activeTab === index ? 'active' : ''}
                            onClick={() => {handleTab(index)}}
                        >
                            {title}
                        </button>
                    ))
                }
            </TabsHeader>

            <TabsContent quantTabs={quantTabs}>
                {
                    content.map((contentTab, index) => (
                        <TabsContentItem key={contentTab.id} className={activeTab === index ? 'active' : ''}>
                            {contentTab.component}
                        </TabsContentItem>
                    ))
                }
            </TabsContent>
        </TabsContainer>
    );
}