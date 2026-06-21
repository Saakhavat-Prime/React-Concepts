import { useState } from "react";

export default function CommentForm() {
    let [formData, setFormData] = useState({
        name: "",
        comment: "",
        rate: 5
    });
    let handleInputChange = (event) => {
        return setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        });
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }
  return (
    <form className="comment-form">
      <h2>Leave a Comment</h2>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} name="name"/>
      <br /> < br/>

      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comment here..."
        value={formData.comment}
        onChange={handleInputChange}
        name="comment"
      ></textarea>
      <br /> < br/>

      <label htmlFor="rate">rating:</label>
      <input type="number" id="rate" name="rate" min="1" max="5" value={formData.rate} onChange={handleInputChange} name="rate"/>
      <br /> < br/>

      <button type="submit" onClick={handleSubmit}>
        Add Comment
      </button>
    </form>
  );
}
