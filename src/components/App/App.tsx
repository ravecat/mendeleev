import { useAction } from "@reatom/react";
import React, { useEffect } from "react";

import { fetchElements } from "app/store/element";
import { Aside } from "connections/Aside";

export const App = function (): JSX.Element {
  const getElements = useAction(fetchElements);

  useEffect(() => {
    getElements();
  }, []);

  return (
    <>
      <Aside />
    </>
  );
};
