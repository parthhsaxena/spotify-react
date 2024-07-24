import { useNavigate } from "react-router-dom";

const SearchedPlaylistCard = ({ info }) => {
  const { name, images, id } = info;
  const { url } = images[0];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/items", { state: { id: id } });
  };

  return (
    <div
      onClick={handleClick}
      className="m-2 p-2 w-48 shadow-md hover:bg-slate-200 cursor-pointer"
    >
      <img src={url} />
      <ul>
        <li className="font-semibold text-slate-800">{name}</li>
      </ul>
    </div>
  );
};

export default SearchedPlaylistCard;
