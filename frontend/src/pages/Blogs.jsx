import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

const Blogs = () => {
    return (
        <div className="h-auto flex-center flex-col relative bg-white">
            <div className="flex-center flex-col h-full w-full">
                <div className="relative z-50h-auto w-full flex items-start justify-center pt-20 lg:px-20 pb-10"><SearchBar /></div>

                <div className="min-h-screen w-full flex justify-start items-center px-8 flex-col">
                    {/* {projects.map((item, id) =>
                        <ProjectBar id={item} key={id} />
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default Blogs