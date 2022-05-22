import Link from "next/link";
import { Layout } from "./../components/Layout";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

const Users = (props) => {
  return (
    <Layout title={"users"}>
      <h1>Users</h1>
      <div>
        {props.movies.movies.map((v) => (
          <div key={v.id}>
            <Image
              loader={myLoader}
              src={v.files.poster_url}
              width={500}
              height={200}
              //   layout="fill"
              alt="photo"
            />
            <Link href={`/user/${v.id}`}>
              <a>
                <span>{v.id}</span> <span>{v.title}</span> <span>{v.year}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  console.log("users context: ", context);
  const page=context.query.page || 1;
  const res = await fetch(
    `https://api.itv.uz/api/content/main/2/list?page=${1}&user=a71651276800s055120e1a6ffaa1ec27`
  );
  const json = await res.json();

  return {
    props: {
      movies: json.data,
    },
  };
}

export default Users;
