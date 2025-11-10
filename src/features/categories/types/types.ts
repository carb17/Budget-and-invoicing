export interface CategoryProps {
  _id?: string;
  name: string;
  description: string;
  code: string;
  active: boolean;
}

export interface CategoryFormProps {
  initialData?: CategoryProps;
  onSubmit: (data: CategoryProps) => void;
}
