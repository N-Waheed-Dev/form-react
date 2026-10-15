import { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const isFormComplete =
    formData.name.trim() !== "" && formData.email.trim() !== "" && formData.phone.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <main className="form-container">
      <div className="card">
        <div className="sidebar">
          <div className="step active">
            <div className="circle">1</div>
            <div className="step-text">
              <span>STEP 1</span>
              <h3>YOUR INFO</h3>
            </div>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <div className="step-text">
              <span>STEP 2</span>
              <h3>SELECT PLAN</h3>
            </div>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <div className="step-text">
              <span>STEP 3</span>
              <h3>ADD-ONS</h3>
            </div>
          </div>

          <div className="step">
            <div className="circle">4</div>
            <div className="step-text">
              <span>STEP 4</span>
              <h3>SUMMARY</h3>
            </div>
          </div>
        </div>

      
        <div className="content">
          <form onSubmit={handleSubmit}>
            <h1>Personal info</h1>
            <p className="description"> Please provide your name, email address, and phone number. </p>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Nada Waheed"
              />
            </div>

            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. stephenking@gmail.com"
              />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
              />
            </div>

            <div className="actions">
              {isFormComplete && ( <button type="submit" className="next-btn"> Next Step </button> )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Form;