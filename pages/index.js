import Head from "next/head";
import Image from "next/image";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  //Search functionality
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Goggly - Next.js Search Engine</title>
        <meta
          name="description"
          content="Goggly - Google search engine clone"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      {/* HEADER */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* LEFT */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* RIGHT */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* ICON */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* AVATAR */}
          <Avatar url="https://avatars.githubusercontent.com/u/63975664?v=4" />
        </div>
      </header>

      {/* BODY */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="focus:outline-none flex-grow"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
