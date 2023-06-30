import { useRef, useState } from "react";
import {
    Box,
    Button,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import HtmlIcon from "@/components/icons/HtmlIcon";
import LatexIcon from "@/components/icons/LatexIcon";

const options: CustomSelectOption[] = [
    { icon: <HtmlIcon boxSize={8} />, text: "HTML" },
    { icon: <ExternalLinkIcon boxSize={4} />, text: "Link" },
    { icon: <LatexIcon boxSize={10} />, text: "Latex" },
];

interface CustomSelectOption {
    icon: any;
    text: string;
}

const CustomSelect = () => {
    const initRef = useRef<any>();
    const [activeOption, setActiveOption] = useState<CustomSelectOption>(options[0]);

    return (
        <Popover colorScheme={"neutral"} placement={"bottom-end"} initialFocusRef={initRef}>
            {({ isOpen, onClose }) => (
                <>
                    <Box my={2}>
                        <PopoverTrigger>
                            <Button colorScheme={"neutral"} h={12} borderEndRadius={0}>
                                {activeOption.icon} <Text mx={2}>{activeOption.text}</Text>
                                {isOpen ? (
                                    <ChevronUpIcon boxSize={5} />
                                ) : (
                                    <ChevronDownIcon boxSize={5} />
                                )}
                            </Button>
                        </PopoverTrigger>
                        <IconButton
                            colorScheme={"neutral"}
                            ml={0.5}
                            h={12}
                            w={12}
                            borderStartRadius={0}
                            icon={<CopyIcon boxSize={4} />}
                            aria-label={"copy the truth table as " + activeOption.text}
                        />
                    </Box>
                    <PopoverContent w={"4xs"}>
                        <PopoverArrow />
                        <PopoverBody display={"flex"} flexDir={"column"} m={0} p={0}>
                            {options
                                .filter((option) => option.text !== activeOption.text)
                                .map((option: CustomSelectOption) => {
                                    return (
                                        <Button
                                            colorScheme={"neutral"}
                                            ref={initRef}
                                            key={option.text}
                                            borderRadius={0}
                                            flexDir={"row"}
                                            justifyContent={"start"}
                                            onClick={() => {
                                                setActiveOption(option);
                                                onClose();
                                            }}
                                        >
                                            {option.icon}
                                            <Text ml={4}>{option.text}</Text>
                                        </Button>
                                    );
                                })}
                        </PopoverBody>
                    </PopoverContent>
                </>
            )}
        </Popover>
    );
};

export default CustomSelect;
