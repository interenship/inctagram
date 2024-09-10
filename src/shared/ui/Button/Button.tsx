import { cn } from '@/features/utils/cn';
import { VariantProps } from 'class-variance-authority';
import React, { ComponentProps, ElementType } from 'react';
import { buttonVariants } from '.';
import { Slot } from '@radix-ui/react-slot';

type Props = ComponentProps<'button'>
    & VariantProps<typeof buttonVariants>
    & { asChild?: boolean, fullWidth?: boolean }

export const Button = ({
    variant = 'primary', className, asChild = false, fullWidth = false, ...props
}: Props) => {
    const Component = asChild ? Slot : "button"

    return (
        <Component
            className={cn(buttonVariants({ variant }), fullWidth && "w-full", className)}
            {...props}
        />
    );
};