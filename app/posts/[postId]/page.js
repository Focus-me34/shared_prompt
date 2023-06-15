export async function generateMetadata({ params, searchParams }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const post = await response.json()

  return {
    title: post.title,
    description: post.body,
    keywords: post.title.split(' '),
    post
  }
}

const page = async ({params}) => {
  // const { postId } = params;
  const { post } = await generateMetadata({params});
  console.log("post", post);


  return (
    <div>
      <p>PortId: {post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default page
