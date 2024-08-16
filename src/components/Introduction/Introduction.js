import React from "react";

export const Introduction = ({ intro }) => {
  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.nodeType) {
        case 'heading-1':
          return <h1 key={index}>{block.content[0].value}</h1>;
        case 'paragraph':
          return <p key={index}>{block.content[0].value}</p>;
        default:
          return null;
      }
    });
  };

  return <div>{renderContent(intro.json.content)}</div>;
};
