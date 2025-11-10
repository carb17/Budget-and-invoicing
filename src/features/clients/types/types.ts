export interface ClientProps {
  _id?: string;
  name: string;
  surname: string;
  dni: number;
  address: string;
  phone_number: string;
  active: boolean;
}

export interface ClientFormProps {
  initialData?: ClientProps;
  onSubmit: (data: ClientProps) => void;
}
