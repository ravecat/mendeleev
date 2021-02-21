import { withRouteContext } from "app/routing";
import { Aside as AsideView, AsideProps } from "components/Aside";

export const Aside = withRouteContext<AsideProps>(AsideView);
