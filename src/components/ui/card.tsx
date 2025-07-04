import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={twMerge(
				'rounded-xl border border-border bg-background text-card-foreground shadow',
				className,
			)}
			{...props}
		/>
	)
})

Card.displayName = 'Card'

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={twMerge('flex flex-col space-y-1.5 p-6', className)}
		{...props}
	/>
))

CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
	HTMLHeadingElement,
	React.ComponentPropsWithoutRef<'h3'>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={twMerge(
			'lg:text-lg text-base font-semibold leading-none tracking-tight text-primary dark:text-primary-foreground',
			className,
		)}
		{...props}
	/>
))

CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={twMerge(
			'text-sm text-secondary-foreground line-clamp-3',
			className,
		)}
		{...props}
	/>
))

CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={twMerge('p-6 pt-0', className)} {...props} />
))

CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={twMerge('flex items-center p-6 pt-0', className)}
		{...props}
	/>
))

CardFooter.displayName = 'CardFooter'

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
}
