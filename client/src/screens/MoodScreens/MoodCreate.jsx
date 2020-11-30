import { useState } from "react";

export default function MoodCreate({ handleCreate }) {
  const [formData, setFormData] = useState({
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Mood</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.status}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
