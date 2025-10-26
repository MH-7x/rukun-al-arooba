
type Blog  = {
  id: string,
  title: string,
  body: string,
  tags: [string],
  

}

const BLOG_API_URI = "https://dummyjson.com/posts?limit=6&skip=10&select=id,title,body,tags,views";

export async function getData():Promise< Blog[] | {success : boolean, errorMsg : string} > {
    try {
       

        const res = await fetch(BLOG_API_URI, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(!res.ok){
            throw new Error('Failed to fetch blog data');
        }
        const data = await res.json();
        return data.posts as Blog[];

    }
    catch (error) {
        return {success : false, errorMsg : error instanceof Error ? error.message : 'Unknown Error Occurred!!'}
    }
}