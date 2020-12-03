import { Avatar, HStack, Link } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { forwardRef } from 'react';
import { getAsString } from '../common';

export function Pagination({ totalPages }: { totalPages: number }) {
	const { query } = useRouter();
	if (totalPages <= 1) {
		return null;
	}
	return (
		<HStack spacing={2} justify="flex-end">
			{Array(totalPages)
				.fill(null)
				.map((_, i) => i + 1)
				.map((page, index) => {
					return page === parseInt(getAsString(query.page) || '1') ? (
						<Avatar
							key={page}
							name={page.toString()}
							size="sm"
							bg="teal.500"
							color="white"
						/>
					) : (
						<PaginationItem key={page} page={page} query={query} />
					);
				})}
		</HStack>
	);
}

export interface PaginationItemProps {
	page: number;
	query: ParsedUrlQuery;
}

const PaginationItem = forwardRef<HTMLAnchorElement, PaginationItemProps>(
	({ page, query, ...props }, ref) => (
		<NextLink
			passHref
			href={{
				pathname: '/cars',
				query: { ...query, page },
			}}
			shallow
		>
			<Link
				_hover={{ textDecoration: 'none' }}
				borderRadius="full"
				{...props}
				ref={ref}
			>
				<Avatar name={page.toString()} size="sm" bg="white" color="black" />
			</Link>
		</NextLink>
	)
);
