import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableDocIn from "../../components/Tables/TableDocIn";
import TableOne from "../../components/Tables/TableOne";
import TableThree from "../../components/Tables/TableThree";
import TableTwo from "../../components/Tables/TableTwo";
import DefaultLayout from "../../layout/DefaultLayout";


const Documents = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Documents" />

      <div className="flex flex-col gap-10">
        <TableDocIn />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Documents;
