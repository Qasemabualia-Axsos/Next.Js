type Props = {
  params: {
    title: string
  }
}



const PostTitle = ({ params }: Props) => {
  return (
    <>
      <h1>Show title</h1>
      <h1>{params.title}</h1>
    </>
  )
}

export default PostTitle