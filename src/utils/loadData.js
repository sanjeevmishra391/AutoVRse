// import images
import Porsche911_img from "../assets/porsche911.png";
import PorscheTransformed_img from "../assets/porsch_transformed.png";
import Duck_img from "../assets/duck.png";
import Dragon_img from "../assets/dragon.png";
import Suzi_img from "../assets/suzi.png";

// import glb files
import Porsche911 from "../assets/911-transformed.glb";
import PorscheTransformed from "../assets/porsche-transformed.glb";

const models = [
  {
    id: 0,
    data: {
      title: "Porsche Transformed",
      description: "This is porsche transformed",
      component: PorscheTransformed,
      image_path: PorscheTransformed_img,
    },
  },
  {
    id: 1,
    data: {
      title: "Dragon",
      description: "This is dragon",
      component:
        "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf",
      image_path: Dragon_img,
    },
  },
  {
    id: 2,
    data: {
      title: "Porsche 911",
      description: "This is porsche",
      component: Porsche911,
      image_path: Porsche911_img,
    },
  },
  {
    id: 3,
    data: {
      title: "Duck",
      description: "This is duck",
      component:
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf",
      image_path: Duck_img,
    },
  },
  {
    id: 4,
    data: {
      title: "Suzi",
      description: "This is suzi",
      component:
        "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/suzanne-high-poly/model.gltf",
      image_path: Suzi_img,
    },
  },
];

export default models;
