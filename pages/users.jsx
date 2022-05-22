import Link from "next/link";
import { Layout } from "./../components/Layout";

const Users = (props) => {
    console.log("json users: ",props.posts)
  return (
    <Layout title={"users"}>
      <h1>Users</h1>
      <ul>
          {props.posts.map(v=>(
              <li key={v.id}>
                <Link href={`/user/${v.id}`}>
                   <a><span>{v.id}</span> <span>{v.name}</span>  <span>{v.username}</span></a>
                </Link>
              </li>
          ))}
      </ul>
    </Layout>
  );
};



export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }


export default Users;
