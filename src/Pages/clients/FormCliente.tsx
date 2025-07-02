import { Navbar } from "../../components/layout/navbar/Navbar";
import { OpcionesMenu } from "../../components/layout/menu/OpcionesMenu";
import { Footer } from "../../components/layout/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { ClienteForm } from "../../components/clients/ClienteForm";
import { useCliente } from "../../hooks/clients/useCliente";

export function FormCliente() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { client, guardarCliente, loading } = useCliente(_id);

  const handleSubmit = async (data: any) => {
    if (_id) {
      await guardarCliente(data);
    } else {
      await guardarCliente(data);
    }
    navigate("/Clientes");
  };

  return (
    <>
      <Navbar />
      <OpcionesMenu />
      <div className="container mt-4">
        <h2 className="text-center mb-3">
          {_id ? "Editar cliente" : "Agregar cliente"}
        </h2>
        {loading ? (
          <div>Cargando cliente...</div>
        ) : (
          <ClienteForm initialData={client} onSubmit={handleSubmit} />
        )}
      </div>
      <Footer />
    </>
  );
}
