import { Title } from "components/Title";
import { Table } from "connections/Table";

export const Home = function (): JSX.Element {
  return (
    <>
      <Title label="Periodic table of chemical elements" />
      <Table />
    </>
  );
};
