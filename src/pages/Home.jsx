const Home = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-white bg-cover bg-center relative"
            style={{ backgroundImage: "url('/aset/bganime.jpg')" }}
        >
            {/* Overlay Gelap */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Konten */}
            <div className="relative z-10 text-center px-6 flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Selamat Datang di E-Learning BBPOM
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl text-center">
                    Platform pembelajaran online untuk peserta magang BBPOM. <br />
                    Bergabung dan kembangkan keterampilanmu!
                </p>
                <a href="/login" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                    Mulai Sekarang
                </a>
            </div>
        </div>
    );
};

export default Home;
