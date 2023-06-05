import './StudentList.css'

function StudentList(props) {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {props.students.map(student => (
                <tr>
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