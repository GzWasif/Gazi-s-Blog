import Image from "next/image";
import ProfilePic from "@/public/images/batman.jpg";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto ">
      <Image
        src={ProfilePic}
        width={200}
        height={200}
        alt="batman"
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        priority={true}
      />
    </section>
  );
}
