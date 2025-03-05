import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table } from "@/components/ui/table";
import { Trash2, Edit, PlusCircle } from "lucide-react";

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
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">Student Management System</h1>
      <Card className="shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle>{editing ? "Edit Student" : "Add New Student"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Name" name="name" value={formData.name} onChange={handleChange} required className="p-2 border rounded-lg" />
            <Input placeholder="Age" name="age" type="number" value={formData.age} onChange={handleChange} required className="p-2 border rounded-lg" />
            <Input placeholder="Course" name="course" value={formData.course} onChange={handleChange} required className="p-2 border rounded-lg" />
            <Button type="submit" className="col-span-full flex items-center justify-center gap-2 text-lg py-2">
              <PlusCircle size={20} /> {editing ? "Update" : "Add"} Student
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle>Student List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Age</th>
                <th className="text-left p-3">Course</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.age}</td>
                  <td className="p-3">{student.course}</td>
                  <td className="p-3 flex gap-2">
                    <Button variant="outline" className="hover:bg-yellow-100" onClick={() => handleEdit(student)}>
                      <Edit size={16} />
                    </Button>
                    <Button variant="destructive" className="hover:bg-red-100" onClick={() => handleDelete(student.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
