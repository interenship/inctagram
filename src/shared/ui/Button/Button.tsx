import { cn } from '@/features/utils/cn';
import { VariantProps } from 'class-variance-authority';
import React, { ComponentProps, ElementType } from 'react';
import { buttonVariants } from '.';
import { Slot } from '@radix-ui/react-slot';

type Props = ComponentProps<'button'>
    & VariantProps<typeof buttonVariants>
    & { asChild?: boolean, fullWidth?: boolean }

export const Button = (props: Props) => {
    const {
        variant = 'primary', className, asChild = false, fullWidth = false, ...restProps
    } = props;

    const Component = asChild ? Slot : "button";

    return (
        <Component
            className={cn(buttonVariants({ variant }), fullWidth && "w-full", className)}
            {...restProps}
        />
    );
};