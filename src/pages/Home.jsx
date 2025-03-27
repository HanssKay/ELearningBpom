import learn from "../assets/learn.png";



const Home = () => {
    return (
        <>
        <div className="flex justify-center w-full -z-10 h-screen bg-linear-to-b from-[var(--color-one)] to-[var(--color-two)]">
            <div className="md:flex flex-col-2 gap-32 md:top-0 top-20 relative items-center">
                <div className="flex flex-col ">
                    <h1 className="flex md:text-start text-center flex-col md:text-4xl text-xl font-bold">Mari Ikuti Program Magang <br/>bersama Kahayan Inpro </h1>
                    <p className="mt-2 md:text-xl text-lg text-center md:px-0 px-5 md:text-start">Bergabunglah dengan program magang eksklusif kami dan dapatkan
                        <br/> pengalaman kerja nyata yang akan membentuk masa depan kariermu.
                        <br/> Belajar langsung dari para profesional dan tingkatkan keterampilanmu sekarang. </p>
                    <button className="w-40 md:mt-5 md:top-0 top-[250px] md:left-0 left-[120px] text-white font-bold md:relative absolute border-1 p-1 rounded-md bg-blue-500 hover:bg-blue-800">
                        <a href="/register">Daftar Sekarang</a>
                    </button>
                </div>
                <div className="flex ">
                    <img className=" md:h-[310px] h-60 md:ms-0 ms-10 md:mt-6 mt-[82px]" src={learn} alt="" />
                </div>
            </div>  
        </div>
        </>
    );
};

export default Home;
