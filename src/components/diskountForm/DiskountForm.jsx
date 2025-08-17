import React, { useState } from "react";
import "./DiskountForm.scss";
import banner from "../../assets/DiscountBanner.png";

const initialForm = { name: "", phone: "", email: "" };

export default function DiscountForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Discount form:", form);
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section className="discount">
      <div className="discount__inner">
        <h2 className="discount__title">5% off on the first order</h2>

        <div className="discount__content">
          
            <img className="discount__image" src={banner} alt="First order discount" />
        

          <form className="discount__form" onSubmit={onSubmit}>
            <label className="discount__label">
              <input
                className="discount__input"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>

            <label className="discount__label">
              <input
                className="discount__input"
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={onChange}
                required
              />
            </label>

            <label className="discount__label">
              <input
                className="discount__input"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>

            <button className="discount__btn" type="submit">Get a discount</button>
           
          </form>
        </div>
      </div>
    </section>
  );
}