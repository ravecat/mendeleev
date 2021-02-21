import { useRoute } from "react-router5";

import { Routes } from "app/routing";
import { Article } from "connections/Article";
import {
  Aside,
  Detail,
  Elements,
  Home,
  NotFound,
  Properties,
} from "connections/chunk";

export const App = function (): JSX.Element {
  const { route } = useRoute();

  return (
    <>
      <Aside />
      <Article>
        {
          {
            [Routes.Home]: <Home />,
            [Routes.Properties]: <Properties />,
            [Routes.Property]: <Properties />,
            [Routes.Elements]: <Elements />,
            [Routes.Element]: <Detail />,
            [Routes.NotFound]: <NotFound />,
          }[route.name]
        }
      </Article>
    </>
  );
};
