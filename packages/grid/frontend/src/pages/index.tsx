const index = () => {
    return (
        <div className="h-screen bg-blue-100 p-16 grid grid-cols-12 gap-6">
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">
                1
            </div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">2</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg col-span-4">
                <a href="/login">Go to Login</a>
            </div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">4</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">5</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg col-span-3">6</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">7</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">8</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">9</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">10</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg col-span-8">11</div>
            <div className="bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">12</div>
        </div>
    )
}

export default index
