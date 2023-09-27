// const api =
// "https://newsapi.org/v2/everything?q=apple&from=2023-09-24&to=2023-09-24&sortBy=popularity&apiKey=f1186362d7a640178ee588925cb8bc91";
export const Api = (query: string) => {
    const api =
        `https://newsapi.org/v2/${query}&apiKey=f1186362d7a640178ee588925cb8bc91`;

    return api
}