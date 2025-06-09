import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogDetail() {
    const [blogData, setBlogData] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    let { uid } = useParams();
    useEffect(() => {
        axios.get(`/blog/${uid}`).then((res) => {
            const data = res.data;
            console.log(data.post.tags);
            setBlogData(data.post);
            setRelatedPosts(data.related_posts);
        });
    }, [uid]);
    return (
        <section className="bg-primary min-h-screen grid grid-cols-4 relative">
            <aside className="bg-secondary rounded-2xl m-4 p-6 h-fit text-lg text-primary font-semibold flex flex-col items-start justify-center gap-6 sticky top-25">
                <h3 className="text-2xl underline">Related Posts</h3>
                {relatedPosts &&
                    relatedPosts.map((content) => (
                        <Link
                            to={`/blog/${content.uid}`}
                            key={content.uid}
                            className="hover:underline"
                        >
                            {content.title}
                        </Link>
                    ))}
            </aside>
            <article className="col-span-2 pl-10 pt-10 text-lg">
                {blogData && (
                    <>
                        <h2 className="text-4xl font-extrabold text-ternary mb-6">
                            {blogData.title}
                        </h2>
                        <p className="border-l-3 my-10 text-xl font-medium ml-8 pl-6 text-secondary">
                            {blogData.summary}
                        </p>
                        <div id="content" className="pl-6">
                            <ReactMarkdown
                                components={{
                                    h2: ({ node, ...props }) => (
                                        <h2
                                            className="text-2xl font-extrabold text-ternary mb-4 mt-10"
                                            {...props}
                                        />
                                    ),
                                    h3: ({ node, ...props }) => (
                                        <h3
                                            className="text-xl font-extrabold text-ternary mb-2 mt-10"
                                            {...props}
                                        />
                                    ),
                                    p: ({ node, ...props }) => (
                                        <p
                                            className="mx-8 mb-4 leading-8 font-normal"
                                            {...props}
                                        />
                                    ),
                                    ul: ({ node, ...props }) => (
                                        <ul
                                            className="mx-8 mb-4 ml-10 leading-8 font-normal list-disc"
                                            {...props}
                                        />
                                    ),
                                    a: ({ node, ...props }) => (
                                        <a
                                            className="text-blue-800 hover:underline"
                                            {...props}
                                        />
                                    ),
                                }}
                            >
                                {blogData.content}
                            </ReactMarkdown>
                        </div>
                    </>
                )}
            </article>
            <aside className="bg-ternary rounded-2xl py-6 px-4 h-fit mx-8 mt-6 sticky top-25">
                <div>
                    <h3 className="text-2xl font-extrabold text-primary mb-6 underline">
                        Related Tags
                    </h3>
                    <ul className="flex flex-wrap gap-6 text-lg font-semibold capitalize m-6">
                        {blogData &&
                            blogData.tags.map((tag) => (
                                <li key={tag.uid} className="text-primary">
                                    <Link key={tag.uid} to={`/blog/all/?tag=${tag.name}`} state={{ tagId: tag.uid }}>{tag.name}</Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </aside>
        </section>
    );
}

export default BlogDetail;
