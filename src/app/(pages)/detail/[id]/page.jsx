import { getProductById } from "@/app/actions/service/productApi";
import Image from "next/image";
import React from "react";

const Detail = async (props) => {
  //props param của server component
  const { params } = props;
  const data = await getProductById(params.id);
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Image
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
            crossOrigin="anonymous"
            src={data.image}
            alt={data.alias}
            className="w-100"
          />
        </div>
        <div className="col-md-8">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
