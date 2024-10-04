import Image from "next/image"

const Team =()=>{
    return(
        <div className="px-4 py-10">

        <h1 className="font-bold mb-8 text-black text-center text-4xl lg:text-5xl">Team</h1>
      
   
      <div className="flex flex-col lg:flex-row lg:flex-wrap  gap-20 justify-center items-center">
        <div className="text-center">
          <Image className="rounded-full mx-auto" src="/images/Mwanasha.png" width={200} height={200} alt="Mwanasha Omari" />
          <p className="mt-4">Mwanasha Omari</p>
        </div>

        <div className="text-center">
          <Image className="rounded-full mx-auto" src="/images/Caren.png" width={200} height={200} alt="Caren Chepngetich" />
          <p className="mt-4">Caren Chepngetich</p>
        </div>

        <div className="text-center">
          <Image className="rounded-full mx-auto" src="/images/Wato.png" width={200} height={200} alt="Wato Bucha" />
          <p className="mt-4">Wato Bucha</p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-20 mt-14 justify-center items-center">
        <div className="text-center">
          <Image className="rounded-full mx-auto" src="/images/Tracy.png" width={200} height={200} alt="Tracy Malonza" />
          <p className="mt-4">Tracy Malonza</p>
        </div>

        <div className="text-center">
          <Image className="rounded-full mx-auto" src="/images/Achan.png" width={200} height={200} alt="Kur Achan" />
          <p className="mt-4">Kur Achan</p>
        </div>
      </div>

        </div>
    )
}
export default Team;