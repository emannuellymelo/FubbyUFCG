import { Button, Card, CardBody, Input, Text, VStack } from "@chakra-ui/react";

type commentProps = {
    comment: string,
    date: string
}

export function Comment({ comment, date }: commentProps) {
    return (
        <Card w={'45rem'} fontFamily={'Poppins'} mb={10}>
            <CardBody w={'100%'} bg={'gray.200'} >
                <Text>{comment}</Text>
                <Text textAlign={'end'} fontSize={'sm'}>{date}</Text>
            </CardBody>
        </Card>
    );
}