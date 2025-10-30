import { GetServerSideProps } from 'next';
import React from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: { id: string };
}
export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const { id } = context.params || {};

  const idStr = Array.isArray(id) ? id[0] : id ?? ''; 

  return {
    props: {
      params: { id: idStr },
    },
  };
};

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
}
