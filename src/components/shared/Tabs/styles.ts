import styled from "styled-components";


interface TabsStyledProps {
    quantTabs: number;
    activeTab?: number;
}


export const TabsContainer = styled.article`
    width: 75%;
    padding: 2rem 0;

    margin: 0 auto;

    @media screen and (max-width: 480px){
        width: 85%;
    }
`;

export const TabsHeader = styled.header<TabsStyledProps>`

    width: 75%;
    margin: 0 auto;
    padding-bottom: .5rem;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;


    &:after{
        width: 100%;
        height: 1px;

        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;

        content: '';
        background: ${props => props.theme['gray-300']};
    }

    &:has(button.active){
        &:before{

            width: calc(100% / ${props => props.quantTabs});
            height: 3px;

            position: absolute;
            z-index: 9;
            bottom: -1px;
            left: calc(${props => props.activeTab} * (100% / ${props => props.quantTabs}) );

            content: '';
            background: ${props => props.theme['primary-500']};
        }
    }

    button{

        width: calc(100% / ${props => props.quantTabs});

        font-size: .865rem;
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: .15px;

        color: ${props => props.theme['gray-600']};
        cursor: pointer;

        &.active{
            font-size: 1rem;
            font-weight: 700;
            color: ${props => props.theme['primary-500']};
        }
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

export const TabsContent = styled.section<TabsStyledProps>`
    width: 100%;
    margin: 1rem 0;
`;

export const TabsContentItem = styled.aside`
    display: none;

    &.active{
        display: flex;
    }
`;