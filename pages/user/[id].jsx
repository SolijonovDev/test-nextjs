import { Layout } from "../../components/Layout"
import { useRouter } from "next/dist/client/router"


export const User=()=>{
    const router=useRouter()
    return <Layout title={"user"}>
        <div>
            <h1>User id: {router.query.id}</h1>
        </div>
    </Layout>
}

export default User;