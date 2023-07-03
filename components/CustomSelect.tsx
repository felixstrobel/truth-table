import { useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import HtmlIcon from "@/components/icons/HtmlIcon";
import LatexIcon from "@/components/icons/LatexIcon";
import { Select } from "chakra-react-select";

const options: CustomSelectOption[] = [
    { label: <HtmlIcon boxSize={8} />, value: "HTML" },
    { label: <ExternalLinkIcon boxSize={4} />, value: "Link" },
    { label: <LatexIcon boxSize={10} />, value: "Latex" },
];

interface CustomSelectOption {
    label: any;
    value: string;
}

const CustomSelect = () => {
    const initRef = useRef<any>();
    const [activeOption, setActiveOption] = useState<CustomSelectOption>(options[0]);

    return (
        <Select
            chakraStyles={{ control: () => ({ m: 2, h: 12 }) }}
            colorScheme={"neutral"}
            options={options.filter((option) => option.value !== activeOption.value)}
        />
        // <Popover colorScheme={"neutral"} placement={"bottom-end"} initialFocusRef={initRef}>
        //     {({ isOpen, onClose }) => (
        //         <>
        //             <Box m={2}>
        //                 <PopoverTrigger>
        //                     <Button colorScheme={"neutral"} h={12} borderEndRadius={0}>
        //                         {activeOption.icon} <Text mx={2}>{activeOption.text}</Text>
        //                         {isOpen ? (
        //                             <ChevronUpIcon boxSize={5} />
        //                         ) : (
        //                             <ChevronDownIcon boxSize={5} />
        //                         )}
        //                     </Button>
        //                 </PopoverTrigger>
        //                 <IconButton
        //                     colorScheme={"neutral"}
        //                     ml={0.5}
        //                     h={12}
        //                     w={12}
        //                     borderStartRadius={0}
        //                     icon={<CopyIcon boxSize={4} />}
        //                     aria-label={"copy the truth table as " + activeOption.text}
        //                 />
        //             </Box>
        //             <PopoverContent w={"4xs"}>
        //                 <PopoverArrow />
        //                 <PopoverBody display={"flex"} flexDir={"column"} m={0} p={0}>
        //                     {options
        //                         .filter((option) => option.text !== activeOption.text)
        //                         .map((option: CustomSelectOption) => {
        //                             return (
        //                                 <Button
        //                                     colorScheme={"neutral"}
        //                                     ref={initRef}
        //                                     key={option.text}
        //                                     borderRadius={0}
        //                                     flexDir={"row"}
        //                                     justifyContent={"start"}
        //                                     onClick={() => {
        //                                         setActiveOption(option);
        //                                         onClose();
        //                                     }}
        //                                 >
        //                                     {option.icon}
        //                                     <Text ml={4}>{option.text}</Text>
        //                                 </Button>
        //                             );
        //                         })}
        //                 </PopoverBody>
        //             </PopoverContent>
        //         </>
        //     )}
        // </Popover>
    );
};

export default CustomSelect;
