import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import FavouriteButton from './FavouriteButton'
import PriceTag from './PriceTag'

const ProductCard = (props) => {
    const { product, rootProps } = props
    const { name, imageUrl, price, salePrice } = product
    return (
        <Stack
            spacing={{
                base: '4',
                md: '5',
            }}
            {...rootProps}
        >
            <Box position="relative">
                <AspectRatio ratio={4 / 3}>
                    <Image
                        src={imageUrl}
                        alt={name}
                        draggable="false"
                        fallback={<Skeleton />}
                        borderRadius={{
                            base: 'md',
                            md: 'xl',
                        }}
                    />
                </AspectRatio>
                <FavouriteButton
                    position="absolute"
                    top="4"
                    right="4"
                    aria-label={`Add ${name} to your favourites`}
                />
            </Box>
            <Stack>
                <Stack spacing="1">
                    <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
                        {name}
                    </Text>
                    <PriceTag price={price} salePrice={salePrice} currency="USD" />
                </Stack>
                <HStack>
                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                        12 Reviews
                    </Text>
                </HStack>
            </Stack>
            <Stack align="center">
                <Button colorScheme="blue" width="full">
                  Add to planned
                </Button>
            </Stack>
        </Stack>
    )
}

export default ProductCard