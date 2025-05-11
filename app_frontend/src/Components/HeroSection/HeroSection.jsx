import React from "react";
import "./HeroSection.css";
import PointCard from "./PointCard";

const heroFeaturesPart1 = [
    {
        title: "Fully AI-Generated Content",
        description:
            "Fresh, high-quality blogs written entirely by artificial intelligence — no human input required.",
        icon: "🧠",
    },
    {
        title: "Auto-Publishing",
        description:
            "New posts are generated and published automatically, keeping your blog active 24/7.",
        icon: "🔄",
    },
    {
        title: "Data-Driven Insights",
        description:
            "AI leverages trending topics and reliable sources to write informative and relevant content.",
        icon: "📊",
    },
    {
        title: "Instant Updates",
        description:
            "Stay ahead with real-time posts on the latest in AI, tech, and innovation.",
        icon: "⚡",
    },
];
const heroFeaturesPart2 = [
    {
        title: "Multilingual Support",
        description:
            "Reach global audiences with AI-generated content in multiple languages.",
        icon: "🌐",
    },
    {
        title: "SEO Optimized by Default",
        description:
            "Smart keyword usage and structure for better visibility on search engines.",
        icon: "🔍",
    },
    {
        title: "Customizable Topics",
        description:
            "Easily set your niche — let the AI tailor the content to your interests or brand.",
        icon: "🛠️",
    },
    {
        title: "Scheduled Posting",
        description: "Control your content flow with AI-powered scheduling.",
        icon: "📅",
    },
];

function HeroSection() {
    return (
        <div className="h-screen w-screen grid grid-cols-2 p-5 items-center bg-primary">
            <div
                id="hero-text"
                className="flex flex-col pl-5 gap-6 text-ternary"
            >
                <div id="hero-header">
                    <h4 id="hero-subtitle" className="text-xl font-bold p-3">
                        Stay ahead. Let AI do the writing.
                    </h4>
                    <h1
                        id="hero-title"
                        className="text-6xl font-extrabold text-secondary"
                    >
                        Welcome to NeuroFeed
                    </h1>
                </div>
                <p className="p-5 text-3xl font-semibold leading-relaxed">
                    Welcome to the blog where every post is crafted by
                    artificial intelligence — delivering fresh, insightful, and
                    data-driven content daily. From tech trends to deep dives in
                    AI, our smart system writes, curates, and publishes articles
                    that keep you informed — effortlessly.
                </p>
                <div
                    id="ai-message"
                    className="m-5 text-xl flex mt-20 bg-white rounded-2xl px-3 py-8"
                >
                    <span className="font-bold text-2xl text-secondary px-2">
                        &gt;&gt;&gt;
                    </span>
                    <p className="text-ternary font-semibold">
                        Hello
                        <span className="font-bold text-2xl text-secondary pl-2">
                            HUMAN
                        </span>
                        ! My name is
                        <span className="font-bold text-2xl text-secondary pl-2 underline">
                            NEMO
                        </span>
                        , I write all these blogs just for you. Dive in and
                        explore what my circuits have crafted today!
                    </p>
                </div>
            </div>
            <div
                id="hero-items"
                className="grid grid-cols-2 justify-items-center place-content-center bg-primary rounded-2xl"
            >
                <div id="part-1" className="flex flex-col gap-2">
                    {heroFeaturesPart1.map((feature) => {
                        return (
                            <PointCard key={feature.title} content={feature} />
                        );
                    })}
                </div>
                <div id="part-2" className="flex flex-col gap-2">
                    {heroFeaturesPart2.map((feature) => {
                        return (
                            <PointCard key={feature.title} content={feature} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
