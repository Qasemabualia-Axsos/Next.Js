


const Comment = async () => {

   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
   const todo=await response.json()
      
    return (
        <>
            <h1>ADD your Comment</h1>
            <h2>to{todo.title}</h2>
        </>
    )
}


export default Comment