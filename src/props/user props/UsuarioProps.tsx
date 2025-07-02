export interface UsuarioProps {
  _id: string;
  email: string;
  role: string;
}

export interface UsuarioFormProps {
  initialData?: UsuarioProps;
  password?: string;
  onSubmit: (data: { email: string; password: string; role: string }) => void;
}
