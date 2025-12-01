export default function Todo({todo}) {
    const {title,completed,userId,id} = todo;

  return (
    <>
    <div className="task">
        <h3>UserId: {userId}</h3>
        <h3>Id: {id}</h3>
        <h2>Task: {title}</h2>
        { completed===true ?(`Task is Completed`):(`Task pendind...`)}
    </div>
    </>
  )
}
