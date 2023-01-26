import styled from "styled-components";

export const EventContainer = styled.section`
    width: 100%;
`;

export const EventCategory = styled.article`
    width: 100%;
    margin: 1rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header{
        width: 82%;
        margin: 0 auto;
    }

    .container{
        padding: 0;
        section{
            margin-top: unset !important;
            justify-content: flex-start;
        }
    }


`;