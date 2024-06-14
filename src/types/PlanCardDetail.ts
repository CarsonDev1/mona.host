export interface FeatureProps {
  description: string;
  tooltip: string;
}

export interface InformationProps {
  feature_tooltip: string;
  features: FeatureProps[];
  securities: FeatureProps[];
  services: FeatureProps[];
  specifications: FeatureProps[];
}

export interface PlanDetails {
  _id: string;
  product: string;
  name: string;
  salePrice: number;
  basePrice: number;
  period: number;
  discount: number;
  upSell: boolean;
  information: InformationProps;
  createdAt: string;
  type?: string;
}
