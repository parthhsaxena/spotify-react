import { useNavigate } from "react-router-dom";

const FeaturedPlaylistCard = ({ info }) => {
  const { name, description, images, id } = info;
  const { url } = images[0];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/items", { state: { id: id } });
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-2xl m-2 p-2 w-48 shadow-md hover:bg-stone-200 cursor-pointer"
    >
      <img src={url} alt="album-art" className="rounded-2xl p-2" />
      <ul>
        <li className="font-semibold text-slate-800">{name}</li>
        <li className="text-sm text-slate-600 pt-2 line-clamp-3">
          {description}
        </li>
      </ul>
      {/* <button className="hover:bg-green-800 h-20 w-20" /> */}
    </div>
  );
};

export default FeaturedPlaylistCard;
