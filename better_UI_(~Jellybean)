import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table } from "@/components/ui/table";
import { Trash2, Edit } from "lucide-react";

export default function StudentManagement() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", age: 20, course: "Computer Science" },
    { id: 2, name: "Jane Smith", age: 22, course: "Mathematics" },
  ]);
  const [formData, setFormData] = useState({ id: null, name: "", age: "", course: "" });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setStudents(
        students.map((student) => (student.id === formData.id ? formData : student))
      );
      setEditing(false);
    } else {
      setStudents([...students, { ...formData, id: students.length + 1 }]);
    }
    setFormData({ id: null, name: "", age: "", course: "" });
  };

  const handleEdit = (student) => {
    setFormData(student);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Management System</h1>
      <Card className="mb-6">
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
            <Input placeholder="Age" name="age" value={formData.age} onChange={handleChange} required />
            <Input placeholder="Course" name="course" value={formData.course} onChange={handleChange} required />
            <Button type="submit">{editing ? "Update" : "Add"} Student</Button>
          </form>
        </CardContent>
      </Card>
      <Table>
        <thead>
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Age</th>
            <th className="text-left p-2">Course</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.age}</td>
              <td className="p-2">{student.course}</td>
              <td className="p-2 flex gap-2">
                <Button variant="outline" onClick={() => handleEdit(student)}>
                  <Edit size={16} />
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(student.id)}>
                  <Trash2 size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
