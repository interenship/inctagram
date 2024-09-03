import { cn } from '@/features/utils/cn';
import { VariantProps } from 'class-variance-authority';
import React, { ComponentProps, ElementType } from 'react';
import { buttonVariants } from './buttonVariants';

type Props<E extends ElementType> = ComponentProps<E>
    & VariantProps<typeof buttonVariants>
    & { as?: E, href?: string, fullWidth: boolean }

export const Button = <E extends ElementType = 'button'>({
    variant = 'primary', className, as, fullWidth = false, ...props
}: Props<E>) => {
    const Component = as || 'button';

    return (
        <Component
            className={cn(buttonVariants({ variant }), fullWidth && "w-full", className)}
            {...props}
        />
    );
};