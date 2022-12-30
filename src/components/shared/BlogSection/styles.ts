import styled from "styled-components";

export const BlogContainer = styled.section`

`;

export const BlogHeader = styled.header`
    width: 100%;
    margin: 1rem auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 2.25;
        margin-bottom: .5rem;
    }

    p{
        width: 75%;
        font: 400 1rem/1.25 'DM Sans', sans-serif;
    }

    @media screen and (max-width: 480px){
        h2{
            font-size: 1.5rem;
            line-height: 2;
            margin-bottom: .25rem;
        }
        p{
            width: 85%;
            font: 400 .865rem/1.2 'DM Sans', sans-serif;
        }
    }
`;

export const BlogArticles = styled.section`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;

`;

export const BlogArticle = styled.article`
    width: calc((100%/3) - 3rem);

    @media screen and (max-width: 480px){
        width: 100%;
        margin: 1rem 0;
    }
`;

export const ArticleThumb = styled.figure`
    width: 100%;
    height: 175px;

    img{
        width: 100%;
        height: 100%;

        object-fit: cover;
        border-radius: 15px;
    }
`;

export const ArticleInfos = styled.aside`
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title{
        font: 700 1.35rem/2 'DM Sans', sans-serif;
        color: ${props => props.theme['primary-400']};
    }

    .subtitle{
        font: 400 .865rem/1.25 'DM Sans', sans-serif;
        color: ${props => props.theme['gray-600']};
    }

    .footerInfos{
        font: 400 .75rem/1.25 'DM Sans', sans-serif;
        color: ${props => props.theme['gray-400']};
    }
`;