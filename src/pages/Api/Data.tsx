import Img1 from "@/public/trending/img7.png"
import Img2 from "@/public/trending/img2.png"
import Img3 from "@/public/trending/img3.png"
import Img4 from "@/public/trending/img4.png"
import Img5 from "@/public/trending/img5.png"

import Img6 from "@/public/latest/img1.jpg"
import Img7 from "@/public/latest/img3.png"
import Img8 from "@/public/latest/img5.png"
import Img9 from "@/public/latest/img4.png"
import Img10 from "@/public/latest/img6.png"

let posts: { 
    id: number;
    title: string,
    subtitle: string;
    category: string;
    img: string;
    description: string;
    published: string;
    author: object 
}[][] = [];


posts = [
    [
        {
            id: 1,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img1,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 3,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 2,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img2,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 5,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 3,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img3,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 7,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 4,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img4,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 10,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 5,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img5,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 14,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        }
    ],
    [
        {
            id: 1,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img6,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
            consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
            Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
            of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
            the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            `,
            published: "Jun 3,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 2,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img7,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
            consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
            Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
            of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
            the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            `,
            published: "Jun 5,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 3,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img8,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
            consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
            Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
            of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
            the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            `,
            published: "Jun 7,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 4,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img9,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
            consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
            Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
            of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
            the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            `,
            published: "Jun 10,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 5,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img10,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
            consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
            Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
            of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
            the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            `,
            published: "Jun 14,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 6,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : Img8,
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
            consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
            Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
            of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
            the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            `,
            published: "Jun 5,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
    ],
    [
        {
            id: 1,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : "/images/articles/img1.jpg",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
            far World of Grammar.
            `,
            published: "Jun 3,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 2,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : "/images/articles/img2.jpg",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
            far World of Grammar.
            `,
            published: "Jun 5,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 3,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : "/images/articles/img3.jpg",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
            far World of Grammar.
            `,
            published: "Jun 7,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 4,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : "/images/articles/img4.png",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
            far World of Grammar.
            `,
            published: "Jun 10,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        },
        {
            id: 5,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img : "/images/articles/img5.png",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
            far World of Grammar.
            `,
            published: "Jun 14,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation : "CEO and Founder"
            }
        }
    ]
]

export const Data = posts