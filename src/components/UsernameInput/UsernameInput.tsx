import { TextField } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import { Color } from "@react-types/color";
import React, { FC, useState } from "react";

import { TextStyleOptions, TextStyleProps } from "./../TextStyleOptions";

interface UsernameInputProps extends Omit<TextStyleProps, "onColorChange"> {
    text?: string;
    label: string;
}

const UsernameInput: FC<UsernameInputProps> = ({ text, isBold, isItalics, label }) => {
    const [nameValue, setNameValue] = useState(text);

    const handleButtonChange = (options: { isBold?: boolean; isItalics?: boolean } | undefined) => {
        // eslint-disable-next-line no-console
        console.log(options);
    };

    const handleColorChange = (color: Color) => {
        // eslint-disable-next-line no-console
        console.log(color.toFormat("hex"));
    };

    return (
        <Flex gap="size-200" alignItems="end" direction="row">
            <TextField label={label} onChange={setNameValue} value={nameValue} />
            <TextStyleOptions
                onChange={handleButtonChange}
                onColorChange={handleColorChange} // undefined to push onColorChange={onColorChange}
                isBold={isBold}
                isItalics={isItalics}
            />
        </Flex>
    );
};

export { UsernameInput };
