import React, { useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState({
        name: ''
    })

    const handleSearch = () => {
        console.log(search)
    }

    return (
        <div className="bg-transparent border-2 lg:w-1/2 flex-center border-red-300 text-lg outline-none rounded-xl p-1">
            <input type="text" placeholder="Search for projects" name='name' value={search.name} onChange={(e) => setSearch({ ...search, name: e.target.value })} autoComplete='off' className='bg-transparent w-full p-2 outline-none' />
            {/* <select name="domains" className=' bg-transparent mx-4 active:border-2 w-1/3 active:border-white outline-none' id="">
                <option className='bg-inherit' value="">All Domains</option>
                <option className='bg-inherit' value="">AI</option>
                <option className='bg-inherit' value="">DS</option>
                <option className='bg-inherit' value="">ML</option>
                <option className='bg-inherit' value="">WebDev</option>
            </select> */}
            <button className='border-2 p-2 border-transparent rounded-xl active:bg-red-300 active:opacity-70 duration-300 active:scale-90 font-audiowise' onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar