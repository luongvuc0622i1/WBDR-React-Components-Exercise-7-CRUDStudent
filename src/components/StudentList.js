import './StudentList.css'

function StudentList(props) {
    let count=0;
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {props.students.map(student => (
                <tr>
                    <td>{count=count+1}</td>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td></td>
                </tr>
            ))}
        </table>
    );
}

export default StudentList;