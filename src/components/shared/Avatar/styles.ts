import styled from "styled-components";

export const AvatarContainer = styled.figure`
    width: 2rem;
    height: 2rem;

    img{
        width: 100%;
        height: 100%;

        object-fit: cover;
        border-radius: 100px;
    }

    @media screen and (max-width: 480px){
        width: 1.75rem;
        height: 1.75rem;
    }
`;