type TableComponentProps = {
  data: {
    no: number;
    id: number;
    name: string;
    birthday: string;
    age: number;
  }[];
};

const TableComponent = ({ data }: TableComponentProps) => {
  return (
    <table className="border m-3">
      <thead className="border px-5 py-2">
        <tr>
          <th className="border px-5 py-2">No</th>
          <th className="border px-5 py-2">Id</th>
          <th className="border px-5 py-2">Name</th>
          <th className="border px-5 py-2">Birthday</th>
          <th className="border px-5 py-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td className="border px-5 py-2">{index + 1}</td>
              <td className="border px-5 py-2">{item.id}</td>
              <td className="border px-5 py-2">{item.name}</td>
              <td className="border px-5 py-2">{item.birthday}</td>
              <td className="border px-5 py-2">{item.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
