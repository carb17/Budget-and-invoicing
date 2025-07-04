export interface ClientProps {
  _id?: string;
  dni: string;
  name: string;
  surname: string;
  birth: string;
  address: string;
  phone_number: string;
  email: string;
}

export interface ClientFormProps {
  initialData?: ClientProps;
  onSubmit: (data: ClientProps) => void;
}
