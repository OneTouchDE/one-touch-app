import { youthType } from "../../types";
import { useNavigate } from "react-router-dom";

interface SingleYouthProp {
  youth: youthType;
}

const Youth = ({ youth }: SingleYouthProp) => {
  const { name, number } = youth;
  const navigate = useNavigate();

  return (
    <div>
      <p>Name: {name}</p>
      <p>Contact Detail {number}</p>
      <button
        type="button"
        onClick={() => navigate("/youths", { replace: true })}
      >
        Back
      </button>
      <button type="button">X</button>
      <button type="button">Edit</button>
    </div>
  );
};

export default Youth;
