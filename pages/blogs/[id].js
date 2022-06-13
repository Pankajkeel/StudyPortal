import { getBlogDetail } from '@/actions/index.js';
import BlogsDetails from '@/components/BlogsDetailsView';
import { getServerCookie } from '@/helpers/utils.js';

const BlogsDet = ({data, pathUrl})=>{
    return(
        <BlogsDetails blogData={data} pathUrl={pathUrl}/>
    )
}

export async function getServerSideProps(context) {
    const id = context?.params?.id??'';
    const isBlogCustomUrl = id.includes('-blogInfo');
    let customBlogId;
    if(isBlogCustomUrl){
        const cookieInfo = context?.req?.headers?.cookie;
        let blogData = getServerCookie('blogData', cookieInfo);

        try{
            blogData= JSON.parse(blogData);
            if(blogData && blogData[id.toString()]){
                customBlogId = blogData[id.toString()];
            }
        }catch{

        }

    }

    const resp = await getBlogDetail({id: customBlogId||id})
    
    if(resp?.data?.[0]){
        return {
            props:{
                data: resp.data[0],
                pathUrl: id
            } 
        }
    }
    return {
        props: {
            data: {},
            pathUrl: id
        }
    }
}


export default BlogsDet;