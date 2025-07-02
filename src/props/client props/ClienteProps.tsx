export interface ClienteProps {
  _id?: string;
  dni: string;
  name: string;
  surname: string;
  birth: string;
  address: string;
  phone_number: string;
  email: string;
}

export interface ClienteFormProps {
  initialData?: ClienteProps;
  onSubmit: (data: ClienteProps) => void;
}
