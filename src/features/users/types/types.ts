export interface UserProps {
  _id: string;
  email: string;
  role: string;
}

export interface UserFormProps {
  initialData?: UserProps;
  password?: string;
  onSubmit: (data: { email: string; password: string; role: string }) => void;
}
