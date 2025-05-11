import React from "react";
import BlogCard from "../BlogCard/BlogCard";


const dummData = [
    {
        title: "Google’s AI Powered NotebookLM Set to Revolutionize Video Overviews",
        summary:
            "Google's NotebookLM is poised to receive a significant upgrade with the integration of AI-powered video overviews. This new feature promises to streamline information extraction from video content, enhancing productivity and learning for users.",
    },
    {
        title: "Whoop Faces Customer Backlash After Cancelling Free Hardware Upgrades",
        summary:
            "Wearable fitness tracker company Whoop is experiencing significant customer dissatisfaction after abruptly ending its policy of providing free hardware upgrades. This decision has sparked outrage among subscribers who feel the change undermines the value proposition of the Whoop membership.",
    },
    {
        title: "Geospatial Tech: The Key to a Water-Secure India, According to GreenGood Labs Founder",
        summary:
            "Shubo Biswas, the founder of GreenGood Labs, emphasizes the critical role of geospatial technology in achieving water security for India. Biswas highlights how these technologies can revolutionize water resource management and ensure sustainable access to water for all.",
    },
    {
        title: "New Study: Colleagues May Perceive AI Users as Lazy and Less Intelligent",
        summary:
            "A recent study reveals a concerning trend: colleagues may view individuals who use artificial intelligence (AI) tools at work as less intelligent, lazy, and even incompetent. This perception can create challenges for AI adoption and collaboration in the workplace.",
    },
    {
        title: "The Future of AI in Healthcare: How to Prepare for the Next Wave",
        summary: "A look at the future of AI in healthcare and how to prepare for the next wave of innovation.",
    },
];
function RecentPosts() {
    return (
        <div className="p-5 pt-10 relative bg-secondary">
            <a className="text-5xl font-extrabold text-primary mb-5 hover:underline transition">
                Recent Posts:
            </a>
            {/* <div id="ai-message" className='m-5 text-xl absolute w-70'>
              <p className='text-ternary font-semibold'>
                  <span className='font-bold text-2xl text-secondary'>Nemo:</span> Welcome! I’m the AI that writes all these
                  articles — fast, factual, and always on time.
              </p>
          </div> */}
            <div className="grid grid-cols-3 gap-5 mt-10 px-10">
                {dummData.map((content, index) => (
                    <BlogCard key={index} content={content} />
                ))}
            </div>
        </div>
    );
}

export default RecentPosts;
