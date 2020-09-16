import React, { useState } from "react";
import Form from "./Form";
import "../App.css";

const teamList = [
  { name: "Randi", email: "randi@gmail.com", role: "UX/UI Designer" },
  { name: "Carolina", email: "carolina@gmail.com", role: "Frontend Engineer" },
  { name: "Hector", email: "hector@gmail.com", role: "Backend Engineer" },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [memberToEdit, setMemberToEdit] = useState();
  const [teamMembers, setTeamMembers] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    setTeamMembers([...teamMembers, newTeamMember]);
    setFormValues(initialFormValues);
  };

  const edit = (evt) => {
    evt.preventDefault();
  };

  return (
    <Form
      change={change}
      submit={submit}
      edit={edit}
      teamMembers={teamMembers}
      memberToEdit={memberToEdit}
      formValues={formValues}
    />
  );
}

export default App;
