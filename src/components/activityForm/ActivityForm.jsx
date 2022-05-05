import React from "react";

const ActivityForm = () => {
  return (
    <div>
      <form>
        <div className="customer">
          <label htmlFor="customer">לקוח</label>
          <input type="text" name="customer" id="customer" />
        </div>

        <div className="starting-point">
          <label htmlFor="starting-point">מוצא</label>
          <input type="text" name="starting-point" id="starting-point" />
        </div>

        <div className="time">
          <label htmlFor="time">בשעה</label>
          <input type="time" name="time" id="time" />
        </div>

        <div className="end-point">
          <label htmlFor="end-point">יעד</label>
          <input type="text" name="end-point" id="end-point" />
        </div>

        <div className="crane-type">
          <label htmlFor="crane-type">לקוח</label>
          <input type="text" name="crane-type" id="crane-type" />
        </div>

        <div className="department-number">
          <label htmlFor="department-number">מספר מחלקה</label>
          <input type="text" name="department-number" id="department-number" />
        </div>

        <div className="order-number">
          <label htmlFor="order-number">מספר הזמנה</label>
          <input type="text" name="order-number" id="order-number" />
        </div>

        <div className="contact-1">
          <label htmlFor="contact-1">מספר מחלקה</label>
          <input type="text" name="contact-1" id="contact-1" />
        </div>

        <div className="contact-2">
          <label htmlFor="contact-2">מספר מחלקה</label>
          <input type="text" name="contact-2" id="contact-2" />
        </div>
      </form>
    </div>
  );
};

export default ActivityForm;
