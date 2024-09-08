import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useStores } from "../../lib/useStores";
import { useState, useEffect } from "react";
import { getImagesByAlbum } from "../../api";

export const AlbumItem = observer(({ album }) => {
  const [length, setLength] = useState(0);
  useEffect(() => {
    getImagesByAlbum(album.id).then((res) => {
      console.log(album, res.data);
      setLength(res.data.length);
    });
  }, []);
  const { gallery } = useStores();
  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={`http://127.0.0.1:8055/assets/${album.url}`}
          alt={album.title}
          className="h-48 w-full object-cover object-center rounded-lg"
        />
      </div>
      <Link
        to={`/album/${album.id}`}
        onClick={() => gallery.setTitle(album.title)}
        className="mt-4 text-sm text-sky-700"
      >
        {album.title}
      </Link>
      <h3 className="text-sm text-green-700">{length} фото</h3>
    </div>
  );
});
