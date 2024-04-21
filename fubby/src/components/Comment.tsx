import { Card, CardBody, Text } from "@chakra-ui/react";

type commentProps = {
    comment: string,
    date: string
}

export function Comment({ comment, date }: commentProps) {
    return (
        <Card fontFamily={'Poppins'} mb={10}>
            <CardBody w={'100%'} bg={'gray.200'} >
                <Text>{comment}</Text>
                <Text textAlign={'end'} fontSize={'sm'}>{date}</Text>
            </CardBody>
        </Card>
    );
}