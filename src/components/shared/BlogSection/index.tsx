import { ArtigosBlogProps } from "@/@types/blog";
import { ArticleInfos, ArticleThumb, BlogArticle, BlogArticles, BlogContainer, BlogHeader } from "./styles";

export const BlogSection = ({ artigos }: ArtigosBlogProps) => {
    return(
        <BlogContainer className="container">
            <BlogHeader>
                <h2>Blog</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
            </BlogHeader>

            <BlogArticles>
                {
                    artigos.map((artigo) => (
                        <BlogArticle key={artigo.id} >
                            <ArticleThumb>
                                <img src={artigo.thumbnail} alt={artigo.title} />
                            </ArticleThumb>

                            <ArticleInfos>
                                <h2 className="title">{artigo.title}</h2>

                                <p className="subtitle">
                                    {artigo.subtitle}
                                </p>

                                <h3 className="footerInfos">
                                    <span className="publishedDate">{artigo.publishedAt} </span>
                                     - {artigo.publishedy}
                                </h3>
                            </ArticleInfos>
                        </BlogArticle>
                    ))
                }
            </BlogArticles>
        </BlogContainer>
    );
}