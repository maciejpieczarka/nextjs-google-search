import Head from "next/head";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import Response from "../response";

const Search = ({ results }) => {
  const router = useRouter();

  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Googly</title>
        <meta
          name="description"
          content="Goggly - Next.js Google search engine clone"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      {/* Header */}
      <Header />

      {/* Results */}
      <SearchResults results={results}/>
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
