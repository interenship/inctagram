import { cn } from '@/features/utils/cn';
import { VariantProps } from 'class-variance-authority';
import React, { ComponentProps } from 'react';
import { buttonVariants } from './buttonVariants';
import Link from 'next/link';

type Props = ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asLink: boolean }

export const Button = ({ variant = 'primary', className, asLink = false, ...props }: Props) => {
    return (
        <button
            className={cn(buttonVariants({ variant }), className)}
            {...props}
        >{asLink ? <Link href={'/'}>{props.children}</Link> : props.children}</button>
    );
};