import React, { useState } from "react";
import pic from '../assets/pic.jpg'

const tags = ["Web", "Mobile", "AI", "Design", "Cloud"];

const dummyCards = new Array(6).fill(0).map((_, i) => ({
    id: i,
    img: pic,
    title: `Project Title ${i + 1}`,
    desc:
        "This is a sample two-line description for the project to showcase the card layout properly.",
}));

function Project() {
    const [activeTag, setActiveTag] = useState(tags[0]);

    return (
        <div className="text-white px-8 sm:px-12 md:px-24 lg:px-32 py-16 font-sans">


            {/* Main Heading */}
            <h1 className="text-4xl text-center mb-2">My Projects</h1>

            {/* Sub Heading */}
            <p className="text-center text-gray-300 mb-15">
                Explore different categories of my work
            </p>

            {/* Tags */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`px-5 py-2 rounded-md border transition 
              ${activeTag === tag
                                ? "bg-[#ed4d65] text-white border-none"
                                : "border-1 border-gray-700 text-white hover:bg-white hover:text-black"
                            }
            `}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dummyCards.map((card) => (
                    <div key={card.id} className="flex flex-col mt-2">

                        {/* Image */}
                        <img
                            src={card.img}
                            alt="thumbnail"
                            className="w-full h-64 object-cover rounded-lg"
                        />

                        {/* Title */}
                        <h3 className="text-md mt-3">{card.title}</h3>

                        {/* Description */}
                        <p className="text-gray-300 mt-1 line-clamp-2 text-sm">
                            {card.desc}...
                        </p>

                        {/* Button */}
                        <button className="mt-2 border-1 border-[#ed4d65] bg-[#141414] text-[#ed4d65]  hover:bg-[#ed4d65] hover:text-white px-6 py-2 w-fit rounded-md transition mb-4">
                            Explore
                        </button>

                    </div>
                ))}
            </div>


        </div>
    );
}

export default Project;
