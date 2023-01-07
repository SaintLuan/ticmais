import styled from "styled-components";

export const FilterTagsContainer = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 1rem 20%;

    display: flex;
    flex-wrap: wrap;
    gap: .75rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 480px){
        width: 100%;
        padding: 1rem 5%;
    }
`;