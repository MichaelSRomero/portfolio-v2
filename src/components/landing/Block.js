import * as React from "react";

const Block = ({ amount, background }) => {
  const generateX = () => {
    const blocks = [];
    for (let i = 0; i < amount; i++) {
      blocks.push(<div style={{backgroundColor: background}}>test</div>)
    }

    return blocks;
  }

  return (
    <div className="is-flex">
      {generateX()}
    </div>
  );
};

export default Block;