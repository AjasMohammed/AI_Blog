import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import TagFilter from "../../Components/TagFilter/TagFilter";
import Paginator from "../../Components/Paginator/Paginator";

function BlogList() {
    const location = useLocation();
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredTag, setFilteredTag] = useState(location.state?.tagId || null);
    const [page, setPage] = useState({
        currentPage: searchParams.get("page") || 1,
        nextPage: null,
        prevPage: null,
        totalPages: null,
    });
    useEffect(() => {
        axios
            .get(`/blog/all/?page=${page.currentPage}&&tag=${filteredTag}`)
            .then((res) => {
                console.log(res);
                setPosts(res.data.results);
                setTags(res.data.tags);
                setPage((page) => ({
                    ...page,
                    nextPage: res.data.next,
                    prevPage: res.data.prev,
                    totalPages: res.data.total_pages,
                }));
            });
    }, [page.currentPage, filteredTag]);
    const handlePageChange = (newPage) => {
        setSearchParams({ page: newPage });
        setPage((prevPage) => ({ ...prevPage, currentPage: newPage }));
    };
    return (
        <div className="min-h-screen bg-secondary grid grid-cols-4 py-6">
            <div>{tags && <TagFilter tags={tags} setFilteredTag={setFilteredTag} setSearchParams={setSearchParams} />}</div>
            <div
                id="post-list"
                className="flex flex-col items-center gap-6 pt-12 col-span-2"
            >
                {posts.map((post) => (
                    <Link
                        to={`/blog/${post.uid}`}
                        key={post.uid}
                        className="py-8 px-6 bg-primary text-ternary rounded-2xl flex flex-col gap-4"
                    >
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p className="text-lg">{post.summary}</p>
                    </Link>
                ))}
                <div>
                    <Paginator
                        page={page}
                        handlePageChange={handlePageChange}
                    />
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default BlogList;
