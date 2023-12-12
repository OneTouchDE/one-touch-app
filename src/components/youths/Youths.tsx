import { youthType } from "../../types";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

interface YouthProps {
  youths: youthType[];
  selectedYouthId: (id: number) => void;
}

const Youths = ({ youths, selectedYouthId }: YouthProps) => {
  console.log("youths are", youths);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  function handleNameClick(youthId: number) {
    selectedYouthId(youthId);
    youthId && navigate(`/youths/${youthId}`);
    5;
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function handleClear() {
    setSearchQuery("");
  }
  const searchedYouths: youthType[] = youths?.filter((youth: youthType) => {
    const fullNameString =
      youth.firstName.toLowerCase() + youth.lastName.toLowerCase();
    return fullNameString.includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="🔎    Search "
          value={searchQuery}
          onChange={(event) => handleSearch(event)}
        />
        {searchQuery && <button onClick={handleClear}>X</button>}
      </div>
      <p>Total: {youths.length}</p>
      <h3>Youths</h3>

      {searchedYouths.length > 0 ? (
        searchedYouths?.map((youth: youthType) => (
          <button
            key={youth.youthId}
            onClick={() => handleNameClick(youth.youthId)}
          >
            {`${youth.firstName} ${youth.lastName}`}
          </button>
        ))
      ) : (
        <p>{searchQuery} Youth Not Found</p>
      )}

      <button onClick={() => navigate(`/youths/create`)}>Add Youth</button>
    </div>
  );
};

export default Youths;
