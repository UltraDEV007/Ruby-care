import { useState } from "react";

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
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
        props.handleCreate(formData);
      }}
    >
      <h3>Create Insight</h3>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Body:
        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
