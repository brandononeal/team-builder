import React, { useState } from "react";

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

function Form() {
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

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <form onSubmit={submit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formValues.name}
            onChange={change}
          />
        </label>
        <br />

        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={change}
          />
        </label>
        <br />

        <label>
          Role:{" "}
          <select name="role" onChange={change}>
            <option value="">--- select role ---</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
          </select>
        </label>
        <br />

        <button
          disabled={!formValues.name || !formValues.email || !formValues.role}
        >
          Submit
        </button>
        {teamMembers.map((teamMember) => {
          return (
            <div>
              <br />
              Name: {teamMember.name}
              <br />
              Email: {teamMember.email}
              <br />
              Role: {teamMember.role}
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Form;
