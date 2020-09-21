import React from "react";

function Form(props) {
  const { change, submit, edit, teamMembers, memberToEdit, formValues } = props;

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
          <select name="role" value={formValues.role} onChange={change}>
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
            <div className="team-member-container">
              <p>Name: {teamMember.name}</p>
              <p>Email: {teamMember.email}</p>
              <p>Role: {teamMember.role}</p>
              <button onClick={edit}>Edit</button>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Form;
