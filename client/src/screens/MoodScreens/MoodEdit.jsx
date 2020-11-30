import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MoodEdit(props) {
  const [formData, setFormData] = useState({
    status: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const moodItem = props.moods.find(mood => mood.id === Number(id));
      setFormData({
        name: moodItem.name
      })
    }
    if (props.moods.length){
      prefillForm();
    }
  }, [props.moods])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id, formData);
    }}>
      <h3>Edit Food</h3>
      <label>Status
        <input
          type='text'
          name='name'
          value={formData.status}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
