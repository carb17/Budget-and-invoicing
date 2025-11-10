export interface ProductProps {
  _id?: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  purchase_price: number;
  sale_price: number;
  current_stock: number;
  min_stock: number;
  unit_measurement: string;
  code: string;
  active: boolean;
}

export interface ProductFormProps {
  initialData?: ProductProps;
  onSubmit: (data: ProductProps) => void;
}
