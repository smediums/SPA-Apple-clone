import React, { useState } from "react";


function AccordionItem({ heading, listItems }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className={`footerLinks ${expand && "expand"}`}>
      <summary
        className={`summary ${heading}`}
        onClick={() => setExpand(!expand)}
      >
        {heading}
        <span className="plus">+</span>
      </summary>

      <div className="sublinks">
        {listItems.map((item) => (
          <li key={item} className="sublink">
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}

export default AccordionItem;
