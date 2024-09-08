import { useEffect, useState } from "react";
import { getAlbums } from "../../api";
import { AlbumItem } from "./AlbumItem";

export const AlbumList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAlbums().then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <div className="my-0 mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((album) => (
          <AlbumItem album={album} key={album.id} />
        ))}
      </div>
    </div>
  );
};
