
const CategoryTable = ({ data }) => {
    return (
        <table className="table table-zebra">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>Category Name</th>
                    <th>Delete</th>
                    {/* <th>Edit</th> */}
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                    <tr tabindex="0" key={item.id} className="h-16 rounded border border-gray-100 focus:outline-none">
                        <td className="">
                            <div className="flex items-center pl-5">
                                <p className="mr-2 text-base font-medium leading-none">{item.id}</p>
                            </div>
                        </td>
                        <td className="">
                            <div className="flex items-center pl-5">
                                <p className="mr-2 text-base font-medium leading-none">{item.name}</p>
                            </div>
                        </td>
                        {/* <td className="pl-4">
                      <DeleteBlock path="Category" id={item._id} />
                    </td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CategoryTable