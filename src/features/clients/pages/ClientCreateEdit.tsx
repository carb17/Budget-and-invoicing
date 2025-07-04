import { Layout } from "../../../layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { ClientForm } from "../components/ClientForm";
import { useClient } from "../hooks/UseClient";

export function ClientCreateEdit() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { client, saveClient, loading } = useClient(_id);

  const handleSubmit = async (data: any) => {
    if (_id) {
      await saveClient(data);
    } else {
      await saveClient(data);
    }
    navigate("/Clients");
  };

  return (
    <>
      <Layout>
        <div className="container mt-4">
          <h2 className="text-center mb-3">
            {_id ? "Editar cliente" : "Agregar cliente"}
          </h2>
          {loading ? (
            <Layout>
              <div>Cargando cliente...</div>
            </Layout>
          ) : (
            <ClientForm initialData={client} onSubmit={handleSubmit} />
          )}
        </div>
      </Layout>
    </>
  );
}
