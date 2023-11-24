const Table = () => {
  // State to hold editable data
  const [data, setData] = React.useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    // Add more data as needed
  ]);

  // Function to handle data editing
  const handleEdit = (id, field, value) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td
              contentEditable
              onBlur={(e) => handleEdit(item.id, "name", e.target.innerText)}
            >
              {item.name}
            </td>
            <td
              contentEditable
              onBlur={(e) => handleEdit(item.id, "age", e.target.innerText)}
            >
              {item.age}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
