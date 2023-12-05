import { youthType } from "../../types";
import { useNavigate } from "react-router-dom";

interface YouthProps {
  youths: youthType[];
  selectedYouthId: (id: number) => void;
}

const Youths = ({ youths, selectedYouthId }: YouthProps) => {
  const navigate = useNavigate();

  function handleNameClick(youthId: number) {
    selectedYouthId(youthId);
    youthId && navigate(`/youths/${youthId}`);
  }

  return (
    <div>
      <ul>
        <h3>List of Youths</h3>
        {youths?.map((youth: youthType) => (
          <button
            key={youth.number}
            onClick={() => handleNameClick(youth.number)}
          >
            {youth.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Youths;
