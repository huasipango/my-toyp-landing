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
    IconLicense,
    IconWheelchair,
    IconBriefcase,
} from '@tabler/icons-react';

export function FeaturesSectionWithHoverEffects() {
    const features = [
        {
            title: 'Logros Empresariales',
            description: 'Se evaluará el impacto económico generado, la innovación en modelos de negocio y la capacidad de crear empleo sostenible. La métrica principal será el crecimiento y la sostenibilidad de la empresa o emprendimiento.',
            icon: <IconBuildingBank className="w-8 h-8" />, 
        },
        {
            title: 'Asuntos Políticos, Legales y/o Gubernamentales',
            description: 'Se valorará la influencia positiva en políticas públicas, la promoción de la participación ciudadana y la gestión ética. La métrica será el alcance y la efectividad de las acciones implementadas.',
            icon: <IconGavel className="w-8 h-8" />, 
        },
        {
            title: 'Liderazgo y/o Logros Académicos',
            description: 'Se reconocerá la excelencia académica, la obtención de becas, premios o publicaciones, y el liderazgo en proyectos educativos. La métrica será el nivel de reconocimiento y el impacto en la comunidad educativa.',
            icon: <IconAward className="w-8 h-8" />, 
        },
        {
            title: 'Logros Culturales',
            description: 'Se evaluará la originalidad, la proyección nacional o internacional y la capacidad de generar conciencia social a través del arte. La métrica será el alcance y la repercusión de la obra cultural.',
            icon: <IconPalette className="w-8 h-8" />, 
        },
        {
            title: 'Liderazgo Ambiental',
            description: 'Se medirá la implementación de soluciones sostenibles, la reducción de huella ecológica y la educación ambiental. La métrica será el impacto ambiental cuantificable y la replicabilidad de la iniciativa.',
            icon: <IconLeaf className="w-8 h-8" />, 
        },
        {
            title: 'Logros Deportivos',
            description: 'Se evaluará el rendimiento competitivo, la superación personal y el ejemplo de disciplina. La métrica será la obtención de títulos, récords o reconocimientos deportivos.',
            icon: <IconPlayBasketball className="w-8 h-8" />, 
        },
        {
            title: 'Liderazgo Humanitario y/o Voluntario',
            description: 'Se valorará la capacidad de movilizar voluntarios, la creación de proyectos solidarios y el impacto social directo. La métrica será la cantidad de beneficiarios y la sostenibilidad de las acciones.',
            icon: <IconUsers className="w-8 h-8" />, 
        },
        {
            title: 'Desarrollo Científico y/o Tecnológico',
            description: 'Se evaluará la innovación, la aplicación práctica de conocimientos y la solución de problemas sociales mediante ciencia o tecnología. La métrica será la implementación y el alcance de la solución.',
            icon: <IconLicense className="w-8 h-8" />, 
        },
        {
            title: 'Superación y/o Logros Personales (Discapacidad)',
            description: 'Se reconocerá la resiliencia, la capacidad de inspirar y la superación de barreras físicas o sociales. La métrica será el impacto en la comunidad y el ejemplo de vida.',
            icon: <IconWheelchair className="w-8 h-8" />, 
        },
        {
            title: 'Logro Profesional',
            description: 'Se evaluará el ascenso profesional, el liderazgo en equipos y la contribución a la excelencia organizacional. La métrica será el nivel de responsabilidad alcanzado y los resultados obtenidos.',
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
