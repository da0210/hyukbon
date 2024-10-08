import React from "react";
import Image from "next/image";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-32 max-w-[384px] md:w-[712px] lg:w-[802px]  md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">HIERACHY</h1>
      <div className="text-14 md:text-18 pt-4">
        <p>
          갇혀 있는 조직이 아닌 구성원과의 소통, 다양한 협력을 통해
          <br />
          유기적 시스템으로 효율성을 극대화합니다.
        </p>
      </div>
      <div className="pt-12">
        <Image
          src="/계급도.png"
          alt="계급도"
          width={1316}
          height={1300}
          className="w-4/5 mx-auto"
        />
      </div>
    </article>
  );
}

export default Page;
