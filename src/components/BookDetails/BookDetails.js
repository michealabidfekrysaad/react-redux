import React from "react";
import "./BookDetails.css";

const BookDetails = ({ authors, imageLinks, description, previewLink }) => {
  return (
    //   ana kont 7atet el key hena w dah 3'alat
    // el mafrod yeb2a fe el parent ta7t el map ya stupid
    <section>
      <div
        className="bg-image"
        style={{
          backgroundImage: imageLinks ? `url(${imageLinks.thumbnail})` : `url(https://via.placeholder.com/150)`  ,
        }}
        
      />
      <div className="card">
        <a href={previewLink ? previewLink : "https://www.google.com"}>
          <div className="container">
            <h4 className="truncate">
              <b>{authors ? authors[0] : "no author"}</b>
            </h4>
            <p className="truncate">
              {description ? description : "it is very nice book"}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default BookDetails;
