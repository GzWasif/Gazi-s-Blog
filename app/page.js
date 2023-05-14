import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="dark:text-white mt-12 mb-12 text-3xl text-center ">
        Hello and Welcome. &nbsp;
        <span className="whitespace-nowrap">
          I am <sapn className="font-bold">Gazi Wasif Akram</sapn>
        </span>
      </p>
      <Posts />
    </main>
  );
}
