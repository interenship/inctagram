import { cva } from "class-variance-authority";

export const buttonVariants = cva('box-border min-w-24 min-h-9 px-6 py-[6px] rounded-sm text-white disabled:cursor-not-allowed', {
    variants: {
        variant: {
            primary: [
                'bg-accent-500',
                'active:bg-accent-700',
                'hover:bg-accent-100',
                'focus:outline focus:outline-2 focus:outline-accent-700',
                'disabled:bg-accent-900'
            ],
            secondary: [
                'bg-dark-300',
                'active:bg-[#212121]',
                'hover:bg-dark-100',
                'focus:outline focus:outline-2 focus:outline-accent-300',
                'disabled:bg-dark-500'
            ],
            outline: [
                'bg-transparent',
                'text-accent-500',
                'border border-solid border-accent-500',
                'active:text-accent-700 active:border-accent-700',
                'hover:text-accent-100 hover:border-accent-100',
                'focus:outline focus:outline-1 focus:outline-accent-700',
                'disabled:text-accent-900 disabled:border-accent-900',
            ],
            text: [
                'bg-transparent',
                'text-accent-500',
                'active:text-accent-700',
                'hover:text-accent-100',
                'focus:outline focus:outline-2 focus:outline-accent-700',
                'disabled:text-accent-900',
            ],
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
});