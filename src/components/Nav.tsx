import { Flex, Icon, Link } from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';
import { FaCarSide } from 'react-icons/fa';

export function Nav() {
	return (
		<Flex
			alignItems="center"
			justifyContent="space-between"
			pt={4}
			pb={4}
			maxW="1250px"
			margin="0 auto"
			w="full"
			px={8}
			h="70px"
		>
			<Flex>
				<Icon as={FaCarSide} boxSize={6} mr={8} />
				<NextLink href="/">
					<Link mr={4}>Home</Link>
				</NextLink>
				<NextLink href="/faq">
					<Link>FAQs</Link>
				</NextLink>
			</Flex>
		</Flex>
	);
}
