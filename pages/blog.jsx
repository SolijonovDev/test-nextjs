import Link from 'next/link'
import { Layout } from './../components/Layout';
import { withRouter } from 'next/router'

const Blog=(props)=>{
    return <Layout title={"Blog page"}>
      <ul>
          {
              props.data.map(v=>(
                  <li key={v.id}>
                    <Link href={`/blog/${v.id}`}>
                    <a>
                    <span>{v.id}</span> : <span>{v.title}</span>
                    </a>
                    </Link>
                  </li>
              ))
          }
      </ul>
    </Layout>
}


export async function getServerSideProps() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const json = await res.json();
  
    return {
      props: {
         data:json
      },
    };
  }
  

export default withRouter(Blog);