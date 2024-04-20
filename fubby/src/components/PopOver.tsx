import { InfoIcon } from "@chakra-ui/icons"
import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react"

type popOverProps = {
    title: string,
    description: string
}

export function PopOver({ title, description }: popOverProps) {
    return (
        <Popover isLazy>
            <PopoverTrigger>
                <Button bg={'#EFECFF'}><InfoIcon color={'gray.400'} boxSize={5}/></Button>
            </PopoverTrigger>
            <PopoverContent w={'30rem'} bg={'#D0C6FF'}>
                <PopoverHeader fontWeight='semibold'>{title}</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody textAlign={'justify'}>{description}</PopoverBody>
            </PopoverContent>
        </Popover>
    )
}