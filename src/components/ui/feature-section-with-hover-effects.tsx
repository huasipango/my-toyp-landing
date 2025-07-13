// src/components/ui/feature-section-with-hover-effects.tsx
"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import {
    IconBuildingBank,
    IconGavel,
    IconAward,
    IconPalette,
    IconLeaf,
    IconPlayBasketball,
    IconUsers,
    IconSoccerField,
    IconWheelchair,
    IconBriefcase,
} from '@tabler/icons-react';

export function FeaturesSectionWithHoverEffects() {
    const features = [
        {
            title: 'Logros Empresariales',
            description: 'Reconoce el crecimiento económico inclusivo y sostenible a través del emprendimiento.',
            icon: <IconBuildingBank className="w-8 h-8" />,
        },
        {
            title: 'Asuntos Políticos, Legales y/o Gubernamentales',
            description: 'Reconoce a quienes se destacan en la actividad política o de gobierno, trabajando por los ODS.',
            icon: <IconGavel className="w-8 h-8" />,
        },
        {
            title: 'Liderazgo y/o Logros Académicos',
            description: 'Aporta a la educación con iniciativas o herramientas que mejoran el sistema educativo.',
            icon: <IconAward className="w-8 h-8" />,
        },
        {
            title: 'Logros Culturales',
            description: 'Premia a artistas cuya obra genera conciencia social con métodos innovadores.',
            icon: <IconPalette className="w-8 h-8" />,
        },
        {
            title: 'Liderazgo Ambiental',
            description: 'Destaca soluciones sostenibles para reducir la huella de carbono.',
            icon: <IconLeaf className="w-8 h-8" />,
        },
        {
            title: 'Logros Deportivos',
            description: 'Reconoce a deportistas que son ejemplo de superación y excelencia.',
            icon: <IconPlayBasketball className="w-8 h-8" />,
        },
        {
            title: 'Liderazgo Humanitario y/o Voluntario',
            description: 'Fomenta sociedades pacíficas e inclusivas mediante voluntariado.',
            icon: <IconUsers className="w-8 h-8" />,
        },
        {
            title: 'Desarrollo Científico y/o Tecnológico',
            description: 'Impulsa la investigación y tecnologías que abordan desafíos sociales.',
            icon: <IconSoccerField className="w-8 h-8" />,
        },
        {
            title: 'Superación y/o Logros Personales (Discapacidad)',
            description: 'Ejemplos de superación ante discapacidad o enfermedad catastrófica.',
            icon: <IconWheelchair className="w-8 h-8" />,
        },
        {
            title: 'Logro Profesional',
            description: 'Destaca cualidades que llevan a roles de liderazgo en sectores públicos y privados.',
            icon: <IconBriefcase className="w-8 h-8" />,
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number; }) => {
    return (
        <div className={cn(
            'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
            (index === 0 || index === 4) && 'lg:border-l',
            index < 4 && 'lg:border-b',
        )}>
            {index < 4 ? (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            ) : (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">{title}</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
        </div>
    );
};
