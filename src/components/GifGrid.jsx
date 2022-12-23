import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h1 className="m-3">{category}</h1>
      {isLoading && <h2>Cargando...</h2>}
      <div className="row justify-content-center">
        {images.map((images) => (
          <GifItem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};
