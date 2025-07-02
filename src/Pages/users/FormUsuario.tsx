import { Navbar } from "../../components/layout/navbar/Navbar";
import { OpcionesMenu } from "../../components/layout/menu/OpcionesMenu";
import { Footer } from "../../components/layout/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { UsuarioForm } from "../../components/users/UsuarioForm";
import { useUsuario } from "../../hooks/users/useUsuario";

export function FormUsuario() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { user, guardarUsuario, loading } = useUsuario(_id);

  const handleSubmit = async (data: any) => {
    if (_id) {
      console.log("ID recibido en FormUsuario:", _id);

      await guardarUsuario(data);
    } else {
      await guardarUsuario(data);
    }
    navigate("/Usuarios");
  };

  return (
    <>
      <Navbar />
      <OpcionesMenu />
      <div className="container mt-4">
        <h2 className="text-center mb-3">
          {_id ? "Editar usuario" : "Agregar usuario"}
        </h2>
        {loading ? (
          <div>Cargando usuario...</div>
        ) : (
          <UsuarioForm initialData={user} onSubmit={handleSubmit} />
        )}
      </div>
      <Footer />
    </>
  );
}
