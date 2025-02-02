import React, { useRef } from "react";

const ExampleComponent = () => {
  const divRef = useRef<HTMLDivElement>(null);

  return <div ref={divRef}>ExampleComponent</div>;
};

export default ExampleComponent;
