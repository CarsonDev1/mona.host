import Image from "next/image";
import useAddClassActive from "@/hooks/useAddClassActive";

import "./Arrow.scss";

function Arrow() {
  useAddClassActive('.add-active-js', {
    rootMargin: '-50px -50px -50px -50px',
    threshold: [0, 0.25, 0.75, 1]
  })

  return ( 
    <div className="arrow-down-wrapper add-active-js">
      <div className="arrow-down-ani">
        <Image
          src="arrow-down-ani.svg"
          width={296}
          height={40}
          alt="infrastructure"
        />
      </div>
    </div>
  );
}

export default Arrow;