export interface ProductItem {
  product: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface BudgetProps {
  _id?: string;
  client: string;
  products: ProductItem[];
  total: number;
  status: 'pending' | 'approved' | 'expired' | 'invoiced';
  expirationDate: string | Date;
}

export interface BudgetFormProps {
  initialData?: BudgetProps;
  onSubmit: (data: BudgetProps) => void;
}
