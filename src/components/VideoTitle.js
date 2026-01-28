const VideoTitle =({title,id})=>{
    return (
    <div className="relative w-screen h-screen  pt-[20%] px-6 md:px-24  text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg">{id}</p>
        <div className="my-4 md:m-0">
            <button className="bg-white text-black py-4  md: px-12 text-xl  rounded-lg hover:bg-opacity-50">
                ▶️ Play
                </button>
            <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
                More Info
            </button>
        </div>
    </div>
    )
}
export default VideoTitle;