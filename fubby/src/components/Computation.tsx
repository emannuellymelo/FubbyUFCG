import { Box, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Text, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

type CalculatorProps = {
    category: string,
}

export default function Computation({ category }: CalculatorProps) {
    const [months, setMonths] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [result, setResult] = useState<number>(-1);
    const toast = useToast();
    
    const handleChangeMonth = (_valueAsString: string, valueAsNumber: number) => {
        const value = Math.floor(valueAsNumber)
        setMonths(value);
    }

    const handleChangeHours = (_valueAsString: string, valueAsNumber: number) => {
        const value = Math.floor(valueAsNumber)
        setHours(value);
    }

    const handleMonthInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setMonths(parseInt(value))
    }


    const handleHourInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setHours(parseInt(value))
    }

    const handleCategory1 = () => {
        if (months >= 12 && months < 24) {
            setResult(10);
        } else if (months >= 24) {
            setResult(18);
        } else {
            setResult(0);
        }
    }

    const handleCategory2 = () => {
        let calc = 0;
        if (hours == 10 || hours == 20) {
            calc = Math.floor(months / 3) * Math.floor(hours / 10);
            if (calc > 16) {
                calc = 16;
            }
        } setResult(calc);
    }

    const handleCategory3 = () => {
        let calc = 0;
        if (months >= 6) {
            calc = Math.floor(months / 6) * 4;
            if (calc > 16) {
                calc = 16;
            }
        }
        setResult(calc)
    }

    const handleCategory4 = () => {
        let calc = 0;
        const minimum = 300;
        const weeks = 4;
        const totalHours = hours * weeks * months;
        if (totalHours >= minimum) {
            calc = Math.floor(totalHours / 60);
            if (calc > 18) {
                calc = 18;
            }
        }
        setResult(calc)
    }

    const handleCategory5 = () => {
        let calc = 0;
        const minimum = 15;
        if (hours >= minimum) {
            calc = Math.floor(hours / minimum);
            if (calc > 16) {
                calc = 16;
            }
        }
        setResult(calc);
    }

    const handleCategory6 = () => {
        let calc = 0;
        const minimum = 30;
        if (hours >= minimum) {
            calc = Math.floor(hours / minimum);
            if (calc > 8) {
                calc = 8;
            }
        }
        setResult(calc);
    }

    const handleCategory7 = () => {
        let calc = 0;
        if (months >= 6) {
            calc = Math.floor(months / 6) * 2;
            if (calc > 8) {
                calc = 8;
            }
        }
        setResult(calc)
    }

    const handleCalculate = () => {
        switch (category) {
            case "option1":
                handleCategory1();
                break;
            case "option2":
                handleCategory2();
                break;
            case "option3":
                handleCategory3();
                break;
            case "option4":
                handleCategory4();
                break;
            case "option5":
                handleCategory5();
                break;
            case "option6":
                handleCategory6();
                break;
            case "option7":
                handleCategory7();
                break;
            default:
                toast({
                    title: 'Erro ao calcular',
                    description: "Selecione uma atividade e preencha os campos em branco.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
        }
    }

    return (
        <Box>
            <VStack >

                {category == 'option5' || category == 'option6' ? '' :
                    <HStack justify={'center'}>
                        <Text> Meses </Text>
                        <NumberInput borderColor={'gray.400'} onChange={handleChangeMonth}>
                            <NumberInputField onChange={handleMonthInputChange} />
                            <NumberInputStepper>
                                <NumberIncrementStepper borderColor={'gray.400'} />
                                <NumberDecrementStepper borderColor={'gray.400'} />
                            </NumberInputStepper>
                        </NumberInput>
                    </HStack>
                }
                {category == 'option5' || category == 'option6' ?
                    <HStack justify={'center'}>
                        <Text ml={{base: 0, sm: '-5rem'}}> Horas Totais </Text>
                        <NumberInput borderColor={'gray.400'} onChange={handleChangeHours}>
                            <NumberInputField onChange={handleHourInputChange} />
                            <NumberInputStepper>
                                <NumberIncrementStepper borderColor={'gray.400'} />
                                <NumberDecrementStepper borderColor={'gray.400'} />
                            </NumberInputStepper>
                        </NumberInput>
                    </HStack>
                    :
                    <HStack justify={'center'}>
                        <Text ml={{base: 0, sm: '-5rem'}}> Horas Semanais </Text>
                        <NumberInput borderColor={'gray.400'} onChange={handleChangeHours}>
                            <NumberInputField onChange={handleHourInputChange} />
                            <NumberInputStepper>
                                <NumberIncrementStepper borderColor={'gray.400'} />
                                <NumberDecrementStepper borderColor={'gray.400'} />
                            </NumberInputStepper>
                        </NumberInput>
                    </HStack>
                }
                <Button ml={'4%'} mt={'1rem'} colorScheme="blue" onClick={handleCalculate}>Calcular</Button>
            </VStack>
            {result >= 0 ?
                <VStack>
                    <Text ml={'4%'} mt={'1rem'}>Você pode aproveitar até {result} créditos</Text>
                </VStack>
                : ''
            }
        </Box>
    );
}