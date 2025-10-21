'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
    params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
    const router = useRouter();
    const [companyId, setCompanyId] = useState<string | null>(null);

    useEffect(() => {
        const fetchParams = async () => {
            const resolvedParams = await params;
            if (resolvedParams && resolvedParams.id) {
                setCompanyId(resolvedParams.id);
            }
        };

        fetchParams();
    }, [params]);

    if (!companyId) {
        return <div>Loading...</div>;
    }

    return (
        <PromotionFormModal
            companyId={companyId}
            show={true}
            onClose={() => router.back()}
        />
    );
}


