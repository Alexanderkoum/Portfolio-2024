import React from 'react'

export default function SkillCard({image, title}) {
    return (
        <div className=" flex flex-col justify-center items-center p-2 md:p-4 grayscale md:hover:grayscale-0 md:opacity-35 md:hover:opacity-100 duration-300 transition border border-slate-50/20 md:hover:bg-gradient-to-t from-stone-50 to-cyan-900">
            <img src={image} alt={title} className="w-6 h-6 md:w-32 md:h-32 mb-2 md:p-7" />
        </div>
    )
}