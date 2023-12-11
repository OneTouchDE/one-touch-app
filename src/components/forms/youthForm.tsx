// import { E164Number } from "libphonenumber-js/core";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-number-input/input";

export function YouthInfoForm() {
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const [phoneSameAsWhatsApp, setphoneSameAsWhatsApp] =
    useState<boolean>(false);
  const [whatsAppNumber, setWhatsappNumber] = useState<number>(0);
  const navigate = useNavigate();

  function handleWhatsAppCheckboxChange() {
    setphoneSameAsWhatsApp(!phoneSameAsWhatsApp);

    if (!phoneSameAsWhatsApp) {
      setWhatsappNumber(phoneNumber);
    } else {
      setWhatsappNumber(whatsAppNumber);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    console.log(event);

    event.preventDefault();
    const formElement = event.currentTarget;
    const formDate = new FormData(formElement);
    const youthData = Object.fromEntries(formDate);
    console.log("New Youth", youthData);
  }

  return (
    <div>
      <h3>Add Youth</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" required />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" required />
        <label htmlFor="email">Email id</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" name="birthdate" id="birthdate" required />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          placeholder="Enter phone number"
          type="number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          name="phoneNumber"
          id="phoneNumber"
          required
        />
        <label>
          WhatsApp Same as Phone Number
          <input
            type="checkbox"
            checked={phoneSameAsWhatsApp}
            onChange={handleWhatsAppCheckboxChange}
          />
        </label>

        {phoneSameAsWhatsApp && (
          <>
            <label htmlFor="whatsAppNumber">WhatsApp Number</label>
            <input
              type="number"
              value={whatsAppNumber}
              onChange={(event) => setWhatsappNumber(event.target.value)}
              name="whatsAppNumber"
              id="whatsAppNumber"
            />
          </>
        )}

        <label htmlFor="cityInGermany">From Which city in Germany</label>
        <input type="text" name="cityInGermany" id="cityInGermany" required />
        <label htmlFor="cityInIndia">From Which city in India</label>
        <input type="text" name="cityInIndia" id="cityInIndia" required />
        <label htmlFor="educationInGermany">Work/Education in Germany</label>
        <input
          type="text"
          name="educationInGermany"
          id="educationInGermany"
          required
        />
        <label htmlFor="sabhaType">Reference Name: </label>
        <input
          type="text"
          name="refNameforSabha"
          id="refNameforSabha"
          required
        />
        <p>Which Sabha do you attend</p>
        <input type="radio" id="thursday" name="sabhaType" value="Thursday" />
        <label htmlFor="thursday">Thursday</label>
        <br />
        <input type="radio" id="friday" name="sabhaType" value="Friday" />
        <label htmlFor="friday">Friday</label>
        <br />
        <input
          type="radio"
          id="thursdayAndFriday"
          name="sabhaType"
          value="Thursday and Friday"
        />
        <label htmlFor="thursdayAndFriday">Thursday and Friday</label>

        <label htmlFor="imgSrc">Image URL</label>
        <input
          type="text"
          name="imageSrc"
          id="imageSrc"
          placeholder="Enter URL starts with https"
        />
        <div>
          <button type="button" onClick={() => navigate("/youths")}>
            Close
          </button>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}
