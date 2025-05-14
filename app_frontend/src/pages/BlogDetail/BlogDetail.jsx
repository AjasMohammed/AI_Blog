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
            setBlogData(data.post);
            setRelatedPosts(data.related_posts);
        });
    }, []);
    return (
        <section className="bg-primary min-h-screen pt-5 grid grid-cols-4">
            <aside className="bg-secondary rounded-2xl m-4 p-6 h-fit text-xl text-primary font-semibold flex flex-col items-start justify-center gap-6">
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
            <article className="col-span-3 px-24 pt-10 mr-8 text-2xl font-semibold">
                {blogData && (
                    <>
                        <h2 className="text-6xl font-extrabold text-ternary mb-6">
                            {blogData.title}
                        </h2>
                        <p className="border-l-3 my-10 text-2xl font-medium ml-8 pl-6 text-secondary">
                            {blogData.summary}
                        </p>
                        <div id="content" className="pl-6">
                            <ReactMarkdown
                                components={{
                                    h2: ({ node, ...props }) => (
                                        <h2
                                            className="text-4xl font-extrabold text-ternary mb-6 mt-12"
                                            {...props}
                                        />
                                    ),
                                    p: ({ node, ...props }) => (
                                        <p
                                            className="mx-8 mb-6 leading-10 font-normal"
                                            {...props}
                                        />
                                    )
                                }}
                            >
                                {blogData.content}
                            </ReactMarkdown>
                        </div>
                    </>
                )}
            </article>
        </section>
    );
}

export default BlogDetail;
