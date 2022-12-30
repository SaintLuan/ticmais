export type ArtigoBlogProps ={ 
    id: number;
    title: string;
    subtitle: string;
    publishedAt: string;
    publishedy: string;
    thumbnail: string;
}

export type ArtigosBlogProps = {
    artigos: ArtigoBlogProps[];
}