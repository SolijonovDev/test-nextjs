import Link from "next/link";
import { Layout } from "./../../components/Layout";

const Blog = ({ data }) => {
  return (
    <Layout title={"Blog page"}>
      <ul>
        <li>
          <span>Id: {data.id}</span> , Title: <span>{data.title}</span>
        </li>
      </ul>
    </Layout>
  );
};

export async function getServerSideProps({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id || 1}`);
  const json = await res.json();

  return {
    props: {
      data: json,
    },
  };
}

export default Blog;
