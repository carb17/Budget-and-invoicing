import { Button } from "../../../components/common/buttons/Buttons";
import { useState, useEffect } from "react";
import { ClientFormProps } from "../types/types";

export function ClientForm({ initialData, onSubmit }: ClientFormProps) {
  const [dni, setDNI] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (initialData) {
      setDNI(initialData.dni);
      setName(initialData.name);
      setSurname(initialData.surname);
      setBirth(initialData.birth.split("T")[0]);
      setAddress(initialData.address);
      setPhone_number(initialData.phone_number);
      setEmail(initialData.email);
    } else {
      setDNI("");
      setName("");
      setSurname("");
      setBirth("");
      setAddress("");
      setPhone_number("");
      setEmail("");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ dni, name, surname, birth, address, phone_number, email });
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="mb-3">
        <label className="form-label">DNI:</label>
        <input
          type="text"
          className="form-control"
          value={dni}
          required
          onChange={(e) => setDNI(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Apellido:</label>
        <input
          type="text"
          className="form-control"
          value={surname}
          required
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha de nacimiento:</label>
        <input
          type="date"
          className="form-control"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Dirección:</label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Número de teléfono:</label>
        <input
          type="number"
          className="form-control"
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Correo:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="btn btn-primary w-100"
        text="Guardar"
      ></Button>
    </form>
  );
}
