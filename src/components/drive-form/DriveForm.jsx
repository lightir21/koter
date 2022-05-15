import React from "react";
import "./DriveForm.scss";

const DriveForm = () => {
  return (
    <form className="form">
      <div className="form__input-box">
        <label className="form__label" htmlFor="customer">
          לקוח:
        </label>
        <input
          type="text"
          className="form__input"
          name="customer"
          id="customer"
        />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="starting-point">
          מוצא:
        </label>
        <input
          type="text"
          className="form__input"
          name="starting-point"
          id="starting-point"
        />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="time">
          שעת התיצבות:
        </label>
        <input type="text" className="form__input" name="time" id="time" />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="destination">
          יעד:
        </label>
        <input
          type="text"
          className="form__input"
          name="destination"
          id="destination"
        />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="crane">
          סוג מנוף:
        </label>
        <input type="text" className="form__input" name="crane" id="crane" />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="devision">
          מ'ס מחלקה
        </label>
        <input
          type="text"
          className="form__input"
          name="devision"
          id="devision"
        />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="invitation">
          מ'ס הזמנה
        </label>
        <input
          type="text"
          className="form__input"
          name="invitation"
          id="invitation"
        />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="contact-1">
          איש קשר - 1
        </label>
        <input
          type="tel"
          className="form__input"
          name="contact-1"
          id="contact-1"
        />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="customer">
          איש קשר - 2
        </label>
        <input
          type="tel"
          className="form__input"
          name="contact-2"
          id="contact-2"
        />
      </div>
      <div className="form__input-box">
        <label className="form__label" htmlFor="other">
          הערות
        </label>
        <input type="text" className="form__input" name="other" id="other" />
      </div>
      <button>אשר</button>
    </form>
  );
};

export default DriveForm;
