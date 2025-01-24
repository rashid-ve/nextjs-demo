import { ImageSlider } from "../components/ImageSlider";
import { serverSideFunction } from "../utils/server-utils";

export default function ServerPage() {
  const result = serverSideFunction();
  return (
    <>
      <h1>At Server {result}</h1>
      <ImageSlider />
    </>
  );
}
