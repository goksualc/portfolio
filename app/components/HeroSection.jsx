import React from "react";
import Image from "next/image";

const HeroSection = () => {
return (
<section>
    <div className="grid grid-cols-1 lg:grid-cols-12 "> 
    <div className="col-span-7 place-self-center" >

 
    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello I'm Goksu</h1>

<p className="text-[#ADB7BE] text-lg lg:text-xl" >

Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Quos voluptatibus quisquam unde distinctio sapiente nostrum 
autem repudiandae veniam voluptatem natus vitae ratione 
blanditiis incidunt ipsam, eaque nulla necessitatibus 
tempore doloribus?

</p>
</div
>

<div className="rounded full bg-[#181818] w-[250px] h-[250px]" >
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Image
    src="/images/image.png"
    alt="my image"
    width={300}
    height={300}
  />
</div>

</div>


</div>

</section>
);
};



export default HeroSection;