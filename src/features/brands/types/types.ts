export interface BrandProps {
  _id?: string;
  name: string;
  description: string;
  active: boolean;
}

export interface BrandFormProps {
  initialData?: BrandProps;
  onSubmit: (data: BrandProps) => void;
}
