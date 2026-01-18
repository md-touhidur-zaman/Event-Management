import Image from "next/image";
import member1 from "../../../../public/assets/images/member_1.jpg";
import member2 from "../../../../public/assets/images/member_2.jpg";
import member3 from "../../../../public/assets/images/member_3.jpg";
import member4 from "../../../../public/assets/images/member_4.jpg";

export default function Team() {
  return (
    <div className="space-y-20">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Meet The Team</h1>
        <p className="text-muted-foreground">
          The passionate individuals working behind the scenes to make it all
          possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="rounded-lg border shadow-lg">
          <div className="relative w-full h-72 ">
            <Image
              className="p-5"
              src={member1}
              alt="CEO"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-5">
            <h1 className="font-bold text-lg">Sarah Chen</h1>
            <p className="text-[#DC143C]">CEO & Founder</p>
          </div>
        </div>

        <div className="rounded-lg border shadow-lg">
          <div className="relative w-full h-72 ">
            <Image
              className="p-5"
              src={member2}
              alt="Head of Product"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-5">
            <h1 className="font-bold text-lg">Marcus Rodriguez</h1>
            <p className="text-[#DC143C]">Head of Product</p>
          </div>
        </div>
        <div className="rounded-lg border shadow-lg">
          <div className="relative w-full h-72 ">
            <Image
              className="p-5"
              src={member3}
              alt="Community Lead"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-5">
            <h1 className="font-bold text-lg">Emily Watson</h1>
            <p className="text-[#DC143C]">Community Lead</p>
          </div>
        </div>
        <div className="rounded-lg border shadow-lg">
          <div className="relative w-full h-72 ">
            <Image
              className="p-5"
              src={member4}
              alt="Lead Engineer"
              quality={100}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-5">
            <h1 className="font-bold text-lg">David Kim</h1>
            <p className="text-[#DC143C]">Lead Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
