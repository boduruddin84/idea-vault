

const DisplayComments = () => {
  return (
    <div>
        {
  comments.map((comment) => (
    <div
      key={comment._id}
      className="rounded-xl border p-4"
    >
      <div className="flex justify-between">
        <h4 className="font-semibold">
          {comment.userName}
        </h4>

        <span className="text-sm text-gray-500">
          {new Date(
            comment.createdAt
          ).toLocaleString()}
        </span>
      </div>

      <p className="mt-2">
        {comment.comment}
      </p>

      {session?.user?.email ===
        comment.userEmail && (
        <div className="mt-3 flex gap-3">
          <button
            className="text-blue-600"
          >
            Edit
          </button>

          <button
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  ))
}
    </div>
  )
}

export default DisplayComments