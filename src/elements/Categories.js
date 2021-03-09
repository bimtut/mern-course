import React from "react";

import Button from "components/button";

export default function Categories({ data }) {
  // {data} adalah destructuring dari props.data. Dengan begitu hanya perlu memanggil {data} saja untuk dapat data-nya. Tidak perlu utuh seperti props.data
  return data.map((category, index1) => {
    // category punya properties _id, name dan items. Semuanya bisa dicek di landingPage.json file
    return (
      <section className="container" key={`category-${index1}`}>
        {/* ini headernya */}
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>

        {/* ini card itemsnya */}
        {/* inget, class container-grid udah pernah dibikin stylingnya */}
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                <h1>There is no property in this Category</h1>
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-items-${index2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        className="img-cover"
                        src={item.imageUrl}
                        alt={item.name}
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link display-block text-gray-800"
                        href={`/properties/${item._id}`}
                        type="link"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
