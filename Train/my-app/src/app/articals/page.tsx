import Link from "next/link"


const ArticlePage =() =>{
    return (
        <>
            <h1>Hello From ArticlePage</h1>

            <Link href="/posts">
                <button style={{background:"green",cursor:"pointer"}}>
                    Take me to PostPage
                </button>
            </Link>
        </>
    )
}


export default ArticlePage