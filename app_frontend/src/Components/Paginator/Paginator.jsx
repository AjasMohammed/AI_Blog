import React from "react";

function Paginator({ page, handlePageChange }) {
    const nextPage = () => {
        handlePageChange(page.nextPage);
    };
    const prevPage = () => {
        handlePageChange(page.prevPage);
    };
    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-8 text-sm">
                {page.prevPage && (
                    <>
                        <li>
                            <button
                                onClick={prevPage}
                                className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 border-gray-300 rounded-s-lg bg-primary text-secondary"
                            >
                                <span className="sr-only">Prev</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center justify-center px-3 h-8 leading-tight bg-primary text-secondary cursor-pointer">
                                {page.prevPage}
                            </button>
                        </li>
                        {page.prevPage - 1 >= 1 && (
                            <li>
                                <button className="flex items-center justify-center px-3 h-8 leading-tight bg-primary text-secondary cursor-pointer">
                                    {page.prevPage - 1}
                                </button>
                            </li>
                        )}
                    </>
                )}
                <li>
                    <button
                        aria-current="page"
                        className="flex items-center justify-center px-3 h-8 leading-tight bg-ternary text-primary"
                    >
                        {page.currentPage}
                    </button>
                </li>
                {page.nextPage && (
                    <>
                        <li>
                            <button className="flex items-center justify-center px-3 h-8 leading-tight bg-primary text-secondary cursor-pointer">
                                {page.nextPage}
                            </button>
                        </li>
                        {page.totalPages >= page.nextPage + 1 && (
                            <li>
                                <button className="z-10 flex items-center justify-center px-3 h-8 leading-tight bg-primary text-secondary cursor-pointer">
                                    {page.nextPage + 1}
                                </button>
                            </li>
                        )}
                        <li>
                            <button
                                onClick={nextPage}
                                className="flex items-center justify-center px-3 h-8 leading-tight rounded-e-lg bg-primary text-secondary cursor-pointer"
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Paginator;
