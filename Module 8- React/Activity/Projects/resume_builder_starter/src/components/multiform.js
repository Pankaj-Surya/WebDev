// error coz of string
// const obj = {
//   FIRNAME: "first_name",
//   LASNAME: "last_name",
//   EMAIL: "email",
//   PHONE_NUM: "ph_num",

// }
export function Form() {
  // we need ot create an object
  const [contacts, setContact] = React.useState({
  });

  function getValue(key) {
    if (contacts[key]) {
      return contacts[key];
    } else {
      return "";
    }
  }
  function setValue(e) {
    let value = e.target.value;
    let key = e.target.name;
    setContact({ ...contacts, [key]: value })
  }
  return (
    <div>

      <h2>First Name</h2>
      <input type="text" value={getValue("first_name")}
        name={"first_name"}
        onChange={setValue}
      ></input>

      <h2>
        Last Name
      </h2>
      <input type="text"
        value={getValue("last_name")}
        name={"last_name"}
        onChange={setValue}
      ></input>

      <h2>
        Email
      </h2>
      <input type="text"
        value={getValue("email")}
        name={"email"}
        onChange={setValue}
      ></input>
      <h2>
        Phone
      </h2>
      <input type="text"
        name="phone" value={getValue("phone")}
        onChange={setValue}

      ></input>
    </div>
  )
}

