
import { notFound } from 'next/navigation';
import PromotionForm from '@/app/components/promotion-form';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

 
  if (!id) {
    notFound(); 
  }

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
}

