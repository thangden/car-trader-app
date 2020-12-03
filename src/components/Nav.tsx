import { Box, Container, Flex, Image, Link, Select } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function Nav() {
	const { pathname } = useRouter();
	return (
		<Box
			as="header"
			borderTop="6px solid"
			borderTopColor="teal.500"
			bg="white"
			w="full"
		>
			<Container maxW="xl" centerContent>
				<Flex
					alignItems="center"
					justifyContent="space-between"
					pt={4}
					pb={4}
					w="full"
					px={8}
					h={16}
				>
					<Flex align="center">
						<NextLink href="/" passHref>
							<Link
								title="Car Trader - Icons made by Kiranshastry from www.flaticon.com"
								mr={8}
								_focus={{ outline: 'none' }}
							>
								<Image
									boxSize={8}
									src="/logo.png"
									alt="Car Trader - Icons made by Kiranshastry from www.flaticon.com"
								/>
							</Link>
						</NextLink>
						<NextLink href="/">
							<Link
								mr={4}
								p={1}
								fontWeight="semibold"
								color={pathname === '/' ? 'teal.500' : 'black'}
							>
								Home
							</Link>
						</NextLink>
						<NextLink href="/faqs">
							<Link
								p={1}
								fontWeight="semibold"
								color={pathname === '/faqs' ? 'teal.500' : 'black'}
							>
								FAQs
							</Link>
						</NextLink>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
