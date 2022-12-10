import React from "react";
import { useState } from "react";

type Props = {
  id: string,
  semester: string,
  classes: string[]
}

const Collabsible = ({ id, semester, classes }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input id={"toggle" + id} type="checkbox" onChange={handleChange} />
      <p className="plusIcon">{isOpen ? "-" : "+"}</p>
      <label className="label" htmlFor={"toggle" + id}>
        {semester}
      </label>
      <div className="expand" style={isOpen ? { height: 150 } : { height: 0 }}>
        <section>
          <ul className="classList">
            {classes.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Collabsible;
